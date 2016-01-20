(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./indexNavbar.js');

},{"./indexNavbar.js":2}],2:[function(require,module,exports){
'use strict';

(function () {
  $('#btnMenu').on('click', function () {
    $('#navbarMenu').toggleClass('header-menu-list-show');
  });

  var time = 400;
  var margin_top = $('#view-0').height();

  section('view-1');
  section('view-2');
  section('view-3');
  section('view-4');

  function section(section_div) {
    $('#a-' + section_div).on('click', function () {
      $('body,html').animate({
        scrollTop: $('#' + section_div).position().top - margin_top
      }, time);
      $('#navbarMenu').toggleClass('header-menu-list-show');
    });
  }
})();

},{}]},{},[1]);
