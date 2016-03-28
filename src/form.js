var that = this;

function initialize() {
  'use strict';
  var max = document.getElementById("max");
  var maxCol2 = max.children[2];
  function doMax() {
    var max1 = maxCol2.children[0];
    var max2 = maxCol2.children[1];
    var val1 = parseInt(max1.value);
    var val2 = parseInt(max2.value);
    if (!isNaN(val1) && !isNaN(val2)) {
      max.children[4].innerHTML = that.max(val1, val2);
    }
  }
  for (var i = 0; i < maxCol2.children.length; i++) {
    maxCol2.children[i].addEventListener("blur", doMax);
  }
  var maxOf3 = document.getElementById("maxOf3");
  var maxOf3Col2 = maxOf3.children[2];
  function doMaxOf3() {
    var max1 = maxOf3Col2.children[0];
    var max2 = maxOf3Col2.children[1];
    var max3 = maxOf3Col2.children[2];
    var val1 = parseInt(max1.value);
    var val2 = parseInt(max2.value);
    var val3 = parseInt(max3.value);
    if (!isNaN(val1) && !isNaN(val2)  && !isNaN(val3)) {
       maxOf3.children[4].innerHTML = that.maxOfThree(val1, val2, val3);
    }
  }
  for (var j = 0; j < maxOf3Col2.children.length; j++) {
    maxOf3Col2.children[j].addEventListener("blur", doMaxOf3);
  }
  var maxOfArray = document.getElementById("maxOfArray");
  var addMax = document.getElementById("addMaxOfArray");
  var maxOfArrayCol2 = maxOfArray.children[2];
  function doMaxOfArray() {
    var children = maxOfArrayCol2.children;
    var values = [];
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var value = parseInt(child.value);
      if (!isNaN(value)) {
        values.push(value);
      }
    }
    var maxResult = maxOfArray.children[4];
    maxResult.innerHTML = that.maxOfArray(values);
  }
  for (var k = 0; k < maxOfArrayCol2.children.length; k++) {
    maxOfArrayCol2.children[k].addEventListener("blur", doMaxOfArray);
  }
  addMax.addEventListener("click", function() {
    var newInput = document.createElement("input");
    newInput.addEventListener("blur", doMaxOfArray);
    newInput.setAttribute("type", "number");
    maxOfArrayCol2.insertBefore(newInput, maxOfArrayCol2.children[maxOfArrayCol2.children.length - 1]);
  });
  var times = document.getElementById("times");
  var addTimes = document.getElementById("addTimes");
  var timesCol2 = times.children[2];
  function doTimes() {
    var children = timesCol2.children;
    var values = [];
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      var value = parseInt(child.value);
      if (!isNaN(value)) {
        values.push(value);
      }
    }
    var maxResult = times.children[4];
    maxResult.innerHTML = that.times(values);
  }
  for (var ii = 0; ii < timesCol2.children.length; ii++) {
    timesCol2.children[ii].addEventListener("blur", doTimes);
  }
  addTimes.addEventListener("click", function() {
    var newInput = document.createElement("input");
    newInput.addEventListener("blur", doTimes);
    newInput.setAttribute("type", "number");
    timesCol2.insertBefore(newInput, timesCol2.children[timesCol2.children.length - 1]);
  });
  var fact = document.getElementById("fact");
  fact.children[2].children[0].addEventListener("blur", function() {
    var value = parseInt(this.value);
    fact.children[4].innerHTML = that.fact(value);
  });
  var isVowel = document.getElementById("isVowel");
  isVowel.children[2].children[0].addEventListener("blur", function() {
    isVowel.children[4].children[0].checked = that.isVowel(this.value);
  });
  var hasVowel = document.getElementById("hasVowel");
  hasVowel.children[2].children[0].addEventListener("blur", function() {
    hasVowel.children[4].children[0].checked = that.hasVowel(this.value);
  });
  var translate = document.getElementById("translate");
  translate.children[2].children[0].addEventListener("blur", function() {
    translate.children[4].innerHTML = that.translate(this.value);
  });
  var ajaxSync = document.getElementById("ajaxSync");
  ajaxSync.children[0].children[0].addEventListener("blur", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , this.value, false);
    xhr.send();
    ajaxSync.children[1].innerHTML = xhr.responseText;
  });
  var ajaxAsync = document.getElementById("ajaxAsync");
  ajaxAsync.children[0].children[0].addEventListener("blur", function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        ajaxAsync.children[1].innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET" , this.value, true);
    xhr.send();
  });
  $("#jquery").blur(function() {
    $.get(this.value, function(data) {
      $("#coljquery").html(data);
    });
  });
}