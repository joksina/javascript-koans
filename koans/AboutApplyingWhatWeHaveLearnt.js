var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      

      /* solve using filter() & all() / any() */
     var productsICanEat = _.filter(products, function(pizza){
        return pizza.containsNuts === false && 
       _.all(pizza.ingredients, function(ingredient){
        return ingredient !== "mushrooms";
      });
    });

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum =     /* try chaining range() and reduce() */
    _.range(1000).reduce(function(acc, curr){
      if(curr % 3 === 0 || curr % 5 === 0){
        return acc += curr;
      }
      return acc;
    }, 0);

    expect(sum).toBe(233168);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
     /* chain() together map(), flatten() and reduce() */
    var ingredientCount = _.chain(products).map(function(ing){
      return ing.ingredients;
    }).flatten().reduce(function(acc, curr){
      if(acc[curr]){
        acc[curr]++;
      }else{
        acc[curr] = 1;
      }
      return acc;
    },{});
    return ingredientCount;
    
    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR ADVANCED */
  
  it("should find the largest prime factor of a composite number", function () {
    function prime(num){
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      num = num / i;
    }

  }
return i;
}
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    function isPal(str){
      //set number to string
      //check if string is palindrome
  str = str.toString();
  return str === str.split("").reverse().join("");
}
function longPali(start, end){
  //set max to zero
  //iterate twice
  //set a var to multiply both iteration
  //check if it is palindrom and for the max
  //return max
  var max = 0;
  for(var i = start; i < end; i++){
    for(var y = start; y < end; y++){
      var mult = i * y;
      if(isPal(mult) && mult> max){
        max = mult;
      }
    }
  }
  return max;
}
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
    function divisible(){
      var n = 0;
      for(var i = 1; i < 21; i++){
        if(n%i === 0){
          return n;
        }
      }
    }
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    function sumSqr(num, num1){
      //add the square roots first
      var sums = (num * num) + (num1 * num1);
      //multiply the sum of numbers
      var sqr = (num + num) * (num1 + num1);
      // get the difference by subtracting sum from sqr
      //to avoid geting a negative value
      var diff = sqr - sum;
      return diff;
    }
    
  });

  it("should find the 10001st prime", function () {
    function prime(num){
      for(var i = 2; i < num; i++){
        if(num%i === 0){
          return false;
        }
      }
    return true;
  }
var primed = [];
var i = 2;
while (primed.length !== 10001) {
  if (prime(i)) {
    primed.push(i);
  }
  i++;
}

//console.log(primed.pop());

  });
  
});
