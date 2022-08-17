import radio from './rule/radio';
import _switch from './rule/switch';
import time from './rule/time';
import date from './rule/date';
import row from './rule/row';
import space from './rule/space';
import name from './rule/name';
import weixin from './rule/weixin';
import phone from './rule/phone';
import sex from './rule/sex';
import email from './rule/email';
// import address from './rule/address';
import business from './rule/business';
import text from './rule/text';
import textarea from './rule/textarea';
import select from './rule/select';
import selectMore from './rule/selectMore';
import checkbox from './rule/checkbox';
import image from './rule/image';
import uploadImg from './rule/uploadImg';
export default function createMenu() {
    return [{
            name: 'main',
            title: '选项',
            list: [
                name, phone, weixin, sex, email, business,
            ]
        },
        {
            name: 'aide',
            title: '通用字段',
            list: [
                text, textarea, select, selectMore, radio, checkbox, time, date,
            ]
        },
        {
            name: 'layout',
            title: '展示信息',
            list: [
                image,
            ]
        },
    ];
}