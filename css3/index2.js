/*
$('.indicatorContainer_bg').radialIndicator({
    radius: 70,
    barBgColor: '#475e7e',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true
});
$('.indicatorContainermax_bg').radialIndicator({
    radius: 85,
    barBgColor: '#496684',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true
});
$('#indicatorContainer1').radialIndicator({
    radius: 70,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#475e7e', endColor:'#1e7bf4' }
});
$('#indicatorContainer2').radialIndicator({
    radius: 85,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#4697b2', endColor:'#54f3e1' }
});
$('#indicatorContainer3').radialIndicator({
    radius: 70,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#5e6979', endColor:'#fa4a09' }
});
$('#indicatorContainer4').radialIndicator({
    radius: 85,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#918a50', endColor:'#e6aa10' }
});
$('#indicatorContainer5').radialIndicator({
    radius: 70,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#5f6292', endColor:'#ee45ea' }
});
$('#indicatorContainer6').radialIndicator({
    radius: 85,
    barColor: '#3aeefd',
    barBgColor: 'rgba(0,0,0,0)',
    barWidth: 10,
    initValue: null,
    roundCorner: true,
    percentage: true,
    filled:{ startColor:'#5e4b99', endColor:'#3c0bf3' }
});


var tmax_options = {
  delay: 0,
  paused: false,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: function() {
    console.log('animation scope is complete');
  },
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: function() {
    console.log('on start scope called');
  },
  onUpdate: function() {
    console.log('on update called');
  },
  onUpdateScope: function() {
    console.log('on update scope called');
  },
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: function() {
    console.log('on repeat scope called');
  },
  onReverseComplete: function() {
    console.log('on reverse complete');
  },
  onReverseCompleteScope: function() {
    console.log('on reverse complete scope called');
  },
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};


var tl = new TimelineMax(tmax_options),
    circle_top = $('#circle-top'),
    circle_bottom = $('#circle-bottom'),
    im_t = $('#im .t'),
    im_type1 = $("#im .abc1"),
    im_type2 = $("#im .abc2"),
    im_type3 = $("#im .abc3"),
    imbor1 = $("#imbor1"),
    imbor2 = $("#imbor2"),
    imbor3 = $("#imbor3"),
    imtitle = $(".imtitle"),
    im = $('#im');

//tl.to(circle_top, 1, { left: 300 })
//  .to(circle_bottom, 2, { top: 300 });

//======================
//tl.to(im, 3, {left:300,top:300});
tl.to(im, 0, {rotationX:-90, transformPerspective:600, transformOrigin:"center center" } );
tl.staggerTo(im, 2, { alpha:1, rotationX:0, ease:Elastic.easeOut}, 0.2 );
tl.to(im_t,1, { alpha:1}, 0.5);
tl.to(im_type1,0.5, { width:220}, 1);
  //.to(im_type2,0.5, { width:220}, 1.5)
  //.to(im_type3,0.5, { width:220}, 2);


//=============111======================
tl.to($(".imtitle:eq(0) span"), 0.5, { width:72});
tl.to(imbor1,0.5, { alpha:1});
tl.addCallback( function(){   
  $(".imadds_bor:eq(0) div").addClass("imadds");
  $('.rad-prg').eq(0).data('radialIndicator').animate(95);
  setTimeout(function(){
      $('.rad-prg').eq(1).data('radialIndicator').animate(95);
  },300);
  countUp(998,0);
});
tl.to($(".list-bor:eq(0) li:nth-child(1)") , 0.3, { width:90})
  .to($(".list-bor:eq(0) li:nth-child(2)") , 0.3, { width:90})
  .to($(".list-bor:eq(0) li:nth-child(3)") , 0.3, { width:90});
                              

//=============222======================
tl.to($(".imtitle:eq(1) span"), 0.5, { width:72});
tl.to(imbor2,0.5, { alpha:1});
tl.addCallback( function(){   
  $(".imadds_bor:eq(1) div").addClass("imadds");
  $('.rad-prg').eq(2).data('radialIndicator').animate(95);
  setTimeout(function(){
      $('.rad-prg').eq(3).data('radialIndicator').animate(95);
  },300);
  countUp(1230,1);
}); 
tl.to($(".list-bor:eq(1) li:nth-child(1)") , 0.3, { width:90})
  .to($(".list-bor:eq(1) li:nth-child(2)") , 0.3, { width:90})
  .to($(".list-bor:eq(1) li:nth-child(3)") , 0.3, { width:90});


//============333=======================
tl.to($(".imtitle:eq(2) span"), 0.5, { width:72});
tl.to(imbor3,0.5, { alpha:1});
tl.addCallback( function(){   
  $(".imadds_bor:eq(2) div").addClass("imadds");
  $('.rad-prg').eq(4).data('radialIndicator').animate(95);
  setTimeout(function(){
      $('.rad-prg').eq(5).data('radialIndicator').animate(95);
  },300);  
  countUp(1920,2);
}); 
tl.to($(".list-bor:eq(2) li:nth-child(1)") , 0.3, { width:90})
  .to($(".list-bor:eq(2) li:nth-child(2)") , 0.3, { width:90})
  .to($(".list-bor:eq(2) li:nth-child(3)") , 0.3, { width:90});

*/


