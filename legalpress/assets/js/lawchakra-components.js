/**
 * LegalPress - LawChakra Components JavaScript
 * Handles: Live time updates, news ticker controls
 */

(function () {
	"use strict";

	/**
	 * Live Time Update
	 * Updates the time display in the top bar every second
	 */
	function initLiveTime() {
		const timeElement = document.querySelector(".top-bar__time");
		if (!timeElement) return;

		function updateTime() {
			const now = new Date();
			const options = {
				hour: "2-digit",
				minute: "2-digit",
				second: "2-digit",
				hour12: true,
			};
			timeElement.textContent = now.toLocaleTimeString("en-US", options);
		}

		// Update immediately and then every second
		updateTime();
		setInterval(updateTime, 1000);
	}

	/**
	 * News Ticker Controls
	 * Pause/play functionality for the breaking news ticker
	 */
	function initNewsTicker() {
		const ticker = document.querySelector(".news-ticker");
		if (!ticker) return;

		const pauseBtn = ticker.querySelector(".news-ticker__btn");
		const iconPause = pauseBtn?.querySelector(".icon-pause");
		const iconPlay = pauseBtn?.querySelector(".icon-play");

		if (!pauseBtn) return;

		let isPaused = false;

		pauseBtn.addEventListener("click", function (e) {
			e.preventDefault();
			isPaused = !isPaused;

			if (isPaused) {
				ticker.classList.add("paused");
				pauseBtn.setAttribute("aria-label", "Play ticker");
				pauseBtn.setAttribute("title", "Play");
				if (iconPause) iconPause.style.display = "none";
				if (iconPlay) iconPlay.style.display = "block";
			} else {
				ticker.classList.remove("paused");
				pauseBtn.setAttribute("aria-label", "Pause ticker");
				pauseBtn.setAttribute("title", "Pause");
				if (iconPause) iconPause.style.display = "block";
				if (iconPlay) iconPlay.style.display = "none";
			}
		});

		// Pause on hover
		const track = ticker.querySelector(".news-ticker__track");
		if (track) {
			track.addEventListener("mouseenter", function () {
				if (!isPaused) {
					ticker.classList.add("paused");
				}
			});

			track.addEventListener("mouseleave", function () {
				if (!isPaused) {
					ticker.classList.remove("paused");
				}
			});
		}
	}

	/**
	 * Ticker Scroll Speed
	 * Adjusts animation duration based on content length
	 */
	function adjustTickerSpeed() {
		const track = document.querySelector(".news-ticker__track");
		if (!track) return;

		// Get the speed from data attribute or default
		const ticker = document.querySelector(".news-ticker");
		const speed = ticker?.dataset.speed || 30;

		// Calculate duration based on content width
		const trackWidth = track.scrollWidth / 2; // Divided by 2 because content is duplicated
		const baseDuration = speed;

		// Adjust speed based on width (longer = slower)
		const adjustedDuration = Math.max(baseDuration, trackWidth / 50);
		track.style.animationDuration = `${adjustedDuration}s`;
	}

	/**
	 * Smooth Scroll for Breadcrumb Links
	 */
	function initBreadcrumbScroll() {
		const breadcrumbLinks = document.querySelectorAll(
			'.breadcrumb__link[href^="#"]',
		);

		breadcrumbLinks.forEach(function (link) {
			link.addEventListener("click", function (e) {
				const targetId = this.getAttribute("href").slice(1);
				const target = document.getElementById(targetId);

				if (target) {
					e.preventDefault();
					target.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			});
		});
	}

	/**
	 * Similar Posts Hover Effects
	 */
	function initSimilarPosts() {
		const cards = document.querySelectorAll(".similar-post-card");

		cards.forEach(function (card) {
			const link = card.querySelector(".similar-post-card__link-overlay");
			const titleLink = card.querySelector(".similar-post-card__title a");

			if (link && titleLink) {
				link.setAttribute("href", titleLink.getAttribute("href"));
				link.setAttribute("aria-label", titleLink.textContent);
			}
		});
	}

	/**
	 * Sidebar Sticky Behavior
	 * Handles sticky sidebar with dynamic offset
	 */
	function initStickyBreadcrumb() {
		const sidebar = document.querySelector(".single-sidebar");
		if (!sidebar) return;

		function updateSidebarOffset() {
			const header = document.querySelector(".header");
			const headerHeight = header ? header.offsetHeight : 70;
			const topBar = document.querySelector(".top-bar");
			const topBarHeight = topBar ? topBar.offsetHeight : 0;

			const totalOffset = headerHeight + topBarHeight + 24; // 24px extra spacing
			sidebar.style.top = `${totalOffset}px`;
		}

		updateSidebarOffset();
		window.addEventListener("resize", updateSidebarOffset);
	}

	/**
	 * Author Bio Read More
	 * Expands long bio text
	 */
	function initAuthorBioExpand() {
		const bio = document.querySelector(".author-bio__description");
		if (!bio) return;

		const maxLength = 200;
		const fullText = bio.textContent;

		if (fullText.length > maxLength) {
			const truncated = fullText.substring(0, maxLength) + "...";
			const readMoreBtn = document.createElement("button");
			readMoreBtn.className = "author-bio__read-more";
			readMoreBtn.textContent = "Read More";
			readMoreBtn.style.cssText =
				"background: none; border: none; color: var(--color-accent, #d4a84b); cursor: pointer; font-weight: 600; margin-left: 8px; padding: 0;";

			let isExpanded = false;
			bio.textContent = truncated;
			bio.appendChild(readMoreBtn);

			readMoreBtn.addEventListener("click", function () {
				isExpanded = !isExpanded;
				if (isExpanded) {
					bio.textContent = fullText;
					readMoreBtn.textContent = "Read Less";
					bio.appendChild(readMoreBtn);
				} else {
					bio.textContent = truncated;
					bio.appendChild(readMoreBtn);
				}
			});
		}
	}

	/**
	 * Initialize all components
	 */
	function init() {
		initLiveTime();
		initNewsTicker();
		adjustTickerSpeed();
		initBreadcrumbScroll();
		initSimilarPosts();
		initStickyBreadcrumb();
		initAuthorBioExpand();
	}

	// Run on DOM ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}

	// Re-run on window load for accurate measurements
	window.addEventListener("load", adjustTickerSpeed);
})();
