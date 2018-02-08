function renderStatistics(ctx, names, times) {

    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);

    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, 420, 270);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'red';
    ctx.fillText('Ура вы победили!', 120, 50);
    ctx.fillText('Список результатов:', 120, 74);
    console.log(times);

    var roundTime = new Array(times.length);
    for (var i = 0; i < times.length; i++) {
        roundTime[i] = Math.round(times[i]);
    }
    console.log(roundTime);

    var max = -1;
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if (time > max) {
            max = time;
        }
    } // determined the maximum value of time array

    var histogramHeight = 150;
    var step = histogramHeight / (max - 0);

    var initialX = 120;
    var barWidth = 40;
    var indent = 90;
    var containerHeight = 240;


    var me = names.indexOf('Вы');

    var y = containerHeight - roundTime[me] * step;
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    ctx.fillRect(initialX + indent * me, y, barWidth, roundTime[me] * step);
    ctx.fillText(names[me], initialX + indent * me, containerHeight + 20);



    for (var i = 0; i <= roundTime.length - 1; i++) {
        if (i === me) continue;
        ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';

        var initialY = containerHeight - roundTime[i] * step;

        ctx.fillRect(initialX + indent * i, initialY, barWidth, roundTime[i] * step);
        ctx.fillText(names[i], initialX + indent * i, containerHeight + 20);
    }








}