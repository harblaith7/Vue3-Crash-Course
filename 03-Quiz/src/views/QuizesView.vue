<script setup>
    import {ref, watch} from "vue"
    import Card from "../components/Card.vue"
    import q from "../data/quiz.json"
  
    const search = ref("")
    const quizes = ref(q);
  
    watch(search, () => {
      if(search.value){
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
      } else {
        quizes.value = q
      }
    })
  </script>
  
  <template>
    <div class="container">
      <header>
        <h1>Quizes</h1>
        <input placeholder="Search..." v-model.trim="search" />
      </header>
      <div class="options-container">
        <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
      </div>
    </div>
  </template>
  
  <style scoped>
    header {
      margin-bottom: 10px;
      margin-top: 30px;
      display: flex;
      align-items: center;
    }
  
    header h1 {
      font-weight: bold;
      margin-right: 30px;
    }
  
    header input {
      border: none;
      background-color: rgba(128, 128, 128, 0.104);
      padding: 10px;
      border-radius: 5px;
    }
  
    .container {
      max-width: 1000px;
      margin: 0 auto
    }
  
    .options-container {
      display: flex;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    
  </style>