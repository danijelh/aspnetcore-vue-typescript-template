<template>
    <div>
        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <section class="section">
                        <aside class="menu">
                            <p class="menu-label">
                                Game of thrones api
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <router-link :to="{ name: 'characters' }">Characters</router-link>
                                </li>
                            </ul>
                        </aside>
                    </section>
                </div>
                <div class="column is-9">

                    <section class="section">
                        <transition name="component-fade"
                                    mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </section>

                </div>
            </div>
        </div>
        <notifications group="global" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Notifications from 'vue-notification'

Vue.use(Notifications)

@Component({
    name: 'App'
})
export default class App extends Vue { }
</script>

<style scoped>
</style>
