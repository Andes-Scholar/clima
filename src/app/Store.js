export class Store {

    constructor() {
        this.ciudad;
        this.pais;

        this.defaulCiudad = 'Neuquén';
        this.defaulPais = 'Argentina';
    }

    getLocationData() {
        if (localStorage.getItem('ciudad') === null) {
            this.ciudad = this.defaulCiudad;
        } else {
            this.ciudad = localStorage.getItem('ciudad');
        }

        if (localStorage.getItem('pais') === null) {
            this.pais = this.defaulPais;
        } else {
            this.pais = localStorage.getItem('pais');
        }

        return {
            ciudad: this.ciudad,
            pais: this.pais
        }

    }

    setLocationData(ciudad, pais) {
        localStorage.setItem('ciudad', ciudad);
        localStorage.setItem('pais', pais);
    }
}