import { Text } from '@tarojs/components'
import Taro,{ useLoad } from '@tarojs/taro'
import { LoadMore } from '@/components'
import { useState, useEffect } from "react"
import style from "./index.module.scss";

export default function Index() {
  const [defaultList, setDefaultList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = (done) => {
    setTimeout(() => {
      const curLen = defaultList.length
      for (let i = curLen; i < curLen + 10; i++) {
        defaultList.push(`${i}`)
      }
      if (defaultList.length >= 60) {
        setHasMore(false)
      } else {
        setDefaultList([...defaultList])
      }
      done()
    }, 500)
  }
  const refresh = (done) => {
    setTimeout(() => {
			Taro.showToast({
				title: '刷新成功',
				duration: 1500,
				mask: true
			});
      done()
    }, 1000)
  }
  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <div>
      <Text>滚动加载</Text>
      <ul id="scroll" className={style.list}>
        <LoadMore 
          target='scroller' 
          hasMore={hasMore}
          onLoadMore={loadMore}
          threshold={200}
          pullRefresh
          onRefresh={refresh}
        >
            {defaultList.map((item, index) => {
              return (
                <li className='item' key={index}>
                  {item}
                </li>
              )
            })}
        </LoadMore>
      </ul>
    </div>
  )
}
