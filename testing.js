function funnyArray(ary) {
  if(ary.length == 0){
    return "rien";
  }else if(ary.length %2 == 0){
    return ary[(ary.length/2) -1] + ary[ary.length/2];
  }else{
    return ary[Math.floor(ary.length/2)];
  }
}