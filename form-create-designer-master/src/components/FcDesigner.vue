
<template>
    <ElContainer class="_fc-designer" :style="'height:'+height_">
        <ElMain>
            <ElContainer style="height: 100%;">
                <el-aside class="_fc-l" width="276px">
                    <div>
                        <div class="left-main-title">添加字段</div>
                        <template v-for="(item, index) in menuList">
                            <div class="_fc-l-group" :key="index">
                                <h4 class="_fc-l-title">{{ item.title }}</h4>
                                <draggable :group="{name:'default', pull:'clone',put:false}" :sort="false"
                                        :list="item.list">
                                    <div class="_fc-l-item" v-for="(data, index) in item.list"
                                        :key="index">

                                        <div class="_fc-l-icon" @mouseenter="handleMouseenter($event,data)" @mouseleave="handleMouseleave($event,data)">
                                            <img :src="data.icon" alt="">
                                            <span class="_fc-l-name">{{ data.label }}</span>
                                        </div>
                                        
                                    </div>
                                </draggable>
                            </div>
                        </template>
                    </div>
                </el-aside>
                <ElContainer class="_fc-m">
                    <!-- <el-header class="_fc-m-tools" height="45">
                        <slot name="handle"></slot>
                        <el-button type="primary" icon="fc-icon icon-preview" plain round size="mini"
                                   @click="previewFc">预 览
                        </el-button>
                        <el-button type="danger" icon="fc-icon icon-delete" plain round size="mini"
                                   @click="clearDragRule">清 空
                        </el-button>
                    </el-header> -->
                    <ElMain class="main-box-designer">
                        <div class="canvas-warp">
                            <div @click="showBannerConfig">
                                <PageInfoForm v-model="pageInfoForm" />
                            </div>
                            <div class="_fc-m-drag" :class="{'no-rule-wrap': dragForm.rule[0].children.length == 0}">
                                <span class="no-rule-wrap-text">
                                    <img src="@/imgs/click-item.svg" alt="">
                                    拖拽题目到此区域
                                </span>
                                <component @click.native="shwoFormConfig" :is="FormCreate" :rule="dragForm.rule" :option="form.value" v-model="dragForm.api"></component>
                            </div>
                            <div class="footer-btn" >
                                <span class="text-span" @click="testData">提 交</span>
                            </div>
                        </div>
                    </ElMain>
                </ElContainer>
                <ElAside class="_fc-r" width="300px">
                    <ElContainer style="height: 100%;">
                        <div v-if="configType == 'banner'">
                             <BannerConfig :src="pageInfoForm.banner" @change="handleBanner" />
                        </div>
                        <div v-if="configType == 'form'" style="width: 100%;">
                            <FormConfig 
                                v-if="showBaseRule && dragForm.rule[0].children.length > 0"
                                :activeRule="activeRule"
                                :baseForm="baseForm"
                                :propsForm="propsForm"
                                @baseChange="baseChange" 
                                @propChange="propChange"
                            />
                            <div class="empty-item-right" v-else>
                                <div><img src="@/imgs/select-item.svg" alt=""></div>
                                <div class="right-item-text">没有选定的题目</div>
                                <div class="right-item-text">请添加或者选择一个题目</div>
                            </div>
                        </div>
                    </ElContainer>
                </ElAside>
                <ElDialog :visible.sync="preview.state" width="800px" append-to-body>
                    <ViewForm :rule="preview.rule" :option="preview.option" v-if="preview.state"></ViewForm>
                </ElDialog>
            </ElContainer>
        </ElMain>
    </ElContainer>
</template>

<style>

</style>

<script>

import form from '../config/base/form';
import field from '../config/base/field';
import validate from '../config/base/validate';
import {deepCopy} from '@form-create/utils/lib/deepextend';
import is, {hasProperty} from '@form-create/utils/lib/type';
import {lower} from '@form-create/utils/lib/tocase';
import ruleList from '../config/rule';
import draggable from 'vuedraggable';
import createMenu from '../config/menu';
import {upper} from '../utils/index';
import {designerForm} from '../utils/form';
import viewForm from '../utils/form';
import PageInfoForm from './page-info-form.vue';
import BannerConfig from './banner-config/index.vue';
import FormConfig from './form-config/index.vue';
import BannerBg from "@/imgs/banner.png"

