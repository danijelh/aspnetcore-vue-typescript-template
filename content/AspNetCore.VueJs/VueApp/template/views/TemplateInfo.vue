<template>
    <div>
        <div class="container">
            <h1 class="title">
                {{ pageTitle }}
            </h1>
            <h2 class="subtitle">
                Template is created using Vue, Vue router, Vuex, TypeScript and Bulma.
            </h2>
            <template-info-about></template-info-about>
            <template-info-stack></template-info-stack>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import TemplateInfoAbout from '@/template/components/TemplateInfo/TemplateInfoAbout.vue'
import TemplateInfoStack from '@/template/components/TemplateInfo/TemplateInfoStack.vue'

@Component({
    name: 'TemplateInfo',
    components: {
        TemplateInfoAbout,
        TemplateInfoStack
    }
})
export default class TemplateInfo extends Vue {
    pageTitle: string = '.NET with Vue and TypeScript'
}
</script>

<style scoped>
</style>
