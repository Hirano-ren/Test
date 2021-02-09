
function OnLinkClick() {
  var tableEle = document.getElementById('data-table');
  for (var i = 0; i < 5; i++) {
    // テーブルの行を 5行追加する
    var tr = document.createElement('tr');
    for (var j = 0; j < 3; j++) {
      // テーブルの列を 3行追加する
      var td = document.createElement('td');
      td.innerHTML = 'データ'+(i+1)+"-"+(j+1);
      tr.appendChild(td);
    }
    tableEle.appendChild(tr);
  }
}
  
  function getTrainList() {
    var url = 'https://tetsudo.rti-giken.jp/free/delay.json'; //遅延情報のJSON
    fetch(url)
    .then(function (data) {
      return data.json(); // 読み込むデータをJSONに設定
    })
    .then(function (json) {
      for (var i = 0; i < json.length; i++) {
        var train = json[i].name;
        var company = json[i].company;
  
        //表形式で遅延路線を表示する
        var row = document.getElementById('train-list').insertRow();
        row.insertCell().textContent = i + 1;
        row.insertCell().textContent = train;
        row.insertCell().textContent = company;
      }
    });
  }

function getDailySurvey(){
  var url = "http://localhost:5000/hospital";
  fetch(url)
  .then(function (data) {
    return data.json(); // 読み込むデータをJSONに設定
  })
  .then(function (json) {
    for (var i = 0; i < json.length; i++) {
      var train = json[i].facilityName;
      var company = json[i].zipCode;

      //表形式で遅延路線を表示する
      var row = document.getElementById('hospital-list').insertRow();
      row.insertCell().textContent = i + 1;
      row.insertCell().textContent = train;
      row.insertCell().textContent = company;
    }
  });
}
