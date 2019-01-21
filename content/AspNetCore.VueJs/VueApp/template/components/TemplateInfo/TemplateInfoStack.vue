<template>
    <div>
        <div class="content">
            <br>
            <h2>Stack</h2>
            <ul>
                <li>
                    <a href="https://www.microsoft.com/net" target="_blank">ASP.NET Core 2.2</a>
                </li>
                <li>
                    <a href="https://vuejs.org/" target="_blank">Vue</a>
                </li>
                <li>
                    <a href="https://router.vuejs.org/" target="_blank">Vue router</a>
                </li>
                <li>
                    <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a>
                </li>
                <li>
                    <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
                </li>
                <li>
                    <a href="https://bulma.io/" target="_blank">Bulma</a>
                </li>
                <li>
                    <a href="https://sass-lang.com/" target="_blank">Sass</a>
                </li>
                <li>
                    <a href="https://jestjs.io/" target="_blank">Jest</a>
                </li>
                <li>
                    <a href="https://webpack.js.org/" target="_blank">Webpack 4</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'TemplateInfoStack'
})
export default class TemplateInfoStack extends Vue { }
</script>

<style scoped>
</style>
