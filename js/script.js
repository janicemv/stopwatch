"use strict";

class Stopwatch {
    constructor() {
        this.startTime = null;
        this.interval = null;
        this.pausedTime = 0;
    }

    start() {
        if (!this.interval) {
            this.startTime = new Date().getTime() - this.pausedTime;
            this.interval = setInterval(this.updateTime.bind(this), 1000);
        }
    }

    stop() {
        clearInterval(this.interval);
        this.pausedTime = new Date().getTime() - this.startTime;
        this.interval = null;
    }

    lap() {
        if (!this.interval) return;
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.startTime;
        let seconds = Math.floor(elapsedTime / 1000) % 60;
        let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
        let hours = Math.floor(elapsedTime / 1000 / 60 / 60);

        let lapTime = this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);

        let lapDiv = document.getElementById("laps-div");
        lapDiv.style.visibility = 'visible';
        let lapList = document.getElementById("laps");
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }

    reset() {
        this.stop();
        this.pausedTime = 0;
        document.getElementById("time").innerHTML = "00:00:00";
        let lapDiv = document.getElementById("laps-div");
        lapDiv.style.visibility = 'hidden';
        let lapList = document.getElementById("laps");
        lapList.innerHTML = '';
    }

    updateTime() {
        let currentTime = new Date().getTime();
        let elapsedTime = currentTime - this.startTime;
        let seconds = Math.floor(elapsedTime / 1000) % 60;
        let minutes = Math.floor(elapsedTime / 1000 / 60) % 60;
        let hours = Math.floor(elapsedTime / 1000 / 60 / 60);
        let displayTime = this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
        document.getElementById("time").innerHTML = displayTime;
    }

    pad(number) {
        return (number < 10 ? "0" : "") + number;
    }
}

const stopwatch = new Stopwatch();

document.addEventListener('DOMContentLoaded', () => {
    try {
        let startBtn = document.getElementById('button-start');
        let stopBtn = document.getElementById('button-stop');
        let lapBtn = document.getElementById('button-lap');
        let resetBtn = document.getElementById('button-reset');

        if (startBtn && stopBtn && lapBtn && resetBtn) {
            startBtn.addEventListener('click', () => {
                console.log('Start');
                stopwatch.start(); 
            });

            stopBtn.addEventListener('click', () => {
                console.log('Stop');
                stopwatch.stop();
            });

            lapBtn.addEventListener('click', () => {
                console.log('Lap');
                stopwatch.lap();
            });

            resetBtn.addEventListener('click', () => {
                console.log('Reset');
                stopwatch.reset();
            });
        } else {
            console.error('No buttons found in DOM');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
