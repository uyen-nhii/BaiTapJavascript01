function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}


function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}


document.getElementById("studentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const math = document.getElementById("math").value;
    const algebra = document.getElementById("algebra").value;
    const statistics = document.getElementById("statistics").value;
    const computer = document.getElementById("computer").value;
    const web = document.getElementById("web").value;

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (
        name === "" ||
        math === "" ||
        algebra === "" ||
        statistics === "" ||
        computer === "" ||
        web === ""
    ) {
        errorMessage.textContent =
            "Vui lòng nhập đầy đủ thông tin!";
        return;
    }

    const scores = [
        Number(math),
        Number(algebra),
        Number(statistics),
        Number(computer),
        Number(web)
    ];

    for (let i = 0; i < scores.length; i++) {
        if (
            scores[i] < 0 ||
            scores[i] > 10 ||
            isNaN(scores[i])
        ) {
            errorMessage.textContent =
                "Điểm phải nằm trong khoảng từ 0 đến 10!";
            return;
        }
    }

    const average = calculateAverage(scores);

    const classification = classify(average);

    document.getElementById("resultName").textContent = name;

    document.getElementById("resultMath").textContent = scores[0];
    document.getElementById("resultAlgebra").textContent = scores[1];
    document.getElementById("resultStatistics").textContent = scores[2];
    document.getElementById("resultComputer").textContent = scores[3];
    document.getElementById("resultWeb").textContent = scores[4];

    document.getElementById("resultAverage").textContent =
        average.toFixed(2);

    document.getElementById("resultClassification").textContent =
        classification;

    document.getElementById("result").style.display = "block";
});
