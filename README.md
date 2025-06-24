# GitHub Copilot 코딩 에이전트

## 개요

- 공식문서: https://docs.github.com/en/copilot/using-github-copilot/coding-agent

- GitHub Copilot 코딩 에이전트는 소프트웨어 개발 작업을 간소화하기 위한 AI 기반 도구로, github.com의 이슈 및 PR 페이지를 통해 복잡한 코딩 작업을 Copilot에게 할당할 수 있게 해줌

### 기능 비교표

| 구분 | 자동완성 | Ask/Edit 모드 | Agent 모드 | 코딩 에이전트 |
|------|-------------|------------|------------|-----------------|
| **작업(변경) 범위** | 커서 아래 몇 줄 | 다중 파일 편집 | 작업 완성을 위한 전 범위 | 이슈 전체 |
| **상호작용 빈도** | 수백 밀리초 | 몇 초 | 몇 분 | 수십 분 |
| **루프 유형** | 내부 루프 | 내부 루프 | 내부 루프 | 외부 루프 |
| **개발 환경** | VS Code (Editor) | VS Code (Chat) | VS Code (Chat) | github.com |

  - GitHub Copilot 코딩 에이전트는 github.com, GitHub mobile, GitHub CLI에서 사용할 수 있음

### 사용방법

1. 기능 활성화

- [계정 세팅 --> Copilot --> Coding agent 메뉴 진입](https://github.com/settings/copilot/coding_agent)후, 허용 저장소 설정
  - 참고: 2025년 6월 17일 기준, 해당기능은 Preview
  ![Copilot Coding agent](/images/copilot-coding-agent.png)

2. 이슈 할당

- 이슈 탭 클릭
  ![이슈 탭 클릭](/images/issue-tab.png)
- 우측 사이드바에서 Assignees 클릭
  ![담당자 지정](/images/assignees.png)
- Copilot 선택
  ![코파일럿 선택](/images/copilot-assign.png)

### MCP 설정으로 기능 확장

- MCP 설정을 통해 Copilot 코딩 에이전트의 기능을 확장할 수 있음
  - 공식문서: https://docs.github.com/en/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp
  - 예시: [Playwright MCP](https://github.com/microsoft/playwright-mcp) 설정하여 외부 웹사이트와 상호작용
    ```yaml
    {
      "mcpServers": {
        "playwright": {
          "command": "npx",
          "args": [
            "@playwright/mcp@latest"
          ]
        }
      }
    }
    ```
- ![코파일럿 코딩 에이전트에 MCP 적용](/images/mcp-configuration.png)