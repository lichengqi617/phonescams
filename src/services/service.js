import http from "../http-common";

class PhoneTableDataService {
  getAll() {
    return http.get("/ListRecentPhoneTable");
  }

  getMostVoted() {
    return http.get("/ListHighestVotedPhoneNumber");
  }

  add(CountryCode, PhoneNumber, Message) {
    console.log(Message)
    return http.post("/PhoneTable/" + CountryCode + "/" + PhoneNumber);
  }
}

export default new PhoneTableDataService();