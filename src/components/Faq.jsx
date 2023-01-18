import Titlefaq from "./Titlefaq";

export default function Faq() {
return (
<div class="accordion" id="accordionExample">
  <div class="accordion-item bg-black text-white border border-gray-200">
    <h2 class="bg-black text-white accordion-header mb-0" id="headingOne">
      <button class="
      bg-black text-white
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
            Como funciona?  
      </button>
    </h2>
    <div id="collapseOne" class=" bg-black text-white accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>Registre seus filmes</strong> ao clicar no botao no topo "adicionar", registre todas as informações do filme ...
      </div>
    </div>
  </div>
  <div class="bg-black text-white accordion- border border-gray-200">
    <h2 class="bg-black text-white accordion-header mb-0" id="headingTwo">
      <button class="
      bg-black text-white
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        Quanto custa?
      </button>
    </h2>
    <div id="collapseTwo" class=" bg-black text-white accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5 bg-black text-white" >
        <strong>Consulte nossos plano e escolha o melhor para voce😉</strong>
      </div>
    </div>
  </div>
  <div class="accordion- border border-gray-200">
    <h2 class="accordion-header mb-0" id="headingThree">
      <button class="
      bg-black text-white
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        Quais filmes posso adicionar?
      </button>
    </h2>
    <div id="collapseThree" class=" bg-black text-white accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div class="accordion-body py-4 px-5">
        <strong>Qualquer um.</strong> Só escrever as informações do filme e adicionar a URL imagem 
    </div>
    </div>
  </div>
</div>
)
}
