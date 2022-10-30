<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

  <div class="row h-100 g-0">

<div class="col-3 shadow-lg">
    <div class="text-center bg-primary m-0 p-0">All Users</div>
    <all-user class="col "
    
    v-for="result in results"
    :key="result.Id"
    :Id="result.Id"
    :FirstName="result.FirstName"
    :LastName="result.LastName"
    :Email="result.Email"
   >
    
 </all-user>
   
</div>
</div>





  

 

</template>

<script>
import AllUser from './AllUser.vue';
export default {
  components: {
    AllUser,
  },
  data() {
    return {
       results: [],
       x:[],
    };
  },
  watch:{
    
        handler:function(){
            this.loadBikes();
        },
        deep:true
    
  },
//   computed:{
//     x(){
//         return this.results;
//     }
//   },
  
  methods: {
    async loadBikes() {
    await  fetch(
        "https://localhost:44313/api/all/user",
        {
          method: "GET",
        }
      )
        .then((response) => {
          if (response.ok) {
             return response.json();
             //console.log(response)
          }
        })
        .then((data) => {
          // this.isLoading = false;
          
        //   console.log(data)
          const results = [];
          for (const id in data) {
            results.push({
              // id:id,
              // name:data[id].name,
             // rating: data[id].rating,
              Id: data[id].Id,
              FirstName: data[id].FirstName,
              LastName: data[id].LastName,
              Email: data[id].Email,
             
            });
          }
          this.results = results;
          console.log(this.results)
        })
        .catch((error) => {
          console.log(error);
          // alert(error)
          this.isLoading = false;
          this.error = error;
        });
    },
  },
  mounted() {
    setInterval(this.loadBikes,2000)
  },
};
</script>
    
<style scoped>

</style>