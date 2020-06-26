<template>
	<div class="container" style="margin-top:100px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Update details
          
                </div>

                <div class="card-body">

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Student Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control"v-model="lists.name">
                                

                                
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email"v-model="lists.email">
                                
                            </div>
                        </div>
                         <div class="form-group row">
                            <label for="number" class="col-md-4 col-form-label text-md-right">Phone Number</label>

                            <div class="col-md-6">
                                <input id="number" type="number" class="form-control" name="number"v-model="lists.number">
                                
                            </div>
                        </div>

                        

                      

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary"@click="update(lists)">
                                    Update
                                </button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
    	mounted(){
        	this.lists=this.$store.state.updateduser
        	console.log(this.lists)
        },
        data(){
        	return{
        		lists:{}
        	}
        },
        methods:{
        	update(items){
        		this.$store.dispatch('update',items)
        	}
        }
       
    }
</script>