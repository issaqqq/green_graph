import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";


const path = "./data.json";
// const date = moment().subtract(10,'d').format();

// const data = {
//     date: date,
// };

const markCommit = (x, y) => {
    const date = moment()
    .subtract(3, "y")
    .add(45, "d")
    .add(x, "w")
    .add(y, "d")
    .format();

    const data = {
        date: date,
    };

    jsonfile.writeFile(path, data, () => {
      simpleGit().add([path]).commit(date, {'--date': date}).push();
    });
};


// markCommit(0, 0);





