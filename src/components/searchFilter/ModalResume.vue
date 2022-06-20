<template>
  <div>
    <b-button v-b-modal.modal-1 class="btn btn-warning" @click="uploadResume">Upload Your Resume</b-button>
    <b-modal
      v-model="showModal"
      id="add-attachments-modal"
      centered
      hide-footer
      title="File Upload"
      :size="filelist.length ? 'lg' : ''">
    <b-form @submit="onSubmit">
      <b-row class="mt-2 px-3">
        <b-col sm="12" xl="8" v-if="this.filelist.length" v-cloak>

          <b-list-group>
            <b-list-group-item class="d-inline-flex p-2" v-for="(file, i) in filelist" :key="i">

              <!--file name input to rename the file before upload-->
              <b-form-input
                  placeholder="File name..."
                  v-model="filelist[i].fileName"
                  required
              />

              <!--file extension-->
              <span class="d-inline-flex align-items-center text-muted ml-1 mr-3">.{{ filelist[i].extension }}</span>

              <b-button variant="outline-danger" size="sm" @click="remove(filelist.indexOf(file))">
                <b-icon-trash></b-icon-trash>
              </b-button>

            </b-list-group-item>
          </b-list-group>

        </b-col>

        <b-col class="file-drop-column my-4 my-xl-0 p-0">
          <div class="file-drop-area bg-light" @dragover="dragover" @drop="drop">

            <input type="file"  name="file-input" id="file-input"
                   class="file-input invisible" @change="onChange"/>

            <label for="file-input" class="w-100 text-center cursor-pointer text-muted m-0 px-3 py-5">
              <p>
                <b-icon-cloud-upload-fill font-scale="3"></b-icon-cloud-upload-fill>
              </p>
              <div>
                <p class=mb-0>Drop your file here</p>
                <p class=mb-0>or <span class=text-info>choose from computer</span></p>
              </div>
            </label>
          </div>
        </b-col>
      </b-row>
      <div class="float-right mt-4">
        <b-button variant="secondary" @click="$bvModal.hide('add-attachments-modal')" class="mr-3">
          Cancel
        </b-button>
        <b-button type="submit" variant="success" class="m-2">
          Upload file
        </b-button>
      </div>
    </b-form>
  </b-modal>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  data() {
    return {
      showModal: false,
      file: '',
      filelist: [],
     };
  },
  methods: {
    uploadResume() {
      this.showModal = true;
    },
    onSubmit(event) {
      event.preventDefault();
    //   const data = axios.post('https://1975-103-240-35-190.in.ngrok.io/user_cv', this.filelist)
      console.log(this.filelist);
         if(!this.filelist.length){
            this.$toast.error("CV not added. ",{ 
                  position: "top-right",
                  timeout : 3000 });
         }
    //   console.log("Data = ", data);
      this.showModal = false;
    },
    onChange(event) {
      const fileArray = [...event.target.files]; 
      fileArray.forEach((file) => {
        const fileName = file.name.replace(/\.[^/.]+$/, "");  
        const extension = file.name.split('.').pop();
        console.log(extension);
        if(extension === 'pdf' || extension === 'PDF' || extension === 'docx' || extension === 'DOCX'){

              if(!this.filelist.length){
                    this.filelist.push({fileName, extension, file}); 
                  } else if(this.filelist.length === 1){
                this.filelist.splice(0,1,{fileName, extension, file});
                console.log(this.filelist);
              }
            }
           else { 
             this.$toast.info(" File extension should be pdf or docx.",{ 
                  position: "top-right",
                  timeout : 3000 });
            }          
        })
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
    },
    drop(event) {
      event.preventDefault();
      this.onChange();
    }
    
  },
};
</script>

<style scoped>
</style>