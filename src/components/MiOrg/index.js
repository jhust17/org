import './MiOrg.css'
import Addimg from '../../img/Botão add-01 1.png'

const MiOrg=({cambiarMostrar})=>{
    return <section className='orgSection'>
        <h3 className='title'>Mi organización</h3>
        <img src={Addimg} alt="add" onClick={cambiarMostrar}/>
    </section>
}

export default MiOrg