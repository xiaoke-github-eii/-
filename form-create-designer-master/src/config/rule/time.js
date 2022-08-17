import uniqueId from '@form-create/utils/lib/unique';
import Icon from "@/imgs/icon-time.svg"
import activeIcon from "@/imgs/icon-time-active.svg"
const label = '时间';
const name = 'timePicker';

export default {
    icon: Icon,
    activeIcon,
    label,
    name,
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            props: {
                placeholder: "",
            },
            effect:{
                required: false
            },
        };
    },
    props() {
        return [ {type: 'input-item', form: 'props', field: 'placeholder', title: '框内默认提示'}];
    }
};
