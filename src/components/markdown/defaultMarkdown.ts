export const defaultMarkdown = `안녕하세요 지금부터 마크다운 문법에 대해서 알아봅시다.

## 제목(Header)

제목은 아래과 같이 쓸 수 있습니다.

# H1
## H2
### H3
#### H4
##### H5

또한 다음과 같이 사용해도 됩니다.

제목 1
======

제목 2
------

## 강조(Emphasis)

각각 \`<em></em>\`, \`<strong></strong>\`, \`<del></del>\` 태그로 변환됩니다.
<br/><br/>

밑줄을 입력할 땐 \`<u></u>\` 태그를 사용하세요.

이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_ 를 사용하세요.<br/>
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__ 를 사용하세요.<br/>
취소선은 ~~물결표시(tilde)~~를 사용하세요.<br/>
<u>밑줄</u>은 \`<u></u>\`를 사용하세요.<br/>

## 목록(List)

\`<em></em>\`, \`<ul></ul>\` 태그로 변환됩니다.
<br/><br/>

1. 순서가 필요한 목록
2. 순서가 필요한 목록
    - 순서가 필요하지 않은 목록(서브)
    - 순서가 필요하지 않은 목록(서브)
3. 순서가 필요한 목록
    1. 순서가 필요한 목록(서브)
    2. 순서가 필요한 목록(서브)
4. 순서가 필요한 목록

- 순서가 필요하지 않은 목록에 사용 가능한 기호
  - 대쉬(hyphen)
  * 별표(asterisks)
  + 더하기(plus sign)

## 링크(Links)

\`<a>\` 태그로 변환됩니다.
<br/><br/>

[GOOGLE](https://google.com)

[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")

[상대적 참조](../users/login)

[Dribbble][Dribbble link]

[GitHub][1]

문서 안에서 [참조 링크]를 그대로 사용할 수도 있습니다.

다음과 같이 문서 내 일반 URL이나 꺾쇠 괄호(\`< >\`, Angle Brackets)안의 URL은 자동으로 링크를 사용합니다. 

구글 홈페이지: https://google.com<br/>
네이버 홈페이지: <https://naver.com><br/>

[Dribbble link]: https://dribbble.com
[1]: https://github.com
[참조 링크]: https://naver.com "네이버로 이동합니다!"

## 이미지(Images)

\`<img>\` 태그로 변환됩니다.

링크와 비슷하지만 앞에 \`!\`가 붙습니다.
<br/><br/>

![대체 텍스트(alternative text)를 입력하세요!](https://post-phinf.pstatic.net/MjAyMDExMDJfMjQ0/MDAxNjA0MjQzNzIzMzQ2.9I660F5vz6q3u5JQZXk24DoHR3YvLVmZdAgzB0Iqdhsg.785jrDAh_OYFU4yQgeEXwAlT5Zui04U8N-pKMk9I028g.PNG/noname.png?type=w1200 "링크 설명(title)을 작성하세요.")

![haha ha][logo]

[logo]: https://pbs.twimg.com/media/EbHFOqiUMAEm5cL.jpg "To go haha ha."


## 코드 강조

\`code\`, \`pre\` 태그로 변환됩니다.
키보드에서 숫자1 옆에 백틱(\`) 기호를 입력하세요.

백틱 기호를 3번 사용하면 블록 코드를 사용할 수 있습니다.

\`\`\`
블록 코드입니다.
\`\`\`


또한 백틱 기호를 3번쓰고 언어 종류를 입력하면 [PRISM](https://prismjs.com/ ) 에서 제공하는 테마가 적용된 코드 블록을 사용할 수 있습니다.

\`\`\`java
private String name = "Hello";

public String getName() {
  return this.name;
}
\`\`\`

\`\`\`bash
$ tail -f T-PGADM.log
\`\`\`

\`\`\`html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
\`\`\`

\`\`\`css
.list > li {
  position: absolute;
  top: 40px;
}
\`\`\`

\`\`\`javascript
function func() {
  var a = 'AAA';
  return a;
}
\`\`\`

## 표(Table)

\`<table>\` 태그로 변환됩니다.
<br/><br/>

헤더 셀을 구분할 때 3개 이상의 \`-\`(hyphen/dash) 기호가 필요합니다.
헤더 셀을 구분하면서 \`:\`(Colons) 기호로 셀(열/칸) 안에 내용을 정렬할 수 있습니다.
가장 좌측과 가장 우측에 있는 \`|\`(vertical bar) 기호는 생략 가능합니다.
<br/><br/>

| Name          | Age           | Salary|
| ------------- |:-------------:|------:|
| Robert        | 50            | $16000|
| Clint         | 24            |$120000|
| Tommy         | 18            | $1000 |


## 인용문

\`<blockquote>\` 태그로 변환됩니다.
<br/>

> **세상에 가장 흐린 먹물도 가장 뛰어난 기억력보다 낫다**
<br/>
-_중국속담_

> 인용문을 작성하세요!
>> 중첩된 인용문(nested blockquote)을 만들 수 있습니다.
>>> 중중첩된 인용문 

## 원시 HTML

마크다운 문법이 아닌 원시 HTML 문법을 사용할 수 있습니다.
<br/><br/>

<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며 대부분 잘 동작합니다.

<img width="150" src="https://pbs.twimg.com/media/EbHFOqiUMAEm5cL.jpg" alt="Moo" title="Cute Moo">

![Prunus](https://pbs.twimg.com/media/EbHFOqiUMAEm5cL.jpg)

## 수평선

각 기호를 3개 이상 입력하세요
<br/><br/>

---
(Hyphens)

***
(Asterisks)

___
(Underscores)

## 줄바꿈

동해물과 백두산이 마르고 닳도록   
하느님이 보우하사 우리나라 만세  
무궁화 삼천리 화려 강산<br>
대한 사람 대한으로 길이 보전하세  
<br/>

띄워쓰기 2번으로 줄바꿈을 할 수 있습니다.  
또는 \`<br/>\` 태그를 사용할 수 있습니다.
<br/><br/>

출처: https://heropy.blog/2017/09/30/markdown/
`;
