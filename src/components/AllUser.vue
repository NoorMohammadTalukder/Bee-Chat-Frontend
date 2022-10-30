<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <div class="d-flex">
        <div class="img"><img src="https://media.istockphoto.com/vectors/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-vector-id1130884625?k=20&m=1130884625&s=612x612&w=0&h=OITK5Otm_lRj7Cx8mBhm7NtLTEHvp6v3XnZFLZmuB9o=" alt=""></div>
        <div class="d-flex justify-content-start align-items-center  w-100">
           <div class="name w-50">
            <p>{{FirstName}} {{LastName}}</p>
           </div>
           <div class="ms-5">
            <button v-on:click="conversation">Chat Now</button>
           </div>
        </div>
    </div>







 
</template>

<script>
export default {
  props: ['Id','FirstName', 'LastName','Email'],
  
  methods:{
    conversation(){
        alert();
    }
  }

};
</script>

<style scoped>
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
  font-size: 12px;
  margin-bottom: 6px;
  /* display: inline-block; */
}

img{
    height: 40px;
    width: 40px;
    border-radius: 50%;
}
.name p{
    margin-top: 7px;
}
</style>