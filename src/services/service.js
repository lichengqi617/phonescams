import http from "../http-common";

class PhoneTableDataService {
  getAll() {
    return http.get("/PhoneTable");
  }

  add(CountryCode, PhoneNumber) {
    return http.post("/PhoneTable/" + CountryCode + "/" + PhoneNumber);
  }
}

export default new PhoneTableDataService();