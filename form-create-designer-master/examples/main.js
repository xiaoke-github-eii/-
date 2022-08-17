import Vue from 'vue';
import ELEMENT from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import formCreate from '@form-create/element-ui';
import App from './App';
import FcDesigner from '../src/index';
import CuInput from './components/cu-form/cu-input';
import CuAddress from './components/cu-form/cu-address';
import CuRadio from './components/cu-form/cu-radio';
import CuCheckbox from './components/cu-form/cu-checkbox';
import CuImg from './components/cu-form/cu-img';
import UploadImage from './components/cu-form/upload-image.vue'
import CuUploadImg from './components/cu-form/cu-upload-img.vue'
Vue.use(ELEMENT);
Vue.use(formCreate);
Vue.component('CuImg', CuImg);
Vue.component('FcDesigner', FcDesigner);
Vue.component('CuInput', CuInput);
Vue.component('CuAddress', CuAddress);
Vue.component('CuRadio', CuRadio);
Vue.component('CuCheckbox', CuCheckbox);
Vue.component('UploadImage', UploadImage);
Vue.component('CuUploadImg',CuUploadImg)
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
