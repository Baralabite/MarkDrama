<template>
  <div>
    <q-card class="q-ma-lg page-card">
      <!--<q-card-section>
        <div class="text-h6">{{MarkDrama[$route.params.sectionID].name}}</div>
      </q-card-section>
      <q-separator/>-->
      <q-tabs
        v-model="tab"
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab
          v-for="scene in getScenes"
          :name="scene.order"
          :label="scene.name"
          :key="scene.order"/>
      </q-tabs>

      <q-separator />

      <q-card-section>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel
            v-for="scene in getScenes"
            :name="scene.order"
            :key="scene.order">
              <div class="text-h6">{{scene.name}}</div>
            <q-list>
              <q-item clickable v-for="(line, index) in scene.content" :key="index">
                <q-item-section>
                  {{line}}
                </q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>

      <q-separator/>

      <q-card-section>
      <div class="q-ma-sm">
        <div class="text-h6">Flow</div>
          <q-list>
            <q-item
              clickable
              v-for="(value, key) in MarkDrama[$route.params.sectionID].logic"
              :key="key">
              <q-item-section>
                <q-item-label>{{value.name}}</q-item-label>
                <q-item-label caption>{{value.text}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-card-section>

      <q-separator/>

      <q-card-section>
        <div class="q-ma-sm flex justify-end">
          <q-btn
            color="primary"
            @click="tab -= 1"
            :disable="!hasPreviousScene"
            flat
          >
            Back
          </q-btn>
          <q-btn
            color="primary"
            @click="tab += 1"
            :disable="!hasNextScene"
          >
            Next
          </q-btn>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { page } from 'vue-analytics';
import MarkDrama from '../markdrama';

export default {
  name: 'Section',
  data() {
    return {
      tab: 1,
      MarkDrama,
    };
  },
  mounted() {
    page(this.$route.path);
  },
  computed: {
    getScenes() {
      return MarkDrama[this.$route.params.sectionID].scenes;
    },

    getScene(scene) {
      return MarkDrama[this.$route.params.sectionID].scenes[scene];
    },
    hasNextScene() {
      return !(this.tab === this.getScenes.length);
    },
    hasPreviousScene() {
      return !(this.tab === 1);
    },
  },
  watch: {
    '$route.params.sectionID': function () {
      this.tab = 1;
    },
  },
};
</script>

<style scoped>
.page-card {
  background-color: #fff;
  border-radius: 10px;
}
</style>
