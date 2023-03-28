
      /* Accumulator */

function Accumulator(initialValue) {
   this.value = initialValue;
}

 Accumulator.prototype.increment = function() {
    this.value++;
    console.log(`${this.value}`)
 }


 Accumulator.prototype.decrement = function() {
    this.value--;
    console.log(`${this.value}`)
 }
  

  const acc = new Accumulator(24);
  acc.increment();
  acc.decrement();
 
  
        /* Cancelable Accumulator */

  function CancelableAccumulator(initialValue) {
     Accumulator.call(this, initialValue)
     this.initialValue = initialValue;
     

  this.clear = function() {
      this.value = this.initialValue;
      console.log(`${this.value}`)
      }

    }
    CancelableAccumulator.prototype = Object.create(Accumulator.prototype)
    
  const cancelAcc = new CancelableAccumulator(20);
    cancelAcc.increment(); 
    cancelAcc.increment();
    cancelAcc.decrement(); 
    cancelAcc.clear();
 