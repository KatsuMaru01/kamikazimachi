// 例えば、将来的にスライドショーなどの機能を追加する場合
document.addEventListener('DOMContentLoaded', function() {
    // コンソールメッセージ
    console.log('サイトが読み込まれました');

    // 活動風景セクションの取得
    const activitiesSection = document.getElementById('activities');
    
    // 記事要素の取得
    const posts = Array.from(activitiesSection.getElementsByClassName('post'));
    
    // 日付順にソート (新しい順)
    posts.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; // 新しい順に並べる
    });
    
    // ソート後の投稿をセクションに追加
    posts.forEach(post => activitiesSection.appendChild(post));
});
