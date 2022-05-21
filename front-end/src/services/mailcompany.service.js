import http from "../http-common";

class MailDataService {
  getAll() {
    return http.get("/companiesmail");
  }

  get(email) {
    return http.get(`/companiesmail/${email}`);
  }

  create(data) {
    return http.post("/companiesmail", data);
  }

  update(email, data) {
    return http.put(`/companiesmail/${email}`, data);
  }

  delete(email) {
    return http.delete(`/companiesmail/${email}`);
  }

  deleteAll() {
    return http.delete(`/companiesmail`);
  }

  findByTitle(email) {
    return http.get(`/companiesmail?email=${email}`);
  }
}

export default new TutorialDataService();