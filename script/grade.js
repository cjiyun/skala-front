const grade = () => {
  var subjects = ["HTML", "CSS", "JS"];
  var len = subjects.length;
  var total = 0;

  for (let i = 0; i < len; i++) {
    var score = prompt(`${subjects[i]}의 점수를 입력해주세요.`);
    score = Number(score.trim());

    if (!Number.isInteger(score)) {
      alert("숫자를 입력해주세요!");
      i--;
      continue;
    }

    total += score;
  }

  var mean = total / len;
  var result = "";
  if (mean >= 60) {
    result = "🎉 합격입니다! 우수자로 선정되었습니다.";
  } else {
    result = "불합격하셨습니다.";
  }

  alert(`
    ===== 📊 성적 결과표 =====
    - 총점: ${total}
    - 평군: ${mean}
    ${"-".repeat(40)}
    - 결과: ${result}
    `);
};
