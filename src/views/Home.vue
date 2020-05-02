<template>
  <section>
    <h1>Compre ou venda</h1>
    <ProdutosBucar />
    <ProdutosLista />
  </section>
</template>

<script>
import ProdutosBucar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "Home",
  components: {
    ProdutosBucar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
