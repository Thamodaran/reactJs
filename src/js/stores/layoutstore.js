var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var categories = [
                   {
                     "name": "",
                     "subtask": [
                       {
                         "name": "",
                         "description": "",
                         "comments": []
                       }
                     ]
                   }
                 ];
var categoriesIndex = 0;
var taskIndex = 0;

function addObject(e, categoryObj, arrayToAddObj) {
  if(e.key === 'Enter' && e.target.value !== '') {
    arrayToAddObj.push(categoryObj);
    e.target.value = '';
  }
}

module.exports = {
  getCategoriesIndex : function(e) {
    categoriesIndex = e.props.categoryIndex;
    emitter.emit('updateTask');
  },

  getTaskIndex : function(e) {
    taskIndex = e.props.taskIndex;
    var commentSection = document.getElementsByClassName('todocommentsForm')[0].classList;
    commentSection.remove('hide');
    var subTaskListSection = document.getElementsByClassName('categoryList')[0].classList;
    subTaskListSection.remove('todoCategoryList');
    subTaskListSection.add('todoCategoryListWithComments');
    emitter.emit('updateComment');
  },

  getTask : function() {
    return categories[categoriesIndex].subtask;
  },

  getCategories : function() {
    return categories;
  },

  addCategory : function(e) {
    var categoryObj = {
                        'name'    : e.target.value,
                        'subtask' : []
                      };
    addObject(e, categoryObj, categories);
    emitter.emit('updateCategories');
    emitter.emit('updateTask');
  },

  addDesc : function(e) {
    categories[categoriesIndex].subtask[taskIndex].description = e.target.value;
    emitter.emit('updateTask');
  },

  addTask : function(e) {
    var taskObj = {
                    'name'        : e.target.value,
                    'description' : '',
                    'comments'    : []
                  };
    const arrayToPush = categories[categoriesIndex].subtask;
    addObject(e, taskObj, arrayToPush);
    emitter.emit('updateCategories');
    emitter.emit('updateTask');
  },

  getComments : function() {
    return categories[categoriesIndex].subtask[taskIndex].comments;
  },

  addComents : function(e) {
    var commentObj = {
                    'name' : e.target.value
                  };
    const arrayToPush = categories[categoriesIndex].subtask[taskIndex].comments;
    addObject(e, commentObj, arrayToPush);
    emitter.emit('updateCategories');
    emitter.emit('updateComment');
  },

  deleteTask : function(e) {
    delete categories[categoriesIndex].subtask[e.props.taskIndex];
    emitter.emit('updateTask');
    var commentSection = document.getElementsByClassName('todocommentsForm')[0].classList;
    commentSection.add('hide');
    var subTaskListSection = document.getElementsByClassName('categoryList')[0].classList;
    subTaskListSection.add('todoCategoryList');
    subTaskListSection.remove('todoCategoryListWithComments');
  },

  updateCategoriesListener: function(callback) {
    emitter.addListener('updateCategories', callback);
  },

  updateTaskListener: function(callback) {
    emitter.addListener('updateTask', callback);
  },

  updateCommentListener: function(callback) {
    emitter.addListener('updateComment', callback);
  },

  getDescriptionListener: function(callback) {
    emitter.addListener('getDescription', callback);
  }
};
