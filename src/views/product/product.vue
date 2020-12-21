<style scoped lang="scss" src="./product.scss"></style>
<template src="./product.html"></template>
<script>
// @ is an alias to /src
import productForm from '@/components/product_form/product_form.vue';

export default {
  name: 'product',
  components: {
    productForm,
  },
  data() {
    return {
      formFields: ['product id', 'quantity', 'store id'],
    };
  },
};
</script>
