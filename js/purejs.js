window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const heading1 = document.querySelector('h1');
    const controlsSection = document.querySelector('#controls-section');
    console.log(controlsSection);
    heading1.textContent = "It's done";
    if(controlsSection.hasChildNodes('div'))
    {
        log.textContent + `${controlsSection.id} contains at least 1 div`;
    }


//end #intro-section
});

for( let i = 0; i < 1000000000; i++)
{} // This synchronous script is going to delay parsing of the DOM,
   // so the DOMContentLoaded event is going to launch later.

   //#controls-section
   const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});
// end #controls-section
const btnH1 = document.querySelector('button');

btnH1.onclick = function(){
    document.querySelector('h1').textContent = "OK";
}

// #intro-section
