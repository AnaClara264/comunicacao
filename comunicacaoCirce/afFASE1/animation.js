var currentImgIndex=1;
var ImgSrcArray = []

function enTXT(){ 
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/fa.png",
    "./conversation/clear.png",
  ];
  currentImgIndex=1;
  document.getElementById("img").src=ImgSrcArray[0];
}

function ptTXT(){
  currentImgIndex=1;
  ImgSrcArray = [
    "./conversation/af.png",
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
  }
}