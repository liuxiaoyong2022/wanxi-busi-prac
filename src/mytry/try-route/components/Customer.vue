<template>
    <div v-if="this.$route.params.name">
        <h4>Customer</h4>
        [id: {{ this.$route.params.id }} - 
        name: {{ this.$route.params.name }}]
    </div>
    <div v-else>
        <br/>
        <p>Please click on a Customer...</p>
    </div>
</template>

<script>
export default {
  name: "customer"
};
</script>
