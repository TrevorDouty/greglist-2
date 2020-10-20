export default class Car {
    constructor(data) {
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this._id = data._id
        this.imgUrl = data.imgUrl
    }

    get Template() {

        return /*html*/`
        <div class="col-3 border border-dark rounded shadow-lg">
    <img class="img-fluid" src="${this.imgUrl}" alt="">
    <h4>${this.price}</h4>  
    <h4>${this.make}</h4>
    <h4> ${this.model}</h4>
    <p>${this.price}</p>
    <p>${this.description}</p>
    <button class="btn btn-danger btn-block" onclick="app.CarController.delete('${this._id}')">Delete</button>



</div>
        `
    }
}
