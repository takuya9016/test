self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

        var title = data.notification.title;  
        var message = data.notification.message;  
        var icon = data.notification.icon;  
        var notificationTag = data.notification.tag;

  event.waitUntil(  
    return self.registration.showNotification(title, {  
          body: message,  
          icon: icon,  
          tag: notificationTag  
        });  
  );  
});
