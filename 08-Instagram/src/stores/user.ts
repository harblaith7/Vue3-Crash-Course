import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase'

interface User {
    id: number;
    email: string;
    username: string;
}

export const useUserStore = defineStore('counter', () => {
   const user = ref<User | null>(null)
   const errorMessage = ref("")
   const loading = ref(false)

   const handleLogin = async (email: string, password: string) => {
    if(!email || !password){
      return errorMessage.value = "You're missing some information"
    }
  
    try {
      loading.value = true
      const { user: usr, error } = await supabase.auth.signIn({ email, password })

      if (error) throw error

      const {data} = await supabase.from('users').select().eq('email', email).single()

      user.value = {
        id: data.id,
        email: usr.email,
        username: data.username
      }
    } catch (error: any) {
      errorMessage.value = error.error_description || error.message
    } finally {
      loading.value = false
    }
  }

  const handleSignup = async (email: string, password: string, username: string) => {
    if(!email || !password || !username){
      return errorMessage.value = "You're missing some information"
    }
  
    try {
      loading.value = true;
  
      const {data: userWithSameEmail} = await supabase
        .from("users")
        .select()
        .eq('email', email)
        .single();
  
      const {data: userWithSameUsername} = await supabase
        .from("users")
        .select()
        .eq('username', username)
        .single()
  
      if(userWithSameEmail){
        return errorMessage.value = "Email already exists"
      }
  
      if(userWithSameUsername){
        return errorMessage.value = "Username already exists"
      }
  
      const {error, user: usr} = await supabase.auth.signUp({ email, password });


  
      if(user) {
        const newUser = await supabase.from("users").insert({
          username: username,
          email: email,
          authId: usr.id
        })

        user.value = {
          id: newUser.id,
          email: newUser.email,
          username
        }
      }
  
      if (error) throw error
    } catch (error: any) {
      errorMessage.value = error.error_description || error.message
    } finally {
      loading.value = false
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    user.value = null
  }

  const getUser = async () => {
    const data = await supabase.auth.user();
    console.log({data})

    if(!data){
        return user.value = null
    }

    const {data: userWithSameEmail} = await supabase
    .from("users")
    .select()
    .eq('email', data.email)
    .single();

    console.log({userWithSameEmail})

    user.value = {
        username: userWithSameEmail.username,
        email: userWithSameEmail.email,
        id: userWithSameEmail.id
    }
  }

  return {user, loading, errorMessage, handleLogin, handleSignup, handleLogout, getUser}
})
