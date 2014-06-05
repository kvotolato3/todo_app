$(document).ready(function(){
  TodoApp.getAllTodos();
  $('#create-new-item-button').click(TodoApp.addNewItem);
});

var TodoApp = {

  getAllTodos: function(){
    $.ajax({
    url: 'http://localhost:3000/todo_items.json'
    }).done(TodoApp.displayLists);
  },

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
    newElement = $('<tr>').addClass('list-item').attr('id', item.id) ;
    newElement.html(item.created_at + " | " + item.text + " | ").append(TodoApp.completeButton()).append(TodoApp.deleteButton());
    return newElement;
  },

  completeButton: function(){
    var attributes = {'id':"complete-item-button"};
    var newElement = $('<button>').addClass("btn btn-small btn-default").attr(attributes).text("Complete");
    return newElement;
  },

  deleteButton: function(){
    var attributes = {'id':"delete-item-button"};
    var newElement = $('<button>').addClass("btn btn-small btn-default").attr(attributes).text("Delete");
    return newElement;
  },
  addNewItem: function(){
    var $itemInput = $('#new-item').val();
    if ($itemInput!== '') {
     $.ajax({
      url: 'http://localhost:3000/todo_items',
      type: 'POST',
      data:  {todo_item: {text: $itemInput}}
     }).done(TodoApp.getAllTodos);
    }
  }
};



