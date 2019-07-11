(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{292:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、什么是事务？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是事务？","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、什么是事务？")]),t._v(" "),e("p",[e("strong",[t._v("事务(Transaction)")]),t._v("：是访问并可能更新数据库中各种数据项的一个程序执行单元(unit)。")]),t._v(" "),e("p",[t._v("例如：在关系数据库中，一个事务可以是一条SQL语句，一组SQL语句或整个程序。")]),t._v(" "),e("h2",{attrs:{id:"二、事务的四大属性（acid）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、事务的四大属性（acid）","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、事务的四大属性（ACID）")]),t._v(" "),e("p",[t._v("事务具有四个属性，也是我们常说的"),e("strong",[t._v("ACID")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_1、原子性（atomicity）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、原子性（atomicity）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、原子性（Atomicity）：")]),t._v(" "),e("p",[t._v("一个事务是一个不可分割的工作单位，事务中包括的诸操作要么都做，要么都不做。简单来说就是把一些操作封装成一个整体，整体操作要么完成，要么整体内部一个都不做。")]),t._v(" "),e("h3",{attrs:{id:"_2、一致性（consistency）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、一致性（consistency）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、一致性（Consistency）：")]),t._v(" "),e("p",[t._v("事务必须是使数据库从一个一致性状态变到另一个一致性状态。一致性与原子性是密切相关的。简单来说就是对存到数据库的合法性进行校验，对于合法的数据都应该能够存到数据库中，对于不合法的数据都不应该存入数据库中。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg：")]),t._v(" "),e("p",[t._v("一个User表，里面存放userName、age、address等字段这时对于任意一个满足User表字段的数据都应该能够正确存入如果此时有一个Course对象，里面存放courseName、courseTime、courseScore等字段，把这个Course对象存到刚刚的User表中，很显然是错误的。")])]),t._v(" "),e("h3",{attrs:{id:"_3、隔离性（isolation）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、隔离性（isolation）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、隔离性（Isolation）：")]),t._v(" "),e("p",[t._v("一个事务的执行不能被其他事务干扰。即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。简单理解就是处理数据库的并发操作，譬如，对于同一条数据此时有两个数据库请求痛死访问，一个是查询，一个是更新，这个时候怎么保证数据的正确性就是由隔离性决定的。")]),t._v(" "),e("h3",{attrs:{id:"_4、持久性（durability）："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、持久性（durability）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、持久性（Durability）：")]),t._v(" "),e("p",[t._v("持久性也称永久性（permanence），指一个事务一旦提交，它对数据库中数据的改变就应该是永久性的。接下来的其他操作或故障不应该对其有任何影响。简单来说，就是数据可以永久存储。")]),t._v(" "),e("h2",{attrs:{id:"三、事务的隔离级别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、事务的隔离级别","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、事务的隔离级别")]),t._v(" "),e("p",[t._v("上面说到了隔离性，隔离性的存在就是为了处理数据库并发访问带来的数据安全性和正确性的问题，下面我们详细说明：")]),t._v(" "),e("h3",{attrs:{id:"_1、read-uncommitted（读取未提交的事务）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、read-uncommitted（读取未提交的事务）","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、read uncommitted（读取未提交的事务）")]),t._v(" "),e("p",[t._v("字面意思就是读取未提交，什么意思？")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg:")]),t._v(" "),e("p",[t._v("一个人在银行有2000元，这时候另一个人转账给他，但是转账过程中发现钱出错了，又撤销了转账，而此时这个人又恰恰在撤销转账之前查询了账户余额，此时如果是"),e("code",[t._v("read uncommitted")]),t._v("级别，那么此时查询的结果就是2000元+转账的金额，而事实上这个人账户还是2000元。")])]),t._v(" "),e("p",[t._v("这就是明显的脏数据问题，因为转账的事务动作还未最终完成，而当前这个人就能查询到未提交的事务过程。（转账和撤销转账是在同一个事务中）")]),t._v(" "),e("h3",{attrs:{id:"_2、read-committed（读取提交的事务）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、read-committed（读取提交的事务）","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、read committed（读取提交的事务）")]),t._v(" "),e("p",[t._v("这个时候我们修改隔离级别，改为读取提交的事务级别，此时会怎么样？")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg:")]),t._v(" "),e("p",[t._v("还是这个人有2000元，这个时候他自己在查询账户余额，而此时又有一个人给他转账，转账过程可能还存在撤销转账操作，但是由于是读取提交的事务，在转账事务未提交之前，他始终读取的都是原数据库中的数据，2000元不变，只有当转账事务完成提交后，他读取的才是转账后的数额。")])]),t._v(" "),e("h3",{attrs:{id:"_3-repeatable-read（重复读取）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-repeatable-read（重复读取）","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. repeatable read（重复读取）")]),t._v(" "),e("p",[t._v("解决了脏数据的问题后还是存在另一个问题")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg：")]),t._v(" "),e("p",[t._v("一个事务中有两次读取同一条数据的操作，而另一个事务中则是对这条数据进行更新，这就会导致第一个事务第一次读取时1，此时另一个事务执行提交将数据更新为2，那么第一个事务第二次读取就是2，明细第一个事务的两次对同一条数据的读取是不正确的，即同一事物中对同一条数据的读取是不重复的。")])]),t._v(" "),e("p",[t._v("于是有了"),e("code",[t._v("repeatable read")]),t._v("的隔离级别，它保证多个事务对同一条数据进行操作时，如果有读取操作，那么就不允许事务对其进行更新操作。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg：")]),t._v(" "),e("p",[t._v("A事务现在读取数据库，B事务有两步：一是读取，二是更新，然而发现A事务正在读取数据，此时B事务只能读取数据，不能执行对A读的数据的更新操作。")])]),t._v(" "),e("h3",{attrs:{id:"_4-serializable（序列化）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-serializable（序列化）","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. Serializable（序列化）")]),t._v(" "),e("p",[t._v("到了第三个级别repeatable read就没有问题了吗？")]),t._v(" "),e("p",[t._v("如果A事务读取数据库，此时B事务有两个操作：读取之后更新，B事务发现A事务正在读取。于是只能读取，此时恰恰A事务执行完成，B事务的读取也刚好完成，B事务发现已经没有事务对数据进行读操作了，这个时候就对数据进行了更新操作，之后A事务再回来查询数据时发现数据又已经发生了改变，这就是常说的幻读。")]),t._v(" "),e("p",[t._v("为了解决幻读的可能，我们将数据库的隔离级别提高到serializable，它将所有的事务都进行序列化，进行了排队处理，每次只接受一个事务请求，只有一个事务结束后才进行下一个事务，绝对保证每个事务的正确执行，于是带来的问题就是性能很低。")]),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("eg:")]),t._v(" "),e("p",[t._v("A事务和B事务，B事务中有查询和更新操作，在repeatable read下此时B事务先执行，但是执行到读操作时，A事务进行查询，此时B事务查询完成发现有事务进行读操作，于是更新操作无法完成。\n这个时候A事务本应该查询到B事务更新完成后的结果，但是却查的更新前的结果。\n在serializale下，B事务先执行，A事务排队中，B事务执行结束后已经是更新后的结果，A事务拿到B事务更新后的结果值。")])])])},[],!1,null,null,null);a.default=r.exports}}]);