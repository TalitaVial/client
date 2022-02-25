class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document)
    this.InputData = $('#data')
    this.InputQuantidade = $('#quantidade')
    this.InputValor = $('#valor')
  }
  adiciona(event) {
    event.preventDefault()

    console.log(this.InputData.value)
    console.log(this.InputQuantidade.value)
    console.log(this.InputValor.value)
  }
}
