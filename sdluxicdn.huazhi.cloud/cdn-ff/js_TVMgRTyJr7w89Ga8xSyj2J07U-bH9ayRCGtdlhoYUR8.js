/**
 * @file
 * JavaScript behaviors for preventing duplicate webform submissions.
 */

(function ($, Drupal) {

    'use strict';
  
    /**
     * Submit once.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for preventing duplicate webform submissions.
     */
    Drupal.behaviors.webformSubmitOnce = {
      attach: function (context) {
        $('.js-webform-submit-once', context).each(function () {
          var $form = $(this);
          // Remove data-webform-submitted.
          $form.removeData('webform-submitted');
          // Remove .js-webform-submit-clicked.
          $form.find('.js-webform-wizard-pages-links :submit, .form-actions :submit').removeClass('js-webform-submit-clicked');
  
          // Track which submit button was clicked.
          // @see http://stackoverflow.com/questions/5721724/jquery-how-to-get-which-button-was-clicked-upon-form-submission
          $form.find('.js-webform-wizard-pages-links :submit, .form-actions :submit').click(function () {
            $form.find('.js-webform-wizard-pages-links :submit, .form-actions :submit')
              .removeClass('js-webform-submit-clicked');
            $(this)
              .addClass('js-webform-submit-clicked');
          });
  
          $(this).submit(function () {
            // Find clicked button
            var $clickedButton = $form.find('.js-webform-wizard-pages-links :submit.js-webform-submit-clicked, .form-actions :submit.js-webform-submit-clicked');
  
            // Don't submit if client-side validation has failed.
            if (!$clickedButton.attr('formnovalidate') && $.isFunction(jQuery.fn.valid) && !($form.valid())) {
              return false;
            }
  
            // Track webform submitted.
            if ($form.data('webform-submitted')) {
              return false;
            }
            $form.data('webform-submitted', 'true');
  
            // Visually disable all submit buttons.
            // Submit buttons can't disabled because their op(eration) must to be posted back to the server.
            $form.find('.js-webform-wizard-pages-links :submit, .form-actions :submit').addClass('is-disabled');
  
            // Set the throbber progress indicator.
            // @see Drupal.Ajax.prototype.setProgressIndicatorThrobber
            var $progress = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>');
            $clickedButton.after($progress);
          });
        });
      }
    };
  
  })(jQuery, Drupal);
  ;
  /**
   * @file
   * JavaScript behaviors for details element.
   */
  
  (function ($, Drupal) {
  
    'use strict';
  
    /**
     * Attach handler to save details open/close state.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformDetailsSave = {
      attach: function (context) {
        if (!window.localStorage) {
          return;
        }
  
        // Summary click event handler.
        $('details > summary', context).once('webform-details-summary-save').click(function () {
          var $details = $(this).parent();
  
  
          // @see https://css-tricks.com/snippets/jquery/make-an-jquery-hasattr/
          if ($details[0].hasAttribute('data-webform-details-nosave')) {
            return;
          }
  
          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }
  
          var open = ($details.attr('open') !== 'open') ? '1' : '0';
          localStorage.setItem(name, open);
        });
  
        // Initialize details open state via local storage.
        $('details', context).once('webform-details-save').each(function () {
          var $details = $(this);
  
          var name = Drupal.webformDetailsSaveGetName($details);
          if (!name) {
            return;
          }
  
          var open = localStorage.getItem(name);
          if (open === null) {
            return;
          }
  
          if (open === '1') {
            $details.attr('open', 'open');
          }
          else {
            $details.removeAttr('open');
          }
        });
      }
  
    };
  
    /**
     * Get the name used to store the state of details element.
     *
     * @param {jQuery} $details
     *   A details element.
     *
     * @return {string}
     *   The name used to store the state of details element.
     */
    Drupal.webformDetailsSaveGetName = function ($details) {
      if (!window.localStorage) {
        return '';
      }
  
      // Any details element not included a webform must have define its own id.
      var webformId = $details.attr('data-webform-element-id');
      if (webformId) {
        return 'Drupal.webform.' + webformId.replace('--', '.');
      }
  
      var detailsId = $details.attr('id');
      if (!detailsId) {
        return '';
      }
  
      var $form = $details.parents('form');
      if (!$form.length || !$form.attr('id')) {
        return '';
      }
  
      var formId = $form.attr('id');
      if (!formId) {
        return '';
      }
  
      // ISSUE: When Drupal renders a webform in a modal dialog it appends a unique
      // identifier to webform ids and details ids. (i.e. my-form--FeSFISegTUI)
      // WORKAROUND: Remove the unique id that delimited using double dashes.
      formId = formId.replace(/--.+?$/, '').replace(/-/g, '_');
      detailsId = detailsId.replace(/--.+?$/, '').replace(/-/g, '_');
      return 'Drupal.webform.' + formId + '.' + detailsId;
    };
  
  })(jQuery, Drupal);
  ;
  /**
   * @file
   * JavaScript behaviors for details element.
   */
  
  (function ($, Drupal) {
  
    'use strict';
  
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.detailsToggle = Drupal.webform.detailsToggle || {};
    Drupal.webform.detailsToggle.options = Drupal.webform.detailsToggle.options || {};
  
    /**
     * Attach handler to toggle details open/close state.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformDetailsToggle = {
      attach: function (context) {
        $('.js-webform-details-toggle', context).once('webform-details-toggle').each(function () {
          var $form = $(this);
          var $tabs = $form.find('.webform-tabs');
  
          // Get only the main details elements and ignore all nested details.
          var selector = ($tabs.length) ? '.webform-tab' : '.js-webform-details-toggle';
          var $details = $form.find('details').filter(function () {
            var $parents = $(this).parentsUntil(selector);
            return ($parents.find('details').length === 0);
          });
  
          // Toggle is only useful when there are two or more details elements.
          if ($details.length < 2) {
            return;
          }
  
          var options = $.extend({
            button: '<button type="button" class="webform-details-toggle-state"></button>'
          }, Drupal.webform.detailsToggle.options);
  
          // Create toggle buttons.
          var $toggle = $(options.button)
            .attr('title', Drupal.t('Toggle details widget state.'))
            .on('click', function (e) {
              var open;
              if (Drupal.webform.detailsToggle.isFormDetailsOpen($form)) {
                $form.find('details').removeAttr('open');
                open = 0;
              }
              else {
                $form.find('details').attr('open', 'open');
                open = 1;
              }
              Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
  
              // Set the saved states for all the details elements.
              // @see webform.element.details.save.js
              if (Drupal.webformDetailsSaveGetName) {
                $form.find('details').each(function () {
                  var name = Drupal.webformDetailsSaveGetName($(this));
                  if (name) {
                    localStorage.setItem(name, open);
                  }
                });
              }
            })
            .wrap('<div class="webform-details-toggle-state-wrapper"></div>')
            .parent();
  
          if ($tabs.length) {
            // Add toggle state before the tabs.
            $tabs.find('.item-list:first-child').eq(0).before($toggle);
          }
          else {
            // Add toggle state link to first details element.
            $details.eq(0).before($toggle);
          }
  
          Drupal.webform.detailsToggle.setDetailsToggleLabel($form);
        });
      }
    };
  
    /**
     * Determine if a webform's details are all opened.
     *
     * @param {jQuery} $form
     *   A webform.
     *
     * @return {boolean}
     *   TRUE if a webform's details are all opened.
     */
    Drupal.webform.detailsToggle.isFormDetailsOpen = function ($form) {
      return ($form.find('details[open]').length === $form.find('details').length);
    };
  
    /**
     * Set a webform's details toggle state widget label.
     *
     * @param {jQuery} $form
     *   A webform.
     */
    Drupal.webform.detailsToggle.setDetailsToggleLabel = function ($form) {
      var isOpen = Drupal.webform.detailsToggle.isFormDetailsOpen($form);
  
      var label = (isOpen) ? Drupal.t('Collapse all') : Drupal.t('Expand all');
      $form.find('.webform-details-toggle-state').html(label);
  
      var text = (isOpen) ? Drupal.t('All details have been expanded.') : Drupal.t('All details have been collapsed.');
      Drupal.announce(text);
    };
  
  })(jQuery, Drupal);
  ;
  /*!
   * jQuery Form Plugin
   * version: 4.2.2
   * Requires jQuery v1.7.2 or later
   * Project repository: https://github.com/jquery-form/form
  
   * Copyright 2017 Kevin Morris
   * Copyright 2006 M. Alsup
  
   * Dual licensed under the LGPL-2.1+ or MIT licenses
   * https://github.com/jquery-form/form#license
  
   * This library is free software; you can redistribute it and/or
   * modify it under the terms of the GNU Lesser General Public
   * License as published by the Free Software Foundation; either
   * version 2.1 of the License, or (at your option) any later version.
   * This library is distributed in the hope that it will be useful,
   * but WITHOUT ANY WARRANTY; without even the implied warranty of
   * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
   * Lesser General Public License for more details.
   */
  !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
  
  ;
  /**
   * @file
   * JavaScript behaviors for Ajax.
   */
  
  (function ($, Drupal, drupalSettings) {
  
    'use strict';
  
    Drupal.webform = Drupal.webform || {};
    Drupal.webform.ajax = Drupal.webform.ajax || {};
    // Allow scrollTopOffset to be custom defined or based on whether there is a
    // floating toolbar.
    Drupal.webform.ajax.scrollTopOffset = Drupal.webform.ajax.scrollTopOffset || ($('#toolbar-administration').length ? 140 : 10);
  
    /**
     * Provide Webform Ajax link behavior.
     *
     * Display fullscreen progress indicator instead of throbber.
     * Copied from: Drupal.behaviors.AJAX
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior to a.webform-ajax-link.
     */
    Drupal.behaviors.webformAjaxLink = {
      attach: function (context) {
        $('.webform-ajax-link', context).once('webform-ajax-link').each(function () {
          var element_settings = {};
          element_settings.progress = {type: 'fullscreen'};
  
          // For anchor tags, these will go to the target of the anchor rather
          // than the usual location.
          var href = $(this).attr('href');
          if (href) {
            element_settings.url = href;
            element_settings.event = 'click';
          }
          element_settings.dialogType = $(this).data('dialog-type');
          element_settings.dialogRenderer = $(this).data('dialog-renderer');
          element_settings.dialog = $(this).data('dialog-options');
          element_settings.base = $(this).attr('id');
          element_settings.element = this;
          Drupal.ajax(element_settings);
  
          // Close all open modal dialogs when opening off-canvas dialog.
          if (element_settings.dialogRenderer === 'off_canvas') {
            $(this).on('click', function () {
              $('.ui-dialog.webform-ui-dialog:visible').find('.ui-dialog-content').dialog('close');
            });
          }
        });
      }
    };
  
    /**
     * Adds a hash (#) to current pages location for links and buttons
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior to a[data-hash] or :button[data-hash].
     *
     * @see \Drupal\webform_ui\WebformUiEntityElementsForm::getElementRow
     * @see Drupal.behaviors.webformFormTabs
     */
    Drupal.behaviors.webformAjaxHash = {
      attach: function (context) {
        $('[data-hash]', context).once('webform-ajax-hash').each(function () {
          var hash = $(this).data('hash');
          if (hash) {
            $(this).on('click', function () {
              location.hash = $(this).data('hash');
            });
          }
        });
      }
    };
  
    /**
     * Provide Ajax callback for confirmation back to link.
     *
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior to confirmation back to link.
     */
    Drupal.behaviors.webformConfirmationBackAjax = {
      attach: function (context) {
        $('.js-webform-confirmation-back-link-ajax', context)
          .once('webform-confirmation-back-ajax')
          .click(function (event) {
            var $form = $(this).parents('form');
  
            // Trigger the Ajax call back for the hidden submit button.
            // @see \Drupal\webform\WebformSubmissionForm::getCustomForm
            $form.find('.js-webform-confirmation-back-submit-ajax').click();
  
            // Move the progress indicator from the submit button to after this link.
            // @todo Figure out a better way to set a progress indicator.
            var $progress_indicator = $form.find('.ajax-progress');
            if ($progress_indicator) {
              $(this).after($progress_indicator);
            }
  
            // Cancel the click event.
            event.preventDefault();
            event.stopPropagation();
          });
      }
    };
  
    /** ********************************************************************** **/
    // Ajax commands.
    /** ********************************************************************** **/
  
    /**
     * Track the updated table row key.
     */
    var updateKey;
  
    /**
     * Track the add element key.
     */
    var addElement;
  
    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   A optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    Drupal.AjaxCommands.prototype.webformInsert = function (ajax, response, status) {
      // Insert the HTML.
      this.insert(ajax, response, status);
  
      // Add element.
      if (addElement) {
        var addSelector = (addElement === '_root_')
          ? '#webform-ui-add-element'
          : '[data-drupal-selector="edit-webform-ui-elements-' + addElement + '-add"]';
        $(addSelector).click();
      }
  
      // If not add element, then scroll to and highlight the updated table row.
      if (!addElement && updateKey) {
        var $element = $('tr[data-webform-key="' + updateKey + '"]');
  
        // Highlight the updated element's row.
        $element.addClass('color-success');
        setTimeout(function () {$element.removeClass('color-success');}, 3000);
  
        // Focus first tabbable item for the updated elements and handlers.
        $element.find(':tabbable:not(.tabledrag-handle)').eq(0).focus();
  
        // Scroll to elements that are not visible.
        if (!isScrolledIntoView($element)) {
          $('html, body').animate({scrollTop: $element.offset().top - Drupal.webform.ajax.scrollTopOffset}, 500);
        }
      }
      else {
        // Focus main content.
        $('#main-content').focus();
      }
  
      // Display main page's status message in a floating container.
      var $wrapper = $(response.selector);
      if ($wrapper.parents('.ui-dialog').length === 0) {
        var $messages = $wrapper.find('.messages');
        // If 'add element' don't show any messages.
        if (addElement) {
          $messages.remove();
        }
        else if ($messages.length) {
          var $floatingMessage = $('#webform-ajax-messages');
          if ($floatingMessage.length === 0) {
            $floatingMessage = $('<div id="webform-ajax-messages" class="webform-ajax-messages"></div>');
            $('body').append($floatingMessage);
          }
          if ($floatingMessage.is(':animated')) {
            $floatingMessage.stop(true, true);
          }
          $floatingMessage.html($messages).show().delay(3000).fadeOut(1000);
        }
      }
  
      updateKey = null; // Reset element update.
      addElement = null; // Reset add element.
    };
  
    /**
     * Scroll to top ajax command.
     *
     * @param {Drupal.Ajax} [ajax]
     *   A {@link Drupal.ajax} object.
     * @param {object} response
     *   Ajax response.
     * @param {string} response.selector
     *   Selector to use.
     *
     * @see Drupal.AjaxCommands.prototype.viewScrollTop
     */
    Drupal.AjaxCommands.prototype.webformScrollTop = function (ajax, response) {
      // Scroll to the top of the view. This will allow users
      // to browse newly loaded content after e.g. clicking a pager
      // link.
      var offset = $(response.selector).offset();
      // We can't guarantee that the scrollable object should be
      // the body, as the view could be embedded in something
      // more complex such as a modal popup. Recurse up the DOM
      // and scroll the first element that has a non-zero top.
      var scrollTarget = response.selector;
      while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
        scrollTarget = $(scrollTarget).parent();
      }
  
      if (response.target === 'page' && $(scrollTarget).length && $(scrollTarget)[0].tagName === 'HTML') {
        // Scroll to top when scroll target is the entire page.
        // @see https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
        var rect = $(scrollTarget)[0].getBoundingClientRect();
        if (!(rect.top >= 0 && rect.left >= 0 && rect.bottom <= $(window).height() && rect.right <= $(window).width())) {
          $(scrollTarget).animate({scrollTop: 0}, 500);
        }
      }
      else {
        // Only scroll upward.
          try {
              if (offset.top - Drupal.webform.ajax.scrollTopOffset < $(scrollTarget).scrollTop()) {
                  $(scrollTarget).animate({scrollTop: (offset.top - Drupal.webform.ajax.scrollTopOffset)}, 500);
              }
          }catch (e) {
  
          }
  
      }
  
      // Focus on the form wrapper content bookmark if
      // .js-webform-autofocus is not enabled.
      // @see \Drupal\webform\Form\WebformAjaxFormTrait::buildAjaxForm
      var $form = $(response.selector + '-content').find('form');
      if (!$form.hasClass('js-webform-autofocus')) {
        $(response.selector + '-content').focus();
      }
    };
  
    /**
     * Command to refresh the current webform page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    Drupal.AjaxCommands.prototype.webformRefresh = function (ajax, response, status) {
      // Get URL path name.
      // @see https://stackoverflow.com/questions/6944744/javascript-get-portion-of-url-path
      var a = document.createElement('a');
      a.href = response.url;
      var forceReload = (response.url.match(/\?reload=([^&]+)($|&)/)) ? RegExp.$1 : null;
      if (forceReload) {
        response.url = response.url.replace(/\?reload=([^&]+)($|&)/, '');
        this.redirect(ajax, response, status);
        return;
      }
  
      if (a.pathname === window.location.pathname && $('.webform-ajax-refresh').length) {
        updateKey = (response.url.match(/[?|&]update=([^&]+)($|&)/)) ? RegExp.$1 : null;
        addElement = (response.url.match(/[?|&]add_element=([^&]+)($|&)/)) ? RegExp.$1 : null;
        $('.webform-ajax-refresh').click();
      }
      else {
        // Clear unsaved information flag so that the current webform page
        // can be redirected.
        // @see Drupal.behaviors.webformUnsaved.clear
        if (Drupal.behaviors.webformUnsaved) {
          Drupal.behaviors.webformUnsaved.clear();
        }
  
        // For webform embedded in an iframe, open all redirects in the top
        // of the browser window.
        // @see \Drupal\webform_share\Controller\WebformShareController::page
        if (drupalSettings.webform_share &&
          drupalSettings.webform_share.page) {
          window.top.location = response.url;
        }
        else {
          this.redirect(ajax, response, status);
        }
      }
    };
  
    /**
     * Command to close a off-canvas and modal dialog.
     *
     * If no selector is given, it defaults to trying to close the modal.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   Selector to use.
     * @param {bool} response.persist
     *   Whether to persist the dialog element or not.
     * @param {number} [status]
     *   The HTTP status code.
     */
    Drupal.AjaxCommands.prototype.webformCloseDialog = function (ajax, response, status) {
      if ($('#drupal-off-canvas').length) {
        // Close off-canvas system tray which is not triggered by close dialog
        // command.
        // @see Drupal.behaviors.offCanvasEvents
        $('#drupal-off-canvas').remove();
        $('body').removeClass('js-tray-open');
        // Remove all *.off-canvas events
        $(document).off('.off-canvas');
        $(window).off('.off-canvas');
        var edge = document.documentElement.dir === 'rtl' ? 'left' : 'right';
        var $mainCanvasWrapper = $('[data-off-canvas-main-canvas]');
        $mainCanvasWrapper.css('padding-' + edge, 0);
  
        // Resize tabs when closing off-canvas system tray.
        $(window).trigger('resize.tabs');
      }
  
      // https://stackoverflow.com/questions/15763909/jquery-ui-dialog-check-if-exists-by-instance-method
      if ($(response.selector).hasClass('ui-dialog-content')) {
        this.closeDialog(ajax, response, status);
      }
    };
  
    /**
     * Triggers confirm page reload.
     *
     * @param {Drupal.Ajax} [ajax]
     *   A {@link Drupal.ajax} object.
     * @param {object} response
     *   Ajax response.
     * @param {string} response.message
     *   A message to be displayed in the confirm dialog.
     */
    Drupal.AjaxCommands.prototype.webformConfirmReload = function (ajax, response) {
      if (window.confirm(response.message)) {
        window.location.reload(true);
      }
    };
  
    /** ********************************************************************** **/
    // Helper functions.
    /** ********************************************************************** **/
  
    /**
     * Determine if element is visible in the viewport.
     *
     * @param {Element} element
     *   An element.
     *
     * @return {boolean}
     *   TRUE if element is visible in the viewport.
     *
     * @see https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
     */
    function isScrolledIntoView(element) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(element).offset().top;
      var elemBottom = elemTop + $(element).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
  })(jQuery, Drupal, drupalSettings);
  ;
  /**
   * @file
   * JavaScript behaviors for message element integration.
   */
  
  (function ($, Drupal) {
  
    'use strict';
  
    /**
     * Behavior for handler message close.
     *
     * @type {Drupal~behavior}
     */
    Drupal.behaviors.webformMessageClose = {
      attach: function (context) {
        $(context).find('.js-webform-message--close').once('webform-message--close').each(function () {
          var $element = $(this);
  
          var id = $element.attr('data-message-id');
          var storage = $element.attr('data-message-storage');
          var effect = $element.attr('data-message-close-effect') || 'hide';
          switch (effect) {
            case 'slide': effect = 'slideUp'; break;
  
            case 'fade': effect = 'fadeOut'; break;
          }
  
          // Check storage status.
          if (isClosed($element, storage, id)) {
            return;
          }
  
          // Only show element if it's style is not set to 'display: none'.
          if ($element.attr('style') !== 'display: none;') {
            $element.show();
          }
  
          $element.find('.js-webform-message__link').on('click', function (event) {
            $element[effect]();
            setClosed($element, storage, id);
            $element.trigger('close');
            event.preventDefault();
          });
        });
      }
    };
  
    function isClosed($element, storage, id) {
      if (!id || !storage) {
        return false;
      }
  
      switch (storage) {
        case 'local':
          if (window.localStorage) {
            return localStorage.getItem('Drupal.webform.message.' + id) || false;
          }
          return false;
  
        case 'session':
          if (window.sessionStorage) {
            return sessionStorage.getItem('Drupal.webform.message.' + id) || false;
          }
          return false;
  
        default:
          return false;
      }
    }
  
    function setClosed($element, storage, id) {
      if (!id || !storage) {
        return;
      }
  
      switch (storage) {
        case 'local':
          if (window.localStorage) {
            localStorage.setItem('Drupal.webform.message.' + id, true);
          }
          break;
  
        case 'session':
          if (window.sessionStorage) {
            sessionStorage.setItem('Drupal.webform.message.' + id, true);
          }
          break;
  
        case 'user':
        case 'state':
        case 'custom':
          $.get($element.find('.js-webform-message__link').attr('href'));
          return true;
      }
    }
  
  })(jQuery, Drupal);
  ;
  (function ($, Drupal, settings) {
    "use strict";
  
    /**
     * 生成随机数
     * @returns {string}
     */
    function guid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    }
  
    /**
     * 刷新单个验证码
     * @param isForce
     * @param target
     */
    function refreshCaptcha(captchaToken,captchaImage){
      var uuid = guid();
      captchaToken.val(uuid);
      captchaImage.attr("src","/captcha/generate/"+uuid);
    }
  
    /**
     * 刷新整个页面所有的验证码
     * @param isForce
     */
    function refreshAllCaptcha(context,isForce){
      var allCaptchToken = $('form').find("input[name='captchaToken']");
      allCaptchToken.each(function(){
        var oneCaptchaToken = $(this);
        var form = $(oneCaptchaToken).parents("form").first();
        var oneCaptchaImage = form.find("img[alias='captchaImage']").first();
        if(isForce){
          console.log("开始调用二维码");
          refreshCaptcha(oneCaptchaToken,oneCaptchaImage);
        }else{
          var oldUUID = oneCaptchaToken.val();
          var oldImg = oneCaptchaImage.attr("src");
          if(!oldUUID || !oldImg){
            console.log("开始调用二维码");
            refreshCaptcha(oneCaptchaToken,oneCaptchaImage);
          }
        }
      });
    }
  
  
  
  
  
    setTimeout(function (){
      refreshAllCaptcha('',false);
      $("[alias='refreshCaptcha']").unbind("click");
      $("[alias='refreshCaptcha']").on('click',function (){
        var oneCaptchaToken = $(this).parents("form").find("input[name='captchaToken']").first();
        var oneCaptchaImage = $(this).parents("form").find("img[alias='captchaImage']").first();
        refreshCaptcha(oneCaptchaToken,oneCaptchaImage);
      });
    },1000);
  
    Drupal.behaviors.huazhi_captcha = {
      attach: function (context) {
        console.log("captcha");
        refreshAllCaptcha(context,false);
        $("[alias='refreshCaptcha']").unbind("click");
        $("[alias='refreshCaptcha']").on('click',function (){
          var oneCaptchaToken = $(this).parents("form").find("input[name='captchaToken']").first();
          var oneCaptchaImage = $(this).parents("form").find("img[alias='captchaImage']").first();
          refreshCaptcha(oneCaptchaToken,oneCaptchaImage);
        });
      }
    };
  })(jQuery, Drupal, drupalSettings);
  
  
  
  ;
  (function ($, Drupal, settings) {
  
    $(function (){
      $('.footer3 .footer-contactus ul li').each(function (){
        var classEle = $(this);
        if(classEle.hasClass("iconfont6")){
          var currentELe = $(this).find("span.f_value");
          var str1 =  $.trim(currentELe.text());
          var arr = str1.split('&');
          var html ='';
          for(var i in arr){
            html+=`<a href="https://api.whatsapp.com/send?phone=${ arr[i]}&text=Hello" target="_blank" class='value-conts pc-link' style="display: block">${arr[i]} </a>`;
            html+=`<a href="whatsapp://send?phone=${ arr[i]}&text=Hello" target="_blank" class='value-conts mob-link' style="display: none">${arr[i]} </a>`;
          }
          currentELe.html(html)
        }else if(classEle.hasClass("iconfont3")){
          var currentELe = $(this).find("span.f_value");
          var str1 =  $.trim(currentELe.text());
          var arr = str1.split('&');
          var html ='';
          for(var i in arr){
            html+=`<a href="mailto:${ arr[i]}" class='value-conts' target="_blank" style="display: block">${arr[i]} </a>`;
          }
          currentELe.html(html)
        }else if(classEle.hasClass("iconfont2")){
          var currentELe = $(this).find("span.f_value");
          var str1 =  $.trim(currentELe.text());
          var arr = str1.split('&');
          var html ='';
          for(var i in arr){
            html+=`<a href="tel:${ arr[i]}" class='value-conts' target="_blank" style="display: block">${arr[i]} </a>`;
          }
          currentELe.html(html)
        }else if(classEle.hasClass("iconfont1")){
          var currentELe = $(this).find("span.f_value");
          var str1 =  $.trim(currentELe.text());
          var arr = str1.split('&');
          var html ='';
          for(var i in arr){
            html+=`<a href="tel:${ arr[i]}" class='value-conts' target="_blank" style="display: block">${arr[i]} </a>`;
          }
          currentELe.html(html)
        }else{
          var currentELe = $(this).find("span.f_value");
          var str1 =  $.trim(currentELe.text());
          var arr = str1.split('&');
          var html ='';
          for(var i in arr){
            html+='<div class="value-conts">'+ arr[i] +'</div>'
          }
          currentELe.html(html)
        }
  
      })
  
    })
  
  
  
  })(jQuery, Drupal, drupalSettings);
  ;
  /**
   * Owl Carousel v2.3.4
   * Copyright 2013-2018 David Deutsch
   * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
   */
  /**
   * Owl carousel
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   * @todo Lazy Load Icon
   * @todo prevent animationend bubling
   * @todo itemsScaleUp
   * @todo Test Zepto
   * @todo stagePadding calculate wrong active classes
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {
  
      /**
       * Current settings for the carousel.
       * @public
       */
      this.settings = null;
  
      /**
       * Current options set by the caller including defaults.
       * @public
       */
      this.options = $.extend({}, Owl.Defaults, options);
  
      /**
       * Plugin element.
       * @public
       */
      this.$element = $(element);
  
      /**
       * Proxied event handlers.
       * @protected
       */
      this._handlers = {};
  
      /**
       * References to the running plugins of this carousel.
       * @protected
       */
      this._plugins = {};
  
      /**
       * Currently suppressed events to prevent them from being retriggered.
       * @protected
       */
      this._supress = {};
  
      /**
       * Absolute current position.
       * @protected
       */
      this._current = null;
  
      /**
       * Animation speed in milliseconds.
       * @protected
       */
      this._speed = null;
  
      /**
       * Coordinates of all items in pixel.
       * @todo The name of this member is missleading.
       * @protected
       */
      this._coordinates = [];
  
      /**
       * Current breakpoint.
       * @todo Real media queries would be nice.
       * @protected
       */
      this._breakpoint = null;
  
      /**
       * Current width of the plugin element.
       */
      this._width = null;
  
      /**
       * All real items.
       * @protected
       */
      this._items = [];
  
      /**
       * All cloned items.
       * @protected
       */
      this._clones = [];
  
      /**
       * Merge values of all items.
       * @todo Maybe this could be part of a plugin.
       * @protected
       */
      this._mergers = [];
  
      /**
       * Widths of all items.
       */
      this._widths = [];
  
      /**
       * Invalidated parts within the update process.
       * @protected
       */
      this._invalidated = {};
  
      /**
       * Ordered list of workers for the update process.
       * @protected
       */
      this._pipe = [];
  
      /**
       * Current state information for the drag operation.
       * @todo #261
       * @protected
       */
      this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
          start: null,
          current: null
        },
        direction: null
      };
  
      /**
       * Current state information and their tags.
       * @type {Object}
       * @protected
       */
      this._states = {
        current: {},
        tags: {
          'initializing': [ 'busy' ],
          'animating': [ 'busy' ],
          'dragging': [ 'interacting' ]
        }
      };
  
      $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
        this._handlers[handler] = $.proxy(this[handler], this);
      }, this));
  
      $.each(Owl.Plugins, $.proxy(function(key, plugin) {
        this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
          = new plugin(this);
      }, this));
  
      $.each(Owl.Workers, $.proxy(function(priority, worker) {
        this._pipe.push({
          'filter': worker.filter,
          'run': $.proxy(worker.run, this)
        });
      }, this));
  
      this.setup();
      this.initialize();
    }
  
    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
      items: 3,
      loop: false,
      center: false,
      rewind: false,
      checkVisibility: true,
  
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      freeDrag: false,
  
      margin: 0,
      stagePadding: 0,
  
      merge: false,
      mergeFit: true,
      autoWidth: false,
  
      startPosition: 0,
      rtl: false,
  
      smartSpeed: 250,
      fluidSpeed: false,
      dragEndSpeed: false,
  
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: window,
  
      fallbackEasing: 'swing',
      slideTransition: '',
  
      info: false,
  
      nestedItemSelector: false,
      itemElement: 'div',
      stageElement: 'div',
  
      refreshClass: 'owl-refresh',
      loadedClass: 'owl-loaded',
      loadingClass: 'owl-loading',
      rtlClass: 'owl-rtl',
      responsiveClass: 'owl-responsive',
      dragClass: 'owl-drag',
      itemClass: 'owl-item',
      stageClass: 'owl-stage',
      stageOuterClass: 'owl-stage-outer',
      grabClass: 'owl-grab'
    };
  
    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
      Default: 'default',
      Inner: 'inner',
      Outer: 'outer'
    };
  
    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
      Event: 'event',
      State: 'state'
    };
  
    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};
  
    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [ {
      filter: [ 'width', 'settings' ],
      run: function() {
        this._width = this.$element.width();
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function(cache) {
        cache.current = this._items && this._items[this.relative(this._current)];
      }
    }, {
      filter: [ 'items', 'settings' ],
      run: function() {
        this.$stage.children('.cloned').remove();
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function(cache) {
        var margin = this.settings.margin || '',
          grid = !this.settings.autoWidth,
          rtl = this.settings.rtl,
          css = {
            'width': 'auto',
            'margin-left': rtl ? margin : '',
            'margin-right': rtl ? '' : margin
          };
  
        !grid && this.$stage.children().css(css);
  
        cache.css = css;
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function(cache) {
        var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
          merge = null,
          iterator = this._items.length,
          grid = !this.settings.autoWidth,
          widths = [];
  
        cache.items = {
          merge: false,
          width: width
        };
  
        while (iterator--) {
          merge = this._mergers[iterator];
          merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;
  
          cache.items.merge = merge > 1 || cache.items.merge;
  
          widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
        }
  
        this._widths = widths;
      }
    }, {
      filter: [ 'items', 'settings' ],
      run: function() {
        var clones = [],
          items = this._items,
          settings = this.settings,
          // TODO: Should be computed from number of min width items in stage
          view = Math.max(settings.items * 2, 4),
          size = Math.ceil(items.length / 2) * 2,
          repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
          append = '',
          prepend = '';
  
        repeat /= 2;
  
        while (repeat > 0) {
          // Switch to only using appended clones
          clones.push(this.normalize(clones.length / 2, true));
          append = append + items[clones[clones.length - 1]][0].outerHTML;
          clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
          repeat -= 1;
        }
  
        this._clones = clones;
  
        $(append).addClass('cloned').appendTo(this.$stage);
        $(prepend).addClass('cloned').prependTo(this.$stage);
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function() {
        var rtl = this.settings.rtl ? 1 : -1,
          size = this._clones.length + this._items.length,
          iterator = -1,
          previous = 0,
          current = 0,
          coordinates = [];
  
        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }
  
        this._coordinates = coordinates;
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function() {
        var padding = this.settings.stagePadding,
          coordinates = this._coordinates,
          css = {
            'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
            'padding-left': padding || '',
            'padding-right': padding || ''
          };
  
        this.$stage.css(css);
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function(cache) {
        var iterator = this._coordinates.length,
          grid = !this.settings.autoWidth,
          items = this.$stage.children();
  
        if (grid && cache.items.merge) {
          while (iterator--) {
            cache.css.width = this._widths[this.relative(iterator)];
            items.eq(iterator).css(cache.css);
          }
        } else if (grid) {
          cache.css.width = cache.items.width;
          items.css(cache.css);
        }
      }
    }, {
      filter: [ 'items' ],
      run: function() {
        this._coordinates.length < 1 && this.$stage.removeAttr('style');
      }
    }, {
      filter: [ 'width', 'items', 'settings' ],
      run: function(cache) {
        cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
        cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
        this.reset(cache.current);
      }
    }, {
      filter: [ 'position' ],
      run: function() {
        this.animate(this.coordinates(this._current));
      }
    }, {
      filter: [ 'width', 'position', 'items', 'settings' ],
      run: function() {
        var rtl = this.settings.rtl ? 1 : -1,
          padding = this.settings.stagePadding * 2,
          begin = this.coordinates(this.current()) + padding,
          end = begin + this.width() * rtl,
          inner, outer, matches = [], i, n;
  
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = this._coordinates[i - 1] || 0;
          outer = Math.abs(this._coordinates[i]) + padding * rtl;
  
          if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
            || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
            matches.push(i);
          }
        }
  
        this.$stage.children('.active').removeClass('active');
        this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');
  
        this.$stage.children('.center').removeClass('center');
        this.$stage.children('.prev').removeClass('prev');
        this.$stage.children('.next').removeClass('next');
        if (this.settings.center) {
          this.$stage.children().eq(this.current()-1).addClass('prev');
          this.$stage.children().eq(this.current()).addClass('center');
          this.$stage.children().eq(this.current()+1).addClass('next');
        }
      }
    } ];
  
    /**
     * Create the stage DOM element
     */
    Owl.prototype.initializeStage = function() {
      this.$stage = this.$element.find('.' + this.settings.stageClass);
  
      // if the stage is already in the DOM, grab it and skip stage initialization
      if (this.$stage.length) {
        return;
      }
  
      this.$element.addClass(this.options.loadingClass);
  
      // create stage
      this.$stage = $('<' + this.settings.stageElement + '>', {
        "class": this.settings.stageClass
      }).wrap( $( '<div/>', {
        "class": this.settings.stageOuterClass
      }));
  
      // append stage
      this.$element.append(this.$stage.parent());
    };
  
    /**
     * Create item DOM elements
     */
    Owl.prototype.initializeItems = function() {
      var $items = this.$element.find('.owl-item');
  
      // if the items are already in the DOM, grab them and skip item initialization
      if ($items.length) {
        this._items = $items.get().map(function(item) {
          return $(item);
        });
  
        this._mergers = this._items.map(function() {
          return 1;
        });
  
        this.refresh();
  
        return;
      }
  
      // append content
      this.replace(this.$element.children().not(this.$stage.parent()));
  
      // check visibility
      if (this.isVisible()) {
        // update view
        this.refresh();
      } else {
        // invalidate width
        this.invalidate('width');
      }
  
      this.$element
        .removeClass(this.options.loadingClass)
        .addClass(this.options.loadedClass);
    };
  
    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
      this.enter('initializing');
      this.trigger('initialize');
  
      this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);
  
      if (this.settings.autoWidth && !this.is('pre-loading')) {
        var imgs, nestedSelector, width;
        imgs = this.$element.find('img');
        nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
        width = this.$element.children(nestedSelector).width();
  
        if (imgs.length && width <= 0) {
          this.preloadAutoWidthImages(imgs);
        }
      }
  
      this.initializeStage();
      this.initializeItems();
  
      // register event handlers
      this.registerEventHandlers();
  
      this.leave('initializing');
      this.trigger('initialized');
    };
  
    /**
     * @returns {Boolean} visibility of $element
     *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
     *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
     */
    Owl.prototype.isVisible = function() {
      return this.settings.checkVisibility
        ? this.$element.is(':visible')
        : true;
    };
  
    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
      var viewport = this.viewport(),
        overwrites = this.options.responsive,
        match = -1,
        settings = null;
  
      if (!overwrites) {
        settings = $.extend({}, this.options);
      } else {
        $.each(overwrites, function(breakpoint) {
          if (breakpoint <= viewport && breakpoint > match) {
            match = Number(breakpoint);
          }
        });
  
        settings = $.extend({}, this.options, overwrites[match]);
        if (typeof settings.stagePadding === 'function') {
          settings.stagePadding = settings.stagePadding();
        }
        delete settings.responsive;
  
        // responsive class
        if (settings.responsiveClass) {
          this.$element.attr('class',
            this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
          );
        }
      }
  
      this.trigger('change', { property: { name: 'settings', value: settings } });
      this._breakpoint = match;
      this.settings = settings;
      this.invalidate('settings');
      this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };
  
    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
      if (this.settings.autoWidth) {
        this.settings.stagePadding = false;
        this.settings.merge = false;
      }
    };
  
    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
      var event = this.trigger('prepare', { content: item });
  
      if (!event.data) {
        event.data = $('<' + this.settings.itemElement + '/>')
          .addClass(this.options.itemClass).append(item)
      }
  
      this.trigger('prepared', { content: event.data });
  
      return event.data;
    };
  
    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
      var i = 0,
        n = this._pipe.length,
        filter = $.proxy(function(p) { return this[p] }, this._invalidated),
        cache = {};
  
      while (i < n) {
        if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
          this._pipe[i].run(cache);
        }
        i++;
      }
  
      this._invalidated = {};
  
      !this.is('valid') && this.enter('valid');
    };
  
    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
      dimension = dimension || Owl.Width.Default;
      switch (dimension) {
        case Owl.Width.Inner:
        case Owl.Width.Outer:
          return this._width;
        default:
          return this._width - this.settings.stagePadding * 2 + this.settings.margin;
      }
    };
  
    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
      this.enter('refreshing');
      this.trigger('refresh');
  
      this.setup();
  
      this.optionsLogic();
  
      this.$element.addClass(this.options.refreshClass);
  
      this.update();
  
      this.$element.removeClass(this.options.refreshClass);
  
      this.leave('refreshing');
      this.trigger('refreshed');
    };
  
    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
      window.clearTimeout(this.resizeTimer);
      this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };
  
    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
      if (!this._items.length) {
        return false;
      }
  
      if (this._width === this.$element.width()) {
        return false;
      }
  
      if (!this.isVisible()) {
        return false;
      }
  
      this.enter('resizing');
  
      if (this.trigger('resize').isDefaultPrevented()) {
        this.leave('resizing');
        return false;
      }
  
      this.invalidate('width');
  
      this.refresh();
  
      this.leave('resizing');
      this.trigger('resized');
    };
  
    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {
      if ($.support.transition) {
        this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
      }
  
      if (this.settings.responsive !== false) {
        this.on(window, 'resize', this._handlers.onThrottledResize);
      }
  
      if (this.settings.mouseDrag) {
        this.$element.addClass(this.options.dragClass);
        this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
        this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
      }
  
      if (this.settings.touchDrag){
        this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
        this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
      }
    };
  
    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
      var stage = null;
  
      if (event.which === 3) {
        return;
      }
  
      if ($.support.transform) {
        stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
        stage = {
          x: stage[stage.length === 16 ? 12 : 4],
          y: stage[stage.length === 16 ? 13 : 5]
        };
      } else {
        stage = this.$stage.position();
        stage = {
          x: this.settings.rtl ?
            stage.left + this.$stage.width() - this.width() + this.settings.margin :
            stage.left,
          y: stage.top
        };
      }
  
      if (this.is('animating')) {
        $.support.transform ? this.animate(stage.x) : this.$stage.stop()
        this.invalidate('position');
      }
  
      this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');
  
      this.speed(0);
  
      this._drag.time = new Date().getTime();
      this._drag.target = $(event.target);
      this._drag.stage.start = stage;
      this._drag.stage.current = stage;
      this._drag.pointer = this.pointer(event);
  
      $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));
  
      $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event));
  
        $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));
  
        if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
          return;
        }
  
        event.preventDefault();
  
        this.enter('dragging');
        this.trigger('drag');
      }, this));
    };
  
    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
      var minimum = null,
        maximum = null,
        pull = null,
        delta = this.difference(this._drag.pointer, this.pointer(event)),
        stage = this.difference(this._drag.stage.start, delta);
  
      if (!this.is('dragging')) {
        return;
      }
  
      event.preventDefault();
  
      if (this.settings.loop) {
        minimum = this.coordinates(this.minimum());
        maximum = this.coordinates(this.maximum() + 1) - minimum;
        stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
      } else {
        minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
        maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
        pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
        stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
      }
  
      this._drag.stage.current = stage;
  
      this.animate(stage.x);
    };
  
    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
      var delta = this.difference(this._drag.pointer, this.pointer(event)),
        stage = this._drag.stage.current,
        direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';
  
      $(document).off('.owl.core');
  
      this.$element.removeClass(this.options.grabClass);
  
      if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
        this.invalidate('position');
        this.update();
  
        this._drag.direction = direction;
  
        if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
          this._drag.target.one('click.owl.core', function() { return false; });
        }
      }
  
      if (!this.is('dragging')) {
        return;
      }
  
      this.leave('dragging');
      this.trigger('dragged');
    };
  
    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {
      var position = -1,
        pull = 30,
        width = this.width(),
        coordinates = this.coordinates();
  
      if (!this.settings.freeDrag) {
        // check closest item
        $.each(coordinates, $.proxy(function(index, value) {
          // on a left pull, check on current index
          if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
            position = index;
            // on a right pull, check on previous index
            // to do so, subtract width from value and set position = index + 1
          } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
            position = index + 1;
          } else if (this.op(coordinate, '<', value)
            && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
            position = direction === 'left' ? index + 1 : index;
          }
          return position === -1;
        }, this));
      }
  
      if (!this.settings.loop) {
        // non loop boundries
        if (this.op(coordinate, '>', coordinates[this.minimum()])) {
          position = coordinate = this.minimum();
        } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
          position = coordinate = this.maximum();
        }
      }
  
      return position;
    };
  
    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
      var animate = this.speed() > 0;
  
      this.is('animating') && this.onTransitionEnd();
  
      if (animate) {
        this.enter('animating');
        this.trigger('translate');
      }
  
      if ($.support.transform3d && $.support.transition) {
        this.$stage.css({
          transform: 'translate3d(' + coordinate + 'px,0px,0px)',
          transition: (this.speed() / 1000) + 's' + (
            this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
          )
        });
      } else if (animate) {
        this.$stage.animate({
          left: coordinate + 'px'
        }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
      } else {
        this.$stage.css({
          left: coordinate + 'px'
        });
      }
    };
  
    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function(state) {
      return this._states.current[state] && this._states.current[state] > 0;
    };
  
    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
      if (position === undefined) {
        return this._current;
      }
  
      if (this._items.length === 0) {
        return undefined;
      }
  
      position = this.normalize(position);
  
      if (this._current !== position) {
        var event = this.trigger('change', { property: { name: 'position', value: position } });
  
        if (event.data !== undefined) {
          position = this.normalize(event.data);
        }
  
        this._current = position;
  
        this.invalidate('position');
  
        this.trigger('changed', { property: { name: 'position', value: this._current } });
      }
  
      return this._current;
    };
  
    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {
      if ($.type(part) === 'string') {
        this._invalidated[part] = true;
        this.is('valid') && this.leave('valid');
      }
      return $.map(this._invalidated, function(v, i) { return i });
    };
  
    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
      position = this.normalize(position);
  
      if (position === undefined) {
        return;
      }
  
      this._speed = 0;
      this._current = position;
  
      this.suppress([ 'translate', 'translated' ]);
  
      this.animate(this.coordinates(position));
  
      this.release([ 'translate', 'translated' ]);
    };
  
    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
      var n = this._items.length,
        m = relative ? 0 : this._clones.length;
  
      if (!this.isNumeric(position) || n < 1) {
        position = undefined;
      } else if (position < 0 || position >= n + m) {
        position = ((position - m / 2) % n + n) % n + m / 2;
      }
  
      return position;
    };
  
    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
      position -= this._clones.length / 2;
      return this.normalize(position, true);
    };
  
    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
      var settings = this.settings,
        maximum = this._coordinates.length,
        iterator,
        reciprocalItemsWidth,
        elementWidth;
  
      if (settings.loop) {
        maximum = this._clones.length / 2 + this._items.length - 1;
      } else if (settings.autoWidth || settings.merge) {
        iterator = this._items.length;
        if (iterator) {
          reciprocalItemsWidth = this._items[--iterator].width();
          elementWidth = this.$element.width();
          while (iterator--) {
            reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
            if (reciprocalItemsWidth > elementWidth) {
              break;
            }
          }
        }
        maximum = iterator + 1;
      } else if (settings.center) {
        maximum = this._items.length - 1;
      } else {
        maximum = this._items.length - settings.items;
      }
  
      if (relative) {
        maximum -= this._clones.length / 2;
      }
  
      return Math.max(maximum, 0);
    };
  
    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
      return relative ? 0 : this._clones.length / 2;
    };
  
    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
      if (position === undefined) {
        return this._items.slice();
      }
  
      position = this.normalize(position, true);
      return this._items[position];
    };
  
    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
      if (position === undefined) {
        return this._mergers.slice();
      }
  
      position = this.normalize(position, true);
      return this._mergers[position];
    };
  
    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
      var odd = this._clones.length / 2,
        even = odd + this._items.length,
        map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };
  
      if (position === undefined) {
        return $.map(this._clones, function(v, i) { return map(i) });
      }
  
      return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };
  
    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
      if (speed !== undefined) {
        this._speed = speed;
      }
  
      return this._speed;
    };
  
    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
      var multiplier = 1,
        newPosition = position - 1,
        coordinate;
  
      if (position === undefined) {
        return $.map(this._coordinates, $.proxy(function(coordinate, index) {
          return this.coordinates(index);
        }, this));
      }
  
      if (this.settings.center) {
        if (this.settings.rtl) {
          multiplier = -1;
          newPosition = position + 1;
        }
  
        coordinate = this._coordinates[position];
        coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
      } else {
        coordinate = this._coordinates[newPosition] || 0;
      }
  
      coordinate = Math.ceil(coordinate);
  
      return coordinate;
    };
  
    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
      if (factor === 0) {
        return 0;
      }
  
      return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };
  
    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
      var current = this.current(),
        revert = null,
        distance = position - this.relative(current),
        direction = (distance > 0) - (distance < 0),
        items = this._items.length,
        minimum = this.minimum(),
        maximum = this.maximum();
  
      if (this.settings.loop) {
        if (!this.settings.rewind && Math.abs(distance) > items / 2) {
          distance += direction * -1 * items;
        }
  
        position = current + distance;
        revert = ((position - minimum) % items + items) % items + minimum;
  
        if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
          current = revert - distance;
          position = revert;
          this.reset(current);
        }
      } else if (this.settings.rewind) {
        maximum += 1;
        position = (position % maximum + maximum) % maximum;
      } else {
        position = Math.max(minimum, Math.min(maximum, position));
      }
  
      this.speed(this.duration(current, position, speed));
      this.current(position);
  
      if (this.isVisible()) {
        this.update();
      }
    };
  
    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
      speed = speed || false;
      this.to(this.relative(this.current()) + 1, speed);
    };
  
    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
      speed = speed || false;
      this.to(this.relative(this.current()) - 1, speed);
    };
  
    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {
  
      // if css2 animation then event object is undefined
      if (event !== undefined) {
        event.stopPropagation();
  
        // Catch only owl-stage transitionEnd event
        if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
          return false;
        }
      }
  
      this.leave('animating');
      this.trigger('translated');
    };
  
    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
      var width;
      if (this.options.responsiveBaseElement !== window) {
        width = $(this.options.responsiveBaseElement).width();
      } else if (window.innerWidth) {
        width = window.innerWidth;
      } else if (document.documentElement && document.documentElement.clientWidth) {
        width = document.documentElement.clientWidth;
      } else {
        console.warn('Can not detect viewport width.');
      }
      return width;
    };
  
    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
      this.$stage.empty();
      this._items = [];
  
      if (content) {
        content = (content instanceof jQuery) ? content : $(content);
      }
  
      if (this.settings.nestedItemSelector) {
        content = content.find('.' + this.settings.nestedItemSelector);
      }
  
      content.filter(function() {
        return this.nodeType === 1;
      }).each($.proxy(function(index, item) {
        item = this.prepare(item);
        this.$stage.append(item);
        this._items.push(item);
        this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
      }, this));
  
      this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
  
      this.invalidate('items');
    };
  
    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
      var current = this.relative(this._current);
  
      position = position === undefined ? this._items.length : this.normalize(position, true);
      content = content instanceof jQuery ? content : $(content);
  
      this.trigger('add', { content: content, position: position });
  
      content = this.prepare(content);
  
      if (this._items.length === 0 || position === this._items.length) {
        this._items.length === 0 && this.$stage.append(content);
        this._items.length !== 0 && this._items[position - 1].after(content);
        this._items.push(content);
        this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
      } else {
        this._items[position].before(content);
        this._items.splice(position, 0, content);
        this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
      }
  
      this._items[current] && this.reset(this._items[current].index());
  
      this.invalidate('items');
  
      this.trigger('added', { content: content, position: position });
    };
  
    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
      position = this.normalize(position, true);
  
      if (position === undefined) {
        return;
      }
  
      this.trigger('remove', { content: this._items[position], position: position });
  
      this._items[position].remove();
      this._items.splice(position, 1);
      this._mergers.splice(position, 1);
  
      this.invalidate('items');
  
      this.trigger('removed', { content: null, position: position });
    };
  
    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
      images.each($.proxy(function(i, element) {
        this.enter('pre-loading');
        element = $(element);
        $(new Image()).one('load', $.proxy(function(e) {
          element.attr('src', e.target.src);
          element.css('opacity', 1);
          this.leave('pre-loading');
          !this.is('pre-loading') && !this.is('initializing') && this.refresh();
        }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
      }, this));
    };
  
    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {
  
      this.$element.off('.owl.core');
      this.$stage.off('.owl.core');
      $(document).off('.owl.core');
  
      if (this.settings.responsive !== false) {
        window.clearTimeout(this.resizeTimer);
        this.off(window, 'resize', this._handlers.onThrottledResize);
      }
  
      for (var i in this._plugins) {
        this._plugins[i].destroy();
      }
  
      this.$stage.children('.cloned').remove();
  
      this.$stage.unwrap();
      this.$stage.children().contents().unwrap();
      this.$stage.children().unwrap();
      this.$stage.remove();
      this.$element
        .removeClass(this.options.refreshClass)
        .removeClass(this.options.loadingClass)
        .removeClass(this.options.loadedClass)
        .removeClass(this.options.rtlClass)
        .removeClass(this.options.dragClass)
        .removeClass(this.options.grabClass)
        .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
        .removeData('owl.carousel');
    };
  
    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
      var rtl = this.settings.rtl;
      switch (o) {
        case '<':
          return rtl ? a > b : a < b;
        case '>':
          return rtl ? a < b : a > b;
        case '>=':
          return rtl ? a <= b : a >= b;
        case '<=':
          return rtl ? a >= b : a <= b;
        default:
          break;
      }
    };
  
    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
      if (element.addEventListener) {
        element.addEventListener(event, listener, capture);
      } else if (element.attachEvent) {
        element.attachEvent('on' + event, listener);
      }
    };
  
    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
      if (element.removeEventListener) {
        element.removeEventListener(event, listener, capture);
      } else if (element.detachEvent) {
        element.detachEvent('on' + event, listener);
      }
    };
  
    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
      var status = {
        item: { count: this._items.length, index: this.current() }
      }, handler = $.camelCase(
        $.grep([ 'on', name, namespace ], function(v) { return v })
          .join('-').toLowerCase()
      ), event = $.Event(
        [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
        $.extend({ relatedTarget: this }, status, data)
      );
  
      if (!this._supress[name]) {
        $.each(this._plugins, function(name, plugin) {
          if (plugin.onTrigger) {
            plugin.onTrigger(event);
          }
        });
  
        this.register({ type: Owl.Type.Event, name: name });
        this.$element.trigger(event);
  
        if (this.settings && typeof this.settings[handler] === 'function') {
          this.settings[handler].call(this, event);
        }
      }
  
      return event;
    };
  
    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
      $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
        if (this._states.current[name] === undefined) {
          this._states.current[name] = 0;
        }
  
        this._states.current[name]++;
      }, this));
    };
  
    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
      $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
        this._states.current[name]--;
      }, this));
    };
  
    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
      if (object.type === Owl.Type.Event) {
        if (!$.event.special[object.name]) {
          $.event.special[object.name] = {};
        }
  
        if (!$.event.special[object.name].owl) {
          var _default = $.event.special[object.name]._default;
          $.event.special[object.name]._default = function(e) {
            if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
              return _default.apply(this, arguments);
            }
            return e.namespace && e.namespace.indexOf('owl') > -1;
          };
          $.event.special[object.name].owl = true;
        }
      } else if (object.type === Owl.Type.State) {
        if (!this._states.tags[object.name]) {
          this._states.tags[object.name] = object.tags;
        } else {
          this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
        }
  
        this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
          return $.inArray(tag, this._states.tags[object.name]) === i;
        }, this));
      }
    };
  
    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
      $.each(events, $.proxy(function(index, event) {
        this._supress[event] = true;
      }, this));
    };
  
    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
      $.each(events, $.proxy(function(index, event) {
        delete this._supress[event];
      }, this));
    };
  
    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
      var result = { x: null, y: null };
  
      event = event.originalEvent || event || window.event;
  
      event = event.touches && event.touches.length ?
        event.touches[0] : event.changedTouches && event.changedTouches.length ?
          event.changedTouches[0] : event;
  
      if (event.pageX) {
        result.x = event.pageX;
        result.y = event.pageY;
      } else {
        result.x = event.clientX;
        result.y = event.clientY;
      }
  
      return result;
    };
  
    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
      return !isNaN(parseFloat(number));
    };
  
    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
      return {
        x: first.x - second.x,
        y: first.y - second.y
      };
    };
  
    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
      var args = Array.prototype.slice.call(arguments, 1);
  
      return this.each(function() {
        var $this = $(this),
          data = $this.data('owl.carousel');
  
        if (!data) {
          data = new Owl(this, typeof option == 'object' && option);
          $this.data('owl.carousel', data);
  
          $.each([
            'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
          ], function(i, event) {
            data.register({ type: Owl.Type.Event, name: event });
            data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
              if (e.namespace && e.relatedTarget !== this) {
                this.suppress([ event ]);
                data[event].apply(this, [].slice.call(arguments, 1));
                this.release([ event ]);
              }
            }, data));
          });
        }
  
        if (typeof option == 'string' && option.charAt(0) !== '_') {
          data[option].apply(data, args);
        }
      });
    };
  
    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * AutoRefresh Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * Refresh interval.
       * @protected
       * @type {number}
       */
      this._interval = null;
  
      /**
       * Whether the element is currently visible or not.
       * @protected
       * @type {Boolean}
       */
      this._visible = null;
  
      /**
       * All event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'initialized.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.autoRefresh) {
            this.watch();
          }
        }, this)
      };
  
      // set default options
      this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);
  
      // register event handlers
      this._core.$element.on(this._handlers);
    };
  
    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
      autoRefresh: true,
      autoRefreshInterval: 500
    };
  
    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {
      if (this._interval) {
        return;
      }
  
      this._visible = this._core.isVisible();
      this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };
  
    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
      if (this._core.isVisible() === this._visible) {
        return;
      }
  
      this._visible = !this._visible;
  
      this._core.$element.toggleClass('owl-hidden', !this._visible);
  
      this._visible && (this._core.invalidate('width') && this._core.refresh());
    };
  
    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
      var handler, property;
  
      window.clearInterval(this._interval);
  
      for (handler in this._handlers) {
        this._core.$element.off(handler, this._handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Lazy Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {
  
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * Already loaded items.
       * @protected
       * @type {Array.<jQuery>}
       */
      this._loaded = [];
  
      /**
       * Event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
          if (!e.namespace) {
            return;
          }
  
          if (!this._core.settings || !this._core.settings.lazyLoad) {
            return;
          }
  
          if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
            var settings = this._core.settings,
              n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
              i = ((settings.center && n * -1) || 0),
              position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
              clones = this._core.clones().length,
              load = $.proxy(function(i, v) { this.load(v) }, this);
            //TODO: Need documentation for this new option
            if (settings.lazyLoadEager > 0) {
              n += settings.lazyLoadEager;
              // If the carousel is looping also preload images that are to the "left"
              if (settings.loop) {
                position -= settings.lazyLoadEager;
                n++;
              }
            }
  
            while (i++ < n) {
              this.load(clones / 2 + this._core.relative(position));
              clones && $.each(this._core.clones(this._core.relative(position)), load);
              position++;
            }
          }
        }, this)
      };
  
      // set the default options
      this._core.options = $.extend({}, Lazy.Defaults, this._core.options);
  
      // register event handler
      this._core.$element.on(this._handlers);
    };
  
    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
      lazyLoad: false,
      lazyLoadEager: 0
    };
  
    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
      var $item = this._core.$stage.children().eq(position),
        $elements = $item && $item.find('.owl-lazy');
  
      if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
        return;
      }
  
      $elements.each($.proxy(function(index, element) {
        var $element = $(element), image,
          url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');
  
        this._core.trigger('load', { element: $element, url: url }, 'lazy');
  
        if ($element.is('img')) {
          $element.one('load.owl.lazy', $.proxy(function() {
            $element.css('opacity', 1);
            this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
          }, this)).attr('src', url);
        } else if ($element.is('source')) {
          $element.one('load.owl.lazy', $.proxy(function() {
            this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
          }, this)).attr('srcset', url);
        } else {
          image = new Image();
          image.onload = $.proxy(function() {
            $element.css({
              'background-image': 'url("' + url + '")',
              'opacity': '1'
            });
            this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
          }, this);
          image.src = url;
        }
      }, this));
  
      this._loaded.push($item.get(0));
    };
  
    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
      var handler, property;
  
      for (handler in this.handlers) {
        this._core.$element.off(handler, this.handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * AutoHeight Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      this._previousHeight = null;
  
      /**
       * All event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.autoHeight) {
            this.update();
          }
        }, this),
        'changed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
            this.update();
          }
        }, this),
        'loaded.owl.lazy': $.proxy(function(e) {
          if (e.namespace && this._core.settings.autoHeight
            && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
            this.update();
          }
        }, this)
      };
  
      // set default options
      this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);
  
      // register event handlers
      this._core.$element.on(this._handlers);
      this._intervalId = null;
      var refThis = this;
  
      // These changes have been taken from a PR by gavrochelegnou proposed in #1575
      // and have been made compatible with the latest jQuery version
      $(window).on('load', function() {
        if (refThis._core.settings.autoHeight) {
          refThis.update();
        }
      });
  
      // Autoresize the height of the carousel when window is resized
      // When carousel has images, the height is dependent on the width
      // and should also change on resize
      $(window).resize(function() {
        if (refThis._core.settings.autoHeight) {
          if (refThis._intervalId != null) {
            clearTimeout(refThis._intervalId);
          }
  
          refThis._intervalId = setTimeout(function() {
            refThis.update();
          }, 250);
        }
      });
  
    };
  
    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
      autoHeight: false,
      autoHeightClass: 'owl-height'
    };
  
    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
      var start = this._core._current,
        end = start + this._core.settings.items,
        lazyLoadEnabled = this._core.settings.lazyLoad,
        visible = this._core.$stage.children().toArray().slice(start, end),
        heights = [],
        maxheight = 0;
  
      $.each(visible, function(index, item) {
        heights.push($(item).height());
      });
  
      maxheight = Math.max.apply(null, heights);
  
      if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
        maxheight = this._previousHeight;
      }
  
      this._previousHeight = maxheight;
  
      this._core.$stage.parent()
        .height(maxheight)
        .addClass(this._core.settings.autoHeightClass);
    };
  
    AutoHeight.prototype.destroy = function() {
      var handler, property;
  
      for (handler in this._handlers) {
        this._core.$element.off(handler, this._handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] !== 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Video Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * Cache all video URLs.
       * @protected
       * @type {Object}
       */
      this._videos = {};
  
      /**
       * Current playing item.
       * @protected
       * @type {jQuery}
       */
      this._playing = null;
  
      /**
       * All event handlers.
       * @todo The cloned content removale is too late
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'initialized.owl.carousel': $.proxy(function(e) {
          if (e.namespace) {
            this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
          }
        }, this),
        'resize.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
            e.preventDefault();
          }
        }, this),
        'refreshed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.is('resizing')) {
            this._core.$stage.find('.cloned .owl-video-frame').remove();
          }
        }, this),
        'changed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && e.property.name === 'position' && this._playing) {
            this.stop();
          }
        }, this),
        'prepared.owl.carousel': $.proxy(function(e) {
          if (!e.namespace) {
            return;
          }
  
          var $element = $(e.content).find('.owl-video');
  
          if ($element.length) {
            $element.css('display', 'none');
            this.fetch($element, $(e.content));
          }
        }, this)
      };
  
      // set default options
      this._core.options = $.extend({}, Video.Defaults, this._core.options);
  
      // register event handlers
      this._core.$element.on(this._handlers);
  
      this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
        this.play(e);
      }, this));
    };
  
    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
      video: false,
      videoHeight: false,
      videoWidth: false
    };
  
    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
      var type = (function() {
          if (target.attr('data-vimeo-id')) {
            return 'vimeo';
          } else if (target.attr('data-vzaar-id')) {
            return 'vzaar'
          } else {
            return 'youtube';
          }
        })(),
        id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
        width = target.attr('data-width') || this._core.settings.videoWidth,
        height = target.attr('data-height') || this._core.settings.videoHeight,
        url = target.attr('href');
  
      if (url) {
  
        /*
            Parses the id's out of the following urls (and probably more):
            https://www.youtube.com/watch?v=:id
            https://youtu.be/:id
            https://vimeo.com/:id
            https://vimeo.com/channels/:channel/:id
            https://vimeo.com/groups/:group/videos/:id
            https://app.vzaar.com/videos/:id
  
            Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
        */
  
        id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
  
        if (id[3].indexOf('youtu') > -1) {
          type = 'youtube';
        } else if (id[3].indexOf('vimeo') > -1) {
          type = 'vimeo';
        } else if (id[3].indexOf('vzaar') > -1) {
          type = 'vzaar';
        } else {
          throw new Error('Video URL not supported.');
        }
        id = id[6];
      } else {
        throw new Error('Missing video URL.');
      }
  
      this._videos[url] = {
        type: type,
        id: id,
        width: width,
        height: height
      };
  
      item.attr('data-video', url);
  
      this.thumbnail(target, this._videos[url]);
    };
  
    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
      var tnLink,
        icon,
        path,
        dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
        customTn = target.find('img'),
        srcType = 'src',
        lazyClass = '',
        settings = this._core.settings,
        create = function(path) {
          icon = '<div class="owl-video-play-icon"></div>';
  
          if (settings.lazyLoad) {
            tnLink = $('<div/>',{
              "class": 'owl-video-tn ' + lazyClass,
              "srcType": path
            });
          } else {
            tnLink = $( '<div/>', {
              "class": "owl-video-tn",
              "style": 'opacity:1;background-image:url(' + path + ')'
            });
          }
          target.after(tnLink);
          target.after(icon);
        };
  
      // wrap video content into owl-video-wrapper div
      target.wrap( $( '<div/>', {
        "class": "owl-video-wrapper",
        "style": dimensions
      }));
  
      if (this._core.settings.lazyLoad) {
        srcType = 'data-src';
        lazyClass = 'owl-lazy';
      }
  
      // custom thumbnail
      if (customTn.length) {
        create(customTn.attr(srcType));
        customTn.remove();
        return false;
      }
  
      if (video.type === 'youtube') {
        path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
        create(path);
      } else if (video.type === 'vimeo') {
        $.ajax({
          type: 'GET',
          url: '//vimeo.com/api/v2/video/' + video.id + '.json',
          jsonp: 'callback',
          dataType: 'jsonp',
          success: function(data) {
            path = data[0].thumbnail_large;
            create(path);
          }
        });
      } else if (video.type === 'vzaar') {
        $.ajax({
          type: 'GET',
          url: '//vzaar.com/api/videos/' + video.id + '.json',
          jsonp: 'callback',
          dataType: 'jsonp',
          success: function(data) {
            path = data.framegrab_url;
            create(path);
          }
        });
      }
    };
  
    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
      this._core.trigger('stop', null, 'video');
      this._playing.find('.owl-video-frame').remove();
      this._playing.removeClass('owl-video-playing');
      this._playing = null;
      this._core.leave('playing');
      this._core.trigger('stopped', null, 'video');
    };
  
    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
      var target = $(event.target),
        item = target.closest('.' + this._core.settings.itemClass),
        video = this._videos[item.attr('data-video')],
        width = video.width || '100%',
        height = video.height || this._core.$stage.height(),
        html,
        iframe;
  
      if (this._playing) {
        return;
      }
  
      this._core.enter('playing');
      this._core.trigger('play', null, 'video');
  
      item = this._core.items(this._core.relative(item.index()));
  
      this._core.reset(item.index());
  
      html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
      html.attr( 'height', height );
      html.attr( 'width', width );
      if (video.type === 'youtube') {
        html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
      } else if (video.type === 'vimeo') {
        html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
      } else if (video.type === 'vzaar') {
        html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
      }
  
      iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));
  
      this._playing = item.addClass('owl-video-playing');
    };
  
    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
      var element = document.fullscreenElement || document.mozFullScreenElement ||
        document.webkitFullscreenElement;
  
      return element && $(element).parent().hasClass('owl-video-frame');
    };
  
    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
      var handler, property;
  
      this._core.$element.off('click.owl.video');
  
      for (handler in this._handlers) {
        this._core.$element.off(handler, this._handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.Video = Video;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Animate Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
      this.core = scope;
      this.core.options = $.extend({}, Animate.Defaults, this.core.options);
      this.swapping = true;
      this.previous = undefined;
      this.next = undefined;
  
      this.handlers = {
        'change.owl.carousel': $.proxy(function(e) {
          if (e.namespace && e.property.name == 'position') {
            this.previous = this.core.current();
            this.next = e.property.value;
          }
        }, this),
        'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
          if (e.namespace) {
            this.swapping = e.type == 'translated';
          }
        }, this),
        'translate.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
            this.swap();
          }
        }, this)
      };
  
      this.core.$element.on(this.handlers);
    };
  
    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
      animateOut: false,
      animateIn: false
    };
  
    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {
  
      if (this.core.settings.items !== 1) {
        return;
      }
  
      if (!$.support.animation || !$.support.transition) {
        return;
      }
  
      this.core.speed(0);
  
      var left,
        clear = $.proxy(this.clear, this),
        previous = this.core.$stage.children().eq(this.previous),
        next = this.core.$stage.children().eq(this.next),
        incoming = this.core.settings.animateIn,
        outgoing = this.core.settings.animateOut;
  
      if (this.core.current() === this.previous) {
        return;
      }
  
      if (outgoing) {
        left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
        previous.one($.support.animation.end, clear)
          .css( { 'left': left + 'px' } )
          .addClass('animated owl-animated-out')
          .addClass(outgoing);
      }
  
      if (incoming) {
        next.one($.support.animation.end, clear)
          .addClass('animated owl-animated-in')
          .addClass(incoming);
      }
    };
  
    Animate.prototype.clear = function(e) {
      $(e.target).css( { 'left': '' } )
        .removeClass('animated owl-animated-out owl-animated-in')
        .removeClass(this.core.settings.animateIn)
        .removeClass(this.core.settings.animateOut);
      this.core.onTransitionEnd();
    };
  
    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
      var handler, property;
  
      for (handler in this.handlers) {
        this.core.$element.off(handler, this.handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Autoplay Plugin
   * @version 2.3.4
   * @author Bartosz Wojciechowski
   * @author Artus Kolanowski
   * @author David Deutsch
   * @author Tom De Caluwé
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * The autoplay timeout id.
       * @type {Number}
       */
      this._call = null;
  
      /**
       * Depending on the state of the plugin, this variable contains either
       * the start time of the timer or the current timer value if it's
       * paused. Since we start in a paused state we initialize the timer
       * value.
       * @type {Number}
       */
      this._time = 0;
  
      /**
       * Stores the timeout currently used.
       * @type {Number}
       */
      this._timeout = 0;
  
      /**
       * Indicates whenever the autoplay is paused.
       * @type {Boolean}
       */
      this._paused = true;
  
      /**
       * All event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'changed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && e.property.name === 'settings') {
            if (this._core.settings.autoplay) {
              this.play();
            } else {
              this.stop();
            }
          } else if (e.namespace && e.property.name === 'position' && this._paused) {
            // Reset the timer. This code is triggered when the position
            // of the carousel was changed through user interaction.
            this._time = 0;
          }
        }, this),
        'initialized.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.autoplay) {
            this.play();
          }
        }, this),
        'play.owl.autoplay': $.proxy(function(e, t, s) {
          if (e.namespace) {
            this.play(t, s);
          }
        }, this),
        'stop.owl.autoplay': $.proxy(function(e) {
          if (e.namespace) {
            this.stop();
          }
        }, this),
        'mouseover.owl.autoplay': $.proxy(function() {
          if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
            this.pause();
          }
        }, this),
        'mouseleave.owl.autoplay': $.proxy(function() {
          if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
            this.play();
          }
        }, this),
        'touchstart.owl.core': $.proxy(function() {
          if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
            this.pause();
          }
        }, this),
        'touchend.owl.core': $.proxy(function() {
          if (this._core.settings.autoplayHoverPause) {
            this.play();
          }
        }, this)
      };
  
      // register event handlers
      this._core.$element.on(this._handlers);
  
      // set default options
      this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };
  
    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
      autoplaySpeed: false
    };
  
    /**
     * Transition to the next slide and set a timeout for the next transition.
     * @private
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype._next = function(speed) {
      this._call = window.setTimeout(
        $.proxy(this._next, this, speed),
        this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
      );
  
      if (this._core.is('interacting') || document.hidden) {
        return;
      }
      this._core.next(speed || this._core.settings.autoplaySpeed);
    }
  
    /**
     * Reads the current timer value when the timer is playing.
     * @public
     */
    Autoplay.prototype.read = function() {
      return new Date().getTime() - this._time;
    };
  
    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
      var elapsed;
  
      if (!this._core.is('rotating')) {
        this._core.enter('rotating');
      }
  
      timeout = timeout || this._core.settings.autoplayTimeout;
  
      // Calculate the elapsed time since the last transition. If the carousel
      // wasn't playing this calculation will yield zero.
      elapsed = Math.min(this._time % (this._timeout || timeout), timeout);
  
      if (this._paused) {
        // Start the clock.
        this._time = this.read();
        this._paused = false;
      } else {
        // Clear the active timeout to allow replacement.
        window.clearTimeout(this._call);
      }
  
      // Adjust the origin of the timer to match the new timeout value.
      this._time += this.read() % timeout - elapsed;
  
      this._timeout = timeout;
      this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    };
  
    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
      if (this._core.is('rotating')) {
        // Reset the clock.
        this._time = 0;
        this._paused = true;
  
        window.clearTimeout(this._call);
        this._core.leave('rotating');
      }
    };
  
    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
      if (this._core.is('rotating') && !this._paused) {
        // Pause the clock.
        this._time = this.read();
        this._paused = true;
  
        window.clearTimeout(this._call);
      }
    };
  
    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
      var handler, property;
  
      this.stop();
  
      for (handler in this._handlers) {
        this._core.$element.off(handler, this._handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Navigation Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
    'use strict';
  
    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * Indicates whether the plugin is initialized or not.
       * @protected
       * @type {Boolean}
       */
      this._initialized = false;
  
      /**
       * The current paging indexes.
       * @protected
       * @type {Array}
       */
      this._pages = [];
  
      /**
       * All DOM elements of the user interface.
       * @protected
       * @type {Object}
       */
      this._controls = {};
  
      /**
       * Markup for an indicator.
       * @protected
       * @type {Array.<String>}
       */
      this._templates = [];
  
      /**
       * The carousel element.
       * @type {jQuery}
       */
      this.$element = this._core.$element;
  
      /**
       * Overridden methods of the carousel.
       * @protected
       * @type {Object}
       */
      this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
      };
  
      /**
       * All event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'prepared.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.dotsData) {
            this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
              $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
          }
        }, this),
        'added.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.dotsData) {
            this._templates.splice(e.position, 0, this._templates.pop());
          }
        }, this),
        'remove.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.dotsData) {
            this._templates.splice(e.position, 1);
          }
        }, this),
        'changed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && e.property.name == 'position') {
            this.draw();
          }
        }, this),
        'initialized.owl.carousel': $.proxy(function(e) {
          if (e.namespace && !this._initialized) {
            this._core.trigger('initialize', null, 'navigation');
            this.initialize();
            this.update();
            this.draw();
            this._initialized = true;
            this._core.trigger('initialized', null, 'navigation');
          }
        }, this),
        'refreshed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._initialized) {
            this._core.trigger('refresh', null, 'navigation');
            this.update();
            this.draw();
            this._core.trigger('refreshed', null, 'navigation');
          }
        }, this)
      };
  
      // set default options
      this._core.options = $.extend({}, Navigation.Defaults, this._core.options);
  
      // register event handlers
      this.$element.on(this._handlers);
    };
  
    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
      nav: false,
      navText: [
        '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
        '<span aria-label="' + 'Next' + '">&#x203a;</span>'
      ],
      navSpeed: false,
      navElement: 'button type="button" role="presentation"',
      navContainer: false,
      navContainerClass: 'owl-nav',
      navClass: [
        'owl-prev',
        'owl-next'
      ],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: true,
      dotsEach: false,
      dotsData: false,
      dotsSpeed: false,
      dotsContainer: false
    };
  
    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
      var override,
        settings = this._core.settings;
      // create DOM structure for relative navigation
      this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
        : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');
  
      this._controls.$previous = $('<' + settings.navElement + '>')
        .addClass(settings.navClass[0])
        .html(settings.navText[0])
        .prependTo(this._controls.$relative)
        .on('click', $.proxy(function(e) {
          this.prev(settings.navSpeed);
        }, this));
      this._controls.$next = $('<' + settings.navElement + '>')
        .addClass(settings.navClass[1])
        .html(settings.navText[1])
        .appendTo(this._controls.$relative)
        .on('click', $.proxy(function(e) {
          this.next(settings.navSpeed);
        }, this));
  
      // create DOM structure for absolute navigation
      if (!settings.dotsData) {
        this._templates = [ $('<button role="button">')
          .addClass(settings.dotClass)
          .append($('<span>'))
          .prop('outerHTML') ];
      }
  
      this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
        : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');
  
      this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
        var index = $(e.target).parent().is(this._controls.$absolute)
          ? $(e.target).index() : $(e.target).parent().index();
  
        e.preventDefault();
  
        this.to(index, settings.dotsSpeed);
      }, this));
  
      /*$el.on('focusin', function() {
        $(document).off(".carousel");
  
        $(document).on('keydown.carousel', function(e) {
          if(e.keyCode == 37) {
            $el.trigger('prev.owl')
          }
          if(e.keyCode == 39) {
            $el.trigger('next.owl')
          }
        });
      });*/
  
      // override public methods of the carousel
      for (override in this._overrides) {
        this._core[override] = $.proxy(this[override], this);
      }
    };
  
    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
      var handler, control, property, override, settings;
      settings = this._core.settings;
  
      for (handler in this._handlers) {
        this.$element.off(handler, this._handlers[handler]);
      }
      for (control in this._controls) {
        if (control === '$relative' && settings.navContainer) {
          this._controls[control].html('');
        } else {
          this._controls[control].remove();
        }
      }
      for (override in this.overides) {
        this._core[override] = this._overrides[override];
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
      var i, j, k,
        lower = this._core.clones().length / 2,
        upper = lower + this._core.items().length,
        maximum = this._core.maximum(true),
        settings = this._core.settings,
        size = settings.center || settings.autoWidth || settings.dotsData
          ? 1 : settings.dotsEach || settings.items;
  
      if (settings.slideBy !== 'page') {
        settings.slideBy = Math.min(settings.slideBy, settings.items);
      }
  
      if (settings.dots || settings.slideBy == 'page') {
        this._pages = [];
  
        for (i = lower, j = 0, k = 0; i < upper; i++) {
          if (j >= size || j === 0) {
            this._pages.push({
              start: Math.min(maximum, i - lower),
              end: i - lower + size - 1
            });
            if (Math.min(maximum, i - lower) === maximum) {
              break;
            }
            j = 0, ++k;
          }
          j += this._core.mergers(this._core.relative(i));
        }
      }
    };
  
    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
      var difference,
        settings = this._core.settings,
        disabled = this._core.items().length <= settings.items,
        index = this._core.relative(this._core.current()),
        loop = settings.loop || settings.rewind;
  
      if(!settings.nav){
        this._controls.$relative.addClass('disabled');
      }else {
        this._controls.$relative.removeClass('disabled');
      }
  
  
      // this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);
      if (settings.nav) {
        this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
        this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
      }
  
      if(!settings.dots){
        this._controls.$absolute.addClass('disabled');
      }else {
        this._controls.$absolute.removeClass('disabled');
      }
  
      // this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);
  
      if (settings.dots) {
        difference = this._pages.length - this._controls.$absolute.children().length;
  
        if (settings.dotsData && difference !== 0) {
          this._controls.$absolute.html(this._templates.join(''));
        } else if (difference > 0) {
          this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
        } else if (difference < 0) {
          this._controls.$absolute.children().slice(difference).remove();
        }
  
        this._controls.$absolute.find('.active').removeClass('active');
        this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
      }
    };
  
    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
      var settings = this._core.settings;
  
      event.page = {
        index: $.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: settings && (settings.center || settings.autoWidth || settings.dotsData
          ? 1 : settings.dotsEach || settings.items)
      };
    };
  
    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
      var current = this._core.relative(this._core.current());
      return $.grep(this._pages, $.proxy(function(page, index) {
        return page.start <= current && page.end >= current;
      }, this)).pop();
    };
  
    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
      var position, length,
        settings = this._core.settings;
  
      if (settings.slideBy == 'page') {
        position = $.inArray(this.current(), this._pages);
        length = this._pages.length;
        successor ? ++position : --position;
        position = this._pages[((position % length) + length) % length].start;
      } else {
        position = this._core.relative(this._core.current());
        length = this._core.items().length;
        successor ? position += settings.slideBy : position -= settings.slideBy;
      }
  
      return position;
    };
  
    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
      $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };
  
    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
      $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };
  
    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
      var length;
  
      if (!standard && this._pages.length) {
        length = this._pages.length;
        $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
      } else {
        $.proxy(this._overrides.to, this._core)(position, speed);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Hash Plugin
   * @version 2.3.4
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
    'use strict';
  
    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
      /**
       * Reference to the core.
       * @protected
       * @type {Owl}
       */
      this._core = carousel;
  
      /**
       * Hash index for the items.
       * @protected
       * @type {Object}
       */
      this._hashes = {};
  
      /**
       * The carousel element.
       * @type {jQuery}
       */
      this.$element = this._core.$element;
  
      /**
       * All event handlers.
       * @protected
       * @type {Object}
       */
      this._handlers = {
        'initialized.owl.carousel': $.proxy(function(e) {
          if (e.namespace && this._core.settings.startPosition === 'URLHash') {
            $(window).trigger('hashchange.owl.navigation');
          }
        }, this),
        'prepared.owl.carousel': $.proxy(function(e) {
          if (e.namespace) {
            var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
  
            if (!hash) {
              return;
            }
  
            this._hashes[hash] = e.content;
          }
        }, this),
        'changed.owl.carousel': $.proxy(function(e) {
          if (e.namespace && e.property.name === 'position') {
            var current = this._core.items(this._core.relative(this._core.current())),
              hash = $.map(this._hashes, function(item, hash) {
                return item === current ? hash : null;
              }).join();
  
            if (!hash || window.location.hash.slice(1) === hash) {
              return;
            }
  
            window.location.hash = hash;
          }
        }, this)
      };
  
      // set default options
      this._core.options = $.extend({}, Hash.Defaults, this._core.options);
  
      // register the event handlers
      this.$element.on(this._handlers);
  
      // register event listener for hash navigation
      $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
        var hash = window.location.hash.substring(1),
          items = this._core.$stage.children(),
          position = this._hashes[hash] && items.index(this._hashes[hash]);
  
        if (position === undefined || position === this._core.current()) {
          return;
        }
  
        this._core.to(this._core.relative(position), false, true);
      }, this));
    };
  
    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
      URLhashListener: false
    };
  
    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
      var handler, property;
  
      $(window).off('hashchange.owl.navigation');
  
      for (handler in this._handlers) {
        this._core.$element.off(handler, this._handlers[handler]);
      }
      for (property in Object.getOwnPropertyNames(this)) {
        typeof this[property] != 'function' && (this[property] = null);
      }
    };
  
    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
  
  })(window.Zepto || window.jQuery, window, document);
  
  /**
   * Support Plugin
   *
   * @version 2.3.4
   * @author Vivid Planet Software GmbH
   * @author Artus Kolanowski
   * @author David Deutsch
   * @license The MIT License (MIT)
   */
  ;(function($, window, document, undefined) {
  
    var style = $('<support>').get(0).style,
      prefixes = 'Webkit Moz O ms'.split(' '),
      events = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend'
          }
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend'
          }
        }
      },
      tests = {
        csstransforms: function() {
          return !!test('transform');
        },
        csstransforms3d: function() {
          return !!test('perspective');
        },
        csstransitions: function() {
          return !!test('transition');
        },
        cssanimations: function() {
          return !!test('animation');
        }
      };
  
    function test(property, prefixed) {
      var result = false,
        upper = property.charAt(0).toUpperCase() + property.slice(1);
  
      $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
        if (style[property] !== undefined) {
          result = prefixed ? property : true;
          return false;
        }
      });
  
      return result;
    }
  
    function prefixed(property) {
      return test(property, true);
    }
  
    if (tests.csstransitions()) {
      /* jshint -W053 */
      $.support.transition = new String(prefixed('transition'))
      $.support.transition.end = events.transition.end[ $.support.transition ];
    }
  
    if (tests.cssanimations()) {
      /* jshint -W053 */
      $.support.animation = new String(prefixed('animation'))
      $.support.animation.end = events.animation.end[ $.support.animation ];
    }
  
    if (tests.csstransforms()) {
      /* jshint -W053 */
      $.support.transform = new String(prefixed('transform'));
      $.support.transform3d = tests.csstransforms3d();
    }
  
  })(window.Zepto || window.jQuery, window, document);
  ;
  (function ($, Drupal, settings) {
    "use strict";
  
    Drupal.behaviors.frontNews1 = {
      attach: function (context) {
        $(context) .find(".front-news1 .carouel-common").once("front-news1").each(function (){
          var owlSetting = $(this).data('settings');
          if(!owlSetting){
            return
          }
  
          var responsive = {}
  
          if(owlSetting.xs){
            responsive[0] = {
              items: owlSetting.xs,
              margin: 20,
            }
          }
  
          if(owlSetting.sm){
            responsive[750] = {
              items: owlSetting.sm,
              margin: 20,
            }
          }
  
          if(owlSetting.md){
            responsive[1024] = {
              items: owlSetting.md,
              margin: 30,
            }
          }
          if(owlSetting.lg){
            responsive[1200] = {
              items: owlSetting.lg,
              margin: 50,
            }
          }
          if(owlSetting.xl){
            responsive[1400] = {
              items: owlSetting.xl,
              margin: 65,
            }
          }
  
          var owl =  $('.front-news1 .owl-carousel').owlCarousel({
            loop: Boolean(owlSetting.loop),
            autoplayTimeout:owlSetting.autoplayTimeout,
            autoplay: Boolean(owlSetting.autoPlay),
            dotsEach: 1,
            navRewind: false,
            nav: Boolean(owlSetting.nav),
            dots:Boolean(owlSetting.dots),
            margin: 15,
            autoplayHoverPause:true,
            responsive: responsive,
          });
          $('.front-news1 .left-btn').on('click', function () {
            owl.trigger('prev.owl.carousel');
          });
  
          $('.front-news1 .right-btn').on('click', function () {
            owl.trigger('next.owl.carousel');
          });
  
        })
      }
    };
  
    Drupal.behaviors.front_news_tab1 = {
      attach: function (context) {
        $(context) .find(".front-news1 .owl_news_tab").once("owl_news_tab").each(function (){
          var owl =  $('.front-news1 .owl_news_tab').owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            autoplay: false,
            dotsEach: 1,
            navRewind: false,
            nav: false,
            dots:false,
          });
          $('.front-news1 .front_news_tab_menu li').click(function (){
            var index = $(this).index();
            owl.trigger('to.owl.carousel',index);
            $('.front-news1 .front_news_tab_menu li').removeClass('active-bg-color border-color');
            $(this).addClass('active-bg-color border-color');
          })
  
          owl.on('translated.owl.carousel', function (event) {
            // var index = (event.item.index-1)%(event.item.count) -1;
            var index =   $(context).find(".front-news1 .owl_news_tab").find('.owl-item.active').data('id');
            $('.front-news1 .front_news_tab_menu li').removeClass('active-bg-color border-color');
            $('.front-news1 .front_news_tab_menu li').eq(index-1).addClass('active-bg-color border-color');
          })
  
        })
      }
    };
  
    Drupal.behaviors.front_news_ajax1 = {
      attach: function (context) {
        $(context) .find(".block-frontnews1 .view-shouyexinwendaifenlei").once("front_news_ajax1").each(function (){
          var selectVal = $(".block-frontnews1 .view-shouyexinwendaifenlei .select-wrapper select").val();
          $('.block-frontnews1 .view-shouyexinwendaifenlei .front-news_term li').each(function () {
            if ($(this).data('id') == selectVal) {
              $(this).addClass('isActive active-bg-color border-color').siblings().removeClass('isActive active-bg-color border-color');
            }
          });
  
          // 首页新闻Tabs切换逻辑
          $(document).on('click', '.block-frontnews1 .view-shouyexinwendaifenlei .front-news_term li', function () {
            var $id = $(this).data('id');
            $('.block-frontnews1 .view-shouyexinwendaifenlei .select-wrapper .form-select').val($id);
            $('.block-frontnews1 .view-shouyexinwendaifenlei .form-actions .js-form-submit').trigger('click');
            //销毁动画事件
          });
        })
      }
    };
  
  
  
  })
  (jQuery, Drupal, drupalSettings);
  ;
  
  (function ($, Drupal, settings) {
    "use strict";
    Drupal.behaviors.custom_content18 = {
      attach: function (context) {
        $(context) .find(".custom-content18").once("custom-content18").each(function (){
          $('.main-content .item').hover(function (){
            // var imgurl = $(this).data('url');
            // var linkurl = $(this).data('link');
            // console.log(imgurl)
            // if(imgurl){
            //   $('.custom-content18 .images').css('background-image','url('+ imgurl +')');
            //   $('.main-content .item').removeClass('active');
  
            //
            //   if(typeof(linkurl)  == "undefined"){
            //       $('.custom-content18 .images .img_link').css("display","none")
            //       $('.custom-content18 .images .img_link').attr('href'," ")
            //   }else{
            //       $('.custom-content18 .images .img_link').attr('href',linkurl)
            //       $('.custom-content18 .images .img_link').css("display","block")
            //   }
            //
            // }
              $('.main-content .item').removeClass(" on_before")
              $(this).addClass(' on_before');
              $('.custom-content18 .images .top-item').eq($(this).index()).show().siblings().hide();
          },function (){
  
          })
        })
      }
    };
  })
  (jQuery, Drupal, drupalSettings);
  ;
  /*
   * jQuery liMarquee v 4.6
   *
   * Copyright 2013, Linnik Yura | LI MASS CODE | http://masscode.ru
   * http://masscode.ru/index.php/k2/item/44-limarquee
   * Free to use
   *
   * Last Update 20.11.2014
   */
  (function ($) {
      var methods = {
          init: function (options) {
              var p = {
                  direction: 'left', //Указывает направление движения содержимого контейнера (left | right | up | down)
                  loop: -1, //Задает, сколько раз будет прокручиваться содержимое. "-1" для бесконечного воспроизведения движения
                  scrolldelay: 0, //Величина задержки в миллисекундах между движениями
                  scrollamount: 50, //Скорость движения контента (px/sec)
                  circular: true, //Если "true" - строка непрерывная 
                  drag: true, //Если "true" - включено перетаскивание строки
                  runshort: true, //Если "true" - короткая строка тоже "бегает", "false" - стоит на месте
                  hoverstop: true, //true - строка останавливается при наведении курсора мыши, false - строка не останавливается
                  inverthover: false, //false - стандартное поведение. Если "true" - строка начинает движение только при наведении курсора
                  xml: false //Путь к xml файлу с нужным текстом
              };
              if (options) {
                  $.extend(p, options);
              }
  
              return this.each(function () {
                  var enterEvent = 'mouseenter';
                  var leaveEvent = 'mouseleave';
                  if(p.inverthover){
                      enterEvent = 'mouseleave';
                      leaveEvent = 'mouseenter';	
                  }
                  
                                  
                  var
                      loop = p.loop,
                      strWrap = $(this).addClass('str_wrap').data({scrollamount:p.scrollamount}),
                      fMove = false;
                      
                  
                  
                  var strWrapStyle = strWrap.attr('style'); 
                  
                  if(strWrapStyle){
                      var wrapStyleArr = strWrapStyle.split(';');
                      var startHeight = false;
                      for(var i=0; i < wrapStyleArr.length; i++){
                          var str = $.trim(wrapStyleArr[i]);					
                          var tested =  str.search(/^height/g);
                          if(tested != -1){
                              startHeight = parseFloat(strWrap.css('height'));
                          }
                      }
                  }
  
                  var code = function () {
                      
                      strWrap.off('mouseleave');
                      strWrap.off('mouseenter');
                      strWrap.off('mousemove');
                      strWrap.off('mousedown');
                      strWrap.off('mouseup');
  
                      
                      if(!$('.str_move',strWrap).length){
                          strWrap.wrapInner($('<div>').addClass('str_move'));
                      }
                      
                      var
                      strMove = $('.str_move', strWrap).addClass('str_origin'),
                      strMoveClone = strMove.clone().removeClass('str_origin').addClass('str_move_clone'),
                      time = 0;
  
                      if (!p.hoverstop) {
                          strWrap.addClass('noStop');
                      }
  
                      var circCloneHor = function(){
                          strMoveClone.clone().css({
                              left:'100%',
                              right:'auto',							
                              width: strMove.width()
                          }).appendTo(strMove);
                          strMoveClone.css({
                              right: '100%',
                              left:'auto',
                              width: strMove.width()
                          }).appendTo(strMove);
                      }
                      
                      var circCloneVert = function(){
                          strMoveClone.clone().css({
                              top: '100%',
                              bottom:'auto',
                              height: strMove.height()
                          }).appendTo(strMove);
                          strMoveClone.css({
                              bottom: '100%',
                              top:'auto',
                              height:strMove.height()
                          }).appendTo(strMove);
                      }
                      
                      
                      
                      if (p.direction == 'left') {
                          strWrap.height(strMove.outerHeight())
                          if (strMove.width() > strWrap.width()) {
                              var leftPos = -strMove.width();
                              
                              if (p.circular) {
                                  
                                  if (!p.xml) {
                                      circCloneHor()
                                      leftPos = -(strMove.width() + (strMove.width() - strWrap.width()));
                                  }
                              }
                              if (p.xml) {
                                  strMove.css({
                                      left:strWrap.width()	
                                  })
                              }
                              var
                              strMoveLeft = strWrap.width(),
                                  k1 = 0,
                                  timeFunc1 = function () {
                                      var
                                      fullS = Math.abs(leftPos),
                                          time = (fullS / strWrap.data('scrollamount')) * 1000;
                                      if (parseFloat(strMove.css('left')) != 0) {
                                          fullS = (fullS + strWrap.width());
                                          time = (fullS - (strWrap.width() - parseFloat(strMove.css('left')))) / strWrap.data('scrollamount') * 1000;
                                      }
                                      return time;
                                  },
                                  moveFuncId1 = false,
                                  moveFunc1 = function () {
                                      if (loop != 0) {
                                          strMove.stop(true).animate({
                                              left: leftPos
                                          }, timeFunc1(), 'linear', function () {
                                              $(this).css({
                                                  left: strWrap.width()
                                              });
                                              if (loop == -1) {
                                                  moveFuncId1 = setTimeout(moveFunc1, p.scrolldelay);
                                              } else {
                                                  loop--;
                                                  moveFuncId1 = setTimeout(moveFunc1, p.scrolldelay);
                                              }
                                          });
                                      }
                                  };
                                  strWrap.data({
                                      moveId: moveFuncId1	,
                                      moveF : moveFunc1
                                  })
                                  if(!p.inverthover){
                                      moveFunc1();
                                  }
                              
                              if (p.hoverstop) {
                                  strWrap.on(enterEvent, function () {
                                      $(this).addClass('str_active');
                                      clearTimeout(moveFuncId1);
                                      strMove.stop(true);
                                  }).on(leaveEvent, function () {
                                      $(this).removeClass('str_active');
                                      $(this).off('mousemove');
                                      moveFunc1();
                                  });
  
                                  if (p.drag) {
                                      strWrap.on('mousedown', function (e) {
                                          if(p.inverthover){
                                              strMove.stop(true);
                                          }
                                          //drag
                                          var dragLeft;
                                          var dir = 1;
                                          var newX;
                                          var oldX = e.clientX;
                                          //drag
                                          
                                          strMoveLeft = strMove.position().left;
                                          k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                          
                                          
                                          
                                          $(this).on('mousemove', function (e) {
                                              fMove = true;
                                              
                                              //drag
                                              newX = e.clientX;
                                              if(newX > oldX){
                                                  dir = 1
                                              }else{
                                                  dir = -1
                                              }
                                              oldX = newX	
                                              dragLeft = k1 + (e.clientX - strWrap.offset().left);
                                              
                                              if (!p.circular) {
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = strWrap.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > strWrap.width() && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                              }else{
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = 0;
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > 0 && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
      
                                              }
                                              
                                              
                                              strMove.stop(true).css({
                                                  left: dragLeft
                                              });
                                              //drag
                                              
                                          
                                              
                                          }).on('mouseup', function () {
                                              $(this).off('mousemove');
                                              if(p.inverthover){
                                                  strMove.trigger('mouseenter')
                                              }
                                              setTimeout(function () {                             
                                                  fMove = false
                                              }, 50)
                                              
                                          });
                                          return false;
                                      })
                                      .on('click', function () {
                                          if (fMove) {
                                              return false
                                          }
                                      });
                                  } else {
                                      strWrap.addClass('no_drag');
                                  };
                              }
                          } else {
                              if (p.runshort) {
                                  strMove.css({
                                      left: strWrap.width()
                                  });
                                  var
                                  strMoveLeft = strWrap.width(),
                                      k1 = 0,
                                      timeFunc = function () {
                                          time = (strMove.width() + strMove.position().left) / strWrap.data('scrollamount') * 1000;
                                          return time;
                                      };
                                  var moveFunc = function () {
                                      var leftPos = -strMove.width();
                                      strMove.animate({
                                          left: leftPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              left: strWrap.width()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          }
                                      });
                                  };
                                  strWrap.data({
                                      moveF : moveFunc
                                  })
                                  if(!p.inverthover){
                                      moveFunc();
                                  }
                                  if (p.hoverstop) {
                                      strWrap.on(enterEvent, function () {
                                          $(this).addClass('str_active');
                                          strMove.stop(true);
                                      }).on(leaveEvent, function () {
                                          $(this).removeClass('str_active');
                                          $(this).off('mousemove');
                                          moveFunc();
                                      });
  
                                      if (p.drag) {
                                          strWrap.on('mousedown', function (e) {
                                              if(p.inverthover){
                                                  strMove.stop(true);
                                              }
                                              
                                              //drag
                                              var dragLeft;
                                              var dir = 1;
                                              var newX;
                                              var oldX = e.clientX;
                                              //drag
                                              
                                              strMoveLeft = strMove.position().left;
                                              k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                              $(this).on('mousemove', function (e) {
                                                  fMove = true;
                                                  
                                                  
                                                  //drag
                                                  newX = e.clientX;
                                                  if(newX > oldX){
                                                      dir = 1
                                                  }else{
                                                      dir = -1
                                                  }
                                                  oldX = newX	
                                                  dragLeft = k1 + (e.clientX - strWrap.offset().left);
                                                  
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = strWrap.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > strWrap.width() && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k1 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  
                                                  
                                                  strMove.stop(true).css({
                                                      left: dragLeft
                                                  });
                                                  
                                                  
                                                  
                                              }).on('mouseup', function () {
                                                  if(p.inverthover){
                                                      strMove.trigger('mouseenter')
                                                  }
                                                  $(this).off('mousemove');
                                                  setTimeout(function () {                             
                                                      fMove = false
                                                  }, 50)
                                              });
                                              return false;
                                          })
                                          .on('click', function () {
                                              if (fMove) {
                                                  return false
                                              }
                                          });
                                      } else {
                                          strWrap.addClass('no_drag');
                                      };
                                  }
                              } else {
                                  strWrap.addClass('str_static');
                              }
                          };
                      };
                      if (p.direction == 'right') {
                          strWrap.height(strMove.outerHeight())
                          strWrap.addClass('str_right');
                          strMove.css({
                              left: -strMove.width(),
                              right: 'auto'
                          })
                          
                          if (strMove.width() > strWrap.width()) {
                              var leftPos = strWrap.width();
                              strMove.css({
                                  left: 0
                              })
                              if (p.circular) {
                                  if (!p.xml) {
                                      circCloneHor()
                                      //Определяем крайнюю точку
                                      leftPos = strMove.width();
                                  }
                              }
                              
                              var
                              k2 = 0;
                              timeFunc = function () {
                                  var
                                  fullS = strWrap.width(), //крайняя точка
                                      time = (fullS / strWrap.data('scrollamount')) * 1000; //время
                                  if (parseFloat(strMove.css('left')) != 0) {
                                      fullS = (strMove.width() + strWrap.width());
                                      time = (fullS - (strMove.width() + parseFloat(strMove.css('left')))) / strWrap.data('scrollamount') * 1000;
                                  }
                                  return time;
                              };
                              var moveFunc = function () {
  
                                  if (loop != 0) {
                                      strMove.animate({
                                          left: leftPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              left: -strMove.width()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
                              };
                              strWrap.data({
                                  moveF : moveFunc
                              })
                      
                              if(!p.inverthover){
                                  moveFunc();
                              }
                              if (p.hoverstop) {
                                  strWrap.on(enterEvent, function () {
                                      $(this).addClass('str_active');
                                      strMove.stop(true);
                                  }).on(leaveEvent, function () {
                                      $(this).removeClass('str_active');
                                      $(this).off('mousemove');
                                      moveFunc();
                                  });
  
                                  if (p.drag) {
                                      
                                      strWrap.on('mousedown', function (e) {
                                          if(p.inverthover){
                                              strMove.stop(true);
                                          }
                                          
                                          
                                          //drag
                                          var dragLeft;
                                          var dir = 1;
                                          var newX;
                                          var oldX = e.clientX;
                                          //drag
                                          
                                          strMoveLeft = strMove.position().left;
                                          k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                          $(this).on('mousemove', function (e) {
                                              
                                              fMove = true;
                                              
                                              //drag
                                              newX = e.clientX;
                                              if(newX > oldX){
                                                  dir = 1
                                              }else{
                                                  dir = -1
                                              }
                                              oldX = newX	
                                              dragLeft = k2 + (e.clientX - strWrap.offset().left);
  
  
                                              if (!p.circular) {
  
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = strWrap.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > strWrap.width() && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                              }else{
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = 0;
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > 0 && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
      
                                              }
                                              
                                              strMove.stop(true).css({
                                                  left: dragLeft
                                              });
                                              
  
                                          }).on('mouseup', function () {
                                              if(p.inverthover){
                                                  strMove.trigger('mouseenter')
                                              }
                                              $(this).off('mousemove');
                                              setTimeout(function () {                             
                                                  fMove = false
                                              }, 50)
                                          });
                                          return false;
                                      })
                                      .on('click', function () {
                                          if (fMove) {
                                              return false
                                          }
                                      });
                                  } else {
                                      strWrap.addClass('no_drag');
                                  };
                              }
                          } else {
                                                          
                              if (p.runshort) {
                                  
                                  var k2 = 0;
                                  var timeFunc = function () {
                                      time = (strWrap.width() - strMove.position().left) / strWrap.data('scrollamount') * 1000;
                                      return time;
                                  };
                                  var moveFunc = function () {
                                      var leftPos = strWrap.width();
                                      strMove.animate({
                                          left: leftPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              left: -strMove.width()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
  
                                  strWrap.data({
                                      moveF : moveFunc
                                  })
  
                                  if(!p.inverthover){
                                      moveFunc();
                                  }
                                  if (p.hoverstop) {
                                      strWrap.on(enterEvent, function () {
                                          $(this).addClass('str_active');
                                          strMove.stop(true);
                                      }).on(leaveEvent, function () {
                                          $(this).removeClass('str_active');
                                          $(this).off('mousemove');
                                          moveFunc();
                                      });
  
                                      if (p.drag) {
                                          strWrap.on('mousedown', function (e) {
                                              if(p.inverthover){
                                                  strMove.stop(true);
                                              }
                                              
                                              //drag
                                              var dragLeft;
                                              var dir = 1;
                                              var newX;
                                              var oldX = e.clientX;
                                              //drag
                                              
                                              strMoveLeft = strMove.position().left;
                                              k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                              $(this).on('mousemove', function (e) {
                                                  fMove = true;
                                                  
                                                  
                                                  
                                                  //drag
                                                  newX = e.clientX;
                                                  if(newX > oldX){
                                                      dir = 1
                                                  }else{
                                                      dir = -1
                                                  }
                                                  oldX = newX	
                                                  dragLeft = k2 + (e.clientX - strWrap.offset().left);
                                                  
                                                  if(dragLeft < -strMove.width() && dir < 0){
                                                      dragLeft = strWrap.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
                                                  if(dragLeft > strWrap.width() && dir > 0){
                                                      dragLeft = -strMove.width();
                                                      strMoveLeft = strMove.position().left;
                                                      k2 = strMoveLeft - (e.clientX - strWrap.offset().left);
                                                  }
  
                                                  strMove.stop(true).css({
                                                      left:dragLeft
                                                  });
                                                  
                                              }).on('mouseup', function () {
                                                  if(p.inverthover){
                                                      strMove.trigger('mouseenter')
                                                  }
                                                  $(this).off('mousemove');
                                                  setTimeout(function () {                             
                                                      fMove = false
                                                  }, 50)
                                              });
                                              return false;
                                          })
                                          .on('click', function () {
                                              if (fMove) {
                                                  return false
                                              }
                                          });
                                      } else {
                                          strWrap.addClass('no_drag');
                                      };
                                  }
                              } else {
                                  strWrap.addClass('str_static');
                              }
                          };
                      };
                      if (p.direction == 'up') {
                          strWrap.addClass('str_vertical');
                          
                          if (strMove.height() > strWrap.height()) {
                              var topPos = -strMove.height();
                              if (p.circular) {
                                  if (!p.xml) {
                                      circCloneVert();									
                                      topPos = -(strMove.height() + (strMove.height() - strWrap.height()));
                                  }
                              }
                              if (p.xml) {
                                  strMove.css({
                                      top:strWrap.height()	
                                  })
                              }
                              var
                              k2 = 0;
                              timeFunc = function () {
                                  var
                                  fullS = Math.abs(topPos),
                                      time = (fullS / strWrap.data('scrollamount')) * 1000;
                                  if (parseFloat(strMove.css('top')) != 0) {
                                      fullS = (fullS + strWrap.height());
                                      time = (fullS - (strWrap.height() - parseFloat(strMove.css('top')))) / strWrap.data('scrollamount') * 1000;
                                  }
                                  
                                  return time;
                              };
                              var moveFunc = function () {
                                  if (loop != 0) {
                                      strMove.animate({
                                          top: topPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              top: strWrap.height()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
                              };
                              
                              strWrap.data({
                                  moveF : moveFunc
                              })
                              
                              if(!p.inverthover){
                                  moveFunc();
                              }
                              if (p.hoverstop) {
                                  strWrap.on(enterEvent, function () {
                                      $(this).addClass('str_active');
                                      strMove.stop(true);
                                  }).on(leaveEvent, function () {
                                      $(this).removeClass('str_active');
                                      $(this).off('mousemove');
                                      moveFunc();
                                  });
  
                                  if (p.drag) {
                                      strWrap.on('mousedown', function (e) {
                                          if(p.inverthover){
                                              strMove.stop(true);
                                          }
                                          
                                          //drag
                                          var dragTop;
                                          var dir = 1;
                                          var newY;
                                          var oldY = e.clientY;
                                          //drag
                                          
                                          
                                          strMoveTop = strMove.position().top;
                                          k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                          $(this).on('mousemove', function (e) {
                                              
                                              fMove = true;
  
                                              //drag
                                              newY = e.clientY;
                                              if(newY > oldY){
                                                  dir = 1
                                              }else{
                                                  if(newY < oldY){
                                                      dir = -1
                                                  }
                                              }
                                              oldY = newY	
                                              dragTop = k2 + e.clientY - strWrap.offset().top;
  
  
                                              if (!p.circular){
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = strWrap.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > strWrap.height() && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }	
                                              }else{
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = 0;
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > 0 && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                              }
  
  
                                              strMove.stop(true).css({
                                                  top: dragTop
                                              });
                                              //drag
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                              
                                          }).on('mouseup', function () {
                                              if(p.inverthover){
                                                  strMove.trigger('mouseenter')
                                              }
                                              $(this).off('mousemove');
                                              setTimeout(function () {                             
                                                  fMove = false
                                              }, 50)
                                          });
                                          return false;
                                      })
                                      .on('click', function () {
                                          if (fMove) {
                                              return false
                                          }
                                      });
                                  } else {
                                      strWrap.addClass('no_drag');
                                  };
                              }
                          } else {
                              if (p.runshort) {
                                  strMove.css({
                                      top: strWrap.height()
                                  });
                                  var k2 = 0;
                                  var timeFunc = function () {
                                      
                                      time = (strMove.height() + strMove.position().top) / strWrap.data('scrollamount') * 1000;
                                      
                                      return time;
                                  };
                                  var moveFunc = function () {
                                      var topPos = -strMove.height();
                                      strMove.animate({
                                          top: topPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              top: strWrap.height()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
                                  strWrap.data({
                                      moveF : moveFunc
                                  })
                                  if(!p.inverthover){
                                      moveFunc();
                                  }
                                  if (p.hoverstop) {
                                      strWrap.on(enterEvent, function () {
                                          $(this).addClass('str_active');
                                          strMove.stop(true);
                                      }).on(leaveEvent, function () {
                                          $(this).removeClass('str_active');
                                          $(this).off('mousemove');
                                          moveFunc();
                                      });
  
                                      if (p.drag) {
                                          strWrap.on('mousedown', function (e) {
                                              if(p.inverthover){
                                                  strMove.stop(true);
                                              }
                                              
                                              //drag
                                              var dragTop;
                                              var dir = 1;
                                              var newY;
                                              var oldY = e.clientY;
                                              //drag
                                              
                                              strMoveTop = strMove.position().top;
                                              k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                              $(this).on('mousemove', function (e) {
                                                  
                                                  
                                                  fMove = true;
  
                                                  //drag
                                                  newY = e.clientY;
                                                  if(newY > oldY){
                                                      dir = 1
                                                  }else{
                                                      if(newY < oldY){
                                                          dir = -1
                                                      }
                                                  }
                                                  oldY = newY	
                                                  dragTop = k2 + e.clientY - strWrap.offset().top;
                                                  
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = strWrap.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > strWrap.height() && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }	
                                                  //*drag
                                                  
                                                  strMove.stop(true).css({
                                                      top: dragTop
                                                  });
                                                  
                                                  
                                              }).on('mouseup', function () {
                                                  if(p.inverthover){
                                                      strMove.trigger('mouseenter')
                                                  }
                                                  $(this).off('mousemove');
                                                  setTimeout(function () {                             
                                                      fMove = false
                                                  }, 50)
                                              });
                                              return false;
                                          })
                                          .on('click', function () {
                                              if (fMove) {
                                                  return false
                                              }
                                          });
                                      } else {
                                          strWrap.addClass('no_drag');
                                      };
                                  }
                              } else {
                                  strWrap.addClass('str_static');
                              }
                          };
                      };
                      if (p.direction == 'down') {
  
                          strWrap.addClass('str_vertical').addClass('str_down');
                          strMove.css({
                              top: -strMove.height(),
                              bottom: 'auto'
                          })
                          if (strMove.height() > strWrap.height()) {
                              var topPos = strWrap.height();
                              if (p.circular) {
                                  if (!p.xml) {
                                      circCloneVert();									
                                      topPos = strMove.height();
                                  }
                              }
                              if (p.xml) {
                                  strMove.css({
                                      top:-strMove.height()
                                  })
                              }
                              var
                              k2 = 0;
                              timeFunc = function () {
                                  var
                                  fullS = strWrap.height(), //крайняя точка
                                      time = (fullS / strWrap.data('scrollamount')) * 1000; //время
  
                                  if (parseFloat(strMove.css('top')) != 0) {
                                      fullS = (strMove.height() + strWrap.height());
                                      time = (fullS - (strMove.height() + parseFloat(strMove.css('top')))) / strWrap.data('scrollamount') * 1000;
                                  }
                                  return time;
                              };
                              var moveFunc = function () {
  
                                  if (loop != 0) {
                                      strMove.animate({
                                          top: topPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              top: -strMove.height()
                                          });
                                          if (loop == -1) {
  
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
                              };
                              strWrap.data({
                                  moveF : moveFunc
                              })
                              if(!p.inverthover){
                                  moveFunc();
                              }
                              if (p.hoverstop) {
                                  strWrap.on(enterEvent, function () {
                                      $(this).addClass('str_active');
                                      strMove.stop(true);
                                  }).on(leaveEvent, function () {
                                      $(this).removeClass('str_active');
                                      $(this).off('mousemove');
                                      moveFunc();
                                  });
  
                                  if (p.drag) {
                                      strWrap.on('mousedown', function (e) {
                                          if(p.inverthover){
                                              strMove.stop(true);
                                          }
                                          
                                          //drag
                                          var dragTop;
                                          var dir = 1;
                                          var newY;
                                          var oldY = e.clientY;
                                          //drag
                                          
                                          
                                          strMoveTop = strMove.position().top;
                                          k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                          $(this).on('mousemove', function (e) {
                                              
                                              fMove = true;
                                              
                                              //drag
                                              newY = e.clientY;
                                              if(newY > oldY){
                                                  dir = 1
                                              }else{
                                                  if(newY < oldY){
                                                      dir = -1
                                                  }
                                              }
                                              oldY = newY	
                                              dragTop = k2 + e.clientY - strWrap.offset().top;
  
  
                                              if (!p.circular){
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = strWrap.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > strWrap.height() && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }	
                                              }else{
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = 0;
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > 0 && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                              }
  
  
                                              strMove.stop(true).css({
                                                  top: dragTop
                                              });
                                              //drag
  
  
  
                                          }).on('mouseup', function () {
                                              if(p.inverthover){
                                                  strMove.trigger('mouseenter')
                                              }
                                              $(this).off('mousemove');
                                              setTimeout(function () {                             
                                                  fMove = false
                                              }, 50)
                                          });
                                          return false;
                                      })
                                      .on('click', function () {
                                          if (fMove) {
                                              return false
                                          }
                                      });
                                  } else {
                                      strWrap.addClass('no_drag');
                                  };
                              }
                          } else {
                              if (p.runshort) {
                                  var k2 = 0;
                                  var timeFunc = function () {
                                      time = (strWrap.height() - strMove.position().top) / strWrap.data('scrollamount') * 1000;
                                      return time;
                                  };
                                  var moveFunc = function () {
                                      var topPos = strWrap.height();
                                      strMove.animate({
                                          top: topPos
                                      }, timeFunc(), 'linear', function () {
                                          $(this).css({
                                              top: -strMove.height()
                                          });
                                          if (loop == -1) {
                                              setTimeout(moveFunc, p.scrolldelay);
                                          } else {
                                              loop--;
                                              setTimeout(moveFunc, p.scrolldelay);
                                          };
                                      });
                                  };
                                  strWrap.data({
                                      moveF : moveFunc
                                  })
                                  if(!p.inverthover){
                                      moveFunc();
                                  }
                                  if (p.hoverstop) {
                                      strWrap.on(enterEvent, function () {
                                          $(this).addClass('str_active');
                                          strMove.stop(true);
                                      }).on(leaveEvent, function () {
                                          $(this).removeClass('str_active');
                                          $(this).off('mousemove');
                                          moveFunc();
                                      });
  
                                      if (p.drag) {
                                          strWrap.on('mousedown', function (e) {
                                              if(p.inverthover){
                                                  strMove.stop(true);
                                              }
                                              
                                              //drag
                                              var dragTop;
                                              var dir = 1;
                                              var newY;
                                              var oldY = e.clientY;
                                              //drag
                                              
                                              strMoveTop = strMove.position().top;
                                              k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                              $(this).on('mousemove', function (e) {
                                                  fMove = true;
  
                                                  //drag
                                                  newY = e.clientY;
                                                  if(newY > oldY){
                                                      dir = 1
                                                  }else{
                                                      if(newY < oldY){
                                                          dir = -1
                                                      }
                                                  }
                                                  oldY = newY	
                                                  dragTop = k2 + e.clientY - strWrap.offset().top;
      
      
                                                  if(dragTop < -strMove.height() && dir < 0){
                                                      dragTop = strWrap.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }
                                                  if(dragTop > strWrap.height() && dir > 0){
                                                      dragTop = -strMove.height();
                                                      strMoveTop = strMove.position().top;
                                                      k2 = strMoveTop - (e.clientY - strWrap.offset().top);
                                                  }	
                                                  //*drag
                                                  
                                                  strMove.stop(true).css({
                                                      top: dragTop
                                                  });
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                                  
                                              }).on('mouseup', function () {
                                                  if(p.inverthover){
                                                      strMove.trigger('mouseenter')
                                                  }
                                                  $(this).off('mousemove');
                                                  setTimeout(function () {                             
                                                      fMove = false
                                                  }, 50)
                                              })
                                              return false;
                                          })
                                          .on('click', function () {
                                              if (fMove) {
                                                  return false
                                              }
                                          });
                                      } else {
                                          strWrap.addClass('no_drag');
                                      };
                                  }
                              } else {
                                  strWrap.addClass('str_static');
                              }
                          };
                      };
                      
                      
                      
                      
                  }
                  if (p.xml) {
                      $.ajax({
                          url: p.xml,
                          dataType: "xml",
                          success: function (xml) {
                              var xmlTextEl = $(xml).find('text');
                              var xmlTextLength = xmlTextEl.length;
                              for(var i = 0; i < xmlTextLength; i++){
                                  var xmlElActive = xmlTextEl.eq(i);
                                  var xmlElContent = xmlElActive.text();
                                  var xmlItemEl = $('<span>').text(xmlElContent).appendTo(strWrap);
                                  
                                  if(p.direction == 'left' || p.direction == 'right'){
                                      xmlItemEl.css({display:'inline-block',textAlign:'right'});	
                                      if(i > 0){
                                          xmlItemEl.css({width:strWrap.width()+xmlItemEl.width()});	
                                      }
                                  }
                                  if(p.direction == 'down' || p.direction == 'up'){
                                      xmlItemEl.css({display:'block',textAlign:'left'});	
                                          if(i > 0){
                                              xmlItemEl.css({paddingTop:strWrap.height()});
                                          }
                                  }
                                  
                              }
                              code();
                          }
                      });
                  } else {
                      code();
                  }
                  strWrap.data({
                      ini:code,
                      startheight: startHeight	
                  })
                  
                  
                  
                  
              });
          },
          update: function () {
              var el = $(this);
              var str_origin = $('.str_origin',el);
              var str_move_clone = $('.str_move_clone',el);
              str_origin.stop(true);
              str_move_clone.remove();
              el.data('ini')();
          },
          destroy: function () {
              
              var el = $(this);
              var elMove = $('.str_move',el);
              var startHeight = el.data('startheight');
              
              $('.str_move_clone',el).remove();
              el.off('mouseenter');
              el.off('mousedown');
              el.off('mouseup');
              el.off('mouseleave');
              el.off('mousemove');
              el.removeClass('noStop').removeClass('str_vertical').removeClass('str_active').removeClass('no_drag').removeClass('str_static').removeClass('str_right').removeClass('str_down');
              
              var elStyle = el.attr('style'); 
              if(elStyle){
                  var styleArr = elStyle.split(';');
                  for(var i=0; i < styleArr.length; i++){
                      var str = $.trim(styleArr[i]);
                      var tested =  str.search(/^height/g);
                      if(tested != -1){
                          styleArr[i] = '';	
                      }
                  }
                  var newArr = styleArr.join(';');
                  var newStyle =  newArr.replace(/;+/g,';')
              
                  if(newStyle == ';'){
                      el.removeAttr('style');	
                  }else{
                      el.attr('style',newStyle);	
                  }
                  
                  if(startHeight){
                      el.css({height:startHeight})	
                  }
              }
              elMove.stop(true);
  
              if(elMove.length){
                  var context = elMove.html();
                  elMove.remove();
                  el.html(context);
              }
      
          },
          pause: function(){	
              var el = $(this);
              var elMove = $('.str_move',el);
              elMove.stop(true);
          }, 
          play: function(){
              var el = $(this);
              $(this).off('mousemove');
              el.data('moveF')();	
          }
          
      };
      $.fn.liMarquee = function (method) {
          if (methods[method]) {
              return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
          } else if (typeof method === 'object' || !method) {
              return methods.init.apply(this, arguments);
          } else {
              $.error('Метод ' + method + ' в jQuery.liMarquee не существует');
          }
      };
  })(jQuery);;
  
  (function ($, Drupal, settings) {
    "use strict";
    Drupal.behaviors.frontaboutus13 = {
      attach: function (context) {
        $(context) .find(".front-aboutus-bottom").once("front-aboutus-bottom").each(function (){
          // $('.front-compantyimg-owl').liMarquee();
        })
      }
    };
  
    $(function (){
      var imgWrapper =  $('.front-aboutus-bottom').html();
      $('.front-aboutus-bottom').append(imgWrapper);
      setTimeout(function (){
        $('.front-aboutus-bottom').liMarquee();
      },2000)
  
  
    })
  
  
  })(jQuery, Drupal, drupalSettings);
  
  
  
  
  ;
  /*!
  Waypoints - 4.0.0
  Copyright © 2011-2015 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  */
  !function () { "use strict"; function t(o) { if (!o) throw new Error("No options passed to Waypoint constructor"); if (!o.element) throw new Error("No element option passed to Waypoint constructor"); if (!o.handler) throw new Error("No handler option passed to Waypoint constructor"); this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, o), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = o.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1 } var e = 0, i = {}; t.prototype.queueTrigger = function (t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function (t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function () { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function () { return this.enabled = !1, this }, t.prototype.enable = function () { return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function () { return this.group.next(this) }, t.prototype.previous = function () { return this.group.previous(this) }, t.invokeAll = function (t) { var e = []; for (var o in i) e.push(i[o]); for (var n = 0, r = e.length; r > n; n++)e[n][t]() }, t.destroyAll = function () { t.invokeAll("destroy") }, t.disableAll = function () { t.invokeAll("disable") }, t.enableAll = function () { t.invokeAll("enable") }, t.refreshAll = function () { t.Context.refreshAll() }, t.viewportHeight = function () { return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function () { return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function () { return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function () { return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t }(), function () { "use strict"; function t(t) { window.setTimeout(t, 1e3 / 60) } function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, o[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler() } var i = 0, o = {}, n = window.Waypoint, r = window.onload; e.prototype.add = function (t) { var e = t.options.horizontal ? "horizontal" : "vertical"; this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function () { var t = this.Adapter.isEmptyObject(this.waypoints.horizontal), e = this.Adapter.isEmptyObject(this.waypoints.vertical); t && e && (this.adapter.off(".waypoints"), delete o[this.key]) }, e.prototype.createThrottledResizeHandler = function () { function t() { e.handleResize(), e.didResize = !1 } var e = this; this.adapter.on("resize.waypoints", function () { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) }) }, e.prototype.createThrottledScrollHandler = function () { function t() { e.handleScroll(), e.didScroll = !1 } var e = this; this.adapter.on("scroll.waypoints", function () { (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t)) }) }, e.prototype.handleResize = function () { n.Context.refreshAll() }, e.prototype.handleScroll = function () { var t = {}, e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } }; for (var i in e) { var o = e[i], n = o.newScroll > o.oldScroll, r = n ? o.forward : o.backward; for (var s in this.waypoints[i]) { var a = this.waypoints[i][s], l = o.oldScroll < a.triggerPoint, h = o.newScroll >= a.triggerPoint, p = l && h, u = !l && !h; (p || u) && (a.queueTrigger(r), t[a.group.id] = a.group) } } for (var c in t) t[c].flushTriggers(); this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function () { return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function (t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function () { return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function () { var t = []; for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]); for (var o = 0, n = t.length; n > o; o++)t[o].destroy() }, e.prototype.refresh = function () { var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), o = {}; this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } }; for (var r in t) { var s = t[r]; for (var a in this.waypoints[r]) { var l, h, p, u, c, d = this.waypoints[r][a], f = d.options.offset, w = d.triggerPoint, y = 0, g = null == w; d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f), d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, d.triggerPoint = y + l - f, h = w < s.oldScroll, p = d.triggerPoint >= s.oldScroll, u = h && p, c = !h && !p, !g && u ? (d.queueTrigger(s.backward), o[d.group.id] = d.group) : !g && c ? (d.queueTrigger(s.forward), o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward), o[d.group.id] = d.group) } } return n.requestAnimationFrame(function () { for (var t in o) o[t].flushTriggers() }), this }, e.findOrCreateByElement = function (t) { return e.findByElement(t) || new e(t) }, e.refreshAll = function () { for (var t in o) o[t].refresh() }, e.findByElement = function (t) { return o[t.waypointContextKey] }, window.onload = function () { r && r(), e.refreshAll() }, n.requestAnimationFrame = function (e) { var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t; i.call(window, e) }, n.Context = e }(), function () { "use strict"; function t(t, e) { return t.triggerPoint - e.triggerPoint } function e(t, e) { return e.triggerPoint - t.triggerPoint } function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), o[this.axis][this.name] = this } var o = { vertical: {}, horizontal: {} }, n = window.Waypoint; i.prototype.add = function (t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function () { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function () { for (var i in this.triggerQueues) { var o = this.triggerQueues[i], n = "up" === i || "left" === i; o.sort(n ? e : t); for (var r = 0, s = o.length; s > r; r += 1) { var a = o[r]; (a.options.continuous || r === o.length - 1) && a.trigger([i]) } } this.clearTriggerQueues() }, i.prototype.next = function (e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints), o = i === this.waypoints.length - 1; return o ? null : this.waypoints[i + 1] }, i.prototype.previous = function (e) { this.waypoints.sort(t); var i = n.Adapter.inArray(e, this.waypoints); return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function (t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function (t) { var e = n.Adapter.inArray(t, this.waypoints); e > -1 && this.waypoints.splice(e, 1) }, i.prototype.first = function () { return this.waypoints[0] }, i.prototype.last = function () { return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function (t) { return o[t.axis][t.name] || new i(t) }, n.Group = i }(), function () { "use strict"; function t(t) { this.$element = e(t) } var e = window.jQuery, i = window.Waypoint; e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) { t.prototype[i] = function () { var t = Array.prototype.slice.call(arguments); return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function (i, o) { t[o] = e[o] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t }(), function () { "use strict"; function t(t) { return function () { var i = [], o = arguments[0]; return t.isFunction(arguments[0]) && (o = t.extend({}, arguments[1]), o.handler = arguments[0]), this.each(function () { var n = t.extend({}, o, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i } } var e = window.Waypoint; window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto)) }();;
  /*!
  * jquery.countup.js 1.0.3
  *
  * Copyright 2016, Adrián Guerra Marrero http://agmstudio.io @AGMStudio_io
  * Released under the MIT License
  *
  * Date: Oct 27, 2016
  */
  (function( $ ){
    "use strict";
  
    $.fn.countUp = function( options ) {
  
      // Defaults
      var settings = $.extend({
          'time': 2000,
          'delay': 10,
           right:true,
      }, options);
  
      return this.each(function(){
  
          // Store the object
          var $this = $(this);
          var $settings = settings;
  
          var counterUpper = function() {
              if(!$this.data('counterupTo')) {
                  $this.data('counterupTo',$this.text());
              }
              var time = parseInt($this.data("counter-time")) > 0 ? parseInt($this.data("counter-time")) : $settings.time;
              var delay = parseInt($this.data("counter-delay")) > 0 ? parseInt($this.data("counter-delay")) : $settings.delay;
              var divisions = time / delay;
              var num = $this.data('counterupTo');
              var nums = [num];
              var isComma = /[0-9]+,[0-9]+/.test(num);
              num = num.replace(/,/g, '');
              var isInt = /^[0-9]+$/.test(num);
              var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
              var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
  
              // Generate list of incremental numbers to display
              for (var i = divisions; i >= 1; i--) {
  
                  // Preserve as int if input was int
                  var newNum = parseInt(Math.round(num / divisions * i));
  
                  // Preserve float if input was float
                  if (isFloat) {
                      newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                  }
  
                  // Preserve commas if input had commas
                  if (isComma) {
                      while (/(\d+)(\d{3})/.test(newNum.toString())) {
                          newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                      }
                  }
  
                  nums.unshift(newNum);
              }
  
              $this.data('counterup-nums', nums);
              $this.text('0');
  
              // Updates the number until we're done
              var f = function() {
                  $this.text($this.data('counterup-nums').shift());
                  if ($this.data('counterup-nums').length) {
                      setTimeout($this.data('counterup-func'),delay);
                  } else {
                      delete $this.data('counterup-nums');
                      $this.data('counterup-nums', null);
                      $this.data('counterup-func', null);
                  }
              };
              $this.data('counterup-func', f);
  
              // Start the count up
              setTimeout($this.data('counterup-func'),delay);
          };
  
          // Perform counts when the element gets into view
        if(settings.right){
          counterUpper();
        }else {
          $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
        }
  
      });
  
    };
  
    if($('.counter').length>0){
      $('.counter').countUp();
    }
  
  })( jQuery );
  ;
  (function ($, Drupal, settings) {
    "use strict";
  
    Drupal.behaviors.frontProduct2 = {
      attach: function (context) {
        $(context) .find(".block-frontproduct2 .carouel-common").once("front-product1").each(function (){
          var owlSetting = $(this).data('settings');
          if(!owlSetting){
            return
          }
  
          var responsive = {}
  
          if(owlSetting.xs){
            responsive[0] = {
              items: owlSetting.xs,
              nav:false,
              margin: 10,
            }
          }
  
          if(owlSetting.sm){
            responsive[750] = {
              items: owlSetting.sm,
              margin: 10,
            }
          }
  
          if(owlSetting.md){
            responsive[1024] = {
              items: owlSetting.md,
              margin: 15,
            }
          }
          if(owlSetting.lg){
            responsive[1200] = {
              items: owlSetting.lg,
              nav: Boolean(owlSetting.nav),
              margin: 18,
            }
          }
          if(owlSetting.xl){
            responsive[1400] = {
              items: owlSetting.xl,
              margin: 20,
            }
          }
  
          var owl =  $('.block-frontproduct2 .owl-carousel').owlCarousel({
            loop: Boolean(owlSetting.loop),
            autoplayTimeout:owlSetting.autoplayTimeout,
            autoplay: Boolean(owlSetting.autoPlay),
            dotsEach: 1,
            navRewind: false,
            nav: Boolean(owlSetting.nav),
            dots:Boolean(owlSetting.dots),
            autoplayHoverPause:true,
            responsive: responsive,
          });
  
        })
      }
    };
    Drupal.behaviors.front_product_tab2 = {
      attach: function (context) {
  
        $(context) .find(".block-frontproduct2 .owl_product_tab").once("owl_product_tab1").each(function (){
          var owl =  $('.block-frontproduct2 .owl_product_tab').owlCarousel({
            items: 1,
            margin: 10,
            loop: true,
            autoplay: false,
            dotsEach: 1,
            navRewind: false,
            nav: false,
            dots:false,
          });
          $('.block-frontproduct2 .product-tab-menu li').click(function (){
            var index = $(this).index();
            owl.trigger('to.owl.carousel',index);
            $('.block-frontproduct2 .product-tab-menu li').removeClass('active-color active');
            $(this).addClass('active-color active');
          })
  
          owl.on('translated.owl.carousel', function (event) {
            var index =  $(context).find(".block-frontproduct2 .owl_product_tab").find('.owl-item.active').data('id');
            $('.block-frontproduct2 .product-tab-menu li').removeClass('active-color active');
            $('.block-frontproduct2 .product-tab-menu li').eq(index-1).addClass('active-color active');
          })
  
        })
      }
    };
    Drupal.behaviors.frontLeftTerm2 = {
      attach:function (context){
  
        var selectVal = $(".block-frontproduct2 .front-product-view .select-wrapper select").val();
  
        $('.block-frontproduct2 .front-product-term li').removeClass('active  on');
        $('.block-frontproduct2 .front-product-term li .first-term-a').removeClass('active-bg-color');
  
        $('.block-frontproduct2 .front-product-term li').each(function () {
          if ($(this).data('id') == selectVal) {
  
            if($(this).hasClass('second-term-level')){
              $(this).addClass('active-color');
              $(this).parent().parent().addClass('active on');
              $(this).parent().parent().find('.first-term-a').addClass('active-bg-color')
            }
            $(this).addClass('active');
            $(this).find('.first-term-a').addClass('active-bg-color active');
          }
        });
  
  
        $(document).on('click', '.block-frontproduct2 .front-product-term.async_render li', function (e) {
          e.stopPropagation();
          var $id = $(this).data('id');
          $('.block-frontproduct2 .front-product-view .select-wrapper .form-select').val($id);
          $('.block-frontproduct2 .front-product-view .form-actions .js-form-submit').trigger('click');
          return false;
        });
  
  
        $('.block-frontproduct2 .front-product-term .first-term-level i').click(function (e){
          e.stopPropagation();
          $(this).parent().parent().addClass('on').siblings().removeClass('on')
          return false;
  
        })
  
  
      }
    }
  
    Drupal.behaviors.frontTop2Menu2 = {
      attach: function (context) {
  
        var selectVal = $(".block-frontproduct2 .front-product-view .select-wrapper select").val();
        $('.block-frontproduct2 .front-product-view .term-menu .categories .click-item').each(function () {
          if ($(this).data('id') == selectVal) {
            $('.block-frontproduct2 .click-item').removeClass('isActive active-bg-color border-color active-color')
  
            if($(this).hasClass('term-menu-name')){
              $(this).addClass('isActive active-bg-color border-color')
            }else {
              $(this).addClass('active-color');
              $(this).parent().parent().find('.term-menu-name').addClass('isActive active-bg-color border-color')
            }
  
          }
        });
      }
    };
  
    Drupal.behaviors.frontTopMenu2 = {
      attach: function (context) {
        var selectVal = $(".block-frontproduct2 .front-product-view .select-wrapper select").val();
        $('.block-frontproduct2 .front-product-view .term-menu .categories li').each(function () {
          if ($(this).data('id') == selectVal) {
            $(this).addClass('isActive active-bg-color').siblings().removeClass('isActive active-bg-color');
          }
        });
  
        // 首页新闻Tabs切换逻辑
        $(document).on('click', '.block-frontproduct2 .front-product-view .term-menu .categories li', function () {
          var $id = $(this).data('id');
          $('.block-frontproduct2 .front-product-view .select-wrapper .form-select').val($id);
          $('.block-frontproduct2 .front-product-view .form-actions .js-form-submit').trigger('click');
          //销毁动画事件
        });
      }
    };
  })
  (jQuery, Drupal, drupalSettings);
  ;
  /**
   * @file
   */
  
  
  (function ($) {
  
  
      $(window).on("load", function() {
        if($(".banner-slider-wrapper").length > 0){
          var $this = $(".banner-slider-wrapper");
          var $this_settings = $.parseJSON($this.attr('data-settings'));
          setTimeout(function(){
            bannerOwlCarousel($this,$this_settings)
          },1000)
        }
  
      });
  
  
  
  
    function  bannerOwlCarousel(ele,$this_settings){
        try {
          var owl = ele.owlCarousel({
                navText:["<span class='iconfont icon-arrowleft'></span>","<span class='iconfont icon-arrowright'></span>"],
                loop: $this_settings.loop,
                dots: $this_settings.dots,
                autoplay: $this_settings.autoPlay,
                nav:$this_settings.nav,
                autoplayTimeout: $this_settings.autoplayTimeout,
                smartSpeed: 1700,
                lazyLoad:true,
                autoplayHoverPause: $this_settings.autoplayHoverPause,
                items:1,
            });
  
            $('.banner-wrapper .owl-item').addClass("normal-owl-item")
            $(".banner-wrapper .owl-stage .owl-item").each(function (){
              let video = $(this).find('video')
              if(!video.attr('src')){
                video.attr('src',video.data('src'))
              }
                if ($(this).hasClass("active")){
                    $(".banner-wrapper .owl-stage .owl-item").find('video')[0].pause()
  
  
                    if($(this).find('video').length > 0){
                      $(this).find('video')[0].play()
                        // console.log('有视频')
                        owl.trigger('stop.owl.autoplay');
  
                        $(this).find('video').on("ended",()=>{
                            // console.log('视频播放完了')
                            owl.trigger('play.owl.autoplay');
                        })
  
                    }
  
                }
            })
            owl.on('translated.owl.carousel', function (event) {
  
                $(".banner-wrapper .owl-stage .owl-item").each(function (){
                  let video = $(this).find('video')
                  if(!video.attr('src')){
                    video.attr('src',video.data('src'))
                  }
                    if ($(this).hasClass("active")){
                        $(".banner-wrapper .owl-stage .owl-item").find('video')[0].pause()
  
                        if($(this).find('video').length > 0){
                          $(this).find('video')[0].play()
                            // console.log('有视频2')
                            owl.trigger('stop.owl.autoplay');
  
                            $(this).find('video').on("ended",()=>{
                                // console.log('视频播放完了2')
                                owl.trigger('play.owl.autoplay');
                            })
  
                        }
  
                    }
                })
            })
  
            $(window).resize(function() {
                console.info("resize----11111");
                $(".banner-wrapper").removeAttr('style');
            });
        }catch (e){
            setTimeout(function (){
                bannerOwlCarousel(ele,$this_settings)
            },500)
  
        }
  
  
  
    }
  
  })(jQuery);
  ;
  (function ($, Drupal, settings) {
    Drupal.behaviors.showLanguageImg = {
      attach: function (context) {
        $('.language_header', context).once('language_header').each(function () {
          $('.language_header', context).hover(function (){
            var list = $('.language_list li img');
            list.each(function (item,index){
              let ele = $(this);
              if(!ele.attr('src')){
                ele.attr('src',ele.data('src'))
              }
            })
              var list1 = $('.language_list li a');
              list1.each(function (item,index){
                  let ele = $(this);
                  if(!ele.attr('rel')){
                      ele.attr('rel','nofollow')
                  }
              })
          })
  
          $('.language_header', context).click(function (){
            var list = $('.language_list li img');
            list.each(function (item,index){
              let ele = $(this);
              if(!ele.attr('src')){
                ele.attr('src',ele.data('src'))
              }
            })
              var list1 = $('.language_list li a');
              list1.each(function (item,index){
                  let ele = $(this);
                  if(!ele.attr('rel')){
                      ele.attr('rel','nofollow')
                  }
              })
          })
        })
      }
    }
  
  })(jQuery, Drupal, drupalSettings);
  ;
  
  // ------------------------------------------------------------------------------ //
  //
  // Template name : Bootsnav - Multi Purpose Header
  // Categorie : Bootstrap Menu in CSS
  // Author : yuchen
  // Version : v.1.2
  // Created : 2016-06-02
  // Last update : 2021-03-02
  //
  // ------------------------------------------------------------------------------ //
  
  
  
  (function ($) {
    "use strict";
    var bootsnav = {
      initialize: function() {
        this.event();
        this.hoverDropdown();
        this.navbarSticky();
        this.navbarScrollspy();
      },
      event : function(){
        var getNav = $("nav.bootsnav");
        var navSticky = getNav.hasClass("navbar-sticky");
        if( navSticky ){
          getNav.wrap("<div class='wrap-sticky'></div>");
        }
  
        $(".bootsnav").addClass("on");
  
        // ------------------------------------------------------------------------------ //
        // Navbar Mobile
        // ------------------------------------------------------------------------------ //
        if( getNav.hasClass("navbar-mobile")){
          // Add Class to body
          $('.navbar-collapse-box').on('shown.bs.collapse', function() {
            $('.model-box').css('height','100%');
            $("body").addClass("side-right");
          });
          $('.navbar-collapse-box').on('hide.bs.collapse', function() {
            $('.model-box').css('height','0');
            $("body").removeClass("side-right");
          });
  
          $(window).on("resize", function(){
            $("body").removeClass("side-right");
          });
        }
      },
  
  
      // ------------------------------------------------------------------------------ //
      // Change dropdown to hover on dekstop
      // ------------------------------------------------------------------------------ //
      hoverDropdown : function(){
  
        var getNav = $("nav.bootsnav"),
          getWindow = $(window).width(),
          getHeight = $(window).height(),
          getIn = getNav.find("ul.nav").data("in"),
          getOut = getNav.find("ul.nav").data("out");
  
        if( getWindow < 1025 ){
          // Height of scroll navigation sidebar
          $(".scroller").css("height", "auto");
  
          // Disable mouseenter event
          $("nav.bootsnav ul.nav").find("li.dropdown").off("mouseenter");
          $("nav.bootsnav ul.nav").find("li.dropdown").off("mouseleave");
          $("nav.bootsnav ul.nav").find(".title").off("mouseenter");
          $("nav.bootsnav ul.nav").off("mouseleave");
          $(".navbar-collapse-box").removeClass("animated");
  
          // Enable click event
          $("nav.bootsnav ul.nav").each(function(){
            // $(".dropdown-menu", this).addClass("animated");
            $(".dropdown-menu", this).removeClass(getOut);
  
            // Dropdown Fade Toggle
            $("a.dropdown-toggle", this).off('click');
            $("a.dropdown-toggle", this).on('click', function (e) {
              e.stopPropagation();
              if(e.target.tagName!='A'){
                return false;
              }
            });
  
            $("a .iconfont", this).on('click', function (e) {
  
              e.stopPropagation();
  
  
              if(!$(this).parent().parent().parent().hasClass('dropdown-menu')){
                $('li.dropdown').find(".dropdown-menu").fadeOut();
              }
  
  
              $(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(getIn);
              $(this).closest("li.dropdown").first().toggleClass("on");
              if(e.target.tagName!='A'){
                return false;
              }
            });
  
            // Hidden dropdown action
            $('li.dropdown', this).each(function () {
              $(this).find(".dropdown-menu").stop().fadeOut();
              $(this).on('hidden.bs.dropdown', function () {
                $(this).find(".dropdown-menu").stop().fadeOut();
              });
              return false;
            });
  
  
          });
  
          // Hidden dropdown
          var cleanOpen = function(){
            $('li.dropdown', this).removeClass("on");
            $(".dropdown-menu", this).stop().fadeOut();
            $(".dropdown-menu", this).removeClass(getIn);
            $(".col-menu", this).removeClass("on");
            $(".col-menu .content", this).stop().fadeOut();
            $(".col-menu .content", this).removeClass(getIn);
          }
  
          // Hidden om mouse leave
          $("nav.bootsnav").on("mouseleave", function(){
            cleanOpen();
          });
  
          // Enable click atribute navigation
  
  
          // Toggle Bars
          $(".navbar-toggle").each(function(){
            $(this).off("click");
            $(this).on("click", function(){
              $(".fa", this).toggleClass("fa-bars");
              $(".fa", this).toggleClass("fa-times");
              cleanOpen();
            });
          });
  
        }else if( getWindow > 1024 ){
          // Height of scroll navigation sidebar
          $(".scroller").css("height", getHeight + "px");
  
          // Navbar Sidebar
          if( getNav.hasClass("navbar-sidebar")){
            // Hover effect Sidebar Menu
            $("nav.bootsnav ul.nav").each(function(){
              $("a.dropdown-toggle", this).off('click');
              $("a.dropdown-toggle", this).on('click', function (e) {
                e.stopPropagation();
              });
  
              $(".dropdown-menu", this).addClass("animated");
              $("li.dropdown", this).on("mouseenter", function(){
                $(".dropdown-menu", this).eq(0).removeClass(getOut);
                $(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(getIn);
                $(this).addClass("on");
                return false;
              });
  
              $(".col-menu").each(function(){
                $(".content", this).addClass("animated");
                $(".title", this).on("mouseenter", function(){
                  $(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(getIn);
                  $(this).closest(".col-menu").addClass("on");
                  return false;
                });
              });
  
              $(this).on("mouseleave", function(){
                $(".dropdown-menu", this).stop().removeClass(getIn);
                $(".dropdown-menu", this).stop().addClass(getOut).fadeOut();
                $(".col-menu", this).find(".content").stop().fadeOut().removeClass(getIn);
                $(".col-menu", this).removeClass("on");
                $("li.dropdown", this).removeClass("on");
                return false;
              });
            });
          }else{
            // Hover effect Default Menu
            $("nav.bootsnav ul.nav").each(function(){
              $("a.dropdown-toggle", this).off('click');
              $("a.dropdown-toggle", this).on('click', function (e) {
                e.stopPropagation();
              });
  
              $(".dropdown-menu", this).addClass("animated");
              $("li.dropdown", this).on("mouseenter", function(){
                $(".dropdown-menu", this).eq(0).removeClass(getOut);
                $(".dropdown-menu", this).eq(0).stop().fadeIn().addClass(getIn);
                $(this).addClass("on");
                return false;
              });
  
              $("li.dropdown", this).on("mouseleave", function(){
                $(".dropdown-menu", this).eq(0).removeClass(getIn);
                $(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(getOut);
                $(this).removeClass("on");
              });
  
              $(this).on("mouseleave", function(){
                $(".dropdown-menu", this).removeClass(getIn);
                $(".dropdown-menu", this).eq(0).stop().fadeOut().addClass(getOut);
                $("li.dropdown", this).removeClass("on");
                return false;
              });
            });
          }
  
  
        }
  
      },
  
      // ------------------------------------------------------------------------------ //
      // Navbar Sticky
      // ------------------------------------------------------------------------------ //
      navbarSticky : function(){
        var getNav = $("nav.bootsnav"),
          navSticky = getNav.hasClass("navbar-sticky");
  
        if( navSticky ){
  
          // Set Height Navigation
          var getHeight = getNav.height();
          $(".wrap-sticky").height(getHeight);
  
          // Windown on scroll
          var getOffset = $(".wrap-sticky").offset().top;
          $(window).on("scroll", function(){
            var scrollTop = $(window).scrollTop();
            if(scrollTop > getOffset){
              getNav.addClass("sticked");
            }else {
              getNav.removeClass("sticked");
            }
          });
        }
      },
  
      navbarScrollspy : function(){
        var navScrollSpy = $(".navbar-scrollspy"),
          $body   = $('body'),
          getNav = $('nav.bootsnav'),
          offset  = getNav.outerHeight();
  
        if( navScrollSpy.length ){
          $body.scrollspy({target: '.bootsnav', offset: offset });
  
          // Animation Scrollspy
          $('.scroll').on('click', function(event) {
            event.preventDefault();
  
            // Active link
            $('.scroll').removeClass("active");
            $(this).addClass("active");
  
            // Remove navbar collapse
            $(".navbar-collapse-box").removeClass("in");
  
            // Toggle Bars
            $(".navbar-toggle").each(function(){
              $(".fa", this).removeClass("fa-times");
              $(".fa", this).addClass("fa-bars");
            });
  
            // Scroll
            var scrollTop = $(window).scrollTop(),
              $anchor = $(this).find('a'),
              $section = $($anchor.attr('href')).offset().top,
              $window = $(window).width(),
              $minusDesktop = getNav.data("minus-value-desktop"),
              $minusMobile = getNav.data("minus-value-mobile"),
              $speed = getNav.data("speed");
            //992
            if( $window > 1024 ){
              var $position = $section - $minusDesktop;
            }else{
              var $position = $section - $minusMobile;
            }
  
            $('html, body').stop().animate({
              scrollTop: $position
            }, $speed);
          });
  
          // Activate Navigation
          var fixSpy = function() {
            var data = $body.data('bs.scrollspy');
            if (data) {
              offset = getNav.outerHeight();
              data.options.offset = offset;
              $body.data('bs.scrollspy', data);
              $body.scrollspy('refresh');
            }
          }
  
          // Activate Navigation on resize
          var resizeTimer;
          $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            var resizeTimer = setTimeout(fixSpy, 200);
          });
        }
      }
    };
  
    // Initialize
    $(document).ready(function(){
      bootsnav.initialize();
    });
  
    // Reset on resize
    $(window).on("resize", function(){
      // bootsnav.hoverDropdown();
      setTimeout(function(){
        bootsnav.navbarSticky();
      }, 500);
  
      // Toggle Bars
      $(".navbar-toggle").each(function(){
        $(".fa", this).removeClass("fa-times");
        $(".fa", this).addClass("fa-bars");
        $(this).removeClass("fixed");
      });
      $(".navbar-collapse-box").removeClass("in");
      $(".navbar-collapse-box").removeClass("on");
      $(".navbar-collapse-box").removeClass("bounceIn");
    });
  
    $('.menu_item_text').click(function (){
      if($(this).parent().attr('href')){
        window.location.href = $(this).parent().attr('href')
      }
  
    });
  
  }(jQuery));
  ;
  (function ($, Drupal, settings) {
  
    Drupal.behaviors.navbar2 = {
      attach: function () {
        if($(".block-navbar2 .navbar-wrapper").length){
          var headerScrollPos = 125;
          $(".block-navbar2 .navbar-wrapper").once("navbar-wrapper").each(function (){
            $('.block-navbar2 .navbar-wrapper').addClass('original').clone(true).insertAfter('.navbar-wrapper').addClass('stricked-menu').removeClass('original');
  
            // $('.stricked-menu').remove();
            if ($('.stricked-menu').length) {
  
              var stricky = $('.stricked-menu');
              if ($(window).scrollTop() > headerScrollPos) {
                $('.scroll-to-top').fadeIn();
                $("#navbar-collapse").collapse("hide");
              } else if ($(this).scrollTop() <= headerScrollPos) {
                $("#navbar-collapse").collapse("hide");
                $('.scroll-to-top').fadeOut();
              }
            }
  
            //手机端关闭
            $('.block-navbar2 .search_form_wrapper .icon-guanbi').click(function (){
              $('.search-icon-box .icon-guanbi').hide().siblings().show();
              $('html,body').css({"height":'',overflow:""});
              $('.search_form_wrapper').hide();
              // $(this).hide();
            });
  
  
            /*点击搜索按钮*/
            $('.block-navbar2 .search-icon-box .search-icon').click(function (){
              $(this).hide().siblings().show();
              $('html,body').css({"height":'100%',overflow:"hidden"});
              $('.search_form_wrapper').show();
            });
  
            $(window).on('scroll', function () {
              if ($('.stricked-menu').length) {
                var stricky = $('.block-navbar2 .stricked-menu');
                if ($(window).scrollTop() > headerScrollPos) {
                  stricky.addClass('stricky-fixed');
  
                  $(".navbar-collapse-box.in").collapse("hide");
                  // $('.model-box').css('height','0');
                } else if ($(this).scrollTop() <= headerScrollPos) {
                  stricky.removeClass('stricky-fixed');
                  // $('.model-box').css('height','0');
                  $(".navbar-collapse-box.in").collapse("hide");
                }
              }
            });
  
            window.addEventListener('resize',function (){
              $(".block-navbar2 #navbar-collapse").collapse("hide");
              $('.model-box').css('height','0');
            }, false);
  
            $('.block-navbar2 .close_menu_block').click(function () {
              $("#navbar-collapse").collapse("hide");
            })
  
            $('.model-box').click(function () {
              $("#navbar-collapse").collapse("hide");
            })
  
  
            /*点击关闭按钮*/
            $('.block-navbar2 .search-icon-box .icon-guanbi').click(function (){
              $(this).hide().siblings().show();
              $('html,body').css({"height":'',overflow:""});
              $('.search_form_wrapper').hide();
            });
          });
        }
  
      }
  
    };
  
    $(function (){
      var getWindow = $(window).width();
      if(getWindow>960){
        $(".navbar-wrapper.stricked-menu .dropdown-menu.fixed-dropmenu>li").hover(function () {
          var top = $(this).offset().top;
          var left = $(this).offset().left;
          var width = $(this).width();
          var scrollTop = $(document).scrollTop()
          $(this).children("ul").css({
            position:"fixed",
            top: (top-scrollTop),
            left:left+width-3,
          }).show();
        },function (){
        })
        $(".navbar-wrapper.original .dropdown-menu.fixed-dropmenu>li").hover(function () {
          var top = $(this).offset().top;
          var left = $(this).offset().left;
          var width = $(this).width();
          $(this).children("ul").css({
            position:"fixed",
            top: top ,
            left:left+width-3,
          }).show();
        },function (){
        })
      }
    })
  
  
  
  })(jQuery, Drupal, drupalSettings);
  
  
  
  
  ;
  