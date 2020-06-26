<template>
	<div class="container">
	<div class="text-center col-lg-12">
		<h1>Product list</h1>
		<ul v-for="product in products">

			<li>{{product.name}}<span></span> Rs.{{product.price}}</li>
		</ul>
		<button @click="changeProd(3)">Change</button>
	</div>
	</div>
</template>
<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
    export default {
      computed:{
      	products(){
      		return this.$store.getters.products;
      	}
      },
      methods:{
      	changeProd(discount){
      		this.$store.dispatch('changeProd',discount);
      	}
      	
      }
    }
</script>