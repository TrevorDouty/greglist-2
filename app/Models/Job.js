export default class Job {

  constructor(data) {
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
    this._id = data._id
  }

  get Template() {
    return/*html*/`
    <div class="col-3 card border border-dark rounded shadow-lg text-wrap">

<h4>${this.company}</h4>  
<p>Title: ${this.jobTitle}</p>
<h4>${this.description}</h4>
<h4> ${this.hours} hours per week</h4>
<p>${this.rate} per hr</p>

<button class="btn btn-danger btn-block" onclick="app.jobController.deleteJob('${this._id}')">Delete</button>
</div>`
  }

}