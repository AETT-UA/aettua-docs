"use strict";(self.webpackChunkaettua_docs=self.webpackChunkaettua_docs||[]).push([[9228],{9350:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_position:1},c="Code of Conduct",o={id:"code-of-conduct",title:"Code of Conduct",description:"Introduction",source:"@site/docs/code-of-conduct.md",sourceDirName:".",slug:"/code-of-conduct",permalink:"/aettua-docs/docs/code-of-conduct",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Main Website",permalink:"/aettua-docs/docs/category/main-website"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Version Control",id:"version-control",level:2},{value:"Branching Strategy",id:"branching-strategy",level:3},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"Commit Messages",id:"commit-messages",level:3},{value:"Code Review",id:"code-review",level:2},{value:"Review Process",id:"review-process",level:3},{value:"Acceptance Criteria",id:"acceptance-criteria",level:3},{value:"Testing",id:"testing",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Integration Tests",id:"integration-tests",level:3},{value:"Documentation",id:"documentation",level:2},{value:"Communication",id:"communication",level:2},{value:"Conflict Resolution",id:"conflict-resolution",level:2},{value:"Enforcement",id:"enforcement",level:2},{value:"Amendments",id:"amendments",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"This document outlines the Code of Conduct for AETTUA's IT Team. It aims to establish a set of principles and practices to ensure a productive, respectful, and collaborative environment. Adherence to these guidelines is expected from all team members."}),"\n",(0,s.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#version-control",children:"Version Control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#branching-strategy",children:"Branching Strategy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#naming-conventions",children:"Naming Conventions"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#commit-messages",children:"Commit Messages"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#code-review",children:"Code Review"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#review-process",children:"Review Process"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#acceptance-criteria",children:"Acceptance Criteria"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#testing",children:"Testing"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#unit-tests",children:"Unit Tests"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#integration-tests",children:"Integration Tests"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#documentation",children:"Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#communication",children:"Communication"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#conflict-resolution",children:"Conflict Resolution"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#enforcement",children:"Enforcement"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#amendments",children:"Amendments"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"version-control",children:"Version Control"}),"\n",(0,s.jsx)(n.h3,{id:"branching-strategy",children:"Branching Strategy"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Main Branch:"})," The ",(0,s.jsx)(n.code,{children:"main"})," branch is the source of truth. All production-ready code resides here."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Development Branch:"})," The ",(0,s.jsx)(n.code,{children:"dev"})," branch is where all development merges before being promoted to ",(0,s.jsx)(n.code,{children:"main"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Feature Branches:"})," All new features should be developed in separate branches, branching off from ",(0,s.jsx)(n.code,{children:"dev"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Hotfix Branches:"})," Urgent fixes that need to be applied to the production codebase are made in ",(0,s.jsx)(n.code,{children:"hotfix"})," branches, which are merged directly into ",(0,s.jsx)(n.code,{children:"main"})," and then back-merged into ",(0,s.jsx)(n.code,{children:"dev"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Branch Names:"})," Use a descriptive name for branches, prefixed with the type (e.g., ",(0,s.jsx)(n.code,{children:"feature/user-login"}),", ",(0,s.jsx)(n.code,{children:"hotfix/login-bug"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Commit Messages:"}),' Use imperative mood, and describe what the commit does (e.g., "Add user authentication system").']}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"commit-messages",children:"Commit Messages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clearly describe the changes made in the commit."}),"\n",(0,s.jsx)(n.li,{children:"Include the ticket or issue number if applicable."}),"\n",(0,s.jsx)(n.li,{children:"Keep messages concise and relevant."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"code-review",children:"Code Review"}),"\n",(0,s.jsx)(n.h3,{id:"review-process",children:"Review Process"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Assign at least one reviewer for each merge request."}),"\n",(0,s.jsx)(n.li,{children:"Reviewers should provide constructive feedback and approve changes only when they meet the project standards and requirements."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"acceptance-criteria",children:"Acceptance Criteria"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Code meets the project's coding standards and guidelines."}),"\n",(0,s.jsx)(n.li,{children:"Documentation is updated to reflect changes."}),"\n",(0,s.jsx)(n.li,{children:"Changes are tested (when applicable) and do not introduce new bugs."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.h3,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Write unit tests for all new code and update existing tests as necessary."}),"\n",(0,s.jsx)(n.li,{children:"Aim for a high code coverage percentage to ensure reliability."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"integration-tests",children:"Integration Tests"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure new features work as expected with the existing system."}),"\n",(0,s.jsx)(n.li,{children:"Conduct end-to-end tests for critical workflows."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Document all features, functions, and algorithms."}),"\n",(0,s.jsx)(n.li,{children:"Use clear, concise language and include examples where possible."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"communication",children:"Communication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Maintain regular communication with team members, especially when working remotely."}),"\n",(0,s.jsx)(n.li,{children:"Use the designated channels for project discussions, updates, and questions."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conflict-resolution",children:"Conflict Resolution"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Address conflicts directly with the involved parties."}),"\n",(0,s.jsx)(n.li,{children:"Escalate unresolved issues to the team lead or project manager."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"enforcement",children:"Enforcement"}),"\n",(0,s.jsx)(n.p,{children:"Violations of the Code of Conduct may result in warnings, removal from the project, or further disciplinary actions as deemed appropriate by the leadership team."}),"\n",(0,s.jsx)(n.h2,{id:"amendments",children:"Amendments"}),"\n",(0,s.jsx)(n.p,{children:"This Code of Conduct is a living document and may be updated as the project evolves. All team members will be notified of any changes."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);