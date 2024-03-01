class PoutineOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.ORDERING;
        aReturn.push("Welcome to Niek's Poutine!");
        aReturn.push("Would you like to order a spicy or regular poutine?");
        return aReturn;
      },
      
      ORDERING: (sInput) => {
        let aReturn = [];
        this.stateCur = this.OrderState.SIZE;
                if (sInput.toLowerCase().startsWith('s'),('r')) {
          aReturn.push(`What size of poutine would you like?`);
          aReturn.push(`The size options are small, medium, or large`);
        } else {
          aReturn.push("Thanks for trying our new ordering system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      },

      SIZE: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.DRINKS;
        aReturn.push("What toppings would you like?")
        aReturn.push("The toppings we have are bacon, chives, olives, jalapeños, and sausage")
        return aReturn;
      },

      DRINKS: () =>{
        let aReturn = [];
        this.stateCur = this.OrderState.PICKUP;
        aReturn.push("Would you like a coke with that?")
        return aReturn;
      },

      PICKUP: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your order is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 111 Gravy. Ave., Poutine City before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our new ordering system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { PoutineOrder }