
/* https://github.com/soyaine/JavaScript30/blob/master/11%20-%20Custom%20Video%20Player/README.md */
/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function tooglePlay() {
    video.paused ? video.play() : video.pause()
}
//图标切换
function updateButton(){
	const icon = this.paused ? '►' : '❚ ❚';
	toggle.textContent = icon
}
//快退/快进
function skip(){
	video.currentTime += parseFloat(this.dataset.skip)
}
//音量和播放速度
function handleRangeUpdate() {
    video[this.name] = this.value;
}
//进度条操作
// 根据当前播放时间来调节进度条
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
// 根据点击位置设置播放时间
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * vidoe.duration;
    video.currentTime = scrubTime;
}
video.addEventListener('click', tooglePlay);
toggle.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.addEventListener(range => range.addEventListener('change',handleRangeUpdate))
ranges.addEventListener(range => range.addEventListener('mousemove',handleRangeUpdate))
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