export default {
    name: 'FcDesigner',
    components: {
        draggable,
        ViewForm: viewForm.$form(),
        PageInfoForm,
        BannerConfig,
        FormConfig,
    },
    props: ['menu', 'height', 'config', 'mask'],
    computed: {
        height_() {
            const h = this.height;
            if (!h) return '100%';
            return is.Number(h) ? `${h}px` : h;
        }
    },
    provide() {
        return {
            fcx: {
                active: null
            },
            designer: this,
        };
    },
    data() {
        const children = [];
        return {
            FormCreate: designerForm.$form(),
            cacheProps: {},
            moveRule: null,
            addRule: null,
            added: null,
            activeTab: 'form',
            activeRule: null,
            children,
            menuList: this.menu || createMenu(),
            showBaseRule: false,
            visible: {
                preview: false
            },
            preview: {
                state: false,
                rule: [],
                option: {}
            },
            pageInfoForm: {
                banner: 'https://oss-huadong1.oss-cn-hangzhou.aliyuncs.com/wechatapp/customer_service/admin/2022/08/03/797989530_2022_08_03_15_45_27l3m58.jpg',
                title: '未命名表单',
                remarks: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧',
            },
            configType: 'form', // banner form
            dragForm: {
                rule: this.makeDragRule(children),
                api: {},
            },
            form: {
                rule: form(),
                option: {
                    form: {
                        labelPosition: 'top',
                        size: 'medium'
                    },
                    submitBtn: false
                },
                value: {
                    form: {
                        inline: false,
                        hideRequiredAsterisk: false,
                        labelPosition: 'top',
                        size: 'medium',
                        labelWidth: '125px',
                        formCreateSubmitBtn: true,
                        formCreateResetBtn: false
                    },
                    submitBtn: false
                }
            },
            baseForm: {
                rule: field(),
                api: {},
                options: {
                    form: {
                        labelPosition: 'top',
                        size: 'mini'
                    },
                    submitBtn: false,
                    mounted: (fapi) => {
                        fapi.activeRule = this.activeRule;
                        fapi.setValue(fapi.options.formData || {});
                    }
                }
            },
            validateForm: {
                rule: validate(),
                api: {},
                options: {
                    form: {
                        labelPosition: 'top',
                        size: 'mini'
                    },
                    submitBtn: false,
                    mounted: (fapi) => {
                        fapi.activeRule = this.activeRule;
                        fapi.setValue(fapi.options.formData || {});
                    }
                }
            },
            propsForm: {
                rule: [],
                api: {},
                options: {
                    form: {
                        labelPosition: 'top',
                        size: 'mini'
                    },
                    submitBtn: false,
                    mounted: (fapi) => {
                        fapi.activeRule = this.activeRule;
                        fapi.setValue(fapi.options.formData || {});
                    }
                }
            },
        };
    },
    watch: {
        'preview.state': function (n) {
            if (!n) {
                this.$nextTick(() => {
                    this.preview.rule = this.preview.option = null;
                });
            }
        }
    },
    created(){
        
    },
    methods: {
        testData(){
        },
        setPageInfoFormData(data){
            this.pageInfoForm.banner = data.banner;
            this.pageInfoForm.title = data.title;
            this.pageInfoForm.remarks = data.remarks;
        },
        showBannerConfig(){
            this.configType = 'banner';
        },
        shwoFormConfig(){
            this.configType = 'form';
        },
        handleBanner(val){
            this.pageInfoForm.banner = val;
        },
        addMenu(config) {
            if (!config.name || !config.list) return;
            let flag = true;
            this.menuList.forEach((v, i) => {
                if (v.name === config.name) {
                    this.$set(this.menuList, i, config);
                    flag = false;
                }
            });
            if (flag) {
                this.menuList.push(config);
            }
        },
        removeMenu(name) {
            [...this.menuList].forEach((v, i) => {
                if (v.name === name) {
                    this.menuList.splice(i, 1);
                }
            });
        },
        setMenuItem(name, list) {
            this.menuList.forEach(v => {
                if (v.name === name) {
                    v.list = list;
                }
            });
        },
        appendMenuItem(name, item) {
            this.menuList.forEach(v => {
                if (v.name === name) {
                    v.list.push(item);
                }
            });
        },
        removeMenuItem(item) {
            this.menuList.forEach(v => {
                let idx;
                if (is.String(item)) {
                    [...v.list].forEach((menu, idx) => {
                        if (menu.name === item) {
                            v.list.splice(idx, 1);
                        }
                    });
                } else {
                    if ((idx = v.list.indexOf(item)) > -1) {
                        v.list.splice(idx, 1);
                    }
                }
            });
        },
        addComponent(data) {
            if (Array.isArray(data)) {
                data.forEach(v => {
                    ruleList[v.name] = v;
                });
            } else {
                ruleList[data.name] = data;
            }
        },
        dragStart(children) {
            this.moveRule = children;
            this.added = false;
        },
        dragUnchoose(children, evt) {
            this.addRule = {
                children,
                oldIndex: evt.oldIndex
            };
        },
        getParent(rule) {
            let parent = rule.__fc__.parent.rule;
            const config = parent.config;
            if (config && config.config.inside) {
                rule = parent;
                parent = parent.__fc__.parent.rule;
            }
            return {root: parent, parent: rule};
        },
        makeDrag(group, tag, children, on, subRule) {
            return {
                type: 'DragBox',
                wrap: {
                    show: false
                },
                col: {
                    show: false
                },
                inject: true,
                props: {
                    rule: {
                        props: {
                            tag: 'el-col'
                        },
                        attrs: {
                            group: group === true ? 'default' : group,
                            ghostClass: 'ghost',
                            animation: 150,
                            handle: '._fc-drag-btn',
                            emptyInsertThreshold: 0,
                            direction: 'vertical',
                        }
                    },
                    subRule: subRule || {
                        props: {
                            name: 'fade',
                            tag: 'div'
                        },
                    },
                    tag,
                },
                children,
                on
            };
        },
        clearDragRule() {
            this.setRule([]);
        },
        makeDragRule(children) {
            return [this.makeDrag(true, 'draggable', children, {
                add: (inject, evt) => this.dragAdd(children, evt),
                end: (inject, evt) => this.dragEnd(children, evt),
                start: (inject, evt) => this.dragStart(children, evt),
                unchoose: (inject, evt) => this.dragUnchoose(children, evt),
            }, {
                props: {
                    name: 'fade',
                    tag: 'div'
                }
            })];
        },
        previewFc() {
            this.preview.state = true;
            this.preview.rule = this.getRule();
            this.preview.option = this.getOption();
        },
        getPageData() {
            let formRule = this.parseRule(deepCopy(this.dragForm.api.rule[0].children));
            var pageData = {
                ...this.pageInfoForm,
                formRule
            }
            return pageData

        },
        getRule() {
            return this.parseRule(deepCopy(this.dragForm.api.rule[0].children));
        },
        getJson() {
            return designerForm.toJson(this.getRule());
        },
        getOption() {
            const option = deepCopy(this.form.value);
            option.submitBtn = option.form.formCreateSubmitBtn;
            option.resetBtn = option.form.formCreateResetBtn;
            delete option.form.formCreateSubmitBtn;
            delete option.form.formCreateResetBtn;
            return option;
        },
        setRule(rules) {
            const children = this.loadRule(is.String(rules) ? designerForm.parseJson(rules) : rules);
            this.children = children;
            this.clearActiveRule();
            this.dragForm.rule = this.makeDragRule(children);
        },
        clearActiveRule() {
            this.activeRule = null;
            // this.activeTab = 'form';
            // this.configType = 'banner';
        },
        setOption(data) {
            let option = {...data};
            option.form.formCreateSubmitBtn = !!option.submitBtn;
            option.form.formCreateResetBtn = !!option.resetBtn;
            option.submitBtn = false;
            delete option.resetBtn;
            this.form.value = option;
        },
        loadRule(rules) {
            const loadRule = [];
            rules.forEach(rule => {
                if (is.String(rule)) {
                    return loadRule.push(rule);
                }
                const config = ruleList[rule._fc_drag_tag] || ruleList[rule.type];
                const _children = rule.children;
                rule.children = [];
                if (rule.control) {
                    rule._control = rule.control;
                    delete rule.control;
                }
                if (config) {
                    rule = this.makeRule(config, rule);
                    if (_children) {
                        let children = rule.children[0].children;

                        if (config.drag) {
                            children = children[0].children;
                        }
                        children.push(...this.loadRule(_children));
                    }
                } else if (_children) {
                    rule.children = this.loadRule(_children);
                }
                loadRule.push(rule);
            });
            return loadRule;
        },
        parseRule(children) {
            return [...children].reduce((initial, rule) => {
                if (is.String(rule)) {
                    initial.push(rule);
                    return initial;
                } else if (rule.type === 'DragBox') {
                    initial.push(...this.parseRule(rule.children));
                    return initial;
                } else if (rule.type === 'DragTool') {
                    rule = rule.children[0];
                    if (rule.type === 'DragBox') {
                        initial.push(...this.parseRule(rule.children));
                        return initial;
                    }
                }
                if (!rule) return initial;
                rule = {...rule};
                if (rule.children.length) {
                    rule.children = this.parseRule(rule.children);
                }

                delete rule._id;
                if (rule.config) {
                    delete rule.config.config;
                }
                if (rule.effect) {
                    delete rule.effect._fc;
                    delete rule.effect._fc_tool;
                }
                if (rule._control) {
                    rule.control = rule._control;
                    delete rule._control;
                }
                Object.keys(rule).filter(k => (Array.isArray(rule[k]) && rule[k].length === 0) || (is.Object(rule[k]) && Object.keys(rule[k]).length === 0)).forEach(k => {
                    delete rule[k];
                });
                initial.push(rule);
                return initial;
            }, []);
        },
        baseChange(field, value, _, fapi) {
            if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
                this.$set(this.activeRule, field, value);
            }
        },
        propRemoveField(field, _, fapi) {
            if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
                this.dragForm.api.sync(this.activeRule);
                if (field.indexOf('formCreate') === 0) {
                    field = field.replace('formCreate', '');
                    if (!field) return;
                    field = lower(field);
                    if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
                        this.$delete(this.activeRule.effect, field.split('>')[1]);
                    } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
                        this.$delete(this.activeRule.props, field.split('>')[1]);
                    } else if (field === 'child') {
                        this.$delete(this.activeRule.children, 0);
                    } else if (field) {
                        this.$set(this.activeRule, field, undefined);
                    }
                } else {
                    this.$delete(this.activeRule.props, field);
                }
            }
        },
        propChange(field, value, _, fapi) {
            if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
                if (field.indexOf('formCreate') === 0) {
                    field = field.replace('formCreate', '');
                    if (!field) return;
                    field = lower(field);
                    if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
                        this.$set(this.activeRule.effect, field.split('>')[1], value);
                    } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
                        this.$set(this.activeRule.props, field.split('>')[1], value);
                    } else if (field === 'child') {
                        this.$set(this.activeRule.children, 0, value);
                    } else {
                        this.$set(this.activeRule, field, value);
                    }
                } else {
                    this.$set(this.activeRule.props, field, value);
                }
            }
        },
        validateChange(formData) {
            if (!this.activeRule || this.validateForm.api[this.activeRule._id] !== this.activeRule) return;
            this.activeRule.validate = formData.validate || [];
            this.dragForm.api.refreshValidate();
            this.dragForm.api.nextTick(() => {
                this.dragForm.api.clearValidateState(this.activeRule.field);
            });
        },
        toolActive(rule) {
            if (this.activeRule) {
                delete this.propsForm.api[this.activeRule._id];
                delete this.baseForm.api[this.activeRule._id];
                delete this.validateForm.api[this.activeRule._id];
            }

            this.activeRule = rule;

            this.$nextTick(() => {
                this.activeTab = 'props';
                this.$nextTick(() => {
                    this.propsForm.api[this.activeRule._id] = this.activeRule;
                    this.baseForm.api[this.activeRule._id] = this.activeRule;
                    this.validateForm.api[this.activeRule._id] = this.activeRule;
                });
            });

            if (!this.cacheProps[rule._id]) {
                this.cacheProps[rule._id] = rule.config.config.props(rule);
            }

            this.propsForm.rule = this.cacheProps[rule._id];

            const formData = {...rule.props, formCreateChild: rule.children[0]};
            Object.keys(rule).forEach(k => {
                if (['effect', 'config', 'payload', 'id', 'type'].indexOf(k) < 0)
                    formData['formCreate' + upper(k)] = rule[k];
            });
            ['props', 'effect'].forEach(name => {
                rule[name] && Object.keys(rule[name]).forEach(k => {
                    formData['formCreate' + upper(name) + '>' + k] = rule[name][k];
                });
            });
            this.propsForm.options.formData = formData;

            this.showBaseRule = hasProperty(rule, 'field') && rule.input !== false;

            if (this.showBaseRule) {
                this.baseForm.options.formData = {
                    field: rule.field,
                    title: rule.title || '',
                    info: rule.info,
                    _control: rule._control,
                };

                this.validateForm.options.formData = {validate: rule.validate ? [...rule.validate] : []};
            }
        },
        dragAdd(children, evt) {
            const newIndex = evt.newIndex;
            const menu = evt.item._underlying_vm_;
            if (!menu) {
                if (this.addRule) {
                    const rule = this.addRule.children.splice(this.addRule.oldIndex, 1);
                    children.splice(newIndex, 0, rule[0]);
                }
            } else {
                const rule = this.makeRule(ruleList[menu.name]);
                children.splice(newIndex, 0, rule);
            }
            // 拖拽后选中此拖拽的组件
            setTimeout(() => {
                let dragItems = document.getElementsByClassName('drag-tool')[newIndex]
                dragItems.click();
            }, 300);
            this.added = true;
        },
        dragEnd(children, {newIndex, oldIndex}) {
            if (!this.added && !(this.moveRule === children && newIndex === oldIndex)) {
                const rule = this.moveRule.splice(oldIndex, 1);
                children.splice(newIndex, 0, rule[0]);
            }
            this.moveRule = null;
            this.addRule = null;
            this.added = false;
        },
        makeRule(config, _rule) {
            var that = this;
            const rule = _rule || config.rule();
            rule.config = {config};
            if (!rule.effect) rule.effect = {};
            rule.effect._fc = true;
            rule._fc_drag_tag = config.name;

            let drag;

            if (config.drag) {
                const children = [];
                rule.children.push(drag = this.makeDrag(config.drag, rule.type, children, {
                    end: (inject, evt) => this.dragEnd(inject.self.children, evt),
                    add: (inject, evt) => this.dragAdd(inject.self.children, evt),
                    start: (inject, evt) => this.dragStart(inject.self.children, evt),
                    unchoose: (inject, evt) => this.dragUnchoose(inject.self.children, evt),
                }));
            }

            if (config.children && !_rule) {
                const child = this.makeRule(ruleList[config.children]);
                (drag || rule).children.push(child);
            }

            const mask = this.mask !== undefined ? this.mask !== false : config.mask !== false;

            if (config.inside) {
                rule.children = [{
                    type: 'DragTool',
                    props: {
                        dragBtn: config.dragBtn !== false,
                        children: config.children,
                        mask,
                    },
                    effect: {
                        _fc_tool: true
                    },
                    inject: true,
                    on: {
                        delete: ({self}) => {
                            const parent = this.getParent(self).parent;
                            parent.__fc__.rm();
                            this.$emit('delete', parent);
                            this.clearActiveRule();
                        },
                        add: ({self}) => {
                            const top = this.getParent(self);
                            this.$emit('add', top.parent);
                            top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, this.makeRule(top.parent.config.config));
                        },
                        addChild: ({self}) => {
                            const top = this.getParent(self);
                            const config = top.parent.config.config;
                            const item = ruleList[config.children];
                            if (!item) return;
                            (!config.drag ? top.parent : top.parent.children[0]).children[0].children.push(this.makeRule(item));
                        },
                        copy: ({self}) => {
                            const top = this.getParent(self);
                            this.$emit('copy', top.parent);
                            top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, designerForm.copyRule(top.parent));
                        },
                        active: ({self}) => {
                            const top = this.getParent(self);
                            this.$emit('active', top.parent);
                            this.toolActive(top.parent);
                        },
                        click(){
                            that.shwoFormConfig();
                        }
                    },
                    children: rule.children
                }];
                return rule;
            } else {
                return {
                    type: 'DragTool',
                    props: {
                        dragBtn: config.dragBtn !== false,
                        children: config.children,
                        mask,
                    },
                    effect: {
                        _fc_tool: true
                    },
                    inject: true,
                    on: {
                        delete: ({self}) => {
                            this.configType = 'banner';
                            // 解决删除规则问题
                            setTimeout(() => {
                                this.configType = 'banner';
                            }, 500);
                            this.showBannerConfig();
                            // this.$emit('delete', self.children[0]);
                            self.__fc__.rm();
                            // this.clearActiveRule();
                        },
                        add: ({self}) => {
                            this.$emit('add', self.children[0]);
                            const top = this.getParent(self);
                            top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, this.makeRule(self.children[0].config.config));
                        },
                        addChild: ({self}) => {
                            const config = self.children[0].config.config;
                            const item = ruleList[config.children];
                            if (!item) return;
                            (!config.drag ? self : self.children[0]).children[0].children.push(this.makeRule(item));
                        },
                        copy: ({self}) => {
                            this.$emit('copy', self.children[0]);
                            const top = this.getParent(self);
                            top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, designerForm.copyRule(top.parent));
                        },
                        active: ({self}) => {
                            this.$emit('active', self.children[0]);
                            this.toolActive(self.children[0]);
                        },
                        click(){
                            that.shwoFormConfig();
                        }
                    },
                    children: [rule]
                };
            }
        },
        handleMouseenter(e,data){
            e.target.children[0].src = data.activeIcon ? data.activeIcon : data.icon;
        },
        handleMouseleave(e,data){
            e.target.children[0].src = data.icon;
        },
        handTest(){
            // console.log(this.menuList)
        },
    },
    created() {
        document.body.ondrop = e => {
            e.preventDefault();
            e.stopPropagation();
        };
    }
};
</script>
<style lang="less">
._fc-designer {
    height: 100%;
    min-height: 500px;
    overflow: hidden;
    cursor: default;
    position: relative;
}

