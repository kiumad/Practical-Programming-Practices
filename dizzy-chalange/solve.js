const encoded_word =
  "T4 l16 _36 510 _27 s26 _11 320 414 {6 }39 C2 T0 m28 317 y35 d31 F1 m22 g19 d38 z34 423 l15 329 c12 ;37 19 h13 _30 F5 t7 C3 325 z33 _21 h8 n18 132 k24";

function decode_dizzy(word) {
  let decoded_word = word.split(" ");
  decoded_word = decoded_word.map((e) => [e.slice(1, 3), e.slice(0, 1)]);
  const flag = [];

  for (let i = 0; i < decoded_word.length; i++) {
    flag[+decoded_word[i][0]] = decoded_word[i][1];
  }

  return flag.join("");
}

console.log(decode_dizzy(encoded_word));
