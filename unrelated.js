        //{Levels
//the blocks in each level, and how they're organized.
//var worldP=[
    //[y_bottom
        //x0: "z0 z1",
        //x1: "z0 z1"
    //],
    //[y top
        //x0: "z0 z1",
        //x1: "z0 z1"
    //]
//];
var worldP=[
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ],
    [
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788",
      "9675766788"
    ]
];
//how fast does your character move? (Will be set later)
var speed;
        //}Levels
        //{Graphics
var textu,textu2;

var chunkL=0;
//Is thecharacter currently at a place where it can jump?
var canJump=1;
//The translate matrices
var posit=[
  [-16,-44,-36]
];
//the rotate matrices
var rots=[
  [0,0]
];
//upward velocity
var upv=0;
var blockData={
  "4":[1,1],
  "5":[1,1],
  "6":[1,1],
  "7":[1,0],
  "8":[1,1],
  "9":[1,1],
  "a":[1,1],
  "b":[1,1],
  "c":[1,1],
  "d":[1,1],
  "e":[1,1],
};
var a_o_t=64;
var te_Co=[
  [//dirt + grass
    1.0,  4/a_o_t,
    0.0,  4/a_o_t,
    0.0,  3/a_o_t,
    1.0,  3/a_o_t
  ],
  [//stone
    1.0,  2/a_o_t,
    0.0,  2/a_o_t,
    0.0,  1/a_o_t,
    1.0,  1/a_o_t
  ],
  [//grass
    1.0,  3/a_o_t,
    0.0,  3/a_o_t,
    0.0,  2/a_o_t,
    1.0,  2/a_o_t
  ],
  [//dirt
    1.0,  1/a_o_t,
    0.0,  1/a_o_t,
    0.0,  0/a_o_t,
    1.0,  0/a_o_t
  ],
  [//leaf
    1.0,  5/a_o_t,
    0.0,  5/a_o_t,
    0.0,  4/a_o_t,
    1.0,  4/a_o_t
  ],
  [//small c
    1.0,  6/a_o_t,
    0.0,  6/a_o_t,
    0.0,  5/a_o_t,
    1.0,  5/a_o_t
  ],
  [//medium c
    1.0,  7/a_o_t,
    0.0,  7/a_o_t,
    0.0,  6/a_o_t,
    1.0,  6/a_o_t
  ],
  [//big c
    1.0,  8/a_o_t,
    0.0,  8/a_o_t,
    0.0,  7/a_o_t,
    1.0,  7/a_o_t
  ],
  [//ex big c
    1.0,  9/a_o_t,
    0.0,  9/a_o_t,
    0.0,  8/a_o_t,
    1.0,  8/a_o_t
  ],
  [//glass
    1.0,  10/a_o_t,
    0.0,  10/a_o_t,
    0.0,  9/a_o_t,
    1.0,  9/a_o_t
  ],
  [//reg wood sides
    1.0,  11/a_o_t,
    0.0,  11/a_o_t,
    0.0,  10/a_o_t,
    1.0,  10/a_o_t
  ],
  [//reg wood ends
    1.0,  12/a_o_t,
    0.0,  12/a_o_t,
    0.0,  11/a_o_t,
    1.0,  11/a_o_t
  ],
  [//birch wood sides
    1.0,  13/a_o_t,
    0.0,  13/a_o_t,
    0.0,  12/a_o_t,
    1.0,  12/a_o_t
  ],
  [//birch wood ends
    1.0,  14/a_o_t,
    0.0,  14/a_o_t,
    0.0,  13/a_o_t,
    1.0,  13/a_o_t
  ],
  [//coal ore
    1.0,  15/a_o_t,
    0.0,  15/a_o_t,
    0.0,  14/a_o_t,
    1.0,  14/a_o_t
  ],
  [//redstone ore
    1.0,  16/a_o_t,
    0.0,  16/a_o_t,
    0.0,  15/a_o_t,
    1.0,  15/a_o_t
  ],
  [//diamond ore
    1.0,  17/a_o_t,
    0.0,  17/a_o_t,
    0.0,  16/a_o_t,
    1.0,  16/a_o_t
  ],
  [//gold ore
    1.0,  18/a_o_t,
    0.0,  18/a_o_t,
    0.0,  17/a_o_t,
    1.0,  17/a_o_t
  ],
  [//iron ore
    1.0,  19/a_o_t,
    0.0,  19/a_o_t,
    0.0,  18/a_o_t,
    1.0,  18/a_o_t
  ],
  [//emerald ore
    1.0,  20/a_o_t,
    0.0,  20/a_o_t,
    0.0,  19/a_o_t,
    1.0,  19/a_o_t
  ],
  [//lapis ore
    1.0,  21/a_o_t,
    0.0,  21/a_o_t,
    0.0,  20/a_o_t,
    1.0,  20/a_o_t
  ],
  [//reg plank
    1.0,  22/a_o_t,
    0.0,  22/a_o_t,
    0.0,  21/a_o_t,
    1.0,  21/a_o_t
  ],
  [//birch plank
    1.0,  23/a_o_t,
    0.0,  23/a_o_t,
    0.0,  22/a_o_t,
    1.0,  22/a_o_t
  ],
  [//birch plank
    1.0,  24/a_o_t,
    0.0,  24/a_o_t,
    0.0,  23/a_o_t,
    1.0,  23/a_o_t
  ],
  [//crafting side
    1.0,  25/a_o_t,
    0.0,  25/a_o_t,
    0.0,  24/a_o_t,
    1.0,  24/a_o_t
  ],
  [//crafting bottom
    1.0,  26/a_o_t,
    0.0,  26/a_o_t,
    0.0,  25/a_o_t,
    1.0,  25/a_o_t
  ],
  [//crafting top
    1.0,  27/a_o_t,
    0.0,  27/a_o_t,
    0.0,  26/a_o_t,
    1.0,  26/a_o_t
  ],
  [//obsidian
    1.0,  28/a_o_t,
    0.0,  28/a_o_t,
    0.0,  27/a_o_t,
    1.0,  27/a_o_t
  ],
  [//sand
    1.0,  29/a_o_t,
    0.0,  29/a_o_t,
    0.0,  28/a_o_t,
    1.0,  28/a_o_t
  ],
  [//bedrock
    1.0,  30/a_o_t,
    0.0,  30/a_o_t,
    0.0,  29/a_o_t,
    1.0,  29/a_o_t
  ],
  [//gold
    1.0,  31/a_o_t,
    0.0,  31/a_o_t,
    0.0,  30/a_o_t,
    1.0,  30/a_o_t
  ],
  [//diamond
    1.0,  32/a_o_t,
    0.0,  32/a_o_t,
    0.0,  31/a_o_t,
    1.0,  31/a_o_t
  ],
  [//emerald
    1.0,  33/a_o_t,
    0.0,  33/a_o_t,
    0.0,  32/a_o_t,
    1.0,  32/a_o_t
  ],
  [//iron
    1.0,  34/a_o_t,
    0.0,  34/a_o_t,
    0.0,  33/a_o_t,
    1.0,  33/a_o_t
  ],
  [//furnace sides
    1.0,  35/a_o_t,
    0.0,  35/a_o_t,
    0.0,  34/a_o_t,
    1.0,  34/a_o_t
  ],
  [//furnace top / gravel
    1.0,  36/a_o_t,
    0.0,  36/a_o_t,
    0.0,  35/a_o_t,
    1.0,  35/a_o_t
  ],
  [//redstone
    1.0,  37/a_o_t,
    0.0,  37/a_o_t,
    0.0,  36/a_o_t,
    1.0,  36/a_o_t
  ],
  [//brick
    1.0,  38/a_o_t,
    0.0,  38/a_o_t,
    0.0,  37/a_o_t,
    1.0,  37/a_o_t
  ],
  [//wool
    1.0,  39/a_o_t,
    0.0,  39/a_o_t,
    0.0,  38/a_o_t,
    1.0,  38/a_o_t
  ],
  [//select box
    1.0,  40/a_o_t,
    0.0,  40/a_o_t,
    0.0,  39/a_o_t,
    1.0,  39/a_o_t
  ]
];
var bl_tex=[
  [].concat(te_Co[0],te_Co[0],te_Co[0],te_Co[0],te_Co[2],te_Co[3]),
  [].concat(te_Co[1],te_Co[1],te_Co[1],te_Co[1],te_Co[1],te_Co[1]),
  [].concat(te_Co[3],te_Co[3],te_Co[3],te_Co[3],te_Co[3],te_Co[3]),
  [].concat(te_Co[4],te_Co[4],te_Co[4],te_Co[4],te_Co[4],te_Co[4]),
  [].concat(te_Co[5],te_Co[5],te_Co[5],te_Co[5],te_Co[5],te_Co[5]),
  [].concat(te_Co[6],te_Co[6],te_Co[6],te_Co[6],te_Co[6],te_Co[6]),
  [].concat(te_Co[7],te_Co[7],te_Co[7],te_Co[7],te_Co[7],te_Co[7]),
  [].concat(te_Co[8],te_Co[8],te_Co[8],te_Co[8],te_Co[8],te_Co[8]),
  [].concat(te_Co[10],te_Co[10],te_Co[10],te_Co[10],te_Co[11],te_Co[11]),
  [].concat(te_Co[12],te_Co[12],te_Co[12],te_Co[12],te_Co[13],te_Co[13]),
  [].concat(te_Co[14],te_Co[14],te_Co[14],te_Co[14],te_Co[14],te_Co[14]),
  [].concat(te_Co[15],te_Co[15],te_Co[15],te_Co[15],te_Co[15],te_Co[15]),
  [].concat(te_Co[16],te_Co[16],te_Co[16],te_Co[16],te_Co[16],te_Co[16]),
  [].concat(te_Co[17],te_Co[17],te_Co[17],te_Co[17],te_Co[17],te_Co[17]),
  [].concat(te_Co[18],te_Co[18],te_Co[18],te_Co[18],te_Co[18],te_Co[18]),
  [].concat(te_Co[19],te_Co[19],te_Co[19],te_Co[19],te_Co[19],te_Co[19]),
  [].concat(te_Co[20],te_Co[20],te_Co[20],te_Co[20],te_Co[20],te_Co[20]),
  [].concat(te_Co[21],te_Co[21],te_Co[21],te_Co[21],te_Co[21],te_Co[21]),
  [].concat(te_Co[22],te_Co[22],te_Co[22],te_Co[22],te_Co[22],te_Co[22]),
  [].concat(te_Co[23],te_Co[23],te_Co[23],te_Co[23],te_Co[23],te_Co[23]),
  [].concat(te_Co[24],te_Co[24],te_Co[24],te_Co[24],te_Co[26],te_Co[25]),
  [].concat(te_Co[9],te_Co[9],te_Co[9],te_Co[9],te_Co[9],te_Co[9]),
  [].concat(te_Co[27],te_Co[27],te_Co[27],te_Co[27],te_Co[27],te_Co[27]),
  [].concat(te_Co[28],te_Co[28],te_Co[28],te_Co[28],te_Co[28],te_Co[28]),
  [].concat(te_Co[29],te_Co[29],te_Co[29],te_Co[29],te_Co[29],te_Co[29]),
  [].concat(te_Co[30],te_Co[30],te_Co[30],te_Co[30],te_Co[30],te_Co[30]),
  [].concat(te_Co[31],te_Co[31],te_Co[31],te_Co[31],te_Co[31],te_Co[31]),
  [].concat(te_Co[32],te_Co[32],te_Co[32],te_Co[32],te_Co[32],te_Co[32]),
  [].concat(te_Co[33],te_Co[33],te_Co[33],te_Co[33],te_Co[33],te_Co[33]),
  [].concat(te_Co[34],te_Co[34],te_Co[34],te_Co[34],te_Co[35],te_Co[1]),
  [].concat(te_Co[35],te_Co[35],te_Co[35],te_Co[35],te_Co[35],te_Co[35]),
  [].concat(te_Co[36],te_Co[36],te_Co[36],te_Co[36],te_Co[36],te_Co[36]),
  [].concat(te_Co[37],te_Co[37],te_Co[37],te_Co[37],te_Co[37],te_Co[37]),
  [].concat(te_Co[38],te_Co[38],te_Co[38],te_Co[38],te_Co[38],te_Co[38]),
  [].concat(te_Co[39],te_Co[39],te_Co[39],te_Co[39],te_Co[39],te_Co[39]),
  /*work on*/[].concat(te_Co[39],te_Co[39],te_Co[39],te_Co[39],te_Co[39],te_Co[39]),
  [].concat(te_Co[40],te_Co[40],te_Co[40],te_Co[40],te_Co[40],te_Co[40])
];
var cIndex="4567012389abcdefghijklmnopqrstuvwxyz ";
//where are the vertices in a 1×1×1 cube?
var b_s=[
  -1,-1,-1,
  -1, 1,-1,
  -1, 1, 1,
  -1,-1, 1,
   1,-1, 1,
   1, 1, 1,
   1, 1,-1,
   1,-1,-1
];
//which of the vertices in b_s should be connected to create a cube?
var b_o=[
  0,1,2,3,
  4,5,6,7,
  7,6,1,0,
  3,2,5,4,
  2,1,6,5,
  0,3,4,7
];
//How should each of the sides in a cube be shaded?
var b_n=[
  -1, 0, 0,
   1, 0, 0,
   0, 0,-1,
   0, 0, 1,
   0, 1, 0,
   0,-1, 0
];
//create a block using the above information
var positions=[];
var normals=[];
var indices=[];
var colors=[];
function dist(x1,y1,x2,y2){
  return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}
