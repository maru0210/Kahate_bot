// n ~ m のランダムな値を返します
function getRand(n, m=-1) {
  let range = m == -1 ? n : m-n+1;

  let rand = new Date().getMilliseconds() % range;

  if(m == -1) return rand;
  else return rand + n;
}
