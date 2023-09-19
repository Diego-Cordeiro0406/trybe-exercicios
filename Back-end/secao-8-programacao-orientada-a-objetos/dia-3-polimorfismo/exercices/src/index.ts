import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clbs = new Clube();

const quadraFut = new QuadraFutebol();

clbs.adicionarQuadra(quadraFut);



console.log(clbs.buscarQuadra<QuadraFutebol>(0).reservar(new Date('2023-09-19T16:43:06.083Z')));