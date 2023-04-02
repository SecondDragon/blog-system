import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import "lib-flexible";
import "muse-ui/lib/styles/base.less";
import "./global.less";

import {
  Button,
  Select,
  AppBar,
  Icon,
  Popover,
  List,
  Avatar,
  BottomSheet,
  Pagination,
  Paper,
  Chip,
  Carousel,
  Card,
  Tooltip,
  TextField,
  Dialog,
  Snackbar,
  Badge,
  Divider,
  Form,
  AutoComplete,
  Menu
} from "muse-ui";
import "muse-ui/lib/styles/theme.less";
import Toast from "muse-ui-toast";
Vue.use(Toast, {
  position: "top", // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: "close", // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: "check_circle", // 成功信息图标
  infoIcon: "info", // 信息信息图标
  warningIcon: "priority_high", // 提醒信息图标
  errorIcon: "warning", // 错误信息图标
});
Vue.use(Button);
Vue.use(Select);
Vue.use(AppBar);
Vue.use(Icon);
Vue.use(Popover);
Vue.use(List);
Vue.use(Avatar);
Vue.use(BottomSheet);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Chip);
Vue.use(Carousel);
Vue.use(Card);
Vue.use(Tooltip);
Vue.use(TextField);
Vue.use(Dialog);
Vue.use(Snackbar);
Vue.use(Badge);
Vue.use(Divider);
Vue.use(Form);
Vue.use(AutoComplete);
Vue.use(Menu);
import Helpers from 'muse-ui/lib/Helpers';
import { isPC } from "@/utils";


Vue.use(Helpers);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
