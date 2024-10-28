import{_ as t,c as a,a0 as i,o}from"./chunks/framework._ZXJvR_t.js";const g=JSON.parse('{"title":"Accessing the BIOS","description":"","frontmatter":{},"headers":[],"relativePath":"advanced-guides/accessing-bios.md","filePath":"advanced-guides/accessing-bios.md"}'),s={name:"advanced-guides/accessing-bios.md"};function n(r,e,c,l,d,h){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="accessing-the-bios" tabindex="-1">Accessing the BIOS <a class="header-anchor" href="#accessing-the-bios" aria-label="Permalink to &quot;Accessing the BIOS&quot;">​</a></h1><p>This guide explains how to safely access the BIOS of your Ugreen NASync device and make important initial configurations.</p><h2 id="methods-to-access-bios" tabindex="-1">Methods to Access BIOS <a class="header-anchor" href="#methods-to-access-bios" aria-label="Permalink to &quot;Methods to Access BIOS&quot;">​</a></h2><p>There are two simple methods to access the BIOS/Boot-Menu of your NASync:</p><h3 id="method-1-keyboard-shortcuts" tabindex="-1">Method 1: Keyboard Shortcuts <a class="header-anchor" href="#method-1-keyboard-shortcuts" aria-label="Permalink to &quot;Method 1: Keyboard Shortcuts&quot;">​</a></h3><p>During boot, continuously press either of these key combinations:</p><ul><li><code>Ctrl + F2</code></li><li><code>Ctrl + F12</code></li></ul><h3 id="method-2-ssh-command" tabindex="-1">Method 2: SSH Command <a class="header-anchor" href="#method-2-ssh-command" aria-label="Permalink to &quot;Method 2: SSH Command&quot;">​</a></h3><p>If you have SSH access enabled in UG-OS:</p><ol><li>Login to your device via SSH</li><li>Execute the following command:</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reboot</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --firmware-setup</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Some unofficial guides suggest renaming the EFI folder in the boot partition. This method is <strong>not recommended</strong> as it unnecessarily modifies the boot partition and could potentially cause issues.</p></div><h2 id="important-bios-configuration" tabindex="-1">Important BIOS Configuration <a class="header-anchor" href="#important-bios-configuration" aria-label="Permalink to &quot;Important BIOS Configuration&quot;">​</a></h2><h3 id="disabling-the-watchdog" tabindex="-1">Disabling the Watchdog <a class="header-anchor" href="#disabling-the-watchdog" aria-label="Permalink to &quot;Disabling the Watchdog&quot;">​</a></h3><p>The watchdog is a security feature that will restart your device if UG-OS is not running. This can interfere with BIOS configuration and alternative OS installations.</p><div class="tip custom-block"><p class="custom-block-title">Important</p><p>It&#39;s recommended to disable the watchdog as your first action in BIOS because:</p><ol><li>Being in BIOS counts as &quot;UG-OS not running&quot;</li><li>The watchdog will force a restart after a few minutes if not disabled</li><li>This can interrupt your BIOS configuration process</li></ol></div><p><strong>Steps to disable watchdog:</strong></p><ol><li>Enter BIOS using one of the methods above</li><li>Navigate to the watchdog settings</li><li>Disable the watchdog feature</li><li>Save changes and reset</li><li>Re-enter BIOS to safely continue your configuration</li></ol><p>After disabling the watchdog, you can freely explore and configure other BIOS settings without time constraints.</p><div class="info custom-block"><p class="custom-block-title">Credit</p><p>This guide is based on the work of <a href="https://www.flofaber.com/log/ugreen-nas" target="_blank" rel="noreferrer">Florian Faber</a></p></div>',20)]))}const p=t(s,[["render",n]]);export{g as __pageData,p as default};
