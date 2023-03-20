var sum =function(x,y){
    if(isNaN(x)|| isNaN(y)){
        return "ERRor";   

    }
    else{
        return x+y;   
    }
}
var sub=function(x,y){
    if(isNaN(x)|| isNaN(y)){  
        return "ERRor";   
   
    }
    else{
        return x-y;
    }
}
var multi=function(x,y){
    if(isNaN(x)|| isNaN(y)){
        return "ERRor"; 
    }
    else{     
        
       return x*y;                            
}
}
var greet =function(name,Bd){
    var d= new Date();
    var age=d.getFullYear()-Bd.getFullYear();
    if(age>0){
    return "Hello"+name+"youe age is"+age;
    }
    else{
        return "NotValid";
    }
}

module.exports={
    summition:sum,
    subtractionn:sub,
    multiply:multi,
    greet:greet
}