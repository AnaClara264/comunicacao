var currentImgIndex=1;
var ImgSrcArray = []
var ArrowsArray = [
  "./personas/arrows.png",
  "./conversation/clear.png",
];

function enTXT(){ 
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/hello.png",
    "./conversation/toDance.png",
    "./conversation/clear.png",
  ];
  currentImgIndex=1;
  document.getElementById("img").src=ImgSrcArray[0];
}

function ptTXT(){
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/ola.png",
    "./conversation/paraDancar.png",
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
    if (currentImgIndex == ImgSrcArray.length) {
      document.getElementById("arrows").src=ArrowsArray[1];
    }
  }
}