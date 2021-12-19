/*   < interação com o user */

        var vidas = 0
        var processar = true

        function lol() {
        if (!processar)
        return;

        processar = false;
      if(vidas >= 5) {
            window.location.href = 'sua-pag.html'
        } else {

            vidas++

        balao = document.getElementById('balao')


        var textos = new Array()
        textos[1] = ' Eu não posso acreditar que vocês são tão ESTUPIDOS! Volte para casa clicando em reset.'
        textos[2] = ' Desculpa mais não há nada aqui, tente mais uma vez! vejamos onde sua determinação o leva!'
        textos[3] = ' Sua determinação esta grande, continuar pode ser perigoso, aonde você deseja chegar com isso?'
        textos[4] = ' Vejo que sua determinação é grandiosa e isso o levara para um caminho perigoso caso continue'
        textos[5] = ' você realmente é um ESTUPIDO!! continue e fique com seus PESADELOS!'


        var flower = new Array()
        flower[1] = 'gif´s/flow-1.gif'
        flower[2] = 'gif´s/flow-2.gif'
        flower[3] = 'gif´s/flow-3.gif'
        flower[4] = 'gif´s/flow-4.gif'
        flower[5] = 'gif´s/flow-5.gif'

        negativo = document.getElementById('negativo')
        negativo_2 = document.getElementById('negativo_2')
        negativo.innerHTML = '- ' + vidas

        if(vidas === 5){
            negativo.remove()
          negativo_2.style.fontSize = '20px'
        negativo_2.innerHTML = '<span class="game_over" align="center"><h1><b>GAME</b><h2><b>OVER</b></h2><span>'

        }

            var corazon = document.getElementById('v' + vidas)
            corazon.remove()

            var flower_ = document.getElementById('flower')
            flower_.src = flower[vidas]


            var contador = textos[vidas].split("");

            function loop() {
          if (contador.length > 0) {
                balao.innerHTML += contador.shift();
            setTimeout(loop, 55);
          } else {
                processar = true;
          }
        }

            balao.innerHTML = ''

            loop();

      }
        
      }
      

    var icon = document.getElementById("icon");

    icon.onclick = function () {
    if (this.className === "Icon") {
        this.className = "Icon open";
    } else {
        this.className = "Icon";
    }
  };

    document.getElementById('balao_2').innerHTML = 'Ola serumaninho infelizmente a página requisitada não existe! por favor continue.'

    function lol_2() {
        document.getElementById('balao_2').innerHTML = ''
    }

    v1 = document.getElementById('v1')
    v1.src = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCAgOOiqLFXkaAAAA/0lEQVQ4y+2UzU4CMRSFv9YiiCGBhNGtPgmJYeuSp8DE5/CxXPIKLMQ30EwyUaaYy6J3kvmBCjNbThftac9p7u3PRRAEGUvAs/LDba6qJHALgGNAwB0Wq7NlXOG4pq9sFBRGwPLXEA/YlpjDNxQ9do6EEU3ck/Kt44TxAcWUXyPCMRjtjyosHRAzm//MLrL2ypBbhpHdIzl3CvtivpgBcKwB6PF4husLT05u9HU+sDnDPAl/vQg775Kzb2MuvmTKCwALZhH1OysyMn6U14rrm8SwrKrrV5W1ybmV2dQKSZ8bAD6YlGY3PJHjSSvVvFHDtrpcPX3P5ylhFzjp3juZ95CIf40YVJ6uAAAAAElFTkSuQmCC"

    v2 = document.getElementById('v2')
    v2.src = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCAgOOiqLFXkaAAAA/0lEQVQ4y+2UzU4CMRSFv9YiiCGBhNGtPgmJYeuSp8DE5/CxXPIKLMQ30EwyUaaYy6J3kvmBCjNbThftac9p7u3PRRAEGUvAs/LDba6qJHALgGNAwB0Wq7NlXOG4pq9sFBRGwPLXEA/YlpjDNxQ9do6EEU3ck/Kt44TxAcWUXyPCMRjtjyosHRAzm//MLrL2ypBbhpHdIzl3CvtivpgBcKwB6PF4husLT05u9HU+sDnDPAl/vQg775Kzb2MuvmTKCwALZhH1OysyMn6U14rrm8SwrKrrV5W1ybmV2dQKSZ8bAD6YlGY3PJHjSSvVvFHDtrpcPX3P5ylhFzjp3juZ95CIf40YVJ6uAAAAAElFTkSuQmCC"

    v3 = document.getElementById('v3')
    v3.src = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCAgOOiqLFXkaAAAA/0lEQVQ4y+2UzU4CMRSFv9YiiCGBhNGtPgmJYeuSp8DE5/CxXPIKLMQ30EwyUaaYy6J3kvmBCjNbThftac9p7u3PRRAEGUvAs/LDba6qJHALgGNAwB0Wq7NlXOG4pq9sFBRGwPLXEA/YlpjDNxQ9do6EEU3ck/Kt44TxAcWUXyPCMRjtjyosHRAzm//MLrL2ypBbhpHdIzl3CvtivpgBcKwB6PF4husLT05u9HU+sDnDPAl/vQg775Kzb2MuvmTKCwALZhH1OysyMn6U14rrm8SwrKrrV5W1ybmV2dQKSZ8bAD6YlGY3PJHjSSvVvFHDtrpcPX3P5ylhFzjp3juZ95CIf40YVJ6uAAAAAElFTkSuQmCC"

    v4 = document.getElementById('v4')
    v4.src = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCAgOOiqLFXkaAAAA/0lEQVQ4y+2UzU4CMRSFv9YiiCGBhNGtPgmJYeuSp8DE5/CxXPIKLMQ30EwyUaaYy6J3kvmBCjNbThftac9p7u3PRRAEGUvAs/LDba6qJHALgGNAwB0Wq7NlXOG4pq9sFBRGwPLXEA/YlpjDNxQ9do6EEU3ck/Kt44TxAcWUXyPCMRjtjyosHRAzm//MLrL2ypBbhpHdIzl3CvtivpgBcKwB6PF4husLT05u9HU+sDnDPAl/vQg775Kzb2MuvmTKCwALZhH1OysyMn6U14rrm8SwrKrrV5W1ybmV2dQKSZ8bAD6YlGY3PJHjSSvVvFHDtrpcPX3P5ylhFzjp3juZ95CIf40YVJ6uAAAAAElFTkSuQmCC"

    v5 = document.getElementById('v5')
    v5.src = "data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflCAgOOiqLFXkaAAAA/0lEQVQ4y+2UzU4CMRSFv9YiiCGBhNGtPgmJYeuSp8DE5/CxXPIKLMQ30EwyUaaYy6J3kvmBCjNbThftac9p7u3PRRAEGUvAs/LDba6qJHALgGNAwB0Wq7NlXOG4pq9sFBRGwPLXEA/YlpjDNxQ9do6EEU3ck/Kt44TxAcWUXyPCMRjtjyosHRAzm//MLrL2ypBbhpHdIzl3CvtivpgBcKwB6PF4husLT05u9HU+sDnDPAl/vQg775Kzb2MuvmTKCwALZhH1OysyMn6U14rrm8SwrKrrV5W1ybmV2dQKSZ8bAD6YlGY3PJHjSSvVvFHDtrpcPX3P5ylhFzjp3juZ95CIf40YVJ6uAAAAAElFTkSuQmCC"
