var fc = {
    load: function (name) {
        let xhr = new XMLHttpRequest(),
            okStatus = document.location.protocol === "file:" ? 0 : 200;
        xhr.open('GET', name, false);
        xhr.overrideMimeType("text/html;charset=utf-8");
        xhr.send(null);
        return xhr.responseText;
    },
    hgzz: function (value) {
        if (0 < value <= 4) {
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
        if (0 < va <= v21) {
            return '高足弓';
        } else if (va <= v26) {
            return '正常';
        } else if (va > v26) {
            return '低足弓';
        } else {
            return '';
        }
    }
}