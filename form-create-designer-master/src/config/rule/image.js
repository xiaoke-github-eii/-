import uniqueId from "@form-create/utils/lib/unique";
import Icon from "@/imgs/icon-img.svg"
import activeIcon from "@/imgs/icon-img-active.svg"
const label = "图片";
const name = "image";

export default {
  icon: Icon,
  activeIcon,
  label,
  name,
  rule() {
    return {
      type: 'upload-image',
      field: uniqueId(),
      title: label,
      info: "",
      effect: {
        required: false,
      },
      props: {
        src: 'https://oss-huadong1.oss-cn-hangzhou.aliyuncs.com/wechatapp/customer_service/admin/2022/08/03/799235908_2022_08_03_16_29_37nvl3e.jpg',
      },
    };
  },
  props() {
    return [
      {type: 'change-image', form: 'props', field: 'src', title: '图片'},
    ];
  },
};
