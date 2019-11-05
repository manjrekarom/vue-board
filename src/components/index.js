import Vue from 'vue';
import VueBoard from './VueBoard.vue';
import VueWidget from './VueWidget.vue';
import {GridItem, GridLayout} from 'vue-grid-layout';

let VueWidgetGrid = GridLayout; 
Vue.component('VueWidgetGrid', VueWidgetGrid);

let VueWidgetContainer = GridItem;
Vue.component('VueWidgetContainer', VueWidgetContainer);

const VueBoardComponents = {
    VueBoard,
    VueWidget,
}

Object.keys(VueBoardComponents).forEach(name => {
    Vue.component(name, VueBoardComponents[name]);
});

VueBoardComponents['VueWidgetGrid'] = VueWidgetGrid;
VueBoardComponents['VueWidgetContainer'] = VueWidgetContainer;

export default VueBoardComponents;
export { VueBoard, VueWidget, VueWidgetGrid, VueWidgetContainer };
