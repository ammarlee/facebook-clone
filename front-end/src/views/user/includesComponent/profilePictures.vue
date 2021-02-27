<template>
  <div class="text-center">
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

      <div v-if="!overlay">
        <div v-if="user.pics.length >0" >
    <v-row>

        <v-col v-for="(pic,i) in user.pics" :key="i" class="d-flex child-flex" cols="4">
          <v-img :src="pic" :lazy-src="pic" aspect-ratio="1" class="grey lighten-2">
            <template ate v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
    </v-row>
        </div>
      <div v-else>
        <v-row>

        <v-col cols="12">
        <v-alert color="red" outlined type="info">there is no pictures avalible</v-alert>
        </v-col>
        </v-row>
      </div>
      </div>
  </div>
</template>

<script>
import Functions from "../../../../server/api";
export default {
    name:'picturesComponetent',
    props:['userId'],
  data() {
    return {
      user: "",
    };
  },
  async mounted() {
    try {
      this.overlay = true;
      Functions
      let res = await Functions.getCurrentUser(this.userId);
      this.user = res.data.user;
      this.overlay = false;
    } catch (error) {
      this.overlay = false;
      this.errors = error;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>