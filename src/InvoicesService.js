export default class InvoicesService {
    constructor(){
        this.source = 'http://localhost:3000/invoices/';
    }

    async getAll(){
        let response = await fetch(this.source);
        if(response.status === 200){
            return await response.json();
        }
    }

    async getById(id){
        let response = await fetch(`${this.source}/${id}`);
        if(response.status === 200){
            return await response.json();
        }
    }

    async addOrUpdate(invoice){
        let method = 'POST';
        let url = `${this.source}`;
        if(invoice.id){
            method = "PUT";
            url +=`/${invoice.id}`;
       }else{
           delete invoice.id;
       }
        console.log(method, url, invoice)
        var response = await fetch(url, { method: method, headers: {
            'Content-Type': 'application/json'
          }, body: JSON.stringify(invoice) });
        return response.status === 200;
    }

    async delete(id){
       var response = await fetch(`${this.source}/${id}`, { method: 'DELETE'});
       return response.status === 200;
    }
}
