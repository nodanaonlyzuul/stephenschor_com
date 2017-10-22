$(function() {
  console.log('i ran');
  $('a').click(function (e) {
    ga('send', 'event', "Links", "Click", this.href);
  })
});
