/**
 * Charjs Legend, hack
 * Changed by $arsalanshah
 * original work : https://github.com/bebraw/Chart.js.legend
 */
function chart_js_legend(o, e, t) {
    o.className = "charjs-legend";
    for (var r = e.hasOwnProperty("datasets") ? e.datasets : e; o.hasChildNodes();) o.removeChild(o.lastChild);
    var a = t ? chart_js_legend : chart_js_show_noop;
    r.forEach(function(e, r) {
        var l = document.createElement("div");
        l.className = "title", o.appendChild(l);
        var s = document.createElement("div");
        s.className = "color-sample", s.style.backgroundColor = e.hasOwnProperty("strokeColor") ? e.strokeColor : e.color, s.style.borderColor = e.hasOwnProperty("fillColor") ? e.fillColor : e.color, l.appendChild(s);
        var n = document.createTextNode(e.label);
        n.className = "text-node", l.appendChild(n), a(t, l, r)
    })
}

function chart_js_show_tooltip(o, e, t) {
    var r = Chart.helpers,
        a = o.segments;
    "undefined" != typeof a && (r.addEvent(e, "mouseover", function() {
        var e = a[t];
        e.save(), e.fillColor = e.highlightColor, o.chart_js_show_tooltip([e]), e.restore()
    }), r.addEvent(e, "mouseout", function() {
        o.draw()
    }))
}

function chart_js_show_noop() {}