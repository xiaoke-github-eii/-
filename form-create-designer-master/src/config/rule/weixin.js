import uniqueId from "@form-create/utils/lib/unique";
import { makeRequiredRule } from "../../utils";
import Icon from "@/imgs/icon-weixin.svg"
import activeIcon from "@/imgs/icon-weixin-active.svg"
const label = "微信";
const name = "weixin";

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
        placeholder: "",
        wordLimit: {
          maxlength: '',
          minlength: '',
        },
        'prefix-icon':'el-icon-my-weixin',
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
