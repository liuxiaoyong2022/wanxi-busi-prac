<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>grokonez</h1>
            <h3>Router example</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Customers</router-link>
            <router-link class="btn btn-primary" to="/add">Add</router-link>
            <router-link class="btn btn-primary" to="/search">Search</router-link>
          <router-link class="btn btn-primary" to="/state-compute">state-compute</router-link>
          <router-link class="btn btn-primary" to="/state-mapping">state-mapping</router-link>
          <router-link class="btn btn-primary" to="/compute-module">compute-module</router-link>
          <router-link class="btn btn-primary" to="/mapping-module">mapping-module</router-link>

        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
