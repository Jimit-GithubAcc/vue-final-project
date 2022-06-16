<template>
    <b-container>
        <div class="mt-3">
            <h1 class="">Job Categories</h1>
        </div>
        <div>
            <p>Discover Jobs according to your skills.</p>
        </div>
        <b-card-group deck class="jobcard">
      <b-card class="jobcard__col" v-for="i in 10" :key="i">
        <b-card-text class="jobcard__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci voluptatem est? Qui tempora eos et velit voluptate, eveniet id ratione a autem nam, veritatis nesciunt maxime quasi sunt similique!
        </b-card-text>
        
      </b-card>
    </b-card-group>
    </b-container>
</template>

<script>
export default {
        
}
</script>

<style scoped>
.jobcard {
  margin-top: 3%;
}
.jobcard::after {
  content: "";
  display: table;
  clear: both;
}
.jobcard__col {
  float: left;
  width: 23%;
  padding: 0 10px;
  margin: 10px;
}
.jobcard__text {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: hsla(0, 0%, 95%, 0.719);
  padding: 16px;
  text-align: center;
}
@media screen and (max-width: 500px) {
  .jobcard__col {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 700px) {
    .jobcard__col{
        width: 50%;
        float: left;
        margin: 10px;
    }
}
</style>