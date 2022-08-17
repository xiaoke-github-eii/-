import uniqueId from "@form-create/utils/lib/unique";
import Icon from "@/imgs/icon-checkbox.svg"
import activeIcon from "@/imgs/icon-checkbox-active.svg"
const label = "多项选择";
const name = "checkbox";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'cu-checkbox',
      field: uniqueId(),
      title: label,
      info: "",
      effect: {
        fetch: "",
        required:false,
      },
      props: {
        options: [
          { value: "选项1", label: "选项1" },
          { value: "选项2", label: "选项2" },
        ],
        value:'',
      },

    };
  },
  props() {
    return [
      {type: 'options-item', form: 'props', field: 'options', title: '选项'},
    ];
  },
};
