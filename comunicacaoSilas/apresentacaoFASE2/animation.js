var currentImgIndex=1;
var ImgSrcArray = [];
var ArrowsArray = [
  "./personas/micros.png",
  "./conversation/clear.png",
];


function enTXT(){ 
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/hello.png",
    "./conversation/toFase.png",
    "./conversation/toShoot.png",
    "./conversation/clear.png",
  ];
  currentImgIndex=1;
  document.getElementById("img").src=ImgSrcArray[0];
}

function ptTXT(){
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/ola.png",
    "./conversation/paraFase.png",
    "./conversation/paraAtirar.png",
    "./conversation/clear.png",
  ];
  document.getElementById("img").src=ImgSrcArray[0]; 
}

function trocar(){
  if(currentImgIndex == ImgSrcArray.length){
    currentImgIndex=ImgSrcArray.length;
  } else {
    document.getElementById("img").src=ImgSrcArray[currentImgIndex]; 
      currentImgIndex++; 
    if (currentImgIndex == 2) {
      document.getElementById("arrows").src=ArrowsArray[0];
    }
    if (currentImgIndex == (ImgSrcArray.length-1)) {
      document.getElementById("arrows").src=ArrowsArray[1];
    }
  }
}