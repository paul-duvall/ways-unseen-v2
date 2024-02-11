<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/'
    },
    {
        label: 'About',
        icon: 'pi pi-star',
        route: '/about'
    },
  ])
</script>

<template>
  <header>
    <div class="wrapper">
      <AppMenubar :model="items">
        <template #start>
          <img src="./assets/ways-unseen-logo-smaller.png" width="40" />
        </template>
        <template #item="{ item, props }">
                <router-link v-slot="{ href, navigate }" :to="item.route" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                       <span>{{ item.label }}</span>
                    </a>
                </router-link>
            </template>
      </AppMenubar>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
