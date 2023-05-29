import React from "react";
import { HeaderCliente } from "../../components";
import './DashboardClienteStyles.css'

const DashboardCliente = () => {

    return (
        <div className="dashboard-cliente">
            <HeaderCliente active={1} />

            <section className="carrossel-container">

            </section>

            <section className="decorrer">

            </section>

            <section className="decorridos">
                
            </section>
        </div>
    )
}

export default DashboardCliente;