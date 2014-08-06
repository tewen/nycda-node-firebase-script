var Firebase = require("firebase");

var ref = new Firebase("{YOUR_REFERENCE}/{YOUR_SUB_TABLE}");

for (var i = 0; i < 100; i++) {
    var comment = "Hsin scored " + i + " points in soccer today.";
    ref.push({comment: comment});
    console.log(comment);
}