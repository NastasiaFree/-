let Car = function() {
    this.turn = function() {
        this.on = confirm('Вы завели машину?');
        if (this.on) {
            this.get();
        }
        else {
            alert('Никуда не едем')
        }
 
    };

    this.get = function() {
        this.brand = prompt('Введите марку машины');
        this.number = prompt('Введите номер машины');
        this.transmission = confirm('Вы включили передачу?');

        if (this.transmission) {
            this.up = confirm('вы ехали вперед?');
            if (this.up) {
                this.upV = +prompt('Введите скорость с которой вы ехали вперед в км/ч');
                this.upTime = +prompt('Введите время сколько вы ехали вперед в минутах');
            }
            else {
                alert('Вы наверное хотите поехать в другую сторону');
                this.upV = 0;
                this.upTime= 0;
            } 

            this.down = confirm('может вы ехали еще назад?');
            if (this.down) {
                this.downV = +prompt('Введите скорость с которой вы ехали назад в км/ч');
                this.downTime = +prompt('Введите время сколько вы ехали назад в минутах');
            }

            else {
                alert('Правильно,только вперед');
                this.downV = 0;
                this.downTime= 0;
            }
        }
        else {
            alert('Включите передачу чтобы поехать')
        }


        this.distance();
    };

    this.distance = function() {
        this.result = this.upV*this.upTime/60 + this.downV*this.downTime/60; 

        this.show();
    };

    this.show = function() {
            alert('Машина ' + this.brand + ' с номером ' + this.number + ' проехала ' + this.result + ' км');
        
    };
};
    
let car = new Car();
car.turn();
console.log(car);


//Прототипное наследование
let car2 = {
    carTransmission: 'автомат',
    brand: 'audi'
};


car2.__proto__ = car;
car2.show();


// второй метод прототипного наследования
// car2.prototype = car;
// car2.classAuto = 'бизнес';

console.log(car2);  //почему в прото сохраняется + имя первой????