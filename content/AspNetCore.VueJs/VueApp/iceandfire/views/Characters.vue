<template>
    <div>

        <div class="columns">
            <div class="column is-4">
                <div class="field">
                    <label class="label">Character id</label>
                    <input @keydown.enter="fetchCharacter"
                           v-model="characterId"
                           class="input"
                           type="text"
                           placeholder="Character id">
                </div>
            </div>
        </div>

        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{ character.name }}</p>
                                <p class="subtitle is-6">{{ character.culture }} </p>
                            </div>
                        </div>
                        <div class="content">
                            <p v-for="(title, index) in character.titles"
                               :key="index">{{ title }}</p>
                            <br> <small>Born {{ character.born }}</small>
                        </div>
                    </div>
                </div>

            </div><!-- end card -->
            <div class="column">
                <table class="table table-hover is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th scope="col">Aliases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(alias, index) in character.aliases"
                            :key="index"
                            class="table-active">
                            <td>
                                {{ alias }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <notifications group="characters" />
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

import { Notification } from "@/common/services/notificationService";

@Component({
    name: 'Characters',
    computed: {
        ...mapGetters(['character'])
    }
})
export default class Characters extends Vue {

    characterId: number = 583

    created() {
        this.fetchCharacter()
    }

    fetchCharacter(): void {

        this.$store.dispatch('getCharacterById', this.characterId)
            .then(result => {

                Notification.success(this, 'Data fetched successfully!')

            }).catch(error => {

                Notification.error(this, 'Error fetching data!')

            })

    }
}
</script>

<style scoped>
</style>
