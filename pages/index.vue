<template>

<br>


<div class="container">
    
    <nuxt-link to="/User/create" class="btn btn-success py-1" >Create User</nuxt-link>


         <div v-if="isLoading"  class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>


          <div v-else>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

 
    <tr v-for="(User, index)  in  Users" :key="index">

      <th scope="row">{{ User.id }}</th>
      <td> {{ User.name }}</td>
      <td> {{ User.email }}</td>
      <td> {{ User.password }}</td>
      <td>

<nuxt-link :to="`/user/${User.id}`" class="btn btn-success">  Edit </nuxt-link>
<!-- <a href="" class="btn btn-danger">Delete</a> -->

<button  @click.prevent="deleteUser(User.id)" class="btn btn-danger" >Delete</button>


      </td>
    </tr>
  
  </tbody>
</table>

</div>
</div>

</template>



<script>

import axios from "axios";

export default {

 data() {
  return {
    Users:{

    },
      isLoading:true,
      isLoadingTitle:'Loading...',
      UserId:"",

  };
 },



 mounted(){

this.getUsers();

 },

 methods:{

// gete data
  getUsers(){

    this.isLoading=true;
    axios.get(`http://127.0.0.1:8000/api/user/info`)
        .then(res=>{


          this.isLoading=false;

          this.Users = res.data.data;
           console.log("All User",this.Users);
  


        });

  },





// delete User


deleteUser(UserId){


if(confirm('are you sure')){

  axios.delete(`http://127.0.0.1:8000/api/user/delete/${UserId}`)
  .then(res=>{
  });

}

    // this.isLoading=false;







}



 }//end deleted

}




</script>