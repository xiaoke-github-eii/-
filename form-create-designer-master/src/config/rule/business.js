import Icon from "@/imgs/icon-business.svg"
import activeIcon from "@/imgs/icon-business-active.svg"
import uniqueId from "@form-create/utils/lib/unique";
const label = "企业";
const name = "business";

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
        'prefix-icon':'el-icon-my-business',
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
