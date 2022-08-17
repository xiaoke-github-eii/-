import Icon from "@/imgs/icon-email.svg"
import activeIcon from "@/imgs/icon-email-active.svg"
import uniqueId from "@form-create/utils/lib/unique";
const label = "邮箱";
const name = "email";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'input',
      field: uniqueId(),
      title: label,
      info: "",
      props: {
        address: [],
        'prefix-icon':'el-icon-my-email',
      },
      effect:{
        required: false,
      }
    };
  },
  props() {
    return [
      {type: 'input-item', from: 'props', field: 'placeholder', title: '框内默认提示'},
    ]
  },
};
