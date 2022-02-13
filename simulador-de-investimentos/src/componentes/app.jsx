import { Component } from "react";
import axios from "axios"
import "../estilos/app.css"

export default class Simulador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3000/simulacoes").then(resposta => {
            const info = resposta.data
            this.setState({ response: info })
        })
        setTimeout(() => {
            console.log(this.state.response)
        }, 1000)
    }
    render() {
        return(
            <section id="conteúdo">
                <h1>Simulador de Investimentos</h1>
                <form className="containerSimulador" id="formulário">
                    <h2>Simulador</h2>
                    <div className="containersDePreenchimento containersDePreenchimento1">
                        <div className="containerDePreenchimento" id="rendimentoContainer">
                            <label>Rendimento</label><br />
                            <input type="radio" name="rendimento" id="r1rendimento" className="oculto" defaultChecked  />
                            <input type="radio" name="rendimento" id="r2rendimento" className="oculto"  />
                            <label className="rendimentoLabel" id="rendimentoLabel1" htmlFor="r1rendimento">Bruto</label>
                            <label className="rendimentoLabel" id="rendimentoLabel2" htmlFor="r2rendimento">Líquido</label>
                            <span></span>
                        </div>
                        <div className="containerDePreenchimento">
                            <label>Aporte inicial</label>
                            <input type="number" name="aporteinicial" id="aporteinicial" required />
                        </div>
                        <div className="containerDePreenchimento">
                            <label>Prazo (em meses)</label>
                            <input type="number" name="prazo" id="prazo" required />
                        </div>
                        <div className="containerDePreenchimento">
                            <label>IPCA (ao ano)</label>
                            <input type="number" name="IPCA" id="IPCA" required />
                        </div>
                    </div>
                    <div className="containersDePreenchimento containersDePreenchimento2">
                        <div className="containerDePreenchimento" id="containerIndexação">
                            <label>Tipos de indexação</label><br />
                            <input type="radio" name="indexação" id="r1indexação" className="oculto" />
                            <input type="radio" name="indexação" id="r2indexação" className="oculto" defaultChecked />
                            <input type="radio" name="indexação" id="r3indexação" className="oculto" />
                            <label htmlFor="r1indexação" id="indexação1" className="indexaçãoLabel">PRÉ</label>
                            <label htmlFor="r2indexação" id="indexação2" className="indexaçãoLabel">POS</label>
                            <label htmlFor="r3indexação" id="indexação3" className="indexaçãoLabel">FIXADO</label>
                            <span></span>
                        </div>
                        <div className="containerDePreenchimento">
                            <label>Aporte mensal</label>
                            <input type="number" name="aportemensal" id="aportemensal" required />
                        </div>
                        <div className="containerDePreenchimento">
                            <label>Rentabilidade</label>
                            <input type="number" name="rentabilidade" id="rentabilidade" required />
                        </div>
                        <div className="containerDePreenchimento">
                            <label>CDI (ao ano)</label>
                            <input type="number" name="CDI" id="CDI" required />
                        </div>
                    </div>
                    <div id="botoesContainer">
                        <input className="botoes" type="reset" value="Limpar campos" />
                        <button className="botoes" type="submit">Simular</button>
                    </div>
                </form>
                <div className="containerSimulador">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsa quod vel, eligendi reiciendis minus harum odio quia iste? Ab, quisquam officia iste culpa fuga earum. Nemo dicta quas consequatur.</div>
            </section>
        )
    }
}