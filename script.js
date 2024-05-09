var locationError = document.getElementById('location-Error') //span name
var DestinationError = document.getElementById('destination-Error')
var submitMessage = document.getElementById('submit-Message')


function ValidateLocation(){
    var txtLocation = document.getElementById('txt-Location').value; //input value
   
    if(txtLocation.length==0){
        locationError.innerHTML='Location is required !!'
        locationError.style.color="red";
        return false;
    }
    
    locationError.innerHTML='Looking up...';
    locationError.style.color="yellow";
    return true;

}


function validateDestination(){
    var txtDestination = document.getElementById('txt-destination').value

    if(txtDestination.length==0){
        DestinationError.innerHTML='Destination is required !!'
        DestinationError.style.color="red";
        return false;
    }else{
        DestinationError.innerHTML="Looking up..."
        DestinationError.style.color="yellow";
        return true;
    }
}



function result(){
    if(!ValidateLocation()||!validateDestination()){
        submitMessage.innerHTML='Fill above errors !!'   
        submitMessage.style.color='red'  
        return false;
    }else{
        alert("please wait.. Detecting Dividers on your area ....");
        return true;
}
}
