module.exports = {
    updater: {
        error: '更新に失敗しました: ',
        checking: '更新を確認しています',
        skipped: '更新をスキップしました',
        available: '最新のバージョンが見つかりました: v',
        uptodate: '現在のバージョンは最新です',
        progress: 'ダウンロード中: {0}%, {1}kB/s',
        downloaded: 'ダウンロードが完了しました',
    },
    dialog: {
        yes: 'はい',
        no: 'いいえ',
        ok: 'OK',
        cancel: 'キャンセル',
        social: {
            leavePageTitle: 'ページを離れますか？',
            leavePageMessage: '本当にこのページを離れますか？行われた変更は保存されていない可能性があります。',
        },
        confirmResetConfig: '本当にクライアントの設定をリセットしますか？この操作は取り消すことが出来ません。',
        resetedConfig: 'クライアントの設定をリセットしました。再起動します。',
        confirmClearData: '本当にユーザーデータを削除しますか？この操作は取り消すことが出来ません。',
        clearedData: 'ユーザーデータを削除しました。再起動します。',
        copiedSysInfo: 'システム情報をコピーしました。',
        twitchLogout: '本当にTwitchからログアウトしますか？',
        infoPage: '現在ページを準備中です。\nそれまでKrunkerをプレイしながらお待ち下さい…。'
    },
    altManager: {
        addAcc: {
            ok: 'アカウントを正常に追加しました',
            error: 'アカウントを追加できませんでした',
            saveok: 'アカウントを正常に保存しました',
        },
        deleteAcc: {
            confirm: '本当に%accName%を削除しますか？',
        },
        editAcc: {
            edit: '%accName%を編集中',
        },
    },
    settings: {
        requireRestart: '再起動が必要です',
        lang: '言語(Language)',
        enableSwapper: 'リソーススワッパー',
        enableRPC: 'Discord RPC',
        enableAltManager: 'サブアカウントマネージャー UI',
        unlimitedFPS: 'FPS無制限',
        angleType: 'ANGLEバックエンド',
        webgl2Context: 'WebGL2コンテキスト',
        acceleratedCanvas: 'ハードウェアアクセラレーション(2D)',
        easyCSSMode: 'EasyCSS',
        easyCSStype1: 'LaF Theme',
        easyCSStype2: 'Cutie Comp',
        easyCSStype3: 'タイプ3',
        easyCSSCustom: 'カスタム',
        easyCSSDisable: '無効',
        userCSSPath: 'カスタムCSSファイル',
        showExitBtn: 'EXITボタン',
        topExitBtn: '上',
        bottomExitBtn: '下',
        disableExitBtn: '非表示',
        selectFile: 'ファイルを選択',
        resetOptions: '設定をリセットする',
        clearUserData: 'ユーザーデータを削除',
        openSwapper: 'リソーススワッパーを開く',
        restartClient: 'LaFを再起動',
        openInfo: 'LaFについて',
        twitchLinkCmd: '!linkコマンド',
        linkCmdUI: '!linkコマンド切り替えボタン',
        twitchUnlinked: 'Twitch: 未連携',
        twitchLinked: 'Twitch: {0}',
        twitchError: 'Twitch: ログインエラー',
        joinMatchPresentRegion: '現在接続中の地域に限定する',
        joinMatchMode: '接続するゲームモード',
        allMode: '全てのモード',
        joinMatchCustom: 'カスタムマッチ',
        joinMatchOCustom: '公式カスタムマッチ'
    },
    misc: {
        noJoinableGames: '参加可能なゲームがありません'
    }
};