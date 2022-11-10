module.exports.ApiResponse = class ApiResponse {

  constructor() {
    this.isFromResponseCache = false;
    this.date = new Date().toUTCString();
    this.status = 200;
    this.message = 'Request processed successfully.';
    this.data = undefined;
  }
}
