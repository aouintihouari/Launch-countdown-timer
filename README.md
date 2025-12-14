# Launch Countdown Timer 🚀

![Project Screenshot](./design/active-states.jpg)

## 🛠️ Built With

- **React** - JS Library for UI.
- **Tailwind CSS (v4)** - Styling (using the new CSS-first configuration).
- **Vite** - Frontend tooling.

## ✨ Features

- **Real-time Countdown**: Calculates the time remaining until a specific future date.
- **3D Flip Animation**: A realistic mechanical split-flap effect.
- **Responsive Design**: Adapts seamlessly to mobile and desktop screens.
- **Component-Based Architecture**: Uses a reusable `FlipUnit` component for Days, Hours, Minutes, and Seconds.

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/aouintihouari/Launch-countdown-timer.git](https://github.com/aouintihouari/Launch-countdown-timer.git)
    cd launch-countdown-timer
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 🧠 Technical Challenge: The Flip Animation

The main challenge of this project was creating a smooth 3D flip animation without "ghosting" artifacts or transparency issues.

### The "Double-Faced" Solution

To solve visual glitches where numbers overlapped during the transition, I implemented a 3-layer structure for each card:

1.  **Bottom Layer (Static)**: Displays the _new_ number (waiting to be revealed).
2.  **Top Layer (Static)**: Displays the top half of the _new_ number.
3.  **The Flipper (Animated)**: A `preserve-3d` element that rotates 180°.
    - **Front Face**: Shows the top half of the _old_ number.
    - **Back Face**: Shows the bottom half of the _new_ number (pre-rotated).

This ensures a continuous flow where the old number physically covers the new one until the card flips down completely.

### Tailwind CSS Configuration

I used custom utilities to handle the 3D transformations:

```css
@layer utilities {
  .perspective-container {
    perspective: 400px;
  }
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-x-180 {
    transform: rotateX(180deg);
  }
}
```
