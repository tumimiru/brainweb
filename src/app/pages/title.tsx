import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  styled,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// ガラス風カード用の styled コンポーネント
const GlassCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '400px',      // PC向けに少し大きめ
  minHeight: '250px', // カードを大きく見せるなら高さも設定
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '24px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)', // Safari対応
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        // コーラル系ピンクのグラデーション背景
        background: 'linear-gradient(to bottom, #fde2e4 0%, #ffcbd1 100%)',
      }}
    >
      {/* ヘッダー */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#ffb6c1', // 淡いピンクで AppBar をカスタム
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* Drawer を開くメニューボタン */}
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, ml: 1, fontWeight: 'bold' }}>
            単語カードアプリ
          </Typography>

          {/* 戻るボタン */}
          <Button
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
            sx={{
              backgroundColor: '#ffa5b0',
              color: '#fff',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ff909c',
              },
            }}
          >
            戻る
          </Button>
        </Toolbar>
      </AppBar>

      {/* メインコンテンツ（中央にカードを配置） */}
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 'calc(100vh - 64px)', // AppBar 高さを差し引いて全画面っぽく
          p: 2,
        }}
      >
        <GlassCard>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 'bold', color: '#444', letterSpacing: '0.05em' }}
          >
            単語カード
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#555' }}>
            ここに単語が表示されます
          </Typography>

          {/* チェック & バツボタン */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            <IconButton
              sx={{
                backgroundColor: '#e0f7e9',
                color: '#2e7d32',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#c4efd7',
                },
              }}
            >
              <CheckIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: '#ffd6d6',
                color: '#c62828',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#ffc0c0',
                },
              }}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Box>
        </GlassCard>
      </Box>

      {/* 右側の Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: '300px',
            p: 3,
            backgroundColor: '#fff0f3',
            height: '100%',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            説明
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            ここに詳しい説明や解説を表示します。
            <br />
            例: この単語は◯◯という意味で…
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}

export default App;