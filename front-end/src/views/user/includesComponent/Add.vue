<template>
  <div>
    <app-left-drawer></app-left-drawer>
    <app-right-drawer></app-right-drawer>
  

    <v-toolbar color="orange accent-1 " >
      <v-app-bar-nav-icon class="mr-6 pr-4" fab  style="cursor: pointer;">
        <v-icon  x-large class="d-none white--text mb-5 d-sm-block">mdi-facebook</v-icon>
        <v-icon large class="d-sm-none" @click="drawer=!drawer">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <!-- searching bar -->
      <app-searching-bar class="mr-0"></app-searching-bar>
     
      <!-- right icon for online users -->
      <v-app-bar-nav-icon class="mr-0  d-sm-none" @click="rightDrawer=!rightDrawer" style="cursor: pointer;">
        <v-icon class="white--text"  >mdi-facebook-messenger</v-icon>
      </v-app-bar-nav-icon>

      <!-- middle icons and routes  -->
      <v-toolbar-title style="height:67px" class="title mt-6 pt-1 mr-3 d-none d-md-inline">
        <div  class="d-flex white--text justify-space-around">
          <div title="Home">
            <router-link to="/" tag="span" exact>
              <v-btn text>
                <v-icon x-large>mdi-home-variant-outline</v-icon>
              </v-btn>
            </router-link>
          </div>
         
           <div title="Users">
            <router-link to="/all-users" tag="span" exact>
              <v-btn text>
                <v-icon x-large>mdi-account-search-outline</v-icon>
                
              </v-btn>
            </router-link>
          </div>
          <div title="FriendsRequest">
            <router-link to="/friends-request" tag="span" exact>
              <v-btn text>
                <v-icon x-large>mdi-account-clock-outline</v-icon>
              </v-btn>
            </router-link>
          </div>
        </div>
      </v-toolbar-title>
      <!-- for mobile screens   -->
      <template v-slot:extension >
        <!-- <v-row class=" d-sm-none themobile"> -->
          <app-mobile-notifications class=" d-sm-none "></app-mobile-notifications>
        <!-- </v-row> -->
      </template>
      <!-- for the normal screens  -->
      <v-toolbar-title class="title pt-4 d-none d-sm-block" style="height:67px;margin-left:15% ">
        <!-- login -->
        <router-link v-if="!getUser" to="/login" tag="span" class="pt-6 mr-1 ml-1 headline">
          <v-btn class="white--text" outlined>
            <v-icon>mdi-login</v-icon>login
          </v-btn>
        </router-link>

        <!-- all notifcations -->
        <div v-if="getUser">
        <v-badge color="green" class="mr-3" overlap bordered :content="allNotifications.length">
          <v-menu
            v-if="getUser"
            class="allTHeOne"
            style="overflow: scroll !important; max-height: 500px !important;"
            bottom min-width="200px"  rounded offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn icon small class="d-none d-sm-inline mt-1" v-on="on">
                <v-icon class="white--text">mdi-bell-ring</v-icon>
              </v-btn>
            </template>
            <!-- menu for notifications -->
            <v-card max-height="500" style="overflow-y: scroll">
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-btn depressed rounded text>notification {{allNotifications.length}}</v-btn>
                  <v-divider class="my-3"></v-divider>

                  <div v-for="(item, index) in allNotifications" :key="index">
                    <v-list three-line class="theListDiv pt-0 pb-0">
                      <v-list-item
                        class="text-left text-capitalize"
                        :key="item.senderName"
                        @click="navegateToPost(item.postId)"
                      >
                        <v-list-item-avatar>
                          <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content class="pt-0">
                          <v-list-item-title class="font-weight-bold">{{item.name}}</v-list-item-title>
                          <v-list-item-subtitle
                            class="font-weight-bold text-capitalize"
                            v-html="item.msg"
                          ></v-list-item-subtitle>
                          <v-list-item-subtitle>{{new Date(+item.date).getHours() + ':'+ new Date(+ item.date).getMinutes()}}</v-list-item-subtitle>

                          <!--  -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-badge>
        <!-- menu for messg -->
        <v-badge color="pink" overlap class="mr-3" bordered :content="allMsgs.length">
          <v-menu v-if="getUser" bottom min-width="200px"  style="overflow: scroll !important; max-height: 500px !important;" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon small class="d-none d-sm-inline mt-1" v-on="on">
                <v-icon class="white--text">mdi-facebook-messenger</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-list-item-content class="justify-center">
                <div class="mx-auto mb-0 text-center">
                  <v-btn to="/massage" text block class="text-capitalize">messages</v-btn>
                  <v-divider class="mb-3"></v-divider>

                  <div v-for="(item,i) in allMsgs " :key="i">
                    <v-list three-line class="theListDiv pt-0 pb-0">
                      <v-list-item
                        class="text-left text-capitalize"
                        :key="item.senderName"
                        @click="goToMsg(item.chatId)"
                      >
                        <v-list-item-avatar>
                          <v-img :src="item.senderImg"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content class="pt-0">
                          <v-list-item-title class="font-weight-bold">{{item.senderName}}</v-list-item-title>
                          <v-list-item-subtitle
                            class="font-weight-bold text-capitalize"
                            v-html="item.content"
                          ></v-list-item-subtitle>
                          <v-list-item-subtitle>{{new Date(+item.date).getHours() + ':'+ new Date(+ item.date).getMinutes()}}</v-list-item-subtitle>

                          <!--  -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                  <v-divider class="my-3"></v-divider>
                  <router-link to="/massage" tag="div">
                  <v-btn depressed rounded text to="/massage">message</v-btn>
                  </router-link>
                </div>
              </v-list-item-content>
            </v-card>
          </v-menu>
        </v-badge>
        <!--  end messge -->
        <!-- friend Requests -->
        <v-badge color="green" class="mr-3" overlap bordered :content="notifications.length">
          <v-menu v-if="getUser"  style="overflow: scroll !important; max-height: 500px !important;" bottom min-width="200px" rounded offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon small class="d-none d-sm-inline mt-1" v-on="on">
                <v-icon class="white--text">mdi-account-multiple-plus</v-icon>
              </v-btn>
            </template>
            <!-- new   -->
             <v-card max-height="500" style="overflow-y: scroll">
              <v-list-item-content class="justify-center">
                <div class="mx-auto text-center">
                  <v-btn depressed rounded text>friend requests ({{notifications.length}})</v-btn>
                  <v-divider class="my-3"></v-divider>

                  <div  v-for="(item, index) in notifications"
                      :key="index">
                    <v-list three-line class="theListDiv pt-0 pb-0">
                      <v-list-item
                        class="text-left text-capitalize"
                        :key="item.senderName"
                        @click="navegateToProfile(item.friendId)" 
                      >
                        <v-list-item-avatar>
                          <v-img :src="item.img"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content class="pt-0">
                          <v-list-item-title class="font-weight-bold">{{item.name}}</v-list-item-title>
                          <v-list-item-subtitle
                            class="font-weight-bold text-capitalize"
                            v-html="item.msg"
                          ></v-list-item-subtitle>
                          <v-list-item-subtitle>{{new Date(+item.date).getHours() + ':'+ new Date(+ item.date).getMinutes()}}</v-list-item-subtitle>

                          <!--  -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>
              </v-list-item-content>
            </v-card>
         
          </v-menu>
        </v-badge>
        <!-- user options  -->
        <v-menu v-if="getUser" bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon small class="d-none d-sm-inline mt-1" v-on="on">
              <v-icon class="white--text">mdi-arrow-down</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <router-link :to="'/profile/'+getUser._id">
                  <v-avatar>
                    <v-img v-if="getUser.img" :src="getUser.img"></v-img>
                  </v-avatar>
                </router-link>
                <h3>{{ getUser.name }}</h3>
                <p class="caption mt-1">{{ getUser.email }}</p>

                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded @click="savedposts" text>
                  <v-icon>mdi-heart</v-icon>save posts
                </v-btn>
                 <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded @click="logout" text>
                  <v-icon>mdi-logout</v-icon>logout
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
        </div>
      </v-toolbar-title>

    </v-toolbar>

  </div>
