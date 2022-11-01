<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />

  <div class="row h-75 g-0">
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

    <div class="col-9 bg-danger parent">
      <div class="col-12 w-100 bg-success">
        <h5>{{ loggedMail }}</h5>
      </div>
      <the-conversation
        v-for="x in results2"
        :key="x.Id"
        :Text="x.Text"
        :UserId="x.UserId"
        :UserId2="x.UserId2"
      ></the-conversation>

     

     
        <form  @submit.prevent="sendMsg" action="">
          <div class="input-group mb-3 sticky child">
          <input
          type="text"
          class="form-control"
          placeholder="Enter Your Message"
          aria-label="Enter Your Message"
          aria-describedby="basic-addon2"
          v-model="Text"
        />
        <button type="submit" class="btn btn-primary me-1">Send</button>
      </div>
        </form>
      
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
      // x: [],
      // xx:'',
      loggedMail: "",
      Text:"",
      Id1:"",
      Id2:""
    };
  },

  computed: {
    //  xxx(){
    //   return this.$store.getters.loggedEmail;
    //   this.$store.dispatch('user/addLoggedUser'
    //  }
  },
  created() {
    this.loggedMail = this.$store.getters["user/loggedEmail"];
    this.GetLoggedUser();
  },
  methods: {
    sendMsg(){
     // alert()
      this.Id1=this.$store.getters["user/loggedUserId"];
      this.Id2 = this.$store.getters["user/getId2"];
      fetch(
                "https://localhost:44313/api/create/messsage/user",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    Text: this.Text,
                    UserId: this.Id1,
                    UserId2: this.Id2,
                    
                    }),
                
                }
                )
                .then((response) => {
                    if (!response.ok) {
                    throw new Error("Could not save the data");
                    }else{
                        this.Text="";
                        this.UserId="";
                        this.UserId2="";
                    }
                })
                .catch((error) => {
                    this.error = error;
                    console.log(error);
                }
            );
    },
    async loadUsers() {
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
          //   console.log(data)
          const results = [];
          for (const id in data) {
            results.push({
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
          this.isLoading = false;
          this.error = error;
        });
    },
    async GetLoggedUser() {
      await fetch(
        `https://localhost:44313/api/login/user/${this.loggedMail}/`,
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
          console.log(data.Id);
          // const results = [];
          // for (const id in data) {
          //   results.push({

          //     Id: data[id].Id,
          //     FirstName: data[id].FirstName,
          //     LastName: data[id].LastName,
          //     Email: data[id].Email,
          //   });
          // }
          // this.results = results;
          // console.log(this.results)
          this.$store.dispatch("user/addUserDetail", {
            Id: data.Id,
            FirstName: data.FirstName,
            LastName: data.LastName,
          });
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error;
        });
    },

    convo(value) {
      // alert();
     // console.log(value);
      this.results2 = value;
      this.Id2=value.Id;
      console.log(this.Id2)
      //console.log(this.results2);
    },

    allMessages(){
      this.Id1=this.$store.getters["user/loggedUserId"];
      this.Id2 = this.$store.getters["user/getId2"];
        fetch(
        
        `https://localhost:44313/api/all/coversation/${this.Id1}/${this.Id2}`,
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
              Text: data[id].Text,
              UserId: data[id].UserId,
              UserId2: data[id].UserId2,
             
            });
          }
          this.results2 = results;
        //   console.log(this.results)
        })
        .catch((error) => {
          console.log(error);
          // alert(error)
          //this.isLoading = false;
          //this.error = error;
        });
        // this.$emit('convo', this.results);
    }
  },
  mounted() {
    setInterval(this.loadUsers, 2000);
    setInterval(this.allMessages, 2000);

  },
};
</script>

<style scoped>
/* .sticky{
   position: -webkit-sticky; 
  position: sticky;
  top: -100;
} */

.parent{
  position: relative;
}
.child{
  position: absolute;
    bottom: 0;
}
</style>