function blockG(x,y,z,w,h,d){
  //for each side in a cube...
  for(var i=0;i<b_o.length/4;i++){
    //helps acknoledge that there may be some other prior positions (nescessary for graphics)
    var _=positions.length/3;
    //For each vertice in a side...
    for(var a=0;a<4;a++){
      //add those vertices to the positions array. (x,y,z)
      positions.push(b_s[b_o[i*4+a]*3]*w+x,b_s[b_o[i*4+a]*3+1]*h+y,b_s[b_o[i*4+a]*3+2]*d+z);
      //add the normals to the normals array, which helps with the shading. (nx,ny,nz)
      normals.push(b_n[i*3],b_n[i*3+1],b_n[i*3+2]);
    }
    //write down which vertices should be connected to form the shape
    indices.push(_+1,_,_+2,_+3,_+2,_);
  }
}
function blockT(t){
  var wbt=cIndex.indexOf(t);
  colors=colors.concat(bl_tex[wbt]);
}
//Sets up the level blocks/graphics

        //}Graphics
        //{WebGL Credit to Mozilla for 𝑚𝑜𝑠𝑡 of the code.
//define mat4 (matrix creater)
var mat4=glMatrix.mat4;
//index count: how many indicess in a buffer count
var i_c=[0,0,0];
//find the canvas to display the stuff.
var canvas=document.getElementById("PLAY");
//unlock the webGL contexts for the canvas (with multiple backups for different browsers)
var gl=canvas.getContext("webgl")||canvas.getContext("experimental-webgl")||canvas.getContext('moz-webkit');
//set the clear colour for the first level
gl.clearColor(0,0.7,1,1);
//set the clear depth
gl.clearDepth(1.0);
//GLSL
/**GLSL variable types for the shaders
 * attribute: a variable that is set with java script, and an be different between different vertices. The attribute can be used only in the vertex shader.
 * uniform: a variable that is set with javascript, and is uniform throughout all vertices in the buffer. This is used nly in the vertex shader.
 * varying: a variable that can't be set with javascript. varying variables are created in the vertex shader, but can be accessed in the fragment shader.
 * vec2: 2 dimensional floating vector
 * vec3: 3 dimensional floating vector (also used for holding rgb values)
 * vec4: 4 dimensional floating vector (also used for holding rgba values)
 * lowp: low precision variable
 * mediump: medium precision variable
 * highp: high precision variable
 * mat4: matrix variable (the matrices do the fast 3D translating / rotating)
*/
//vertex shader
var vtxs=document.getElementById("vs").innerHTML;
//fragment shader
var frgs=document.getElementById("fs").innerHTML;
//allows javascript access the shaders
function loadshdr(type,source){
  //create the shader
  var shader=gl.createShader(type);
  //link it with the GLSL code.
  gl.shaderSource(shader,source);
  //get it ready for drawing
  gl.compileShader(shader);
  //ommit it.
  return shader;
}
//load the vertex shader
var vtxShdr=loadshdr(gl.VERTEX_SHADER,vtxs);
//load the fragment shader
var frgShdr=loadshdr(gl.FRAGMENT_SHADER,frgs);
//create the webGL program
var program=gl.createProgram();
//attach the shaders to the program
gl.attachShader(program,vtxShdr);
gl.attachShader(program,frgShdr);
//links the program to the webGL interface
gl.linkProgram(program);
//the info on where the variable are
var pInfo={
  //attrib type variables
  aPlaces:{
    vtx_pos:gl.getAttribLocation(program,'avtx_pos'),
    vtx_norm:gl.getAttribLocation(program,'avtx_norm'),
    vtx_txt:gl.getAttribLocation(program,'aTextC')
  },
  //uniform type variables
  uPlaces:{
    mtrx:gl.getUniformLocation(program,'umtrx'),
    lightP:gl.getUniformLocation(program,"u_lightPos"),
    viewPos:gl.getUniformLocation(program,"u_viewPos"),
    lightB:gl.getUniformLocation(program,"u_lighting"),
    sampler:gl.getUniformLocation(program,'uSamp')
  }
};
function loadTexture(imgA,width,height) {
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,width,height,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array(imgA));
  gl.generateMipmap(gl.TEXTURE_2D);
  return texture;
}
function createTs(){
    var t1=
    "0000000000000000"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111001111110"+
    "0111111011111110"+
    "0111111011111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0000000000000000"+
    
    "0000000000000000"+
    "0111111111111110"+
    "0111111111111110"+
    "0111101111111110"+
    "0111101111111110"+
    "0110001111111110"+
    "0111110111111110"+
    "0111111000011110"+
    "0111111011111110"+
    "0111111011111110"+
    "0111100101111110"+
    "0111001111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0111111111111110"+
    "0000000000000000"+
    
    "0000000000000000"+
    "0100111011111110"+
    "0110010111111010"+
    "0111001101111100"+
    "0111101110111000"+
    "0110001110111010"+
    "0111110110110010"+
    "0101111000000110"+
    "0110111011111110"+
    "0111011011111100"+
    "0111100100100010"+
    "0110001110011100"+
    "0110110111011010"+
    "0100111111011110"+
    "0101011111011110"+
    "0000000000000000"+
    
    "0000000000000000"+
    "0100101001110100"+
    "0010010110101010"+
    "0101001101011100"+
    "0001101110111000"+
    "0100001110111010"+
    "0001110110110010"+
    "0101001000100100"+
    "0110111001011110"+
    "0011011011111100"+
    "0101100100100010"+
    "0110001110011100"+
    "0000110111011010"+
    "0100110011000110"+
    "0001010111010000"+
    "0000000000000000"+
        
    "2222222222222222"+
    "2111111111111112"+
    "2111211111111112"+
    "2112111121111112"+
    "2121111211111112"+
    "2111111111112112"+
    "2111111111121112"+
    "2111112111211112"+
    "2111121111111112"+
    "2111211111111112"+
    "2112111111111112"+
    "2111112111111212"+
    "2111121111112112"+
    "2111211111121112"+
    "2111111111111112"+
    "2222222222222222";
    var t=[];
    //pure dirt
    for(var i=0;i<256;i++){
      var br=Math.random()*40;
      t.push(90+br,60+br,35+br,255);
    }
    //stone
    for(var i=0;i<256;i++){
      var br=Math.random()*60;
      t.push(100+br,100+br,100+br,255);
    }
    //grass
    for(var i=0;i<256;i++){
      var br=Math.random()*40;
      t.push(50+br,100+br,50+br,255);
    }
    //dirt/grass
    for(var i=0;i<256;i++){
      if((0.4+Math.random())*(i%16)<3){
        var br=Math.random()*40;
        t.push(50+br,120+br,50+br,255);
      }else{
        var br=Math.random()*40;
        t.push(90+br,60+br,35+br,255);
      }
    }
    //leaf
    for(var i=0;i<256;i++){
      var distFE=Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16));
      if(distFE==0||Math.random()<0.5){
        var br=Math.random()*77;
        t.push(br,100+2*br,br,255);
      }else{
        t.push(0,0,0,0);
      }
    }
    //other
    for(var i=0;i<t1.length;i++){
      if(t1[i]=='1'){
        t.push(0,0,0,0);
      }else if(t1[i]=='2'){
        var br=Math.random()*55;
        t.push(200+br,200+br,200+br,255);
      }else{
        t.push(0,0,0,255);
      }
    }
    //regular wood side
    for(var i=0;i<256;i++){
      if(Math.floor(i/16)%3==0&&Math.random()<0.7){
        var br=Math.random()*20;
        t.push(50+br,30+br,br,255);
      }else if(Math.floor(i/16)%3==1&&Math.random()<0.7){
        var br=Math.random()*20;
        t.push(130+br,110+br,80+br,255);
      }else{
        var br=Math.random()*20;
        t.push(90+br,70+br,40+br,255);
      }
    }
    //reg wood end
    for(var i=0;i<256;i++){
      var distFE=Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16));
      if(distFE==0){
        var br=Math.random()*100;
        t.push(50+br,30+br,br,255);
      }else if(distFE%2==1){
        var br=Math.random()*40;
        t.push(200+br,180+br,100+br,255);
      }else{
        var br=Math.random()*40;
        t.push(150+br,130+br,50+br,255);
      }
    }
    //birch wood side
    var spots=[6+8*Math.random(),2+2*Math.random(),0.5+Math.random(),2+8*Math.random(),7+2*Math.random(),0.5+Math.random(),6+8*Math.random(),12+2*Math.random(),0.5+Math.random()];
    for(var i=0;i<256;i++){
      var black=0;
      for(var i2=0;i2<spots.length;i2+=3){
        if(dist(spots[i2],spots[i2+1],Math.floor(i/16),i%16)<spots[i2+2]/2+Math.random()/2){
          black=1;
        }else if(dist(spots[i2]/2,spots[i2+1],Math.floor(i/16)/2,i%16)<spots[i2+2]+Math.random()/2){
          black=Math.max(black, 0.5);
        }
      }
      if(black==0){
        var br=Math.random()*40;
        t.push(200+br,200+br,200+br,255);
      }else if(black==0.5){
        var br=Math.random()*40;
        t.push(100+br,100+br,100+br,255);
      }else{
        var br=Math.random()*40;
        t.push(30+br,30+br,30+br,255);
      }
    }
    //birch wood end
    for(var i=0;i<256;i++){
      var distFE=Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16));
      if(distFE==0){
        var br=Math.random()*255;
        t.push(br,br,br,255);
      }else if(distFE%2==1){
        var br=Math.random()*40;
        t.push(210+br,200+br,120+br,255);
      }else{
        var br=Math.random()*40;
        t.push(170+br,150+br,70+br,255);
      }
    }
    //ores
    var t_colors=[0,0,0,190,0,0,50,150,190,150,150,0,190,150,100,0,100,0,0,0,100];
    for(var ore=0;ore<t_colors.length;ore+=3){
      for(var i=0;i<256;i++){
        if(Math.random()<0.8){
          var br=Math.random()*60;
          t.push(100+br,100+br,100+br,255);
        }else{
          var br=Math.random()*60;
          t.push(t_colors[ore]+br,t_colors[ore+1]+br,t_colors[ore+2]+br,255);
        }
      }
    }
    //planks
    t_colors=[130,110,30,170,160,80];
    for(var wood=0;wood<t_colors.length;wood+=3){
      for(var i=0;i<256;i++){
        if((i%16)%4==3){
          var br=Math.random()*40;
          t.push(t_colors[wood]+br,t_colors[wood+1]+br,t_colors[wood+2]+br,255);
        }else if((Math.floor((i%16)/4)%2==1&&Math.floor(i/16)==7)||(Math.floor((i%16)/4)%2==0&&Math.floor(i/16)==15)){
          var br=Math.random()*40;
          t.push(t_colors[wood]+5+br,t_colors[wood+1]+5+br,t_colors[wood+2]+5+br,255);
        }else{
          var br=Math.random()*40;
          t.push(t_colors[wood]+40+br,t_colors[wood+1]+40+br,t_colors[wood+2]+40+br,255);
        }
      }
    }
    //cobblestone
    for(var i=0;i<256;i++){
      if((i%16)%8>=6||(Math.floor((i%16)/8)%2==1&&Math.floor(i/16)==7)||(Math.floor((i%16)/8)%2==0&&Math.floor(i/16)==15)){
        var br=Math.random()*50;
        t.push(50+br,50+br,50+br,255);
      }else{
        var br=Math.random()*30;
        t.push(100+br,100+br,100+br,255);
      }
    }
    //crafting side
    for(var i=0;i<256;i++){
      if(Math.floor(i/16)%8==7||Math.floor(i/16)%8==0||i%16==0||i%16==15){
        var br=Math.random()*40;
        t.push(br,br,br,255);
      }else if((i%16)%4==3){
        var br=Math.random()*40;
        t.push(150+br,110+br,30+br,255);
      }else {
        var br=Math.random()*40;
        t.push(190+br,150+br,70+br,255);
      }
    }
    //crafting bottom
    for(var i=0;i<256;i++){
      if(Math.floor(i/16)==0||Math.floor(i/16)==15||i%16==0||i%16==15){
        var br=Math.random()*40;
        t.push(br,br,br,255);
      }else{
        var br=Math.random()*40;
        t.push(190+br,150+br,70+br,255);
      }
    }
    //crafting top
    for(var i=0;i<256;i++){
      if(Math.floor(i/16)==0||Math.floor(i/16)==15||i%16==0||i%16==15){
        var br=Math.random()*40;
        t.push(br,br,br,255);
      }else if(Math.min(i%16,15-i%16)+Math.min(Math.floor(i/16),16-Math.ceil(i/16))<4){
        var br=Math.random()*40;
        t.push(190+br,150+br,70+br,255);
      }else if(Math.min(i%16,15-i%16)+Math.min(Math.floor(i/16),16-Math.ceil(i/16))<5||((i%16)%3==0&&Math.min(Math.floor(i/16),16-Math.ceil(i/16))>2)||(Math.floor(i/16)%3==0&&Math.min(i%16,15-i%16)>3)){
        var br=Math.random()*40;
        t.push(100+br,30+br,br,255);
      }else{
        var br=Math.random()*40;
        t.push(200+br,80+br,br,255);
      }
    }
    //obsidian
    for(var i=0;i<256;i++){
      t.push(10,10,10+Math.random()*100,255);
    }
    //sand
    for(var i=0;i<256;i++){
      var br=Math.random()*60;
      t.push(195+br,180+br,70+br,255);
    }
    //bedrock
    for(var i=0;i<256;i++){
      var br=Math.random()*60;
      t.push(br,br,br,255);
    }
    //gold + diamond block
    t_colors=[190,190,40,40,170,190];
    for(var ore=0;ore<t_colors.length;ore+=3){
      for(var i=0;i<256;i++){
        if(Math.floor(i/16)==0||Math.floor(i/16)==15||i%16==0||i%16==15){
          var br=Math.random()*21;
          t.push(t_colors[ore]+br-40,t_colors[ore+1]+br-40,t_colors[ore+2]+br-40,255);
        }else{
          var dia=22+22*Math.sin(Math.floor(i/16)+i%16);
          var br=Math.random()*21;
          t.push(t_colors[ore]+dia+br,t_colors[ore+1]+dia+br,t_colors[ore+2]+dia+br,255);
        }
      }
    }
    //emerald
    for(var i=0;i<256;i++){
      var distFE=Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16));
      if(distFE==6){
        var br=Math.random()*40;
        t.push(25+br,125+br,25+br,255);
      }else if(distFE%2==0){
        var br=Math.random()*40;
        t.push(br,100+br,br,255);
      }else{
        var br=Math.random()*40;
        t.push(50+br,150+br,50+br,255);
      }
    }
    //iron
    for(var i=0;i<256;i++){
        if(Math.floor(i/16)==0||Math.floor(i/16)==15||i%16==0||i%16==15){
          var br=Math.random()*25;
          t.push(br+170,br+170,br+170,255);
        }else{
          var dia=25+25*Math.sin(1.5*(i%16));
          var br=Math.random()*25;
          t.push(180+dia+br,180+dia+br,180+dia+br,255);
        }
      }
    //furnace sides
    for(var i=0;i<256;i++){
      if((i%16<7&&dist(Math.floor(i/16),i%16,7.5,7.5)<5.5)||(i%16<15&&dist(Math.floor(i/16),i%16,7.5,16)<6.5)){
        var br=Math.random()*30;
        t.push(br,br,br,255);
      }else if(i%16<8){
        var br=Math.random()*70;
        t.push(50+br,50+br,50+br,255);
      }else{
        var br=Math.random()*60;
        t.push(100+br,100+br,100+br,255);
      }
    }
    //gravel
    for(var i=0;i<256;i++){
      var br=Math.random()*70;
      t.push(50+br,50+br,50+br,255);
    }
    //redstone
    for(var i=0;i<256;i++){
      var distFE=1-Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16))/16;
      var br=Math.random()*40;
      t.push(15+200*Math.pow(distFE,2)+br,br,br,255);
    }
    //brick
    for(var i=0;i<256;i++){
      if((i%16)%4==3||(Math.floor((i%16)/4)%2==1&&Math.floor(i/16)%8==7)||(Math.floor((i%16)/4)%2==0&&Math.floor(i/16)%8==3)){
        var br=Math.random()*60;
        t.push(195+br,190+br,130+br,255);
      }else{
        var br=Math.random()*40;
        t.push(140+br,60+br,10+br,255);
      }
    }
    //wool
    for(var i=0;i<256;i++){
      var br=Math.random()*35;
      t.push(220+br,220+br,220+br,255);
    }
    //select box
    for(var i=0;i<256;i++){
      var distFE=Math.min(Math.min(Math.floor(i/16),16-Math.ceil(i/16)),Math.min(i%16,15-i%16));
      if(distFE==0){
        t.push(0,0,0,255);
      }else{
        t.push(0,0,0,0);
      }
    }
    //air
    for(var i=0;i<256;i++){
      t.push(0,0,0,0);
    }
    for(var i=0;i<256*23;i++){
      var br=Math.random()*40;
      t.push(80+br,50+br,25+br,255);
    }
    textu=loadTexture(t,16,1024);
}
createTs();


