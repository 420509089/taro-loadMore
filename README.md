# taro-loadMore
taro滚动加载，下拉刷新

### Props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasMore | 是否还有更多数据 | `boolean` | `true` |
| threshold | 距离底部多远加载 | `number` | `40` |
| target | 获取监听的目标元素 | `string` | `-` |
| loadMoreText | “没有更多数”据展示文案 | `string` | `哎呀，这里是底部了啦` |
| pullRefresh | 是否开启下拉刷新 | `boolean` | `false` |
| pullingText | 下拉刷新提示文案 | `ReactNode` | `松手刷新` |
| loadingText | 上拉加载提示文案 | `ReactNode` | `加载中...` |
| onRefresh | 下拉刷新事件回调 | `(param: () => void) => void` | `-` |
| onLoadMore | 继续加载的回调函数 | `(param: () => void) => void` | `-` |
| onScroll | 实时监听滚动高度 | `(param: number) => void` | `-` |