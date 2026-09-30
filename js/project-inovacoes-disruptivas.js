/*
 * Controles do carrossel de imagens de "Minhas Finanças XR".
 *
 * A faixa de logos do Laboratório de Tecnologias Imersivas não usa este
 * JavaScript: ela é animada pelo CSS em project-inovacoes-disruptivas.css.
 */
const financasCarousel = document.querySelector(".financas-carousel__scroller");

if (financasCarousel) {
  // Valores seguros para testar velocidade, arraste e inércia sem alterar a lógica.
  const carouselInteraction = {
    // Multiplica a rolagem vertical do mouse/trackpad convertida para movimento horizontal.
    // Maior = roda mais rápido; menor = movimento mais lento.
    wheelSpeed: 1.5,
    // Limita a velocidade inicial da inércia criada pela roda.
    // Maior = deslize após a roda pode começar mais rápido.
    maxMomentumVelocity: 2,
    // Reduz a velocidade calculada pela roda antes de iniciar a inércia.
    // Menor = mais inércia; maior = menos inércia.
    wheelMomentumDivisor: 60,
    // Multiplica a distância percorrida durante o arraste.
    // Maior = conteúdo acompanha o ponteiro mais rapidamente.
    dragSensitivity: 1.5,
    // Velocidade mínima para iniciar/manter a inércia. Maior = a animação para antes.
    minMomentumVelocity: 0.02,
    // Evita saltos quando o navegador demora a entregar um quadro de animação.
    maxFrameElapsed: 32,
    // Referência de duração de um quadro para o cálculo de desaceleração.
    frameDuration: 48,
    // Atrito aplicado a cada quadro de referência. Entre 0 e 1:
    // mais próximo de 1 = inércia mais longa; mais próximo de 0 = para mais rápido.
    momentumFriction: 0.8,
  };

  // Elemento que recebe a rolagem, o arraste e o estado visual "is-dragging".
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Desativa a inércia quando a pessoa prefere menos movimento no sistema.
  let pointerId = null;
  // Identifica o toque/clique que iniciou o arraste; impede que outro ponteiro o controle.
  let lastPointerX = 0;
  // Guarda a última posição horizontal do ponteiro para medir a distância arrastada.
  let lastPointerTime = 0;
  // Guarda o horário da última posição para calcular a velocidade do arraste.
  let velocity = 0;
  // Velocidade atual em pixels por milissegundo; alimenta a inércia ao soltar o ponteiro.
  let momentumFrame = null;
  // ID do requestAnimationFrame da inércia; permite interrompê-la num novo arraste.

  // Move o conteúdo horizontalmente e limita a rolagem ao início e ao fim do carrossel.
  const moveBy = (distance) => {
    // Maior posição válida de rolagem; evita espaço vazio depois do último card.
    const maxScrollLeft = financasCarousel.scrollWidth - financasCarousel.clientWidth;
    // Posição atual antes do movimento.
    const previousScrollLeft = financasCarousel.scrollLeft;
    // Posição desejada, limitada aos dois extremos do conteúdo.
    const nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, previousScrollLeft + distance));

    financasCarousel.scrollLeft = nextScrollLeft;
    // Retorna o deslocamento real: pode ser menor que o pedido ao encostar em uma ponta.
    return nextScrollLeft - previousScrollLeft;
  };

  // Cancela qualquer inércia em andamento antes de uma nova interação.
  const stopMomentum = () => {
    if (momentumFrame) cancelAnimationFrame(momentumFrame);
    momentumFrame = null;
  };

  // Continua o movimento depois da roda ou do arraste, reduzindo a velocidade gradualmente.
  const startMomentum = () => {
    if (reducedMotion.matches || Math.abs(velocity) < carouselInteraction.minMomentumVelocity) return;

    // Momento do último quadro, usado para manter a animação estável em diferentes telas.
    let previousTime = performance.now();
    const tick = (time) => {
      const elapsed = Math.min(time - previousTime, carouselInteraction.maxFrameElapsed);
      previousTime = time;
      // Distância percorrida neste quadro de inércia.
      const moved = moveBy(velocity * elapsed);

      velocity *= Math.pow(
        carouselInteraction.momentumFriction,
        elapsed / carouselInteraction.frameDuration,
      );

      // Para quando a velocidade fica imperceptível ou quando uma ponta bloqueia o movimento.
      if (Math.abs(velocity) < carouselInteraction.minMomentumVelocity || Math.abs(moved) < 0.01) {
        momentumFrame = null;
        return;
      }

      momentumFrame = requestAnimationFrame(tick);
    };

    momentumFrame = requestAnimationFrame(tick);
  };

  financasCarousel.addEventListener("wheel", (event) => {
    // Deixa a rolagem horizontal nativa passar sem interferência.
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    // Converte a roda vertical em deslocamento horizontal com a velocidade configurada.
    const distance = event.deltaY * carouselInteraction.wheelSpeed;
    const moved = moveBy(distance);

    // Se o carrossel chegou ao limite, a página pode continuar rolando normalmente.
    if (!moved) return;

    event.preventDefault();
    stopMomentum();
    // Define a velocidade inicial da inércia e limita picos de trackpads muito rápidos.
    velocity = Math.max(
      -carouselInteraction.maxMomentumVelocity,
      Math.min(carouselInteraction.maxMomentumVelocity, distance / carouselInteraction.wheelMomentumDivisor),
    );
    startMomentum();
  }, { passive: false });

  financasCarousel.addEventListener("pointerdown", (event) => {
    // Ignora botões secundários/auxiliares do mouse, mas aceita toque, caneta e clique principal.
    if (event.pointerType === "mouse" && event.button !== 0) return;

    stopMomentum();
    pointerId = event.pointerId;
    lastPointerX = event.clientX;
    lastPointerTime = event.timeStamp;
    velocity = 0;
    // Mantém os eventos do ponteiro mesmo se ele sair visualmente da área do carrossel.
    financasCarousel.setPointerCapture(pointerId);
    // Classe usada pelo CSS para indicar que o arraste está ativo.
    financasCarousel.classList.add("is-dragging");
  });

  financasCarousel.addEventListener("pointermove", (event) => {
    // Só o mesmo toque/clique que começou o arraste pode mover o carrossel.
    if (event.pointerId !== pointerId) return;

    // Intervalo desde o último movimento; mínimo de 1 evita divisão por zero.
    const elapsed = Math.max(event.timeStamp - lastPointerTime, 1);
    // Distância horizontal aplicada ao conteúdo, ajustada pela sensibilidade do arraste.
    const distance = (lastPointerX - event.clientX) * carouselInteraction.dragSensitivity;
    const moved = moveBy(distance);

    // Atualiza a velocidade que será usada pela inércia ao soltar o ponteiro.
    velocity = moved / elapsed;
    lastPointerX = event.clientX;
    lastPointerTime = event.timeStamp;
  });

  const endDrag = (event) => {
    if (event.pointerId !== pointerId) return;

    // Libera o ponteiro capturado e encerra o estado visual de arraste.
    if (financasCarousel.hasPointerCapture(pointerId)) {
      financasCarousel.releasePointerCapture(pointerId);
    }

    pointerId = null;
    financasCarousel.classList.remove("is-dragging");
    // Mantém o deslizamento após soltar, exceto para quem reduziu movimento no sistema.
    startMomentum();
  };

  financasCarousel.addEventListener("pointerup", endDrag);
  financasCarousel.addEventListener("pointercancel", endDrag);

  financasCarousel.querySelectorAll("img").forEach((image) => {
    // Evita que a imagem seja arrastada pelo navegador em vez do próprio carrossel.
    image.addEventListener("dragstart", (event) => event.preventDefault());
    // Evita o menu de contexto sobre imagens durante a interação de toque/clique prolongado.
    image.addEventListener("contextmenu", (event) => event.preventDefault());
  });
}

