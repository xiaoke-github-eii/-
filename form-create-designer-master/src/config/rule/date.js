import uniqueId from '@form-create/utils/lib/unique';
import Icon from "@/imgs/icon-date.svg"
import activeIcon from "@/imgs/icon-date-active.svg"
const label = '日期';
const name = 'datePicker';

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
