import React from 'react';
import "./installations.scss"
import rightArrow from '../../assets/arrows/arrow-right.svg'
import InstallationCard from '../../components/shared/installations card/card';
import included1 from '../../assets/included1.png';
import included2 from '../../assets/included2.png';
import included3 from '../../assets/included3.png';
import included4 from '../../assets/included4.png';

const Installations = () => {

    return(
        <div className='installations-page' id="installations">
            <h1>Instalaciones</h1>
            <p className="descr-installations">La vida, como nueva.<br/> Exploración global sin complicaciones. Sólo tienes que aparecer y empezar a vivir tu mejor vida.</p>
            <div className='installations-container'>
                <div className='installations-text'>
                    <p className='installations-includes'>Mira lo que te incluye</p>
                    <p className='installations-more'>Check all the benefits<img src={rightArrow} alt="right arrow"/></p>
                </div>
                <InstallationCard
                image={included1}
                title="Registro Sencillo"
                description="Un registro rápido y sin complicaciones. Encuentra la vivienda que te gusta, solicítala y regístrate con un clic."
                />
                <InstallationCard
                image={included2}
                title="Apartamentos amueblado"
                description="Todos nuestros apartamentos están completamente amueblados y listos para ser habitados. Trae tus cosas, nosotros nos encargamos del resto."
                />
                <InstallationCard
                image={included3}
                title="Todos los gatos incluidos"
                description="Sin sorpresas, todos los gastos están incluidos en el alquiler. Facturas, internet, manutención, lo que quieras."
                />
                <InstallationCard
                image={included4}
                title="Eventos de la comunidad"
                description="Conferencias, clases de yoga, noches de bar y mucho más. Únete a nuestras reuniones comunitarias, todo corre de nuestra cuenta."
                />
            </div>
        </div>
    )
}
export default Installations