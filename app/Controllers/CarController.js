import { ProxyState } from "../AppState.js";
import { carService } from "../Services/CarService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.cars.forEach(c => template += c.Template)
  document.getElementById('cars').innerHTML = template

}

//Public
export default class CarController {
  constructor() {
    ProxyState.on("cars", _draw)
    _draw();

  }

  postCar(e) {
    e.preventDefault()
    let form = e.target
    let newCar = {
      make: form.make.value,
      model: form.make.value,
      price: form.price.value,
      description: form.description.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value


    }
    form.reset()
    carService.postCar(newCar)
  }

  deleteCar(carId) {
    carService.deleteCar(carId)
  }

}
