// 每个window, frame 都要引入这个js

var IP = 'http://shopnc.gazer.cc/userapi/index.php?';

var IMG_URL = 'http://shopnc.gazer.cc/data/upload/car/';
var STORE_IMG_DEF = 'STOREIMGDEF.jpg'; //店铺默认图片
var BRAND_IMG_DEF = 'BRANDIMGDEF.jpg'; //车标默认图片
var AVATAR_IMG_DEF = 'AVATARIMGDEF.jpg'; //头像默认图片

var
    LOGIN = IP + 'act=login',
    EDIT_MYCAR = IP + 'act=member_mycar&op=edit_mycar'; //编辑爱车


/////////////////////////////////////////////////////
// 调适模式-总开关(部署时一定要关闭!!!)
var DEBUGAll = 0; //0:关闭,1:开启

// 弹窗调试开关(部署时一定要关闭!!!)
var openALERT = 0; //0:关闭,1:开启
/////////////////////////////////////////////////////

// 调适模式-分支开关
var DEBUG = 0; //0:关闭,1:开启

// 兼容ezapp
var tap = 'click';


// 封装弹窗提示
//    目的: 防止部署时弹错alert
//
function ALERT(param) {
    if (openALERT) {
        alert(JSON.stringify(param));
    }
}


// 打开window
function openWin(name, params, options) {
    var i, default_json;
    if (typeof name !== 'string' || {}.toString.call(params) !== '[object Object]') {
        return false;
    }

    default_json = {
        name: name,
        url: name + '.html',
        bounces: false,
        slidBackEnabled: false,
        vScrollBarEnabled: false,
        softInputMode: 'pan',
        bgColor: '#f7f8f9',
        delay: api.systemType === 'ios' ? 0 : 100
    }

    if ({}.toString.call(options) === '[object Object]') {
        for (i in options) {
            default_json[i] = options[i];
        }
    }

    /**
     * 为当前window设置个名为windowName+Param的数组储存在localstorage里
     * 每个数组默认有from这个属性,当一个window有多个入口时,"from"这个属性非常有用
     */
    paramsName = name + 'Params';
    if (Object.keys(params).length > 0) {
        params = eval('(' + params + ')');
        if (params['from'] === undefined) {
            params['from'] = api.frameName || api.winName;
        }
    } else {
        params['from'] = api.frameName || api.winName;
    }
    cache.set(paramsName, params);

    api.openWin(default_json);
}


// 关闭当前window
function closeWin() {
    api.closeWin();
}



// 点击打开windows
$('.gazer-role-open').live(tap, function() {
    var that = $(this),
        name = that.data('open-name');

    if (name !== '' && name !== undefined) { //判断变量是否添加        

        var default_json = {
            name: name + '',
            url: name + '.html',
            bounces: false,
            slidBackEnabled: false,
            vScrollBarEnabled: false,
            softInputMode: 'pan',
            bgColor: '#f7f8f9',
            delay: api.systemType === 'ios' ? 0 : 100
        }

        /**
         * 为当前window设置个名为windowName+Param的数组储存在localstorage里
         * 每个数组默认有from这个属性,当一个window有多个入口时,"from"这个属性非常有用
         */
        var params = that.data('open-params'),
            paramsName = name + 'Params';
        if (params !== undefined && params !== "") {
            params = eval('(' + params + ')');
            if (params["from"] === undefined) {
                params["from"] = api.frameName || api.winName;
            }
        } else {
            params = {}
            params["from"] = api.frameName || api.winName;
        }
        cache.set(paramsName, params);

        api.openWin(default_json);
    } else {
        // tips('未定义方法');
    }
});


// 点击运行函数
$('.gazer-role-func').live(tap, function() {
    var name = $(this).data('func-name');
    if (name !== '' && name !== undefined) { //判断变量是否添加
        name = name + '';
        eval(name);
    } else {
        // tips('未定义方法');
    }
});

/**
 * 打开自定义的单frame窗口
 * @type {Object}
 */
window.G = {
    openFrame: function(_name, _options, callback) {
        var options_json = _options;
        var default_json = {
            name: _name,
            url: _name + '.html',
            bounces: false,
            animation: {
                type: "fade",
                // subType: "from_bottom",
                // duration: 700 //动画过渡时间，默认300毫秒
            },
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 'auto'
            }
        };
        if (_options !== undefined) {
            /**
             * 合并 default_json, options_json 两个对象
             * $.extend 为zepto里的一个方法
             * 如果两个对象里有相同的键,options_json的键覆盖default_json.
             * $.extend 加了 true.意味着二级对象也能合并
             * 合并后的对象名称为default_json
             */
            $.extend(true, default_json, options_json);

        }
        api.addEventListener({
            name: _name
        }, function(ret, err) {
            callback(ret.value.buttonIndex);
        });
        api.openFrame(default_json);
    }
}

