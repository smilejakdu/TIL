# Numpy

Numpy 는 C언어로 구현된 파이썬 라이브러리로써 , 고성능의 수치계산을 위해 제작되었습니다.
벡터 및 행렬 연산에 있어서 매우 편리한 기능을 제공합니다.

```python
import numpy as np

array1 = np.array([1,2,3])
print('array1 type:',type(array1)) # array1 type: <class 'numpy.ndarray'>
print('array1 array 형태:',array1.shape) # array1 array 형태: (3,)

array2 = np.array([[1,2,3],
                  [2,3,4]])
print('array2 type:',type(array2)) # array2 type: <class 'numpy.ndarray'>
print('array2 array 형태:',array2.shape) # array2 array 형태: (2, 3)

array3 = np.array([[1,2,3]])
print('array3 type:',type(array3)) # array3 type: <class 'numpy.ndarray'>
print('array3 array 형태:',array3.shape) # array3 array 형태: (1, 3)


print('array1: {:0}차원, array2: {:1}차원, array3: {:2}차원'.format(array1.ndim,array2.ndim,array3.ndim))
# array1: 1차원, array2: 2차원, array3:  2차원


list1 = [1,2,3]
print(type(list1)) # <class 'list'>
array1 = np.array(list1)

print(type(array1)) # <class 'numpy.ndarray'>
print(array1, array1.dtype) # [1 2 3] int64

```
