import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from "./AxiosService.js";

class CarService {
  constructor() {
    this.getCars()
  }

  getCars() {
    api.get("cars").then(res => {
      ProxyState.cars = res.data.data.map(rawCar => new Car(rawCar))
      console.log(res.data.data)
    }).catch(err => console.error(err))

  }

  postCar(newCar) {
    api.post("cars", newCar).then(res => {
      this.getCars()
    }).catch(err => console.error(err))
  }
}

export const carService = new CarService();

