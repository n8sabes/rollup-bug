import { renderToString, getQwikLoaderScript } from "@builder.io/qwik/server";
import Cmp from "./component";

// VERY IMPORTANT
// BEFORE BUILDING
// edit node_modules/@builder.io/qwik/package.json
// and remove all "min" entries

// ^^^^^ READ THE ABOVE ^^^^^

(async function () {
  document.head.appendChild(document.createElement('script')).text =getQwikLoaderScript({debug:true})+"; console.log('I am alive')";
  const result = await renderToString(<Cmp />, {containerTagName: 'div', base: '/assets'});
  document.body.innerHTML = result.html;
  document.body.querySelectorAll('script').forEach(s => { 
    // Re-insert the scripts
    if (s.type === 'qwik/json') return
    const newScript = document.createElement('script');
    newScript.text = s.text;
    document.body.appendChild(newScript);
  })
})()

