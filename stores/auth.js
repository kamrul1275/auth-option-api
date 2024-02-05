import { defineStore } from 'pinia'
import { useTokenStore } from './token';
export const useAuthStore = defineStore('auth', {

  state: () => ({
    user: {},
    // permissions:[],

  }),
  // user save
  persist: {
    paths: ['user'],
  },

  getters: {
    getUser: (state) => state.user,
    // getPermission: (state) => state.permissions,
  },

  actions: {


    // login
    async login(userData) {

      const token = useTokenStore();
      try {
        const data = await $fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          body: { ...userData },
        });
       
        this.user = data.user;
       
      //console.log("Auth_Store:",data.authorization.token);
      token.setToken(data.authorization.token);
      alert("User successfully login");

        return navigateTo("/dashboard");
      } catch (error) {
        throw error;
      }

    },//end login



       // register
    //    async register(userData) {

    //     //alert('oky');

    //     const token = useTokenStore();
    //     try {
    //       const data = await $fetch('http://127.0.0.1:8000/api/register', {
    //         method: 'POST',
    //         body: { ...userData },
    //       });
    //       return navigateTo("/auth/login");
    //     } catch (error) {
    //       throw error;
    //     }
  
    //   },
  





    // logout part

    async logout() {

      //alert('oky');

      const token = useTokenStore();
      try {
        const res = await $fetch('http://127.0.0.1:8000/api/logout', {
          method: 'POST',
          headers: {
            Accept: "application/json",
            authorization: `Bearer ${token.getToken}`,

          },

        });
        token.removeToken();
        console.log('auth_store', res);
        return navigateTo("/auth/login");

      } catch (error) {
        throw error;
      }

    },


}
})