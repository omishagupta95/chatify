ifUserIsLoggedIn(function() {
  updateUserData();

  loadUsers(function(users) {
    console.log(users);
    var usersList ="";
    for (var uid in users) {
      var user = users[uid];
      if (window.currentUser.id != uid)
        usersList += renderUser(user);
    }
    console.log(usersList);
    getElement("contacts").innerHTML = usersList;
  });
  onClickMultiple("contact", function(element){
    var chat_id = element.id;
    loadMessages(chat_id, function(messages) {
      var messagesList ="";
      for (var uid in messages) {
        var message = messages[uid];
        if (window.currentUser.id != uid)
          messagesList += renderMessage(message);

      }

      getElement("messages").innerHTML = messagesList;
    });
    getElement("chat-id").value = chat_id;
  });
  click("send-button", function(){
    var text = getElement("message-text").value;
    var chat_id = getElement("chat-id").value;
    sendMessage(chat_id, text);
  });
});
