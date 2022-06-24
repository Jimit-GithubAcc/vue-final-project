<template>
  <div>
    <b-button v-b-modal.modal-1 class="btn btn-warning" @click="uploadResume">Apply for job</b-button>
    <b-modal
      v-model="showModal"
      id="add-attachments-modal"
      centered
      hide-footer
      title="Show Resume"
      :size="getCVS.length ? 'lg' :''"
    >
      <b-form @submit="onSubmit">
        <b-row class="mt-2 px-3">
          <b-col sm="12" xl="8" v-if="getCVS.length">
            <b-list-group>
               <b-list-group-item
                class="d-inline-flex p-2"
                v-for=" file in getCVS"
                :key="file.id"
              > 
                <input type="radio" name="selectCV" 
                  v-if="file.is_default" 
                  @change="cvId = file.id"
                 class="d-inline-flex m-2"/>
                <!--file name input to rename the file before upload-->
                 {{ file.title }}.pdf
                 
                <!--file extension-->
                <span
                  class="d-inline-flex align-items-center mx-3 ml-1 mr-3"
                  > {{ file.is_default ?'Applicable' : 'NA' }}</span
                ></b-list-group-item>
            </b-list-group>
          </b-col>
      </b-row>
        <div class="float-right mt-4">
          <b-button
            variant="secondary"
            @click="$bvModal.hide('add-attachments-modal')"
            class="mr-3"
          >
            Cancel
          </b-button>
          <b-button type="submit" variant="warning" class="m-2">
            Apply Job
          </b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
// import axios from 'axios';
import { mapGetters,mapActions } from 'vuex';
export default {
  data() {
    return {
      showModal: false,
      cvId:0,
      
    };
  },
  props:["id"],
  computed : {
    ...mapGetters("userjob",["getCVS"]),
  },
  methods: {
    ...mapActions("userjob",["getCVSdata","applyJob"]),
    uploadResume() {
       this.getCVSdata();
      console.log(this.id);
      this.showModal = true;
    },
    onSubmit(event) {
      event.preventDefault();
        console.log(this.id,this.cvId);
       let data = {
               payload :{
                   job_id:this.id, user_cv_id:this.cvId
                   } 
           }
        this.applyJob(data.payload).then((success) => { 
                  console.log(success)
                  this.$toast.success("applied successfully.", { timeout: 3000 });
                  this.showModal = false;
                  this.$router.push("/")
                }).catch((err) => {
                     console.log(err);
                     this.$toast.error("Something wrong" ,{ timeout : 3000 });
                  })
            
        },
  
    dragover(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      this.onChange();
    },
  },
};
</script>

<style scoped></style>
