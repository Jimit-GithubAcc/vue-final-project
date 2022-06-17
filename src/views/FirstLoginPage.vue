<template>
    <b-container class="mt-4 login__card">
    <b-card img-src="https://picsum.photos/800/260/?image=3" 
     style=" background-image: linear-gradient(to top, #decac4, #3e5a51); box-shadow: 5px 5px 5px gray;"
    img-alt="Card image" img-top>
         <template>
            <b-button style="position: relative; left:0;" variant="success" class="mx-3" @click="loginAsJobSeeker"> Login As Job Seeker</b-button>
            <b-button style="right:auto;" variant="warning" @click="loginAsEmployer"> Login As Employeer </b-button>
      </template>
      </b-card>
  </b-container>
</template>

<script>
export default {
    methods: {
        loginAsJobSeeker(){
            this.$router.push('/login')
        },
        loginAsEmployer(){
            this.$router.push('/employerlogin')
        }
    }        
}
</script>

<style scoped>

</style>