function saturdayFun(string) {
if(!string){
    return "This Saturday, I want to roller-skate!";
} else if (string){
return "This Saturday, I want to bathe my dog!";
}
else {
    return `This Saturday, I want to ${string}`;
}
}
saturdayFun("bathe my dog!");

function mondayWork(string) {
    if(!string){
        return "This Monday, I will go to the office.";
    } else if (string){
    return "This Monday, I will work from home.";
    }
    else {
        return `This Monday, I will ${string}`;
    }
}
mondayWork("go to the office");

function wrapAdjective() {
  return  function innerFunction(string) {
    if(!string) {
return "You are special";
    }
   else if(string === "a hard worker"){
   
   return `You are *${string}*!`;
   }
   else if(string === "a dedicated programmer"){
    return `You are ||${string}||!`;
   }
}
}

wrapAdjective();