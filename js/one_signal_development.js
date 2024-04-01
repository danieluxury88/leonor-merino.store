function pushSubscriptionChangeListener(event) {
  if (event.current.token) {
    console.log(`The push subscription has received a token!`);
    //this is a good place to call OneSignal.login and pass in your user ID
  }
}

function slidedownEventListener(wasShown) {
  console.log(`Slidedown shown event ${wasShown}`);
}

function permissionChangeListener(permission) {
  if (permission) {
    console.log(`permission accepted!`);
  }
}
function notificationDismissedListener(event) {
  console.log(`dismiss event: ${event}`);
}
function foregroundWillDisplayListener(event) {
  console.log(`notification will display: ${notification}`);
}
function clickEventListener(event) {
  console.log(`click event: ${event}`);
}

function eventListener(event) {
  console.log(`${event}`);
}

console.log("OneSignal is loaded");
window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(function (OneSignal) {
  OneSignal.init({
    appId: "53a39ae0-5202-4e12-81ac-6dfb335a559f",
    safari_web_id:
      "web.onesignal.auto.175a5781-a0a7-4966-97e0-0bfa01fcdb1f",
    notifyButton: {
      enable: true,
    },
    welcomeNotification: {
      delay: 10,
    },
    promptOptions: {
      slidedown: {
        prompts: [
          {
            type: "category",
            autoPrompt: true,
            text: {
              actionMessage:
                "We'd like to show you notifications for the latest news and updates.",
              acceptButton: "Allow",
              cancelButton: "Cancel",

              /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
              negativeUpdateButton: "Cancel",
              positiveUpdateButton: "Save Preferences",
              updateMessage:
                "Update your push notification subscription preferences.",
            },
            delay: {
              pageViews: 3,
              timeDelay: 20,
            },
            categories: [
              {
                tag: "politics",
                label: "Politics",
              },
              {
                tag: "local_news",
                label: "Local News",
              },
              {
                tag: "world_news",
                label: "World News",
              },
              {
                tag: "culture",
                label: "Culture",
              },
            ],
          },
        ],
      },
    },
    persistNotification: false,
    serviceWorkerParam: { scope: "./push/onesignal/" },
    serviceWorkerPath: "./push/onesignal/OneSignalSDKWorker.js",
  });
});

//OneSignalDeferred.push(function () {
//  OneSignal.login("EID");
//});
//
//OneSignalDeferred.push(function () {
//  OneSignal.User.addAlias("ALIAS_LABEL", "ALIAS_ID");
//});
//
//const aliases = {
//  ALIAS_LABEL_01: "ALIAS_ID_01",
//  ALIAS_LABEL_02: "ALIAS_ID_02",
//  ALIAS_LABEL_03: "ALIAS_ID_03",
//};
//
//OneSignalDeferred.push(function () {
//  OneSignal.User.addAliases({
//    ALIAS_LABEL_01: "ALIAS_ID_01",
//    ALIAS_LABEL_02: "ALIAS_ID_02",
//  });
//});

//OneSignalDeferred.push(function (OneSignal) {
//  OneSignal.Debug.setLogLevel("trace");
//});
//
//OneSignalDeferred.push(function() {
//  OneSignal.setConsentGiven(true);
//});
//
//OneSignalDeferred.push(function() {
//  OneSignal.setConsentRequired(true);
//});
//
//OneSignalDeferred.push(function() {
//  OneSignal.Slidedown.promptPush();
//});
//
//OneSignalDeferred.push(function() {
//  OneSignal.Notifications.requestPermission();
//});
//
//OneSignalDeferred.push(function() {
//  const isSupported = OneSignal.Notifications.isPushSupported();
//  console.log(`Push is supported: ${isSupported}`);
//});

OneSignalDeferred.push(function () {
  OneSignal.User.PushSubscription.addEventListener(
    "change",
    pushSubscriptionChangeListener
  );
});

OneSignalDeferred.push(function () {
  OneSignal.Slidedown.addEventListener(
    "slidedownShown",
    slidedownEventListener
  );
});

OneSignalDeferred.push(function () {
  OneSignal.Notifications.addEventListener(
    "permissionChange",
    permissionChangeListener
  );
});

OneSignalDeferred.push(function () {
  OneSignal.Notifications.addEventListener(
    "dismiss",
    notificationDismissedListener
  );
});

OneSignalDeferred.push(function () {
  OneSignal.Notifications.addEventListener(
    "foregroundWillDisplay",
    foregroundWillDisplayListener
  );
});

OneSignalDeferred.push(function () {
  OneSignal.Notifications.addEventListener("click", clickEventListener);
});

OneSignalDeferred.push(function () {
  OneSignal.Notifications.addEventListener("eventname", eventListener);
});
