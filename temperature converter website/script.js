function degtofaharenheit(deg){
    var f = (deg*(9/5))+32;
    return f;
}

function fatodegree(fa){
    var d = ((fa) - 32) * 5/9;
    return d;
}

function degtokelvin(deg){
    var k = deg + 273.15 ;
    return k;
}
function keltodeg(kel){
    var d = kel-273.15 ;
    return d;
}
function todecide(){
    console.log('hi in to decide ')
    var selectedtype = document.querySelector('.foroption');
    var store = selectedtype.value;
    var invalue = document.querySelector('#entertemp').value;
    console.log(`logging the content of invalue ${invalue}`)
    var temp = Number(invalue);
    if (isNaN(temp)){
        var forselectbutton = document.querySelector('.fordisplaying');
        forselectbutton.innerHTML = 'your had enter wrong temperature';     
    }
    var whichtype = document.querySelector('.forcnn');
    var storetype = whichtype.value;
    console.log(`the type of value that user has selected to convert ${storetype}`)
    var conans;
    if(store === 'degreecelsius'){
        if(storetype ===  'degreee'){
            ans =  temp;
        }
        if(storetype === 'faharenhite'){
            ans = degtofaharenheit(temp);
        }
        if(storetype === 'kelvin'){
            ans =degtokelvin(temp);
        }
    }
    if(store === 'faharenheit'){
        if(storetype ==='degreee'){
            ans = fatodegree(temp);
        }
        if(storetype ==='faharenhite'){
            ans = temp;
        }
        if(storetype === 'kelvin'){
            var ss = fatodegree(temp);
            ans = degtokelvin(ss);
        }
    }
    if(store === 'kelvin'){
        if(storetype ==='degreee'){
            ans = keltodeg(temp);
        }
        if(storetype ==='faharenhite'){
           var ss= keltodeg(temp);
           ans = degtofaharenheit(ss);
        }
        if(storetype === 'kelvin'){
            ans = temp;
        }
    }
    console.log(`the value of answer is `,ans);
    return ans;
}

function fordisplay(){
    var ans = todecide();
    var bb =document.querySelector('.fordisplaying');
    var labe ;
    var wttt = document.querySelector('.forcnn');
    var stt = wttt.value;
    if(stt ==='degreee'){
        labe = '°C'
    }
    if(stt ==='faharenhite'){
      labe = '°F'
    }
    if(stt === 'kelvin'){
        labe = 'K'
    }
    var invalue = document.querySelector('#entertemp').value;
    console.log(`logging the content of invalue ${invalue}`)
    var temp = Number(invalue);
    if (isNaN(temp)){
        var forselectbutton = document.querySelector('.fordisplaying');
        forselectbutton.innerHTML = 'your had enter wrong temperature';     
    }
    else{
        // console.log(labe);
        bb.innerHTML =(`The conversion of temperature is ${ans.toFixed(2)} ${labe}`);
    } 
}
var bbb = document.querySelector('.forsubmitt')
console.log(bbb)
bbb.addEventListener('click',fordisplay);