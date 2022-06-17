<template>
  <div>
    <user-profile-form></user-profile-form>
    <br />
    <user-education-form></user-education-form>
    <br />
    <hr>
    <b-form>
      <b-row>
        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          class="mt-3 mr-sm-2 mb-sm-4"
          value="accepted"
          v-model="isExperienced"
        >
          <span style="margin: 4px; font-size: 24px;">Are you experienced person </span>
        </b-form-checkbox>
      </b-row>
    </b-form>
    <user-experience-form v-if="isExperienced"></user-experience-form>
    <br>
  </div>
</template>
<script>
import userEducationForm from "./userEducationForm.vue";
import UserExperienceForm from "./userExperienceForm.vue";
import UserProfileForm from "./userProfileForm.vue";
export default {
  components: { userEducationForm, UserProfileForm, UserExperienceForm },
  data() {
    return {
        isExperienced: false,
    }
  },
};
</script>

<style scoped>
*{
    overflow: hidden;
}
</style>