<template>
    <div>
        <div class="content">
            <p>
                This template shows approach to building multi-page .NET applications using <strong> Vue.js </strong> and <strong> TypeScript </strong>.
            </p>

            <p>
                If you feel like contributing, adding features and helping other fellow Vue.js developers you can do soo on <a href="https://github.com/danijelh/aspnetcore-vue-typescript-template"> Github </a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'TemplateInfoAbout'
})
export default class TemplateInfoAbout extends Vue { }
</script>

<style scoped>
</style>
