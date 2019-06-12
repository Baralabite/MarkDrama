<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{$route.params.sectionID}}. {{MarkDrama[$route.params.sectionID].name}}
        </q-toolbar-title>

        <div>{{ MarkDrama[$route.params.sectionID].passage }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Sections</q-item-label>
        <q-item v-for="(value, key) in MarkDrama" :key="key" clickable :to="`/section/${key}`">
          <q-item-section>
            <q-item-label>{{value.sectionID}}. {{value.name}}</q-item-label>
            <q-item-label caption>{{value.passage}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <div class="bg-grey-2 q-pa-sm" style="height: 100vh">
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';
import MarkDrama from '../markdrama';

export default {
  name: 'Layout',
  data() {
    return {
      MarkDrama,
      leftDrawerOpen: false,
    };
  },
  methods: {
    openURL,
  },
};
</script>

<style scoped>
</style>
