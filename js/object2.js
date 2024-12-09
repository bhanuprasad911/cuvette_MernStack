function Car(model, brand){
    this.model = model;
    this.brand = brand;
}
Car.prototype.Honk=()=>{console.log("Beep")}
const car1 = new Car("Swift", "Suzuki");
const car2 = new Car("Virtus", "Volkswagen")
car1.Honk();
car2.Honk();
// console.log(car1.Honk());
// console.log(car2.Honk());