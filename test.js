
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
  var url = 'https://opendata.corona.go.jp/api/covid19DailySurvey?facilityName=創成東病院'; 
  /*
  var row = document.getElementById('hospital-list').insertRow();
  fetch(url)
    .then(function (data) {
      return data.json(); // 読み込むデータをJSONに設定
    })
    .then(function (json) {
      for (var i = 0; i < json.length; i++) {

        var facilityName = json[i].facilityName; //病院名
        var facilityAddr = json[i].facilityAddr; //住所
        var facilityType = json[i].facilityType; //種別
        var ansType = json[i].ansType; //状態
        var latitude = json[i].latitude; //緯度
        var longitude = json[i].longitude; //経度
  
        //表形式で遅延路線を表示する
        row.insertCell().textContent = facilityName;
        row.insertCell().textContent = facilityAddr;
        row.insertCell().textContent = facilityType;
        row.insertCell().textContent = ansType;
      }
    });
    */
   // XMLHttpRequestオブジェクトの作成
    var request = new XMLHttpRequest();

// URLを開く
    request.open('GET', url, true);

// レスポンスが返ってきた時の処理を記述 
request.onload = function () {
  // レスポンスが返ってきた時の処理
}

// リクエストをURLに送信
request.send();
}