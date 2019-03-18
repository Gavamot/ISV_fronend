export default class InvoicesService {

    constructor(source){
        this.source = source;
    }
  
    _getUrl(end) {
        return end + this.source;
    }

    getAll(){
        return fetch(_getUrl('')).then((response) => {
            if (response.headers.get("content-type") != "application/json") {
              throw new TypeError();
            }
            var j = response.json();
            // можем что-нибудь делать с j
            return j; // в случае выполнения обещания, значение
                      // передается в fetch_current_data().then()
          });
    }

    getById(id){

    }

    addOrUpdate(invoice){
        
    }

    delete(id){

    }
}
