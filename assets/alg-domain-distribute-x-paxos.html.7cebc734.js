import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as e,b as o,d as r,e as l,r as i}from"./app.7a1da930.js";const t={},n=r('<h1 id="\u5206\u5E03\u5F0F\u7B97\u6CD5-paxos\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7B97\u6CD5-paxos\u7B97\u6CD5" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7B97\u6CD5-Paxos\u7B97\u6CD5</h1><h2 id="_1-paxos\u7B97\u6CD5\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-paxos\u7B97\u6CD5\u7B80\u4ECB" aria-hidden="true">#</a> 1. Paxos\u7B97\u6CD5\u7B80\u4ECB</h2><p>Paxos\u7B97\u6CD5\u662FLamport\u5B97\u5E08\u63D0\u51FA\u7684<strong>\u4E00\u79CD\u57FA\u4E8E\u6D88\u606F\u4F20\u9012\u7684\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\uFF08\u5206\u5E03\u5F0F\u9009\u4E3E\u7B97\u6CD5\uFF09\u7B97\u6CD5</strong>\uFF0C\u4F7F\u5176\u83B7\u5F972013\u5E74\u56FE\u7075\u5956\u3002</p><blockquote><p>Paxos\u7531Lamport\u4E8E1998\u5E74\u5728\u300AThe Part-Time Parliament\u300B\u8BBA\u6587\u4E2D\u9996\u6B21\u516C\u5F00\uFF0C\u6700\u521D\u7684\u63CF\u8FF0\u4F7F\u7528\u5E0C\u814A\u7684\u4E00\u4E2A\u5C0F\u5C9BPaxos\u4F5C\u4E3A\u6BD4\u55BB\uFF0C\u63CF\u8FF0\u4E86Paxos\u5C0F\u5C9B\u4E2D\u901A\u8FC7\u51B3\u8BAE\u7684\u6D41\u7A0B\uFF0C\u5E76\u4EE5\u6B64\u547D\u540D\u8FD9\u4E2A\u7B97\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E2A\u63CF\u8FF0\u7406\u89E3\u8D77\u6765\u6BD4\u8F83\u6709\u6311\u6218\u6027\u3002\u540E\u6765\u57282001\u5E74\uFF0CLamport\u89C9\u5F97\u540C\u884C\u4E0D\u80FD\u7406\u89E3\u4ED6\u7684\u5E7D\u9ED8\u611F\uFF0C\u4E8E\u662F\u91CD\u65B0\u53D1\u8868\u4E86\u6734\u5B9E\u7684\u7B97\u6CD5\u63CF\u8FF0\u7248\u672C\u300APaxos Made Simple\u300B\u3002</p><p>\u81EAPaxos\u95EE\u4E16\u4EE5\u6765\u5C31\u6301\u7EED\u5784\u65AD\u4E86\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u7B97\u6CD5\uFF0CPaxos\u8FD9\u4E2A\u540D\u8BCD\u51E0\u4E4E\u7B49\u540C\u4E8E\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u3002Google\u7684\u5F88\u591A\u5927\u578B\u5206\u5E03\u5F0F\u7CFB\u7EDF\u90FD\u91C7\u7528\u4E86Paxos\u7B97\u6CD5\u6765\u89E3\u51B3\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898\uFF0C\u5982Chubby\u3001Megastore\u4EE5\u53CASpanner\u7B49\u3002\u5F00\u6E90\u7684ZooKeeper\uFF0C\u4EE5\u53CAMySQL 5.7\u63A8\u51FA\u7684\u7528\u6765\u53D6\u4EE3\u4F20\u7EDF\u7684\u4E3B\u4ECE\u590D\u5236\u7684MySQL Group Replication\u7B49\u7EB7\u7EB7\u91C7\u7528Paxos\u7B97\u6CD5\u89E3\u51B3\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898</p></blockquote><h2 id="_2-basic-paxos\u7B97\u6CD5\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-basic-paxos\u7B97\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a> 2. Basic Paxos\u7B97\u6CD5\u5B9E\u73B0</h2><p>Paxos\u7B97\u6CD5\u89E3\u51B3\u7684\u95EE\u9898\u6B63\u662F\u5206\u5E03\u5F0F\u4E00\u81F4\u6027\u95EE\u9898**\uFF0C\u5373\u4E00\u4E2A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u5404\u4E2A\u8FDB\u7A0B\u5982\u4F55\u5C31\u67D0\u4E2A\u503C(\u51B3\u8BAE)\u8FBE\u6210\u4E00\u81F4\u3002**</p><p>Paxos\u7B97\u6CD5\u8FD0\u884C\u5728\u5141\u8BB8\u5B95\u673A\u6545\u969C\u7684\u5F02\u6B65\u7CFB\u7EDF\u4E2D\uFF0C\u4E0D\u8981\u6C42\u53EF\u9760\u7684\u6D88\u606F\u4F20\u9012\uFF0C\u53EF\u5BB9\u5FCD\u6D88\u606F\u4E22\u5931\u3001\u5EF6\u8FDF\u3001\u4E71\u5E8F\u4EE5\u53CA\u91CD\u590D\u3002\u5B83\u5229\u7528\u5927\u591A\u6570 (Majority) \u673A\u5236\u4FDD\u8BC1\u4E862F+1\u7684\u5BB9\u9519\u80FD\u529B\uFF0C\u53732F+1\u4E2A\u8282\u70B9\u7684\u7CFB\u7EDF\u6700\u591A\u5141\u8BB8F\u4E2A\u8282\u70B9\u540C\u65F6\u51FA\u73B0\u6545\u969C\u3002</p><p>\u4E00\u4E2A\u6216\u591A\u4E2A\u63D0\u8BAE\u8FDB\u7A0B (Proposer) \u53EF\u4EE5\u53D1\u8D77\u63D0\u6848 (Proposal)\uFF0CPaxos\u7B97\u6CD5\u4F7F\u6240\u6709\u63D0\u6848\u4E2D\u7684\u67D0\u4E00\u4E2A\u63D0\u6848\uFF0C\u5728\u6240\u6709\u8FDB\u7A0B\u4E2D\u8FBE\u6210\u4E00\u81F4\u3002\u7CFB\u7EDF\u4E2D\u7684\u591A\u6570\u6D3E\u540C\u65F6\u8BA4\u53EF\u8BE5\u63D0\u6848\uFF0C\u5373\u8FBE\u6210\u4E86\u4E00\u81F4\u3002\u6700\u591A\u53EA\u9488\u5BF9\u4E00\u4E2A\u786E\u5B9A\u7684\u63D0\u6848\u8FBE\u6210\u4E00\u81F4\u3002</p><h3 id="_2-1-\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#_2-1-\u89D2\u8272" aria-hidden="true">#</a> 2.1 \u89D2\u8272</h3><p>Paxos\u5C06\u7CFB\u7EDF\u4E2D\u7684\u89D2\u8272\u5206\u4E3A<code>\u63D0\u8BAE\u8005 (Proposer)</code>\uFF0C<code>\u51B3\u7B56\u8005 (Acceptor)</code>\uFF0C\u548C<code>\u6700\u7EC8\u51B3\u7B56\u5B66\u4E60\u8005 (Learner)</code>:</p><ul><li><code>Proposer</code>: \u63D0\u51FA\u63D0\u6848 (Proposal)\u3002Proposal\u4FE1\u606F\u5305\u62EC\u63D0\u6848\u7F16\u53F7 (Proposal ID) \u548C\u63D0\u8BAE\u7684\u503C (Value)\u3002</li><li><code>Acceptor</code>: \u53C2\u4E0E\u51B3\u7B56\uFF0C\u56DE\u5E94Proposers\u7684\u63D0\u6848\u3002\u6536\u5230Proposal\u540E\u53EF\u4EE5\u63A5\u53D7\u63D0\u6848\uFF0C\u82E5Proposal\u83B7\u5F97\u591A\u6570Acceptors\u7684\u63A5\u53D7\uFF0C\u5219\u79F0\u8BE5Proposal\u88AB\u6279\u51C6\u3002</li><li><code>Learner</code>: \u4E0D\u53C2\u4E0E\u51B3\u7B56\uFF0C\u4ECEProposers/Acceptors\u5B66\u4E60\u6700\u65B0\u8FBE\u6210\u4E00\u81F4\u7684\u63D0\u6848(Value)\u3002</li></ul><p>\u5728\u591A\u526F\u672C\u72B6\u6001\u673A\u4E2D\uFF0C\u6BCF\u4E2A\u526F\u672C\u540C\u65F6\u5177\u6709Proposer\u3001Acceptor\u3001Learner\u4E09\u79CD\u89D2\u8272\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212528338.png" alt="image-20220618212528338" loading="lazy"></p><blockquote><p>\u53EF\u4EE5\u7406\u89E3\u4E3A\u4EBA\u5927\u4EE3\u8868(Proposer)\u5728\u4EBA\u5927\u5411\u5176\u5B83\u4EE3\u8868(Acceptors)\u63D0\u6848\uFF0C\u901A\u8FC7\u540E\u8BA9\u8001\u767E\u59D3(Learner)\u843D\u5B9E\u3002</p></blockquote><h3 id="_2-2-\u4E09\u4E2A\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E09\u4E2A\u9636\u6BB5" aria-hidden="true">#</a> 2.2 \u4E09\u4E2A\u9636\u6BB5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212629562.png" alt="image-20220618212629562" loading="lazy"></p><h4 id="_2-2-1-\u7B2C\u4E00\u9636\u6BB5-prepare\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u7B2C\u4E00\u9636\u6BB5-prepare\u9636\u6BB5" aria-hidden="true">#</a> 2.2.1 \u7B2C\u4E00\u9636\u6BB5: Prepare\u9636\u6BB5</h4><p>Proposer\u5411Acceptors\u53D1\u51FAPrepare\u8BF7\u6C42\uFF0CAcceptors\u9488\u5BF9\u6536\u5230\u7684Prepare\u8BF7\u6C42\u8FDB\u884CPromise\u627F\u8BFA\u3002</p><ul><li><code>Prepare</code>: Proposer\u751F\u6210\u5168\u5C40\u552F\u4E00\u4E14\u9012\u589E\u7684Proposal ID (\u53EF\u4F7F\u7528\u65F6\u95F4\u6233\u52A0Server ID)\uFF0C\u5411\u6240\u6709Acceptors\u53D1\u9001Prepare\u8BF7\u6C42\uFF0C\u8FD9\u91CC\u65E0\u9700\u643A\u5E26\u63D0\u6848\u5185\u5BB9\uFF0C\u53EA\u643A\u5E26Proposal ID\u5373\u53EF\u3002</li><li><code>Promise</code>: Acceptors\u6536\u5230Prepare\u8BF7\u6C42\u540E\uFF0C\u505A\u51FA\u201C\u4E24\u4E2A\u627F\u8BFA\uFF0C\u4E00\u4E2A\u5E94\u7B54\u201D\u3002 <ul><li>\u627F\u8BFA1: \u4E0D\u518D\u63A5\u53D7Proposal ID\u5C0F\u4E8E\u7B49\u4E8E(\u6CE8\u610F: \u8FD9\u91CC\u662F&lt;= )\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42;</li><li>\u627F\u8BFA2: \u4E0D\u518D\u63A5\u53D7Proposal ID\u5C0F\u4E8E(\u6CE8\u610F: \u8FD9\u91CC\u662F&lt; )\u5F53\u524D\u8BF7\u6C42\u7684Propose\u8BF7\u6C42;</li><li>\u5E94\u7B54: \u4E0D\u8FDD\u80CC\u4EE5\u524D\u4F5C\u51FA\u7684\u627F\u8BFA\u4E0B\uFF0C\u56DE\u590D\u5DF2\u7ECFAccept\u8FC7\u7684\u63D0\u6848\u4E2DProposal ID\u6700\u5927\u7684\u90A3\u4E2A\u63D0\u6848\u7684Value\u548CProposal ID\uFF0C\u6CA1\u6709\u5219\u8FD4\u56DE\u7A7A\u503C\u3002</li></ul></li></ul><h4 id="_2-2-2-\u7B2C\u4E8C\u9636\u6BB5-accept\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u7B2C\u4E8C\u9636\u6BB5-accept\u9636\u6BB5" aria-hidden="true">#</a> 2.2.2 \u7B2C\u4E8C\u9636\u6BB5: Accept\u9636\u6BB5</h4><p>Proposer\u6536\u5230\u591A\u6570Acceptors\u627F\u8BFA\u7684Promise\u540E\uFF0C\u5411Acceptors\u53D1\u51FAPropose\u8BF7\u6C42\uFF0CAcceptors\u9488\u5BF9\u6536\u5230\u7684Propose\u8BF7\u6C42\u8FDB\u884CAccept\u5904\u7406\u3002</p><ul><li><code>Propose</code>: Proposer \u6536\u5230\u591A\u6570Acceptors\u7684Promise\u5E94\u7B54\u540E\uFF0C\u4ECE\u5E94\u7B54\u4E2D\u9009\u62E9Proposal ID\u6700\u5927\u7684\u63D0\u6848\u7684Value\uFF0C\u4F5C\u4E3A\u672C\u6B21\u8981\u53D1\u8D77\u7684\u63D0\u6848\u3002\u5982\u679C\u6240\u6709\u5E94\u7B54\u7684\u63D0\u6848Value\u5747\u4E3A\u7A7A\u503C\uFF0C\u5219\u53EF\u4EE5\u81EA\u5DF1\u968F\u610F\u51B3\u5B9A\u63D0\u6848Value\u3002\u7136\u540E\u643A\u5E26\u5F53\u524DProposal ID\uFF0C\u5411\u6240\u6709Acceptors\u53D1\u9001Propose\u8BF7\u6C42\u3002</li><li><code>Accept</code>: Acceptor\u6536\u5230Propose\u8BF7\u6C42\u540E\uFF0C\u5728\u4E0D\u8FDD\u80CC\u81EA\u5DF1\u4E4B\u524D\u4F5C\u51FA\u7684\u627F\u8BFA\u4E0B\uFF0C\u63A5\u53D7\u5E76\u6301\u4E45\u5316\u5F53\u524DProposal ID\u548C\u63D0\u6848Value\u3002</li></ul><h4 id="_2-2-3-\u7B2C\u4E09\u9636\u6BB5-learn\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u7B2C\u4E09\u9636\u6BB5-learn\u9636\u6BB5" aria-hidden="true">#</a> 2.2.3 \u7B2C\u4E09\u9636\u6BB5: Learn\u9636\u6BB5</h4><p>Proposer\u5728\u6536\u5230\u591A\u6570Acceptors\u7684Accept\u4E4B\u540E\uFF0C\u6807\u5FD7\u7740\u672C\u6B21Accept\u6210\u529F\uFF0C\u51B3\u8BAE\u5F62\u6210\uFF0C\u5C06\u5F62\u6210\u7684\u51B3\u8BAE\u53D1\u9001\u7ED9\u6240\u6709Learners\u3002</p><h3 id="_2-3-\u4F2A\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4F2A\u4EE3\u7801" aria-hidden="true">#</a> 2.3 \u4F2A\u4EE3\u7801</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212811301.png" alt="image-20220618212811301" loading="lazy"></p><ul><li><p>\u83B7\u53D6\u4E00\u4E2AProposal ID n\uFF0C\u4E3A\u4E86\u4FDD\u8BC1Proposal ID\u552F\u4E00\uFF0C\u53EF\u91C7\u7528\u65F6\u95F4\u6233+Server ID\u751F\u6210\uFF1B</p></li><li><p>Proposer\u5411\u6240\u6709Acceptors\u5E7F\u64ADPrepare(n)\u8BF7\u6C42\uFF1B</p></li><li><p>Acceptor\u6BD4\u8F83n\u548CminProposal\uFF0C\u5982\u679Cn&gt;minProposal\uFF0CminProposal=n\uFF0C\u5E76\u4E14\u5C06 acceptedProposal \u548C acceptedValue \u8FD4\u56DE\uFF1B</p></li><li><p>Proposer\u63A5\u6536\u5230\u8FC7\u534A\u6570\u56DE\u590D\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u6709acceptedValue\u8FD4\u56DE\uFF0C\u5C06\u6240\u6709\u56DE\u590D\u4E2DacceptedProposal\u6700\u5927\u7684acceptedValue\u4F5C\u4E3A\u672C\u6B21\u63D0\u6848\u7684value\uFF0C\u5426\u5219\u53EF\u4EE5\u4EFB\u610F\u51B3\u5B9A\u672C\u6B21\u63D0\u6848\u7684value\uFF1B</p></li><li><p>\u5230\u8FD9\u91CC\u53EF\u4EE5\u8FDB\u5165\u7B2C\u4E8C\u9636\u6BB5\uFF0C\u5E7F\u64ADAccept (n,value) \u5230\u6240\u6709\u8282\u70B9\uFF1B</p></li><li><p>Acceptor\u6BD4\u8F83n\u548CminProposal\uFF0C\u5982\u679Cn&gt;=minProposal\uFF0C\u5219acceptedProposal=minProposal=n\uFF0CacceptedValue=value\uFF0C\u672C\u5730\u6301\u4E45\u5316\u540E\uFF0C\u8FD4\u56DE\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DEminProposal\u3002</p></li><li><p>\u63D0\u8BAE\u8005\u63A5\u6536\u5230\u8FC7\u534A\u6570\u8BF7\u6C42\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u6709\u8FD4\u56DE\u503Cresult &gt;n\uFF0C\u8868\u793A\u6709\u66F4\u65B0\u7684\u63D0\u8BAE\uFF0C\u8DF3\u8F6C\u52301\uFF1B\u5426\u5219value\u8FBE\u6210\u4E00\u81F4\u3002</p></li></ul><h3 id="_2-4-\u5B9E\u73B0\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5B9E\u73B0\u4E3E\u4F8B" aria-hidden="true">#</a> 2.4 \u5B9E\u73B0\u4E3E\u4F8B</h3><p>\u4E0B\u9762\u4E3E\u51E0\u4E2A\u4F8B\u5B50\uFF0C\u5B9E\u4F8B1\u5982\u4E0B\u56FE:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212905675.png" alt="image-20220618212905675" loading="lazy"></p><p>\u56FE\u4E2DP\u4EE3\u8868Prepare\u9636\u6BB5\uFF0CA\u4EE3\u8868Accept\u9636\u6BB5\u30023.1\u4EE3\u8868Proposal ID\u4E3A3.1\uFF0C\u5176\u4E2D3\u4E3A\u65F6\u95F4\u6233\uFF0C1\u4E3AServer ID\u3002X\u548CY\u4EE3\u8868\u63D0\u8BAEValue\u3002</p><p>\u5B9E\u4F8B1\u4E2DP 3.1\u8FBE\u6210\u591A\u6570\u6D3E\uFF0C\u5176Value(X)\u88ABAccept\uFF0C\u7136\u540EP 4.5\u5B66\u4E60\u5230Value(X)\uFF0C\u5E76Accept\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212927385.png" alt="image-20220618212927385" loading="lazy"></p><p>\u5B9E\u4F8B2\u4E2DP 3.1\u6CA1\u6709\u88AB\u591A\u6570\u6D3EAccept(\u53EA\u6709S3 Accept)\uFF0C\u4F46\u662F\u88ABP 4.5\u5B66\u4E60\u5230\uFF0CP 4.5\u5C06\u81EA\u5DF1\u7684Value\u7531Y\u66FF\u6362\u4E3AX\uFF0CAccept(X)\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618212943918.png" alt="image-20220618212943918" loading="lazy"></p><p>\u5B9E\u4F8B3\u4E2DP 3.1\u6CA1\u6709\u88AB\u591A\u6570\u6D3EAccept(\u53EA\u6709S1 Accept)\uFF0C\u540C\u65F6\u4E5F\u6CA1\u6709\u88ABP 4.5\u5B66\u4E60\u5230\u3002\u7531\u4E8EP 4.5 Propose\u7684\u6240\u6709\u5E94\u7B54\uFF0C\u5747\u672A\u8FD4\u56DEValue\uFF0C\u5219P 4.5\u53EF\u4EE5Accept\u81EA\u5DF1\u7684Value (Y)\u3002\u540E\u7EEDP 3.1\u7684Accept (X) \u4F1A\u5931\u8D25\uFF0C\u5DF2\u7ECFAccept\u7684S1\uFF0C\u4F1A\u88AB\u8986\u76D6\u3002</p><p>Paxos\u7B97\u6CD5\u53EF\u80FD\u5F62\u6210\u6D3B\u9501\u800C\u6C38\u8FDC\u4E0D\u4F1A\u7ED3\u675F\uFF0C\u5982\u4E0B\u56FE\u5B9E\u4F8B\u6240\u793A:</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618213008146.png" alt="image-20220618213008146" loading="lazy"></p><p>\u56DE\u987E\u4E24\u4E2A\u627F\u8BFA\u4E4B\u4E00\uFF0CAcceptor\u4E0D\u518D\u5E94\u7B54Proposal ID\u5C0F\u4E8E\u7B49\u4E8E\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42\u3002\u610F\u5473\u7740\u9700\u8981\u5E94\u7B54Proposal ID\u5927\u4E8E\u5F53\u524D\u8BF7\u6C42\u7684Prepare\u8BF7\u6C42\u3002</p><p>\u4E24\u4E2AProposers\u4EA4\u66FFPrepare\u6210\u529F\uFF0C\u800CAccept\u5931\u8D25\uFF0C\u5F62\u6210\u6D3B\u9501(Livelock)\u3002</p><h2 id="_3-paxos\u7B97\u6CD5\u63A8\u5BFC" tabindex="-1"><a class="header-anchor" href="#_3-paxos\u7B97\u6CD5\u63A8\u5BFC" aria-hidden="true">#</a> 3. Paxos\u7B97\u6CD5\u63A8\u5BFC</h2><blockquote><p>\u901A\u5E38\u8BF4Paxos\u7B97\u6CD5\u662F\u590D\u6742\u7B97\u6CD5\u96BE\u4EE5\u7406\u89E3\u662F\u6307\u5176\u63A8\u5BFC\u8FC7\u7A0B\u590D\u6742\u3002\u7406\u8BBA\u8BC1\u660E\u4E00\u4E2APaxos\u7684\u5B9E\u73B0\uFF0C\u6BD4\u5B9E\u73B0\u8FD9\u4E2APaxos\u8FD8\u8981\u96BE\u3002\u4E00\u4E2A\u6210\u719F\u7684Paxos\u5B9E\u73B0\u5F88\u96BE\u72EC\u7ACB\u4EA7\u751F\uFF0C\u5F80\u5F80\u9700\u8981\u548C\u4E00\u4E2A\u7CFB\u7EDF\u7ED3\u5408\u5728\u4E00\u8D77\uFF0C\u901A\u8FC7\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u7CFB\u7EDF\u6765\u9A8C\u8BC1\u5176\u53EF\u9760\u6027\u548C\u5B8C\u5907\u6027\u3002</p></blockquote>',42),d={href:"https://blog.csdn.net/yeqiuzs/article/details/76862026",target:"_blank",rel:"noopener noreferrer"},P=l("https://blog.csdn.net/yeqiuzs/article/details/76862026"),h=r('<h2 id="_4-paxos\u7B97\u6CD5\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#_4-paxos\u7B97\u6CD5\u62D3\u5C55" aria-hidden="true">#</a> 4. Paxos\u7B97\u6CD5\u62D3\u5C55</h2><h3 id="_4-1-multi-paxos\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-1-multi-paxos\u7B97\u6CD5" aria-hidden="true">#</a> 4.1 Multi-Paxos\u7B97\u6CD5</h3><p>\u539F\u59CB\u7684Paxos\u7B97\u6CD5(Basic Paxos)<strong>\u53EA\u80FD\u5BF9\u4E00\u4E2A\u503C\u5F62\u6210\u51B3\u8BAE\uFF0C\u51B3\u8BAE\u7684\u5F62\u6210\u81F3\u5C11\u9700\u8981\u4E24\u6B21\u7F51\u7EDC\u6765\u56DE</strong>\uFF0C\u5728\u9AD8\u5E76\u53D1\u60C5\u51B5\u4E0B\u53EF\u80FD\u9700\u8981\u66F4\u591A\u7684\u7F51\u7EDC\u6765\u56DE\uFF0C\u6781\u7AEF\u60C5\u51B5\u4E0B\u751A\u81F3\u53EF\u80FD\u5F62\u6210\u6D3B\u9501\u3002\u5982\u679C\u60F3\u8FDE\u7EED\u786E\u5B9A\u591A\u4E2A\u503C\uFF0CBasic Paxos\u641E\u4E0D\u5B9A\u4E86\u3002<strong>\u56E0\u6B64Basic Paxos\u51E0\u4E4E\u53EA\u662F\u7528\u6765\u505A\u7406\u8BBA\u7814\u7A76\uFF0C\u5E76\u4E0D\u76F4\u63A5\u5E94\u7528\u5728\u5B9E\u9645\u5DE5\u7A0B\u4E2D</strong>\u3002</p><p>\u5B9E\u9645\u5E94\u7528<strong>\u4E2D\u51E0\u4E4E\u90FD\u9700\u8981\u8FDE\u7EED\u786E\u5B9A\u591A\u4E2A\u503C\uFF0C\u800C\u4E14\u5E0C\u671B\u80FD\u6709\u66F4\u9AD8\u7684\u6548\u7387\u3002Multi-Paxos\u6B63\u662F\u4E3A\u89E3\u51B3\u6B64\u95EE\u9898\u800C\u63D0\u51FA</strong>\u3002Multi-Paxos\u57FA\u4E8EBasic Paxos\u505A\u4E86\u4E24\u70B9\u6539\u8FDB:</p><ul><li>\u9488\u5BF9\u6BCF\u4E00\u4E2A\u8981\u786E\u5B9A\u7684\u503C\uFF0C\u8FD0\u884C\u4E00\u6B21Paxos\u7B97\u6CD5\u5B9E\u4F8B(Instance)\uFF0C\u5F62\u6210\u51B3\u8BAE\u3002\u6BCF\u4E00\u4E2APaxos\u5B9E\u4F8B\u4F7F\u7528\u552F\u4E00\u7684Instance ID\u6807\u8BC6\u3002</li><li>\u5728\u6240\u6709Proposers\u4E2D\u9009\u4E3E\u4E00\u4E2ALeader\uFF0C\u7531Leader\u552F\u4E00\u5730\u63D0\u4EA4Proposal\u7ED9Acceptors\u8FDB\u884C\u8868\u51B3\u3002\u8FD9\u6837\u6CA1\u6709Proposer\u7ADE\u4E89\uFF0C\u89E3\u51B3\u4E86\u6D3B\u9501\u95EE\u9898\u3002\u5728\u7CFB\u7EDF\u4E2D\u4EC5\u6709\u4E00\u4E2ALeader\u8FDB\u884CValue\u63D0\u4EA4\u7684\u60C5\u51B5\u4E0B\uFF0CPrepare\u9636\u6BB5\u5C31\u53EF\u4EE5\u8DF3\u8FC7\uFF0C\u4ECE\u800C\u5C06\u4E24\u9636\u6BB5\u53D8\u4E3A\u4E00\u9636\u6BB5\uFF0C\u63D0\u9AD8\u6548\u7387\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220618213321990.png" alt="image-20220618213321990" loading="lazy"></p><p>Multi-Paxos\u9996\u5148\u9700\u8981\u9009\u4E3ELeader\uFF0CLeader\u7684\u786E\u5B9A\u4E5F\u662F\u4E00\u6B21\u51B3\u8BAE\u7684\u5F62\u6210\uFF0C\u6240\u4EE5\u53EF\u6267\u884C\u4E00\u6B21Basic Paxos\u5B9E\u4F8B\u6765\u9009\u4E3E\u51FA\u4E00\u4E2ALeader\u3002\u9009\u51FALeader\u4E4B\u540E\u53EA\u80FD\u7531Leader\u63D0\u4EA4Proposal\uFF0C\u5728Leader\u5B95\u673A\u4E4B\u540E\u670D\u52A1\u4E34\u65F6\u4E0D\u53EF\u7528\uFF0C\u9700\u8981\u91CD\u65B0\u9009\u4E3ELeader\u7EE7\u7EED\u670D\u52A1\u3002\u5728\u7CFB\u7EDF\u4E2D\u4EC5\u6709\u4E00\u4E2ALeader\u8FDB\u884CProposal\u63D0\u4EA4\u7684\u60C5\u51B5\u4E0B\uFF0CPrepare\u9636\u6BB5\u53EF\u4EE5\u8DF3\u8FC7\u3002</p><p>Multi-Paxos\u901A\u8FC7\u6539\u53D8Prepare\u9636\u6BB5\u7684\u4F5C\u7528\u8303\u56F4\u81F3\u540E\u9762Leader\u63D0\u4EA4\u7684\u6240\u6709\u5B9E\u4F8B\uFF0C\u4ECE\u800C\u4F7F\u5F97Leader\u7684\u8FDE\u7EED\u63D0\u4EA4\u53EA\u9700\u8981\u6267\u884C\u4E00\u6B21Prepare\u9636\u6BB5\uFF0C\u540E\u7EED\u53EA\u9700\u8981\u6267\u884CAccept\u9636\u6BB5\uFF0C\u5C06\u4E24\u9636\u6BB5\u53D8\u4E3A\u4E00\u9636\u6BB5\uFF0C\u63D0\u9AD8\u4E86\u6548\u7387\u3002\u4E3A\u4E86\u533A\u5206\u8FDE\u7EED\u63D0\u4EA4\u7684\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u4F7F\u7528\u4E00\u4E2AInstance ID\u6807\u8BC6\uFF0CInstance ID\u7531Leader\u672C\u5730\u9012\u589E\u751F\u6210\u5373\u53EF\u3002</p><p>Multi-Paxos\u5141\u8BB8\u6709\u591A\u4E2A\u81EA\u8BA4\u4E3A\u662FLeader\u7684\u8282\u70B9\u5E76\u53D1\u63D0\u4EA4Proposal\u800C\u4E0D\u5F71\u54CD\u5176\u5B89\u5168\u6027\uFF0C\u8FD9\u6837\u7684\u573A\u666F\u5373\u9000\u5316\u4E3ABasic Paxos\u3002</p><h2 id="_5-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_5-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 5. \u5E94\u7528\u573A\u666F</h2><p>Chubby\u548CBoxwood\u5747\u4F7F\u7528Multi-Paxos\u3002ZooKeeper\u4F7F\u7528\u7684Zab\u4E5F\u662FMulti-Paxos\u7684\u53D8\u5F62</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',12),u={href:"https://pdai.tech/md/algorithm/alg-domain-distribute-x-paxos.html",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"\u5206\u5E03\u5F0F\u7B97\u6CD5 - Paxos\u7B97\u6CD5",-1);function x(m,b){const a=i("ExternalLinkIcon");return p(),c("div",null,[n,e("p",null,[e("a",d,[P,o(a)])]),h,e("p",null,[e("a",u,[g,o(a)])])])}const z=s(t,[["render",x],["__file","alg-domain-distribute-x-paxos.html.vue"]]);export{z as default};
