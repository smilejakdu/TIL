# Queue

흔히 Queue 는 대기줄에 많이 비유한다.
먼저 온사람이 먼저 들어가게 된다.
나중에 온사람일수록 나중에 들어가기 때문에
선입선출 구조라고 한다.

```python
from collections import deque

queue = deque()


# 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제()
# 삽입(1) - 삽입(4) - 삭제()
queue.append(5)
queue.append(2)
queue.append(3)
queue.append(7)
queue.popleft()
queue.append(1)
queue.append(4)
queue.popleft()

print(queue)    # 먼저 들어온 순서대로 출력
# [3,7,1,4]
queue.reverse() # 다음 출력을 위해 역순으로 바꾸기
print(queue)    # 나중에 들어온 원소부터 출력
# [4,1,7,3]
```

파이썬으로 큐를 구현 할때는 collections 모듈에서 제공하는 deque 자료구조를 활용하자 .
deque 는 스택과 큐의 장점을 모두 채택한 것인데 데이터를 넣고 빼는 속도가 리스트 자료형에 비해 효율적이며 queue 라이브러리를 이용하는 것보다 더 간단하다.
