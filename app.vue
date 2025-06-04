<template>
  <v-app>
    <v-app-bar app elevation="1" class="app-bar px-4">
      <v-app-bar-title class="text-h5 font-weight-bold">
        <span class="text-indigo-lighten-3">Jean</span> Bacari
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-flex d-md-none text-white"></v-app-bar-nav-icon>
      <div class="d-none d-md-flex">
        <v-btn v-for="item in menuItems" :key="item.title" :href="item.href" variant="text" class="mx-1 text-white">
          {{ item.title }}
        </v-btn>
        <v-btn color="primary" variant="flat" class="ml-4" href="https://calendly.com/bacari-bm" target="_blank">
          Je réserve un appel
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary class="night-drawer">
      <v-list class="pa-0">
        <v-list-item v-for="item in menuItems" :key="item.title" :href="item.href" @click="drawer = false"
          class="text-white">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item class="pa-4">
          <v-btn block color="accent" variant="flat" class="mt-4">Contact Us</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <Hero />
      <Services />
      <ClientProof />
      <Pricing />
      <Cta />
      <v-divider class="my-5"></v-divider>
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import AppFooter from './components/AppFooter.vue';
import ClientProof from './components/ClientProof.vue';
import Cta from './components/Cta.vue';
import Hero from './components/Hero.vue';
import Pricing from './components/Pricing.vue';
import Services from './components/Services.vue';

const drawer = ref(false);

const menuItems = [
  { title: 'Services', href: '#services' },
  { title: 'Témoignages', href: '#testimonials' },
  { title: 'Tarifs', href: '#pricing' }
];
</script>

<style scoped>
.app-bar {
  background: linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%) !important;
  color: white !important;
}

.night-drawer {
  background: linear-gradient(180deg, #1a237e 0%, #283593 100%) !important;
}
</style>