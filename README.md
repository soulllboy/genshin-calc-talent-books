<!--https://www.markdownguide.org/basic-syntax/#reference-style-links-->

<br />
<div align="center">
  <a href="https://github.com/soulllboy/genshin-calc-talent-books">
    <img src="assets\pics\resist_rare.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">genshin-calc-talent-books</h3>

  <p align="center">
    That is a simple calculator for converting amount of Genshin Impact talent books of different rarity.
    <br />
    <br />
    <a href="https://soulllboy.github.io/genshin-calc-talent-books/">Page</a>
    ·
    <a href="https://github.com/soulllboy/genshin-calc-talent-books">Repo</a>
  </p>
</div>

<br />
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#intro">Intro</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#userscript-variant">Userscript variant</a></li>
  </ul>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## Intro

I play Genghin Impact and use <a href="https://paimon.moe/todo/">Paimon.moe's To-Do List</a> to track my goals in farming materials.

Process of markinkg things <i><b>done</b></i> is pretty straightforward for some materials <i>(e.g., cores from bosses)</i>, but others require to take tiresome steps <i>(e.g., talent books, weapon ascension materials)</i>. You do not need lots of green books as such, you need them to craft golden ones.

My routine:

<ul>
  <li>Stack some resin</li>
  <li>Repeat 5+ times
    <ol>
      <li>Clear dungeon</li>
      <li>Get rewards and write down result into 3 columns</li>
    </ol>
  </li>
  <li>Sum up each column</li>
  <li>Сalculate how many books of higher rarity can be obtained</li>
  <li>Mark them in To-Do List</li>
</ul>

So this <i>"app"</i> simplifies some of the steps above.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<br />
That's the app's initial view.
<br />
<img src="assets\guide\app00.png" />

Let's assume we have three concentrated resins. First dungeon clear rewards us with:<br />
<img src="assets\guide\expl02.png" />

Enter these result in the input fields:<br />
<img src="assets\guide\app01.png" />

Second clear.<br />
<img src="assets\guide\expl01.png" />

Add them inline:<br />
<img src="assets\guide\app02.png" />

Third clear.<br />
<img src="assets\guide\expl02.png" />

After entering results of the last round we are ready to try out the buttons.<br />
<img src="assets\guide\app03.png" />

<b>"Calc"</b> button will show the sum of each input field's digits in the corresponding fields below.<br />
<img src="assets\guide\app04.png" />

<b>"To Gold"</b> button will transfer book counters to rarer ones.<br />
<img src="assets\guide\app05.png" />

<b>"+" / "-"</b> buttons simply add values to or deduct from counter (deducting from adjacent counters or adding values to them).

<b>"Reset"</b> button clears every field.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ABOUT THE SCRIPT -->

## Userscript variant

If you wish you can use alternative version by importing <a href="https://github.com/soulllboy/genshin-calc-talent-books/tree/master/column-view/paimon-moe-todo-iframe.user.js">this script</a> (or your own) to userscript manager (like <a href="https://www.tampermonkey.net/">Tampermonkey</a>). That will provide the ability to place an overlaying iframe on <a href="https://paimon.moe/todo/">Paimon.moe's To-Do List</a> page.
<br/><br/>
<img src="assets\guide\script01.png" />

<a href="https://soulllboy.github.io/genshin-calc-talent-books/column-view/column">This page</a> is not fully renponsive. It was made to look fine with <code>285px x 400px</code> ifame.
You can tweak iframe's dimensions (it will still look alright) but don't go too far.

### <b>Steps</b> to make it work with Tampermonkey:

<ul>
  <li>Import <a href="https://github.com/soulllboy/genshin-calc-talent-books/tree/master/column-view/paimon-moe-todo-iframe.user.js">the script</a> by uploading the file or copying its content. <i>Or create your own script.</i></li>
  <li>Adjust <code>width</code> and <code>height</code> parameters of <code>iframe</code> element (<i>if needed</i>).</li>
  <li>Visit <a href="https://paimon.moe/todo/">To-Do List</a> page.</li>
  <li>Activate script via <b>contex menu</b> -> <b>Tampermonkey</b> -> <b>paimon-moe-todo-iframe</b></li>
  <li>Use it. Kit is the same.</li>
</ul>

Note that this script activates through contex menu, so you need to manually activate it after every visit or refresh.

<p align="right">(<a href="#top">back to top</a>)</p>
