# DFS

DFS 는 Depth-First Search , 깊이 우선 탐색이라고도 부르며 , 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘이다.

DFS 는 스택 자료구조를 이용한다.

1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문 처리를 한다. 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
3. 2번의 과정을 더이상 수행할 수 없을 때까지 반복한다.

```python
def DFS_with_adj_list(graph , root):
    visited = []
    stack   = [root]

    while stack:
        n = stack.pop()
        if n not in visited:
            visited.append(n)
            stack += graph[n] - set(visited)

    return visited

print(DFS_with_adj_list(graph_list ,root_node))
```

다른 예제를 보겠습니다 .

```python
def dfs(graph , v , visited):
    # 현재 노드를 방문 처리
    visited[v] = True
    print(v , end=' ')
    # 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for i in graph[v]:
        if not visited[i]:
            dfs(graph , i , visited)

# 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)

graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현 (1차원 리스트트

visited = [False] * 9

# 정의된 DFS 함수 호출

dfs(graph , 1 , visited)

# 출력
# 1 2 7 6 8 3 4 5
```
