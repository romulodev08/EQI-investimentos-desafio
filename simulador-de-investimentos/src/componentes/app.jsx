import { Component } from "react";
import axios from "axios"
import "../estilos/app.css"

export default class Simulador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            response: [],
            rendimento: "bruto",
            tipoDeIndexação: "pos",
            resultadoDaSimulação: [],
            dadosDoFormulario: [],
            mostrarSimulação: false,
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
    simular(props) {
        this.state.response.map((item, index) => {
            if(item.tipoIndexacao == this.state.tipoDeIndexação && item.tipoRendimento == this.state.rendimento) {
                this.setState({ resultadoDaSimulação: item, mostrarSimulação: true })
            }
        })
    }
    validarCampos(){
		const campos = document.querySelectorAll("[required]")
        let preenchidos = false
        for(let i = 0; i < campos.length; i++) {
            if(campos[i].value == "") {
                campos[i].style.borderBottomColor = "red"
                preenchidos = false
            } else {
                campos[i].style.borderBottomColor = "black"
                preenchidos = true
            }
        }
        setInterval(() => {
            if(preenchidos) {
                this.simular()
            }
        });
	}
    render() {
        return(
            <section id="conteúdo">
                <h1>Simulador de Investimentos</h1>
                <form className="containerSimulador" id="formulário" >
                    <h2>Simulador</h2>
                    <div className="containersDePreenchimento containersDePreenchimento1">
                        <div className="containerDePreenchimento" id="rendimentoContainer">
                            <label>Rendimento</label><br />
                            <input type="radio" name="rendimento" id="r1rendimento" className="oculto" defaultChecked />
                            <input type="radio" name="rendimento" id="r2rendimento" className="oculto"  />
                            <label className="rendimentoLabel" id="rendimentoLabel1" htmlFor="r1rendimento" onClick={() => this.setState({ rendimento: "bruto" })}>Bruto</label>
                            <label className="rendimentoLabel" id="rendimentoLabel2" htmlFor="r2rendimento" onClick={() => this.setState({ rendimento: "liquido" })} >Líquido</label>
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
                            <label htmlFor="r1indexação" id="indexação1" className="indexaçãoLabel" onClick={() => this.setState({ tipoDeIndexação: "pre" })} >PRÉ</label>
                            <label htmlFor="r2indexação" id="indexação2" className="indexaçãoLabel" onClick={() => this.setState({ tipoDeIndexação: "pos" })} >POS</label>
                            <label htmlFor="r3indexação" id="indexação3" className="indexaçãoLabel" onClick={() => this.setState({ tipoDeIndexação: "ipca" })} >FIXADO</label>
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
                        <button className="botoes" type="button" onClick={() => this.validarCampos()}>Simular</button>
                    </div>
                </form>
                <div className="containerSimulador resultado" style={{visibility: this.state.mostrarSimulação?"visible": "hidden"}}>
                    <h2>Resultado da Simulação</h2>
                    <div id="valores">
                        <div className="card">
                            <h3>Valor final Bruto</h3>
                            <p>R${ this.state.resultadoDaSimulação.valorFinalBruto }</p>
                        </div>
                        <div className="card">
                            <h3>Alíquota do IR</h3>
                            <p>{this.state.resultadoDaSimulação.aliquotaIR}%</p>
                        </div>
                        <div className="card">
                            <h3>Valor pago em IR</h3>
                            <p>{this.state.resultadoDaSimulação.valorPagoIR}</p>
                        </div>
                        <div className="card">
                            <h3>Valor final Líquido</h3>
                            <p>{this.state.resultadoDaSimulação.valorFinalLiquido}</p>
                        </div>
                        <div className="card">
                            <h3>Valor total Investido</h3>
                            <p>{this.state.resultadoDaSimulação.valorTotalInvestido}</p>
                        </div>
                        <div className="card">
                            <h3>Ganho Líquido</h3>
                            <p>{this.state.resultadoDaSimulação.valorFinalLiquido}</p>
                        </div>
                    </div>
                    <div id="grafico">

                    </div>
                </div>

            </section>
        )
    }
}