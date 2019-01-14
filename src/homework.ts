abstract class Car {
    protected fuel: number = 100;
    protected mileage: number = 400;

    public abstract drive(km: number): void;
    public abstract refuel(fuel: number): void;
}

class CarDrive extends Car {
    literOnKm: number = 0.5;
    refuelCar: number = 25; 

    public drive(km: number): void {
        if (this.fuel < 5 || this.fuel == 0) this.refuel();
        if ((this.fuel - (this.literOnKm * km)) < 0) {
             console.log("Недостаточно топлива")
        } else {
            this.mileage = this.mileage + km;
            this.fuel = this.fuel - (this.literOnKm * km);
        };
    }

    public refuel(): void {
        this.fuel = this.fuel + this.refuelCar;
    }

    public get<T>() {
        return console.log(`Топлива осталось ${this.fuel}`, `Километров пройдено ${this.mileage}`)
    }
}

let car_drive = new CarDrive();
