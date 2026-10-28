(function(){
  var BP=900;
  var btn=document.getElementById('hamburger'),menu=document.getElementById('mob-drawer');
  if(btn&&menu){
    btn.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.textContent=open?'CLOSE':'MENU';
    });
  }
  if(window.matchMedia){
    var mq=window.matchMedia('(min-width:'+(BP+1)+'px)');
    var reset=function(e){if(e.matches&&menu){menu.classList.remove('open');if(btn){btn.setAttribute('aria-expanded','false');btn.textContent='MENU';}}};
    if(mq.addEventListener){mq.addEventListener('change',reset);}else if(mq.addListener){mq.addListener(reset);}
  }
  var qs=document.querySelectorAll('.faqq');
  for(var i=0;i<qs.length;i++){
    qs[i].addEventListener('click',function(){
      var item=this.parentNode,ans=item.querySelector('.faqa');
      var open=item.classList.toggle('open');
      this.setAttribute('aria-expanded',open?'true':'false');
      ans.style.maxHeight=open?ans.scrollHeight+'px':'0px';
    });
  }
})();
