export default class House {

  constructor(data) {
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.year = data.year
    this.levels = data.levels
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
    this._id = data._id
  }

  get Template() {
    return/*html*/`
    <div class="col-3 card border border-dark rounded shadow-lg text-wrap">
<img class="img-fluid" src="${this.imgUrl}" alt="">
<h4>${this.price}</h4>  
<p>${this.year}</p>
<h4>${this.bedrooms}</h4>
<h4> ${this.bathrooms}</h4>
<p>${this.levels}</p>
<p>${this.description}</p>
<button class="btn btn-danger btn-block" onclick="app.houseController.deleteHouse('${this._id}')">Delete</button>
</div>`
  }

}


