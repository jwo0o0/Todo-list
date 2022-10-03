# Todo list
2022.09.30 ~


feat : 새로운 기능에 대한 커밋<br>
fix : 버그 수정에 대한 커밋<br>
build : 빌드 관련 파일 수정에 대한 커밋<br>
chore : 그 외 자잘한 수정에 대한 커밋<br>
ci : CI관련 설정 수정에 대한 커밋<br>
docs : 문서 수정에 대한 커밋<br>
style : 코드 스타일 혹은 포맷 등에 관한 커밋<br>
refactor : 코드 리팩토링에 대한 커밋<br>
test : 테스트 코드 수정에 대한 커밋<br>

### json-server api 
<code>json-server --watch db.json --port 3001</code>
#### GET
localhost:3001/todos/

```
[
    {
        "id": 1,
        "text": "책 읽기",
        "done": false
    },
    {
        "id": 2,
        "text": "모던 javascirpt 딥다이브 공부",
        "done": false
    },
]
```

#### POST
localhost:3001/todos/
```
{
    "text": "맛있는 요리 하기",
    "done": false
}
```

#### PATCH
localhost:3001/todos/:id
```
{
    "done": !done
}
```

#### DELETE
localhost:3001/todos/:id

