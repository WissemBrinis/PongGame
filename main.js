var  $table=$('#table')
var  $player1=$('#player')
var  $player2=$('#player2')

// console.log($table)
// // player movement
// $table.mousemove(function(evt){
//   //  var  top= Math.min($table.height()-$player1.height),evt.pageY-$table.offset().top);
//     // $player1.css({
//     //     top: `${top}px`
//     // })
// })
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
var counter=0
var counter1=0
$('body').keypress(function(e){
    console.log(e.keyCode)
    
    if(e.which === 51){
        counter+=5
        $player2.css({'margin-top':counter+'px'})
    }
    if(e.which === 57){ 
         counter-=5
        $player2.css({'margin-top':counter+'px'})
    }
})

$('body').keypress(function(e){
    console.log(e.keyCode)
    
    if(e.which === 83){
        counter1+=5
        $player1.css({'margin-top':counter1+'px'})
    }
    if(e.which === 90){ 
         counter1-=5
        $player1.css({'margin-top':counter1+'px'})
    }
})


// $('body').keypress(function(e){
//     console.log(e.keyCode)
//     if(e.which===14){
        
//     }
// })





  




