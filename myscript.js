var lis = document.getElementsByTagName('li');
for (var i = 0, l = lis.length; i < l; i++) {
var bbb = lis[i].innerHTML.match(/<a class="comment_name link"\s*href="\/marcello1111\/">/gm);
if (bbb){
document.getElementsByTagName("li")[i].innerHTML = document.getElementsByTagName("li")[i].innerHTML.replace("Marcello1111", "Bigot");

var patt1 = document.getElementsByTagName("li")[i].innerHTML.match(/<img[\s\S\n.]*comment_photo[\s\S\n.]*jpg[\s\S\n.]{0,4}>/g);
var r2 = '<img class="" src="https://i.imgsafe.org/49eff00907.jpg" />';
if (patt1){
document.getElementsByTagName("li")[i].innerHTML = document.getElementsByTagName("li")[i].innerHTML.replace(patt1[0], r2);
}

var patt2 = document.getElementsByTagName("li")[i].innerHTML.match(/<div class="comment_content">[\s\S\n.]*<\/div>/gm);

var rand = Math.floor((Math.random() * 7));
var comment = '';
switch (rand) {
    case 0:
        comment="Som bigot."
        break;
    case 1:
        comment = "Som bigot a nájdete ma aj pod nickom ronik16.";
        break;
    case 2:
        comment = "Som starý bigot zo Žiliny.";
        break;
    case 3:
        comment = "Aj môj bmwáčik je bigot.";
        break;
    case 4:
        comment = "Mário nie je bigot.";
        break;
    case 5:
        comment = "Stále mám tajne rád penisy, hoci som teraz bigot.";
        break;
    case 6:
        comment = "...bigot";
}

var ttt = '<div class="comment_content">';
var r3 = ttt.concat(comment);
r3 = r3.concat('</div>');
if (patt2){
document.getElementsByTagName("li")[i].innerHTML = document.getElementsByTagName("li")[i].innerHTML.replace(patt2[0], r3);
}

var yy = lis[i].getElementsByClassName("user-detail_left");
yy[0].innerHTML = "";

}
} 
