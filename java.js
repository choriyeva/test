
var start=new Date().getTime();
alert("Test ishlashga tayyormisiz???");
alert("Unda boshladik!!!")
let test1=[
    {
        savol:["2*2="],
        variant:["a.1", "b.2", "c.4", "d.5"],
        javob:["c","4"]
    },
    {
        savol:["2*3="],
        variant:["a.6", "b.2", "c.4", "d.5"],
        javob:["a","6"]
    },
    {
        savol:["2*4="],
        variant:["a.1", "b.8", "c.4", "d.5"],
        javob:["b","8"]
    },
   
    {
        savol:["2*5="],
        variant:["a.10", "b.2", "c.4", "d.5"],
        javob:["a","10"]
    }
    
    ];

function startTest(test1){
 
    
    let d=0;
    let kiritilgan_javoblar="",javoblar="";
    
    for(let i=0;i<=test1.length-1;i++){
        variant=prompt(` ${test1[i].savol} \n ${test1[i].variant[0]}\n ${test1[i].variant[1]}\n ${test1[i].variant[2]} \n ${test1[i].variant[3]}`);
        if((variant[0]==(test1[i].javob[0]))){
            d=d+5;
        }
        else{
            d=d+0;
        }
        javoblar=javoblar+" "+(i+1)+" . "+test1[i].javob;  
        if(variant=="chiqish"||variant=="exit"){
            break;
        }
    }
    let qoshimcha=["Fan yoki sport olimpiadalarida faxrli o'rin egallaganmisiz \n A Ha \n B Yo'q ", "Ilts serificatiz bormi \n A Ha \n B Yo'q ", "Nogironlik bo`yicha guvohnomayiz bormi \n A Ha \n B Yo'q"]
    
    let x=0,x1=0,x2=0;
    let ustama=[];
    for(let j=0; j<=qoshimcha.length-1;j++){
        ustama.push(variant=prompt(qoshimcha[j]));
        if(variant=="chiqish"||variant=="exit"){
            break;
        }
    }
        if(((ustama[0]).toLowerCase()==("a"))){
            x=x+50;
        }
        if((ustama[1]).toLowerCase()=="a" ){
            x1=x1+25;
        }
        if((ustama[2]).toLowerCase()=="a"){
            x2=2;
        }
        
    let tjavob=test1.length-(test1.length-(d/5));
    var end=new Date().getTime();
    var time=end-start;
alert(` Test uchun rahmat \n ${tjavob}/${test1.length} \n ${(test1.length-(test1.length-(d/5)))*5} bal\n ${(((test1.length-(test1.length-(d/5)))*5)/x)+x+x1} imtiyoz bal \n ${(x+x1+(((test1.length-(test1.length-(d/5)))*5)/x))+((test1.length-(test1.length-(d/5)))*5)} umumiy bal \n ${javoblar}  \n testni  ${time/1000} soniyada bajardiz`);
}
startTest(test1);
































