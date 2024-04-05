console.log("OneSignal is loaded");

let phoneNumber = "1719874354";
let full_name = "Leonor Merino";
let alias = "leonor";
let consec = "consecionario";

document.getElementById("numberForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  phoneNumber = document.getElementById("phoneNumber").value;
  full_name = document.getElementById("name").value;
  alias = document.getElementById("alias").value;
  consecionario = document.getElementById("consecionario").value;
  console.log("Entered phone number:", phoneNumber);
  // You can perform further actions with the phone number here, such as sending it to a server or processing it in some way
});

var translations = {
  // French
  fr: {
    actionMessage: 'Abonnez-vous à nos notifications pour les dernières nouvelles et mises à jour. Vous pouvez désactiver à tout moment.',
    acceptButton: "S'abonner",
    cancelButton: 'Non merci',
  },
  // Spanish
  es: {
    actionMessage: 'Suscríbete a nuestras notificaciones para recibir las últimas noticias y actualizaciones. Puedes desactivarlo en cualquier momento.',
    acceptButton: 'Suscribir',
    cancelButton: 'No, gracias',
  },
  // Default. Used if Browser preferred language does not match any of the above.
  default: {
    actionMessage: 'Subscribe to our notifications for the latest news and updates. You can disable anytime.',
    acceptButton: 'Subscribe',
    cancelButton: 'No thanks',
  },
};

var language = navigator.language.toLowerCase();
var translation = translations[language] || translations.default;
var promptLangs = { ...translation };


window.OneSignalDeferred = window.OneSignalDeferred || [];

OneSignalDeferred.push(function (OneSignal) {
  OneSignal.init({
    appId: "53a39ae0-5202-4e12-81ac-6dfb335a559f",
    safari_web_id: "web.onesignal.auto.175a5781-a0a7-4966-97e0-0bfa01fcdb1f",
    persistNotification: false,
    serviceWorkerParam: { scope: ""},
    serviceWorkerPath: "./OneSignalSDKWorker.js",
    // serviceWorkerParam: { scope: "https://leonor-merino.store/push/onesignal"},
    // serviceWorkerParam: { scope: './' },
    // serviceWorkerPath: 'https://leonor-merino.store/push/onesignal/OneSignalSDKWorker.js',


    notifyButton: {
      enable: true, // Enable the Subscription Bell
      size: "large", // 'small', 'medium', or 'large'
      position: "bottom-right", // 'bottom-left' or 'bottom-right'
      prenotify: true, // Show an icon indicating unread messages before user subscribes
      showCredit: false, // Hide the 'Powered by OneSignal' branding
      text: {
        "tip.state.unsubscribed": "Subscríbete a notificationes",
        "tip.state.subscribed": "You're subscribed to notifications",
        "tip.state.blocked": "You've blocked notifications",
        "message.prenotify": "Click to subscribe to notifications",
        "message.action.subscribed": "Thanks for subscribing!",
        "message.action.resubscribed": "You're subscribed to notifications",
        "message.action.unsubscribed": "You won't receive notifications again",
        "dialog.main.title": "Manage Site Notifications",
        "dialog.main.button.subscribe": "SUBSCRIBE",
        "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
        "dialog.blocked.title": "Unblock Notifications",
        "dialog.blocked.message":
          "Follow these instructions to allow notifications:",
      },
    },
    welcomeNotification: {
      disable: false, // Set to true to disable the welcome notification
      title: "Welcome!", // Custom title for welcome notification
      message: "Thanks for subscribing to our notifications!", // Custom message for welcome notification
      delay: 10,
    },
    // promptOptions: {
      // customlink: {
      //   enabled: true, /* Required to use the Custom Link */
      //   style: "button", /* Has value of 'button' or 'link' */
      //   size: "medium", /* One of 'small', 'medium', or 'large' */
      //   color: {
      //     button: '#E12D30', /* Color of the button background if style = "button" */
      //     text: '#FFFFFF', /* Color of the prompt's text */
      //   },
      //   text: {
      //     subscribe: "Subscribe to push notifications", /* Prompt's text when not subscribed */
      //     unsubscribe: "Unsubscribe from push notifications", /* Prompt's text when subscribed */
      //     explanation: "Get updates from all sorts of things that matter to you", /* Optional text appearing before the prompt button */
      //   },
      //   unsubscribeEnabled: true, /* Controls whether the prompt is visible after subscription */
      // },
      // slidedown: {
      //   prompts: [
      //     {
      //       type: "category",
      //       autoPrompt: true,
      //       text: {
      //         actionMessage:
      //           "We'd like to show you notifications for the latest news and updates.",
      //         acceptButton: "Allow",
      //         cancelButton: "Cancel",

      //         /* CATEGORY SLIDEDOWN SPECIFIC TEXT */
      //         negativeUpdateButton: "Cancel",
      //         positiveUpdateButton: "Save Preferences",
      //         updateMessage:
      //           "Update your push notification subscription preferences.",
      //       },
      //       delay: {
      //         pageViews: 3,
      //         timeDelay: 20,
      //       },
      //       categories: [
      //         {
      //           tag: "politics",
      //           label: "Politics",
      //         },
      //         {
      //           tag: "local_news",
      //           label: "Local News",
      //         },
      //         {
      //           tag: "world_news",
      //           label: "World News",
      //         },
      //         {
      //           tag: "culture",
      //           label: "Culture",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // slidedown: {
      //   prompts: [
      //     {
      //       type: 'push',
      //       autoPrompt: true,
      //       text: { ...promptLangs },
      //     },
      //   ],
      // },
    // },
  });
});

// OneSignalDeferred.push(function () {
//  OneSignal.login(phoneNumber);
//  console.log(`***** login *****: ${phoneNumber}`);
// });
// //
// OneSignalDeferred.push(function () {
//  OneSignal.User.addAlias("ALIAS_LABEL", "ALIAS_ID");
//  console.log(`***** addAlias *****: ALIAS_LABEL, ALIAS_ID`);
// });
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
OneSignalDeferred.push(function() {
 const isSupported = OneSignal.Notifications.isPushSupported();
//  OneSignal.Debug.setLogLevel("trace");
 console.log(`Push is supported: ${isSupported}`);
});

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

function pushSubscriptionChangeListener(event) {
  if (event.current.token) {
    console.log(`The push subscription has received a token!`);
    OneSignal.login(phoneNumber);
    OneSignal.User.addAlias("ALIAS_LABEL", alias);
    OneSignal.User.addTag("Consecionario", consecionario);
    OneSignal.User.addTag("Nombre", full_name);
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
  console.log(`notification will display: ${event}`);
}
function clickEventListener(event) {
  console.log(`click event: ${event}`);
}
function eventListener(event) {
  console.log(`${event}`);
}
