import Icon from "@/imgs/icon-phone.svg"
import activeIcon from "@/imgs/icon-phone-active.svg"
import uniqueId from "@form-create/utils/lib/unique";
const label = "电话";
const name = "phone";

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
        placeholder: "请输入电话",
        wordLimit: {
          maxlength: '',
          minlength: '',
        },
        'prefix-icon':'el-icon-my-phone',
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
