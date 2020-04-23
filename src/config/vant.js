import Vue from 'vue';
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
import { ActionSheet } from 'vant'
import { Search } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { Sticky } from 'vant';
import { TreeSelect } from 'vant';
import { Overlay } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu);
Vue.use(DropdownItem);

Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Button).use(Swipe).use(SwipeItem).use(ActionSheet).use(Search).use(Sticky).use(TreeSelect).use(Overlay)