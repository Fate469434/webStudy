import { ElNotification } from 'element-plus'

// 成功提示
function notify(message, type="success",dangerouslyUseHTMLString=false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 2000
    })
}

export {notify}