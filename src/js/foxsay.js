/*!
 * FoxSay JavaScript Library v1.0.0
 * https://github.com/DimaChekashov/foxsay
 */

function fs(elements) {
    return new FoxSay(document.querySelectorAll(elements));
}

function FoxSay(elements) {
    this.elements = elements;

    this.addClass = function(className) {
        for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className);
        }

        return this;
    }

    this.removeClass = function(className) {
        for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(className);
        }

        return this;
    }

    this.on = function(eventName, func) {
        for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, func);
        }

        return this;
    }

    this.show = function() {
        for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.display = 'block';
        }
        
        return this;
    }

    this.hide = function() {
        for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.display = 'none';
        }

        return this;
    }

    this.fadeIn = function(time) {
        for(var i = 0; i < this.elements.length; i++) {
            var opacity = 0;
            var elem = this.elements[i];
            
            elem.style.opacity = 0;
            elem.style.display = 'block';

            var interval = setInterval(function() {
                opacity += 50 / time;

                if(opacity >= 1) {
                    clearInterval(interval);
                }

                elem.style.opacity = opacity;
            }, 50)
        }

        return this;
    }

    this.fadeOut = function(time) {
        for(var i = 0; i < this.elements.length; i++) {
            var opacity = 1;
            var elem = this.elements[i];
            
            var interval = setInterval(function() {
                opacity -= 50 / time;

                if(opacity <= 0) {
                    clearInterval(interval);
                    elem.style.opacity = 0;
                    elem.style.display = 'none';
                }

                elem.style.opacity = opacity;
            }, 50)
        }

        return this;
    }
}