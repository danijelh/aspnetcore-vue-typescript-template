<template>
    <div>
        <div class="container">
            <h1 class="title">
                {{ pageTile }}
            </h1>
            <h2 class="subtitle">
                And that's fine, don't use it.
            </h2>

            <div class="columns">
                <div class="column">
                    <div class="notification is-warning">
                        <p class="has-text-grey-dark">For one-man, prototypes or smaller projects TypeScript can be an overhead and even make you slower. However, if you're working in a team or a larger application please consider using TypeScript as it can have a very positive effect on development and further maintenance. </p>
                    </div>
                </div>
            </div>

            <div class="content">

            <p>This template supports both <strong>.ts</strong> and <strong>.js</strong> but if you want to completely opt out of TypeScript do the following</p>

            <ul>
                <li>
                    Rename all <strong>.ts</strong> files to <strong>.js</strong> and remove types from code.
                </li>
                <li>
                    In <strong>webpack.config.js</strong> remove <strong>ts-loader</strong> and remove <strong>".ts"</strong> extension
                </li>
            </ul>

        </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pageTile: 'I don\'t need TypeScript'
            }
        }
    }
</script>

<style scoped>

</style>
