class OrderedList {
    constructor() {
        // 用來存放有序列表的數據陣列
        this.data = [];
    }

    // 插入方法，使用二分搜尋找到插入位置
    insert(item) {
        var start = 0,
            end = this.data.length - 1,
            mid = Math.floor((start + end) / 2),
            pos;

        // 二分搜尋找到插入位置
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (item == this.data[mid]) {
                pos = mid;
                break;
            } else if (item < this.data[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        
        if (start > end)
            pos = mid;

        // 在找到的插入位置插入新元素
        this.data.splice(pos, 0, item);
    }

    // 二分搜尋方法
    bSearch(key) {
        var start = 0,
            end = this.data.length - 1,
            mid;

        // 二分搜尋
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (key == this.data[mid]) {
                return mid; // 找到了，返回索引
            } else if (key < this.data[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return -1; // 未找到
    }
}

// 創建一個 OrderedList 實例
var myOL = new OrderedList();

// 插入一些元素
myOL.insert(5);
myOL.insert(2);
myOL.insert(6);
myOL.insert(19);
myOL.insert(15);
myOL.insert(11);
myOL.insert(13);
myOL.insert(8);
myOL.insert(9);
myOL.insert(7);

// 進行二分搜尋，找到元素 9 的位置
console.log(myOL.bSearch(9));
