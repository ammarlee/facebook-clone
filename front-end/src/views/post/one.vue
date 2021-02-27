<template>
  <div>
    <v-sheet class="mb-3" rounded="lg">
      <v-card class="mx-auto" v-if="post" rounded="lg">
        <!-- new -->
        <v-list two-line class="theListDiv pt-0 pb-0">
          <v-list-item>
            <v-list-item-avatar>
              <v-img class="elevation-6" :src="post.userId.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="pt-0">
              <v-list-item-subtitle class="text-h6 font-weight-bold text-capitalize">
                {{post.userId.name}}
                <div style=" position: absolute;right: 4px;top: 8px;">
                  <slot name="options"></slot>
                </div>
              </v-list-item-subtitle>
              <v-list-item-subtitle>{{post.date}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list-item>
          <v-card-text class="mb-0 mt-0 pb-0 pt-0">
            <div class="my-4 subtitle-1 text-capitalize text-truncate">{{post.description}}</div>
          </v-card-text>
        </v-list-item>
        <div v-if="post.img[0]">
          <v-img @click="goTo(post)" :max-height="heights" :src="post.img[0]"></v-img>
        </div>
        <v-card-actions>
          <v-btn
            :class="{checking:checking}"
            color="deep-purple lighten-2"
            text
            @click="addLike(post)"
          >
            <v-icon class="ico">mdi-heart</v-icon>
          </v-btn>

          <v-btn color="deep-purple lighten-2" text @click="show=!show">
            <v-icon>mdi-comment</v-icon>
            <small>({{post.comments.length}})</small>
          </v-btn>

          <v-btn color="deep-purple lighten-2" text @click="reserve">
            <v-icon>mdi-share</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- comment -->
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card v-if="post" class="mx-auto" style="height:100%; width:100%" rounded="lg">
              <div class="pl-3">
                <v-row>
                  <v-col cols="11">
                    <v-text-field
                      label="comment "
                      hide-details
                      @keyup.enter="addComment(post._id,post) "
                      v-model="comment"
                      @click:append="toggleMarker"
                      append-icon="mdi-emoticon-excited"
                    >
                      <template v-slot:prepend>
                        <v-avatar size="33">
                          <img :src="user.img" alt />
                        </v-avatar>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </div>

              <!-- new -->
              <v-list
                three-line
                v-for="comment in post.comments"
                :key="comment._id"
                :id="comment._id"
                class="theListDiv text-capitalize pt-0 pb-0"
              >
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img class="elevation-6" :src="comment.img[0]"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content class="pt-0">
                    <v-list-item-subtitle
                      class="text-h6 font-weight-bold text-capitalize"
                    >{{comment.name}}</v-list-item-subtitle>
                    <v-list-item-subtitle
                      class="font-weight-bold black--text"
                    >{{comment.description}}</v-list-item-subtitle>
                    <v-list-item-subtitle small>{{comment.date}}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </div>
        </v-expand-transition>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import Functions from "../../../server/api";
import socktConnect from "socket.io-client";
export default {
  name: "one",
  props: ["post",'heights'],
  data() {
    return {
      on: "",
      name: "s",
      comment: "",
      show: false,
      checking: null,
    };
  },
  mounted() {
    this.socket = socktConnect("http://localhost:3000");
    let f = this.post.reacts.find((p) => {
      return p.userId === this.user._id;
    });
    if (f) {
      this.checking = true;
    } else {
      this.checking = false;
    }
  },
  methods: {
    toggleMarker() {
      console.log("appened method ");
    },
    reserve() {
      this.show = !this.show;
    },
    goTo(post) {
      this.$router.push("/singlePost/" + post._id);
    },
    async addComment(postId, post) {
      try {
        await Functions.creatComment({
          user: this.user,
          postId,
          comment: this.comment,
        });
        this.comment = "";
        const noti = {
          userId: this.user._id,
          name: this.user.name,
          img: this.user.img,
          friendId: post.userId._id,
          postId: post._id,
          action: "newCommentNotification",
          msg: " have comment on your post  ",
        };
        await Functions.pushToAllNotifications(noti);
        this.socket.emit("makeComment", noti);
      } catch (error) {
        console.log(error);
      }
    },
    async addLike(post) {
      if (this.checking) {
        const res = await Functions.removeLike({
          postId: post._id,
          user: this.user,
        });
        console.log(res);
        this.checking = false;
      } else {
        const res = await Functions.addLike({
          postId: post._id,
          user: this.user,
        });
        console.log(res);
        const noti = {
          userId: this.user._id,
          name: this.user.name,
          img: this.user.img,
          friendId: post.userId._id,
          postId: post._id,
          action:'newLikeNotification',
        msg:' have like on your post  ',
        };

        this.$store.dispatch("editPost", res.data.post);
        await Functions.pushToAllNotifications(noti);
        this.socket.emit("addLike", noti);
        this.checking = true;
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    postId() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.checking {
  color: blue !important;
  font-size: 30px;
  .ico {
    color: rgb(187, 4, 34) !important;
  }
}
.theActionOne {
  position: absolute;
  right: 33px;
  top: 28px;
  font-size: 20px;
}
</style>