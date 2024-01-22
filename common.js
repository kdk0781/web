$(function(){
	// Set the date we're counting down to 카운트다운 날짜 월 일 년도 시간
	var countDownDate = new Date("Feb 25, 2024 15:00:00").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get today's date and time
	  var now = new Date().getTime();
		
	  // Find the distance between now and the count down date
	  var distance = countDownDate - now;
		
	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
	  // Output the result in an element with id="demo"
	  document.getElementById("d_day").innerHTML = days + "일" + hours + "시간"
	  + minutes + "분" + seconds + "초" + "남았습니다";
		
	  // If the count down is over, write some text 
	  if (distance < 0) {
		clearInterval(x);
		document.getElementById("d_day").innerHTML = "EXPIRED";
	  }
	}, 1000);

	var target = document.querySelectorAll('.btn_open');
	var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
	var targetID;

	// 팝업 열기
	for(var i = 0; i < target.length; i++){
	  target[i].addEventListener('click', function(){
		targetID = this.getAttribute('href');
		document.querySelector(targetID).style.display = 'block';
	  });
	}

	// 팝업 닫기
	for(var j = 0; j < target.length; j++){
	  btnPopClose[j].addEventListener('click', function(){
		this.parentNode.parentNode.style.display = 'none';
	  });
	}

	$(window).on('load', function () {
		load('#js-load', '4');
		$("#js-btn-wrap .button").on("click", function () {
			load('#js-load', '4', '#js-btn-wrap');
		})
	});
	 
	function load(id, cnt, btn) {
		var girls_list = id + " .js-load:not(.active)";
		var girls_length = $(girls_list).length;
		var girls_total_cnt;
		if (cnt < girls_length) {
			girls_total_cnt = cnt;
		} else {
			girls_total_cnt = girls_length;
			$('.btn-wrap').hide()
		}
		$(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
	}




});
