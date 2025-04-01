class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  constructor(appetizer, mainCourse, dessert) {
    this.appetizer = appetizer;
    this.mainCourse = mainCourse;
    this.dessert = dessert;
  }
}

module.exports = { Breakfast, Lunch, Dinner };