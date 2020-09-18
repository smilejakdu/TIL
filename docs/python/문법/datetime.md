# 현재 날짜

```python
import datetime

year = datetime.datetime.today().year
month = datetime.datetime.today().month
day = datetime.datetime.toay().day
```

### 날짜 더하기

```python
import datetime

year = datetime.datetime.today().year
month = datetime.datetime.today().month
day = datetime.datetime.today().day

today = datetime.datetime(year , month , day)
today_after_10 = today + datetime.timedelta(days=10)
```

### 날짜 빼기

```python
import datetime

year = datetime.datetime.today().year
month = datetime.datetime.today().month
day = datetime.datetime.today().day

today = datetime.datetime(year , month , day)

today_before_10 = today - datetime.timedelta(days=10)
```
