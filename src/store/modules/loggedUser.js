export default{
  
    namespaced:true,
    state(){
        return{
            loggedUserEmail: null, 
            loggedUserId:null,
            loggedUserFirstName:null,
            loggedUserLastName:null,

           
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
              console.log("54646466")
            console.log(state.loggedUserId)
        }
    },

    actions:{
        addLoggedUser(context,payload){
            context.commit('LoggedUser',payload)
        },
        addUserDetail(context,payload){
            context.commit('userDetail',payload)
        }
        
    },

    getters:{
        loggedEmail(state){
            return state.loggedUserEmail;
        },
        loggedUserId(state){
            return state.loggedUserId;
        },
           
       
    }
  
}