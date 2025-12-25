# 🌱 goGreen

[cite_start]**goGreen** is a Node.js script that allows you to make commits to the past (or the future) to "go green" on GitHub[cite: 2].

[cite_start]Whether you want to fill up your contribution graph to look like you've been hard at work, or create cool patterns and artwork, this tool helps you bring your profile to life[cite: 1, 4].

## 🚀 About

[cite_start]**goGreen** helps you create commits on your GitHub profile for any date in the past[cite: 3]. It utilizes a JSON data store to manage timestamps and Git automation to push contributions to your repository.

## 🛠️ Getting Started

[cite_start]Follow these steps to set up the project on your local machine[cite: 5].

### Prerequisites

* Node.js installed on your machine.
* Git installed and configured.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/TRASH_KEY/goGreen.git](https://github.com/TRASH_KEY/goGreen.git)
    cd goGreen
    ```

2.  **Install Dependencies**
    Install the required npm modules (`moment`, `simple-git`, `random`, `jsonfile`) to get everything running smoothly:
    ```bash
    npm install
    ```

## 📦 Dependencies

This project relies on the following npm packages:

* [`moment`](https://www.npmjs.com/package/moment) - Handles date and time manipulation.
* [`simple-git`](https://www.npmjs.com/package/simple-git) - For executing Git commands easily.
* [cite_start][`random`](https://www.npmjs.com/package/random) - To generate random numbers for commit frequency[cite: 14].
* [`jsonfile`](https://www.npmjs.com/package/jsonfile) - To read/write the timestamp data.

## ⚙️ Configuration

1.  [cite_start]**Commit Script:** Ensure you have your main JavaScript entry point (e.g., `index.js`) configured to manage your commits[cite: 7].
2.  **Data Store:** The script uses a JSON file (e.g., `data.json`) to store commit timestamp data.

## 🔮 Future Improvements

There is always room for improvement! [cite_start]Here are some ideas for extending the project[cite: 8]:

* [cite_start]**Custom Patterns:** Experiment with algorithms to spell out names or draw designs on the graph[cite: 9, 10].
* [cite_start]**Density Control:** Adjust the number of commits per day to control the specific shade of green[cite: 11].
* [cite_start]**Input Strings:** Create a function to map text input strings directly to X-Y coordinates on the contribution graph[cite: 12].

## 👏 Credits

[cite_start]Huge thanks to **[Akshay Saini](https://github.com/akshaymarch7)** for the original video and inspiration behind this project[cite: 15].

## 📄 License

This project is licensed under the ISC License.