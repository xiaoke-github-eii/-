import uniqueId from "@form-create/utils/lib/unique";
import Icon from "@/imgs/icon-name.svg"
import activeIcon from "@/imgs/icon-name-active.svg"
const label = "姓名";
const name = "name";

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
        'prefix-icon':'el-icon-my-name',
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
