Calc.colors.YELLOW="rgb(255,255,0)";
Calc.colors.PINK="rgb(255,0,200)";
Calc.colors.PURPLE2="rgb(155,0,255)";
Calc.colors.BLUE2="rgb(0,0,255)";
Calc.colors.BLUEGREEN="rgb(0,255,255)";
Calc.colors.BLUE2="rgb(0,0,255)";
Calc.colors.GREEN2="rgb(0,255,0)";
Calc.colors.YELLOWGREEN="rgb(150,255,0)";
Calc.colors.REDORANGE="rgb(255,100,0)";
Calc.colors.DARKGREY="rgb(50,50,50)";
Calc.colors.GREY="rgb(100,100,100)";
Calc.colors.LIGHTGREY="rgb(200,200,200)";
Calc.colors.WHITE="rgb(255,255,255)";
Calc.colors.RED2="rgb(255,0,0)";
Calc.colors.BROWN="rgb(125,50,0)";
Calc.colors.BAIGE="rgb(255,255,150)";
Calc.colors.GOLD="rgb(255,200,0)";
function down(e){
  if(e.key=="@"){
    try{
      var color=prompt("Enter your color code here (ie. rgb(0,0,0), #000000)\nWARNING typing an invalid color code, will stop desmos from working.:");
      var name=Calc.colors.length+1;
      Calc.colors[name]=color;
    }catch(error){
      alert("ERROR: "+error);
    }
  }
}
document.body.addEventListener(down,"keydown");