var tmax_options = {
  delay: 0,
  paused: false,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: function() {
    console.log('animation scope is complete');
  },
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: function() {
    console.log('on start scope called');
  },
  onUpdate: function() {
    console.log('on update called');
  },
  onUpdateScope: function() {
    console.log('on update scope called');
  },
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: function() {
    console.log('on repeat scope called');
  },
  onReverseComplete: function() {
    console.log('on reverse complete');
  },
  onReverseCompleteScope: function() {
    console.log('on reverse complete scope called');
  },
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};


var tl = new TimelineMax(tmax_options),
    im_time_x = $('.time-x');
    im_time_y = $('.time-y');
    im_t = $('#im .t');


tl.to(im_t,1, { alpha:1}, 0.5);
tl.to(im_time_x,0.5, { width:400}, 1);
tl.to(im_time_y,0.5, { height:500}, 1);


console.log(Math.floor(Math.random()*300), Math.floor(Math.random()*1000) - 700);

//=111=
$(".ball:eq(0)").circulate({
    speed: 80,
    height: 50,
    width: 0,
    sizeAdjustment: 20, 
    loop: true,     
    zIndexValues: [66, 50, 50, 99]
}).circulate("Stop").circulate({
    speed: 100,
    height: 50,
    width: 0,
    sizeAdjustment: 100, 
    loop: true,     
    zIndexValues: [66, 50, 50, 99]
});
setTimeout(function(){
    $(".ball:eq(0)").circulate("Stop").circulate({
        speed: 800,
        height: 50,
        width: -50,
        sizeAdjustment: 100, 
        loop: false,     
        zIndexValues: [150, 150, 150, 150]
    });
},980);

//=222=
$(".ball:eq(1)").circulate({
    speed: 150,
    height: 0,
    width: 263,
    sizeAdjustment: 100, 
    loop: false,     
    zIndexValues: [1, 50, 50, 1]
}).circulate("Stop").circulate({
    speed: 700,
    height:0,
    width: -123,
    sizeAdjustment: 120, 
    loop: false,     
    zIndexValues: [44, 50, 50, 121]
});


//=333=
$(".ball:eq(3)").circulate({
    speed: 150,
    height: 0,
    width: -200,
    sizeAdjustment: 0, 
    loop: false,     
    zIndexValues: [2, 2, 2, 2]
}).circulate("Stop").circulate({
    speed: 300,
    height:-60,
    width: 60,
    sizeAdjustment: 110, 
    loop: false,     
    zIndexValues: [44, 50, 50, 121]
});
$(".ball:eq(3)").circulate("Stop").circulate({
    speed: 900,
    height: 60,
    width:  95,
    sizeAdjustment: 100, 
    loop: false,     
    zIndexValues: [44, 50, 50, 121]
});



//=444=
setTimeout(function(){
  $(".ball:eq(4)").circulate({
      speed: 50,
      height: -135,
      width: 0,
      sizeAdjustment: 90, 
      loop: true,     
      zIndexValues: [0, 0, 0, 0]
  }).circulate("Stop").circulate({
      speed: 180,
      height: -30,
      width:  0,
      sizeAdjustment: 105, 
      loop: false,     
      zIndexValues: [44, 50, 50, 121]
  }).circulate("Stop").circulate({
      speed: 1350,
      height: -40,
      width: -40,
      sizeAdjustment: 100, 
      loop: false,     
      zIndexValues: [4, 50, 50, 121]
  });

},1000);


setTimeout(function(){

  $(".ball:eq(2)").circulate({
      speed: 80,
      height: 0,
      width: -130,
      sizeAdjustment: 90, 
      loop: true,     
      zIndexValues: [0, 0, 0, 0],
      isanimate:true
  }).circulate("Stop").circulate({
      speed: 1280,
      height: 0,
      width: -90,
      sizeAdjustment: 80, 
      loop: false,     
      zIndexValues: [44, 50, 50, 121]
  });

},1500);