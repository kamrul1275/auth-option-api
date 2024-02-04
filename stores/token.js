export const useTokenStore = defineStore('token', {
  
    state: () => ({
        token: null,
        loggedIn: false,
    }),


    getters: {
        getToken: (state) => state.token,
        getStatus: (state) => state.loggedIn,
    },

    setToken(token) {
        this.token = token;
        this.loggedIn = true;
    },

    removeToken() {
        console.log('hiii');
        this.$reset();

    },

    
  })