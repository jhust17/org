import "./Footer.css"
import footer from '../../img/Footer.png'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
import twitter from '../../img/twitter.png'
import Logo from '../../img/Logo.png'
const Footer =()=>{
    return <footer className='footer' style={{backgroundImage: `url(${footer})`}}>
    <div className='redes'>
        <a href='https://www.aluracursos.com/'>
            <img src={facebook} alt='Facebook' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src={twitter} alt='twitter' />
        </a>
        <a href='https://www.aluracursos.com/'>
            <img src={instagram} alt='instagram' />
        </a>
    </div>
    <img src={Logo} alt='org' />
    <strong>Desarrollado por Jhustin</strong>
</footer>
}

export default Footer