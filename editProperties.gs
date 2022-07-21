function getProperties() {
  const prop = PropertiesService.getScriptProperties()
  let keys = prop.getKeys();

  for(let i=0; i<keys.length; i++){
    Logger.log('  key: ' + keys[i] + '\nvalue: ' + prop.getProperty(keys[i]));
  }
}

function setProperty() {
  let key = ''; // プロパティの名前(Key)を入力
  let value = ''; // プロパティの値(Value)を入力

  PropertiesService.getScriptProperties().setProperty(key, value);

  Logger.log('  key: ' + key + '\nvalue: ' + value + '\nを登録しました');
}