._fc-designer > .el-main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0px;
}

._fc-m .form-create ._fc-l-item {
    background: #2E73FF;
    width: 100%;
    height: 10px;
    overflow: hidden;
    transition: all .3s ease;
}
._fc-l{
    box-shadow: 12px 4px 32px 0px rgba(0,0,0,0.0400);
    background: #F5F5F5;
}
._fc-l, ._fc-m, ._fc-r {
    border-top: 1px solid #ECECEC;
    box-sizing: border-box;
}

._fc-l-group {
    padding: 0 24px;
    padding-right: 16px;
}

._fc-l-title {
    
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.6500);
    line-height: 22px;
    margin-top: 24px;
    margin-bottom: 8px;
}

._fc-l-item {
    display: inline-block;
    background: #FFF;
    font-weight: 400;
    color: rgba(0,0,0,0.6500);
    width: 100px;
    height: 36px;
    transition: all .2s ease;
    cursor: pointer;
    margin-right: 8px;
    margin-bottom: 8px;
    line-height: 34px;
    padding-left: 8px;
    box-sizing: border-box;    
    border: 1px solid rgba(0,0,0,0.1500);
}

._fc-l-item i {
    font-size: 21px;
    display: inline-block;
}

._fc-l-item ._fc-l-name {
    font-size: 12px;
}

