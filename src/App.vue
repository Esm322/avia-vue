<template>
  <header class="header container">
    <a href="#" class="header__logo">
      <img src="img/Logo.svg" alt="Логотип" class="logo">
    </a>
  </header>

  <h1 style="display: none;">Avia</h1>

  <router-view :key="$route.fullPath"/>

  <footer class="footer"></footer>
</template>
