import React from "react";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/footer";
import '../views/styles/services.css';
import Ico1 from '../common/img/icons/ico1.ico'
import Ico2 from '../common/img/icons/ico2.ico'
import Ico3 from '../common/img/icons/ico3.ico'
import Ico4 from '../common/img/icons/ico4.png'
import Ico5 from '../common/img/icons/ico5.png'
import Ico6 from '../common/img/icons/ico6.png'
import Service1 from '../common/img/service1.jpg'
import Service2 from '../common/img/service2.jpg'
import Service3 from '../common/img/service3.jpg'

export default function Services() {
  return (
    <body>
      <div>
        <Navbar />
      </div>
      <section class="inner-headline">
        <div class="container">
          <div class="row">
            <div class="col-lg">
              <h2 class="pageTitle">SERVICIOS</h2>
            </div>
          </div>
        </div>
      </section>
      <section id="content">
        <div class="container-content">
          <div class="row">
            <div class="col-md-12">
              <div class="about-logo">
                <h3 class="title">
                  Nuestros mejores <span class="color">SERVICIOS</span>
                </h3>
                <p>
                  Smile Dent cuenta con todo tipo de servicios odontológicos, contamos con profesionales capacitados en todas las áreas de odontología, como Odontología General, Odontología Infantil, Cirugía Bucal, entre muchos más.
                </p>
                <p>
                  Deposite su confianza y su salud en Smile Dent con la total garantía de un servicio eficaz y muy profesional.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 info-blocks">
              <img className="icon-service" src={Ico1} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Cirugía Oral</h3>
                <p>
                Extracciones dentarias y cirugía de la boca
                </p>
              </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img className="icon-service" src={Ico2} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Chequeo Periódico</h3>
                <p>
                Control periódico para el cuidado y prevención de sus dientes
                </p>
              </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img className="icon-service" src={Ico3} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Endodoncia</h3>
                <p>
                Tratamiento de las raíces dentarias
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4 info-blocks">
            <img className="icon-service" src={Ico4} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Medicina Bucal</h3>
                <p>
                Tratamiento de las lesiones de la mucosa oral
                </p>
              </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img className="icon-service" src={Ico5} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Prótesis Dental</h3>
                <p>
                Sustitución de piezas dentarias mediante prótesis removible y fija
                </p>
              </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img className="icon-service" src={Ico6} alt="Dentista"></img>
              <div class="info-blocks-in">
                <h3>Odontología Infantil</h3>
                <p>
                Tratamiento odontológico general en niños.
                </p>
              </div>
            </div>
          </div>

          <div class="row-service">
            <div class="service">
              <div class="card-small">
                <div class="cardImage">
                  <img
                    class="img-responsive"
                    src={Service1}
                    alt=""
                  ></img>
                  <span class="card-title">Cirugía Bucal</span>
                </div>
                <div class="cardContent">
                  <p>
                  La cirugía bucal u oral tiene la finalidad de solucionar patologías dentales severas. Además, permite corregir aquellos problemas referentes a la salud bucodental del paciente, como la gingivitis o la extracción de piezas dentarias.
                  </p>
                  <p>
                  Apicectomía: consiste en la extirpación quirúrgica de parte de la raíz de la pieza dental y de los tejidos adyacentes que estén afectados.<br></br>Extracción de molares del juicio: es una de las cirugías dentales más comunes. Estas piezas suelen aparecer en un lugar complicado y algunos pacientes sienten dolor cuando comienzan a salir. Por ello, conviene extraerlas para evitar molestias.<br></br>Cirugía de implantes: este tipo de procedimiento va desde la extracción dentaria hasta la instalación de los implantes de titanio, que conforman la base para una posterior reconstrucción dentaria. Según explica el profesional, “la colocación de implantes dentales es una de las intervenciones quirúrgicas más comunes, siendo hoy en día la mejor solución para aquellas personas que sufren la ausencia de una o más piezas dentarias”.
                  </p>
                </div>
              </div>
            </div>
            <div class="service">
              <div class="card-small">
                <div class="cardImage">
                  <img
                    class="img-responsive"
                    src={Service2}
                    alt=""
                  ></img>
                  <span class="card-title">Endodoncia</span>
                </div>
                <div class="cardContent">
                  <p>
                  La endodoncia es un tratamiento dental conocido comúnmente para “matar el nervio”. Consiste en eliminar la parte profunda del diente cuando se encuentra lesionado o infectado. El objetivo de este tratamiento es limpiar el diente por dentro y rellenarlo de un material inerte.
                  </p>
                  <p>
                  El tratamiento se realiza bajo anestesia local, por lo que no resulta doloroso. Si es verdad que, una vez finalizado el efecto de la anestesia, el paciente podría sentir durante los siguientes días alguna molestia a la hora de masticar. El término endodoncia también se usa como sinónimo de endodontología, una rama de la estomatología que se ocupa de las enfermedades de la pulpa dental.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="card-small">
              <div class="cardImage">
                <img class="img-responsive" src={Service3} alt=""></img>
                <span class="card-title">Calzas Dentales</span>
              </div>
              <div class="cardContent">
                <p>
                Las calzas dentales o restauraciones dentales son procedimientos que realiza el Odontólogo para devolver a un diente dañado la forma y la función que se han perdido. Se dividen básicamente en 2 grupos de acuerdo a la forma en que se hacen:
                </p>
                <p>
                Restauraciones Directas: si el daño de la pieza dental es por caries, pequeñas fracturas, desgastes u otro que no afecta la parte estructural de la pieza se realiza un relleno o cobertura directamente en la boca. Los materiales a utilizar pueden ser diversos.<br></br>
                Restauraciones indirectas: si el daño de la pieza dental es estructural o bien por estética, se realizan carillas, coronas o incrustaciones más grandes que se fabrican en el laboratorio dental. Para lo cual se toma un modelo de la pieza dental y en el laboratorio se diseña la restauración.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </body>
  );
}