function tips(msg, _time) {
    var time_s = 2000; //默认2s
    if (arguments.length === 2) { //如果传了2个参数
        time_s = _time;
    }
    api.toast({
        msg: msg,
        duration: time_s,
        location: 'middle'
    });
}

function json2str(json) {
    return JSON.stringify(json);
}

function string2json(str) {
    return JSON.parse(str);
}

function getDEBUG(_url, _result, _data) {
    if (DEBUGAll) {
        _result = _result || '';
        _data = _data || ''; //为post时,才需要此参数
        api.openFrame({
            name: 'debug',
            url: '_debug.html',
            bounces: false,
            rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: 300
            },
            pageParam: {
                url: _url,
                result: _result,
                data: _data,
            },
            animation: {
                subType: "from_top",
            },
            allowEdit: true
        });
    }
}


function postAPI(api, data, callback, timeout, isHideProgress, allCallback) {
    cache.get('user') && (data['key'] = cache.get('user')['key']);
    Q.AJAX.post(api, data, function(ret) {
        if (DEBUG) {
            getDEBUG(api, ret, data);
        }
        // ALERT(ret);
        if (ret.code === 200) {
            callback && callback(ret);
        } else if (ret.code === 400) {
            if (((typeof ret.login) !== "undefined") && (ret.login == "0")) {
                cache.set('user', '');
                setTimeout("api.execScript({name: 'root',frameName: 'home_cont',script: 'loadData();'});", 700);
                // setTimeout('api.hideProgress();', 1000);
                Q.window.open('login.html', 'login');
            } else {
                if (!allCallback) {
                    tips(ret.datas.error);
                } else {
                    callback && callback(ret);
                }
            }
        }
    }, timeout, isHideProgress);
}

function callAPI(api, o, calback, cacheTime, isHideProgress) {
    var url = api;
    var s = '';

    // 判断是否为空对象
    if (Object.keys(o).length) {
        // s += '?';
        for (var k in o) {
            s += ('&' + k + '=' + o[k]);
        }
        url += s;
    }
    Q.AJAX.get(url, function(result) {
        if (typeof(result) == 'object') {
            if (DEBUG) {
                getDEBUG(url, result);
            }
            if (result.code == 200) {
                calback && calback(result);
            } else if (result.code == 400) {
                if (((typeof result.login) !== "undefined") && (result.login == "0")) {
                    cache.set('user', '');
                    setTimeout('api.hideProgress();', 1000);
                    // setTimeout("api.execScript({name: 'root',frameName: 'home_cont',script: 'loadData();'});",700);

                    Q.window.open('login.html', 'login');
                } else {
                    tips(result.datas.error);
                }
            } else if (result.code == 100) {
                tips('请登录');
                cache.set('user', '');
                setTimeout('api.hideProgress();', 1000);

                setTimeout(function() {
                    Q.window.open('login.html', 'login');
                }, 2000);
            }
        } else {
            if (DEBUG) {
                getDEBUG(url, result);
            }

            tips('网络繁忙,请稍后再试');
        }
    }, function(res) {
        if (DEBUG) {
            getDEBUG(url);
        }

        tips('网络繁忙,请稍后再试');
    }, 5000, cacheTime, isHideProgress);

}

function callUpload(api, data, f, callback, cacheTime) {
    var url = api;
    cache.get('user') && (data['key'] = cache.get('user')['key']);
    Q.AJAX.upload(url, data, f, function(result) {
        if (DEBUG) {
            getDEBUG(url, result);
        }
        if (typeof(result) == 'object') {
            if (DEBUG) {
                getDEBUG(url, result);
            }

            if (result.code === 200) {
                callback && callback(result);
            } else if (result.code === 400) {
                tips(result.datas.error);
            }

            /*if (result.status == 200) {
                calback && calback(result);
            } else if (result.status == 500) {
                tips(result.msg);
            } else if (result.status == 100) {
                tips('请登录');
                setTimeout(function() {
                    Q.window.open('login.html', 'login');
                }, 2000);
            }*/
        } else {
            tips('网络繁忙,请稍后再试');
        }
    }, function(res) {
        if (DEBUG) {
            getDEBUG(url);
        }
        tips('网络繁忙,请稍后再试');
    }, 10000, cacheTime);

}

