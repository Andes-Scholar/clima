
export class Clima {

    constructor(ciudad, pais) {
        this.apiKey = 'd0f4018e3c992726849a47b78861105a';
        this.ciudad = ciudad;
        this.pais = pais;
    }

    /* TODO:
    Desarrollar la funcionalidad de getClima para obtener la información asociada a: unaCiudad y unPais utilizando la apikey definida
    en el constructor.
    
    AYUDA:
    
    TIP1: https://api.openweathermap.org/data/2.5/weather?q=neuquen,argentina&appid=d0f4018e3c992726849a47b78861105a&units=metric
    es como debería llamar a la api.
    
    TIP2: Piense si es necesario que el llamado sea async.
    
    TIP3: Utilize fetch para realizar el request.
    */
     async getClima() {
         
        const clima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=d0f4018e3c992726849a47b78861105a&units=metric`);
        if (clima) {
            return clima.json();
        }
    }

    changeLocation(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }
}