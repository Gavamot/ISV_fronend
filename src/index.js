import InvoicesService from './InvoicesService';
import MyTable from './Components/MyTable/MyTable';


let myApp = function() {

    let service = new InvoicesService();
    let tbl = new MyTable('tbl_invoices', ['id', 'Create', 'No', 'Supply', 'Comment'],  updateItem, deleteItem);

    async function deleteItem(id){
        if(!await service.delete(id))
        {
            alert("item has not been deleted")
            return;
        }
        updateTable();
    }

    function updateItem(id){
        window.location = `/addOrUpdate.html?id=${id}`;
    }

    async function updateTable(){
        let data = await service.getAll(); 
        data = data.map(x=>[x.id ,x.date_created, x.number, x.date_supply, x.comment]);
        tbl.update(data);
    }

    return { 
        init : function (){
            updateTable();
        }
    };
}();

myApp.init();
