<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />

  <div class="row h-75 g-0 z">
    <div class="col-3 all-user shadow-lg p-3">
      <div class="text-center  mb-2 p-0"><h3>Chat List</h3></div>
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

    <div class="col-9  parent convo">
      <div class="col-12 w-100 mt-1">
        <img v-if="chatterName" src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="">
        <span v-if="chatterName" class="shadow-lg bg-white rounded-pill mt-1 me-1 ps-3 pe-3"><b>{{ chatterName }}</b></span>
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
      Id2:"",
      chatterName:""
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
   
    // this.chatterName=this.$store.getters["user/getChatterName"];
    this.GetLoggedUser();
    
  },
  methods: {
    sendMsg(){
     // alert()
      this.Id1=this.$store.getters["user/loggedUserId"];
      this.Id2 = this.$store.getters["user/getId2"];
     
      //console.log("vvv"+ this.chatterName)
     
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
           //if(0!==data[id].Id){
              results.push({
              Id: data[id].Id,
              FirstName: data[id].FirstName,
              LastName: data[id].LastName,
              Email: data[id].Email,
            });
           // }
            
          }
          //console.log(results)
          const UserIndex = results.findIndex(
              (x) => x.Id === this.$store.getters["user/loggedUserId"]
            );
           
            results.splice(UserIndex, 1);
        //context.commit('addProductToCart',product)
           this.results = results;
         // this.results = cc;
           console.log(UserIndex)
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
      this.chatterName = value;
      // this.Id2=value.Id;
      // console.log(this.Id2)
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
    this.loadUsers();
   // setInterval(this.loadUsers, 2000);
    setInterval(this.allMessages, 2000);
    //setInterval(this.chatterName=this.$store.getters["user/getChatterName"], 1000);

  },
};
</script>

<style scoped>
/* .sticky{
   position: -webkit-sticky; 
  position: sticky;
  top: -100;
} */
.all-user{
  background: rgba(255, 255, 255, 0.562);
}
img{
    height: 30px;
    width: 30px;
    border-radius: 50%;
}
.covo{
  margin-left: 10px;
}
.z{
    /* background: linear-gradient(#282727a9, #a3aaa9b6),
    url(https://images.unsplash.com/photo-1666844550308-9b47df48af49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80); */
    background: 
    url(https://images.unsplash.com/photo-1666756144626-127da4bde0d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80);
  background-repeat: no-repeat;
  background-size:cover;
  background-attachment: fixed;
  background-position: center center;
}
.parent{
  position: relative;
}
.child{
  position: absolute;
    bottom: 0;
}
</style>
