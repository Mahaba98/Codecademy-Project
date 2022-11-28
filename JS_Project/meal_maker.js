const menu = {
    _meal : '',
    _price : 0,
    set meal(mealToCheck){
      if(typeof mealToCheck === 'string'){
        return this._meal = mealToCheck;
      }
      else{
        console.log('Enter a string');
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck;
      }
      else{
        console.log('Enter a number');
      }
    },
    get todaysSpecial(){
      if (this._meal && this._price){
        return `Today’s Special is ${this._meal} for \$${this._price}!`;
      }
      else{
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  const meals = ['Thieb', 'Poulet roti', 'Poisson braise'];
  const prices = [500, 2000, 1500];
  const random = Math.floor(Math.random() * 3);
  
  switch(random){
    case 0:
      menu.meal = meals[0];
      menu.price = prices[0];
      break;
    case 1:
      menu.meal = meals[1];
      menu.price = prices[1];
      break;
    case 2:
      menu.meal = meals[2];
      menu.price = prices[2];
      break;
  }
  
  console.log(menu.todaysSpecial);