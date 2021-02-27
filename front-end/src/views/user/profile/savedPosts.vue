<template>
  <v-app>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-container v-if="!overlay">
      <v-row>
        <v-col cols="12">
          <v-card class="mx-auto">
            <v-toolbar color="cyan" dark>
              <v-toolbar-title>saved Posts</v-toolbar-title>
            </v-toolbar>

            <v-list>
              <v-row>
                <template v-for="(post) in posts" style="cursor: pointer">
                  <v-col cols="12" :key="post._id">
                    <v-list-item @click="navegatetoPost(post.postId)">
                      <v-list-item-avatar>
                        <v-img :src="post.img"></v-img>
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title class="text-capitalize font-weight-bold" v-html="post.description">test</v-list-item-title>

                        <v-list-item-action class="flex-row"></v-list-item-action>
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>
                </template>
              </v-row>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Functions from "../../../../server/api";
export default {
  name: "saved-Posts-Page",
  data() {
    return {
      posts: null,
    };
  },
  async mounted() {
    try {
      this.overlay = true;
      const res = await Functions.getSavedPosts(this.$route.params.id);
      this.posts = res.data.savedposts;
      this.overlay = false;
    } catch (error) {
      this.overlay = false;
      this.errors = error;
    }
  },
  methods: {
    navegatetoPost(id) {
      this.$router.push("/singlePost/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>