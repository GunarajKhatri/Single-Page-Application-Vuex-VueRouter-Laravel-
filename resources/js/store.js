


export default{
	state:{
		lists:[
		
		],
		responsedata:'',
		errors:{
			name:'',
			email:'',
			number:''
		},
		updateduser:{}
	},
	getters:{
		
	},
	actions:{
		add(context,payload){
			
			
				
			axios.post('/stds/create',{email:payload.email,
				number:payload.number,name:payload.name}).then((response)=>
	   context.commit('respon',response.data)
	  
	  )
	  .catch((error)=>context.commit('errorr',error.response.data.errors)) 
		},
		getdata(context){
			axios.post('/stds/show/data').then((response)=>
	  context.commit('getdatares',response))
		},
		del(context,payload){
			if(confirm('Are you sure you want to delete?')){
  	axios.delete(`/stds/show/data/${payload[1]}`).then((response)=>
	  //this.list.splice(key,1))
	  context.commit('deleting',payload[0]))
	  
	 
	}
		},
		getupdid(context,payload){
			context.commit('getupduser',payload)
		},

		update(context,payload){
			axios.patch(`/stds/${payload.id}/update`,{name:payload.name,email:
			payload.email,number:payload.number}).then((response)=>
	  context.commit('respon',response))
	  .catch((error)=>context.commit('errorr',error.response.data.errors))
		}
		
	},
	mutations:{
		getdatares(state,payload){
			state.lists=payload
		},
		respon(state,payload){
			state.responsedata=payload
			state.errors=''
		},
		errorr(state,payload){
			state.errors=payload
			/*if(payload!=''){
			state.errors.name=payload.name[0]
			state.errors.email=payload.email[0]
			state.errors.number=payload.number[0]
		}*/
		/*state.errors.name=null
		state.errors.email=null
		state.errors.number=null*/
			//state.errors=payload	
		},
		deleting(state,payload){
			state.lists.data.splice(payload,1)
		},
		getupduser(state,payload){
			state.updateduser=state.lists.data[payload]
			
		}

	}
}