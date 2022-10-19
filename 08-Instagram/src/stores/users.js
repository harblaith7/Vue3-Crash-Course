import { ref } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from "../supabase"

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref("")
  const loading = ref(false)
  const loadingUser = ref(false)

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (credentials) => {
    const {email, password} = credentials

    if(!validateEmail(email)){
      return errorMessage.value = "Email is invalid"
    }

    if(!password.length){
      return errorMessage.value = "Password cannot be empty"
    }

    loading.value = true;

    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if(error) {
      loading.value = false;
      return errorMessage.value = error.message
    }

    const {data: existingUser} = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()
    
    user.value = {
      email: existingUser.email,
      username: existingUser.username,
      id: existingUser.id
    }
    loading.value = false;
    errorMessage.value = ""
  }

  const handleSignup = async (credentials) => {
    const {email, password, username} = credentials;

    if(password.length < 6){
      return errorMessage.value = "Password length is too short"
    }

    if(username.length < 4){
      return errorMessage.value = "Username length is too short"
    }

    if(!validateEmail(email)){
      return errorMessage.value = "Email is invalid"
    }

    loading.value = true

    const {data: userWithUsername} = await supabase
      .from("users")
      .select()
      .eq('username', username)
      .single()

    
    if(userWithUsername){
      loading.value = false
      return errorMessage.value = "User already registered"
    }

    errorMessage.value = ""

    const {error} = await supabase.auth.signUp({
      email,
      password
    })

    if(error){
      loading.value = false
      return errorMessage.value = error.message
    }
    
    await supabase.from("users").insert({
      username,
      email
    });

    const {data: newUser} = await supabase
      .from("users")
      .select()
      .eq('email', email)
      .single()

    
    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username
    }

    loading.value = false
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    user.value = null
  }

  const getUser = async () => {
    loadingUser.value = true;
    const {data} = await supabase.auth.getUser();

    if(!data.user) {
      loadingUser.value = false;
      return user.value = null
    }

    const {data: userWithEmail} = await supabase
      .from("users")
      .select()
      .eq("email", data.user.email)
      .single()
    
    user.value = {
      username: userWithEmail.username,
      email: userWithEmail.email,
      id: userWithEmail.id
    }

    loadingUser.value = false
  }

  const clearErrorMessage = () => {
    errorMessage.value = ""
  }

  return { 
    user, 
    errorMessage,
    loading,
    loadingUser,
    user,
    handleLogin, 
    handleSignup, 
    handleLogout, 
    getUser,
    clearErrorMessage
  }
})
