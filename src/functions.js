//pythontutor 

var Word = 65535
var DWord = 4294967295
var Byte = 10

function WordtoBit(Word){
  var Bit = []
  var state
  for(var i=15;i>-1;i--){
    Bit[i] = ((Word&0xffff)>>i)?state=true:state=false
  }
  return Bit
}

function DWordtoBit(DWord){
  var Bit = []
  var state
  for(var i=31;i>-1;i--){
    Bit[i] = ((DWord&0xffffffff)>>i)?state=true:state=false
  }
  return Bit
}

function BytetoBit(Byte){
  var Bit = []
  var state
  for(var i=7;i>-1;i--){
    Bit[i] = ((Byte&0xff)>>i)?state=true:state=false
  }
  return Bit
}

//////////////////////////////////////////////////////////

var all = 4294967295



function allToBit(all){

var boolean = all.toString(2)
var array = []

for(var i=0;i<boolean.length;i++){
  array[i] = boolean.split("")[i]
  }
return array
}

var prova = allToBit(all)

//////////////////////////////////////////////////////////

var prova = WordtoBit(Word);
console.log(prova);
