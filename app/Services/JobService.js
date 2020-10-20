import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from "./AxiosService.js";

class JobService {
  constructor() {
    this.getJob()
  }

  getJob() {
    api.get("jobs").then(res => {
      ProxyState.jobs = res.data.data.map(rawJob => new Job(rawJob))
    }).catch(err => console.error(err))
  }

  postJob(newJob) {
    api.post('jobs', newJob).then(res => {
      console.log(res);
      this.getJob()

    }).catch(err => console.error(err))
  }

  deleteJob(jobId) {
    api.delete('jobs/' + jobId).then(res => {
      this.getJob()
    }).catch(err => console.error(err))
  }

}

export const jobService = new JobService