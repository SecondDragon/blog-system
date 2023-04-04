<template>
  <div class="left-config">
    <mu-card class="side-card">
      <mu-avatar class="avatar" size="100">
        <img v-lazy="avatar" alt />
      </mu-avatar>
      <div :style="{ color: randomColor() }" class="title">NeverGiveUpT</div>
      <div class="desc">专注于WEB和移动前端开发</div>
      <div class="tags">
        <mu-chip fab small :color="randomColor()" class="chip">Vue</mu-chip>
        <mu-chip class="chip">React</mu-chip>
        <mu-chip class="chip">4年开发经验</mu-chip>
      </div>
      <div class="friend-link-box">
        <p class="friend-link-title">友情链接</p>
        <div class="friend-links">
          <mu-button class="link" fab small>
            <mu-avatar size="40">
              <img src="http://www.nevergiveupt.top/github.png" alt />
            </mu-avatar>
          </mu-button>
          <mu-button class="link" fab small>
            <mu-avatar size="40">
              <img src="http://www.nevergiveupt.top/sf.jpeg" alt />
            </mu-avatar>
          </mu-button>
          <mu-button class="link" fab small>
            <mu-avatar size="40">
              <img src="http://www.nevergiveupt.top/zhihu.jpg" alt />
            </mu-avatar>
          </mu-button>
        </div>
      </div>
    </mu-card>
    <mu-card v-if="!hideAd && ad" class="side-card card-ad">
      <div class="ad">广告</div>
      <mu-carousel style="height: 120px" hide-controls>
        <mu-carousel-item>
          <img
            style="width: 100%; cursor: pointer"
            src="https://img.alicdn.com/tfs/TB1v0eeB4z1gK0jSZSgXXavwpXa-2880-574.png"
          />
        </mu-carousel-item>
      </mu-carousel>
    </mu-card>

    <mu-card class="side-card">
      <div class="friend-link-box">
        <p class="friend-link-title">电影推荐</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">唐人街探案3</mu-chip>
          </div>
        </div>
      </div>

      <div class="friend-link-box">
        <p class="friend-link-title">电视剧推荐</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">赘婿</mu-chip>
          </div>
        </div>
      </div>

      <div class="friend-link-box">
        <p class="friend-link-title">音乐推荐</p>
        <div class="friend-links">
          <div class="tags">
            <mu-chip class="chip">半生雪</mu-chip>
          </div>
        </div>
      </div>
    </mu-card>

    <!-- <mu-card class="side-card card-ad">
      <img src="http://www.nevergiveupt.top/qianduanxiaokezhan.png" alt="" />
    </mu-card> -->
  </div>
</template>

<script>
import { randomColor, Icon } from "@/utils";
export default {
  props: {
    showPosition: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      randomColor: randomColor,
      avatar: this.avatar,
      ad: null,
      introduction: {},
      recommend: [],
      hideAd: false,
      hideIntroduction: false,
      hideRecommend: false,
    };
  },
  computed: {
    tagsArr() {
      return this.introduction.tags
        ? this.introduction.tags.map((item) => {
            return {
              name: item,
              color: randomColor(),
            };
          })
        : [];
    },
    links() {
      return this.introduction.friendLink
        ? this.introduction.friendLink.map((item) => {
            return {
              ...item,
              color: randomColor(),
              icon: Icon[item.icon],
            };
          })
        : [];
    },
    suggest() {
      if (!this.recommend) {
        return {
          music: [],
          movie: [],
          teleplay: [],
        };
      } else {
        const data = this.recommend.map((item) => {
          return {
            ...item,
            color: randomColor(),
          };
        });
        return {
          movie: data.filter(
            (item) =>
              item.project === "1" &&
              item.showPosition.includes(this.showPosition)
          ),
          teleplay: data.filter(
            (item) =>
              item.project === "2" &&
              item.showPosition.includes(this.showPosition)
          ),
          music: data.filter(
            (item) =>
              item.project === "3" &&
              item.showPosition.includes(this.showPosition)
          ),
        };
      }
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    async getInfo() {
      const res = await this.$axios.get("/rightConfig");
      if (res.data) {
        this.ad = res.data.ad;
        this.introduction = res.data.introduction;
        this.recommend = res.data.recommend;

        this.hideAd =
          this.ad && !this.ad.showPosition.includes(this.showPosition);
        this.hideIntroduction = !this.introduction.showPosition.includes(
          this.showPosition
        );
      }
    },
    goLink(item) {
      window.open(item.link);
    },
  },
};
</script>

<style scoped lang="less">
.left-config {
  width: 4.5rem;
  .side-card {
    position: relative;
    margin-top: 16px;
    text-align: center;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0 5px 4px 0px rgba(0, 0, 0, 0.2), 0 1px 8px 0px rgba(0, 0, 0, 0.2);
    .avatar {
      box-shadow: inherit;
    }
    .title {
      font-size: 16px;
    }
    .desc {
      font-size: 14px;
      margin: 10px 0;
    }
    .tags {
      .chip {
        margin: 0 10px 10px 0;
      }
    }
    .friend-links {
      display: flex;
      justify-content: space-around;
    }
    .ad {
      position: absolute;
      z-index: 1;
      right: 8px;
      top: 8px;
      font-size: 12px;
    }

    .card-ad {
      padding: 8px;
    }
    .friend-link-box {
      .friend-link-title {
        position: relative;
        &::before {
          content: "";
          width: 30%;
          height: 1px;
          background: #ccc;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        &::after {
          content: "";
          width: 30%;
          height: 1px;
          background: #ccc;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
