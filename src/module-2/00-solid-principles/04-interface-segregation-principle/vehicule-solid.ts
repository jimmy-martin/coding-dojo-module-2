interface VehiculeInterface {
    getSpeed() : number;
    getVehicleType: string;
    isTaxPayed() : boolean;
    isLightsOn() : boolean;
}

interface ILights {
    isLightsOn() : boolean;
    isLightsOff() : boolean;
}

interface IRadio {
    startRadio() : void;
    playCd : void;
    stopRadio() : void;
}

interface IEngine {
    startEngine() : void;
    accelerate() : number;
    stopEngine() : void;
}

class Car implements VehiculeInterface,ILights, IRadio, IEngine {
    getVehicleType: string;
    playCd: void;

    startEngine(): string {
        return "";
    }

    accelerate(): number {
        return 0;
    }

    getSpeed(): number {
        return 0;
    }

    isLightsOff(): boolean {
        return false;
    }

    isLightsOn(): boolean {
        return false;
    }

    isTaxPayed(): boolean {
        return false;
    }

    startRadio(): void {
    }

    stopEngine(): void {
    }

    stopRadio(): void {
    }

}

class Moto implements VehiculeInterface, ILights, IEngine {
    getVehicleType: string;
    playCd: void;

    startEngine(): string {
        return "";
    }

    accelerate(): number {
        return 0;
    }

    getSpeed(): number {
        return 0;
    }

    isLightsOff(): boolean {
        return false;
    }

    isLightsOn(): boolean {
        return false;
    }

    isTaxPayed(): boolean {
        return false;
    }

    startRadio(): void {
    }

    stopEngine(): void {
    }

    stopRadio(): void {
    }

}

class Bike implements VehiculeInterface, ILights {
    getVehicleType: string;
    playCd: void;

    startEngine(): string {
        return "";
    }

    accelerate(): number {
        return 0;
    }

    getSpeed(): number {
        return 0;
    }

    isLightsOff(): boolean {
        return false;
    }

    isLightsOn(): boolean {
        return false;
    }

    isTaxPayed(): boolean {
        return false;
    }

    startRadio(): void {
    }

    stopEngine(): void {
    }

    stopRadio(): void {
    }

}

class ElectricalBike implements VehiculeInterface, ILights,IEngine {
    getVehicleType: string;
    playCd: void;

    startEngine(): string {
        return "";
    }

    accelerate(): number {
        return 0;
    }

    getSpeed(): number {
        return 0;
    }

    isLightsOff(): boolean {
        return false;
    }

    isLightsOn(): boolean {
        return false;
    }

    isTaxPayed(): boolean {
        return false;
    }

    startRadio(): void {
    }

    stopEngine(): void {
    }

    stopRadio(): void {
    }
}
