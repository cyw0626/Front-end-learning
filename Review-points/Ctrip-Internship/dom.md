```
                //高亮testID
                //非递归
                // (function DomBFS(element) {
                //     const queue = [];
                //     while (element) {
                //         if (element.attributes.testid) {
                //             element.style.outline = '#00ff00 solid thin';
                //         }
                //         if (element.children.length !== 0) {
                //             for (let i = 0; i < element.children.length; i++) {
                //                 queue.push(element.children[i]);
                //             }
                //         }
                //         element = queue.shift();
                //     }
                // })(document.body);
                //递归
                // (function DomDFS(element) {
                //     if (element.attributes.testid) {
                //         element.style.outline = '#00ff00 solid thin';
                //     }
                //     element = element.firstElementChild;
                //     while (element) {
                //         DomDFS(element);
                //         element = element.nextElementSibling;
                //     }
                // })(document.body);
```
