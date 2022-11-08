const facebookProfile = {
	name: "Julie",
	friends: 2,
	message: ["Message 1", "Message 2"],
	postMessage: function(message) {
		facebookProfile.message.push(message);
	},
	deleteMessage: function(index) {
		facebookProfile.message.splice(index, 1);
	},
	addFriend: function() {
		facebookProfile.friends += 1;
	},
	removeFriend: function() {
		if (facebookProfile.friends > 0) {
			facebookProfile.friends -= 1;
		}
	}
};
console.log("Name: ", facebookProfile.name);
console.log("Messages: ", facebookProfile.message);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.message);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.message);
console.log("Friends: ", facebookProfile.friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friends);