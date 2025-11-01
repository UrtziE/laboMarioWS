import { SpriteSheet } from "./SpriteSheet.js"
let imario=0
let ien=0

function hasiera(){
  
let spriteSheet
let ohiala= document.getElementById("oihala")
let context= ohiala.getContext('2d')


loadImage("https://i1.wp.com/aav255.brandon.courses/img/css-sprites/sprite-supermariocharacters.gif")
  .then(img =>{spriteSheet= new SpriteSheet(img, img.width, img.height)
        spriteSheet.define("mario0",295,0,18,32);
         spriteSheet.define("mario1",312,0,18,32);
          spriteSheet.define("mario2",330,0,18,32);
          spriteSheet.define("en0",274,204,18,30)
          spriteSheet.define("en1",295,204,18,30)
          spriteSheet.define("en2",312,204,18,30)
          
          
        let marioIzen=["mario0","mario1","mario2"]
        let enIzen=["en0","en1","en2"]
         let clock=setInterval(()=>{
            context.clearRect(0,0, 18, 32)
            spriteSheet.draw(marioIzen[imario%3],context,0,0)
            imario++
          },100)
             let clock2=setInterval(()=>{
            context.clearRect(0,200, 18, 30)
            spriteSheet.draw(enIzen[ien%3],context,0,200)
            ien++
          },100)
          
})
  .catch(err => console.error(err));




}
window.onload= hasiera

let i=0
function marraztuMario(sheet, context, x, y,ohiala){
 
 
  sheet.draw(marioIzen[i%3],context,x,y)
  i++
 
}
const loadImage = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.addEventListener('load', () => resolve(img));
  img.addEventListener('error', (err) => reject(err));
  img.src = url;
});

loadImage("https://i1.wp.com/aav255.brandon.courses/img/css-sprites/sprite-supermariocharacters.gif")
  .then(img => console.log(`w: ${img.width} | h: ${img.height}`))
  .catch(err => console.error(err));


  function loadJSON(url){
    return new Promise( (resolve, reject) => {
           fetch(url)
               .then( r => {
                          resolve( r.json() )
               })
               .catch( e => reject())
    })

  }
