# Model.objects.filter().exists():

대부분 존재확인을 여부를 묻고싶을때 많이 사용한다 .

```python
            if Group.objects.filter(group_initial=data['group_initial']).exists():
                return JsonResponse({"message": "DUPLICATE_GROUP_INITIAL"}, status=400)

            if Group.objects.filter(email=data['email']).exists():
                return JsonResponse({"message": "DUPLICATE_EMAIL"}, status=400)

            if Group.objects.filter(phone=data['phone']).exists():
                return JsonResponse({"message": "DUPLICATE_PHONE"}, status=400)

```

그런데 이렇게 많이 사용하게 될땐 중복된 코드가 많다 .
사실

```python
group_initial = data['group_initial']
email = data["email"]
phone = data["phone"]
```

이거만 바뀌지 나머지는 변하지 않는다.

코드 수정이 안될까 ??

```python
            q_dict = {
                'group_initial': data['group_initial'],
                'phone': data['phone'],
                'name': data['name'],
                'email': data['email']}

            if Group.objects.filter(**q_dict).exists():
                return JsonResponse({"message": f"DUPLICATE_{q_dict}"})

```

이렇게 수정하면 된다.

만약에 여러개 반복문을 돌려서 확인을 하고싶다면

```python
            q_dict = {
                'group_initial': data['group_initial'],
                'name': data['name'],
                'email': data['email'],
                'phone': data['phone'],
            }
            for q in q_dict:
                if Group.objects.filter(**{q: q_dict[q]}).exists():
                    return JsonResponse({"message": f"DUPLICATE_{q_dict[q]}"})

```
