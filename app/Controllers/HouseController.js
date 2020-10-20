import { ProxyState } from "../AppState.js";
import { houseService } from "../Services/HouseService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template

}

//Public
export default class HouseController {
  constructor() {
    ProxyState.on("houses", _draw)
    _draw();

  }

  postHouse(e) {
    e.preventDefualt()
    let form = e.target
    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      price: form.price.value,
      year: form.year.value,
      levels: form.levels.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    houseService.postHouse(newHouse)
  }

  deleteHouse(houseId) {
    houseService.deleteHouse(houseId)
  }
}