// 默认头像
function getAvatar(avatar) {
    // ALERT(avatar);
    var random = "?" + (+new Date());
    if (avatar.indexOf('http://') == -1) {
        return (avatar ? IMG_URL + avatar : '../img/' + AVATAR_IMG_DEF);
    } else {
        return avatar + random;
    }
}

// 判断是否登录
function isLogin() {
    var user = cache.get('user');
    if (((typeof user) !== 'undefined') && ((typeof user.key) !== 'undefined')) {
        // 登录
        return true;
    } else {
        // 未登录
        return false;
    }
}

// 判断是否是IOS
function isIOS() {
    return api.systemType === 'ios';
}

// 是否支持沉浸式
function statusBarHeight() {
    var sysType = api.systemType;
    if (sysType === 'ios') {
        return 20;
    } else if (sysType === 'android') {
        if (parseFloat(api.systemVersion) >= 4.4) {
            return 25;
        } else {
            return 0;
        }
    }
}

/* 时间戳格式化(时间戳默认为unix-10位数)
 * 
 * -model:
 *  1:0000-00-00
 *  2:0000-00-00 00:00 (默认)
 *  3:0000-00-00 00:00:00
 *  4:人性化显示{
 *     当天: 00:00
 *     昨天: 昨天 00:00
 *     昨天以前: 0月-0日 00:00
 *     一年前: 0000年-0月-0日 00:00
 *   }     
 */
function timeStrForm(str, model, unUnix) {
    var reStr = '', //返回值
        monthFormat, //月格式化
        dateFormat, //日格式化
        hourFormat, //时格式化
        minuteFormat, //分格式化
        secondFormat; //秒格式化
    if (!str) {
        //默认为当前时间戳
        str = parseInt(+new Date() / 1000);
    }

    if (!unUnix) {
        // 时间戳默认为unix
        str = Number(str + '000');
    }

    var nD = new Date(str),
        year = nD.getFullYear(),
        month = nD.getMonth() + 1,
        date = nD.getDate(),
        hour = nD.getHours(),
        minute = nD.getMinutes(),
        second = nD.getSeconds();

    monthFormat = month;
    dateFormat = date;
    hourFormat = hour;
    minuteFormat = minute;
    secondFormat = second;

    (monthFormat < 10) && (monthFormat = '0' + monthFormat);
    (dateFormat < 10) && (dateFormat = '0' + dateFormat);
    (hourFormat < 10) && (hourFormat = '0' + hourFormat);
    (minuteFormat < 10) && (minuteFormat = '0' + minuteFormat);
    (secondFormat < 10) && (secondFormat = '0' + secondFormat);
    if (model === 1) {
        reStr = year + '-' + monthFormat + '-' + dateFormat;
    } else if (model === 2) {
        reStr = year + '-' + monthFormat + '-' + dateFormat + " " + hourFormat + ":" + minuteFormat;
    } else if (model === 3) {
        reStr = year + '-' + monthFormat + '-' + dateFormat + " " + hourFormat + ":" + minuteFormat + ":" + secondFormat;
    } else if (model === 4) {
        var nDNow = new Date(),
            yearNow = nDNow.getFullYear(),
            monthNow = nDNow.getMonth() + 1,
            dateNow = nDNow.getDate(),
            hourNow = nDNow.getHours(),
            minuteNow = nDNow.getMinutes(),
            secondNow = nDNow.getSeconds();

        var dayDiff = dateNow - date, // 相差几天
            monthDiff = monthNow - month, // 相差几年
            yearDiff = yearNow - year; // 相差几年

        if (yearDiff === 0) { // 今年发的
            if (monthDiff === 0) { //这个月发的
                if (dayDiff === 0) { // 今天发的
                    reStr = hourFormat + ":" + minuteFormat;
                } else if (dayDiff === 1) { // 昨天发的
                    reStr = "昨天 " + hourFormat + ":" + minuteFormat;
                } else if (dayDiff === 2) { //前天发的
                    reStr = "前天 " + hourFormat + ":" + minuteFormat;
                } else {
                    reStr = month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
                }
            } else { //不是这个月发的
                reStr = month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
            }
        } else { // 非今年发的
            reStr = year + "年" + month + "月" + date + "日 " + hourFormat + ":" + minuteFormat;
        }

    } else {
        reStr = year + '-' + monthFormat + '-' + dateFormat + " " + hourFormat + ":" + minuteFormat;
    }

    return reStr;
}
