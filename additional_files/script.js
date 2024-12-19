'use strict';

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 20,
	preventInteractionOnTransition: true,
	loop: false,
	allowTouchMove: false,
	centerSlide: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

var swiperMobile = new Swiper('.mySwiperMobile', {
	slidesPerView: 1,
	spaceBetween: 20,
	preventInteractionOnTransition: true,
	loop: false,
	allowTouchMove: true,
	centerSlide: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
	breakpoints: {
		600: {
			slidesPerView: 2,
		}
	}
});

// document.querySelectorAll('.video-card').forEach((swiper_slide) => {
// 	swiper_slide.querySelector('button').addEventListener('click', (butt) =>{
// 		swiper_slide.querySelector('button').style.display = 'none';
// 		const video = swiper_slide.querySelector('video');
// 		video.play();
// 		video.controls = true;
// 	})
// });

// document.addEventListener("DOMContentLoaded", () => {
// 	document.querySelectorAll(".video-card").forEach((videoCard) => {
// 			const videoElement = videoCard.querySelector("video");
// 			const playButton = videoCard.querySelector(".video-start-button");

// 			const showPlayButton = (show) => {
// 					playButton.style.display = show ? "block" : "none";
// 			};

// 			playButton.addEventListener("click", () => {
// 					if (document.fullscreenElement) {
// 							return;
// 					}

// 					videoElement.play();
// 					videoElement.requestFullscreen();
// 					showPlayButton(false);
// 			});

// 			document.addEventListener("fullscreenchange", () => {
// 					if (!document.fullscreenElement && document.contains(videoElement)) {
// 							videoElement.pause();
// 							showPlayButton(true);
// 					}
// 			});

// 			videoElement.addEventListener("fullscreenerror", (event) => {
// 					console.error("Fullscreen error: ", event);
// 			});

// 			videoElement.addEventListener("pause", () => {
// 					if (!document.fullscreenElement) {
// 							showPlayButton(true);
// 					}
// 			});

// 			playButton.addEventListener("click", () => {
// 					if (videoElement.paused && document.fullscreenElement) {
// 							videoElement.play();
// 					}
// 			});
// 	});
// });

document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".video-card").forEach((videoCard) => {
			const videoElement = videoCard.querySelector("video");
			const playButton = videoCard.querySelector(".video-start-button");

			let savedTime = 0;

			const showPlayButton = (show) => {
					playButton.style.display = show ? "block" : "none";
			};

			playButton.addEventListener("click", () => {
					if (document.fullscreenElement) {
							return;
					}

					videoElement.currentTime = savedTime;
					videoElement.play();
					videoElement.requestFullscreen();
					showPlayButton(false);
			});

			document.addEventListener("fullscreenchange", () => {
					if (!document.fullscreenElement && document.contains(videoElement)) {
							savedTime = videoElement.currentTime;
							videoElement.pause();
							showPlayButton(true);
							videoElement.currentTime = 0;
							videoElement.load();
					}
			});

			videoElement.addEventListener("fullscreenerror", (event) => {
					console.error("Fullscreen error: ", event);
			});

			videoElement.addEventListener("pause", () => {
					if (!document.fullscreenElement) {
							showPlayButton(true);
					}
			});

			// Ensure play resumes from the last position when re-entering fullscreen
			playButton.addEventListener("click", () => {
					if (videoElement.paused && document.fullscreenElement) {
							videoElement.play();
					}
			});
	});
});





document.querySelector('.theme_changer').addEventListener('click', (button) => {
	document.querySelector('html').classList.toggle('dark');
})

document.querySelector('.burger').addEventListener('click', (button) =>{
	let nav_ul = document.querySelector('#nav-ul')
	if (nav_ul.style.opacity == '1')
	{
		console.log(1)
		nav_ul.style.opacity = '0'
		nav_ul.style.pointerEvents = 'none'
	}
	else if (nav_ul.style.opacity == '0')
	{
		console.log(0)
		nav_ul.style.opacity = '1'
		nav_ul.style.pointerEvents = 'all'
	}
	else 
	{
		nav_ul.style.opacity = '1'
		nav_ul.style.pointerEvents = 'all'
	}

})