window.addEventListener("load", function() {
    // selecionar elementos com a classe "draggable"
    interact('.draggable')
      .draggable({
        // ativar o lançamento inercial
        inércia: true,
        // manter o elemento dentro da área do seu pai
        modifiers: [
          interact.modifiers.restrictRect({
            restrição: 'pai',
            endOnly: true
          })
        ],
        // ativar autoscroll 
        autoScroll: true,
  
        listeners: {
          // chamar esta função em cada evento de arrastar (dragmove)
          move: dragMoveListener,
  
          // chamar esta função em cada evento de soltar (dragend)
          end(event) {
            var textEl = event.target.querySelector('p')
  
            textEl && (textEl.textContent =
              'movido a uma distância de ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px')
          }
        }
      })
  
    function dragMoveListener(event) {
      var target = event.target
      // manter a posição arrastada nos atributos data-x/data-y
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
      // traduzir o elemento
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  
      // atualizar os atributos de posição
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }
  
    // esta função é usada posteriormente nas demonstrações de redimensionamento e gestos
    window.dragMoveListener = dragMoveListener
  })
  