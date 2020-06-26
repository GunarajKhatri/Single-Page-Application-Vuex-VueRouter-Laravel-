<template>
<div class="container" style="margin-top:100px;">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Add details <span></span>
          <span v-if="this.$store.state.responsedata"class="alert alert-success"><b>{{this.$store.state.responsedata}}</b></span>
                </div>

                <div class="card-body">
                    

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Student Name</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control"autofocus v-model="items.name">
                                <span v-if="this.$store.state.errors.name" class="text-danger">{{this.$store.state.errors.name[0]}}</span>                          
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email"v-model="items.email">
                                <span v-if="this.$store.state.errors.email"  class="text-danger">{{this.$store.state.errors.email[0]}}</span>
                                
                            </div>
                        </div>
                         <div class="form-group row">
                            <label for="number" class="col-md-4 col-form-label text-md-right">Phone Number</label>

                            <div class="col-md-6">
                                <input id="number" type="number" class="form-control" name="number"v-model="items.number">
                                <span v-if="this.$store.state.errors.number" class="text-danger">{{this.$store.state.errors.number[0]}}</span>
                                
                            </div>
                        </div>

                        

                      

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary"@click="add(items)">
                                    Add
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

        data(){
        	return{ 
        		items:{
        			name:'',
        			email:'',
        			number:''
        		}
        		
        	}
        },
        
        
        methods:{

        	add(fields){
        		
        		this.$store.dispatch('add',fields);
        
        	}


        	
        
        }
        
    }

</script>