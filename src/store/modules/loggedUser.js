export default{
  
    namespaced:true,
    state(){
        return{
            loggedUserEmail: null, 
            loggedUserId:null,
            loggedUserFirstName:null,
            loggedUserLastName:null,
            Id2:null,

           
        };
    },

    mutations:{
        LoggedUser(state,payload){
            //console.log(payload)
            // const newUser = {
            //    // Id: payload.Id,
            //    // FirstName: payload.FirstName,
            //    // LastName: payload.LastName,
            //     Email: payload.Email,
               
            //   };
              state.loggedUserEmail=payload.Email;
             // console.log("54646466")
              //console.log(state.loggedUser)
        },
        userDetail(state,payload){
            state.loggedUserId=payload.Id;
            state.loggedUserFirstName=payload.FirstName;
            state.loggedUserLastName=payload.LastName;
            
            //console.log(state.loggedUserId)
        },
        setId2(state,payload){
            state.Id2=payload.Id2;
           
        }
    },

    actions:{
        addLoggedUser(context,payload){
            context.commit('LoggedUser',payload)
        },
        addUserDetail(context,payload){
            context.commit('userDetail',payload)
        },
        addId2(context,payload){
            context.commit('setId2',payload)
        }
        
    },

    getters:{
        loggedEmail(state){
            return state.loggedUserEmail;
        },
        loggedUserId(state){
            return state.loggedUserId;
        },
        getId2(state){
            return state.Id2;
        },
           
       
    }
  
}