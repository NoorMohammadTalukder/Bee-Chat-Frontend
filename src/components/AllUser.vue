<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <div class=" col-12 row list mt-3 " >
        <div class="img col-2"><img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt="">
        </div>
        <div class="col-6 ">
           <div class="name m-0">
            <p>{{FirstName}} {{LastName}}</p>
           </div>
           <div class="mb-2  ">
            <button v-on:click="conversation">Chat Now</button>
           </div>
        </div>
    </div>

   







 
</template>

<script>
export default {
  props: ['Id','FirstName', 'LastName','Email'],
  

  data() {
    return {
       results: [],
       userID:null,
    //    x:[],
    };
  },

   emits: ["convo"],
  created() {
    this.userID = this.$store.getters["user/loggedUserId"];
    // console.log(this.userID)
    ///setInterval(this.conversation, 2000);
  },
  methods:{
    async conversation() {
        // this.userID2=this.Id;
// alert()
        this.$store.dispatch("user/addId2", {
            Id2: this.Id,
            
          });

        this.$store.dispatch("user/addChatterName", {
          x: this.FirstName  ,
            
          });
      
        this.$emit('convo', this.FirstName);
    },
    

    
  },

  // mounted() {
  //   setInterval(this.conversation, 2000);
  // },

 

};


</script>

<style scoped>
.list:hover{
  background: rgba(103, 14, 186, 0.499);
}
    button,
a {
  text-decoration: none;
  padding: 0.2rem 0.5rem;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  /* margin-right: 0.5rem; */
  font-size: 10px;
  margin-bottom: 6px;
  /* display: inline-block; */
}

img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.name p{
    /* margin-top: 7px; */
    margin: 0;
}
.list{
  padding-top: 4px;
  height: 4rem;
  transition: 0.3s ease-in;
}
</style>