/*
 * Movimento vertical da seção "Produto final".
 * Este bloco é independente do arraste do carrossel acima.
 */
const financasFinalProduct = document.querySelector(".financas-final-product");

if (financasFinalProduct) {
  // Área da seção que define o intervalo de rolagem do efeito.
  const finalProductSticky = financasFinalProduct.querySelector(".financas-final-product__sticky");
  // Coluna de mídias que será deslocada verticalmente durante a rolagem da página.
  const finalProductTrack = financasFinalProduct.querySelector(".financas-final-product__track");
  // Habilita o efeito apenas acima de 900 px, onde há espaço para a composição sticky.
  const desktopMotion = window.matchMedia("(min-width: 56.3125rem)");
  // Desabilita o efeito para quem preferiu reduzir movimento no sistema.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // ID do quadro agendado; impede vários cálculos iguais dentro do mesmo frame.
  let pendingFrame = null;

  // Calcula a posição das mídias a partir do progresso de rolagem da seção.
  const updateFinalProductMotion = () => {
    pendingFrame = null;

    // Fora do desktop ou com redução de movimento, retorna as mídias à posição original.
    if (!desktopMotion.matches || reducedMotion.matches) {
      finalProductTrack.style.removeProperty("transform");
      return;
    }

    // Limites atuais da seção em relação à janela do navegador.
    const sectionBounds = financasFinalProduct.getBoundingClientRect();
    // Distância sticky definida no CSS; é o ponto em que o progresso começa.
    const stickyTop = Number.parseFloat(getComputedStyle(finalProductSticky).top) || 0;
    // Espaço total disponível para a animação; o mínimo de 1 evita divisão por zero.
    const availableScroll = Math.max(1, financasFinalProduct.offsetHeight - finalProductSticky.offsetHeight);
    // Percentual da animação entre 0 (início) e 1 (fim).
    const progress = Math.min(1, Math.max(0, (stickyTop - sectionBounds.top) / availableScroll));
    // Primeira mídia usada como referência para o deslocamento total.
    const firstMedia = finalProductTrack.firstElementChild;
    // Espaçamento vertical entre as mídias, lido do CSS para preservar a composição.
    const gap = Number.parseFloat(getComputedStyle(finalProductTrack).rowGap);
    // Quanto a coluna sobe conforme a pessoa percorre a seção.
    const shift = (firstMedia.offsetHeight + gap) * progress;

    finalProductTrack.style.transform = `translate3d(0, ${-shift}px, 0)`;
  };

  // Agrupa eventos de scroll/resize em um único frame para manter a página fluida.
  const requestFinalProductUpdate = () => {
    if (pendingFrame) return;
    pendingFrame = requestAnimationFrame(updateFinalProductMotion);
  };

  window.addEventListener("scroll", requestFinalProductUpdate, { passive: true });
  window.addEventListener("resize", requestFinalProductUpdate);
  desktopMotion.addEventListener("change", requestFinalProductUpdate);
  reducedMotion.addEventListener("change", requestFinalProductUpdate);
  requestFinalProductUpdate();
}
