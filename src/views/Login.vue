<template>
    <div class="back-cont" >
        <img class="top-bg-cont" src="../assets/back_top.svg" />
    <b-container fluid class="cont">
            
        <div class="login-form" style="background-color: turqoise;">
            <div class="heading">
                <h2 class="login-text">
                    Login
                </h2>
            </div>
            
            <div ref="warning" class="form-login-warnings" v-if="errors!=''">{{errors}}</div>
            <b-form @submit="onSubmit">
                <b-form-group
                    id="form-login-email"
                    class="text-input"
                    label="Email"
                    label-for="login-email"
                >
                    <b-form-input
                        id="login-email"
                        v-model="login.email"
                        placeholder="Enter your email"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group
                    id="form-login-password"
                    class="text-input"
                    label="Password"
                    label-for="login-pass"
                >
                    <b-form-input
                        class="mb-4"
                        id="login-pass"
                        v-model="login.pass"
                        type="password"
                        placeholder="Enter your password"
                        required
                    >
                    </b-form-input>
                </b-form-group>
                <b-button
                    type="submit"
                    variant="primary"
                    ref="submitbutton"
                    id="login-button"
                >
                    Login
                </b-button>
            </b-form>
        </div>
    
    </b-container>
    &nbsp;
    <img
      style="width: 100%; margin-top: 87px; margin-bottom: -1px"
      src="../assets/back_img-1.svg"
    />
    </div>
    
    
</template>

<script>
import axios from 'axios';
export default {
    
    data() {
        return {
            login: {
                name: '',
                pass: '',
                remember: false,
            },
            errors: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            
            this.$refs.submitbutton.disabled = true;
            //send email and password
            this.errors = '';
            axios.post(process.env.VUE_APP_API_URL + '/api/login-freelancer', {email: this.login.email, password:this.login.pass})
            .then(res => {
                console.log(Date.now());
                // this.afterSubmit(res.data);
                this.$refs.submitbutton.disabled = false;
                if (this.login.remember) {
                    window.$cookies.set("token", res.data.token, "14d");
                    let _session = {token: res.data.token, exp: "14d"};
                    window.$cookies.set("session", _session, "14d");
                    window.$cookies.set("timestamp", Date.now());
                }else{
                    window.$cookies.set("token", res.data.token, "1d");
                    let _session = {token: res.data.token, exp: "1d"};
                    window.$cookies.set("session", _session, "1d");
                    window.$cookies.set("timestamp", Date.now());
                }
                window.location.href = "/";
            })
            .catch(err => {
                this.$refs.submitbutton.disabled = false;
                console.log(err);
                this.errors = "The name and password you entered did not match our records. Please check and try again...";
            });
            
        },
    }

}
</script>


