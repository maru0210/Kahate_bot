function main() {
  Logger.log('実行開始: ' + Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd HH:mm:ss'));

  const twitter = getTwitterService();

  const sheet_config = SpreadsheetApp.openById('1DHhhazCKNRpztOCpZf0q4gjtfE0Il-uKWEQROpGUa9M').getSheets()[0];
  const endpoint_post = 'https://api.twitter.com/1.1/statuses/update.json';

  // 実行状況の検証
  if (sheet_config.getRange('B1').getValue() == 0) return;

  // タグを取得
  let tag = sheet_config.getRange(getRand(3, 5), 2).getValue();

  // ツイートを投稿
  try {
    twitter.fetch(endpoint_post, {
      method: 'post',
      payload: {
        status: '#' + tag
      }
    });
    Logger.log('時報を投稿しました。\n『#' + tag + '』');
  }
  catch {
    Logger.log('エラー: 時報を投稿できませんでした。');
  }

  Logger.log('実行終了: ' + Utilities.formatDate(new Date(), 'JST', 'yyyy/MM/dd HH:mm:ss'));
}
