import { ElNotification, ElMessageBox } from 'element-plus'

// 弹窗提示
function notify(message, type = "success", dangerouslyUseHTMLString = true) {
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration: 1500
    })
}

// 无输入消息对话框
async function messagebox(content = "提示内容", type = "warning", title = "") {
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

// 有输入消息对话框
function showPrompt(tip, value = "") {
    return ElMessageBox.prompt(tip, '', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        inputValue: value
    })
}

// 将query对象转成url参数
export function queryParams(query) {
    let q = []
    for (const key in query) {
        if (query[key]) {
            q.push(`${key}=${encodeURIComponent(query[key])}`)
        }
    }
    let r = q.join("&")
    r = r ? ("?" + r) : ""
    return r
}

// 上移
export function useArrayMoveUp(arr, index) {
    swapArray(arr, index, index - 1)
}

// 下移
export function useArrayMoveDown(arr, index) {
    swapArray(arr, index, index + 1)
}

function swapArray(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0]
    return arr
}

export { notify, messagebox, showPrompt }