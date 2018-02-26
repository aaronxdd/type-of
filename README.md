# typeOf

> a handy library for checking the type of javascript variable
>
> 一个非常简单的用于做变量结构校验的 JavaScript 模块。
>



## 1. Install

> **npm i typeOf**

Then import it.

```js
import VT from 'typeOf';
or
var VT = require('typeOf');
```


## 2. API & Types

Before use it to check variable, you should make your Types.

And the library contains `Types` below:

 - **VT.bool**
 - **VT.func**
 - **VT.number**
 - **VT.string**
 - **VT.object**
 - **VT.array**
 - **VT.any**
 - **VT.null**
 - **VT.undefined**
 - **VT.instanceOf(Class)**
 - **VT.typeOf(String)**
 - **VT.in(Array)**
 - **VT.arrayOf(Type)**
 - **VT.shape(TypeObject)**
 - **VT.and(TypeArray)**
 - **VT.or(TypeArray)**
 - **VT.not(Type)**
 - **VT.apply(Function)**

The `Type` has 2 API:

 - **check(value)**
 - **optional()**: convent the type into optional.

You can see all the usage in the [test cases file](tests/test.js).

If more Types are needed, welcome to `send a pull request`, or put an issue to me.


## 3. Usage examples

Here is some examples. More you can see in [test.js](tests/test.js) file.

 - Simple usage

```js
VT.number.check(1992);
VT.string.check('aaronxdd');
VT.func.check(Math.min);
VT.bool.check(true);
VT.object.check({});
VT.array.check([1, 2, 3]);
VT.null.check(null);
VT.undefined.check(undefined);
VT.instanceOf(Date).check(new Date());
VT.in(['aaronxdd', 'aaron', 'xdd']).check('aaronxdd');
```

 - And / Or / Not

 ```js
VT.not(VT.in(['aaronxdd', 'cc'])).check('aaronxdd');

VT.and([
	VT.string
	VT.in(['aaronxdd', 1992]),
]).check('aaronxdd');

VT.or([
	VT.number,
	VT.string,
]).check('aaronxdd');
 ```

 - `Array` type.

```js
var arr = ['hello', 'world', 25, new Date(1992, 1, 20)];

var types = VT.arrayOf(
  VT.or([
    VT.number,
    VT.string,
    VT.instanceOf(Date)
  ])
);

types.check(arr); // will get true.
```

 - `Object` type.

```js
var obj = {
  name: 'aaronxdd',
  boy: true,
  birthday: new Date(1992, 8, 1)
};

var types = VT.shape({
  name: VT.string,
  boy: VT.bool,
  birthday: VT.instanceOf(Date)
});

types.check(obj); // will get true.
```

 - `Complex` example.

```js

// The only API `check`.
VT.shape({
  a: VT.bool,
  b: VT.number,
  c: VT.string,
  d: VT.func,
  e: VT.instanceOf(Date),
  f: VT.in([1, '1']),
  g: VT.shape({
    h: VT.or([
      VT.shape({
        i: VT.arrayOf(
          VT.or([
            VT.number,
            VT.string,
            VT.bool,
            VT.shape({
              j: VT.func
            })
          ])
        )
      })
    ])
  })
}).check({
  a: true,
  b: 1,
  c: 'str',
  d: function() {},
  e: new Date(),
  f: '1',
  g: {
    h: {
      i: [
        '1',
        2,
        true,
        {
          j: function() {}
        }
      ]
    }
  }
}); // Then will get true.
```

 - Optional type

```js
VT.shape({
  name: VT.string,
  birthday: VT.string,
  sex: VT.string.optional()
}).check({
  name: 'aaronxdd',
  birthday: '1992-01-20'
}); // Then will get true.
```


## 4. Test

```
npm i

npm run test
```


