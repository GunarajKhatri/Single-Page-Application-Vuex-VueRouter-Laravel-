<template>
	<div>
<button type="button" class="btn btn-primary">Add user</button>
<div> 
</div>
<br>
<div class="container">
<table class="table table-dark table-bordered">
	<thead>
		<tr>
			<th scope="col">Username</th>
			<th scope="col">Email Addres</th>
			<th scope="col">Number</th>
			<th scope="col">Action</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="item,key in items">
			<td>{{item.name}}</td>
			<td>{{item.email}}</td>
			<td>{{item.number}}</td>
			<td><button @click="showupdate(key,item.id)">Update</button>
			<button @click="del(key,item.id)">Delete</button></td>
		</tr>
	</tbody>
</table>
</div>


</div>
</template>
<script>
    export default {
        name:'Showstd',
        mounted(){
        	this.$store.dispatch('getdata')
        },
        computed:{
        	items(){
        		return this.$store.state.lists.data

        	}
        },
        methods:{
        	del(key,id){
        		this.$store.dispatch('del',[key,id])
        	},
        	showupdate(key,id){
        		this.$store.dispatch('getupdid',key)
        		this.$router.push(`/stds/${id}/update`)
        	}
        }
    }
</script>