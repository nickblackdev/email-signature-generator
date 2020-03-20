jQuery(document).ready(function($){

	var textName = $('#textName');
	var textTitle = $('#textTitle');
	var textEmail = $('#textEmail');
	var textOfficePhone = $('#textOfficePhone');
	var textMobilePhone = $('#textMobilePhone');

	// Extend Jquery to get variable of paremeters in url
	$.extend({
      getUrlVars: function(){
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
          hash = hashes[i].split('=');
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
        }
        return vars;
      },
      getUrlVar: function(name){
        return $.getUrlVars()[name];
      }
    });

    // Get object of URL parameters
    var allVars = $.getUrlVars();

	// Hide url and code sections on page load
	$('#share-url p').hide();
	$('.text-header').hide();

	setTimeout(function(){

		// Getting URL var by its name

		var name = $.getUrlVar('nameInput');
		var title = $.getUrlVar('titleInput');
		var email = $.getUrlVar('emailInput');
		var officephone = $.getUrlVar('officePhoneInput');
		var mobilephone = $.getUrlVar('mobilePhoneInput');
		// var initName = name.replace(/\++/g, ' ');
		//console.log(initName);
		var nameDecode = decodeURIComponent(name);
		var titleDecode = decodeURIComponent(title);
		var initName = nameDecode.replace(/\++/g, ' ').replace(/\%2C/g, ',').replace(/\%3A/g, ':').replace(/\%2F/g, '/').replace(/\%28/g, '(').replace(/\%29/g, ')').replace(/\%26/g, '&').replace(/\%7C/g, '|').replace(/\%3B/g, ';').replace(/\%27/g, "'").replace(/\%60/g, "`");
		var initTitle = titleDecode.replace(/\++/g, ' ').replace(/\%2C/g, ',').replace(/\%3A/g, ':').replace(/\%2F/g, '/').replace(/\%28/g, '(').replace(/\%29/g, ')').replace(/\%26/g, '&').replace(/\%7C/g, '|').replace(/\%3B/g, ';').replace(/\%27/g, "'").replace(/\%60/g, "`");
		var initEmail = email.replace(/\%40/g, '@');
		var initOfficePhone = officephone;
		var initMobilePhone = mobilephone;

		$('#nameInput').attr("placeholder", initName);
		$('#nameInput').val(initName);

		$('#titleInput').attr("placeholder", initTitle);
		$('#titleInput').val(initTitle);

		$('#emailInput').attr("placeholder", initEmail);
		$('#emailInput').val(initEmail);

		$('#textName').text(initName);
		$('#textTitle').text(initTitle);
		$('#textEmail').text(initEmail);
		$('#textEmail').attr("href", "mailto:"+initEmail);
		$('#officePhoneInput').val(initOfficePhone);
		$('#mobilePhoneInput').val(initMobilePhone);
		var officePhoneInput = $('#officePhoneInput').val();
		var officePhoneInputRaw = officePhoneInput.replace(/\D[^\.]/g, "");
		var officePhoneInputCleaned = officePhoneInputRaw.slice(0,3)+"."+officePhoneInputRaw.slice(3,6)+"."+officePhoneInputRaw.slice(6);
		textOfficePhone.text(officePhoneInputCleaned);
		textOfficePhone.attr("href", "tel:"+officePhoneInputRaw);

		var mobilePhoneInput = $('#mobilePhoneInput').val();
		var mobilePhoneInputRaw = mobilePhoneInput.replace(/\D[^\.]/g, "");
		var mobilePhoneInputCleaned = mobilePhoneInputRaw.slice(0,3)+"."+mobilePhoneInputRaw.slice(3,6)+"."+mobilePhoneInputRaw.slice(6);
		textMobilePhone.text(mobilePhoneInputCleaned);
		textMobilePhone.attr("href", "tel:"+mobilePhoneInputRaw);

		//Output Url to share
		var url = window.location.href;
		$('#share-url p').show().text(url);

		// Show code on page
		var html = $('.email-signature-code').html();
		$('#downloadLink').show();
		$('#sig-code').show().append().text(html).css('padding', '25px');
		$('.text-header').show();

	}, 5);


	$('#nameInput').on('input',function(e){
	  var nameInput = $('#nameInput').val();
	  textName.text(nameInput);
	});

	$('#titleInput').on('input',function(e){
	  var titleInput = $('#titleInput').val();
	  textTitle.text(titleInput);
	});

	$('#emailInput').on('input',function(e){
	  var emailInput = $('#emailInput').val();
	  textEmail.text(emailInput);
	  textEmail.attr("href", "mailto:"+emailInput);
	});

	$('#officePhoneInput').on('input',function(e){
	  var officePhoneInput = $('#officePhoneInput').val();
	  var officePhoneInputRaw = officePhoneInput.replace(/\D[^\.]/g, "");
	  var officePhoneInputCleaned = officePhoneInputRaw.slice(0,3)+"."+officePhoneInputRaw.slice(3,6)+"."+officePhoneInputRaw.slice(6);
	  textOfficePhone.text(officePhoneInputCleaned);
	  textOfficePhone.attr("href", "tel:"+officePhoneInputRaw);
	});

	$('#mobilePhoneInput').on('input',function(e){
	  var mobilePhoneInput = $('#mobilePhoneInput').val();
	  var mobilePhoneInputRaw = mobilePhoneInput.replace(/\D[^\.]/g, "");
	  var mobilePhoneInputCleaned = mobilePhoneInputRaw.slice(0,3)+"."+mobilePhoneInputRaw.slice(3,6)+"."+mobilePhoneInputRaw.slice(6);
	  textMobilePhone.text(mobilePhoneInputCleaned);
	  textMobilePhone.attr("href", "tel:"+mobilePhoneInputRaw);
	});

	// Download HTM FIle
	$('#downloadLink').hide(); // Hide Download button until show code button is clicked
	function downloadInnerHtml(filename, elId, mimeType) {
	    var elHtml = document.getElementById(elId).innerHTML;
	    var link = document.createElement('a');
	    mimeType = mimeType || 'text/plain';

		    link.setAttribute('download', filename);

		    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
		    link.click();
	}

	var fileName =  'email-sig.htm';

	$('#downloadLink').click(function(){
	    //downloadInnerHtml(fileName, 'sig-code','text/html');
		var elHtml = document.getElementById('sig-code').innerHTML;
		download(elHtml, "email-sig.htm", "text/html");
	});


	// Accoridion
	//uses classList, setAttribute, and querySelectorAll
	//if you want this to work in IE8/9 youll need to polyfill these
	(function(){
		var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
	  touchSupported = ('ontouchstart' in window),
	  pointerSupported = ('pointerdown' in window);

	  skipClickDelay = function(e){
	    e.preventDefault();
	    e.target.click();
	  }

			setAriaAttr = function(el, ariaType, newProperty){
			el.setAttribute(ariaType, newProperty);
		};
		setAccordionAria = function(el1, el2, expanded){
			switch(expanded) {
	      case "true":
	      	setAriaAttr(el1, 'aria-expanded', 'true');
	      	setAriaAttr(el2, 'aria-hidden', 'false');
	      	break;
	      case "false":
	      	setAriaAttr(el1, 'aria-expanded', 'false');
	      	setAriaAttr(el2, 'aria-hidden', 'true');
	      	break;
	      default:
					break;
			}
		};
	//function
	switchAccordion = function(e) {
	  console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
	  	thisQuestion.classList.toggle('is-collapsed');
	  	thisQuestion.classList.toggle('is-expanded');
			thisAnswer.classList.toggle('is-collapsed');
			thisAnswer.classList.toggle('is-expanded');

	  	thisAnswer.classList.toggle('animateIn');
		};
		for (var i=0,len=accordionToggles.length; i<len; i++) {
			if(touchSupported) {
	      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
	    }
	    if(pointerSupported){
	      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
	    }
	    accordionToggles[i].addEventListener('click', switchAccordion, false);
	  }
	})();

});