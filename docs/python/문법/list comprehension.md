# list comprehension 사용

### [(표현식) for (배열의 원소) in (배열)열

```python
number2 = [x for x in range(1 , 10)]
print(number2)
[1,2,3,4,5,67,8,9]
```

### 조건 필터 추가하기

```python
number = [x for x in range(1, 10) if x % 2 == 0]
print(number)
# [2,4,6,8]

number2 = [x * 2 for x in range(1,10) if x % 2 ==0]
print(number2)
# [4 , 8 , 12 , 16]

cubes = [n **3 for n in range(1,10)]
# [1, 8, 27, 64, 125, 216, 343, 512, 729]
```

# 이중 for 문 들어간 경우

```python
r1 = ['black', 'white']
r2 = ['red', 'blue', 'green']
r3 = []

for t in r1 :
    for p in r2:
        r3.append(t + p)

print(r3)
# ['blackred', 'blackblue', 'blackgreen', 'whitered', 'whiteblue', 'whitegreen']
```

이러한 문자를 list comprehension 을 이용해서 바꿀 수 있다.

```python
r1 = ['black' , 'white']
r2 = ['red' , 'blue' , 'green']
r3 = []
r3 = [t+p for t in r1 for p in r2]
print(r3)
# ['blackred', 'blackblue', 'blackgreen', 'whitered', 'whiteblue', 'whitegreen']
```

```python
r = [n * m for n in range(2, 10) for m in range(1, 10) if (n * m) % 2]
print(r)
# [3, 9, 15, 21, 27, 5, 15, 25, 35, 45, 7, 21, 35, 49, 63, 9, 27, 45, 63, 81]
```

# 이중 for 문 comprehension

```python
duplicate_name = []
for b in broad_list:
    for c in company_list:
        if b == c :
            duplicate_name.append(c)
```

이렇게 되어있는 것을
list comprehension 을 사용하게 되면

```python
duplicate_name = []

[duplicate_name.append(c) for c in company_list for b in broad_list if b==c]
```

# list comprehension 코드정리

```python
[duplicate_name.append(c)
    for b in broad_list
    for c in company_list if b == c]
```
