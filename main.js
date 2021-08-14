var  $table=$('#table')
var  $player1=$('#player')
var  $computer=$('#computer')

// var computer = {
//     direction: 1,
//     SPEED: 5,
// }



// $table.mousemove(function(e){
   
//    var  top= Math.min($table.height()-ball.height(),e.pageY - $table.offset().top);

//     ball.css({
//         top: `${top}px`
//     })
// })

// $( "#forward" ).click(function() {
//     $( "#ball" ).animate({ "left": "+=50px" }, "slow" );

//     if(ball.left===parseInt('600px')){
//         msg();
//     }
//   });
   
//   $( "#up" ).click(function(){
//     $( ".ball" ).animate({ "top": "-=50px" }, "slow" );
//   });
//   $( "#down" ).click(function(){
//     $( ".ball" ).animate({ "bottom": "-=50px" }, "slow" );
//   });

//   function msg(){
//       $('#msg').text('You Win')
//   }



// collision




//  move Compuer board
// function update(){
//   computer.top+= computer.direction * computer.SPEED

//   $computer.css({
//       top : `${computer.top}px`
//   })
// }

// setInterval(update,1000)

// how to 

// // computer movement 
// $computer.mousemove(function(event){
//     console.log(event)
//     var  top= event.pageY;
//     $computer.css({
//         top: `${top}px`
//     })
// },83)

// ball movement
counter=0
// document.addEventListener('keypress', logKey);
var counter=0
var counter1=0
$('body').keypress(function(e){
    console.log(e.keyCode)
    // for key press move item by adding px
    if(e.which === 51){
        counter+=9
        $computer.css({'margin-top':counter+'px'})
    }
    if(e.which === 57){ 
         counter-=9
        $computer.css({'margin-top':counter+'px'})
    }
})

$('body').keypress(function(e){
    console.log(e.keyCode)
    
    if(e.which === 83){
        counter1+=9
        $player1.css({'margin-top':counter1+'px'})
    }
    if(e.which === 90){ 
         counter1-=9
        $player1.css({'margin-top':counter1+'px'})
    }
})

var $ball=$('#ball')



var ball ={
    x:285,
    y:135,
    speed:5
}

var counterX=0

var counterY=0

setInterval(function(){
    // if (ball.left===parseInt('255px')){
    //     ball.overflow-x++
    // }
    // if(ball.left===parseInt('570px')){
    //     ball.overflow-x--
    // }
    // if(ball.right===parseInt('0')){
    //     ball.overflow-y++
    // }
    // if(ball.right===parseInt('300')){
    //     ball.overflow-y++
    // }
    counterY+=ball.speed
    counterX+=ball.speed
    console.log(ball.left)
    $ball.css("left",ball.x+counterX+'px')
    $ball.css("top",ball.y+counterY+'px')
    console.log(ball.x)
    if (ball.x>=315) {
        ball.x = 285 ;
      }
    //   if (ball.y < 150) {
    //     ball.y = -ball.y;
    //   }

    // $( "#ball" ).position({
    //     my: "right center",
    //     at: "right bottom",
    //     of:$('#table'),
    //     collision: "fit"
    //   });

},100)


function getPositions($table) {
    var $table = $(table);
    var pos = $table.position();
    var width = $table.width();
    var height = $table.height();
    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
  }

  function comparePositions(p1, p2) {
    var x1 = p1[0] < p2[0] ? p1 : p2;
    var x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
  }
  function checkCollisions(){
    var box = $(".bomb")[0];
    var pos = getPositions(box);
  
    var pos2 = getPositions(this);
    var horizontalMatch = comparePositions(pos[0], pos2[0]);
    var verticalMatch = comparePositions(pos[1], pos2[1]);            
    var match = horizontalMatch && verticalMatch;
    if (match) {  }
  }
  











// $('body').keypress(function(e){
//     console.log(e.keyCode)
//     if(e.which===14){
        
//     }
// })


// var counterTop=0
// var counterLeft=0
// var counterRight=0



// $('#ball').keypress(function(){
//     if(e.which === !!!!!!!!!!!!!!!!!!!!!!!!!!!){ 
//         counterTop+=5
//     $ball.css({'margin-top':counterTop+'px'})
//     }
//     if(e.which === !!!!!!!!!!!!!!!!!!!!!!!!!!!){ 
//         counterLeft+=5
//     $ball.css({'margin-left':counterLeft+'px'})
//     }
//     if(e.which === !!!!!!!!!!!!!!!!!!!!!!!!!!!){ 
//         counterRight+=5
    // $ball.css({'margin-right':counterRight+'px'})
//     }
// })


