const error_manager = (err)=>{
    switch (err.code) {
        case "ERR_BAD_REQUEST":
            
            return {type : "server",code : err.status, msj : err.response.data.msj}
    
        default:
            alert("ERROR DESCONOCIDO")
            console.log(err);
            
            return {type: "noshe",code : 500, msj : ""}
    
    }
};