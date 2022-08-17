import Icon from "@/imgs/icon-address.svg"
const label = "地址";
const name = "address";

export default {
  icon: Icon,
  label,
  name,
  mask:false,
  rule() {
    return {
      type: 'cu-address',
      field: 'address',
      title: label,
      value:['北京','西城'],
      info: "",
      effect: {
        required:true,
        fetch: "",
      },
      options: [
        
      ],
      address:[],
      props: {
        address:['北京','西城'],
      },
    };
  },
  props() {
    return [
      {type: 'address-item', form: 'props', field: 'address', title: '默认值',},
    ];
  },
};
