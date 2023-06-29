<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';
// import { RouterLink } from 'vue-router'

//una a dos propiedasdes se usa asi
//const props = defineProps<{ title?: string }>()

//con mas propiedades se usa asi
interface Props {
  title?: string;
  links: RouterLink[];
  showIcon? : boolean
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => ([])
});


</script>
<template>
  <nav>
    <img v-if="props.showIcon" src="@/assets/logo.svg" alt="logo" class="logo" />
    <span v-if="props.title">{{ props.title}}</span>
    <RouterLink v-for="link of props.links" :key="link.path" :to="link.path" class="link">
      {{ link.tittle }}
    </RouterLink>
    <!--
    <RouterLink :to="'/'">Inicio</RouterLink>
    <RouterLink :to="'/about'">Sobre</RouterLink>
    -->
  </nav>
</template>

<style>
nav {
  align-items: flex-start;
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}

.logo {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

span {
  margin-right: 10px;
}

a {
  margin-right: 5px;
}

.router-link-active{
  text-decoration: underline;
}
.router-link-exact-active{
  background-color: #555;
  border-radius: 25%;
}
</style>
