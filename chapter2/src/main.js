$(function() {
  // x-handlebars-templateのscriptを取得
  const SOURCE = $('#template').html();
  // Handlebarsのcompileメソッドにx-handlebars-templateのscriptを渡す
  const TEMPLATE = Handlebars.compile(SOURCE);
  // valueオブジェクトのプロパティに各値を記述
  let values = {
    majiRanger : [
      { name : '魁' , color : 'red' },
      { name : '翼' , color : 'yellow' },
      { name : '麗' , color : 'blue' },
      { name : '芳香' , color : 'pink' },
      { name : '蒔人' , color : 'green' }
    ]
  };

  console.log(values.majiRanger[0].name);

  // TEMPLATEの返り値がメソッドなので、引数にvaluesオブジェクトを入れてあげる
  const HTML = TEMPLATE(values);
  console.log(HTML);
  $('#contents').html(HTML);
});
