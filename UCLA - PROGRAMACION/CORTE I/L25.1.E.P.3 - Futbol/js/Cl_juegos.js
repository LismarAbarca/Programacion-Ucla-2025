export default class Cl_juegos {
    constructor () {
        this.cntPartidosGanados = 0 ;
        this.cntPartidos = 0 ;
    }

    procesarPartido (partido) {

        if (partido.resultados == 1)
            this.cntPartidosGanados++;

        this.cntPartidos++;

    }

    porcentajeJuegos () {
        return (this.cntPartidosGanados * 100)/ this.cntPartidos;
    }
}