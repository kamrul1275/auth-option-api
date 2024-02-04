<template>
  <div>
    <h4 class="text-center">User create</h4>



    <div class="container">

      <div class="row">

        <div class="col-md-6">


          <div v-if="isLoading"  class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>


          <div v-else>

            <form>

<div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input type="text" v-model="User.name" class="form-control" >
</div>

<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" v-model="User.email" class="form-control" >
</div>

<div class="mb-3">
  <label for="password" class="form-label">Password</label>
  <input type="password" v-model="User.password" class="form-control" >
</div>


<button type="submit" @click.prevent="submiteHandle()" class="btn btn-primary">Submit</button>
</form>

          </div>

      

        </div>

        <div class="col-md-6"></div>

      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
export default {

  data() {
    return {
      User: {

        name: "",
        email: "",
        password: "",


      },


      isLoading:false,
      isLoadingTitle:'Loading...',
    };
  },



  methods: {

    submiteHandle() {
    
        this.isLoading=true;

        this.isLoadingTitle="Saving....";


        axios.post('http://127.0.0.1:8000/api/user/create',this.User)
        .then(res=>{

          alert('User Create Succesfully');
           console.log("UserInfo:",res);
           this.User.name="";
           this.User.email="";
           this.User.password="";


           this.isLoading=false;

          this.isLoadingTitle="loading....";


        });


  }


}
}


</script>



<style lang="scss" scoped></style>