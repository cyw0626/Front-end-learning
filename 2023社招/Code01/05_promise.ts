/**
 * Promise以第一次执行为准，第一次成功永久的fulfilled，第一次失败为rejected
 * Promise中有throw的话，相当于reject
 */

class MyPromise {
    constructor(executor) {
        this.status = 'pending';
        this.value = null;
        this.reason = null;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = val => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = val;
                this.onFulfilledCallbacks.forEach(fn => fn);
            }
        }

        const reject = reason => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn);
            }
        }

        try {
            executor(resolve, reject);
        } catch(e) {
            reject(e)
        }
    }

    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if(this.status === 'fulfilled') {
                setTimeout(() => {
                    const x = onFulfilled(this.value);
                    x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
                })
            }

            if (this.status === 'rejected') {
                setTimeout(() => {
                    const x = onRejected(this.reason);
                    x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
                })
            }

            if (this.status === 'pending') {
                this.onFulFilledCallbacks.push(() => {
                    setTimeout(() => {
                        const x = onFulfilled(this.value);
                        x instanceof MyPromise ? x.then(resolve, reject) : resolve(x);
                    })
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        const x = onRejected(this.reason);
                        x instanceof MyPromise ? x.then(resolve, reject) : reject(x)
                    })
                })
            }
        })
    }
}