import InvoicesService from './InvoicesService';
import moment from 'Moment';
import $ from 'jquery';


$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function getUrlParam(parameter){
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}


function setValue(id, val){
    let node = document.getElementById(id);
    if(!node) return;
    if(id.toLowerCase().indexOf('date') === -1){
        node.value = val;
    }else{
        node.valueAsDate = new Date(val);
    }
}

async function init() {
    let service = new InvoicesService();
    let btnSave = document.getElementById("btn_save");
    let id = getUrlParam('id');
    
    if(id){
        var obj = await service.getById(id);
        for(let key in obj){
            setValue(key, obj[key]);
        }
    }

    btnSave.onclick = async function (param) {
        let obj = $("#m_form").serializeObject();
        for(let key in obj){
          if(key.toLowerCase().indexOf('date') !== -1){
            obj[key] = moment(obj[key], 'DD-MM-YYYY').format("DD MMMM YYYY");
          }
        }
        obj.id = id;
        console.log(obj)
        let res = await service.addOrUpdate(obj);
        window.location = '/index.html';
    }
};

init();


