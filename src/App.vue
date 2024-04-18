<template>
  <header class="header container">
    <router-link :to="{ name: 'tickets' }" class="header__logo">
      <img src="img/Logo.svg" alt="Логотип" class="logo" loading="lazy">
    </router-link>
  </header>

  <h1 style="display: none;margin: 0;">Avia</h1>

  <router-view :key="$route.fullPath"/>

  <footer class="footer"></footer>
</template>
