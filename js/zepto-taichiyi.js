/* Zepto v1.2.0 - simplify MIT
     modifier: taichiyi
 */

(function(window) {
    "use strict";
    var Zepto = (function() {

        var $;

        var emptyArray = [];

        var slice = emptyArray.slice;

        var document = window.document;

        var class2type = {};

        var toString = class2type.toString;

        var zepto = {};

        var capitalRE = /([A-Z])/g;


        function isFunction(value) {
            return toString.call(value) === "[object Function]";
        }

        function Z(dom, selector) {
            var i,
                len = dom ? dom.length : 0;

            for (i = 0; i < len; i += 1) {
                this[i] = dom[i];
            }
            this.length = len;
            this.selector = selector || '';
        }

        zepto.Z = function(dom, selector) {
            return new Z(dom, selector);
        }

        zepto.isZ = function(object) {
            return object instanceof zepto.Z;
        }
        zepto.qsa = function(element, selector) {
            var found,
                maybeID = selector[0] == "#",
                maybeClass = !maybeID && selector[0] == ".",
                nameOnly = maybeID || maybeClass ? selector.slice(1) : selector;
            if (element.getElementById && maybeID) {
                // 选择器为ID
                if (found = element.getElementById(nameOnly)) {
                    // 找到
                    return [found];
                } else {
                    // 没找到
                    return [];
                }
            } else if (element.getElementsByClassName && maybeClass) {
                // 选择器为 Class
                return slice.call(element.getElementsByClassName(nameOnly));
            } else {
                // 只接受ID和Class其他选择器返回[]
                return [];
            }
        }

        zepto.init = function(selector) {
            var dom; //存放选择找到的全部元素
            if (!selector) {
                return zepto.Z();
            } else {
                // 选择器参数为字符串
                if (typeof selector === "string") {
                    selector = selector.trim();
                    dom = zepto.qsa(document, selector);
                } else if (Array.isArray(selector)) {
                    dom = selector, selector = null
                } else if (typeof selector === "object") {
                    dom = [selector], selector = null
                } else {
                    return zepto.Z();
                }
            }
            return zepto.Z(dom, selector);
        }

        $ = function(selector) {
            return zepto.init(selector)
        }
        if (window.JSON) $.parseJSON = JSON.parse

        $.fn = {
            constructor: zepto.Z,
            length: 0,

            forEach: emptyArray.forEach,
            reduce: emptyArray.reduce,
            push: emptyArray.push,
            sort: emptyArray.sort,
            splice: emptyArray.splice,
            indexOf: emptyArray.indexOf,
            append: function(html) {
                // taichiyi
                // 在结束标签之前插入字符串
                this[0].insertAdjacentHTML('beforeend', html);
                return this[0];
            },
            before: function(html) {
                // taichiyi
                // 在开始标签之前插入html字符串
                this[0].insertAdjacentHTML('beforebegin', html);
                return this[0];
            },
            prepend: function(html) {
                // taichiyi
                // 在开始标签之后插入字符串
                this[0].insertAdjacentHTML('afterbegin', html);
                return this[0];
            },
            after: function(html) {
                // taichiyi
                // 在结束标签之后插入html字符串
                this[0].insertAdjacentHTML('afterend', html);
                return this[0];
            },
            slice: function() {
                return $(slice.apply(this, arguments))
            },
            ready: function(callback) {
                // 兼容-taichiyi
                document.addEventListener('DOMContentLoaded', function() {
                    callback($);
                }, false)

                return this;
            },

            each: function(callback) {
                emptyArray.every.call(this, function(el, idx) {
                    return callback.call(el, idx, el) !== false
                })
                return this
            },
            eq: function(idx) {
                return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1)
            },
            find: function(selector) {
                var i, result, dom = [],
                    el = this[0];

                if (!selector) {
                    result = $();
                } else if (typeof selector == 'string') {

                    for (i = 0; i < el.children.length; i += 1) {

                        if (selector[0] === '.') {

                            if (el.children[i].className.indexOf(selector.slice(1)) >= 0) {
                                dom.push(el.children[i]);
                            }

                        } else if (selector[0] === '#') {

                            if (el.children[i].id.indexOf(selector.slice(1)) >= 0) {
                                dom.push(el.children[i]);
                            }

                        }

                    }
                    result = zepto.Z(dom, '');

                } else {
                    result = $();
                }
                return result;
            },
            // parents: function(selector) {
            //     var ancestors = [],
            //         nodes = this
            //     while (nodes.length > 0)
            //         nodes = $.map(nodes, function(node) {
            //             if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            //                 ancestors.push(node)
            //                 return node
            //             }
            //         })
            //     return filtered(ancestors, selector)
            // },
            parent: function(selector) {
                return zepto.Z([this[0].parentNode], '');
            },
            prev: function() {
                return zepto.Z([this[0].previousElementSibling], '');
            },
            next: function() {
                return zepto.Z([this[0].nextElementSibling], '');
            },
            show: function() {
                return this.each(function() {
                    this.style.display == "none" && (this.style.display = '')
                    if (getComputedStyle(this, '').getPropertyValue("display") == "none")
                        this.style.display = defaultDisplay(this.nodeName)
                })
            },
            hide: function() {
                // taichiyi
                return this.css("display", "none")
            },
            html: function(html) {
                // taichiyi
                if (0 in arguments) {
                    // 设值
                    this.forEach(function(element, index) {
                        element.innerHTML = html;
                    });
                    return this;
                } else {
                    // 取值
                    return this[0].innerHTML;
                }
            },
            attr: function(name, value) {
                // taichiyi
                var result;
                if (typeof name == 'string' && !(1 in arguments)) {
                    // 取值
                    if (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null) {
                        return result
                    } else {
                        return undefined
                    }
                } else {
                    // 设值
                    this[0].setAttribute(name, value);
                    return this;
                }
            },
            data: function(name, value) {
                // taichiyi
                var attrName = 'data-' + name;
                var data;
                if (1 in arguments) {
                    // 设值
                    this.forEach(function(element, index) {
                        element.setAttribute(attrName, value);
                    });
                    return this;
                } else {
                    // 取值
                    if (0 in this && this[0].nodeType === 1 && (data = this[0].getAttribute(attrName)) != null) {
                        return data
                    } else {
                        return undefined
                    }
                }
            },
            val: function(value) {
                // taichiyi
                var element = this[0];
                var tagName = element.tagName;
                if (0 in arguments) {
                    // 设值
                    console.log(value);
                    this.forEach(function(element, index) {
                        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                            element.value = value;
                        } else if (element.tagName === "SELECT") {
                            element.options[element.selectedIndex].value = value;
                        } else {
                            return undefined;
                        }
                    });
                    return this;
                } else {
                    // 取值
                    if (tagName === "INPUT" || tagName === "TEXTAREA") {
                        return element.value;
                    } else if (tagName === "SELECT") {
                        return element.options[element.selectedIndex].value;
                    } else {
                        // 非常用表单元素
                        return undefined;
                    }
                }
            },
            width: function(value) {
                if (0 in arguments) {
                    // 判断是否带单位,没带的话,添加默认单位px
                    this.forEach(function(element, index) {
                        element.style.width = +value ? value + "px" : value;
                    });
                    return this
                } else {
                    return this[0].clientWidth
                }
            },
            height: function(value) {
                if (0 in arguments) {
                    // 判断是否带单位,没带的话,添加默认单位px
                    this.forEach(function(element, index) {
                        element.style.height = +value ? value + "px" : value;
                    });
                    return this
                } else {
                    return this[0].clientHeight
                }
            },

            css: function(property, value) {
                // taichiyi
                var element;

                if (typeof property === "string") {

                    if (arguments.length === 1) {
                        // 取值
                        element = this[0];
                        return getComputedStyle(element, null).getPropertyValue(property);
                    } else {
                        // 设置
                        if (this.length === 1) { //捕获到一个元素
                            element = this[0];
                            element.style && (element.style.cssText += ";" + property + ":" + value);
                            return this;
                        } else { //捕获到多个元素
                            this.forEach(function(element, index) {
                                element.style && (element.style.cssText += ";" + property + ":" + value);
                            });
                            return this;
                        }

                    }

                } else {
                    return this;
                }
            },
            hasClass: function(name) {
                // taichiyi
                if (!name) return false;
                return (this[0].className.indexOf(name) > -1) ? true : false;
            },
            addClass: function(name) {
                // taichiyi
                if (!name) return this;
                this.forEach(function(element, index) {
                    if ('classList' in element) {
                        element.classList.add(name);
                    } else {
                        return this;
                    }
                });
                return this;
            },
            removeClass: function(name) {
                // taichiyi
                if (!name) return this;

                if (!('className' in this[0])) {
                    return this;
                } else {
                    this.forEach(function(element, index) {
                        element.classList.remove(name);
                    });
                    return this;
                }
            },
            click: function() {
                if (this.length > 0) {
                    this[0].dispatchEvent(new MouseEvent("click"));
                }
                return this;
            }
        }

        $.isFunction = isFunction;

        zepto.Z.prototype = Z.prototype = $.fn

        return $;
    }());

    window.Zepto = Zepto

    window.$ === undefined && (window.$ = Zepto);

    (function($) {
        var touchStartX = 0,
            touchStartY = 0;
        window.addEventListener('load', function() {
            document.body.addEventListener('touchstart', function(e) {
                touchStartX = e.changedTouches[0].pageX;
                touchStartY = e.changedTouches[0].pageY;
            }, false);
        }, false);

        function add(element, event, fn, selector, delegator, capture) {
            capture = capture || false;
            var proxy = delegator || fn;

            element.addEventListener(event, proxy, capture);
        }

        $.fn.on = function(event, selector, callback) {
            var delegator,
                touchendSelector = this.selector;
            if ($.isFunction(selector)) {
                callback = selector, selector = undefined;
            }

            if (event === "click") {
                // 模拟点击事件 -start-
                function simulateClick(el) {
                    el.dispatchEvent(new MouseEvent("click"));
                }

                document.body.addEventListener('touchend', function(e) {
                    // 兼容live
                    if (selector) {
                        touchendSelector = selector;
                    }

                    if (touchendSelector[0] === '.') {
                        if (e.target.className.indexOf(touchendSelector.slice(1)) >= 0) {
                            // 触发点和结束点小于30个单位距离才触发
                            if (Math.abs(touchStartX - e.changedTouches[0].pageX) < 30 && Math.abs(touchStartY - e.changedTouches[0].pageY) < 30) {
                                // callback();
                                simulateClick(e.target);
                                e.preventDefault();
                            }
                        }
                    } else if (touchendSelector[0] === '#') {
                        if (e.target.id.indexOf(touchendSelector.slice(1)) >= 0) {
                            // 触发点和结束点小于30个单位距离才触发
                            if (Math.abs(touchStartX - e.changedTouches[0].pageX) < 30 && Math.abs(touchStartY - e.changedTouches[0].pageY) < 30) {
                                // callback();
                                simulateClick(e.target);
                                e.preventDefault();
                            }
                        }
                    }

                    // e.preventDefault();
                }, false);
                // 模拟点击事件 -end-
            }


            this.forEach(function(element, index) {
                if (selector) {
                    delegator = function(e) {
                        if (selector[0] === '.') {
                            if (e.target.className.indexOf(selector.slice(1)) >= 0) {
                                callback();
                            }
                        } else if (selector[0] === '#') {
                            if (e.target.id.indexOf(selector.slice(1)) >= 0) {
                                callback();
                            }
                        }
                    }
                }
                add(element, event, callback, selector, delegator)
            });
        }
        $.fn.live = function(event, callback) {
            $(document.body).on(event, this['selector'], callback);
            return this
        }

    })(Zepto)

    // return Zepto;

}(window));
