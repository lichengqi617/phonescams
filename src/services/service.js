import http from "../http-common";

class PhoneTableDataService {
  getAll() {
    return http.get("/PhoneTable");
  }
}

export default new PhoneTableDataService();