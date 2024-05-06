"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5968],{89742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(85893),o=t(11151);const i={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_webscraping_with_apify.ipynb",description:"Scrapping web pages and summarizing the content using agents with tools.",source_notebook:"/notebook/agentchat_webscraping_with_apify.ipynb",tags:["web scraping","apify","tool use"],title:"Web Scraping using Apify Tools"},s="Web Scraping using Apify Tools",r={id:"notebooks/agentchat_webscraping_with_apify",title:"Web Scraping using Apify Tools",description:"Scrapping web pages and summarizing the content using agents with tools.",source:"@site/docs/notebooks/agentchat_webscraping_with_apify.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_webscraping_with_apify",permalink:"/autogen/docs/notebooks/agentchat_webscraping_with_apify",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_webscraping_with_apify.ipynb",tags:[{label:"web scraping",permalink:"/autogen/docs/tags/web-scraping"},{label:"apify",permalink:"/autogen/docs/tags/apify"},{label:"tool use",permalink:"/autogen/docs/tags/tool-use"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_webscraping_with_apify.ipynb",description:"Scrapping web pages and summarizing the content using agents with tools.",source_notebook:"/notebook/agentchat_webscraping_with_apify.ipynb",tags:["web scraping","apify","tool use"],title:"Web Scraping using Apify Tools"},sidebar:"notebooksSidebar",previous:{title:"Translating Video audio using Whisper and GPT-3.5-turbo",permalink:"/autogen/docs/notebooks/agentchat_video_transcript_translate_with_whisper"},next:{title:"Websockets: Streaming input and output using websockets",permalink:"/autogen/docs/notebooks/agentchat_websockets"}},c={},l=[];function p(e){const n={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"web-scraping-using-apify-tools",children:"Web Scraping using Apify Tools"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_webscraping_with_apify.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_webscraping_with_apify.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsx)(n.p,{children:"This notebook shows how to use Apify tools with AutoGen agents to scrape\ndata from a website and formate the output."}),"\n",(0,a.jsx)(n.p,{children:"First we need to install the Apify SDK and the AutoGen library."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"! pip install -qqq pyautogen apify-client\n"})}),"\n",(0,a.jsx)(n.p,{children:"Setting up the LLM configuration and the Apify API key is also required."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import os\n\nconfig_list = [\n    {"model": "gpt-4", "api_key": os.getenv("OPENAI_API_KEY")},\n]\n\napify_api_key = os.getenv("APIFY_API_KEY")\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Let\u2019s define the tool for scraping data from the website using Apify\nactor. Read more about tool use in this ",(0,a.jsx)(n.a,{href:"../../docs/tutorial/tool-use",children:"tutorial\nchapter"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from apify_client import ApifyClient\nfrom typing_extensions import Annotated\n\n\ndef scrape_page(url: Annotated[str, "The URL of the web page to scrape"]) -> Annotated[str, "Scraped content"]:\n    # Initialize the ApifyClient with your API token\n    client = ApifyClient(token=apify_api_key)\n\n    # Prepare the Actor input\n    run_input = {\n        "startUrls": [{"url": url}],\n        "useSitemaps": False,\n        "crawlerType": "playwright:firefox",\n        "includeUrlGlobs": [],\n        "excludeUrlGlobs": [],\n        "ignoreCanonicalUrl": False,\n        "maxCrawlDepth": 0,\n        "maxCrawlPages": 1,\n        "initialConcurrency": 0,\n        "maxConcurrency": 200,\n        "initialCookies": [],\n        "proxyConfiguration": {"useApifyProxy": True},\n        "maxSessionRotations": 10,\n        "maxRequestRetries": 5,\n        "requestTimeoutSecs": 60,\n        "dynamicContentWaitSecs": 10,\n        "maxScrollHeightPixels": 5000,\n        "removeElementsCssSelector": """nav, footer, script, style, noscript, svg,\n    [role=\\"alert\\"],\n    [role=\\"banner\\"],\n    [role=\\"dialog\\"],\n    [role=\\"alertdialog\\"],\n    [role=\\"region\\"][aria-label*=\\"skip\\" i],\n    [aria-modal=\\"true\\"]""",\n        "removeCookieWarnings": True,\n        "clickElementsCssSelector": \'[aria-expanded="false"]\',\n        "htmlTransformer": "readableText",\n        "readableTextCharThreshold": 100,\n        "aggressivePrune": False,\n        "debugMode": True,\n        "debugLog": True,\n        "saveHtml": True,\n        "saveMarkdown": True,\n        "saveFiles": False,\n        "saveScreenshots": False,\n        "maxResults": 9999999,\n        "clientSideMinChangePercentage": 15,\n        "renderingTypeDetectionPercentage": 10,\n    }\n\n    # Run the Actor and wait for it to finish\n    run = client.actor("aYG0l9s7dbB7j3gbS").call(run_input=run_input)\n\n    # Fetch and print Actor results from the run\'s dataset (if there are any)\n    text_data = ""\n    for item in client.dataset(run["defaultDatasetId"]).iterate_items():\n        text_data += item.get("text", "") + "\\n"\n\n    average_token = 0.75\n    max_tokens = 20000  # slightly less than max to be safe 32k\n    text_data = text_data[: int(average_token * max_tokens)]\n    return text_data\n'})}),"\n",(0,a.jsx)(n.p,{children:"Create the agents and register the tool."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from autogen import ConversableAgent, register_function\n\n# Create web scrapper agent.\nscraper_agent = ConversableAgent(\n    "WebScraper",\n    llm_config={"config_list": config_list},\n    system_message="You are a web scrapper and you can scrape any web page using the tools provided. "\n    "Returns \'TERMINATE\' when the scraping is done.",\n)\n\n# Create user proxy agent.\nuser_proxy_agent = ConversableAgent(\n    "UserProxy",\n    llm_config=False,  # No LLM for this agent.\n    human_input_mode="NEVER",\n    code_execution_config=False,  # No code execution for this agent.\n    is_termination_msg=lambda x: x.get("content", "") is not None and "terminate" in x["content"].lower(),\n    default_auto_reply="Please continue if not finished, otherwise return \'TERMINATE\'.",\n)\n\n# Register the function with the agents.\nregister_function(\n    scrape_page,\n    caller=scraper_agent,\n    executor=user_proxy_agent,\n    name="scrape_page",\n    description="Scrape a web page and return the content.",\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Start the conversation for scraping web data. We used the\n",(0,a.jsx)(n.code,{children:"reflection_with_llm"})," option for summary method to perform the\nformatting of the output into a desired format. The summary method is\ncalled after the conversation is completed given the complete history of\nthe conversation."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'chat_result = user_proxy_agent.initiate_chat(\n    scraper_agent,\n    message="Can you scrape agentops.ai for me?",\n    summary_method="reflection_with_llm",\n    summary_args={\n        "summary_prompt": """Summarize the scraped content and format summary EXACTLY as follows:\n---\n*Company name*:\n`Acme Corp`\n---\n*Website*:\n`acmecorp.com`\n---\n*Description*:\n`Company that does things.`\n---\n*Tags*:\n`Manufacturing. Retail. E-commerce.`\n---\n*Takeaways*:\n`Provides shareholders with value by selling products.`\n---\n*Questions*:\n`What products do they sell? How do they make money? What is their market share?`\n---\n"""\n    },\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"UserProxy (to WebScraper):\n\nCan you scrape agentops.ai for me?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nWebScraper (to UserProxy):\n\n***** Suggested tool call (call_0qok2jvCxOfv7HOA0oxPWneM): scrape_page *****\nArguments: \n{\n\"url\": \"https://www.agentops.ai\"\n}\n****************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION scrape_page...\nUserProxy (to WebScraper):\n\nUserProxy (to WebScraper):\n\n***** Response from calling tool (call_0qok2jvCxOfv7HOA0oxPWneM) *****\nSTART NOW\nTake your business to the next level with our features \nAI Agents Suck.\nWe're Fixing That. \nBuild compliant AI agents with observability, evals, and replay analytics. No more black boxes and prompt guessing.\nNew! Introducing AgentOps\nThree Lines of Code. Unlimited Testing. \nInstant Testing + Debugging = Compliant AI Agents That Work\n5\n# Beginning of program's code (i.e. main.py, __init__.py)\n6\nao_client = agentops.Client(<INSERT YOUR API KEY HERE>)\n9\n# (optional: record specific functions)\n10\n@ao_client.record_action('sample function being record')\n11\ndef sample_function(...):\n15\nao_client.end_session('Success')\nPrototype to Production\nGenerous free limits, upgrade only when you need it.\n\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nWebScraper (to UserProxy):\n\nSure, here's the information from the website agentops.ai:\n\n- Their main value proposition is to fix bad AI Agents and replace black boxes and prompt guessing with compliant, observable AI agents that come with evals and replay analytics.\n- Their latest product is AgentOps. The simple and instant testing & debugging offered promises better-performing compliant AI agents.\n- Integration is easy with just three lines of code.\n- They let you record specific functions.\n- They provide generous free limits and you only need to upgrade when necessary.\n\nHere's a sample of their code:\n```python\nao_client = agentops.Client(<INSERT YOUR API KEY HERE>)\n\n# optional: record specific functions\n@ao_client.record_action('sample function being record')\ndef sample_function(...):\n    ...\n\nao_client.end_session('Success')\n```\nThis code is for sample usage of their libraries/functions.\n\nLet me know if you need more specific details.\n\n--------------------------------------------------------------------------------\nUserProxy (to WebScraper):\n\nPlease continue if not finished, otherwise return 'TERMINATE'.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nWebScraper (to UserProxy):\n\nTERMINATE\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output is stored in the summary."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(chat_result.summary)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'---\n*Company name*:\n`AgentOps`\n---\n*Website*:\n`agentops.ai`\n---\n*Description*:\n`Company that aims to improve AI agents. They offer observed and evaluable AI agents with replay analytics as an alternative to black box models and blind prompting.`\n---\n*Tags*:\n`Artificial Intelligence, AI agents, Observability, Analytics.`\n---\n*Takeaways*:\n`Their product, AgentOps, allows for easy and instant testing and debugging of AI agents. Integration is as simple as writing three lines of code. They also provide generous free limits and mandate upgrades only when necessary.`\n---\n*Questions*:\n`What differentiates AgentOps from other, similar products? How does their pricing scale with usage? What are the details of their "generous free limits"?`\n---\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);