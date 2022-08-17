import Icon from "@/imgs/icon-text.svg"
import activeIcon from "@/imgs/icon-text-active.svg"
import uniqueId from "@form-create/utils/lib/unique";
const label = "单行文字";
const name = "text";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'input',
      field: uniqueId(),
      title: '未命名',
      info: "",
      props: {
        placeholder: "",
        wordLimit: {
          maxlength: '',
          minlength: '',
        }
      },
      effect:{
        required: false,
      }
    };
  },
  props() {
    return [
      {type: 'input-item', form: 'props', field: 'placeholder', title: '框内默认提示'},
      {type: 'word-limit-item', form: 'props', field: 'wordLimit', title: '字数限制'}
    ]
  },
};
