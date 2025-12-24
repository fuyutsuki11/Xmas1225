(function (_0xf7909f, _0x555601) {
    const _0x19374b = _0xf7909f();
    while (!![]) {
        try {
            const _0x4270ea = parseInt(_0x49aa(0x0)) / 0x1 * (parseInt(_0x49aa(0x1)) / 0x2) + parseInt(_0x49aa(0x2)) / 0x3 * (-parseInt(_0x49aa(0x3)) / 0x4) + parseInt(_0x49aa(0x4)) / 0x5 * (parseInt(_0x49aa(0x5)) / 0x6) + parseInt(_0x49aa(0x6)) / 0x7 + parseInt(_0x49aa(0x7)) / 0x8 * (parseInt(_0x49aa(0x8)) / 0x9) + -parseInt(_0x49aa(0x9)) / 0xa + -parseInt(_0x49aa(0xa)) / 0xb;
            if (_0x4270ea === _0x555601)
                break;
            else
                _0x19374b['push'](_0x19374b['shift']());
        } catch (_0x1917d2) {
            _0x19374b['push'](_0x19374b['shift']());
        }
    }
}(_0x559c, 0x6e6eb));
const _0x2e1560 = (function () {
        let _0x948b15 = !![];
        return function (_0x3643c7, _0x47292b) {
            const _0x1d0fb4 = _0x948b15 ? function () {
                if (_0x47292b) {
                    const _0x43cbf4 = _0x47292b['apply'](_0x3643c7, arguments);
                    return _0x47292b = null, _0x43cbf4;
                }
            } : function () {
            };
            return _0x948b15 = ![], _0x1d0fb4;
        };
    }()), _0xb132c4 = _0x2e1560(this, function () {
        const _0x27db66 = {};
        _0x27db66['kVcvH'] = function (_0x578f6e, _0x39a6bd) {
            return _0x578f6e + _0x39a6bd;
        }, _0x27db66['sdeFq'] = '{}.constructor(\x22return\x20this\x22)(\x20)', _0x27db66['tBRMw'] = 'table';
        const _0x50869e = _0x27db66;
        let _0x1bc127;
        try {
            const _0x4bcd36 = Function(_0x50869e['kVcvH']('return\x20(function()\x20' + _0x50869e['sdeFq'], ');'));
            _0x1bc127 = _0x4bcd36();
        } catch (_0x5aea96) {
            _0x1bc127 = window;
        }
        const _0x579a72 = _0x1bc127['console'] = _0x1bc127['console'] || {}, _0x3705c8 = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                _0x50869e['tBRMw'],
                'trace'
            ];
        for (let _0x1f635a = 0x0; _0x1f635a < _0x3705c8['length']; _0x1f635a++) {
            const _0xb9a10b = _0x2e1560['constructor']['prototype']['bind'](_0x2e1560), _0x451557 = _0x3705c8[_0x1f635a], _0x38f372 = _0x579a72[_0x451557] || _0xb9a10b;
            _0xb9a10b['__proto__'] = _0x2e1560['bind'](_0x2e1560), _0xb9a10b['toString'] = _0x38f372['toString']['bind'](_0x38f372), _0x579a72[_0x451557] = _0xb9a10b;
        }
    });
_0xb132c4(), document['addEventListener']('DOMContentLoaded', function () {
    const _0x376b8f = {};
    _0x376b8f['HwgmS'] = function (_0x107e3a, _0x377698) {
        return _0x107e3a + _0x377698;
    }, _0x376b8f['nVgcT'] = 'BGM\x20wait\x20for\x20interaction', _0x376b8f['uUCcd'] = 'none', _0x376b8f['dfSGK'] = '密码不对哦~\x20是一个日期\x20(12xx)', _0x376b8f['zJlns'] = 'pw-input';
    const _0x44ea5b = _0x376b8f;
    var _0x3d03c8 = document['getElementById']('btn-enter');
    _0x3d03c8 && _0x3d03c8['addEventListener']('click', function () {
        const _0x27c376 = {};
        _0x27c376['INOjP'] = _0x44ea5b['uUCcd'], _0x27c376['fOoYf'] = 'function';
        const _0x1ae689 = _0x27c376;
        var _0x3982d5 = document['getElementById']('pw-input')['value'], _0x18139f = function (_0xa017d2) {
                var _0x166f79 = 0x0;
                if (_0xa017d2['length'] === 0x0)
                    return _0x166f79;
                for (var _0x5a6049 = 0x0; _0x5a6049 < _0xa017d2['length']; _0x5a6049++) {
                    var _0x4bbd22 = _0xa017d2['charCodeAt'](_0x5a6049);
                    _0x166f79 = _0x44ea5b['HwgmS']((_0x166f79 << 0x5) - _0x166f79, _0x4bbd22), _0x166f79 = _0x166f79 & _0x166f79;
                }
                return _0x166f79;
            };
        if (_0x18139f(_0x3982d5) === 0x170824) {
            var _0x586ea0 = document['getElementById']('bgm');
            if (_0x586ea0)
                _0x586ea0['play']()['catch'](function (_0x5a7917) {
                    console['log'](_0x44ea5b['nVgcT']);
                });
            var _0xf54e8f = document['getElementById']('password-overlay');
            _0xf54e8f['style']['opacity'] = '0', setTimeout(function () {
                _0xf54e8f['style']['display'] = _0x1ae689['INOjP'];
                if (typeof _0x7af2b7 === _0x1ae689['fOoYf'])
                    _0x7af2b7();
            }, 0x3e8);
        } else
            alert(_0x44ea5b['dfSGK']), document['getElementById'](_0x44ea5b['zJlns'])['value'] = '';
    }), document['oncontextmenu'] = function () {
        return ![];
    }, document['onkeydown'] = function (_0x2de3c5) {
        if (_0x2de3c5['keyCode'] == 0x7b || _0x2de3c5['ctrlKey'] && _0x2de3c5['shiftKey'] && _0x2de3c5['keyCode'] == 0x49)
            return ![];
    };
});
let _0xa0e754, _0xf3a426, _0x5e0994, _0x5e37ed, _0x3a4661, _0x5e9051, _0x5204eb, _0x154fd4, _0xf13520 = [], _0x9af4d8 = [];
function _0x559c() {
    const _0x33b8fa = [
        'mZq1nJa2s21rwvvs',
        'mJrYD3ndA2y',
        'oti3nZi1q3Pjwhfz',
        'mtH5sgjlBeW',
        'mtq4otCXmMjOB1jwqq',
        'otC4mdy0v1HxuMnt',
        'mtHwy3jPsuS',
        'mJe3otG0mfHXyuT4sq',
        'mtu1otCWmwrnDxPPuW',
        'ndG5mZuXEwDxteDh',
        'mLLJBhfJza'
    ];
    _0x559c = function () {
        return _0x33b8fa;
    };
    return _0x559c();
}
const _0x372e36 = 0x9470, _0x3790c4 = 0x3a98, _0x31f0d9 = {
        'pos': new Float32Array(_0x372e36 * 0x3),
        'col': new Float32Array(_0x372e36 * 0x3)
    }, _0x4c0f94 = {
        'pos': new Float32Array(_0x372e36 * 0x3),
        'col': new Float32Array(_0x372e36 * 0x3)
    }, _0x5f012b = {};
