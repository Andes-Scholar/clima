//Importo las clases
const { Clima } = require('./Clima');
const { UI } = require('./UI');
const { Store } = require('./Store');

//Instancio las clases
const store = new Store();
const { ciudad, pais } = store.getLocationData();
const ui = new UI();
const clima = new Clima(ciudad, pais);
require('./index.css');

async function ObtenerClima() {
    const data = await clima.getClima();
    if (data.cod === 200) {
        ui.render(data);
    } else {
        alert(data.message);
    }
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const ciudad = document.getElementById('ciudad').value;
    const pais = document.getElementById('pais').value;
    clima.changeLocation(ciudad, pais);
    store.getLocationData(ciudad, pais);
    ObtenerClima();
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', ObtenerClima);