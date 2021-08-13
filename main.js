var  $table=$('#table')
var  $player1=$('#player')
var  $computer=$('#computer')
var  $ball=$('#ball')





var comPuter = {
    SPEED:3,
    direction:1,
    top:0
}

console.log($table)
// player movement
$table.mousemove(function(e){
   var  top= Math.min($table.height()-$player1.height(),e.pageY - $table.offset().top);

    $player1.css({
        top: `${top}px`
    })
})



function update(){
        if($comPuter.top>$table.height() - $comPuter.height()){
            $comPuter.direction= -1
        }
    
        if($comPuter.top<0){
            $comPuter.direction=1
        }
      comPuter.top+=comPuter.direction * $comPuter.SPEED
      comPuter.css({
          top:`${comPuter.top}px`
        })
    }
    
    setInterval(update,1000)


// // player2 movement 
// $player2.mousemove(function(event){
//     console.log(event)
//     var  top= event.pageY;
//     $player2.css({
//         top: `${top}px`
//     })
// },83)

// ball movement
// counter=0
// document.addEventListener('keypress', logKey);
// var counter=0
// var counter1=0
// $('body').keypress(function(e){
//     console.log(e.keyCode)
    
//     if(e.which === 51){
//         counter+=5
//         $player2.css({'margin-top':counter+'px'})
//     }
//     if(e.which === 57){ 
//          counter-=5
//         $player2.css({'margin-top':counter+'px'})
//     }
// })

// $('body').keypress(function(e){
//     console.log(e.keyCode)
    
//     if(e.which === 83){
//         counter1+=5
//         $player1.css({'margin-top':counter1+'px'})
//     }
//     if(e.which === 90){ 
//          counter1-=5
//         $player1.css({'margin-top':counter1+'px'})
//     }
// })


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


