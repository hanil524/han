body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: rgb(70, 69, 69);
}

header {
  background: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: padding-right 0.3s ease;
}

header a {
  color: white;
  text-decoration: none;
  margin-right: 20px;
}

header input {
  padding: 5px;
  border: none;
  border-radius: 5px;
  max-width: 200px; /* 検索バーの幅を調整 */
  flex-grow: 1;
  text-align: center; /* 中央に配置 */
}

.mobile-header {
  display: none;
  background: #333;
  color: white;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

main {
  margin-top: 60px;
  padding: 20px;
  padding-bottom: 100px; /* 下に余白を追加 */
}

#filter-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
}

#filter-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 20px; /* フィルターボタンからカード画像までの間隔を広げる */
  gap: 5px;
}

/* フィルターボタンからカード画像までの間隔を広げる（PC表示のみ） */
@media (min-width: 768px) {
  #filter-section {
    margin-bottom: 80px; /* フィルターボタンからカード画像までの間隔を広げる */
  }
}

.filter-group {
  margin: 10px;
  border: 1px solid #ffffff;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #919191;
  display: flex; /* 「シリーズ：」とそのボタンを1行で表示 */
  align-items: center;
  justify-content: center;
  font-size: 13px;
  gap: 10px; /* ボタン間の隙間を調整 */
  font-weight: bold;
}

.sort-buttons,
.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  cursor: pointer;
}

.filter-content {
  display: none;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
}

#card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.card {
  flex-basis: calc(20% - 10px);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.08s, box-shadow 0.15s; /* 影の遷移を追加 */
  position: relative; /* 影の位置調整のために必要 */
}

.card img {
  background-color: #f0f0f0; /* 適宜背景色を設定 */
  display: block;
  width: 100%;
  height: auto;
  border-radius: 15px;
  /* 画像が読み込まれるまでの間に何も表示されないように */
  background: url('path/to/placeholder-image.jpg') center center no-repeat;
  background-size: cover;
}

.card:hover {
  transform: scale(1.4);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 1); /* 影のスタイルを追加 */
  z-index: 10; /* 拡大時に最前面に表示 */
}

@media (max-width: 1024px) {
  .card {
    flex-basis: calc(25% - 10px);
  }
}

/* スマホ表示のスタイル */
@media (max-width: 768px) {
  .card {
    flex-basis: calc(50% - 10px);
  }
  .card:hover {
    transform: none; /* 拡大を無効にする */
    box-shadow: none; /* 影を無効にする */
    z-index: auto; /* z-indexをリセット */
  }
}

/* スマホ表示のヘッダーを表示する */
@media (max-width: 600px) {
  .mobile-header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px; /* 必要に応じて調整 */
    box-sizing: border-box; /* パディングを含む幅調整 */
  }
  header {
    display: none;
  }
}

/* スマホ表示でのヘッダー内の検索バーを中央揃え */
.mobile-header input {
  width: calc(100% - 20px); /* 親要素のパディングを考慮して幅を設定 */
  max-width: 100%; /* 検索バーの最大幅を100%に設定 */
  margin: 0; /* マージンをリセット */
  padding: 5px; /* 内側のパディングを追加 */
  border: none;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box; /* パディングを含む幅調整 */
}

/* プレースホルダーテキストのスタイルを統一 */
.mobile-header input::placeholder {
  text-align: center; /* プレースホルダーテキストを中央揃え */
}

@media (max-width: 400px) {
  .card {
    flex-basis: 100%;
  }
}

.pc-only {
  display: block;
}

@media (max-width: 768px) {
  .pc-only {
    display: none;
  }

  header input {
    max-width: 90%; /* スマホの検索バー幅を調整 */
    margin: 0 5%; /* 左右に均等な余白を追加 */
  }

  .card {
    flex-basis: calc(50% - 10px);
  }

  main {
    margin-top: 60px; /* ヘッダーの高さ分のマージンを追加 */
  }
}

/* カード表示エリアのスタイル */
#card-list {
  padding: 0px; /* カード一覧の両端に余白を追加 */
}

@media (min-width: 1024px) {
  #card-list {
    max-width: 75%; /* PC画面での最大幅を設定 */
    margin: 0 auto; /* 中央に配置 */
  }
}

/* モーダルのスタイル */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close {
  color: #5f5f5f;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  top: -5px; /* モーダルの外側に配置 */
  right: 50%;
  transform: translateX(50%);
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.modal-buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.modal-buttons button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s;
}

.modal-buttons button:hover {
  background-color: #ccc;
}

/* 画像モーダル */
.image-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.image-modal img {
  width: 95%;
  height: auto;
}

#search-box {
  width: calc(100% - 20px); /* 余白を含む幅調整 */
  padding: 10px; /* 内側の余白調整 */
  display: block;
  box-sizing: border-box; /* パディングを含む幅調整 */
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.no-scroll {
  overflow: hidden;
  position: fixed;
  width: 100%;
}

/* TOPに戻るボタン */
.top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: #1f1f1f;
  color: rgb(236, 47, 47);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 1); /* 影を追加 */
  transition: opacity 0.3s ease, box-shadow 0.3s ease; /* 影の遷移を追加 */
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
  font-weight: bold;
}

.top-button.show {
  opacity: 1;
  visibility: visible;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* ホバー時の影のスタイルを追加 */
}

/* PCだけモーダル起動時にスクロールバー拡大 */
@media (min-width: 768px) {
  body.modal-open {
    overflow: hidden;
    padding-right: 17px; /* 一般的なスクロールバーの幅 */
  }
}

@media (min-width: 768px) {
  header {
    justify-content: center;
  }
}

body.modal-open {
  overflow: hidden;
  padding-right: var(--scrollbar-width);
}
