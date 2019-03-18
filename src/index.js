import InvoicesService from './InvoicesService';

var service = new InvoicesService('http://localhost:3000/invoices/');

async function GetInvocesAsync() {  
    let invoices = await service.getAll();
    console.log(invoices);
}

GetInvocesAsync();

