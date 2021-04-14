class Water {
  constructor () {
    
      this.waterStock = 0;
      this.image = loadImage("Water.png");
      //this.visible = false;
      this.lastFed;
  }

  updateWaterStock(waterStock) {
     this.waterStock = waterStock
  }

  getFedTime(lastFed) {
      this.lastFed = lastFed;
  }

 /* deductFood() {
      if (this.foodStock > 0) {
          this.foodStock = this.foodStock-1;
      }
  } */

  getWaterStock () {
     return this.waterStock; 
  }


  

  display(){
   var x=80, y=100;
   imageMode(CENTER);
   image(this.image,820,75, 70,70);     
   
   if(this.waterStock !=0){
       for (var i=0; i<this.waterStock; i++){
           if(i%10==0){
               x=80
               y=y+50;
           }
           image(this.image,x,y, 50,50);
           x=x+30;
       }
   }
  }


}