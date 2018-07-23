define(function() {
    return function getData(url, callback) {
        fetch(url)
            .then(response => {
                if (response.status !== 200) {
                    console.log(
                        "Alert! Error with connect. Status Code: " + response.status
                    );
                }
                response.json().then(data => {
                    let dataArray = [];
                    for (var key in data[0]) {
                        if (data[0].hasOwnProperty(key)) {
                            dataArray.push(data[0][key]);
                        }
                    }
                    return callback(dataArray);
                });
            })
            .catch(err => {
                console.log("Alert! We are have error! Please fix this ->", err);
            });
    };
});
