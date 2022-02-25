var createChristmasCanvas = document.createElement("canvas");
createChristmasCanvas.id = "christmasCanvas";
createChristmasCanvas.style = "top: 0px; left: 0px; z-index: 5000; position: fixed; pointer-events: none;";
document.body.appendChild(createChristmasCanvas);
var snow = function () {
    if (1 == 1) {
        var b = document.getElementById("christmasCanvas"),
            a = b.getContext("2d"),
            d = window.innerWidth,
            c = window.innerHeight;
        b.width = d;
        b.height = c;
        for (var e = [], b = 0; b < 70; b++) {
            e.push({
                x: Math.random() * d,
                y: Math.random() * c,
                r: Math.random() * 4 + 1,
                d: Math.random() * 70
            })
        }
        var h = 0;
        window.intervral4Christmas = setInterval(function () {
            a.clearRect(0, 0, d, c);
            a.fillStyle = "rgba(66, 139, 202, 0.6)";
            a.shadowBlur = 5;
            a.shadowColor = "rgba(0, 0, 0, 0.9)";
            a.beginPath();
            for (var b = 0; b < 70; b++) {
                var f = e[b];
                a.moveTo(f.x, f.y);
                a.arc(f.x, f.y, f.r, 0, Math.PI * 2, !0)
            }
            a.fill();
            h += 0.01;
            for (b = 0; b < 70; b++) {
                if (f = e[b], f.y += Math.cos(h + f.d) + 1 + f.r / 2,
                    f.x += Math.sin(h) * 2, f.x > d + 5 || f.x < -5 || f.y > c) {
                    e[b] = b % 3 > 0 ? {x: Math.random() * d, y: -10, r: f.r, d: f.d} :
                        Math.sin(h) > 0 ? {x: -5, y: Math.random() * c, r: f.r, d: f.d} :
                            {x: d + 5, y: Math.random() * c, r: f.r, d: f.d}
                }
            }
        }, 70)
    }
}
snow();