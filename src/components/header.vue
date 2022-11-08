<template>
  <header class="header">
    <nav class="nav">
      <div class="header__nav">
        <div class="container">
          <div class="header__nav">
            <div class="header__nav_title">
              <h1 class="header__title">Gantt Elastic demo</h1>
            </div>
            <div class="header__links">
              <ul class="header__ul">
                <li v-for="link in links" :key="link.url">
                  <router-link :to="link.url">{{ link.title }}</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props:['links']
};
</script>

<style>
</style>