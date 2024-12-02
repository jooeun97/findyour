// 개발자만 데이터를 볼 수 있도록 숨겨진 키 조합 설정
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'D') { // Ctrl + D를 누르면
        const clickData = JSON.parse(localStorage.getItem('imageClicks')) || {};
        const timeData = JSON.parse(localStorage.getItem('clickTimes')) || {};

        console.log('클릭 데이터:', clickData);
        console.log('시간 데이터:', timeData);

        alert('개발자 전용 데이터가 콘솔에 표시되었습니다!');
    }
});
