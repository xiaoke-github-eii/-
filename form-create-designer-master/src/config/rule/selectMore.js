import uniqueId from "@form-create/utils/lib/unique";
import Icon from "@/imgs/icon-select-more.svg"
import activeIcon from "@/imgs/icon-select-more-active.svg"
const label = "下拉多选";
const name = "selectMore";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'select',
      field: uniqueId(),
      title: '未命名',
      info: "",
      effect: {
        fetch: "",
        required:false,
      },
      props: {
        clearable: true,
        multiple: true,
      },
      options: [
        { value: "选项1", label: "选项1" },
        { value: "选项2", label: "选项2" },
        { value: "选项3", label: "选项3" },
      ],
    };
  },
  props() {
    return [
      {type: 'options-item', form: 'base', field: 'options', title: '选项'},
    ];
  },
};
