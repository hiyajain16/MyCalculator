let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let str= "";
buttons.forEach((particual_button)=> {
    particual_button.addEventListener('click', ()=> {
        if(particual_button.value == '='){
           try{
                str = eval(str);
                input.value = str;
                str = "";
           }
           
            catch (error) {
                input.value = 'Error';
                str="";
            }
        }
        else if(particual_button.value == "AC"){
            input.value=" ";
        }
        else if(particual_button.value == "DE"){
            str = str.substring(0, str.length-1);
            input.value =str;
        }
        else{
            console.log(particual_button.value);
            str=str+particual_button.value;
            input.value=str;
        }

    });
});


