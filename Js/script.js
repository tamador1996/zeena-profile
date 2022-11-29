//  const arrow1= [...document.querySelectorAll('.arrow1')];
// const arrow2= [...document.querySelectorAll('.arrow2')];
// const texts= [...document.querySelectorAll('.box')];
// texts.forEach((item, i) => {
// 		let texts_dimention= item.getBoundingClientRect();
// 		let texts_width= texts_dimention.width;

// 	arrow1[i].addEventListener('click', () => {
// 		item.scrollLeft -= texts_width;
// 		})
// 	texts[i].addEventListener('click', () => {
// 		item.scrollLeft += texts_width;
// 		})

// 			});
//let noChar= 150;
//let text_p= [document.querySelector('.text-p')];
const btn_more= [document.querySelectorAll('.read-btn')];
//var more = [document.querySelector('.read-more')];
const box= [...document.querySelectorAll('.box')];
const nxt= [...document.querySelectorAll('.nxt')];
const pre= [...document.querySelectorAll('.pre')];
const images= [...document.querySelectorAll('.empolyees')];
	images.forEach((item, i) => {
		let images_dimention= item.getBoundingClientRect();
		let images_width= images_dimention.width;

	nxt[i].addEventListener('click', () => {
		item.scrollLeft -= images_width;
		})
	pre[i].addEventListener('click', () => {
		item.scrollLeft += images_width;
		})

			});

	var index=1;
	show(index);
	function slide(e) {
		show(index += e);
	}
	function show(e) {
		var i;
		if (e > box.length) {index=1}
		if (e < 1) {index = box.length}
			for (var i = 0; i < box.length; i++) {
				box[i].style.display = "none";
			}
			box[index - 1].style.display = "block";
	}


	// arrow2.addEventListener('click', function () {
	// 	    box[i].nextElementSibling.style.display = "block";
	// 	    box[i].style.display = "none";
	// 	    i++;

	// 	    });	
	// arrow1.addEventListener('click', function () {
	// 		if (i=0) {i=3}
	// 			 box[i].style.display = "none";
	// 	    box[i].nextElementSibling.style.display = "block";
		   
	// 	    i--
	// 	    });	
		

		// if (i > box.length - 1) {
		// 	i++;
		// } else {
		// 	i=0;
		// }
	
	

// slideShow();
// function more() {
	const More = document.querySelector("read-more");
// 	More.style.display = "block";
// 	btn[0].addEventListener('click', (e) => {
// 	if (btn[0].innerHTML === 'learn more') {
// 		btn[0].innerHTML = 'learn less';}
// 		else {btn[0].innerHTML = 'learn more'}
// 	}
// 	//document.getElementById("btn").innerHTML = "Read less";
// })

//const showMore = document.querySelector(".showMore");
const text = document.getElementById("serv-text");
const btn = document.querySelectorAll(".btn");
btn[2].addEventListener('click', (e) => {
	text.classList.toggle('show-more');
	if (btn[2].innerHTML === 'learn more') {
		btn[2].innerHTML = 'learn less';}
		else {btn[2].innerHTML = 'learn more'}
});

const text_p = document.getElementById("text-p");
btn[1].addEventListener('click', (e) => {
	text_p.classList.toggle('show-more2');
	if (btn[1].innerHTML === 'learn more') {
		btn[1].innerHTML = 'learn less';}
		else {btn[1].innerHTML = 'learn more'}
});


// const images= [...document.querySelectorAll('.image-container')];
// const nxtBtn= [...document.querySelectorAll('.nxt-btn')];
// const preBtn= [...document.querySelectorAll('.pre-btn')];
// images.forEach( (item, i) => {
// 			let contaierDirectiont= item.getBoundingClientRect();
// 			let containerWidth= contaierDirectiont.width;

// 			nxtBtn[i].addEventListener('click', () => {
// 				item.scrollLeft += containerWidth;
// 			})

// 			preBtn[i].addEventListener('click', () => {
// 				item.scrollLeft -= containerWidth;
// 			})
// 	})