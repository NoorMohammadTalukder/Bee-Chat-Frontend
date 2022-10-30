<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />

  <div class="row h-100 g-0">
    <div class="col-3 shadow-lg">
      <div class="text-center bg-primary m-0 p-0">All Users</div>
      <all-user
     
        v-for="result in results"
        :key="result.Id"
        :Id="result.Id"
        :FirstName="result.FirstName"
        :LastName="result.LastName"
        :Email="result.Email"
        @convo="convo"
      >
      </all-user>

    </div>

    <div class="col-9  h-100  convo">
      <div class="col-12 w-100  bg-success">
            <h3>NAme</h3>
    </div>
        <the-conversation
        v-for="x in results2"
        :key="x.Id"
        :Text="x.Text"
        :UserId="x.UserId"
        :UserId2="x.UserId2"
        
        ></the-conversation>
    </div>
  </div>
</template>

<script>
import AllUser from "./AllUser.vue";
import TheConversation from "./TheConversation.vue";
export default {
  components: {
    AllUser,
    TheConversation,
  },
  data() {
    return {
      results: [],
      results2: [],
      x: [],
    };
  },
  watch: {
    handler: function () {
      this.loadBikes();
    },
    deep: true,
  },
  //   computed:{
  //     x(){
  //         return this.results;
  //     }
  //   },

  methods: {
    async loadBikes() {
      await fetch("https://localhost:44313/api/all/user", {
        method: "GET",
      })
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
          // console.log(this.results)
        })
        .catch((error) => {
          console.log(error);
          // alert(error)
          this.isLoading = false;
          this.error = error;
        });
    },

     convo(value){
      // alert();
      console.log("resulys");
      this.results2=value;
      console.log( this.results2)
      
    }
  },
  mounted() {
    setInterval(this.loadBikes, 2000);
  },
};
</script>

<style scoped></style>
