import '../common/styles/footer.css';
export const Footer = () => {
    return (
    <footer>
        <div class="container-footer">
            <div class="row">
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Contáctanos</h5>
                        <address className="address">
                        <strong>Smile Dent Inc</strong><br></br>
                        Loja - Ecuador.</address>
                        <p className="address">
                            <i class="icon-phone"></i> 0979360585<br></br>
                            <i class="icon-envelope-alt"></i> smiledent@contact.com
                        </p>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Enlaces rápidos</h5>
                        <ul class="link-list">
                            <li><a class="waves-effect-waves-dark" href="/home">Últimas noticias</a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">Términos y condiciones </a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">Contactános</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Últimas publicaciones</h5>
                        <ul class="link-list">
                            <li><a class="waves-effect-waves-dark" href="/home">Nuevas ofertas en consultas para niños y adolescentes</a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">Hazte cliente Smile dent y recibe un descuento en tu primera consulta</a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">Nos ampliamos, Cónoce ya nuestra nueva sucursal...</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="widget">
                        <h5 class="widgetheading">Últimas noticias</h5>
                        <ul class="link-list">
                            <li><a class="waves-effect-waves-dark" href="/home">Cuidado correcto de los dientes</a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">5 formas de cuidar tus dientes</a></li>
                            <li><a class="waves-effect-waves-dark" href="/home">10 malos hábitos para tus dientes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="sub-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="copyright">
                            <p>
                                <span>&copy;Smile Dent 2021 All right reserved. <a href="https://webthemez.com/free-bootstrap-templates/" >By Edison QV</a></span>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <ul class="social-network">
                            <li><a class="redes-sociales" href="/home" data-placement="top" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li><a class="redes-sociales" href="/home" data-placement="top" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li><a class="redes-sociales" href="/home" data-placement="top" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                            <li><a class="redes-sociales" href="/home" data-placement="top" title="Pinterest"><i class="fa fa-pinterest"></i></a></li>
                            <li><a class="redes-sociales" href="/home" data-placement="top" title="Google plus"><i class="fa fa-google-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
    };