_0x5f012b['transition'] = 0x0, _0x5f012b['bloom'] = 0x0, _0x5f012b['drift'] = 0x0, _0x5f012b['gravity'] = 0x0, _0x5f012b['shimmer'] = 0x0, _0x5f012b['textType'] = 0x0;
const _0x42614e = _0x5f012b;
let _0x4a3868 = ![], _0x1c188f = ![], _0x3b84ef = 0x0, _0x52f286 = 0x0, _0x392a3a = 0x0, _0x4bc130 = 0x0, _0x327822 = 0x0, _0x54a434 = 0x0;
const _0x37485a = new THREE['Color']();
function _0x49aa(_0x12703d, _0x3edbd5) {
    _0x12703d = _0x12703d - 0x0;
    const _0x3c482e = _0x559c();
    let _0x3f798d = _0x3c482e[_0x12703d];
    if (_0x49aa['wGMqug'] === undefined) {
        var _0x1bf0d0 = function (_0x5b62de) {
            const _0x423878 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
            let _0x5a9ec2 = '', _0x3a58d4 = '';
            for (let _0x1ed907 = 0x0, _0x300ca1, _0x522c02, _0x45cfec = 0x0; _0x522c02 = _0x5b62de['charAt'](_0x45cfec++); ~_0x522c02 && (_0x300ca1 = _0x1ed907 % 0x4 ? _0x300ca1 * 0x40 + _0x522c02 : _0x522c02, _0x1ed907++ % 0x4) ? _0x5a9ec2 += String['fromCharCode'](0xff & _0x300ca1 >> (-0x2 * _0x1ed907 & 0x6)) : 0x0) {
                _0x522c02 = _0x423878['indexOf'](_0x522c02);
            }
            for (let _0x5d37d2 = 0x0, _0x2dad63 = _0x5a9ec2['length']; _0x5d37d2 < _0x2dad63; _0x5d37d2++) {
                _0x3a58d4 += '%' + ('00' + _0x5a9ec2['charCodeAt'](_0x5d37d2)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x3a58d4);
        };
        _0x49aa['pEsBeq'] = _0x1bf0d0, _0x49aa['SOXNAA'] = {}, _0x49aa['wGMqug'] = !![];
    }
    const _0x559c83 = _0x3c482e[0x0], _0x49aac1 = _0x12703d + _0x559c83, _0x3007ae = _0x49aa['SOXNAA'][_0x49aac1];
    return !_0x3007ae ? (_0x3f798d = _0x49aa['pEsBeq'](_0x3f798d), _0x49aa['SOXNAA'][_0x49aac1] = _0x3f798d) : _0x3f798d = _0x3007ae, _0x3f798d;
}
function _0x369f09() {
    const _0x1c890c = {};
    _0x1c890c['GYSHC'] = 'white', _0x1c890c['wYTpC'] = 'CHRISTMAS', _0x1c890c['lFWqe'] = function (_0x55adbf, _0x245ffb) {
        return _0x55adbf > _0x245ffb;
    }, _0x1c890c['WTgGf'] = function (_0x13659f, _0x501fc5) {
        return _0x13659f + _0x501fc5;
    }, _0x1c890c['ZRmUm'] = function (_0x567323, _0x140f57) {
        return _0x567323 < _0x140f57;
    }, _0x1c890c['xkSSJ'] = function (_0x518175, _0x29f951) {
        return _0x518175 * _0x29f951;
    };
    const _0x4a2981 = _0x1c890c, _0x46b0ac = document['createElement']('canvas'), _0xf15203 = _0x46b0ac['getContext']('2d');
    _0x46b0ac['width'] = 0x3e8, _0x46b0ac['height'] = 0x190, _0xf15203['fillStyle'] = _0x4a2981['GYSHC'], _0xf15203['textAlign'] = 'center', _0xf15203['font'] = 'bold\x20120px\x20Arial', _0xf15203['fillText']('MERRY', 0x1f4, 0x96), _0xf15203['fillText'](_0x4a2981['wYTpC'], 0x1f4, 0x12c);
    let _0x26a67e = _0xf15203['getImageData'](0x0, 0x0, 0x3e8, 0x190)['data'];
    for (let _0x67dcb8 = 0x0; _0x67dcb8 < 0x190; _0x67dcb8 += 0x4)
        for (let _0x20dc06 = 0x0; _0x20dc06 < 0x3e8; _0x20dc06 += 0x4)
            if (_0x4a2981['lFWqe'](_0x26a67e[_0x4a2981['WTgGf'](_0x67dcb8 * 0x3e8, _0x20dc06) * 0x4], 0x80))
                _0xf13520['push']({
                    'x': (_0x20dc06 - 0x1f4) * 0.15,
                    'y': (0xc8 - _0x67dcb8) * 0.15
                });
    _0xf15203['clearRect'](0x0, 0x0, 0x3e8, 0x190), _0xf15203['font'] = 'bold\x20180px\x20\x22Microsoft\x20YaHei\x22,\x20sans-serif', _0xf15203['fillText']('圣诞快乐', 0x1f4, 0xf0);
    let _0x28e53e = _0xf15203['getImageData'](0x0, 0x0, 0x3e8, 0x190)['data'];
    for (let _0x189d93 = 0x0; _0x4a2981['ZRmUm'](_0x189d93, 0x190); _0x189d93 += 0x4)
        for (let _0x189833 = 0x0; _0x189833 < 0x3e8; _0x189833 += 0x4)
            if (_0x4a2981['lFWqe'](_0x28e53e[_0x4a2981['xkSSJ'](_0x189d93 * 0x3e8 + _0x189833, 0x4)], 0x80))
                _0x9af4d8['push']({
                    'x': (_0x189833 - 0x1f4) * 0.15,
                    'y': (0xc8 - _0x189d93) * 0.15
                });
}
function _0xb636de() {
    const _0x4eaa5e = {};
    _0x4eaa5e['aLzOy'] = function (_0x3e049f, _0x55b505) {
        return _0x3e049f * _0x55b505;
    }, _0x4eaa5e['GxLPs'] = function (_0x338ae5, _0x1a74bd) {
        return _0x338ae5 * _0x1a74bd;
    }, _0x4eaa5e['bvyNj'] = function (_0x4fdf04, _0x49eb78) {
        return _0x4fdf04 * _0x49eb78;
    }, _0x4eaa5e['EMzaN'] = function (_0x199d89, _0x4c04e4) {
        return _0x199d89 - _0x4c04e4;
    }, _0x4eaa5e['uxHzD'] = function (_0x11b332, _0x56a8af) {
        return _0x11b332 + _0x56a8af;
    }, _0x4eaa5e['GzKJW'] = function (_0x16e8bf, _0x4797e1) {
        return _0x16e8bf > _0x4797e1;
    }, _0x4eaa5e['LshBv'] = function (_0x3a447c, _0x246f52) {
        return _0x3a447c === _0x246f52;
    }, _0x4eaa5e['xGEeP'] = function (_0x7e1b69, _0x3bb608) {
        return _0x7e1b69 * _0x3bb608;
    }, _0x4eaa5e['Sszvq'] = function (_0x173a41, _0x4ec24c) {
        return _0x173a41 + _0x4ec24c;
    }, _0x4eaa5e['uzfNo'] = function (_0x28602a, _0x3cebdf) {
        return _0x28602a + _0x3cebdf;
    }, _0x4eaa5e['FRUZT'] = function (_0x3be3bd, _0x46eb36) {
        return _0x3be3bd < _0x46eb36;
    }, _0x4eaa5e['HwtYy'] = function (_0x1c8918, _0x515a53) {
        return _0x1c8918 + _0x515a53;
    }, _0x4eaa5e['gmgFb'] = function (_0x41340a, _0x52ba41) {
        return _0x41340a > _0x52ba41;
    };
    const _0x11325f = _0x4eaa5e;
    for (let _0x348f07 = 0x0; _0x348f07 < _0x372e36; _0x348f07++) {
        const _0x1a4edf = _0x348f07 * 0x3;
        if (_0x348f07 < _0x11325f['aLzOy'](_0x372e36, 0.75)) {
            const _0x2ef39c = Math['floor'](Math['random']() * 0x6);
            let _0x4d67fc, _0x5d92c8, _0x31471b;
            const _0xb72997 = 0xa, _0x2555fa = _0x11325f['GxLPs'](_0x11325f['GxLPs'](Math['random']() - 0.5, 0x2), _0xb72997), _0x3eeda1 = _0x11325f['bvyNj'](Math['random']() - 0.5, 0x2) * _0xb72997;
            if (_0x2ef39c === 0x0)
                _0x4d67fc = _0xb72997, _0x5d92c8 = _0x2555fa, _0x31471b = _0x3eeda1;
            else {
                if (_0x2ef39c === 0x1)
                    _0x4d67fc = -_0xb72997, _0x5d92c8 = _0x2555fa, _0x31471b = _0x3eeda1;
                else {
                    if (_0x2ef39c === 0x2)
                        _0x5d92c8 = _0xb72997, _0x4d67fc = _0x2555fa, _0x31471b = _0x3eeda1;
                    else {
                        if (_0x2ef39c === 0x3)
                            _0x5d92c8 = -_0xb72997, _0x4d67fc = _0x2555fa, _0x31471b = _0x3eeda1;
                        else
                            _0x2ef39c === 0x4 ? (_0x31471b = _0xb72997, _0x4d67fc = _0x2555fa, _0x5d92c8 = _0x3eeda1) : (_0x31471b = -_0xb72997, _0x4d67fc = _0x2555fa, _0x5d92c8 = _0x3eeda1);
                    }
                }
            }
            _0x31f0d9['pos'][_0x1a4edf] = _0x4d67fc, _0x31f0d9['pos'][_0x1a4edf + 0x1] = _0x11325f['EMzaN'](_0x5d92c8, 0xa), _0x31f0d9['pos'][_0x11325f['uxHzD'](_0x1a4edf, 0x2)] = _0x31471b, _0x37485a['setHex'](0xd42d68);
        } else {
            if (_0x348f07 < _0x372e36 * 0.9) {
                const _0x17c690 = _0x11325f['GzKJW'](Math['random'](), 0.5) ? 'x' : 'z';
                _0x31f0d9['pos'][_0x1a4edf] = _0x17c690 === 'x' ? _0x11325f['GxLPs'](_0x11325f['EMzaN'](Math['random'](), 0.5), 20.4) : _0x11325f['GzKJW'](Math['random'](), 0.5) ? 2.5 : -2.5, _0x31f0d9['pos'][_0x11325f['uxHzD'](_0x1a4edf, 0x1)] = (Math['random']() - 0.5) * 20.4 - 0xa, _0x31f0d9['pos'][_0x1a4edf + 0x2] = _0x11325f['LshBv'](_0x17c690, 'z') ? (Math['random']() - 0.5) * 20.4 : Math['random']() > 0.5 ? 2.5 : -2.5, _0x37485a['setHex'](0xffd700);
            } else {
                const _0x3c1f4c = Math['random']() * 6.28, _0x2776e7 = _0x11325f['bvyNj'](Math['exp'](Math['cos'](_0x3c1f4c)) - 0x2 * Math['cos'](_0x11325f['xGEeP'](0x4, _0x3c1f4c)) + Math['pow'](Math['sin'](_0x3c1f4c / 0xc), 0x5), 2.2);
                _0x31f0d9['pos'][_0x1a4edf] = _0x11325f['GxLPs'](Math['sin'](_0x3c1f4c), _0x2776e7), _0x31f0d9['pos'][_0x11325f['Sszvq'](_0x1a4edf, 0x1)] = _0x11325f['Sszvq'](Math['cos'](_0x3c1f4c) * _0x2776e7, 0x2), _0x31f0d9['pos'][_0x1a4edf + 0x2] = (Math['random']() - 0.5) * 0x4, _0x37485a['setHex'](0xfff1b8);
            }
        }
        _0x31f0d9['col'][_0x1a4edf] = _0x37485a['r'], _0x31f0d9['col'][_0x11325f['uzfNo'](_0x1a4edf, 0x1)] = _0x37485a['g'], _0x31f0d9['col'][_0x1a4edf + 0x2] = _0x37485a['b'];
        const _0x58c87f = Math['random'](), _0x2c3625 = Math['random']() * 6.28, _0x1df7a2 = _0x11325f['aLzOy'](0x1 - _0x58c87f, 0x18) * _0x11325f['uzfNo'](Math['pow'](Math['sin'](_0x11325f['aLzOy'](_0x58c87f, 0x23)), 0x2) * 0.4, 0.8) + (Math['random']() - 0.5) * 0x3;
        if (_0x11325f['FRUZT'](_0x348f07, _0x372e36 * 0.92)) {
            _0x4c0f94['pos'][_0x1a4edf] = Math['cos'](_0x2c3625) * _0x1df7a2 * Math['pow'](Math['random'](), 0.8), _0x4c0f94['pos'][_0x11325f['HwtYy'](_0x1a4edf, 0x1)] = _0x11325f['EMzaN'](_0x11325f['GxLPs'](_0x58c87f, 0x30), 0xf), _0x4c0f94['pos'][_0x1a4edf + 0x2] = Math['sin'](_0x2c3625) * _0x1df7a2 * Math['pow'](Math['random'](), 0.8);
            const _0x5e7519 = Math['random']();
            if (_0x11325f['gmgFb'](_0x5e7519, 0.88))
                _0x37485a['setHex'](0xffffff);
            else {
                if (_0x5e7519 > 0.6)
                    _0x37485a['setHex'](0xffd700);
                else
                    _0x37485a['setHSL'](0.35, 0.8, 0.25 + Math['random']() * 0.2);
            }
        } else
            _0x4c0f94['pos'][_0x1a4edf] = _0x11325f['EMzaN'](Math['random'](), 0.5) * 0x3, _0x4c0f94['pos'][_0x1a4edf + 0x1] = -0x16 + Math['random']() * 0x8, _0x4c0f94['pos'][_0x1a4edf + 0x2] = (Math['random']() - 0.5) * 0x3, _0x37485a['setHex'](0x5a2d2d);
        _0x4c0f94['col'][_0x1a4edf] = _0x37485a['r'], _0x4c0f94['col'][_0x1a4edf + 0x1] = _0x37485a['g'], _0x4c0f94['col'][_0x1a4edf + 0x2] = _0x37485a['b'];
    }
}
function _0x7af2b7() {
    const _0x4423d3 = {
        'rNjoN': 'canvas',
        'cLXbv': 'white',
        'nXZOS': 'transparent',
        'afHnl': function (_0x13c868, _0x22aa96) {
            return _0x13c868 < _0x22aa96;
        },
        'ZEpKx': function (_0x4dc486, _0x1068cb) {
            return _0x4dc486 * _0x1068cb;
        },
        'NGsgw': function (_0x11a33d, _0x4dc4f8) {
            return _0x11a33d * _0x4dc4f8;
        },
        'edzyt': function (_0x252544, _0x2360f8) {
            return _0x252544 + _0x2360f8;
        },
        'aYYqG': function (_0x2a86b6, _0x1f0bf3) {
            return _0x2a86b6 < _0x1f0bf3;
        },
        'WIpXI': function (_0x6955b3, _0x47df65) {
            return _0x6955b3 * _0x47df65;
        },
        'LnLnz': function (_0x355481, _0x43a891) {
            return _0x355481 * _0x43a891;
        },
        'xAbek': function (_0x23e31e, _0x21096d) {
            return _0x23e31e - _0x21096d;
        },
        'dNoWs': function (_0x25094b, _0x5a7e78) {
            return _0x25094b === _0x5a7e78;
        },
        'DpXyr': function (_0x3e737d, _0xcbad57) {
            return _0x3e737d === _0xcbad57;
        },
        'xQhWs': function (_0xcbe59, _0x6c38a1) {
            return _0xcbe59 - _0x6c38a1;
        },
        'eSQKS': function (_0x30c159, _0x26bc37, _0xa0ec4e) {
            return _0x30c159(_0x26bc37, _0xa0ec4e);
        },
        'lvVdg': function (_0x1b5fe2) {
            return _0x1b5fe2();
        },
        'mKOUg': 'color',
        'Hbkxj': 'mousedown',
        'JuznE': 'mousemove'
    };
    _0x369f09(), _0x4423d3['lvVdg'](_0xb636de), _0xa0e754 = new THREE['Scene'](), _0xf3a426 = new THREE['PerspectiveCamera'](0x3c, window['innerWidth'] / window['innerHeight'], 0x1, 0x3e8), _0xf3a426['position']['set'](0x0, 0x5, 0x78);
    const _0xdb02cd = {};
    _0xdb02cd['antialias'] = !![], _0xdb02cd['alpha'] = !![], _0x5e0994 = new THREE['WebGLRenderer'](_0xdb02cd), _0x5e0994['setSize'](window['innerWidth'], window['innerHeight']), _0x5e0994['setPixelRatio'](Math['min'](window['devicePixelRatio'], 0x2)), document['body']['appendChild'](_0x5e0994['domElement']);
    const _0x2f5257 = (function () {
        const _0x1e5b00 = document['createElement'](_0x4423d3['rNjoN']);
        _0x1e5b00['width'] = 0x40, _0x1e5b00['height'] = 0x40;
        const _0x54f10d = _0x1e5b00['getContext']('2d'), _0x4fd3d8 = _0x54f10d['createRadialGradient'](0x20, 0x20, 0x0, 0x20, 0x20, 0x20);
        return _0x4fd3d8['addColorStop'](0x0, _0x4423d3['cLXbv']), _0x4fd3d8['addColorStop'](0.5, 'rgba(255,255,255,0.8)'), _0x4fd3d8['addColorStop'](0x1, _0x4423d3['nXZOS']), _0x54f10d['fillStyle'] = _0x4fd3d8, _0x54f10d['fillRect'](0x0, 0x0, 0x40, 0x40), new THREE['CanvasTexture'](_0x1e5b00);
    }());
    _0x5e37ed = new THREE['Points'](new THREE['BufferGeometry'](), new THREE['PointsMaterial']({
        'size': 0.8,
        'vertexColors': !![],
        'blending': THREE['AdditiveBlending'],
        'transparent': !![],
        'map': _0x2f5257,
        'depthWrite': ![]
    })), _0x5204eb = new Float32Array(_0x31f0d9['pos']), _0x154fd4 = new Float32Array(_0x31f0d9['col']), _0x5e37ed['geometry']['setAttribute']('position', new THREE['BufferAttribute'](_0x5204eb, 0x3)), _0x5e37ed['geometry']['setAttribute'](_0x4423d3['mKOUg'], new THREE['BufferAttribute'](_0x154fd4, 0x3)), _0xa0e754['add'](_0x5e37ed), _0x3a4661 = (function () {
        const _0x15ad98 = new THREE['BufferGeometry'](), _0x2ff3f0 = new Float32Array(0x4b0 * 0x3);
        for (let _0xdbd995 = 0x0; _0x4423d3['afHnl'](_0xdbd995, 0x4b0); _0xdbd995++) {
            _0x2ff3f0[_0x4423d3['ZEpKx'](_0xdbd995, 0x3)] = (Math['random']() - 0.5) * 0x12c, _0x2ff3f0[_0x4423d3['NGsgw'](_0xdbd995, 0x3) + 0x1] = Math['random']() * 0xc8 - 0x32, _0x2ff3f0[_0x4423d3['edzyt'](_0x4423d3['NGsgw'](_0xdbd995, 0x3), 0x2)] = (Math['random']() - 0.5) * 0x12c;
        }
        _0x15ad98['setAttribute']('position', new THREE['BufferAttribute'](_0x2ff3f0, 0x3));
        const _0x4e7b23 = {};
        return _0x4e7b23['size'] = 0.5, _0x4e7b23['color'] = 0xffffff, _0x4e7b23['transparent'] = !![], _0x4e7b23['opacity'] = 0.6, _0x4e7b23['map'] = _0x2f5257, new THREE['Points'](_0x15ad98, new THREE['PointsMaterial'](_0x4e7b23));
    }()), _0xa0e754['add'](_0x3a4661), _0x5e9051 = (function () {
        const _0x8ab32e = new THREE['BufferGeometry'](), _0x21182f = new Float32Array(_0x3790c4 * 0x3);
        for (let _0x2d2518 = 0x0; _0x4423d3['aYYqG'](_0x2d2518, _0x3790c4); _0x2d2518++) {
            const _0x492959 = _0x4423d3['WIpXI'](Math['random'](), 6.28), _0x19a369 = 0x4 + Math['pow'](Math['random'](), 0.6) * 0x37;
            _0x21182f[_0x2d2518 * 0x3] = Math['cos'](_0x492959) * _0x19a369, _0x21182f[_0x4423d3['edzyt'](_0x2d2518 * 0x3, 0x1)] = -0x16, _0x21182f[_0x4423d3['edzyt'](_0x4423d3['LnLnz'](_0x2d2518, 0x3), 0x2)] = Math['sin'](_0x492959) * _0x19a369;
        }
        return _0x8ab32e['setAttribute']('position', new THREE['BufferAttribute'](_0x21182f, 0x3)), new THREE['Points'](_0x8ab32e, new THREE['PointsMaterial']({
            'size': 0.7,
            'color': 0xff69b4,
            'transparent': !![],
            'opacity': 0.3,
            'blending': THREE['AdditiveBlending'],
            'map': _0x2f5257,
            'depthWrite': ![]
        }));
    }()), _0xa0e754['add'](_0x5e9051);
    const _0x4a7a78 = (_0x32c6ff, _0x3d3fb3) => {
            _0x4a3868 = !![], _0x392a3a = _0x32c6ff, _0x4bc130 = _0x3d3fb3, _0x3b84ef = _0x32c6ff, _0x52f286 = _0x3d3fb3;
        }, _0x21decd = (_0x4cf5d5, _0x3f0b69) => {
            if (!_0x4a3868)
                return;
            _0x5e37ed['rotation']['y'] += _0x4423d3['xAbek'](_0x4cf5d5, _0x3b84ef) * 0.007, _0x5e37ed['rotation']['x'] += (_0x3f0b69 - _0x52f286) * 0.007, _0x3b84ef = _0x4cf5d5, _0x52f286 = _0x3f0b69;
        }, _0xaccd8f = () => {
            if (_0x4a3868) {
                if (Math['hypot'](_0x4423d3['xAbek'](_0x3b84ef, _0x392a3a), _0x4423d3['xAbek'](_0x52f286, _0x4bc130)) < 0xa)
                    _0x3b156b();
                _0x4a3868 = ![];
            }
        }, _0x5b63d9 = _0x5e0994['domElement'], _0x145eba = {};
    _0x145eba['passive'] = ![], _0x5b63d9['addEventListener']('touchstart', _0x345a47 => {
        _0x345a47['preventDefault']();
        if (_0x4423d3['dNoWs'](_0x345a47['touches']['length'], 0x1))
            _0x4a7a78(_0x345a47['touches'][0x0]['clientX'], _0x345a47['touches'][0x0]['clientY']);
        else {
            if (_0x4423d3['DpXyr'](_0x345a47['touches']['length'], 0x2))
                _0x327822 = Math['hypot'](_0x345a47['touches'][0x0]['clientX'] - _0x345a47['touches'][0x1]['clientX'], _0x4423d3['xQhWs'](_0x345a47['touches'][0x0]['clientY'], _0x345a47['touches'][0x1]['clientY']));
        }
    }, _0x145eba);
    const _0xfd79e8 = {};
    _0xfd79e8['passive'] = ![], _0x5b63d9['addEventListener']('touchmove', _0x298d3b => {
        _0x298d3b['preventDefault']();
        if (_0x298d3b['touches']['length'] === 0x1)
            _0x21decd(_0x298d3b['touches'][0x0]['clientX'], _0x298d3b['touches'][0x0]['clientY']);
        else {
            if (_0x298d3b['touches']['length'] === 0x2) {
                const _0x3e1d31 = Math['hypot'](_0x298d3b['touches'][0x0]['clientX'] - _0x298d3b['touches'][0x1]['clientX'], _0x298d3b['touches'][0x0]['clientY'] - _0x298d3b['touches'][0x1]['clientY']);
                _0xf3a426['position']['z'] -= (_0x3e1d31 - _0x327822) * 0.7, _0xf3a426['position']['z'] = Math['max'](0x1e, Math['min'](_0xf3a426['position']['z'], 0xfa)), _0x327822 = _0x3e1d31;
            }
        }
    }, _0xfd79e8);
    const _0x484d1c = {};
    _0x484d1c['passive'] = ![], _0x5b63d9['addEventListener']('touchend', _0x409fa9 => {
        _0x409fa9['preventDefault'](), _0xaccd8f();
    }, _0x484d1c), window['addEventListener'](_0x4423d3['Hbkxj'], _0x1c525b => {
        if (_0x1c525b['target']['tagName'] !== 'BUTTON')
            _0x4423d3['eSQKS'](_0x4a7a78, _0x1c525b['clientX'], _0x1c525b['clientY']);
    }), window['addEventListener'](_0x4423d3['JuznE'], _0x3e20c3 => _0x21decd(_0x3e20c3['clientX'], _0x3e20c3['clientY'])), window['addEventListener']('mouseup', _0xaccd8f);
    const _0x7c9bff = {};
    _0x7c9bff['passive'] = !![], window['addEventListener']('wheel', _0xaba094 => {
        _0xf3a426['position']['z'] += _0xaba094['deltaY'] * 0.1;
    }, _0x7c9bff), document['getElementById']('reset-btn')['onclick'] = _0x25f37c => {
        const _0x41053e = {};
        _0x41053e['x'] = 0x0, _0x41053e['y'] = 0x5, _0x41053e['z'] = _0x1c188f ? 0x55 : 0x78, new TWEEN['Tween'](_0xf3a426['position'])['to'](_0x41053e, 0x3e8)['easing'](TWEEN['Easing']['Quadratic']['Out'])['start']();
        const _0xab3124 = {};
        _0xab3124['x'] = 0x0, _0xab3124['y'] = 0x0, new TWEEN['Tween'](_0x5e37ed['rotation'])['to'](_0xab3124, 0x3e8)['start']();
    }, document['getElementById']('back-gift-btn')['onclick'] = () => {
        const _0x2b1c76 = {};
        _0x2b1c76['transition'] = 0x0, _0x2b1c76['bloom'] = 0x0, _0x2b1c76['gravity'] = 0x0, _0x2b1c76['drift'] = 0x0, _0x2b1c76['shimmer'] = 0x0, new TWEEN['Tween'](_0x42614e)['to'](_0x2b1c76, 0x5dc)['easing'](TWEEN['Easing']['Exponential']['InOut'])['start'](), _0x1c188f = ![], document['getElementById']('back-gift-btn')['style']['display'] = 'none', document['getElementById']('hint')['style']['opacity'] = 0x1;
    }, _0x1a1c09();
}
function _0x3b156b() {
    const _0x468e0e = {
        'BXlUe': function (_0x12bbcb, _0x12ed12, _0x1c86c9) {
            return _0x12bbcb(_0x12ed12, _0x1c86c9);
        }
    };
    if (!_0x1c188f) {
        _0x1c188f = !![], _0x54a434 = Date['now'](), document['getElementById']('hint')['style']['opacity'] = 0x0, document['getElementById']('back-gift-btn')['style']['display'] = 'block';
        const _0x4ab644 = {};
        _0x4ab644['bloom'] = 2.2, _0x4ab644['shimmer'] = 3.5, new TWEEN['Tween'](_0x42614e)['to'](_0x4ab644, 0x384)['easing'](TWEEN['Easing']['Back']['Out'])['onComplete'](() => {
            const _0x5101c2 = {};
            _0x5101c2['drift'] = 1.2, _0x5101c2['gravity'] = 0x18, new TWEEN['Tween'](_0x42614e)['to'](_0x5101c2, 0xaf0)['easing'](TWEEN['Easing']['Quadratic']['In'])['start']();
            const _0x45446c = {};
            _0x45446c['transition'] = 0x1, _0x45446c['bloom'] = 0x0, _0x45446c['shimmer'] = 0x0, new TWEEN['Tween'](_0x42614e)['to'](_0x45446c, 0xe10)['easing'](TWEEN['Easing']['Quartic']['InOut'])['start']();
        })['start'](), _0x468e0e['BXlUe'](setTimeout, () => document['getElementById']('top-tip')['style']['opacity'] = 0x1, 0x3e8);
        const _0x55157f = {};
        _0x55157f['z'] = 0x55, new TWEEN['Tween'](_0xf3a426['position'])['to'](_0x55157f, 0xfa0)['easing'](TWEEN['Easing']['Cubic']['InOut'])['start']();
    } else {
        const _0x742c42 = _0x42614e['transition'] < 1.5 ? 0x2 : 0x1, _0x58018d = {};
        _0x58018d['transition'] = _0x742c42, new TWEEN['Tween'](_0x42614e)['to'](_0x58018d, 0x5dc)['easing'](TWEEN['Easing']['Exponential']['InOut'])['start']();
    }
}
function _0x1a1c09() {
    const _0x2b1379 = {
        'gyPei': function (_0x1bc21a, _0x40752a) {
            return _0x1bc21a(_0x40752a);
        },
        'vtYOV': function (_0x5b1a2e, _0x20644b) {
            return _0x5b1a2e >= _0x20644b;
        },
        'WCKrj': function (_0x33ae8c, _0x1be222) {
            return _0x33ae8c === _0x1be222;
        },
        'WIfPR': function (_0x4eb64e, _0x48d802) {
            return _0x4eb64e + _0x48d802;
        },
        'CwtpV': function (_0x2a9656, _0x7d02c5) {
            return _0x2a9656 - _0x7d02c5;
        },
        'ucEOu': function (_0x338555, _0x5d3241) {
            return _0x338555 % _0x5d3241;
        },
        'dnBBT': function (_0x2db119, _0x2f46dc) {
            return _0x2db119 <= _0x2f46dc;
        },
        'iFSga': function (_0x16ff6e, _0x419a9) {
            return _0x16ff6e * _0x419a9;
        },
        'vYnep': function (_0x2ecb2e, _0x5f227d) {
            return _0x2ecb2e * _0x5f227d;
        },
        'jpIda': function (_0x57d096, _0x27ddec) {
            return _0x57d096 * _0x27ddec;
        },
        'dTksy': function (_0x1de8c6, _0x23c5c4) {
            return _0x1de8c6 + _0x23c5c4;
        },
        'uNsoX': function (_0x1941de, _0xa10167) {
            return _0x1941de - _0xa10167;
        },
        'wXCKB': function (_0x593995, _0x4f9fde) {
            return _0x593995 - _0x4f9fde;
        },
        'EpLyw': function (_0x434902, _0x1829b) {
            return _0x434902 + _0x1829b;
        },
        'UeocF': function (_0x210110, _0x5a02d9) {
            return _0x210110 + _0x5a02d9;
        },
        'Wdodx': function (_0x2a4b14, _0x4081e8) {
            return _0x2a4b14 + _0x4081e8;
        },
        'DiSFk': function (_0x50e7c6, _0x2fcda7) {
            return _0x50e7c6 * _0x2fcda7;
        },
        'QfmLC': function (_0x3930d6, _0x37b83c) {
            return _0x3930d6 * _0x37b83c;
        },
        'eEOvH': function (_0x40aa55, _0x223b04) {
            return _0x40aa55 * _0x223b04;
        },
        'KFcIx': function (_0x16b0ab, _0x1bd85e) {
            return _0x16b0ab + _0x1bd85e;
        },
        'lRQDX': function (_0x19aaee, _0x172a69) {
            return _0x19aaee + _0x172a69;
        },
        'UBMFO': function (_0x53afa7, _0x3a27b3) {
            return _0x53afa7 + _0x3a27b3;
        },
        'NAnBT': function (_0x514aa8, _0x297858) {
            return _0x514aa8 > _0x297858;
        },
        'RfmnM': function (_0x2dc8ad, _0x4ec248) {
            return _0x2dc8ad + _0x4ec248;
        },
        'yNiRW': function (_0x3d2b1a, _0x15d7c0) {
            return _0x3d2b1a < _0x15d7c0;
        },
        'dcNxp': function (_0x4f455c, _0xc6f4d) {
            return _0x4f455c + _0xc6f4d;
        },
        'jJIyo': function (_0x4c158b, _0x1de6ec) {
            return _0x4c158b + _0x1de6ec;
        },
        'dbueg': function (_0x55c97a, _0x7a2e66) {
            return _0x55c97a + _0x7a2e66;
        }
    };
    _0x2b1379['gyPei'](requestAnimationFrame, _0x1a1c09), TWEEN['update']();
    if (!_0x4a3868)
        _0x5e37ed['rotation']['y'] += 0.003;
    const _0x5e5615 = Date['now']();
    if (_0x1c188f && _0x2b1379['vtYOV'](_0x42614e['transition'], 1.5)) {
        if (_0x5e5615 - _0x54a434 > 0x1388) {
            _0x54a434 = _0x5e5615;
            let _0x2abec5 = _0x2b1379['WCKrj'](_0x42614e['textType'], 0x0) ? 0x1 : 0x0;
            const _0x2ddcdc = {};
            _0x2ddcdc['textType'] = _0x2abec5, new TWEEN['Tween'](_0x42614e)['to'](_0x2ddcdc, 0x5dc)['easing'](TWEEN['Easing']['Quadratic']['InOut'])['start']();
        }
    }
    const _0x12ad8f = _0x5e5615 * 0.001, {
            transition: _0x1e3aee,
            bloom: _0x1a7627,
            shimmer: _0x1d4ed1,
            gravity: _0xaf2bb8,
            drift: _0x5f21a6,
            textType: _0x5d6027
        } = _0x42614e;
    for (let _0x3a49fe = 0x0; _0x3a49fe < _0x372e36; _0x3a49fe++) {
        const _0x4bdc02 = _0x3a49fe * 0x3;
        let _0x2496f6, _0x4dacf4, _0x235520, _0x3b335f, _0x42f5bb, _0x428e83;
        const _0x5a37d1 = {};
        _0x5a37d1['x'] = 0x0, _0x5a37d1['y'] = 0x0;
        const _0x1066a6 = _0xf13520[_0x3a49fe % _0xf13520['length']] || _0x5a37d1, _0x5ab762 = {};
        _0x5ab762['x'] = 0x0, _0x5ab762['y'] = 0x0;
        const _0x1d8551 = _0x9af4d8[_0x3a49fe % _0x9af4d8['length']] || _0x5ab762, _0x14951e = _0x2b1379['WIfPR'](_0x1066a6['x'] * (0x1 - _0x5d6027), _0x1d8551['x'] * _0x5d6027), _0xd07048 = _0x1066a6['y'] * _0x2b1379['CwtpV'](0x1, _0x5d6027) + _0x1d8551['y'] * _0x5d6027, _0x45eb9d = _0x2b1379['CwtpV'](_0x2b1379['ucEOu'](_0x3a49fe, 0x64) / 0x64, 0.5) * 0x5, _0x134d98 = _0x14951e * 0.015, _0x4edeeb = (_0x12ad8f * 0.15 - _0x134d98) % 0x1;
        _0x37485a['setHSL'](_0x4edeeb, 0.85, 0.6);
        const _0x1ad9fa = _0x37485a['r'], _0x2eab15 = _0x37485a['g'], _0x1b0754 = _0x37485a['b'];
        if (_0x2b1379['dnBBT'](_0x1e3aee, 0x1)) {
            const _0x1d3221 = '0|2|4|1|5|3'['split']('|');
            let _0x5b476b = 0x0;
            while (!![]) {
                switch (_0x1d3221[_0x5b476b++]) {
                case '0':
                    _0x2496f6 = _0x2b1379['iFSga'](_0x31f0d9['pos'][_0x4bdc02], 0x1 - _0x1e3aee) + _0x2b1379['iFSga'](_0x4c0f94['pos'][_0x4bdc02], _0x1e3aee);
                    continue;
                case '1':
                    _0x3b335f = _0x2b1379['vYnep'](_0x31f0d9['col'][_0x4bdc02], 0x1 - _0x1e3aee) + _0x2b1379['iFSga'](_0x4c0f94['col'][_0x4bdc02], _0x1e3aee);
                    continue;
                case '2':
                    _0x4dacf4 = _0x2b1379['jpIda'](_0x31f0d9['pos'][_0x4bdc02 + 0x1], 0x1 - _0x1e3aee) + _0x4c0f94['pos'][_0x4bdc02 + 0x1] * _0x1e3aee;
                    continue;
                case '3':
                    _0x428e83 = _0x31f0d9['col'][_0x2b1379['dTksy'](_0x4bdc02, 0x2)] * (0x1 - _0x1e3aee) + _0x4c0f94['col'][_0x4bdc02 + 0x2] * _0x1e3aee;
                    continue;
                case '4':
                    _0x235520 = _0x31f0d9['pos'][_0x4bdc02 + 0x2] * _0x2b1379['uNsoX'](0x1, _0x1e3aee) + _0x4c0f94['pos'][_0x4bdc02 + 0x2] * _0x1e3aee;
                    continue;
                case '5':
                    _0x42f5bb = _0x2b1379['WIfPR'](_0x2b1379['vYnep'](_0x31f0d9['col'][_0x4bdc02 + 0x1], 0x1 - _0x1e3aee), _0x4c0f94['col'][_0x4bdc02 + 0x1] * _0x1e3aee);
                    continue;
                }
                break;
            }
        } else {
            const _0x18ece3 = Math['min'](0x1, _0x2b1379['wXCKB'](_0x1e3aee, 0x1));
            _0x2496f6 = _0x2b1379['EpLyw'](_0x4c0f94['pos'][_0x4bdc02] * (0x1 - _0x18ece3), _0x14951e * _0x18ece3), _0x4dacf4 = _0x4c0f94['pos'][_0x2b1379['UeocF'](_0x4bdc02, 0x1)] * _0x2b1379['uNsoX'](0x1, _0x18ece3) + _0xd07048 * _0x18ece3, _0x235520 = _0x2b1379['Wdodx'](_0x4c0f94['pos'][_0x2b1379['EpLyw'](_0x4bdc02, 0x2)] * (0x1 - _0x18ece3), _0x45eb9d * _0x18ece3), _0x3b335f = _0x2b1379['EpLyw'](_0x4c0f94['col'][_0x4bdc02] * (0x1 - _0x18ece3), _0x2b1379['DiSFk'](_0x1ad9fa, _0x18ece3)), _0x42f5bb = _0x4c0f94['col'][_0x4bdc02 + 0x1] * _0x2b1379['CwtpV'](0x1, _0x18ece3) + _0x2eab15 * _0x18ece3, _0x428e83 = _0x2b1379['Wdodx'](_0x4c0f94['col'][_0x4bdc02 + 0x2] * (0x1 - _0x18ece3), _0x1b0754 * _0x18ece3);
        }
        const _0x587223 = _0x3a49fe * 0.137 + _0x2b1379['QfmLC'](_0x5f21a6, _0x12ad8f) * 0.5, _0x29adc5 = _0x3a49fe * 0.618, _0x214406 = _0x2b1379['eEOvH'](_0x1a7627, 0x69) * (0x1 - Math['pow'](Math['min'](_0x1e3aee, 0x1), 1.8)), _0x568601 = -_0xaf2bb8 * Math['pow'](0x1 - Math['min'](_0x1e3aee, 0x1), 2.5) * (0x1 + Math['sin'](_0x3a49fe)) * 0.2;
        _0x5204eb[_0x4bdc02] = _0x2496f6 + Math['cos'](_0x587223) * Math['sin'](_0x29adc5) * _0x214406, _0x5204eb[_0x2b1379['KFcIx'](_0x4bdc02, 0x1)] = _0x4dacf4 + _0x2b1379['vYnep'](Math['sin'](_0x587223) * Math['sin'](_0x29adc5), _0x214406) + _0x568601, _0x5204eb[_0x2b1379['lRQDX'](_0x4bdc02, 0x2)] = _0x2b1379['UBMFO'](_0x235520, Math['cos'](_0x29adc5) * _0x214406);
        const _0x2c6c6e = _0x2b1379['NAnBT'](Math['sin'](_0x12ad8f * 0x12 + _0x3a49fe), 0.85) ? _0x1d4ed1 : 0x0;
        _0x154fd4[_0x4bdc02] = _0x3b335f + _0x2c6c6e, _0x154fd4[_0x4bdc02 + 0x1] = _0x42f5bb + _0x2c6c6e, _0x154fd4[_0x4bdc02 + 0x2] = _0x2b1379['RfmnM'](_0x428e83, _0x2c6c6e);
    }
    _0x5e37ed['geometry']['attributes']['position']['needsUpdate'] = !![], _0x5e37ed['geometry']['attributes']['color']['needsUpdate'] = !![];
    if (_0x5e9051) {
        const _0x29fc44 = _0x5e9051['geometry']['attributes']['position']['array'];
        for (let _0x3a06ab = 0x0; _0x2b1379['yNiRW'](_0x3a06ab, _0x3790c4); _0x3a06ab++) {
            const _0x2f4530 = _0x3a06ab * 0x3, _0x309a4f = Math['sqrt'](_0x2b1379['dcNxp'](_0x29fc44[_0x2f4530] ** 0x2, _0x29fc44[_0x2b1379['jJIyo'](_0x2f4530, 0x2)] ** 0x2));
            _0x29fc44[_0x2f4530 + 0x1] = -0x16 + Math['sin'](_0x2b1379['lRQDX'](_0x12ad8f * 0x2, _0x309a4f * 0.2)) * 0x2;
        }
        _0x5e9051['geometry']['attributes']['position']['needsUpdate'] = !![];
    }
    const _0x5506e4 = _0x3a4661['geometry']['attributes']['position']['array'];
    for (let _0x17e189 = 0x0; _0x17e189 < 0x4b0; _0x17e189++) {
        _0x5506e4[_0x17e189 * 0x3 + 0x1] -= 0.15;
        if (_0x5506e4[_0x2b1379['EpLyw'](_0x17e189 * 0x3, 0x1)] < -0x3c)
            _0x5506e4[_0x2b1379['dbueg'](_0x2b1379['eEOvH'](_0x17e189, 0x3), 0x1)] = 0x64;
    }
    _0x3a4661['geometry']['attributes']['position']['needsUpdate'] = !![], _0x5e0994['render'](_0xa0e754, _0xf3a426);
}
window['onresize'] = () => {
    const _0xf8853b = {};
    _0xf8853b['UDXvE'] = function (_0x2e9c4f, _0x2d18c5) {
        return _0x2e9c4f / _0x2d18c5;
    };
    const _0x4fd9d4 = _0xf8853b;
    _0xf3a426 && (_0xf3a426['aspect'] = _0x4fd9d4['UDXvE'](window['innerWidth'], window['innerHeight']), _0xf3a426['updateProjectionMatrix'](), _0x5e0994['setSize'](window['innerWidth'], window['innerHeight']));
};