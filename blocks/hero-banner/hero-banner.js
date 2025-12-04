export default function decorate(block) {
  const tema = block.children[0];
  const painel = block.children[1];
  const cta = block.children[2];
  tema.style.display="none"


  const painelEsquerda = painel.children[0]
  const painelDireita = painel.children[1]
  painelDireita.classList.add("painel-direita")
  painelEsquerda.classList.add("painel-esquerda")

  if(cta){
    const ctaLink = cta.children[0]
    const ctaIcon = cta.children[1]
    ctaLink.querySelector("a").append(ctaIcon.querySelector("img"))
    painelDireita.append(ctaLink)
  }
  painel.classList.add("grid")
}