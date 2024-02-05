<template>
  <div class="container">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="col-md-6">
            <h4>User Login</h4>


            <!-- {{ token.getToken }} -->




            <form @submit.prevent="handleSubmite()">
              <div class="mb-3">
                <label for="Email" class="form-label">Email
                </label>
                <input type="email" v-model="user.email" class="form-control" id="Email">
                <span v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</span>

              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="password">
                <span v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</span>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>

        </div>
      </div>
    </div>
    <div class="col-md-6"></div>
  </div>
</template>

<script setup>

const auth = useAuthStore();
const token = useTokenStore();

const user = reactive({
  email: "",
  password: "",
});


const errors = ref([]);

const handleSubmite = async () => {
  try {

    await auth.login(user);


    return navigateTo("/dashboard");
    //console.log(auth.login);;
  } catch (error) {

    errors.value = error.data.errors;
  };
};









</script>

<style lang="scss" scoped></style>