//initiate the buffer : turn the graphics info into buffers, which the GLSL can use
function initB(position,normal,index,color,w){
  //create the buffer for the positions
  var positBuffer=gl.createBuffer();
  //bind the buffer to the top webGL buffer editing interface
  gl.bindBuffer(gl.ARRAY_BUFFER,positBuffer);
  //set the vertices 
  i_c[w]=index.length;
  //add the positions array data to the positions buffer.
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(position),gl.STATIC_DRAW);
  
  var textCo = [].concat(color);
  
  var textCoB= gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER,textCoB);
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(textCo),gl.STATIC_DRAW);
  
  //create the buffer for the indices
  var indexBuffer=gl.createBuffer();
  //bind the buffer to the top webGL buffer editing interface
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
  //add the indices array data to the indices buffer.
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(index), gl.STATIC_DRAW);
  //create the buffer for the normals
  var normBuffer=gl.createBuffer();
  //bind the buffer to the top webGL buffer editing interface
  gl.bindBuffer(gl.ARRAY_BUFFER,normBuffer);
  //add the normals array data to the normals buffer.
  gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(normal),gl.STATIC_DRAW);
  return{
    position:positBuffer,
    normal:normBuffer,
    textur:textCoB,
    indices:indexBuffer
  };
}
//there are 3 buffers (background, cylinder, portal). This array stores them.
var buffers=[];
//allows WebGL to use and access the gl program
gl.useProgram(program);
//allows WebGL to test for z positions, and makes closer things draw above further things
gl.enable(gl.DEPTH_TEST);
//even better, stops the things in the back from drawing at all.
gl.enable(gl.CULL_FACE);
//defines what is closer. (values: gl.CCW or gl.CW) (counterclockwise or clockwise)
gl.frontFace(gl.CCW);
//do I want to cut the back, or the front of a shape?
gl.cullFace(gl.BACK);
//With all this preparation, why not actually display the great 3D?
function draw(){
  //sets the background color, and deletes any old canvas drawing data, speeding up the webGL.
  gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
  //field of view: how many degrees can your character see?
  var fov=50*Math.PI/180;
  //aspect: width/height ratio
  var aspct=gl.canvas.clientWidth/gl.canvas.clientHeight;
  //z_near: If an object is closer than this, it won't show
  var zn=0.01;
  //z_far: If an object is further than this, it won't show
  var zf=200;
  //make a new position variable which is translated to keep the main character in the center.
  var newposit=[posit[0][0],posit[0][1]+6,posit[0][2]+20];
  for(var i=0;i<buffers.length;i++){
    //if working with the portal buffer,
// gl.enable(gl.BLEND)
// gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
// gl.disable(gl.BLEND);
    //make the js form of the matrix.
    var mtrx=mat4.create();
    //set the projection perspectives
    mat4.perspective(mtrx,fov,aspct,zn,zf);
    //if working on the cylinder buffer
    
    //rotate y-axis
    mat4.rotate(mtrx,mtrx,rots[0][0],[1,0,0]);
    //translate 3D
    mat4.translate(mtrx,mtrx,[newposit[0]/2,newposit[1]/2,newposit[2]/2]);
    
    //rotate x-axis
    mat4.rotate(mtrx,mtrx,rots[0][1],[0,1,0]);
    //indices
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,buffers[i].indices);
    //bind positions buffer to WebGL/GLSL interface
    gl.bindBuffer(gl.ARRAY_BUFFER,buffers[i].position);
    //send those positions to the vertex shader.
    gl.vertexAttribPointer(pInfo.aPlaces.vtx_pos,3,gl.FLOAT,false,0,0);
    //enable those positions
    gl.enableVertexAttribArray(pInfo.aPlaces.vtx_pos);
    //bind positions normals to WebGL/GLSL interface
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers[i].normal);
    //send those normals to the vertex shader.
    gl.vertexAttribPointer(pInfo.aPlaces.vtx_norm,3,gl.FLOAT,false,0,0);
    //enable those normals
    gl.enableVertexAttribArray(pInfo.aPlaces.vtx_norm);
    
    
    gl.bindBuffer(gl.ARRAY_BUFFER,buffers[i].textur);
    gl.vertexAttribPointer(pInfo.aPlaces.vtx_txt,2,gl.FLOAT,false,0,0);
    gl.enableVertexAttribArray(pInfo.aPlaces.vtx_txt);
    
    
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
    
    //send the matrix to the vertex shader
    gl.uniformMatrix4fv(pInfo.uPlaces.mtrx,false,mtrx);
    //send the light position info to the vertex shader
    gl.uniform3fv(pInfo.uPlaces.lightP,[0,0,2]);
    //send the view position info to the vertex shader
    gl.uniform3fv(pInfo.uPlaces.viewPos,[0,0,0]);
    //if working on the background buffer
    gl.uniform3fv(pInfo.uPlaces.lightB,[0.3,0.3,0.4]);
    
    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D,textu);
    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(pInfo.uPlaces.sampler,0);
    
    //Draw, Draw, Draw! Finally!
    gl.drawElements(gl.TRIANGLES,i_c[i],gl.UNSIGNED_SHORT,0);
  }
}
//}WebGL:Credit to Mozilla for 𝑚𝑜𝑠𝑡 of the code.
        //{Draw
