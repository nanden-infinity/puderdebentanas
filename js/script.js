
export default  class Elemet {
  constructor(element, text){
    this.elemento = element;
    this.texto = text;
  }
    create(){
      const texto = 'Ideias do Projecto'
        this.elemento = document
    }
}

const insertElement =  function(){
  const button = document.createElement('button')
  const banner = document.querySelector('.figure--banner');
  button.classList.add('toogles')
  button.innerText = 'Ideia de Projecto'
  banner.appendChild(button)
  console.log(button);
}

insertElement()
