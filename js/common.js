// var IP = 'http://i.gazer.cc/index.php/';
// var IP = 'http://192.168.1.106/shopnc/userapi/index.php?';
// var IMG_URL = 'http://192.168.1.106/shopnc/data/upload/car/';
// var IP = 'http://test.gazer.cc.ngrok.cc/shopnc/userapi/index.php?';
// var IMG_URL = 'http://test.gazer.cc.ngrok.cc/shopnc/data/upload/car/';
var IP = 'http://shopnc.gazer.cc/userapi/index.php?';
var IP_WXPay = 'http://test.gazer.cc.viphk.ngrok.org/shopnc/';

var SHART_IP = '120.25.228.118/mobile/index.php?';

var IMG_URL = 'http://shopnc.gazer.cc/data/upload/car/';
var STORE_IMG_DEF = 'STOREIMGDEF.jpg'; //店铺默认图片
var BRAND_IMG_DEF = 'BRANDIMGDEF.jpg'; //车标默认图片
var AVATAR_IMG_DEF = 'AVATARIMGDEF.jpg'; //头像默认图片

var
    ALIPAYNOTIFYWXPAY = IP_WXPay + 'userapi/api/payment/wxpay/notify_url.php',
    LOGIN = IP + 'act=login',
    BRANDLIST_CARLIST = IP + 'act=car_class&op=brand_list', //品牌列表,车系列表
    CAR_LIST = IP + 'act=car_class&op=car_list', //年款配置列表
    LIST_MYCAR = IP + 'act=member_mycar&op=list_mycar', //我的车列表
    ADD_MYCAR = IP + 'act=member_mycar&op=add_mycar', //添加爱车
    MEMBER_INDEX = IP + 'act=member_index', //我的资料
    INFO_MYCAR = IP + 'act=member_mycar&op=info_mycar', //爱车详情
    GET_BUNDLING = IP + 'act=car_bundling&op=get_bundling', //保养套餐
    VOUCHER_LIST = IP + 'act=member_voucher&op=voucher_list', //我的优惠券
    VOUCHER_PWEX = IP + 'act=member_voucher&op=voucher_pwex', //兑换优惠券
    EDIT = IP + 'act=member_index&op=edit', //修改个人信息
    STORE_LIST = IP + 'act=store&op=store_list', //4s店列表
    STORE_INFO = IP + 'act=store&op=store_info', //4s店详情
    ORDER_LIST = IP + 'act=member_order&op=order_list', //我的订单
    MANUAL_LIST = IP + 'act=manual&op=manual_list', //保养手册
    REGISTERS = IP + 'act=login&op=registers', //手机注册
    GET_CAPTCHA = IP + 'act=login&op=get_captcha', //获取验证码
    ADDORDERTAKE = IP + 'act=member_order&op=addOrderTake', //保养订单下单
    ADDORDERREPAIR = IP + 'act=member_order&op=addOrderRepair', //维修订单下单
    USERINFO_LIST = IP + 'act=public&op=userinfo_list', //聊天头像称呼
    ORDER_INFO = IP + 'act=member_order&op=order_info', //订单详情
    TOSTORE = IP + 'act=member_order&op=toStore', //到店操作
    PAY_ORDER = IP + 'act=member_order&op=pay_order', //订单直接变为已付款
    PRAISE_ORDER = IP + 'act=member_order&op=praise_order', //评价订单
    PRAISE_ORDERS = IP + 'act=member_order&op=praise_orders', //新新新评价订单
    CITY_LIST = IP + 'act=public&op=city_list', //城市列表
    AD_LIST = IP + 'act=public&op=ad_list', //广告列表
    AREA_LIST = IP + 'act=public&op=area_list', //区域列表
    AC_LIST = IP + 'act=public&op=ac_list', //活动列表
    CANCEL_ORDER = IP + 'act=member_order&op=cancel_order', //取消订单
    UPLOADFILE = IP + 'act=member_index&op=uploadFile', //长传头像
    ALIPAYNOTIFY = IP + 'act=payment&op=notify&payment_code=alipay', //支付宝通知地址
    // ALIPAYNOTIFYWXPAY = IP + 'act=payment&op=notify&payment_code=wxpay', //支付宝通知地址
    PRIVACY_TEXT = IP + 'act=article&op=privacy_text', //隐私声明
    INVITE_TEXT = IP + 'act=article&op=invite_text', //邀请好友弹出文本
    FAQ_TEXT = IP + 'act=article&op=faq_text', //常见问题
    BALANCE_TEXT = IP + 'act=article&op=balance_text', //充值说明
    ABOUNT_TEXT = IP + 'act=article&op=abount_text', //关于我们
    INVITE_RULE = IP + 'act=article&op=invite_rule', //邀请好友说明
    REG_TEXT = IP + 'act=article&op=reg_text', //服务条款
    COUPON_TEXT = IP + 'act=article&op=coupon_text', //优惠券说明
    // AGENT_INFO = IP + 'act=member_agent&op=agent_info', //代办订单服务详情
    ADDAGENCYORDER = IP + 'act=member_order&op=addAgencyOrder', //提交代办订单
    RELIEF_LIST = IP + 'act=member_relief&op=relief_list', //救援服务清单
    ADDRELIEFORDER = IP + 'act=member_order&op=addReliefOrder', //一键救援下单
    UPLOAD_RELIEF = IP + 'act=member_relief&op=upload_relief', //上传救援图片
    TECH_SORT = IP + 'act=member_tech&op=tech_sort', //技师分类
    TECH_LIST = IP + 'act=member_tech&op=tech_list', //技师列表
    AGENCY_CONFIRM = IP + 'act=member_order&op=agency_confirm', //代办订单确认完成
    UPLOAD_SAFE = IP + 'act=member_safe&op=upload_safe', //上传行车证
    ACCEPT_LIST = IP + 'act=member_safe&op=accept_list', //投保公司列表
    POLICE_LIST = IP + 'act=member_safe&op=police_list', //投保保险类型
    ADDSAFEORDER = IP + 'act=member_order&op=addSafeOrder', //投保保险下单
    DEF_MYCAR = IP + 'act=member_mycar&op=def_mycar', //设置默认车辆
    SAFE_CONFIRM = IP + 'act=member_order&op=SAFE_CONFIRM', //保险订单-确认完成
    ADD_OFFENCES = IP + 'act=member_offences&op=add_offences', //违章查询
    LIST_OFFENCES = IP + 'act=member_offences&op=list_offences', //违章车辆列表
    ADDOFFENCESORDER = IP + 'act=member_order&op=addOffencesOrder', //违章订单下单
    DESC_OFFENCE = IP + 'act=member_offences&op=desc_offence', //违章车辆详情
    VOUCHER_ABLE = IP + 'act=member_voucher&op=voucher_able', //获取可用优惠券和推荐优惠券
    DEL_MYCAR = IP + 'act=member_mycar&op=del_mycar', //删除爱车
    FEEDBACK_ADD = IP + 'act=member_feedback&op=feedback_add', //意见反馈
    ADD_JOIN = IP + 'act=member_join&op=add_join', //商家加盟
    UPLOAD_LICENSE = IP + 'act=member_join&op=upload_license', //上传营业执照
    OFFENCES_CONFIRM = IP + 'act=member_order&op=offences_confirm', //违章订单确认完成
    VOUCHER_FREEEX = IP + 'act=member_voucher&op=voucher_freeex', //领取活动优惠券
    VOUCHER_FINISH = IP + 'act=member_voucher&op=voucher_finish', //下单后获取优惠券
    SELLER_LIST = IP + 'act=store&op=seller_list', //顾问列表
    OTHER_LOGIN = IP + 'act=login&op=other_login', //第三方登录
    FORGET = IP + 'act=login&op=forget', //忘记密码
    AGENT_LIST = IP + 'act=member_agent&op=agent_list', //代办订单列表
    BINDCOUPON = IP + 'act=member_order&op=bindCoupon', //绑定优惠券(保险订单)
    TECH_REC = IP + 'act=member_tech&op=tech_rec', //推荐技师
    TAKE_CONFIRM = IP + 'act=member_order&op=take_confirm', //保养订单确认完成
    ADDONEMORE = IP + 'act=member_order&op=addOneMore', //再来一单
    ACTIVITY_LIST = IP + 'act=member_invite&op=activity_list', //邀请好友活动列表
    MY_INVITE = IP + 'act=member_invite&op=my_invite', //我成功邀请的好友
    RANK_INVITE = IP + 'act=member_invite&op=rank_invite', //分享排行
    SHARE_FRIENDS = SHART_IP + 'act=share&op=index', //分享给好友链接
    ORDER_SERVICE = IP + 'act=member_order&op=ORDER_SERVICE', // 申请售后/投诉申告
    GET_BUNDLINGLIST = IP + 'act=car_bundling&op=get_bundlinglist', // 首页底部套餐按钮
    // AC_LAST = IP + 'act=public&op=ac_last', //首页最新两个活动
    EDIT_MYCAR = IP + 'act=member_mycar&op=edit_mycar'; //编辑爱车

