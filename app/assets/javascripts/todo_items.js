$(document).ready(function(){
  $.ajax({
    url: 'http://localhost:3000/todo_items.json'
  }).done(TodoApp.displayLists);
});

var TodoApp = {
  displayLists: function(items){
    var arrayLength = items.length;
    $('.list-item').remove();
    for (var i = 0; i < arrayLength; i = i + 1) {
      var item = items[i];
      var listItem = TodoApp.listElement(item);
      $('#unfinished-list').append(listItem);
    }
  },

  listElement: function(item){
    newElement = $('<li>').addClass('list-item').attr('id', item.id) ;
    newElement.html(item.created_at.toLocaleString() + " | " + item.text + " | ").append(TodoApp.completeButton()).append(TodoApp.deleteButton());
    return newElement;
  },

  completeButton: function(){
    var attributes = {'id':"complete-item-button", 'href':"#"};
    var newElement = $('<a>').addClass("btn btn-small btn-default").attr(attributes).text("Complete");
    return newElement;
  },

  deleteButton: function(){
    var attributes = {'id':"delete-item-button", 'href':"#"};
    var newElement = $('<a>').addClass("btn btn-small btn-default").attr(attributes).text("Delete");
    return newElement;
  }
};
