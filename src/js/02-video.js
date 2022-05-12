import throttle from 'lodash.throttle'
    
    // Инициализируй плеер в файле скрипта как это описано в секции pre-existing player

    const iframe = document.querySelector('iframe');
    
    const player = new Vimeo.Player(iframe);
    
    // Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

let timeupdate = 0;

const onPlay = function (data) {

    timeupdate = data.seconds;

    localStorage.setItem(PLAYER_CURRENT_TIME, JSON.stringify(timeupdate));
};

player.on('timeupdate', throttle( onPlay, 1000));



// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.

if (localStorage.getItem(PLAYER_CURRENT_TIME)) {
     player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));
}
