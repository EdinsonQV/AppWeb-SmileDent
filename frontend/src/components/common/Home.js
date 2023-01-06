import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./footer";
import "../common/styles/home.css";
import Slider from './slider/slider'
import Img1 from '../common/img/dentist1.jpg'
import Img2 from '../common/img/dentist5.jpg'
import Img3 from '../common/img/dentist6.jpg'
import Ico1 from '../common/img/icons/ico1.ico'
import Ico2 from '../common/img/icons/ico2.ico'
import Ico3 from '../common/img/icons/ico3.ico'
import Ico4 from '../common/img/icons/ico4.png'
import Ico5 from '../common/img/icons/ico5.png'
import Ico6 from '../common/img/icons/ico6.png'
export const Home = () => {
  return (
    <body>
      <div className="Home">
        <Navbar />
        <Slider/>
        
      </div>
      <section class="dishes">
		    <div class="container">
	 	    <div class="row">
          <div class="col-md-12">
            <div class="aligncenter"><h2 class="aligncenter">Servicio 24/7</h2>En Smile Dent contamos con servicio las 24 horas del día, para atender tus necesidades, <br/>la experiencia y calidad nos caracterizan al servicio de tus salud.
            </div>
            <br/>
          </div>
        </div>
	
	    <div class="row service-v1 margin-bottom-40">
          <div class="col-md-4 md-margin-bottom-40">
					    <div class="card small">
                        <div class="card-image">
                             <img class="img-responsive" src={Img1} alt=""/>  
                            <span class="card-title">Consulta Médica</span>
                        </div>
                        <div class="card-content">
                            <p>
                                Smile Dent te permite agendar tu cita odontológica de acuerdo a el horario más comodo para ti
                            </p>
                            <p>
                                Para agendar tu consulta, recuerda haber ingresado desde tu cuenta, y si no la tienes, Registrate ahora!
                            </p>
                        </div>
                    </div>        
            </div>
			   <div class="col-md-4 md-margin-bottom-40">
					<div class="card small">
                        <div class="card-image">
                             <img class="img-responsive" src={Img2} alt=""/>  
                            <span class="card-title">Médicos Calificados</span>
                        </div>
                        <div class="card-content">
                            <p>
                                Contamos con profesionales altamente calificados, con muchos años de experiencia en el servicio odontológico.
                            </p>
                            <p>
                                Nuestros clientes siempre quedan satisfechos por el servicio y capacidad de nuestros odontólogos, que es lo que nos caracteriza.
                            </p>
                        </div>
                    </div>        
            </div>
			   <div class="col-md-4 md-margin-bottom-40">
					<div class="card small">
                        <div class="card-image">
                             <img class="img-responsive" src={Img3} alt=""/>
                            <span class="card-title">Servicio de Emergencia</span>
                        </div>
                        <div class="card-content">
                            <p>
                                En Smile Dent estamos prestos para atenderte todos los días de la semana, incluso en caso de emergencia.
                            </p>
                            <p>
                                Recuerda contactarnos a nuestros números de contacto en caso de emergencia e inmediatamente te atenderemos.
                            </p>
                        </div>
                    </div>        
            </div> 
        </div>
		</div>
		</section>    
    <section id="content"> 
	<div class="container">
	
		<section class="services">
	    	<div class="row">
			<div class="col-md-12">
				<div class="aligncenter"><h2 class="aligncenter">Nuestras especialidades</h2>En Smile Dent cubrimos todo tipo de servicios odontológicos, en todas las especialidades, como Cirugía Oral, Odontología Preventiva, Endodoncia, Odontología infantil, etc.</div>
				<br/>
			</div>
		</div>

	 <div class="row">
            <div class="col-sm-4 info-blocks"> 
            <img class="icons" src={Ico1} alt=""/>
                <div class="info-blocks-in">
                    <h3>Cirugía oral</h3>
                    <p>Extracciones dentarias  y cirugía de la boca</p>
                </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img class="icons" src={Ico2} alt=""/>
                <div class="info-blocks-in">
                    <h3>Chequeo Periódico</h3>
                    <p>Control periódico para el cuidado y prevención de sus dientes</p>
                </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img class="icons" src={Ico3} alt=""/>
                <div class="info-blocks-in">
                    <h3>Endodoncia</h3>
                    <p>Tratamiento de las raíces dentarias</p>
                </div>
            </div>
        </div>
<div class="row">
            <div class="col-sm-4 info-blocks">
            <img class="icons" src={Ico4} alt=""/>
                <div class="info-blocks-in">
                    <h3>Medicina Bucal</h3>
                    <p>Tratamiento de las lesiones de la mucosa oral</p>
                </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img class="icons" src={Ico5} alt=""/>
                <div class="info-blocks-in">
                    <h3>Prótesis Dental</h3>
                    <p>Sustitución de piezas dentarias mediante prótesis removible y fija sobre otros dientes o sobre implantes</p>
                </div>
            </div>
            <div class="col-sm-4 info-blocks">
            <img class="icons" src={Ico6} alt=""/>
                <div class="info-blocks-in">
                    <h3>Odontología Infantil</h3>
                    <p>Tratamiento odontológico general en niños.</p>
                </div>
            </div>
        </div>
		</section>
	</div>
	</section>
  <Footer />
    </body>
    
  );
};
