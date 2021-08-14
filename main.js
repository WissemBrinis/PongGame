var  $table=$('#table')
var  $player1=$('#player')
var  $computer=$('#computer')

// var computer = {
//     direction: 1,
//     SPEED: 5,
// }



// console.log($table)
// player movement
// $table.mousemove(function(e){
//     this will set the player to not move outside of the table
//    var  top= Math.min($table.height()-$ball.height(),e.pageY - $table.offset().top);
//     this will contoll player 
//     $ball.css({
//         top: `${top}px`
//     })
// })


//  move Compuer board
// function update(){
//   computer.top+= computer.direction * computer.SPEED

//   $computer.css({
//       top : `${computer.top}px`
//   })
// }

// setInterval(update,1000)

// how to 

// // player2 movement 
// $player2.mousemove(function(event){
//     console.log(event)
//     var  top= event.pageY;
//     $player2.css({
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

var ball=$('#ball')



var ball ={
    x:50,
    y:50,
    speed:5,
}


$('body').setInterval(function(){
    if (ball.left===parseInt('255px')){
        ball.x++
    }
    if(ball.left===parseInt('570px')){
        ball.x--
    }
    if(ball.right===parseInt('0')){
        ball.y++
    }
    if(ball.right===parseInt('300')){
        ball.y--
    }

},100)
});


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




