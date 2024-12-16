'use strict';

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 0,
	preventInteractionOnTransition: true,
	loop: false,
	allowTouchMove: false,
	centerSlide: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
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