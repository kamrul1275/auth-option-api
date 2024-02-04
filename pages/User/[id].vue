<template>
  <div>
    <h4 class="text-center">User edit</h4>



    <div class="container">

      <div class="row">

        <div class="col-md-6">


          <div v-if="isLoading" class="spinner-border" role="status">
            <span class="visually-hidden">Updating...</span>
          </div>

       
          <div v-else>
           

            <!-- {{ Users.name }} {{ Users.email }} -->
            <form>

              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" v-model="User.name"   class="form-control">
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="User.email" class="form-control">
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="User.password" class="form-control">
              </div>


              <button type="submit" @click.prevent="submiteUpdate()" class="btn btn-primary">Upade</button>
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
//
      },

      UserId: "",
      isLoading: false,
      isLoadingTitle: 'Loading...',
    };

  },

  mounted() {

    this.UserId = this.$route.params.id;

    // alert(this.UserId);

this.getUser(this.UserId);

  },

  methods: {


    getUser(UserId){

      axios.get(`http://127.0.0.1:8000/api/user/edit/${UserId}`)
        .then(res=>{


          // this.isLoading=false;

          this.User = res.data.data;
           console.log("User Edit:",this.User);
  


        });
    },

    submiteUpdate(UserId) {



      //alert('oky up');
      this.isLoading = true;

      this.isLoadingTitle = "Saving....";


      axios.put(`http://127.0.0.1:8000/api/user/update/${this.UserId}`,this.User)
        .then(res => {

          console.log(res.data);
          this.User.name = "";
          this.User.email = "";
          this.User.password = "";


          this.isLoading = false;

          this.isLoadingTitle = "updating....";


        });


    }


  }
}


</script>
  
  
  
<style lang="scss" scoped></style>