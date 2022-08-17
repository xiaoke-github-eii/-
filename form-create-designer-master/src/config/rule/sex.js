import Icon from "@/imgs/icon-sex.svg"
import activeIcon from "@/imgs/icon-sex-active.svg"
import uniqueId from "@form-create/utils/lib/unique";
const label = "性别";
const name = "sex";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'radio',
      field: uniqueId(),
      title: label,
      info: "",
      effect: {
        required:false,
        fetch: "",
      },
      props: {},
      options: [
        { value: "男", label: "男" },
        { value: "女", label: "女" },
      ],
    };
  },
  props() {
    return [

    ];
  },
};
