import './MyTable.css';

export default class MyTable{

    constructor(id, columns, updateFunc, deleteFunc){
        this.id = id;
        this.columns = columns.concat('update', 'delete');
        this.updateFunc = updateFunc;
        this.deleteFunc = deleteFunc;
    }

    update(data){
       let table = document.getElementById(this.id);
       table.classList.add("my-table");

        let head = `<tr>${this.columns.map(x=> `<td>${x}</td>`).join('')}<tr/>`;
        let body = '';
        data.forEach((item)=> {
            item = item.concat([
                `<button type='update' itemId='${item[0]}'> update </button>`,
                `<button type='delete' itemId='${item[0]}'> delete </button>`
            ]);
            body += `<tr>${item.map(x=> '<td>' + x +'</td>').join('')}</tr>`;
        });

        table.innerHTML = head + body;
        table.onclick = (e)=>{
            var type = e.target.getAttribute('type');
            var id = e.target.getAttribute('itemId');
            if(type === 'update') this.updateFunc(id);
            else if(type === 'delete') this.deleteFunc(id);
        };
    } 
}