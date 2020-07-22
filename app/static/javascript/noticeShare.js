const facebook = document.querySelector('#facebook');
const twitter = document.querySelector('#twitter');
const whatsapp = document.querySelector('#whatsapp');
const url = window.location.href;

facebook.href = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
twitter.href = 'https://twitter.com/intent/tweet?url=' + url;
whatsapp.href = 'https://api.whatsapp.com/send?text=' + url;