//which keys are being pressed?
var keys=[];
//frameCount
var fc=0;
//called every frame:
function render(){
  if(fc>11){
    /**movement*/
    //can the cylinder jump?
    var jump=0;
    //if holding sprint key
    if(keys["q"]){
        //set the traveling speed to 0.5 (2.5x)
        speed=0.5;
    }else{
        //if not running
        //set the speed to 0.2.
        speed=0.2;
    }
    //if the left arrow is pressed
    if(keys["ArrowLeft"]){
        //rotate!
        rots[0][1]-=0.08;
        //do the math to rotate the translations, too.
        var x=posit[0][0],z=posit[0][2]+20;
        posit[0][0]=x*Math.cos(0.08)-z*Math.sin(0.08);
        posit[0][2]=z*Math.cos(0.08)+x*Math.sin(0.08)-20;
    }
    if(keys["ArrowRight"]){
        //if the right arrow is pressed
        //rotate!
        rots[0][1]+=0.08;
        //do the math to rotate the translations, too.
        var x=posit[0][0],z=posit[0][2]+20;
        posit[0][0]=x*Math.cos(-0.08)-z*Math.sin(-0.08);
        posit[0][2]=z*Math.cos(-0.08)+x*Math.sin(-0.08)-20;
    }
    //if the player is clicking the up arrow
    if(keys["ArrowUp"]){
        //look up
        rots[0][0]-=0.08;
    }
    //if the player is clicking the down arrow
    if(keys["ArrowDown"]){
        //look down
        rots[0][0]+=0.08;
    }
    //regulate the rotations keep them within 0 < 2pi
    rots[0][1]%=Math.PI*2;
    rots[0][1]=rots[0][0]<0?rots[0][1]+Math.PI*2:rots[0][1];
    rots[0][0]=Math.min(Math.max(rots[0][0],-Math.PI/2),Math.PI/2);
    //if player is holding "a"
    if(keys["a"]){
        posit[0][0]+=speed;
    }
    if(keys["d"]){
        posit[0][0]-=speed;
    }
    if(keys["w"]){
        //if player is holding "w"
        //add to the translations
        posit[0][2]+=speed;
    }
    if(keys["s"]){
        //if player is holding "s"
        //add to the translations
        posit[0][2]-=speed;
    }
    /**collisions*/
    //Welcome to THE messiest part of the code! In case you want to skip this, I will tell you that I didn't use any advanced coding terms/tecniques here. The next neat section will start line 2016
    //basically the same as posit, except the math has calculated out all of the rotations.
    var abs=[
        posit[0][0]*Math.cos(rots[0][1])-(posit[0][2]+20)*Math.sin(rots[0][1]),
        (posit[0][2]+20)*Math.cos(rots[0][1])+posit[0][0]*Math.sin(rots[0][1])-20
    ];
    
   //left collisions
    //Any blocks slightly below the center of the character?
    if(worldP[Math.ceil(-posit[0][1]/4-1.3)]){
        //Is there a block on the left bottom back side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)][Math.ceil(-abs[1]/4-5.3)]){
            //what type of block is it?
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)][Math.ceil(-abs[1]/4-5.3)];
            //if it is a block that collides
            if(blockData[block][0]){
                //make the character get repelled by it, keep it out.
                //abs[0]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        //Is there a block on the left bottom front side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)][Math.floor(-abs[1]/4-4.7)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.8)][Math.floor(-abs[1]/4-4.7)];
            if(blockData[block][0]){
                abs[0]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
    //Any blocks slightly above the center of the character?
    if(worldP[Math.ceil(-posit[0][1]/4)]){
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)][Math.ceil(-abs[1]/4-5.3)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)][Math.ceil(-abs[1]/4-5.3)];
            if(blockData[block][0]){
                abs[0]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)][Math.floor(-abs[1]/4-4.7)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.8)][Math.floor(-abs[1]/4-4.7)];
            if(blockData[block][0]){
                abs[0]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
   //right collisions
    //Any blocks slightly below the center of the character?
    if(worldP[Math.ceil(-posit[0][1]/4-1.3)]){
        //Is there a block on the right bottom back side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)][Math.ceil(-abs[1]/4-5.3)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)][Math.ceil(-abs[1]/4-5.3)];
            if(blockData[block][0]){
                abs[0]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        //Is there a block on the right bottom front side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)][Math.floor(-abs[1]/4-4.7)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.2)][Math.floor(-abs[1]/4-4.7)];
            if(blockData[block][0]){
                abs[0]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
    //Any blocks slightly above the center of the cylinder?
    if(worldP[Math.ceil(-posit[0][1]/4)]){
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)][Math.ceil(-abs[1]/4-5.3)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)][Math.ceil(-abs[1]/4-5.3)];
            if(blockData[block][0]){
                abs[0]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)][Math.floor(-abs[1]/4-4.7)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.2)][Math.floor(-abs[1]/4-4.7)];
            if(blockData[block][0]){
                abs[0]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
   //front collisions
    //Any blocks slightly above the center of the cylinder?
    if(worldP[Math.ceil(-posit[0][1]/4-1.3)]){
        //Is there a block on the right upper front side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                abs[1]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        //Is there a block on the left upper front side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                abs[1]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
    //Any blocks slightly below the center of the cylinder?
    if(worldP[Math.ceil(-posit[0][1]/4)]){
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                abs[1]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                abs[1]-=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
   //back collisions
    //Any blocks slightly above the center of the cylinder?
    if(worldP[Math.ceil(-posit[0][1]/4-1.3)]){
        //Is there a block on the right upper back side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                abs[1]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        //Is there a block on the left upper back side of the cylinder?
        if(worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.3)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                abs[1]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
    //Any blocks slightly below the center of the cylinder?
    if(worldP[Math.ceil(-posit[0][1]/4)]){
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                abs[1]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                abs[1]+=speed;
                posit[0][0]=(abs[0])*Math.cos(-rots[0][1])-(abs[1]+20)*Math.sin(-rots[0][1]);
                posit[0][2]=(abs[1]+20)*Math.cos(-rots[0][1])+(abs[0])*Math.sin(-rots[0][1])-20;
            }
        }
    }
   //top collisions
    if(worldP[Math.ceil(-posit[0][1]/4-1.5)]){
        if(worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                posit[0][1]=4*Math.floor(posit[0][1]/4-1.5)+6;
                jump=1;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                posit[0][1]=4*Math.floor(posit[0][1]/4-1.5)+6;
                jump=1;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                posit[0][1]=4*Math.floor(posit[0][1]/4-1.5)+6;
                jump=1;
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4-1.5)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                posit[0][1]=4*Math.floor(posit[0][1]/4-1.5)+6;
                jump=1;
            }
        }
    }
   //bottom collisions
    if(worldP[Math.ceil(-posit[0][1]/4+0.4)]){
        if(worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                upv=Math.max(0,upv);
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)]&&+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.7)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                upv=Math.max(0,upv);
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)][Math.ceil(-abs[1]/4-5.2)];
            if(blockData[block][0]){
                upv=Math.max(0,upv);
            }
        }
        if(worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)]&&+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)]){
            var block=+worldP[Math.ceil(-posit[0][1]/4+0.4)][Math.ceil(-abs[0]/4-0.3)][Math.floor(-abs[1]/4-4.8)];
            if(blockData[block][0]){
                upv=Math.max(0,upv);
            }
        }
    }
   //Is character inside a block
    if(worldP[Math.round(-posit[0][1]/4-0.5)]){
        if(worldP[Math.round(-posit[0][1]/4-0.5)][Math.round(-abs[0]/4)]&&+worldP[Math.round(-posit[0][1]/4-0.5)][Math.round(-abs[0]/4)][Math.round(-abs[1]/4-5)]){
            
        }
    }
    //jump
    //if the character is on a block
    if(jump){
        //if either e or space is being pressed
        if(keys[" "]||keys["e"]){
            //upward
