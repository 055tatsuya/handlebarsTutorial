$(function() {
  // x-handlebars-templateのscriptを取得
  const SOURCE = $('#template').html();
  // Handlebarsのcompileメソッドにx-handlebars-templateのscriptを渡す
  const TEMPLATE = Handlebars.compile(SOURCE);
  // valueオブジェクトのプロパティに各値を記述
  let values = {
      author: {
      firstName: 'Ann',
      lastName: 'Frank'
    }
  };


  // TEMPLATEの返り値がメソッドなので、引数にvaluesオブジェクトを入れてあげる
  const HTML = TEMPLATE(values);
  console.log(HTML);
  $('#contents').html(HTML);
});
