// Реализовать наследования следующей цепочки:
// Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих =)

// Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)

function Animal(gender) {
    this.gender = gender;
} 

Animal.prototype.run = function () {
    console.log('Run!');
}

Animal.prototype.jump = function () {
    console.log('Jump!');
}

function Mammal(gender) {
    Animal.call(this, gender);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.getMilk = function() {
    if (this.gender === 'female') {
        console.log('You can get milk!');
    } else {
        console.log('Sorry, you cannot get milk!');
    }
}

function Predator(gender) {
    Mammal.call(this, gender);
}
Predator.prototype = Object.create(Mammal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.eatsMeat = function () {
    console.log('Eats meat!');
}

function Raccoon(gender) {
    Predator.call(this, gender);
}

Raccoon.prototype = Object.create(Predator.prototype);
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.stealsWell = function () {
    console.log('Thief #1! Watch your things!');
}

function RocketRaccoon(gender) {
    Raccoon.call(this, gender);
}

RocketRaccoon.prototype = Object.create(Raccoon.prototype);
RocketRaccoon.prototype.constructor = RocketRaccoon;
RocketRaccoon.prototype.hasFriend = function () {
    console.log('Has best friend Groot!');
}

const animal1 = new Animal('male');
console.log(animal1);

const mammal1 = new Mammal('female');
console.log(mammal1);

const predator1 = new Predator('male');
console.log(predator1);

const raccoon1 = new Raccoon('female');
console.log(raccoon1);

const rocketRaccoon1 = new RocketRaccoon('male');
console.log(rocketRaccoon1);
rocketRaccoon1.run();
rocketRaccoon1.jump();
rocketRaccoon1.getMilk();
rocketRaccoon1.eatsMeat();
rocketRaccoon1.stealsWell();
rocketRaccoon1.hasFriend();

const rocketRaccoon2 = new RocketRaccoon('female');
console.log(rocketRaccoon2);
rocketRaccoon2.run();
rocketRaccoon2.jump();
rocketRaccoon2.getMilk();
rocketRaccoon2.eatsMeat();
rocketRaccoon2.stealsWell();
rocketRaccoon2.hasFriend();





