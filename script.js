const _0x44d60d = (function () {
        let _0x2c1ae5 = !![];
        return function (_0x5bb01, _0x5b6fe6) {
            const _0x568577 = _0x2c1ae5 ? function () {
                if (_0x5b6fe6) {
                    const _0x40c811 = _0x5b6fe6['apply'](_0x5bb01, arguments);
                    return _0x5b6fe6 = null, _0x40c811;
                }
            } : function () {
            };
            return _0x2c1ae5 = ![], _0x568577;
        };
    }()), _0x4966ee = _0x44d60d(this, function () {
        let _0x1cf988;
        try {
            const _0x37b017 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
            _0x1cf988 = _0x37b017();
        } catch (_0x3a7789) {
            _0x1cf988 = window;
        }
        const _0x426d85 = _0x1cf988['console'] = _0x1cf988['console'] || {}, _0x2906fc = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let _0x5b6a36 = 0x0; _0x5b6a36 < _0x2906fc['length']; _0x5b6a36++) {
            const _0x5de425 = _0x44d60d['constructor']['prototype']['bind'](_0x44d60d), _0x4d409d = _0x2906fc[_0x5b6a36], _0x439681 = _0x426d85[_0x4d409d] || _0x5de425;
            _0x5de425['__proto__'] = _0x44d60d['bind'](_0x44d60d), _0x5de425['toString'] = _0x439681['toString']['bind'](_0x439681), _0x426d85[_0x4d409d] = _0x5de425;
        }
    });
_0x4966ee(), document['addEventListener']('DOMContentLoaded', function () {
    var _0x41760a = document['getElementById']('btn-enter');
    _0x41760a && _0x41760a['addEventListener']('click', function () {
        var _0x2271d5 = document['getElementById']('pw-input')['value'], _0x556bae = function (_0x281a18) {
                var _0x151ce9 = 0x0;
                if (_0x281a18['length'] === 0x0)
                    return _0x151ce9;
                for (var _0x4f130a = 0x0; _0x4f130a < _0x281a18['length']; _0x4f130a++) {
                    var _0xb2b839 = _0x281a18['charCodeAt'](_0x4f130a);
                    _0x151ce9 = (_0x151ce9 << 0x5) - _0x151ce9 + _0xb2b839, _0x151ce9 = _0x151ce9 & _0x151ce9;
                }
                return _0x151ce9;
            };
        if (_0x556bae(_0x2271d5) === 0x170824) {
            var _0x4fcf91 = document['getElementById']('bgm');
            if (_0x4fcf91)
                _0x4fcf91['play']()['catch'](function (_0x3ab5fe) {
                    console['log']('BGM\x20play\x20failed/waiting\x20interaction');
                });
            var _0x38cb13 = document['getElementById']('password-overlay');
            _0x38cb13['style']['opacity'] = '0', setTimeout(function () {
                _0x38cb13['style']['display'] = 'none';
                if (typeof init === 'function')
                    init();
            }, 0x3e8);
        } else
            alert('密码不对哦~\x20是一个日期\x20(12xx)'), document['getElementById']('pw-input')['value'] = '';
    }), document['oncontextmenu'] = function () {
        return ![];
    }, document['onkeydown'] = function (_0x320f4d) {
        if (_0x320f4d['keyCode'] == 0x7b || _0x320f4d['ctrlKey'] && _0x320f4d['shiftKey'] && _0x320f4d['keyCode'] == 0x49)
            return ![];
    };
});
let scene, camera, renderer, points, snowPoints, haloPoints, mixedPos, mixedCol, vPointsEN = [], vPointsCN = [];
const COUNT = 0x9470, HALO_COUNT = 0x3a98, gift = {
        'pos': new Float32Array(COUNT * 0x3),
        'col': new Float32Array(COUNT * 0x3)
    }, tree = {
        'pos': new Float32Array(COUNT * 0x3),
        'col': new Float32Array(COUNT * 0x3)
    }, state = {
        'transition': 0x0,
        'bloom': 0x0,
        'drift': 0x0,
        'gravity': 0x0,
        'shimmer': 0x0,
        'textType': 0x0
    };
