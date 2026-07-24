const showMyBag = () => {
  var myBag = {
    여권: 1,
    스마트폰: 2,
    지갑: 1,
    화장품: 12,
  };

  var result = `👛 내 가방 속 물품 목록\n${"-".repeat(40)}\n`;

  for (const [key, val] of Object.entries(myBag)) {
    result += "- " + `${key}: ${val}개` + "\n";
  }

  result += `${"-".repeat(40)}\n총 물품 종류: ${Object.keys(myBag).length}가지`;

  alert(result);
};
