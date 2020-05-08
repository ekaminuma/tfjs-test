let net;

async function app() {
    console.log('Loading mobilenet..');

    // MobileNetの読み込み
    net = await mobilenet.load();
    console.log('Successfully loaded model');

    // 画像分類の実行
    const imgEl = document.getElementById('img');
    const result = await net.classify(imgEl);
    console.log(result);
}

app();
