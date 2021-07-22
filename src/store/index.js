
import Axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        token: '',
        isLoggedIn: false,
        refreshtask: null
    },
    mutations: {},
    actions: {
        setToken ({ commit }, token) {
            commit('setToken', token)
        },

        async refreshToken ({ dispatch }) {
            var ts = window.$cookies.get("timestamp") || 0;
            // console.log("Interval Test");
            // console.log(Date.now()+ " - " + ts + " = " + (Date.now() - ts));
            var interval = Date.now() - ts;
            
            if(window.$cookies.isKey('token')){

                if (window.$cookies.isKey('session') && interval > 10000){
                    // console.log("COOKIES TEST");
                    window.$cookies.set("timestamp", Date.now());
                    ///axios refresh
                    

                    await Axios.get(process.env.VUE_APP_API_URL + '/api/refresh-token', { headers: {"Authorization" : `Bearer ${window.$cookies.get('token')}`} })
                    .then(res => {

                        window.$cookies.set("token", res.data.token, "14d");
                        window.$cookies.set("timestamp", Date.now());
                        let _sess = window.$cookies.get('session');
                        window.$cookies.set("session", _sess, _sess.exp);
                    })
                    .catch(err => {
                        console.log(err);
                        if(err.response.status == 500){
                            dispatch('logout');
                        }
                        
                    });


                    
                    // console.log("POST AXIOS TES");
                }else if(!window.$cookies.isKey('session')){
                    // console.log("NO SESSION");
                    dispatch('logout');
                }
                

            }

            ///dispatch auto refresh
            dispatch('autoRefresh');

        },
        autoRefresh ({ dispatch }) {
            ///dispatch refreshtoken every 15 mininutes
            clearInterval(this.state.refreshtask);
            this.state.refreshtask = setTimeout(() => dispatch('refreshToken'), 900000);
        },
        async logout() {
            await Axios.get(process.env.VUE_APP_API_URL + '/api/refresh-token', { headers: {"Authorization" : `Bearer ${window.$cookies.get('token')}`} })
                    .catch(err => {
                        console.log(err);
                    });
            window.$cookies.remove("token");
            window.$cookies.remove("session");
            window.$cookies.remove("timestamp");

            window.location.href = "/";
        }
        
    },
    modules: {},
    getters: {}

});