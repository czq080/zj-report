var fc = {
    load: function (name) {
        let xhr = new XMLHttpRequest(),
            okStatus = document.location.protocol === "file:" ? 0 : 200;
        xhr.open('GET', name, false);
        xhr.overrideMimeType("text/html;charset=utf-8");
        xhr.send(null);
        return xhr.responseText;
    },
    hgzz_1: function (value) {
        let xx = value.split(' ');
        let v1 = xx[0];
        if (0 == v1) {
            return '正常';
        } else {
            return xx[1];
        }
    },
    hgzz: function (value) {
        if (value == 0) {
            return '正常';
        } else if (0 < value && value <= 4) {
            return '轻度';
        } else if (value <= 8) {
            return '中度';
        } else if (value > 8) {
            return '重度';
        } else {
            return '';
        }
    },
    zgzz: function (value) {
        var va = parseFloat(eval(value));
        var v21 = parseFloat(0.21);
        var v26 = parseFloat(0.26);
        if (0 <= va && va <= v21) {
            return '高足弓';
        } else if (va <= v26) {
            return '正常';
        } else if (va > v26) {
            return '低足弓';
        } else {
            return '';
        }
    },
    zgzz_1: function (value) {
        if(value == '正常'){
            return value;
        }
        let v1 = value.split('(')[1];
        let v = v1.split(')')[0];
        if (v == '+') {
            return '轻度';
        } else if (v == '++') {
            return '中度';
        } else if (v == '+++') {
            return '重度';
        } else {
            return '';
        }
    }
}