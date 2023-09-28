
alert("Test ishlashga tayyormisiz???");
alert("Unda boshladik!!!")
let test=[
    {
        savol:["2*2="],
        variant:["1", "2", "4", "5"],
        javob:["4"]
    },
    {
        savol:["2*3="],
        variant:["6", "2", "4", "5"],
        
        javob:["6"]
    },
    {
        savol:["2*4="],
        variant:["1", "8", "4", "5"],
        javob:["8"]
    },
    
    {
        savol:["2*5="],
        variant:["10", "2", "4", "5"],
        javob:["10"]
    }
    
];


    jarayon=true;
    while (jarayon){
        let start=prompt("Test ishlash uchun 1 ni test tuzish uchun 2 ni bosing chiqish uchun 0 ni bosing");
        if(start==1){
            function startTest(test){
     
                let start=new Date();
                let d=0;
                let javoblar="";
                
                for(let i=0;i<=test.length-1;i++){
                    variant=prompt(` ${test[i].savol} \n A ${test[i].variant[0]}\n B  ${test[i].variant[1]}\n C  ${test[i].variant[2]} \n D ${test[i].variant[3]}`);

                    if(variant[0]==(test[i].javob[0])){
                        d=d+5;
                    }
                    else{
                        d=d+0;
                    }
                    javoblar=javoblar+" "+(i+1)+" . "+test[i].javob;  
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
                    
                let tjavob=test.length-(test.length-(d/5));
                let end=new Date();
                time=end-start;
            alert(` Test uchun rahmat \n ${tjavob}/${test.length} \n ${(test.length-(test.length-(d/5)))*5} bal\n ${(((test.length-(test.length-(d/5)))*5)/x)+x+x1} imtiyoz bal \n ${(x+x1+(((test.length-(test.length-(d/5)))*5)/x))+((test.length-(test.length-(d/5)))*5)} umumiy bal \n ${javoblar}  \n testni  ${time/1000} soniyada bajardiz`);
            }
            startTest(test);
    
        }
        else if(start==2){
            loop=true;
            while(loop){
                savol2=prompt("savol kiriting: ");
                variant1=prompt("1-variantni kiriting")
                variant2=prompt("2-variantni kiriting");
                variant3=prompt("3-variantni kiriting");
                variant4=prompt("4-variantni kiriting");
    
            tuzilgan=prompt(`Tuzgan savoliz ${savol2} \n A ${variant1} \n B ${variant2}\n C ${variant3}\n D  ${variant4}  \n to'g'ri javobni belgilang `);
                test.push({
                    savol:savol2,
                    variant:[` A ${variant1}`,` B ${variant2}`,` C ${variant3}`,`D ${variant4},`],
                    javob: tuzilgan
                });
    
          tuzish2=prompt(`Yana savol kiritasizmi   \n Ha==1 \n Yo'q==0`);
          if(tuzish2==0){
            loop=false;
    
          }
    
    
    
            }
        }
        if(start==0){
            break;
        }
    }
































