import fetch from 'node-fetch';

export class Clima {

    constructor(ciudad, pais) {
        this.apiKey = 'd0f4018e3c992726849a47b78861105a';
        this.ciudad = ciudad;
        this.pais = pais;
    }

    async getClima() {
        let params = `q=${this.ciudad},${this.pais}&appid=${this.apiKey}&units=metric`;
        try {
            let data = await fetch('https://api.openweathermap.org/data/2.5/weather?' + params);
            let resJson = await data.json();
            return resJson;
        } catch (error) {
            return next(error);
        }

    }

    changeLocation(ciudad, pais) {
        this.ciudad = ciudad;
        this.pais = pais;
    }

}