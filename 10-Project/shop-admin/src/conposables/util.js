import { ElNotification, ElMessageBox } from 'element-plus'

// 弹窗提示
function notify(message, type = "success", dangerouslyUseHTMLString = false) {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 1500
    })
}

// 消息对话框
async function messagebox(content="提示内容",type="warning",title="") {
    return await ElMessageBox.confirm(
        content,
        title,
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type,
        }
    )
}

export { notify , messagebox}