._fc-l-item ._fc-l-icon img{
    vertical-align: text-bottom;
    margin-right: 4px;
}

._fc-l-item:hover {
    
    background: #FFFFFF;
    border-radius: 2px 2px 2px 2px;
    border: 1px solid #828EE8;
    color: #828EE8;
    box-sizing: border-box;
}

._fc-m-tools {
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: flex-end;
    border: 1px solid #ECECEC;
    border-top: 0 none;
}

._fc-m-tools button.el-button {
    padding: 5px 14px;
    display: flex;
    align-items: center;
}

._fc-m-tools .fc-icon {
    font-size: 14px;
    margin-right: 2px;
}

._fc-r .el-tabs__nav-wrap::after {
    height: 1px;
    background-color: #ECECEC;
}

._fc-r ._fc-r-tabs {
    display: flex;
    padding: 0;
    border-bottom: 1px solid #ECECEC;
}

._fc-r ._fc-r-tab {
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 600;
    color: #303133;
    position: relative;
    flex: 1;
    text-align: center;
}

._fc-r ._fc-r-tab.active {
    color: #409EFF;
    border-bottom: 2px solid #409EFF;
}

.drag-box {
    min-height: 60px;
}
._fc-m-drag{
    padding-bottom: 35px;
    padding-top: 30px;
    border: 1px dashed rgba(0, 0, 0, 0.25);
    border-top: none;
    border-bottom: none;
}
._fc-m-drag .el-form{
    min-height: 200px;
}
._fc-m-drag, .draggable-drag {
    background: #fff;
    position: relative;
}
.draggable-drag{
    height: 100%;
}

