var psc=0,csc=0,count=0;
function game(){

		
		var player,computer,no;
		var comp=['rock','paper','scissor'];
		//query Selector.
		var intro=document.querySelector('.intro');
		var match=document.querySelector('.match');
		var playb=document.querySelector('#play');
		var stone=document.querySelector('#stone');
		var paper=document.querySelector('#paper');
		var scissor=document.querySelector('#scissor');
		var win=document.querySelector('.winner');
		var aplay=document.querySelector('#aplay');
		var acomp=document.querySelector('#acomp');

		playb.addEventListener('click',function(){
		   intro.classList.add('fadeout');
		   match.classList.remove('fadeout');
		   match.classList.add('delay');

		});
		aplay.classList.add('rotate');


		aplay.addEventListener('animationend',function(){
			this.style.animation='';
			
		});
		acomp.addEventListener('animationend',function(){
					this.style.animation='';

				});
		stone.addEventListener('click',function(){
			aplay.classList.add('rotate');
			acomp.classList.remove('rotate');
			no=Math.floor(Math.random()*3);
			computer=comp[no];
			if(computer==='paper'){
				win.textContent="Computer Wins!";
				csc++;
			}
			else if (computer==='rock') {
				win.textContent="Its a Tie.";
			}
			else{
				acomp.classList.add('rotate');
				win.textContent="Player Wins!";
				psc++;
			}
			aplay.style.animation="playershake 1s ease";
			acomp.style.animation="compshake 1s ease";
			setTimeout(function(){

				aplay.src="media/img/rock.png";
			acomp.src="media/img/"+computer+".png";
			updatescore();	

			},1200);
				
		});

		paper.addEventListener('click',function(){
			aplay.classList.add('rotate');
			acomp.classList.remove('rotate');
			no=Math.floor(Math.random()*3);
			computer=comp[no];
			if(computer==='paper'){
				win.textContent="Its a Tie!";
			}
			else if (computer==='rock') {
				win.textContent="Player Wins!";
				csc++;
			}
			else{
				acomp.classList.add('rotate');
				win.textContent="Computer Wins!";
				csc++;
			}
			aplay.style.animation="playershake 1s ease";
			acomp.style.animation="compshake 1s ease";
			setTimeout(function(){

				aplay.src="media/img/paper.png";
			acomp.src="media/img/"+computer+".png";
			updatescore();
			
			},1200);
			
		});
		
		scissor.addEventListener('click',function(){
			aplay.classList.remove('rotate');
			acomp.classList.remove('rotate');

			no=Math.floor(Math.random()*3);
			
			computer=comp[no];
			

			


			if(computer==='paper'){
				win.textContent="Player Wins!";
				psc++;
			}
			else if (computer==='scissor') {
				acomp.classList.add('rotate');
				win.textContent="Its a Tie.";
			}
			else{
				win.textContent="Computer Wins!";
				csc++;
				
			}
			aplay.style.animation="playershake 1s ease";
			acomp.style.animation="compshake 1s ease";

			setTimeout(function(){

				aplay.src="media/img/scissor.png";
			acomp.src="media/img/"+computer+".png";
			
			updatescore();
			
			},1200);
			
		});
		
	document.querySelector('#end').addEventListener('click',function(){
		match.classList.add('fadeout');
		intro.classList.remove('fadeout');
		intro.classList.remove('fadein');
		if(psc>csc){
			document.querySelector('#win').textContent="PLayer Wins";	
		}
		else if(psc==csc)
		{
			document.querySelector('#win').textContent="Its a Tie";
		}
		else{
			document.querySelector('#win').textContent="Computer Wins";
		}
		psc=0;csc=0;
			updatescore();
			document.querySelector('#play').textContent="Play Again??";
			aplay.src="media/img/rock.png";
			acomp.src="media/img/rock.png";
			win.textContent="Choose a Option";
			match.classList.remove('delay');
			intro.classList.add('delay1');
	});		


};

game();

function updatescore(){
	document.querySelector('#pscore').textContent=psc;
	document.querySelector('#cscore').textContent=csc;
};