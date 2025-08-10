import type { App, Component } from 'vue';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import Tree from './components/Tree.vue';
import Card from './components/Card.vue';
import Tabs from './components/Tabs.vue';
import Input from './components/Input.vue';
import TabPane from "./components/TapPane.vue";
import MContent from './components/Content.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import Layout from './components/Layout.vue';
import Loading from './components/Loading.vue';
import Sider from './components/Sider.vue';
import Slider from "./components/Slider.vue";
import Table from './components/Table.vue';
// 组件列表
const components: { [key: string]: Component } = {
    Button,
    Dialog,
    Tree,
    Card,
    Tabs,
    Input,
    TabPane,
    MContent,
    Footer,
    Layout,
    Loading,
    Slider,
    Sider,
    Header,
    Table,
};

// ... install 方法 ...
const install = (app: App) => {
    for (const key in components) {
        app.component(key, components[key]);
    }
};

// 导出所有组件
export { Button, Dialog, Tree,Card,TabPane,Tabs,Input,MContent,Footer,Layout,Loading,Slider,Sider,Header,Table }; // 👈 添加导出

export default {
    install,
};