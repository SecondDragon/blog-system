<template>
    <div class="header">
        <mu-appbar style="width:100%" :color="background">
            <!-- <mu-button icon>
                <mu-icon value="menu"></mu-icon>
            </mu-button> -->
            <span style="cursor:pointer;">
                {{ "涅炎的天空".toLocaleUpperCase() }}
            </span>
            <mu-avatar v-if="isPC" slot="left" class="header-avatar" :size="50">
                <img src="http://www.nevergiveupt.top/user_avatar.png" />
            </mu-avatar>



            <!-- 菜单图标 -->
            <mu-button v-show="!isPC" @click="toggleWapMenu(true)" icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button>

            <!-- PC菜单列表 -->
            <mu-button slot="right" v-show="isPC" flat v-for="item, index in info.menu"
                :color="lightIndex === index ? '#00e676' : ''" @click="go(item)" :key="item.name">
                <mu-icon size="16" :value="item.icon" />
                {{ item.name }}
            </mu-button>

            <!-- wap-菜单 从下向上 -->
            <mu-bottom-sheet :open.sync="openWapMenu">
                <mu-list @item-click="toggleWapMenu(false)">
                    <mu-list-item @click="go(item)" v-for="(item, index) in info.menu" :key="item.name" button>
                        <mu-list-item-action>
                            <mu-icon :color="lightIndex === index ? '#00e676' : ''" :value="item.icon"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title :style="{ color: lightIndex === index ? '#00e676' : '' }">{{ item.name
                        }}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-bottom-sheet>

            <mu-button slot="right" flat ref="theme" @click="openTheme = !openTheme">
                <mu-icon value="color_lens"></mu-icon>
            </mu-button>
            <mu-popover :open.sync="openTheme" :trigger="triggerTheme">
                <mu-list>
                    <mu-list-item button @click="toggleTheme('selfLight')">
                        <mu-list-item-title class="theme-title">
                            <mu-icon :color="me === 'selfLight' ? 'primary' : ''" value="brightness_7"></mu-icon>
                        </mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button @click="toggleTheme('selfDark')">
                        <mu-list-item-title class="theme-title">
                            <mu-icon :color="me === 'selfDark' ? 'primary' : ''" value="brightness_4"></mu-icon>
                        </mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-popover>
            <!-- 用户 -->
            <mu-button flat slot="right" ref="button" @click="openUser = !openUser">
                <div class="user">
                    <span>天亮了</span>
                    <mu-icon value="expand_more"></mu-icon>
                </div>
            </mu-button>
            <mu-popover :open.sync="openUser" :trigger="trigger">
                <mu-list>
                    <mu-list-item button>
                        <mu-list-item-title>个人中心</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>退出登录</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-popover>

            <!-- <mu-menu slot="right">
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>
                                Menu item 1
                            </mu-list-item-title>
                        </mu-list-item-content>

                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-content>
                            <mu-list-item-title>
                                Menu item 2
                            </mu-list-item-title>
                        </mu-list-item-content>

                    </mu-list-item>
                </mu-list>
            </mu-menu> -->
        </mu-appbar>





    </div>
</template>

<script>
import { isPC, isAndroid, isIPhone } from "@/utils";
// Vue.prototype.isPC = isPC()


const menus = [
    {
        name: "首页",
        router: "index",
        icon: "home",
    },
    {
        name: "文章",
        router: "articles",
        icon: "note_add",
    },
    {
        name: "归档",
        router: "archives",
        icon: "drafts",
    },
    {
        name: "分类",
        router: "categories",
        icon: "dns",
    },
    {
        name: "标签",
        router: "tags",
        icon: "loyalty",
    },
    {
        name: "关于",
        router: "about",
        icon: "perm_identity",
    },
];

export default {

    name: "Header",
    props: {
        background: {
            type: String,
        },
        lightIndex: {
            type: Number,
            default: 0,
        },

    },
    components: {

    },
    data() {
        return {
            isPC: isPC(),
            openUser: false,
            openTheme: false,
            openWapMenu: false,

            trigger: null,
            triggerTheme: null,

            info: {
                menu: menus,
                login: true,
                openSearch: true,
                register: true,
            },

            showToolBtn: false,
            user: JSON.parse(localStorage.getItem("user")),

            openSearchModal: false,
            openLoginModal: false,
            openRegisterModal: false,
            showBackTop: false,
            me: "",
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        window.addEventListener("resize", () => {
            this.isPC = isPC()
        })

        this.triggerTheme = this.$refs.theme.$el
        this.trigger = this.$refs.button.$el
    },
    watch: {

    },
    methods: {
        toggleWapMenu(openWapMenu) {
            this.openWapMenu = openWapMenu;
        },
        go(item) {
            if (this.$route.name === item.router) {
                return;
            }
            this.$router.push({
                name: item.router,
            });
        },
        toggleTheme(me) {
            // this.theme.use(me);
            // this.me = me;
            // localStorage.setItem("theme", me);
            this.openTheme = false;
        },

    },
};
</script>

<style scoped lang="less">
.header {
    position: fixed;
    z-index: 1501;
    width: 100%;
    top: 0;
}

.header-avatar {
    margin-left: 20px;
    cursor: pointer;
}

.mu-appbar {
    .mu-flat-button {
        flex: 1;
    }

    /deep/ .mu-appbar-right {
        flex: 1;

    }
}

.user {
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
        display: block;
        width: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: right;
    }
}
</style>
