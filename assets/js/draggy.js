// using jQuery to make the t-shirt images draggable
let $draggable = $('.draggable').draggabilly();



// function randomizePosition(){
//   // get the dimensions of the viewport and remove the size of the div
//     var h = $(window).height() - 40;
//     var w = $(window).width() - 40;
    
//     var newh = Math.floor(Math.random() * h);
//     var neww = Math.floor(Math.random() * w);
    
//     return [newh,neww];    
    
// }

// // move that peach! using jQuery's animate function, plugging in new coordinates and speed
// function animateDiv(){
//     var newq = randomizePosition();
//     var oldq = $('.peach').offset();
//     var speed = calculateSpeed([oldq.top, oldq.left], newq);
    
//     $('.peach').animate({ top: newq[0], left: newq[1] }, speed, function(){
//       animateDiv();        
//     });
    
// };

// // speed modifier
// function calculateSpeed(prev, next) {
//     var x = Math.abs(prev[1] - next[1]);
//     var y = Math.abs(prev[0] - next[0]);
//     var greatest = x > y ? x : y;
//     var speedModifier = 0.1;
//     var speed = Math.ceil(greatest/speedModifier);
//     return speed;
// }
// animateDiv();