let isDragging = ![], hasStarted = ![], lastX = 0x0, lastY = 0x0, startX = 0x0, startY = 0x0, initialPinchDist = 0x0, lastTextUpdateTime = 0x0;
const colorTool = new THREE['Color']();
function prepareText() {
    const _0x42c7cb = document['createElement']('canvas'), _0x3ac9be = _0x42c7cb['getContext']('2d');
    _0x42c7cb['width'] = 0x3e8, _0x42c7cb['height'] = 0x190, _0x3ac9be['fillStyle'] = 'white', _0x3ac9be['textAlign'] = 'center', _0x3ac9be['font'] = 'bold\x20120px\x20Arial', _0x3ac9be['fillText']('MERRY', 0x1f4, 0x96), _0x3ac9be['fillText']('CHRISTMAS', 0x1f4, 0x12c);
    let _0x39aa40 = _0x3ac9be['getImageData'](0x0, 0x0, 0x3e8, 0x190)['data'];
    for (let _0x4bede9 = 0x0; _0x4bede9 < 0x190; _0x4bede9 += 0x4)
        for (let _0x410855 = 0x0; _0x410855 < 0x3e8; _0x410855 += 0x4)
            if (_0x39aa40[(_0x4bede9 * 0x3e8 + _0x410855) * 0x4] > 0x80)
                vPointsEN['push']({
                    'x': (_0x410855 - 0x1f4) * 0.15,
                    'y': (0xc8 - _0x4bede9) * 0.15
                });
    _0x3ac9be['clearRect'](0x0, 0x0, 0x3e8, 0x190), _0x3ac9be['font'] = 'bold\x20180px\x20\x22Microsoft\x20YaHei\x22,\x20sans-serif', _0x3ac9be['fillText']('圣诞快乐', 0x1f4, 0xf0);
    let _0x133f7f = _0x3ac9be['getImageData'](0x0, 0x0, 0x3e8, 0x190)['data'];
    for (let _0x3cd80a = 0x0; _0x3cd80a < 0x190; _0x3cd80a += 0x4)
        for (let _0x422785 = 0x0; _0x422785 < 0x3e8; _0x422785 += 0x4)
            if (_0x133f7f[(_0x3cd80a * 0x3e8 + _0x422785) * 0x4] > 0x80)
                vPointsCN['push']({
                    'x': (_0x422785 - 0x1f4) * 0.15,
                    'y': (0xc8 - _0x3cd80a) * 0.15
                });
}
function createData() {
    for (let _0x3b7f4a = 0x0; _0x3b7f4a < COUNT; _0x3b7f4a++) {
        const _0xeec7df = _0x3b7f4a * 0x3;
        if (_0x3b7f4a < COUNT * 0.75) {
            const _0x3858a7 = Math['floor'](Math['random']() * 0x6);
            let _0x1d00ac, _0x2e620a, _0x4a5b78;
            const _0x2e2d30 = 0xa, _0x3818f9 = (Math['random']() - 0.5) * 0x2 * _0x2e2d30, _0x9de680 = (Math['random']() - 0.5) * 0x2 * _0x2e2d30;
            if (_0x3858a7 === 0x0)
                _0x1d00ac = _0x2e2d30, _0x2e620a = _0x3818f9, _0x4a5b78 = _0x9de680;
            else {
                if (_0x3858a7 === 0x1)
                    _0x1d00ac = -_0x2e2d30, _0x2e620a = _0x3818f9, _0x4a5b78 = _0x9de680;
                else {
                    if (_0x3858a7 === 0x2)
                        _0x2e620a = _0x2e2d30, _0x1d00ac = _0x3818f9, _0x4a5b78 = _0x9de680;
                    else {
                        if (_0x3858a7 === 0x3)
                            _0x2e620a = -_0x2e2d30, _0x1d00ac = _0x3818f9, _0x4a5b78 = _0x9de680;
                        else
                            _0x3858a7 === 0x4 ? (_0x4a5b78 = _0x2e2d30, _0x1d00ac = _0x3818f9, _0x2e620a = _0x9de680) : (_0x4a5b78 = -_0x2e2d30, _0x1d00ac = _0x3818f9, _0x2e620a = _0x9de680);
                    }
                }
            }
            gift['pos'][_0xeec7df] = _0x1d00ac, gift['pos'][_0xeec7df + 0x1] = _0x2e620a - 0xa, gift['pos'][_0xeec7df + 0x2] = _0x4a5b78, colorTool['setHex'](0xd42d68);
        } else {
            if (_0x3b7f4a < COUNT * 0.9) {
                const _0x43b6cd = Math['random']() > 0.5 ? 'x' : 'z', _0x3e98ba = 10.2;
                gift['pos'][_0xeec7df] = _0x43b6cd === 'x' ? (Math['random']() - 0.5) * 20.4 : Math['random']() > 0.5 ? 2.5 : -2.5, gift['pos'][_0xeec7df + 0x1] = (Math['random']() - 0.5) * 20.4 - 0xa, gift['pos'][_0xeec7df + 0x2] = _0x43b6cd === 'z' ? (Math['random']() - 0.5) * 20.4 : Math['random']() > 0.5 ? 2.5 : -2.5, colorTool['setHex'](0xffd700);
            } else {
                const _0x9ded9d = Math['random']() * 6.28, _0x5c97c3 = (Math['exp'](Math['cos'](_0x9ded9d)) - 0x2 * Math['cos'](0x4 * _0x9ded9d) + Math['pow'](Math['sin'](_0x9ded9d / 0xc), 0x5)) * 2.2;
                gift['pos'][_0xeec7df] = Math['sin'](_0x9ded9d) * _0x5c97c3, gift['pos'][_0xeec7df + 0x1] = Math['cos'](_0x9ded9d) * _0x5c97c3 + 0x2, gift['pos'][_0xeec7df + 0x2] = (Math['random']() - 0.5) * 0x4, colorTool['setHex'](0xfff1b8);
            }
        }
        gift['col'][_0xeec7df] = colorTool['r'], gift['col'][_0xeec7df + 0x1] = colorTool['g'], gift['col'][_0xeec7df + 0x2] = colorTool['b'];
        const _0x37666f = Math['random'](), _0x5260df = Math['random']() * 6.28, _0xc8cf8b = (0x1 - _0x37666f) * 0x18 * (Math['pow'](Math['sin'](_0x37666f * 0x23), 0x2) * 0.4 + 0.8) + (Math['random']() - 0.5) * 0x3;
        if (_0x3b7f4a < COUNT * 0.92) {
            tree['pos'][_0xeec7df] = Math['cos'](_0x5260df) * _0xc8cf8b * Math['pow'](Math['random'](), 0.8), tree['pos'][_0xeec7df + 0x1] = _0x37666f * 0x30 - 0xf, tree['pos'][_0xeec7df + 0x2] = Math['sin'](_0x5260df) * _0xc8cf8b * Math['pow'](Math['random'](), 0.8);
            const _0x5cc3e2 = Math['random']();
            if (_0x5cc3e2 > 0.88)
                colorTool['setHex'](0xffffff);
            else {
                if (_0x5cc3e2 > 0.6)
                    colorTool['setHex'](0xffd700);
                else
                    colorTool['setHSL'](0.35, 0.8, 0.25 + Math['random']() * 0.2);
            }
        } else
            tree['pos'][_0xeec7df] = (Math['random']() - 0.5) * 0x3, tree['pos'][_0xeec7df + 0x1] = -0x16 + Math['random']() * 0x8, tree['pos'][_0xeec7df + 0x2] = (Math['random']() - 0.5) * 0x3, colorTool['setHex'](0x5a2d2d);
        tree['col'][_0xeec7df] = colorTool['r'], tree['col'][_0xeec7df + 0x1] = colorTool['g'], tree['col'][_0xeec7df + 0x2] = colorTool['b'];
    }
}
function init() {
    prepareText(), createData(), scene = new THREE['Scene'](), camera = new THREE['PerspectiveCamera'](0x3c, window['innerWidth'] / window['innerHeight'], 0x1, 0x3e8), camera['position']['set'](0x0, 0x5, 0x78), renderer = new THREE['WebGLRenderer']({
        'antialias': !![],
        'alpha': !![]
    }), renderer['setSize'](window['innerWidth'], window['innerHeight']), renderer['setPixelRatio'](Math['min'](window['devicePixelRatio'], 0x2)), document['body']['appendChild'](renderer['domElement']);
    const _0x5756be = (function () {
        const _0xaeea8e = document['createElement']('canvas');
        _0xaeea8e['width'] = 0x40, _0xaeea8e['height'] = 0x40;
        const _0x1d3224 = _0xaeea8e['getContext']('2d'), _0x4f0425 = _0x1d3224['createRadialGradient'](0x20, 0x20, 0x0, 0x20, 0x20, 0x20);
        return _0x4f0425['addColorStop'](0x0, 'white'), _0x4f0425['addColorStop'](0.5, 'rgba(255,255,255,0.8)'), _0x4f0425['addColorStop'](0x1, 'transparent'), _0x1d3224['fillStyle'] = _0x4f0425, _0x1d3224['fillRect'](0x0, 0x0, 0x40, 0x40), new THREE['CanvasTexture'](_0xaeea8e);
    }());
    points = new THREE['Points'](new THREE['BufferGeometry'](), new THREE['PointsMaterial']({
        'size': 0.8,
        'vertexColors': !![],
        'blending': THREE['AdditiveBlending'],
        'transparent': !![],
        'map': _0x5756be,
        'depthWrite': ![]
    })), mixedPos = new Float32Array(gift['pos']), mixedCol = new Float32Array(gift['col']), points['geometry']['setAttribute']('position', new THREE['BufferAttribute'](mixedPos, 0x3)), points['geometry']['setAttribute']('color', new THREE['BufferAttribute'](mixedCol, 0x3)), scene['add'](points), snowPoints = (function () {
        const _0x433d05 = new THREE['BufferGeometry'](), _0x1235e5 = new Float32Array(0x4b0 * 0x3);
        for (let _0x392656 = 0x0; _0x392656 < 0x4b0; _0x392656++) {
            _0x1235e5[_0x392656 * 0x3] = (Math['random']() - 0.5) * 0x12c, _0x1235e5[_0x392656 * 0x3 + 0x1] = Math['random']() * 0xc8 - 0x32, _0x1235e5[_0x392656 * 0x3 + 0x2] = (Math['random']() - 0.5) * 0x12c;
        }
        return _0x433d05['setAttribute']('position', new THREE['BufferAttribute'](_0x1235e5, 0x3)), new THREE['Points'](_0x433d05, new THREE['PointsMaterial']({
            'size': 0.5,
            'color': 0xffffff,
            'transparent': !![],
            'opacity': 0.6,
            'map': _0x5756be
        }));
    }()), scene['add'](snowPoints), haloPoints = (function () {
        const _0x78ed85 = new THREE['BufferGeometry'](), _0x16d1f8 = new Float32Array(HALO_COUNT * 0x3);
        for (let _0x3ed6fc = 0x0; _0x3ed6fc < HALO_COUNT; _0x3ed6fc++) {
            const _0x1953ff = Math['random']() * 6.28, _0x4123da = 0x4 + Math['pow'](Math['random'](), 0.6) * 0x37;
            _0x16d1f8[_0x3ed6fc * 0x3] = Math['cos'](_0x1953ff) * _0x4123da, _0x16d1f8[_0x3ed6fc * 0x3 + 0x1] = -0x16, _0x16d1f8[_0x3ed6fc * 0x3 + 0x2] = Math['sin'](_0x1953ff) * _0x4123da;
        }
        return _0x78ed85['setAttribute']('position', new THREE['BufferAttribute'](_0x16d1f8, 0x3)), new THREE['Points'](_0x78ed85, new THREE['PointsMaterial']({
            'size': 0.7,
            'color': 0xff69b4,
            'transparent': !![],
            'opacity': 0.3,
            'blending': THREE['AdditiveBlending'],
            'map': _0x5756be,
            'depthWrite': ![]
        }));
    }()), scene['add'](haloPoints);
    const _0x4e9659 = (_0x5cd0f0, _0x1dd5ff) => {
            isDragging = !![], startX = _0x5cd0f0, startY = _0x1dd5ff, lastX = _0x5cd0f0, lastY = _0x1dd5ff;
        }, _0x45097c = (_0x400023, _0x59e4cc) => {
            if (!isDragging)
                return;
            points['rotation']['y'] += (_0x400023 - lastX) * 0.007, points['rotation']['x'] += (_0x59e4cc - lastY) * 0.007, lastX = _0x400023, lastY = _0x59e4cc;
        }, _0x8cd2d4 = () => {
            if (isDragging) {
                if (Math['hypot'](lastX - startX, lastY - startY) < 0xa)
                    handleInteraction();
                isDragging = ![];
            }
        }, _0x19449e = renderer['domElement'];
    _0x19449e['addEventListener']('touchstart', _0x185ece => {
        _0x185ece['preventDefault']();
        if (_0x185ece['touches']['length'] === 0x1)
            _0x4e9659(_0x185ece['touches'][0x0]['clientX'], _0x185ece['touches'][0x0]['clientY']);
        else {
            if (_0x185ece['touches']['length'] === 0x2)
                initialPinchDist = Math['hypot'](_0x185ece['touches'][0x0]['clientX'] - _0x185ece['touches'][0x1]['clientX'], _0x185ece['touches'][0x0]['clientY'] - _0x185ece['touches'][0x1]['clientY']);
        }
    }, { 'passive': ![] }), _0x19449e['addEventListener']('touchmove', _0x20a0d3 => {
        _0x20a0d3['preventDefault']();
        if (_0x20a0d3['touches']['length'] === 0x1)
            _0x45097c(_0x20a0d3['touches'][0x0]['clientX'], _0x20a0d3['touches'][0x0]['clientY']);
        else {
            if (_0x20a0d3['touches']['length'] === 0x2) {
                const _0x65dc95 = Math['hypot'](_0x20a0d3['touches'][0x0]['clientX'] - _0x20a0d3['touches'][0x1]['clientX'], _0x20a0d3['touches'][0x0]['clientY'] - _0x20a0d3['touches'][0x1]['clientY']);
                camera['position']['z'] -= (_0x65dc95 - initialPinchDist) * 0.7, camera['position']['z'] = Math['max'](0x1e, Math['min'](camera['position']['z'], 0xfa)), initialPinchDist = _0x65dc95;
            }
        }
    }, { 'passive': ![] }), _0x19449e['addEventListener']('touchend', _0x23a8fd => {
        _0x23a8fd['preventDefault'](), _0x8cd2d4();
    }, { 'passive': ![] }), window['addEventListener']('mousedown', _0xe7adb7 => {
        if (_0xe7adb7['target']['tagName'] !== 'BUTTON')
            _0x4e9659(_0xe7adb7['clientX'], _0xe7adb7['clientY']);
    }), window['addEventListener']('mousemove', _0x124516 => _0x45097c(_0x124516['clientX'], _0x124516['clientY'])), window['addEventListener']('mouseup', _0x8cd2d4), window['addEventListener']('wheel', _0x2f6ca9 => {
        camera['position']['z'] += _0x2f6ca9['deltaY'] * 0.1;
    }, { 'passive': !![] }), document['getElementById']('reset-btn')['onclick'] = _0x34682c => {
        new TWEEN['Tween'](camera['position'])['to']({
            'x': 0x0,
            'y': 0x5,
            'z': hasStarted ? 0x55 : 0x78
        }, 0x3e8)['easing'](TWEEN['Easing']['Quadratic']['Out'])['start'](), new TWEEN['Tween'](points['rotation'])['to']({
            'x': 0x0,
            'y': 0x0
        }, 0x3e8)['start']();
    }, document['getElementById']('back-gift-btn')['onclick'] = () => {
        new TWEEN['Tween'](state)['to']({
            'transition': 0x0,
            'bloom': 0x0,
            'gravity': 0x0,
            'drift': 0x0,
            'shimmer': 0x0
        }, 0x5dc)['easing'](TWEEN['Easing']['Exponential']['InOut'])['start'](), hasStarted = ![], document['getElementById']('back-gift-btn')['style']['display'] = 'none', document['getElementById']('hint')['style']['opacity'] = 0x1;
    }, animate();
}
function handleInteraction() {
    if (!hasStarted)
        hasStarted = !![], lastTextUpdateTime = Date['now'](), document['getElementById']('hint')['style']['opacity'] = 0x0, document['getElementById']('back-gift-btn')['style']['display'] = 'block', new TWEEN['Tween'](state)['to']({
            'bloom': 2.2,
            'shimmer': 3.5
        }, 0x384)['easing'](TWEEN['Easing']['Back']['Out'])['onComplete'](() => {
            new TWEEN['Tween'](state)['to']({
                'drift': 1.2,
                'gravity': 0x18
            }, 0xaf0)['easing'](TWEEN['Easing']['Quadratic']['In'])['start'](), new TWEEN['Tween'](state)['to']({
                'transition': 0x1,
                'bloom': 0x0,
                'shimmer': 0x0
            }, 0xe10)['easing'](TWEEN['Easing']['Quartic']['InOut'])['start']();
        })['start'](), setTimeout(() => document['getElementById']('top-tip')['style']['opacity'] = 0x1, 0x3e8), new TWEEN['Tween'](camera['position'])['to']({ 'z': 0x55 }, 0xfa0)['easing'](TWEEN['Easing']['Cubic']['InOut'])['start']();
    else {
        const _0x101fd1 = state['transition'] < 1.5 ? 0x2 : 0x1;
        new TWEEN['Tween'](state)['to']({ 'transition': _0x101fd1 }, 0x5dc)['easing'](TWEEN['Easing']['Exponential']['InOut'])['start']();
    }
}
function animate() {
    requestAnimationFrame(animate), TWEEN['update']();
    if (!isDragging)
        points['rotation']['y'] += 0.003;
    const _0x27f42e = Date['now']();
    if (hasStarted && state['transition'] >= 1.5) {
        if (_0x27f42e - lastTextUpdateTime > 0x1388) {
            lastTextUpdateTime = _0x27f42e;
            let _0x31f4a5 = state['textType'] === 0x0 ? 0x1 : 0x0;
            new TWEEN['Tween'](state)['to']({ 'textType': _0x31f4a5 }, 0x5dc)['easing'](TWEEN['Easing']['Quadratic']['InOut'])['start']();
        }
    }
    const _0x48fcd0 = _0x27f42e * 0.001, {
            transition: _0x59c4af,
            bloom: _0x47ea88,
            shimmer: _0x24c71a,
            gravity: _0x475209,
            drift: _0x5b70e2,
            textType: _0x45c14d
        } = state;
    for (let _0x457475 = 0x0; _0x457475 < COUNT; _0x457475++) {
        const _0x52bea5 = _0x457475 * 0x3;
        let _0x2208a9, _0x2e873e, _0x2e41e4, _0x61bfb4, _0xefb6d5, _0x3deec9;
        const _0x3a03e9 = vPointsEN[_0x457475 % vPointsEN['length']] || {
                'x': 0x0,
                'y': 0x0
            }, _0x4a0921 = vPointsCN[_0x457475 % vPointsCN['length']] || {
                'x': 0x0,
                'y': 0x0
            }, _0x27de56 = _0x3a03e9['x'] * (0x1 - _0x45c14d) + _0x4a0921['x'] * _0x45c14d, _0x18fec3 = _0x3a03e9['y'] * (0x1 - _0x45c14d) + _0x4a0921['y'] * _0x45c14d, _0x3c0222 = (_0x457475 % 0x64 / 0x64 - 0.5) * 0x5, _0x3a0cff = _0x27de56 * 0.015, _0x313df9 = (_0x48fcd0 * 0.15 - _0x3a0cff) % 0x1;
        colorTool['setHSL'](_0x313df9, 0.85, 0.6);
        const _0x24d76e = colorTool['r'], _0x42a5f5 = colorTool['g'], _0xf5817c = colorTool['b'];
        if (_0x59c4af <= 0x1)
            _0x2208a9 = gift['pos'][_0x52bea5] * (0x1 - _0x59c4af) + tree['pos'][_0x52bea5] * _0x59c4af, _0x2e873e = gift['pos'][_0x52bea5 + 0x1] * (0x1 - _0x59c4af) + tree['pos'][_0x52bea5 + 0x1] * _0x59c4af, _0x2e41e4 = gift['pos'][_0x52bea5 + 0x2] * (0x1 - _0x59c4af) + tree['pos'][_0x52bea5 + 0x2] * _0x59c4af, _0x61bfb4 = gift['col'][_0x52bea5] * (0x1 - _0x59c4af) + tree['col'][_0x52bea5] * _0x59c4af, _0xefb6d5 = gift['col'][_0x52bea5 + 0x1] * (0x1 - _0x59c4af) + tree['col'][_0x52bea5 + 0x1] * _0x59c4af, _0x3deec9 = gift['col'][_0x52bea5 + 0x2] * (0x1 - _0x59c4af) + tree['col'][_0x52bea5 + 0x2] * _0x59c4af;
        else {
            const _0x3eda8d = Math['min'](0x1, _0x59c4af - 0x1);
            _0x2208a9 = tree['pos'][_0x52bea5] * (0x1 - _0x3eda8d) + _0x27de56 * _0x3eda8d, _0x2e873e = tree['pos'][_0x52bea5 + 0x1] * (0x1 - _0x3eda8d) + _0x18fec3 * _0x3eda8d, _0x2e41e4 = tree['pos'][_0x52bea5 + 0x2] * (0x1 - _0x3eda8d) + _0x3c0222 * _0x3eda8d, _0x61bfb4 = tree['col'][_0x52bea5] * (0x1 - _0x3eda8d) + _0x24d76e * _0x3eda8d, _0xefb6d5 = tree['col'][_0x52bea5 + 0x1] * (0x1 - _0x3eda8d) + _0x42a5f5 * _0x3eda8d, _0x3deec9 = tree['col'][_0x52bea5 + 0x2] * (0x1 - _0x3eda8d) + _0xf5817c * _0x3eda8d;
        }
        const _0x2825e6 = _0x457475 * 0.137 + _0x5b70e2 * _0x48fcd0 * 0.5, _0x45faed = _0x457475 * 0.618, _0x34de34 = _0x47ea88 * 0x69 * (0x1 - Math['pow'](Math['min'](_0x59c4af, 0x1), 1.8)), _0x5d41df = -_0x475209 * Math['pow'](0x1 - Math['min'](_0x59c4af, 0x1), 2.5) * (0x1 + Math['sin'](_0x457475)) * 0.2;
        mixedPos[_0x52bea5] = _0x2208a9 + Math['cos'](_0x2825e6) * Math['sin'](_0x45faed) * _0x34de34, mixedPos[_0x52bea5 + 0x1] = _0x2e873e + Math['sin'](_0x2825e6) * Math['sin'](_0x45faed) * _0x34de34 + _0x5d41df, mixedPos[_0x52bea5 + 0x2] = _0x2e41e4 + Math['cos'](_0x45faed) * _0x34de34;
        const _0xa7532 = Math['sin'](_0x48fcd0 * 0x12 + _0x457475) > 0.85 ? _0x24c71a : 0x0;
        mixedCol[_0x52bea5] = _0x61bfb4 + _0xa7532, mixedCol[_0x52bea5 + 0x1] = _0xefb6d5 + _0xa7532, mixedCol[_0x52bea5 + 0x2] = _0x3deec9 + _0xa7532;
    }
    points['geometry']['attributes']['position']['needsUpdate'] = !![], points['geometry']['attributes']['color']['needsUpdate'] = !![];
    if (haloPoints) {
        const _0x37aebc = haloPoints['geometry']['attributes']['position']['array'];
        for (let _0x594c13 = 0x0; _0x594c13 < HALO_COUNT; _0x594c13++) {
            const _0x17f46c = _0x594c13 * 0x3, _0xff5452 = Math['sqrt'](_0x37aebc[_0x17f46c] ** 0x2 + _0x37aebc[_0x17f46c + 0x2] ** 0x2);
            _0x37aebc[_0x17f46c + 0x1] = -0x16 + Math['sin'](_0x48fcd0 * 0x2 + _0xff5452 * 0.2) * 0x2;
        }
        haloPoints['geometry']['attributes']['position']['needsUpdate'] = !![];
    }
    const _0x25943a = snowPoints['geometry']['attributes']['position']['array'];
    for (let _0x12a044 = 0x0; _0x12a044 < 0x4b0; _0x12a044++) {
        _0x25943a[_0x12a044 * 0x3 + 0x1] -= 0.15;
        if (_0x25943a[_0x12a044 * 0x3 + 0x1] < -0x3c)
            _0x25943a[_0x12a044 * 0x3 + 0x1] = 0x64;
    }
    snowPoints['geometry']['attributes']['position']['needsUpdate'] = !![], renderer['render'](scene, camera);
}
window['onresize'] = () => {
    camera && (camera['aspect'] = window['innerWidth'] / window['innerHeight'], camera['updateProjectionMatrix'](), renderer['setSize'](window['innerWidth'], window['innerHeight']));
};