// post init script
// This is stuff that would be good in the e_launch.js
// But if I use something besides electron I'll need it elsewhere... like here.

// init jquery to avoid the dreaded '$ is not defined' error
window.$ = window.jQuery = require('./jquery-2.1.4.js');
