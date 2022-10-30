<template>
    <form  @submit.prevent="login" action="">
    <input type="text" placeholder="email" v-model="Email"/>
    <input type="submit" value="login">
    </form>
</template>

<script>
export default {
    data(){
        return{
          
          Email:"",
          successful:false,
        }
    },
    methods:{
        login(){
        alert()
    }
    }
   
}
</script>