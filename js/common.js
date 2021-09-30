$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");



});


console.log('work!');

document.getElementById("link-bottom").addEventListener("click", openButton);
function openButton() {
	event.preventDefault();
	let content = document.getElementById('hidden-text');
	let displaySetting = content.style.display;

	console.log(displaySetting)
	if(displaySetting == 'none'){
		content.style.display = 'block';
	}else{
		content.style.display = 'none';
	}
}

document.getElementById("link-bottom1").addEventListener("click", openButton1);
function openButton1() {
	event.preventDefault();
	let content1 = document.getElementById('hidden-text1');
	let displaySetting1 = content1.style.display;

	console.log(displaySetting1)
	if(displaySetting1 == 'none'){
		content1.style.display = 'block';
	}else{
		content1.style.display = 'none';
	}
}

document.getElementById("link-bottom2").addEventListener("click", openButton2);
function openButton2() {
	event.preventDefault();
	let content2 = document.getElementById('hidden-text2');
	let displaySetting2 = content2.style.display;

	console.log(displaySetting2)
	if(displaySetting2 == 'none'){
		content2.style.display = 'block';
	}else{
		content2.style.display = 'none';
	}
}


document.getElementById('mobile-menu_burger').addEventListener("click", openMenu);
function openMenu() {
	event.preventDefault();
	console.log('work!');


	let contentMenu = document.getElementById('navigation-mob-menu');
	let displaySettingMenu = contentMenu.style.display;

	console.log(displaySettingMenu)
	if(displaySettingMenu == 'none'){
		contentMenu.style.display = 'block';
	}else{
		contentMenu.style.display = 'none';
	}
}

