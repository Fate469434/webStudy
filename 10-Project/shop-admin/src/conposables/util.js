import { ElNotification } from 'element-plus'

// 弹窗提示
function notify(message, type="success",dangerouslyUseHTMLString=false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 2000
    })
}

export {notify}