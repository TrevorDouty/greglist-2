import { ProxyState } from "../AppState.js";
import { jobService } from "../Services/JobService.js";


//Private
function _draw() {
  let template = ''
  ProxyState.jobs.forEach(j => template += j.Template)
  document.getElementById('jobs').innerHTML = template

}

//Public
export default class JobController {
  constructor() {
    ProxyState.on("jobs", _draw)
    _draw();

  }

  postJob(e) {

    e.preventDefault()

    let form = e.target
    let newJob = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value,

    }
    form.reset()
    jobService.postJob(newJob)
  }

  deleteJob(jobId) {
    jobService.deleteJob(jobId)
  }
}