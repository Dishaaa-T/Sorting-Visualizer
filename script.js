// Sorting Visualizer

document.addEventListener('DOMContentLoaded', () => {
    const arrayContainer = document.getElementById('array-container');
    const generateButton = document.getElementById('generate-array');
    const sortButton = document.getElementById('sort-array');

    let array = [];

    // Generate a random array of bars
    function generateArray(size = 20) {
        array = [];
        arrayContainer.innerHTML = '';
        for (let i = 0; i < size; i++) {
            const value = Math.floor(Math.random() * 100) + 10; // Random values between 10 and 110
            array.push(value);
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.height = `${value}px`;
            arrayContainer.appendChild(bar);
        }
    }

    // Visualize Bubble Sort
    async function bubbleSort() {
        const bars = document.querySelectorAll('.bar');
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = 0; j < array.length - i - 1; j++) {
                bars[j].style.backgroundColor = 'red';
                bars[j + 1].style.backgroundColor = 'red';

                if (array[j] > array[j + 1]) {
                    // Swap values
                    await swap(bars, j, j + 1);
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }

                bars[j].style.backgroundColor = 'blue';
                bars[j + 1].style.backgroundColor = 'blue';
            }
            bars[array.length - i - 1].style.backgroundColor = 'green'; // Mark as sorted
        }
        bars[0].style.backgroundColor = 'green'; // Mark the first element as sorted
    }

    // Swap two bars with animation
    function swap(bars, i, j) {
        return new Promise(resolve => {
            const tempHeight = bars[i].style.height;
            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = tempHeight;
            setTimeout(() => resolve(), 300);
        });
    }

    // Event Listeners
    generateButton.addEventListener('click', () => generateArray());
    sortButton.addEventListener('click', () => bubbleSort());

    // Initial array generation
    generateArray();
});

