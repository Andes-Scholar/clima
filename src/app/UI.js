
export class UI {

    constructor() {
        this.locacion = document.getElementById('weather-location');
        this.centigrados = document.getElementById('weather-string');
        this.humedad = document.getElementById('weather-humidity');
        this.viento = document.getElementById('weather-wind');
    }
    //Con este metodo voy a mostrar los datos que obtengo del clima
    render(clima) {
        this.locacion.textContent = clima.name + ' - ' + clima.sys.country;
        this.centigrados.textContent = clima.main.temp + ' ºC';
        this.humedad.textContent = 'Humedad: ' + clima.main.humidity + ' %';
        this.viento.textContent = 'Viento: ' + clima.wind.speed + ' m/s';
    }
}