</template>

<script>
import Functions from "../../../../server/api";
import { mapGetters } from "vuex";
import leftDrawer from "./leftDrawer";
import rightDrawer from "./rightDrawer";
import searchingBar from "./searchingBar";
import mobilNoficicationsVue from './mobilNoficications.vue';
import socktConnect from "socket.io-client";
export default {
  components: {
    "app-left-drawer": leftDrawer,
    "app-right-drawer": rightDrawer,
    "app-searching-bar": searchingBar,
    'app-mobile-notifications':mobilNoficicationsVue
  },
  name: "navbar",
  data() {
    return {
      items: [],
      tab: null,
      test: null,
      on: "",
      
    };
  },
  mounted() {
    this.test = this.$store.getters.notifications;
      this.socket = socktConnect("http://localhost:3000");
    
  },
  methods: {
    goToMsg(chatId) {
      this.$router.push("/massageTest/" + chatId);
       if (this.$route.name === "massageTest") {
         this.$router.push("/").then(() => {
          this.$router.push("/massageTest/" + chatId);
        })
      } else {
      this.$router.push("/massageTest/" + chatId);
        }
    },
    savedposts(){
      this.$router.push(`/saved-posts/${this.getUser._id}`)

    },
   
    navegateToPost(id) {
       if (this.$route.name === "singlePost") {
         this.$router.push("/").then(() => {
          this.$router.push("/singlePost/" + id);
        })
      } else {
        this.$router.push("/singlePost/" + id);
        }
    },
    navegateToProfile(id) {
      if (this.$route.name === "Home") {
        this.$router.push("/FriendProfile/" + id);
      } else {
        this.$router.push("/").then(() => {
          this.$router.push("/FriendProfile/" + id);
        });
      }
    },

    async logout() {
      console.log(this.socket);
      this.socket.disconnect(true,this.getUser._id);
      
      try {
        await Functions.logout();
        this.$store.dispatch("setUser", null);
        this.$store.dispatch("setAuth", false);
        this.$router.push("/login")
      } catch (error) {
        this.errors = error;
      }
    },

    profileNavigate() {
      this.$router.push("/profile" + this.getUser._id);
    },
    openDrawer() {
      this.drawer = !this.drawer;
    },
  },
  computed: {
    ...mapGetters([
      "getUser",
      "isLoggedIn",
      "token",
      "notifications",
      "allNotifications",
    ]),
    allMsgs() {
      return this.$store.getters.messages;
    },

    rightDrawer: {
      get() {
        return this.$store.getters.rightDrawer;
      },
      set(value) {
        this.$store.dispatch("toggleRightDrawer", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>