////==================================================
// 调适模式-总开关(部署时一定要关闭!!!)
var DEBUGAll = 0; //0:关闭,1:开启

// 弹窗调试开关(部署时一定要关闭!!!)
var openALERT = 0; //0:关闭,1:开启
////==================================================

// 调适模式-分支开关
var DEBUG = 0; //0:关闭,1:开启

// 是否开启性能测试
var PREF = 0; //0:关闭,1:开启

// 每个页面都添加一个清楚缓存按钮(部署时,删除这块代码);
/*Q.ready(function() {
    var button = api.require('UIButton');
    if (button) {
        button.open({
            rect: {
                x: 70,
                y: 25,
                w: 45,
                h: 45
            },
            corner: 100,
            bg: {
                normal: 'rgba(222,222,222,.3)'
            }
        }, function(ret, err) {
            if (ret) {
                if (ret.eventType === 'click') {
                    api.clearCache(function() {
                        api.toast({
                            msg: '清除完成'
                        });
                    });
                }
            }
        });
    }
});*/

/** 封装弹窗提示
 * 目的:防止部署时弹错alert
 */
function ALERT(param) {
    if (openALERT) {
        alert(JSON.stringify(param));
    }
}

// 点击打开窗口
$('.gazer-role-open').live(tap, function() {
    var name = $(this).data('open-name');
    if (name !== '' && name !== undefined) { //判断变量是否添加
        name = name + '';
        // Q.window.open(name + '.html', name);
        // return false;

        var delay = 0;
        (api.systemType != 'ios') && (delay = 100);

        var default_json = {
            name: name,
            url: name + '.html',
            bounces: false,
            slidBackEnabled: false,
            vScrollBarEnabled: false,
            softInputMode: 'pan',
            bgColor: '#f7f8f9',
            delay: delay
        }

        var options_json = $(this).data('open-options');
        if (options_json !== '' && options_json !== undefined) {
            $.extend(true, default_json, options_json);
        }

        // pageParam
        var param = {};
        param = $(this).data('open-param');
        if (param !== '' && param !== undefined) {
            param = eval('(' + param + ')');
            var paramName = name + 'Param';
            cache.set(paramName, param);
        }
        // alert(JSON.stringify(default_json));
        api.openWin(default_json);
    } else {
        // tips('未定义方法');
    }
});

// 点击关闭当前窗口
/*$('.gazer-role-close').on(tap, function() {
    Q.window.close();
});*/

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

/**
 * @param  {String}
 * @param  {Object}
 * @param  {Function}
 * @param  {Number}
 * @param  {Boolean} 是否显示loading
 * @param  {Boolean} 
 * @return {none}
 */
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

    //拼接token
    /*var USER = cache.get('user');
    var AUTH = {};
    if (USER) {
        AUTH[PREFIX + 'id'] = USER.user_id;
        AUTH[PREFIX + 'token'] = USER.token;
        AUTH[PREFIX + 'mobile'] = USER.user_mobile;
        for (var k in AUTH) {
            s += ('&' + k + '=' + AUTH[k]);
        }
    }*/
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


// 默认车标
function getBrand(avatar) {
    return (avatar ? IMG_URL + avatar : '../img/' + BRAND_IMG_DEF);
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
    return api.systemType === "ios";
}

function statusBarHeight() {
    var sysType = api.systemType;
    if (sysType == 'ios') {
        return 20
    } else if (sysType == 'android') {
        var ver = api.systemVersion;
        ver = parseFloat(ver);
        if (ver >= 4.4) {
            return 25
        } else {
            return 0
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
