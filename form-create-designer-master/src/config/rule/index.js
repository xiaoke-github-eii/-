import radio from './radio';
// import checkbox from './checkbox';
import input from './input';
import number from './number';
// import select from './select1';
import _switch from './switch';
import slider from './slider';
import time from './time';
import date from './date';
import rate from './rate';
import color from './color';
import row from './row';
import col from './col';
import tabPane from './tabPane';
import divider from './divider';
import cascader from './cascader';
import upload from './upload';
import transfer from './transfer';
import tree from './tree';
import alert from './alert';
import span from './span';
import space from './space';
import tab from './tab';
import button from './button';
import editor from './editor';
import name from './name';
import weixin from './weixin';
import phone from './phone';
import sex from './sex';
import email from './email';
import address from './address';
import business from './business';
import text from './text';
import textarea from './textarea';
import select from './select';
import selectMore from './selectMore';
import checkbox from './checkbox';
import image from './image';
import uploadImg from './uploadImg';

const ruleList = {
    [radio.name]: radio,
    [input.name]: input,
    [number.name]: number,
    [_switch.name]: _switch,
    [slider.name]: slider,
    [time.name]: time,
    [date.name]: date,
    [rate.name]: rate,
    [color.name]: color,
    [row.name]: row,
    [col.name]: col,
    [tab.name]: tab,
    [tabPane.name]: tabPane,
    [divider.name]: divider,
    [cascader.name]: cascader,
    [upload.name]: upload,
    [transfer.name]: transfer,
    [tree.name]: tree,
    [alert.name]: alert,
    [span.name]: span,
    [space.name]: space,
    [button.name]: button,
    [editor.name]: editor,
    [name.name]: name,
    [weixin.name]: weixin,
    [phone.name]: phone,
    [sex.name]: sex,
    [email.name]: email,
    [address.name]: address,
    [business.name]: business,
    [text.name]: text,
    [textarea.name]: textarea,
    [select.name]: select,
    [selectMore.name]: selectMore,
    [checkbox.name]: checkbox,
    [image.name]: image,
    [uploadImg.name]: uploadImg,
};

export default ruleList;