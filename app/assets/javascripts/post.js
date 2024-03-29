 

 function display_search_results() {
    // readyState === 4 means that the asynchronous request completed successfully
    if (this.readyState === 4) {
      console.log(this);
      document.getElementById('posts').innerHTML = this.responseText;
    }
  }


  var form = document.getElementById('search-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var searchValue = document.getElementById('search').value;

    var xhr = new XMLHttpRequest();
    xhr.onload = display_search_results;
    xhr.open('GET', '/posts?search=' + searchValue, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send();
  });

  $(document).on('ready page:load', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

    $.ajax({
      url: '/posts?search=' + searchValue,
      type: 'GET',
      dataType: 'html'
    }).done(function(data){
      $('#posts').html(data);
    });
  });