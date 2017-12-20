function StackDivs(domElements){
  this.container = domElements.container;
  this.addButton = domElements.addButton;
  this.count = 0;
}

StackDivs.prototype.init = function(){
  this.bindClickToButton();
}

StackDivs.prototype.bindClickToButton = function(){
  var _this = this;
  this.addButton.on("click", function(){
    var addDiv = $("<div></div>");
    addDiv.addClass("simple-div");
    addDiv.text(++(_this.count));
    _this.container.append(addDiv);
  });

  this.container.on("click", "div", function(){
    var $this = $(this);
      $this.addClass("clicked-div");
      if($this.is(":last-child")){
        $this.remove();
        _this.count--;
      }
  });
}

$(document).ready(function(){
  var domElements = {
    container: $("div[data-type='container']"),
    addButton: $("input[data-type='button']")
  }
  var stackDivs = new StackDivs(domElements);
  stackDivs.init();
});
