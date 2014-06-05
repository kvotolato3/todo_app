
$(document).ready(function(){
  TodoApp.getAllTodos();
  $('#create-new-item-button').click(TodoApp.addNewItem);
  $('#unfinished-list').on('click', '.complete-button', TodoApp.completeItem);
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
    var todo_item = items[i];
      if (todo_item.completed_at === null){
        // Handlebars
        var source = $('#todo_template').html();
        var template = Handlebars.compile(source);
        var todo_item_html = template(todo_item);
        $('#unfinished-list').append(todo_item_html);
      }
      else {
        var source = $('#complete_template').html();
        var template = Handlebars.compile(source);
        var todo_item_html = template(todo_item);
        $('#finished-list').append(todo_item_html);

      }
    }
  },
  addNewItem: function(){
    var $itemInput = $('#new-item').val();
    event.preventDefault();

    if ($itemInput!== '') {
     $.ajax({
      url: 'http://localhost:3000/todo_items',
      type: 'POST',
      dataType: 'json',
      data:  {todo_item: {text: $itemInput}}
     }).done(TodoApp.getAllTodos);
    }
  },
  completeItem: function(event){
    var itemId = this.parentElement.id;
    $.ajax({
      url: 'http://localhost:3000/todo_items/' + itemId,
      type: 'PATCH',
      data: {todo_item: {completed_at: new Date()}}
    }).done(TodoApp.getAllTodos);
  }
};



