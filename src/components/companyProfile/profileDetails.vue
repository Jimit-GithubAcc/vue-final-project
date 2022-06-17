<template>
  <div>
    <h1>Company Profile Details</h1>
    <b-container class="mr-sm-2 mb-sm-0">
      <b-card no-body class="overflow-hidden main__card" style="">
        <b-row no-gutters>
          <b-col md="6" class="align-self-center">
            <b-card-img
              src="https://picsum.photos/200/200/?image=20"
              alt="Company Logo"
              class="rounded-circle"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Company Name">
              <b-card-text>
                Company Description
              </b-card-text>
              <b-card-text>
                <p><b>Area : </b>Lorem ipsum dolor sit</p>
              </b-card-text>
              <b-card-text>
                <p><b>City : </b>Lorem ipsum dolor sit</p>
              </b-card-text>
              <b-card-text>
                <p><b>State : </b>Lorem ipsum dolor sit</p>
              </b-card-text>
              <b-card-text>
                <p><b>Country : </b>Lorem ipsum dolor sit</p>
              </b-card-text>
              <b-card-text>
                <p><b>Street Info : </b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, excepturi sint. Incidunt labore natus unde iste eos et deserunt sint?</p>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main__card {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    max-width: 940px;
    border: none;
}
.card-title{
    font-weight: bold;
}
.card-img{
    width: 20vh;
}
</style>