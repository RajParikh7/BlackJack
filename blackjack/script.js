//Team members:Raj Parikh,Biswaksen Patnaik,Sahar Zavaree
	function player(name){//player details


		this.name=name;//name of player
		this.count=0;//initial count of cards on table
		this.score=0;//initial total of card values
		
	};
	function dealer(name){
		this.name=name;//name of dealer
		this.score1=0;//initial count of cards on table for dealer
		this.count1=0;//initial total of card values for dealer
	}
	var noeffect=0;//for blocking the transistion effect of coins
	var modal = document.getElementById('myModal');// Get the button that opens the modal
	var btn = document.getElementById("myBtn");// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];//Get close button of Modal
	var flipcard1="";// variaable containing dealer's second card to be hidden 
	var cards_Deck=[];//initializing card deck
	for(var naming=2;naming<11;naming++){
	cards_Deck[naming-1]='"'+naming+'S.jpg"';//initializing card deck for number spade cards
	cards_Deck[13+naming-1]='"'+naming+'C.jpg"';//initializing card deck for number club cards
	cards_Deck[26+naming-1]='"'+naming+'D.jpg"';//initializing card deck for number diamond cards
	cards_Deck[39+naming-1]='"'+naming+'H.jpg"';//initializing card deck for number hearts cards
	}
	naming=1;
	cards_Deck[naming-1]='AS.jpg';//initializing card deck for ace spade cards
	cards_Deck[13+naming-1]='AC.jpg';//initializing card deck for ace club cards
	cards_Deck[26+naming-1]='AD.jpg';//initializing card deck for ace diamond cards
	cards_Deck[39+naming-1]='AH.jpg';//initializing card deck for ace hearts cards
	naming=11;
	cards_Deck[naming-1]='JS.jpg';//initializing card deck for jack cards
	cards_Deck[13+naming-1]='JC.jpg';
	cards_Deck[26+naming-1]='JD.jpg';
	cards_Deck[39+naming-1]='JH.jpg';
	naming=12;
	cards_Deck[naming-1]='QS.jpg';//initializing card deck for queen cards
	cards_Deck[13+naming-1]='QC.jpg';
	cards_Deck[26+naming-1]='QD.jpg';
	cards_Deck[39+naming-1]='QH.jpg';
	naming=13;
	cards_Deck[naming-1]='KS.jpg';//initializing card deck for king cards
	cards_Deck[13+naming-1]='KC.jpg';
	cards_Deck[26+naming-1]='KD.jpg';
	cards_Deck[39+naming-1]='KH.jpg';
	flipcard="Red_back.jpg";//random flipcard
    card11=document.getElementById("cardsplace11");//getting placement location of all cards for player
		card2=document.getElementById("cardsplace2");
		card3=document.getElementById("cardsplace3");
		card4=document.getElementById("cardsplace4");
		card5=document.getElementById("cardsplace5");
		card6=document.getElementById("cardsplace6");
		card7=document.getElementById("cardsplace7");
		card8=document.getElementById("cardsplace8");
		card9=document.getElementById("cardsplace9");
		card10=document.getElementById("cardsplace10");
	   card1=document.getElementById("cardsplace");
		card2=document.getElementById("cardsplace1");
		dealercard1=document.getElementById("dealercardsplace");//getting placement location of all cards for delaer
		dealercard2=document.getElementById("dealercardsplace1");
        dealercard12=document.getElementById("dealercardsplace11");
		dealercard3=document.getElementById("dealercardsplace2");
		dealercard4=document.getElementById("dealercardsplace3");
		dealercard5=document.getElementById("dealercardsplace4");
		dealercard6=document.getElementById("dealercardsplace5");
		dealercard7=document.getElementById("dealercardsplace6");
		dealercard8=document.getElementById("dealercardsplace7");
		dealercard9=document.getElementById("dealercardsplace8");
		dealercard10=document.getElementById("dealercardsplace9");
		dealercard11=document.getElementById("dealercardsplace10");
	
	
	var p1= new player("Raj");//instancing player object
	//document.write(p1.getBalance());
	var a=[0,1,2];
	var d1=new dealer("Richards");//instancing delaer object
	
	var k=0;
	var temp=0;
	function shuffle(){//cards shuffle function
	for(var i=0;i<52;i++){
		a[i]=i;
	}
	for(var j=0;j<=26;j++){
		k=Math.floor((Math.random()*51));
		for(var z=0;z<52;z++){
		
				if(k==a[z]){
					temp=a[j];
					a[j]=a[z];
					a[z]=temp;
				}
				
		}

	}
	}
	function deal(){//function which deals initial cards
		var value1=document.getElementById("input1").value;
		var value2=document.getElementById("input2").value;
		var txt="Sorry,You lost.Do you want to play again. Press ok to play again"
		if(value1==0 && value2==0){
			if(confirm(txt)==true){
				//shuffle();
				document.getElementById("input1").value=2000;
				document.getElementById("input2").value=0;
			}
			else{
				window.close();
			}

		}
		else if(value2==0){
			alert("You need to put some chips in pot");
		}
		else{
		shuffle();//shuffled again at the end of game.
		//add in html
		card1.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";//placing cards at their fixed position
		/*for(var i=0;i<40;i++){
		$(card1).animate({top: "+=1.24%"}, 3, "swing");
		$(card1).animate({left: "-=0.332%"}, 3, "swing");
		}*///implement similar for all and get their coordinates mapped
		p1.score=p1.score+scoring(a[0]);
		card2.innerHTML="<img src="+cards_Deck[a[1]]+" style='height:100px;width:100px'>";
		//here
		dealercard1.innerHTML="<img src="+cards_Deck[a[2]]+" style='height:100px;width:100px'>";
		
		dealercard2.innerHTML="<img src="+flipcard+" style='height:100px;width:100px'>";
		
		flipcard1=a[3];//storing the delaer'2 second card
		p1.score=p1.score+scoring(a[1]);//caliing scoring function to calculate score after each card
		d1.score1=d1.score1+scoring1(a[2]);
		d1.score1=d1.score1+scoring1(a[3]);
		a.splice(0,1);	//removing the card placed on the deck
		a.splice(0,1);
		a.splice(0,1);
		a.splice(0,1);
		document.getElementById("button1").disabled=true;//disabling coins
		document.getElementById("button6").disabled=true;
		document.getElementById("button7").disabled=true;
		document.getElementById("button8").disabled=true;
		document.getElementById("button9").disabled=true;
		document.getElementById("button10").disabled=true;
		p1.count=2;//updating card count
		d1.count1=2;
		document.getElementById("button2").disabled=false;//enabling hit,stand,double and split
		document.getElementById("button3").disabled=false;
		document.getElementById("button4").disabled=false;
		document.getElementById("button5").disabled=false;
		}
		
	}
	function hit(){
		
		if (p1.count==2){//taking into consideration how many cards are on the deck and then placing the next card accordingly(applies for entire if-else)
		card3.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);//update player's score
		a.splice(0,1);
		p1.count++;//increase count of card
		}
		else if (p1.count==3){//same logic as for count==2
		card4.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==4){//same logic as for count==2
		card5.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==5){//same logic as for count==2
		card6.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==6){//same logic as for count==2
		card7.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==7){//same logic as for count==2
		card7.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==8){//same logic as for count==2
		card9.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==9){//same logic as for count==2
		card10.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==10){//same logic as for count==2
		card11.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		}
		else if (p1.count==11){//same logic as for count==2
		card12.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		p1.score=p1.score+scoring(a[0]);
		a.splice(0,1);
		p1.count++;
		
		}
		setTimeout(function(){ //The score was calculated before the image was placed and the alert message was displayed. In order to avoid that setTimeout is used 
		if(p1.score>21){
			alert("You busted!!!Place higher bet and increase your winning stake in next round!!!");
			document.getElementById("button1").disabled=false;
			p1.count=0;//setting everything to zero,to use same counters again
			p1.score=0;
			d1.score1=0;
			d1.count1=0;
			card11.innerHTML="";//removing all the cards placed
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			document.getElementById("cardsplace").innerHTML="";
			document.getElementById("cardsplace1").innerHTML="";
			document.getElementById("dealercardsplace").innerHTML="";
			document.getElementById("dealercardsplace1").innerHTML="";
			document.getElementById("button1").disabled=false;//enabling all the coin buttons and deal button
			document.getElementById("button6").disabled=false;
			document.getElementById("button7").disabled=false;
			document.getElementById("button8").disabled=false;
			document.getElementById("button9").disabled=false;
			document.getElementById("button10").disabled=false;
			document.getElementById("input2").value=0;
		}
		},2000);
	}
	function reduce(n){//function that calculates the value put in pot and value dedcuted from user's bank(based on coin pressed)
		value1=document.getElementById('input1').value;
		if((value1-n)<0){//trying to access value greater than that available in bank
			alert("Sorry we dont provide loan");
			noeffect=1;
			}
		else{
		document.getElementById("input1").value=value1-n;//decrease bank value by n
		value2=document.getElementById('input2').value;
		value2=parseInt(value2);
		n=parseInt(n);
		document.getElementById("input2").value=value2+n;//increase pot value by n
		}
	}
	$('#button1').on('click',function(){//calls deal
		deal();
		noeffect=0;
	});
	$('#button2').on('click',function(){//calls hit
		hit();
	});
	$('#button6').on('click',function(){
		reduce(100);
		if(noeffect==0){
		for(i=1;i<100;i++){//coins transistion effect
		document.getElementById("button1").disabled=true;	
		$('#buttoncoin100').animate({top: "-=3.5"}, 0.1, "swing");
		
		$('#buttoncoin100').fadeTo(0.1,1-0.01*i)
		}
		$('#buttoncoin100').animate({top: "+=350"}, 0.1, "swing");
		document.getElementById("button1").disabled=false;
		}
	});
	$('#button7').on('click',function(){
		reduce(50);
		if(noeffect==0){
			document.getElementById("button1").disabled=true;
		for(i=1;i<100;i++){
		$('#buttoncoin50').animate({top: "-=3.5"}, 0.1, "swing");
		
		$('#buttoncoin50').fadeTo(0.1,1-0.01*i)
		}
		$('#buttoncoin50').animate({top: "+=350"}, 0.1, "swing");
		document.getElementById("button1").disabled=false;
		}
	});
	$('#button8').on('click',function(){
		reduce(25);
		if(noeffect==0){
			document.getElementById("button1").disabled=true;
		for(i=1;i<100;i++){
		$('#buttoncoin25').animate({top: "-=3.5"}, 0.1, "swing");
		
		$('#buttoncoin25').fadeTo(0.1,1-0.01*i)
		}
		$('#buttoncoin25').animate({top: "+=350"}, 0.1, "swing");
		document.getElementById("button1").disabled=false;
		}
	});
	$('#button9').on('click',function(){
		reduce(5);
		if(noeffect==0){
			document.getElementById("button1").disabled=true;
		for(i=1;i<100;i++){
		$('#buttoncoin5').animate({top: "-=3.5"}, 0.1, "swing");
		
		$('#buttoncoin5').fadeTo(0.1,1-0.01*i)
		}
		$('#buttoncoin5').animate({top: "+=350"}, 0.1, "swing");
		document.getElementById("button1").disabled=false;
		}
	});
	$('#button10').on('click',function(){
		reduce(1);
		if(noeffect==0){
			document.getElementById("button1").disabled=true;
		for(i=1;i<100;i++){
		$('#buttoncoin1').animate({top: "-=3.5"}, 0.1, "swing");
		
		$('#buttoncoin1').fadeTo(0.1,1-0.01*i)
		}
		$('#buttoncoin1').animate({top: "+=350"}, 0.1, "swing");
		document.getElementById("button1").disabled=false;
		}
		
	});
	$('#button3').on('click',function(){//calls stand and replaces flip card
		if(d1.count1==2){
		document.getElementById("dealercardsplace1").innerHTML="<img src="+cards_Deck[flipcard1]+" style='height:100px;width:100px'>";
		}
		stand();
		
	});
	$('#button4').on('click',function(){//double value in pot,hits one more card and then stands
		
		if(p1.count==2){
		reduce(document.getElementById("input2").value);
		hit();
		if (p1.score<=21){
		stand();}
	}
	else{
		alert("You cannot double now");
	}
	}
	);
	function stand(){
		document.getElementById("button1").disabled=true;//makes coins disabled
		document.getElementById("button2").disabled=true;
		document.getElementById("button3").disabled=true;
		document.getElementById("button4").disabled=true;
		document.getElementById("button5").disabled=true;
		if(d1.score1<17){
		
		setTimeout(function(){//for placing cards at appropriate position
		if (d1.count1==2){
		dealercard3.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);//increase dealer score for current card
		a.splice(0,1);//remove one card
		d1.count1++;//increasecount of cards
		stand();
		}
		else if (d1.count1==3){//same logic as for count==2
		dealercard4.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==4){//same logic as for count==2
		dealercard5.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==5){//same logic as for count==2
		dealercard6.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==6){//same logic as for count==2
		dealercard7.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==7){//same logic as for count==2
		dealercard8.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==8){//same logic as for count==2
		dealercard9.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==9){//same logic as for count==2
		dealercard10.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==10){//same logic as for count==2
		dealercard11.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		else if (d1.count1==11){//same logic as for count==2
		dealercard12.innerHTML="<img src="+cards_Deck[a[0]]+" style='height:100px;width:100px'>";
		d1.score1=d1.score1+scoring1(a[0]);
		a.splice(0,1);
		d1.count1++;
		stand();
		}
		},1000);
		}
		 //The score was calculated before the image was placed and the alert message was displayed. In order to avoid that setTimeout is used 
		else if(d1.score1>21){
			setTimeout(function(){	
			alert("Dealer busted! You won !!!Place higher bet and increase your winning stake in next round!!!");
			document.getElementById("button1").disabled=false;
			p1.count=0;//setting everything to 0 for new game 
			p1.score=0;
			d1.score1=0;
			d1.count1=0;
			card11.innerHTML="";// removing all cards
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			document.getElementById("cardsplace").innerHTML="";
			document.getElementById("cardsplace1").innerHTML="";
			document.getElementById("button1").disabled=false;//enabling all buttons
			document.getElementById("button6").disabled=false;
			document.getElementById("button7").disabled=false;
			document.getElementById("button8").disabled=false;
			document.getElementById("button9").disabled=false;
			document.getElementById("button10").disabled=false;
			updated_value=document.getElementById("input2").value;
			updated_value=parseInt(updated_value);
			updated_value1=document.getElementById("input1").value;
			updated_value1=parseInt(updated_value1);
			document.getElementById("input1").value=updated_value1+2*updated_value;//updating score of bank
			document.getElementById("input2").value=0;//updating pot value to 0 after game ends
			dealercard11.innerHTML="";
			dealercard10.innerHTML="";
			dealercard9.innerHTML="";
			dealercard8.innerHTML="";
			dealercard7.innerHTML="";
			dealercard6.innerHTML="";
			dealercard5.innerHTML="";
			dealercard4.innerHTML="";
			dealercard3.innerHTML="";
			dealercard2.innerHTML="";
			document.getElementById("dealercardsplace").innerHTML="";
			document.getElementById("dealercardsplace1").innerHTML="";
				},1000);
			}
		else{
			if (d1.score1>p1.score){
				setTimeout(function(){	
			alert("You lost!!!Place higher bet and increase your winning stake in next round!!!");
			document.getElementById("button1").disabled=false;
			p1.count=0;//setting value to 0
			p1.score=0;
			d1.score1=0;
			d1.count1=0;
			card11.innerHTML="";//removing cards
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			card11.innerHTML="";
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			document.getElementById("cardsplace").innerHTML="";
			document.getElementById("cardsplace1").innerHTML="";
			document.getElementById("dealercardsplace").innerHTML="";
			document.getElementById("dealercardsplace1").innerHTML="";
			document.getElementById("button1").disabled=false;//enaling all buttons
			document.getElementById("button6").disabled=false;
			document.getElementById("button7").disabled=false;
			document.getElementById("button8").disabled=false;
			document.getElementById("button9").disabled=false;
			document.getElementById("button10").disabled=false;
			document.getElementById("input2").value=0;
			dealercard11.innerHTML="";
			dealercard10.innerHTML="";
			dealercard9.innerHTML="";
			dealercard8.innerHTML="";
			dealercard7.innerHTML="";
			dealercard6.innerHTML="";
			dealercard5.innerHTML="";
			dealercard4.innerHTML="";
			dealercard3.innerHTML="";
			dealercard2.innerHTML="";
			
				},1000);
			}
			else if(d1.score1==p1.score){
				setTimeout(function(){	
			alert("Its a tie");
			document.getElementById("button1").disabled=false;
			p1.count=0;//setting all count and score to 0
			p1.score=0;
			d1.score1=0;
			d1.count1=0;
			card11.innerHTML="";//removing cards
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			document.getElementById("cardsplace").innerHTML="";
			document.getElementById("cardsplace1").innerHTML="";
			document.getElementById("dealercardsplace").innerHTML="";
			document.getElementById("dealercardsplace1").innerHTML="";
			document.getElementById("button1").disabled=false;//enabling buttons
			document.getElementById("button6").disabled=false;
			document.getElementById("button7").disabled=false;
			document.getElementById("button8").disabled=false;
			document.getElementById("button9").disabled=false;
			document.getElementById("button10").disabled=false;
			updated_value=document.getElementById("input2").value;
			updated_value=parseInt(updated_value);
			updated_value1=parseInt(document.getElementById("input1").value);
			document.getElementById("input1").value=updated_value1+updated_value;//updating bank value
			document.getElementById("input2").value=0;
			dealercard11.innerHTML="";
			dealercard10.innerHTML="";
			dealercard9.innerHTML="";
			dealercard8.innerHTML="";
			dealercard7.innerHTML="";
			dealercard6.innerHTML="";
			dealercard5.innerHTML="";
			dealercard4.innerHTML="";
			dealercard3.innerHTML="";
			dealercard2.innerHTML="";
			
				},100);
			}
		else{
			setTimeout(function(){	
			alert("You won!!!Place higher bet and increase your winning stake in next round!!!");
			document.getElementById("button1").disabled=false;
			p1.count=0;//setting all count and score to 0
			p1.score=0;
			d1.score1=0;
			d1.count1=0;
			card11.innerHTML="";//removing cards
			card10.innerHTML="";
			card9.innerHTML="";
			card8.innerHTML="";
			card7.innerHTML="";
			card6.innerHTML="";
			card5.innerHTML="";
			card4.innerHTML="";
			card3.innerHTML="";
			card2.innerHTML="";
			document.getElementById("cardsplace").innerHTML="";
			document.getElementById("cardsplace1").innerHTML="";
			document.getElementById("button1").disabled=false;//enabling buttons
			document.getElementById("button6").disabled=false;
			document.getElementById("button7").disabled=false;
			document.getElementById("button8").disabled=false;
			document.getElementById("button9").disabled=false;
			document.getElementById("button10").disabled=false;
			updated_value=document.getElementById("input2").value;
			updated_value=parseInt(updated_value);
			updated_value1=document.getElementById("input1").value;
			updated_value1=parseInt(updated_value1);
			document.getElementById("input1").value=updated_value1+2*updated_value;//updating bank value
			document.getElementById("input2").value=0;
			dealercard11.innerHTML="";
			dealercard10.innerHTML="";
			dealercard9.innerHTML="";
			dealercard8.innerHTML="";
			dealercard7.innerHTML="";
			dealercard6.innerHTML="";
			dealercard5.innerHTML="";
			dealercard4.innerHTML="";
			dealercard3.innerHTML="";
			dealercard2.innerHTML="";
			document.getElementById("dealercardsplace").innerHTML="";
			document.getElementById("dealercardsplace1").innerHTML="";
				},100);
		}
		}
			
		}
	function scoring(x){//scoring function for player
		if((x%13==10)||(x%13==12)||(x%13==11)){// value returned for king,queen and jack
			return 10;
		}
		else if(x%13==0){//providing option for ace
			var aValue = prompt("Please enter 1 or 11 as value for your ace:", "1");
			while (aValue == null || aValue == "" || (aValue!="1" && aValue!="11")) {
				aValue = prompt("Please enter 1 or 11 as value for your ace:", "1");
			} 
			if(aValue=="1"){
				return 1;
			}
			else {
				return 11;
			}
		}
		else{//value returned for other cards
			x=(x%13)+1;
			return x;
		}
		
	}
	function scoring1(x){//scoring function for dealer
		if((x%13==10)||(x%13==12)||(x%13==11)){
			return 10;// value returned for king,queen and jack
		}
		
		else{//value returned for other cards
			x=(x%13)+1;
			return x;
		}
		
	}
	


btn.onclick = function() {//opens the modal 
    modal.style.display = "block";
}


span.onclick = function() {// When the user clicks on <span> (x), close the modal
    modal.style.display = "none";
}


window.onclick = function(event) {//When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
restart.onclick = function() {//opens the modal 
    document.location.reload();
}