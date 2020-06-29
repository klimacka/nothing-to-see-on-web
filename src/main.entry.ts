(function () {
  "use strict";

  const fontSize = 10;
  const updateRateMs = 33;
  const resetPropability = 0.975;//= 0.975;

  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = `田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑现在太晚了他帅个新手我们是意喜欢吃比萨你住哪里月信記婚覧検年鞍日控芸社羽福決文権沢保済子条屋際能降導南親今出会牛前員情無判星組稿用業消立選予解省供晋関柳映度景宏強図航佐知残棋辛当支時故戦程格板補書定本急音曲産證握稚将卒続品来得織必重止可広停識象紙味客作党逮丁同変答載洋廉十伯内心食細毎追代者小市暮安難軽仲営米観全氏資批辞万行床気積愕惑表岡売罰空持禁木般馬聞約害念委澤極究打題史自春校参加即隣中学囲商歳店疑器主動鳥字弁壁丸改賀優種写善幕雑呼回化絶応秦果現冬利切考込引宮見東去興企北納英転対復深目富調衣踊為公求江 発展村治推朝助経却注療長各分取水政次国不審著算海電点円生庭真面命帳爪介悟頼提料放断感華猛合落下連謝困被方渡遣大夕券菱科課典収属攻告金地物型論浮基粘明台頃流評博王端問多並仕演受話兵髪場浜夫届窒財誌投川秋専存講育有湖職通施就相上州謙女後散活鍵督裂質杯両突建築魚術備横正埋読負殿欧速敗都雪盗庫域呂達束趣土杜直杉成喪証択門携犬天言樹紅均監訃健億頸語静庁園番離銀開研志特堀歓旋車頻森室覚練交塁左薦団振棘示三寛式視茨色準非及札午挑替旅縄家葉率事童胸未昇需娯協座置野裁句結所帯教入外名掲沈五路六医躍牧愛第歌飼余少処元旧適使法足搭末異整碁近倍捜盤認吹軍泉拳数配性懇楽間歩則京実球刊層販版働満賞影的県荒谷椅着宝派報跡制期冠稲府千臭冊義紀敬級編二指最何署請挙印系副価別席宅要戻領山封仙崎装越高共李欲荻身波燃帰陣玲誉養常首終竹購段策先過縁船量早莪件含修半詰統移垣部稼箱池案構閣智幅徴進死道民思線払巡務掛口走豊伊姫慌救体勝託役環夜返焉炒軌初舵曹族与破笑墨根試膚抱桶以玉岬募狂力探街伎震伝淵曜彼湯増撃拍乱悪痢石濯継称熱島折居涼武清述索規管周壊原援岩理裏偶充避週摘位乗想登陽衛失泰倉効那康和堅憂妥腐枝任菓向隊模占圧再違毛神輝陸松井平看官柴氷招章集飛繁芋軟賛技録設蓄議候確夏乳苦例査製香庄奔賊襲黒訴藤埼危院容患花奥送柏四児母造薄状顧捕買如勢磁朗況戸孤起態館形茶閉討西刻夢憶退亡舞草風駆輪陛吉抑誤肉区晴遊白媛側漢責諮寄冷勤輸激駐税計孝司項完爆吸依鮮光順因嫌付勲渉臓献察筆塾右鹿株眠微努途露緊機昭懐飾坊昨絆扱潮叫繊古准訪費減楠詳阪単津張歴災汽接息係険休融伴覇抗湘良暑厚栄透彦拠便乾栗護盟塩呆荷齢反担抵浪催玄秀短慮尊佳塚劇火拡恐枠隠琢銅像仮勉競陰湾百美償超浅永給倒貿喬遂警縮材季欠祝快`
    .split("")
    .filter((v, i, a) => a.indexOf(v) === i);

  const columns = canvas.width / fontSize;

  const drops: number[] = [];
  for (let x = 0; x < columns; x++)
    drops[x] = 1;

  function draw() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F0";
    context.font = fontSize + "px arial";

    for (let i = 0; i < drops.length; i++) {
      const letter = letters[Math.floor(Math.random() * letters.length)];
      context.fillText(letter, i * fontSize, drops[i] * fontSize);


      if (drops[i] * fontSize > canvas.height && Math.random() > resetPropability)
        drops[i] = 0;

      drops[i]++;
    }
  }

  setInterval(draw, updateRateMs);

})();