._fc-m-drag > form, ._fc-m-drag > form > .el-row {
    height: 100%;
}
._fc-designer .canvas-warp{
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    background: #fff;
    max-width: 800px;
    margin: 0 auto;
}
.no-rule-wrap .el-row{
    display: flex;
}
.no-rule-wrap .draggable-drag{
    border: 1px dashed rgba(0,0,0,0.2500);
    margin-left: 35px;
    margin-right: 35px;
}
.no-rule-wrap{
    position: relative;
}
.no-rule-wrap-text{
    display: none;
}
.no-rule-wrap .no-rule-wrap-text{
    display: inline-block;
    position: absolute;
    left: 40%;
    z-index: 100;
    top: 80px;
    color: rgba(0,0,0,0.6500);
}
.no-rule-wrap .no-rule-wrap-text img{
    vertical-align: -2px;
}
.footer-btn{
    text-align: center;
    background: #fff;
    box-shadow: 0px -4px 8px 0px rgba(0,0,0,0.0400);
    border-top: 1px solid #eee;
    padding: 10px 0;
}
.footer-btn .text-span{
    height: 48px;
    width: 300px;
    border-radius: 28px 28px 28px 28px;
    background: #828EE8;
    display: inline-block;
    line-height: 48px;
    cursor: pointer;
    color: #EEEEEE;
    font-weight: 400;
}
.main-box-designer{
    background: #F0F2F5;
    padding: 40px;
    margin-bottom: 60px;
    .el-select{
        width: 100%;
    }
    .el-date-editor{
        width: 100%;
    }
}
.left-main-title{
    padding-top: 16px;
    padding-left: 24px;
    color: rgba(0,0,0,0.8500);
    font-weight: 600;
    font-size: 16px;
}
.empty-item-right{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0,0.4500);
    font-weight: 400;
    font-size: 14px;
    .right-item-text{
        line-height:22px;
    }
}
</style>
