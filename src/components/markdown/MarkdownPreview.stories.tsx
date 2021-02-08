import React, { ComponentProps, useCallback, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import MarkdownPreview from './MarkdownPreview';
import Container from '../container/Container';
import Page from '../common/Page';
import Box from '../common/Box';
import Textarea from '../textarea/Textarea';
import SplitPane, { Pane } from 'react-split-pane';
import styled from 'styled-components';

export default {
  title: 'Components/MarkdownPreview',
  component: MarkdownPreview.type,
  decorators: [
    (Story) => (
      <Page>
        <Box>{Story()}</Box>
      </Page>
    ),
  ],
};

const markdown = `안녕하세요 지금부터 마크다운 문법에 대해서 알아봅시다.

## 제목(Header)

제목은 아래과 같이 쓸 수 있습니다.
\`\`\`
# H1
## H2
### H3
#### H4
##### H5
\`\`\`

# H1
## H2
### H3
#### H4
##### H5

또한 다음과 같이 사용해도 됩니다.

\`\`\`
제목 1
======

제목 2
------
\`\`\`

제목 1
======

제목 2
------

## 강조(Emphasis)

각각 \`<em></em>\`, \`<strong></strong>\`, \`<del></del>\` 태그로 변환됩니다.

밑줄을 입력할 땐 \`<u></u>\` 태그를 사용하세요.


\`\`\`
이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_ 를 사용하세요.
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__ 를 사용하세요.
취소선은 ~~물결표시(tilde)~~를 사용하세요.
<u>밑줄</u>은 \`<u></u>\`를 사용하세요.
\`\`\`

이텔릭체는 *별표(asterisks)* 혹은 _언더바(underscore)_ 를 사용하세요.</br>
두껍게는 **별표(asterisks)** 혹은 __언더바(underscore)__ 를 사용하세요.</br>
취소선은 ~~물결표시(tilde)~~를 사용하세요.</br>
<u>밑줄</u>은 \`<u></u>\`를 사용하세요.</br>

## 목록(List)

\`<em></em>\`, \`<ul></ul>\` 태그로 변환됩니다.

\`\`\`
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
\`\`\`
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


\`\`\`java
private String name = "Hello";
\`\`\`

---

| Name          | Age           | Salary|
| ------------- |:-------------:| -----:|
| Robert        | 50            | $16000|
| Clint         | 24            |$120000|
| Tommy         | 18            | $1000 |

`;

const Template: Story<ComponentProps<typeof MarkdownPreview>> = (args) => {
  const [content, setContent] = useState(markdown);

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  return (
    <StyleContainer>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        style={{ position: 'relative' }}
      >
        <Textarea
          value={content}
          onChange={onChange}
          style={{ height: '100%' }}
        />
        <MarkdownPreview {...args} content={content} />
      </SplitPane>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .Pane {
    & > div {
      height: 100%;
    }
  }

  .Resizer {
    background: #000;
    opacity: 0.2;
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }

  .Resizer:hover {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .Resizer.disabled {
    cursor: not-allowed;
  }
  .Resizer.disabled:hover {
    border-color: transparent;
  }
`;

export const Default = Template.bind({});
Default.args = {};
