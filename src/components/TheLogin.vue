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
          loggedPersonMail:"",
          successful:false,
        }
    },
    methods:{
        async login(){ 
            //this.clicked=true;
           await fetch(
                "https://localhost:44313/api/login/user",
                {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    Email: this.Email,
                   
                    
                    }),
                
                }
                )
                // .then((response) => {
                //     if (!response.ok) {
                //     throw new Error("Could not save the data");
                //     }else{
                //         console.log(response)
                //         this.Email="";
                       
                //     }
                // }).then((data)=>{
                //     console.log("-----")
                //     console.log(data);
                // })
        //         .then((response) => {
        //   if (response.ok) {
        //     this.x= response.json();
        //     console.log("--x--")
        //     console.log(this.x)
        //     //console.log(response)
        //   }
        // })

                          
               // Converting to JSON
            //.then(response => response.json())
            //.then(res)
            
            // Displaying results to console
          
           // .then(json => console.log(json))
            .then((response)=>{
                if(response.ok){
                    this.loggedPersonMail=  this.Email;

                    this.$store.dispatch('user/addLoggedUser',{
                    Email:this.loggedPersonMail,
                    });

                    this.$router.replace('/user')
                }
            })
               

                .catch((error) => {
                    this.error = error;
                    console.log(error);
                }
            );

           // console.log(this.loggedPersonMail)
           

    
                
        }
    }
    
   
}
</script>