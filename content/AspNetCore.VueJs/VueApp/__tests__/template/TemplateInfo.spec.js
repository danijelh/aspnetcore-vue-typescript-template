import Vuex from "vuex";
import {
    createLocalVue,
    shallowMount
} from "@vue/test-utils";

import TemplateInfo from "@/template/views/TemplateInfo.vue";
import TemplateInfoAbout from "@/template/components/TemplateInfo/TemplateInfoAbout.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe.only("TemplateInfo.vue", () => {

    it('Sets the correct default data', () => {

        const wrapper = shallowMount(TemplateInfo, {
            localVue
        });

        expect(wrapper.vm.pageTitle).toBe('.NET with Vue and TypeScript')
    })

    it('Has TemplateInfoAbout component', () => {

        const wrapper = shallowMount(TemplateInfo, {
            localVue
        });

        expect(wrapper.contains(TemplateInfoAbout)).toBe(true)
    })

});
