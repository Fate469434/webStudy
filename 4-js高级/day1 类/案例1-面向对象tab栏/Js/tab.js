let that
class Tab {
    constructor(id) {
        that = this
        this.main = document.querySelector(id)
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('ul')
        this.fsection = this.main.querySelector('.tabscon')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 让相关元素绑定事件
    init() {
        this.add.onclick = this.addTab
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick=this.editTab
            this.sections[i].ondblclick=this.editTab
        }
    }
    // 切换功能
    toggleTab() {
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    // 添加功能
    addTab() {
        that.clearClass()
        // 创建元素
        let li = '<li class="liactive"><span>测试' + (that.lis.length + 1) + '</span><span class="iconfont icon-guanbi"></span></li>'
        // 追加元素到父元素的最后面
        that.ul.insertAdjacentHTML('beforeend', li);

        let section = '<section class="conactive">测试' + (that.lis.length + 1) + '</section>'
        that.fsection.insertAdjacentHTML('beforeend', section)

        that.updateNode()
        that.init()
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li')//阻止冒泡，防止执行li的点击事件
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    // 删除功能
    removeTab(e) {
        e.stopPropagation()
        let index = this.parentNode.index
        // that.ul.removeChild(that.lis[index])
        that.lis[index].remove()

        // 如果被删除的处于选中状态,就让其前一个处于选中状态
        // 如果删除当前栏，仍然有处于选中状态的栏，那说明被删除的栏并不是处于选中状态的栏，直接跳过
        if (document.querySelector('.liactive')) return
        index--
        that.lis[index] && that.lis[index].click()
    }
    // 修改功能
    editTab() {
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        let str=this.innerText
        this.innerHTML=`<input type="text" value=${str} />`
        let input=this.children[0]
        input.select()//文本框里面的文字处于选中状态
        input.onblur=function(){
            this.parentNode.innerHTML=this.value
        }
        input.addEventListener('keyup',function(ev){
            if(ev.key === 'Enter'){
                this.blur()
            }
        })
    }
}
new Tab('#tab').init()