<style scoped>
    .heading {
        margin-bottom: 1rem;
    }
    .login-text {
        display: inline-block;
        font-family: Muli;
        font-style: normal;
        font-weight: bold;
        font-size: 2.25rem;
        line-height: 2.813rem;
        letter-spacing: 0.04em;
        background: -webkit-linear-gradient(343.95deg, #2d1de5 1.23%, #00a3fc 98.57%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-right: 0.4rem;
    }
    .desc {
        color: #58595b;
        font-size: 0.8rem;
        font-weight: normal;
    }
    .text-input {
        color: #6C63FF;
        font-size: 0.9rem;
        font-weight: bold;
        font-family: 'Open Sans';
    }

    .text-input input {
        border-color: #6C63FF;
        font-size: 0.9rem;
    }

    .input-check {
        font-size: 0.9rem;
        line-height: 1.5rem;
        font-weight: 600;
    }


    #login-button{
        padding: 10px 20px;
        font-weight: 600;
    }
    /* .back-cont {
        position: relative;
        background: linear-gradient(
            328.39deg,
            #2d1de5 -25.59%,
            #5f658e 52.32%,
            #57547d 82.03%
        );
        width: 100%;
        padding-top: 94px;
    } */

    .back-cont {
        padding-top: 20px;
        width: 100%;
        position: relative;
        background-color: #1d2a65;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='640' viewBox='0 0 160 80'%3E%3Cg fill='%23000000' fill-opacity='0.29'%3E%3Cpolygon points='0 10 0 0 10 0'/%3E%3Cpolygon points='0 40 0 30 10 30'/%3E%3Cpolygon points='0 30 0 20 10 20'/%3E%3Cpolygon points='0 70 0 60 10 60'/%3E%3Cpolygon points='0 80 0 70 10 70'/%3E%3Cpolygon points='50 80 50 70 60 70'/%3E%3Cpolygon points='10 20 10 10 20 10'/%3E%3Cpolygon points='10 40 10 30 20 30'/%3E%3Cpolygon points='20 10 20 0 30 0'/%3E%3Cpolygon points='10 10 10 0 20 0'/%3E%3Cpolygon points='30 20 30 10 40 10'/%3E%3Cpolygon points='20 20 20 40 40 20'/%3E%3Cpolygon points='40 10 40 0 50 0'/%3E%3Cpolygon points='40 20 40 10 50 10'/%3E%3Cpolygon points='40 40 40 30 50 30'/%3E%3Cpolygon points='30 40 30 30 40 30'/%3E%3Cpolygon points='40 60 40 50 50 50'/%3E%3Cpolygon points='50 30 50 20 60 20'/%3E%3Cpolygon points='40 60 40 80 60 60'/%3E%3Cpolygon points='50 40 50 60 70 40'/%3E%3Cpolygon points='60 0 60 20 80 0'/%3E%3Cpolygon points='70 30 70 20 80 20'/%3E%3Cpolygon points='70 40 70 30 80 30'/%3E%3Cpolygon points='60 60 60 80 80 60'/%3E%3Cpolygon points='80 10 80 0 90 0'/%3E%3Cpolygon points='70 40 70 60 90 40'/%3E%3Cpolygon points='80 60 80 50 90 50'/%3E%3Cpolygon points='60 30 60 20 70 20'/%3E%3Cpolygon points='80 70 80 80 90 80 100 70'/%3E%3Cpolygon points='80 10 80 40 110 10'/%3E%3Cpolygon points='110 40 110 30 120 30'/%3E%3Cpolygon points='90 40 90 70 120 40'/%3E%3Cpolygon points='10 50 10 80 40 50'/%3E%3Cpolygon points='110 60 110 50 120 50'/%3E%3Cpolygon points='100 60 100 80 120 60'/%3E%3Cpolygon points='110 0 110 20 130 0'/%3E%3Cpolygon points='120 30 120 20 130 20'/%3E%3Cpolygon points='130 10 130 0 140 0'/%3E%3Cpolygon points='130 30 130 20 140 20'/%3E%3Cpolygon points='120 40 120 30 130 30'/%3E%3Cpolygon points='130 50 130 40 140 40'/%3E%3Cpolygon points='120 50 120 70 140 50'/%3E%3Cpolygon points='110 70 110 80 130 80 140 70'/%3E%3Cpolygon points='140 10 140 0 150 0'/%3E%3Cpolygon points='140 20 140 10 150 10'/%3E%3Cpolygon points='140 40 140 30 150 30'/%3E%3Cpolygon points='140 50 140 40 150 40'/%3E%3Cpolygon points='140 70 140 60 150 60'/%3E%3Cpolygon points='150 20 150 40 160 30 160 20'/%3E%3Cpolygon points='150 60 150 50 160 50'/%3E%3Cpolygon points='140 70 140 80 150 80 160 70'/%3E%3C/g%3E%3C/svg%3E");
    }

    .top-bg-cont {
    left: 1%;
    height: 5vw;
    min-height: 64px;
    position: absolute;
    }

    .login-form {
        max-width: 380px;
        margin: 120px auto;
        padding: 2rem 1.7rem;
        background-color: white;
        border-radius: 8px;
    }
    .form-login-warnings {
        
        color: deeppink;
        font-size: 0.9rem;
        margin-bottom: 1.4rem;
    }
    @media screen and (max-width: 768px) {
    .nav p {
        font-size: 0.7rem;
    }
    }
</style>