# Stopwatch - Time Tracking Application

This is a simple stopwatch application built with JavaScript, HTML, and CSS. It allows users to start, pause, record laps, and reset the timer. The interface also displays the accumulated time and the recorded laps.

## Features

- **Start the Stopwatch**: Begins counting time.
- **Stop the Stopwatch**: Pauses the count and records the elapsed time.
- **Record a Lap**: Displays the time of the recorded lap without stopping the stopwatch.
- **Reset the Stopwatch**: Resets the stopwatch and clears all recorded laps.

## Technologies Used

- **Vanilla JavaScript**: Logic for stopwatch functionality.
- **HTML**: Page structure.
- **CSS and Bootstrap**: Basic styling for the interface.

## How It Works

The stopwatch is implemented using a class-based structure in JavaScript. The core functionality includes tracking time, updating the display, and handling user interactions with buttons.

### Methods:
- `start()`: Starts the stopwatch if it is not already running.
- `stop()`: Stops the stopwatch and saves the paused time.
- `lap()`: Records the current lap time.
- `reset()`: Resets the stopwatch and clears the lap list.
- `updateTime()`: Updates the displayed time every second.
- `pad()`: Pads the time to ensure it is always displayed in a two-digit format (e.g., `01:02:03`).
