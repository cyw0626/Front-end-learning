const obj1 = {};

{/**
    浅拷贝
    基本类型： 拷贝基本类型的值
    引用类型： 拷贝的内存地址--指针（新旧公用同一块内存）
*/}
// 浅拷贝只有一层时是深拷贝
const obj2 = {...obj1};

Object.assign({}, obj1);

Array.prototype.concat();

Array.prototype.slice();
{/**
    深拷贝
    深拷贝开辟一个新的堆内存存放新对象，修改不影响老的对象
*/}
JSON.parse(JSON.stringify(obj1));

function deepClone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target)
        }
        map.set(cloneTarget, target);
        for (let key in target) {
            cloneTarget = deepClone(target[key], map);
        }

        return cloneTarget;
    }

    return target;
}