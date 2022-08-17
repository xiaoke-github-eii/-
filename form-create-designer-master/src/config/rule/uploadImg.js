import uniqueId from "@form-create/utils/lib/unique";
import Icon from "@/imgs/icon-upload-img.svg"
const label = "上传图片";
const name = "uploadImg";

export default {
  icon: Icon,
  label,
  name,
  rule() {
    return {
      type: 'cu-upload-img',
      field: uniqueId(),
      title: label,
      info: "",
      value: [],
      props: {
        limits: 1,
      },
      effect: {
        required: false,
      },
    };
  },
  props() {
    return [
      {type: 'limit-item', from: 'props', field: 'limits', title: '图片数量限制'},
    ]
  },
};




