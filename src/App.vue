<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
      <app-header></app-header>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <router-view></router-view>
            </div>
          </div>
      </div>
    </main>
</div>

</template>

<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header
    }
  }
</script>

<style>
  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
