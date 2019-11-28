// TODO: add memo item
let memoTextBox = $('memo-textbox')
//注册键盘事件
memoTextBox.addEventListener('keypress', (event) => {
    //判断是否是回车按钮
    if ((event.keyCode || event.which) == 13) {
        if (memoTextBox.value) {
            //获取已添加的备忘录,若没有则为一个空数组
            let memoItems = JSON.parse(localStorage.getItem('memoItems') || '[]');
            //添加新的备忘
            memoItems.push(memoTextBox.value);
            //存入localStorage
            localStorage.setItem('memoItems', JSON.stringify(memoItems));
            //使用项目中提供的页面刷新方法
            loadMemoItemslist()
            //重制输入框
            memoTextBox.value = ""
        } else {
            alert('请输入备忘事项');
        }
    }
});