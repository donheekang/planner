document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function() {
        const introducerName = document.getElementById("introducer-name").value;
        const introducerContact = document.getElementById("introducer-contact").value;
        const introduceeName = document.getElementById("introducee-name").value;
        const introduceeContact = document.getElementById("introducee-contact").value;

        if (introducerName && introducerContact && introduceeName && introduceeContact) {
            alert("정보가 성공적으로 제출되었습니다.");
            // 실제로 정보를 서버에 제출하려면 이곳에 코드를 추가하세요.
        } else {
            alert("모든 정보를 입력해주세요.");
        }
    });
});
