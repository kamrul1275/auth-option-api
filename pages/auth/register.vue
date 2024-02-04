<template>


    <div class="container">

        <div class="row">

            <div class="col-md-6">

                <h4>User Login</h4>

<form @submit.prevent="Register()"> 
  <div class="mb-3">
    <label for="name" class="form-label">Name 
    </label>
    <input type="text"  v-model="user.name" class="form-control" id="name" >
  </div>


  <div class="mb-3">
    <label for="Email" class="form-label">Email 
    </label>
    <input type="email" v-model="user.email" class="form-control" id="Email" >
  </div>

  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" v-model="user.password" class="form-control" id="password">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

            </div>

            <div class="col-md-5"></div>
        </div>
    </div>

</template>




<script>

import axios from "axios";
export default {


data() {
  return {
    user:{

name:"",
email:"",
password:"",

},
  };
},


isLoading:false,

methods:{

  Register(){

this.isLoading=true;

this.isLoadingTitle="Saving....";

axios.post('http://127.0.0.1:8000/api/register',this.user)
.then(res=>{

  alert('User Register Succesfully');
   console.log("UserInfo:",res);
  
   this.user.name="";
   this.user.email="";
   this.user.password="";


   this.isLoading=false;

  this.isLoadingTitle="loading....";

  return navigateTo('/auth/login');

});
  
//console.log(this.email);

}

}


}


</script>


<style lang="scss" scoped>

</style>