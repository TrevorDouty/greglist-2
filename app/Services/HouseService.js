import { ProxyState } from "../AppState.js";
import House from "../Models/House.js";
import { api } from "./AxiosService.js";

class HouseService {
  constructor() {
    this.getHouse()
  }

  getHouse() {
    api.get("houses").then(res => {
      ProxyState.houses = res.data.data.map(rawHouse => new House(rawHouse))
    }).catch(err => console.error(err))
  }

  postHouse(newHouse) {
    api.post('houses', newHouse).then(res => {
      this.getHouse()
    }).catch(err => console.error(err))
  }

  deleteHouse(houseId) {
    api.delete('houses/' + houseId).then(res => {
      this.getHouse()
    }).catch(err => console.error(err))
  }

}

export const houseService = new HouseService