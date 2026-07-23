function calculateChange(payment, cost) {
  let fifty = 50000;
  let ten = 10000;
  let five = 5000;
  let one = 1000;
  
  let diffMoney = payment - cost;
  
  let fiftyCount = Math.floor(diffMoney / fifty);
  let tenCount = Math.floor((diffMoney - fifty * fiftyCount)/ten);
  let fiveCount = Math.floor((diffMoney - (fifty * fiftyCount + ten * tenCount))/five);
  let oneCount = Math.floor((diffMoney - (fifty * fiftyCount + ten * tenCount + five * fiveCount))/one);
  
  console.log(`${fifty}원 지폐: ${fiftyCount}장`);
  console.log(`${ten}원 지폐: ${tenCount}장`);
  console.log(`${five}원 지폐: ${fiveCount}장`);
  console.log(`${one}원 지폐: ${oneCount}장`);
}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);