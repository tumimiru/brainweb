import Image from 'next/image';

export default function TitlePage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>タイトル</h1>

      {/* public/images/sample.png を表示 */}
      <Image
        src="/images/brain.png"
        alt="サンプル画像"
        width={500}
        height={300}
      />

      {/* ボタンを表示 */}
      <button
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        クリック
      </button>
    </div>
  );
}