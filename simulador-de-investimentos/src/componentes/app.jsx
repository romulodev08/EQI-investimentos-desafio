import { Component } from "react";

export default class Simulador extends Component {
    render() {
        return(
            <section>
                <h1>Simulador de Investimentos</h1>
                <form className="containerSimulador" id="containerDePreenchimento">
                    <h2>Simulador</h2>
                    <div>
                        <div>
                            <label>Rendimento</label>
                            <input type="radio" name="rendimento" id="r1rendimento" defaultChecked />
                            <input type="radio" name="rendimento" id="r2rendimento" />
                            <label htmlFor="r1rendimento">Bruto</label>
                            <label htmlFor="r2rendimento">Líquido</label>
                        </div>
                        <div>
                            <label>Aporte inicial</label>
                            <span>R$</span>
                            <input type="number" name="aporteinicial" id="aporteinicial" />
                        </div>
                        <div>
                            <label>Prazo (em meses)</label>
                            <input type="number" name="prazo" id="prazo" />
                        </div>
                        <div>
                            <label>IPCA (ao ano)</label>
                            <input type="number" name="IPCA" id="IPCA" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Tipos de indexação</label>
                            <input type="radio" name="indexação" id="r1indexação" />
                            <input type="radio" name="indexação" id="r2indexação" defaultChecked />
                            <input type="radio" name="indexação" id="r3indexação" />
                            <label htmlFor="r1indexação">PRÉ</label>
                            <label htmlFor="r2indexação">POS</label>
                            <label htmlFor="r3indexação">FIXADO</label>
                        </div>
                        <div>
                            <label>Aporte mensal</label>
                            <span>R$</span>
                            <input type="number" name="aportemensal" id="aportemensal" />
                        </div>
                        <div>
                            <label>Rentabilidade</label>
                            <input type="number" name="rentabilidade" id="rentabilidade" />
                        </div>
                        <div>
                            <label>CDI (ao ano)</label>
                            <input type="number" name="CDI" id="CDI" />
                        </div>
                    </div>
                    <div className="botõesContainer">
                        <input type="reset" value="Limpar campos" />
                        <button className="botão">Simular</button>
                    </div>
                </form>
                <div className="containerSimulador"></div>
            </section>
        )
    }
}