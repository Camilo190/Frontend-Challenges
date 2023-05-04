this.loadData();
this.text();
this.clickNotification();
this.markAllAsRead();
dataSet = [];

function clickNotification() {
  notificationsLeft = document.querySelector(".noti-number");
  notificationsLeft.textContent = document.querySelectorAll(".unread").length;
  var unreadNotification = document.querySelectorAll(".unread");
  unreadNotification.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.classList.contains("unread")) {
        element.classList.remove("unread");
        this.notificationsLeft.textContent =
          document.querySelectorAll(".unread").length;
      }
    });
  });
}

function markAllAsRead() {
  var markAllAsRead = document.querySelector(".mark-read");
  markAllAsRead.addEventListener("click", () => {
    var unreadNotification = document.querySelectorAll(".unread");
    unreadNotification.forEach((element) => {
      element.classList.remove("unread");
    });
    this.notificationsLeft.textContent = 0;
  });
}

function text() {
  var padre = document.querySelector(".container");
  dataSet.forEach((element) => {
    var notificationDiv = document.createElement("div");
    var profilePic = document.createElement("img");
    var infDiv = document.createElement("div");
    var infP = document.createElement("p");
    var nameSpan = document.createElement("span");
    var nsText = document.createTextNode(element.text);
    var activitySpan = document.createElement("span");
    var timeP = document.createElement("p");
    var messageP = document.createElement("p");
    var photoNotic = document.createElement("img");

    timeP.classList.add("time");
    timeP.appendChild(document.createTextNode(element.time));

    nameSpan.classList.add("link");
    nameSpan.appendChild(document.createTextNode(element.author));
    if (!element.activity) {
      infP.append(nameSpan, " ", nsText);
    } else {
      activitySpan.classList.add("link");
      activitySpan.appendChild(document.createTextNode(element.activity));
      infP.append(nameSpan, " ", nsText, " ", activitySpan);
    }

    infDiv.classList.add("inf");
    if (element.message) {
      messageP.classList.add("message");
      messageP.appendChild(document.createTextNode(element.message));
      infDiv.append(infP, timeP, messageP);
    } else {
      infDiv.append(infP, timeP);
    }

    profilePic.setAttribute("src", element.image);

    notificationDiv.classList.add("notification", "unread");
    if (element.photo) {
      photoNotic.setAttribute("src", element.photo);
      photoNotic.classList.add("picture");
      notificationDiv.append(profilePic, infDiv, photoNotic);
    } else {
      notificationDiv.append(profilePic, infDiv);
    }

    padre.appendChild(notificationDiv);
  });
}

function Notification(image, author, text, activity, message, photo, time) {
  this.image = image;
  this.author = author;
  this.text = text;
  this.activity = activity;
  this.message = message;
  this.photo = photo;
  this.time = time + " ago";
}

function loadData() {
  var markWebber = new Notification(
    "assets/images/avatar-mark-webber.webp",
    "Mark Webber",
    "reacted to your recent post",
    "My first tournament today!",
    null,
    null,
    "1m"
  );
  var angelaGray = new Notification(
    "assets/images/avatar-angela-gray.webp",
    "Angela Gray",
    "followed you",
    null,
    null,
    null,
    "5m"
  );
  var jacobThompson = new Notification(
    "assets/images/avatar-jacob-thompson.webp",
    "Jacob Thompson",
    "has joined your group",
    "Chess Club",
    null,
    null,
    "1 day"
  );
  var rizkyHasanuddin = new Notification(
    "assets/images/avatar-rizky-hasanuddin.webp",
    "Rizky Hasanuddin",
    "sent you a private message",
    null,
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    null,
    "5 days"
  );
  var kimberlySmith = new Notification(
    "assets/images/avatar-kimberly-smith.webp",
    "Kimberly Smith",
    "commented on your picture",
    null,
    null,
    "assets/images/image-chess.webp",
    "1 week"
  );
  var nathanPeterson = new Notification(
    "assets/images/avatar-nathan-peterson.webp",
    "Nathan Peterson",
    "reacted to your recent post",
    "5 end-game strategies to increase your win rate",
    null,
    null,
    "2 weeks"
  );
  var annaKim = new Notification(
    "assets/images/avatar-anna-kim.webp",
    "Anna Kim",
    "left the group",
    "Chess Club",
    null,
    null,
    "2 weeks"
  );

  this.dataSet = [
    markWebber,
    angelaGray,
    jacobThompson,
    rizkyHasanuddin,
    kimberlySmith,
    nathanPeterson,
    annaKim,
  ];
}
