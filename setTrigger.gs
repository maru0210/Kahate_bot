/*
  毎日0時に定期実行
  8時00分～21時59分にランダムで実行
*/

function setTrigger() {
  let date = new Date();
  date.setHours(getRand(8, 21));
  date.setMinutes(getRand(0, 59));
  date.setSeconds(0);

  ScriptApp.newTrigger('main')
    .timeBased()
    .at(date)
    .create();

  Logger.log('トリガーを ' + Utilities.formatDate(date, 'JST', 'yyyy/MM/dd HH:mm') + ' に設定しました。');
}