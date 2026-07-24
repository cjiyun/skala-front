const upDown = () => {
  var computerNum = Math.floor(Math.random() * 50) + 1;
  var cnt = 0;

  while (true) {
    var val = prompt(
      "1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자를 맞춰보세요!",
    );
    val = Number(val.trim());

    if (val === "" || !Number.isInteger(val) || val < 1 || val > 50) {
      alert("1부터 50 사이의 숫자를 입력해주세요!");
      continue;
    }

    cnt++;

    if (val === computerNum) {
      alert(`축하합니다! ${cnt}번 만에 맞추셨습니다.`);
      break;
    } else if (val < computerNum) {
      alert("Up!");
    } else {
      alert("Down!");
    }
  }
};
