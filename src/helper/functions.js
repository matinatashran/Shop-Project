const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);

    if (index === -1)
        return false;
    else
        return state.selectedItems[index].quantity;
}

export { quantityCount };


// ------------- Validation -------------

let password = "";
const validate = (data, type) => {
    let error = "";

    if (type === "SignUp"){
        if (data.name === "Name"){
            if (!data.value.trim()){
                error= "Username required";
            }
        }
        
        else if (data.name === "Email"){
            if (!data.value){
                error = "Email required";
            }
            else if (!/\S+@\S+\.\S+/.test(data.value)){
                error = "Email address is invalid";
            }
        }
        
        else if (data.name === "Password"){
            if (!data.value){
                error = "Password required";
            }
            else if (!(data.value.length >= 6)){
                error = "Password must be at least 6 charactors";
            }   
            password = data.value;
        }
        
        else if (data.name === "ConfirmPassword"){
            if (!data.value){
                error = "ConfirmPassword required";
            }
            else if (data.value !== password){
                error = "Passwords are not matched";
            }
        }
        
        else if (data.name === "Accepted"){
            if (!data.value){
                error = "Please Accepted our Rules";
            }
        }
        
    }

    else { 
        if (data.name === "Email"){
            if (!data.value){
                error = "Email required";
            }
            else if (!/\S+@\S+\.\S+/.test(data.value)){
                error = "Email address is invalid";
            }
        } 
        
        else if (data.name === "Password"){
            if (!data.value){
                error = "Password required";
            }
            else if (!(data.value.length >= 6)){
                error = "Password must be at least 6 charactors";
            }   
        }
    }

    return error;   

}

export { validate };
