<style scoped lang="scss" src="./product_form.scss"></style>

<template src="./product_form.html"></template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'product_form',
  props: {
    formFields: Object,
  },
  computed: {
    ...mapState('checkoutService', ['cartInfo']),
  },
  methods: {
    addProductToCart() {
      this.$store.dispatch('checkoutService/addToCart');
    },
  },
};
</script>
