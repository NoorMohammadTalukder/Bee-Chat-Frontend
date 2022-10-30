<template>
    <form class=" d-flex justify-content-center "  @submit.prevent="register">
     <input type="text" v-model="FirstName" placeholder="First Name">
     <input type="text" v-model="LastName" placeholder="Last Name">
     <input type="text" v-model="Email" placeholder="Email">
     <button type="submit">Submit</button>
    </form>
    <h1>{{FirstName}}</h1>
    <h1>{{LastName}}</h1>
    <h1>{{Email}}</h1>
</template>

<script>
export default {
    data(){
        return{
          FirstName:"",
          LastName:"", 
          Email:"",
        }
    },
    methods:{
      register(){
            
        fetch(
            "https://localhost:44313/api/create/user",
            {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                FirstName: this.FirstName,
                LastName: this.LastName,
                Email: this.Email,
                
                }),
            }
            )
            .then((response) => {
                if (!response.ok) {
                throw new Error("Could not save the data");
                }
            })
            .catch((error) => {
                this.error = error;
                console.log(error);
            });
        }
    }
}
</script>