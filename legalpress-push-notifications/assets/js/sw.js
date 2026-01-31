/**
 * Service Worker for Push Notifications
 * LegalPress Push Notifications Plugin
 *
 * Handles push events and displays notifications
 */

const CACHE_NAME = "legalpress-push-v1";

// Install event
self.addEventListener("install", (event) => {
	console.log("[LegalPress SW] Installing...");
	self.skipWaiting();
});

// Activate event
self.addEventListener("activate", (event) => {
	console.log("[LegalPress SW] Activated");
	event.waitUntil(clients.claim());
});

// Push event - receives push notifications
self.addEventListener("push", (event) => {
	console.log("[LegalPress SW] Push received");

	let data = {
		title: "New Update",
		body: "Check out the latest content!",
		url: "/",
		icon: "/favicon.ico",
		badge: "/favicon.ico",
	};

	// Try to parse push data
	if (event.data) {
		try {
			const payload = event.data.json();
			data = { ...data, ...payload };
		} catch (e) {
			console.log("[LegalPress SW] Could not parse push data:", e);
			data.body = event.data.text();
		}
	}

	const options = {
		body: data.body,
		icon: data.icon,
		badge: data.badge,
		vibrate: [100, 50, 100],
		data: {
			url: data.url,
			dateOfArrival: Date.now(),
		},
		actions: [
			{
				action: "open",
				title: "Read Now",
				icon: data.icon,
			},
			{
				action: "close",
				title: "Dismiss",
			},
		],
		requireInteraction: false,
		tag: "legalpress-notification-" + Date.now(),
		renotify: true,
	};

	event.waitUntil(self.registration.showNotification(data.title, options));
});

// Notification click event
self.addEventListener("notificationclick", (event) => {
	console.log("[LegalPress SW] Notification clicked:", event.action);

	event.notification.close();

	if (event.action === "close") {
		return;
	}

	// Get the URL from notification data
	const urlToOpen = event.notification.data?.url || "/";

	event.waitUntil(
		clients
			.matchAll({ type: "window", includeUncontrolled: true })
			.then((clientList) => {
				// Check if there's already a window open with our site
				for (const client of clientList) {
					if (client.url.includes(self.location.origin) && "focus" in client) {
						return client.navigate(urlToOpen).then(() => client.focus());
					}
				}
				// Open new window if none exists
				if (clients.openWindow) {
					return clients.openWindow(urlToOpen);
				}
			}),
	);
});

// Notification close event
self.addEventListener("notificationclose", (event) => {
	console.log("[LegalPress SW] Notification closed");
});

// Handle subscription change (key rotation, etc.)
self.addEventListener("pushsubscriptionchange", (event) => {
	console.log("[LegalPress SW] Push subscription changed");

	event.waitUntil(
		self.registration.pushManager
			.subscribe({
				userVisibleOnly: true,
				applicationServerKey: self.applicationServerKey,
			})
			.then((subscription) => {
				// Re-subscribe and update server
				return fetch("/wp-admin/admin-ajax.php", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						action: "legalpress_save_subscription",
						subscription: JSON.stringify(subscription.toJSON()),
						nonce: self.pushNonce || "",
					}),
				});
			})
			.catch((error) => {
				console.error("[LegalPress SW] Re-subscription failed:", error);
			}),
	);
});
