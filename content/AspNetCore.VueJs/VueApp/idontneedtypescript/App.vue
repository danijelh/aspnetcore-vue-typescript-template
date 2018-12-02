<template>
    <div>

        <div class="container">
            <div class="columns">
                <div class="column is-3">
                    <section class="section">
                        <aside class="menu">
                            <p class="menu-label">
                                Examples
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <router-link :to="{ name: 'counter' }">Counter</router-link>
                                </li>
                            </ul>
                            <p class="menu-label">
                                About
                            </p>
                            <ul class="menu-list">
                                <li>
                                    <router-link :to="{ name: 'moduleinfo' }">Module info</router-link>
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

<script>
import Vue from 'vue'
import Notifications from 'vue-notification'

Vue.use(Notifications)

export default {
  name: 'App'
}
</script>

<style scoped>
</style>
