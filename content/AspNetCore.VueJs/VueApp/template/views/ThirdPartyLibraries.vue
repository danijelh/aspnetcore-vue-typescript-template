Y
<template>
    <div>
        <div class="container">
            <h1 class="title">
                Third party libraries
            </h1>
            <h2 class="subtitle">
                Examples using third party libraries and typings
            </h2>
            <br />
            <div class="columns">
                <div class="column is-4">
                    <div class="field">
                        <label class="label has-text-grey-dark">Dropdown</label>
                        <multiselect placeholder="Pick notification"
                                     :value="value"
                                     :options="options"
                                     :multiple="false"
                                     :searchable="false"
                                     :allow-empty="false"
                                     :max-height="150"
                                     :max="3"
                                     @select="onSelect"></multiselect>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="field">
                        <label class="label has-text-grey-dark">Date picker</label>
                        <div class="control">
                            <flat-pickr class="input"
                                        v-model="date"></flat-pickr>
                        </div>
                    </div>
                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <div class="notification is-warning">
                        <p class="has-text-grey-dark">When using third-party libraries you can often get an error in your IDE about missing typings. This is typically not an error since it is a valid Javascript but it is not a valid Typescript. To see how to resolve this, refer to <strong>common/types/</strong> files</p>
                    </div>
                </div>
            </div>

        </div>
        <notifications group="libraries" />

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Multiselect from 'vue-multiselect'
import Notifications from 'vue-notification'

import flatPickr from 'vue-flatpickr-component'

Vue.use(Notifications)

@Component({
    name: 'ThirdPartyLibraries',
    components: {
        flatPickr,
        Multiselect
    }
})
export default class ThirdPartyLibraries extends Vue {
    date: string = ''
    value: Array<string> = []
    options: Array<string> = ['Success', 'Warn', 'Error']

    onSelect(value: string) {
        this.$notify({
            group: 'libraries',
            title: value,
            type: value.toLowerCase(),
            text: value + ' notification'
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~flatpickr/dist/flatpickr.css';
@import '~flatpickr/dist/themes/airbnb.css';
</style>
