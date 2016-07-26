
var multiStr = [
  "This is the first line",
  "This is the second line",
  "This is more..."
].join("\n");
var info  = [
" ___    __      _____ _    _   _",
"| _ \\_  \\ \\    / / __| |__| |_| |_ _  _",
"|  _/ || \\ \\/\\/ /| _|| '_ \\  _|  _| || |",
"|_|  \\_, |\\_/\\_/ |___|_.__/\\__|\\__|\\_, |",
"    |__/                          |__/",
" python-webterminal client \t by Hei5enberg"
 ]
console.log(info.join("\n"));
lib.init(function() {
    // hterm.defaultStorage = new lib.Storage.Local();
hterm.defaultStorage = new lib.Storage.Local()
var t = new hterm.Terminal()
t.onTerminalReady = function() {

    // Create a new terminal IO object and give it the foreground.
    // (The default IO object just prints warning messages about unhandled
    // things to the the JS console.)
    var io = t.io.push();
    // t.io.print(info);

    io.println(info[0]);
    io.println(info[1]);
    io.println(info[2]);
    io.println(info[3]);
    io.println(info[4]);
    io.println(info[5]);

    // t.io.println()
    io.onVTKeystroke = function(str) {
        console.log(str);
        io.print(str);
     // For example, Secure Shell forwards the string onto the NaCl plugin.
    };

    io.sendString = function(str) {
        console.log(str);
    // Just like a keystroke, except str was generated by the
    // terminal itself.
    // Most likely you'll do the same this as onVTKeystroke.
    };

    io.onTerminalResize = function(columns, rows) {
    // React to size changes here.
    // Secure Shell pokes at NaCl, which eventually results in
    // some ioctls on the host.
    console.log("size changed");
    };

    // You can call io.push() to foreground a fresh io context, which can
    // be uses to give control of the terminal to something else.  When that
    // thing is complete, should call io.pop() to restore control to the
    // previous io object.
};
// t.decorate(document.quertSelector('#terminal'));
t.decorate(document.getElementById('terminal'));
t.setCursorPosition(0, 0);
t.setCursorVisible(true);
t.prefs_.set('cursor-blink', true)
t.prefs_.set('ctrl-c-copy', true);
t.prefs_.set('ctrl-v-paste', true);
t.prefs_.set('use-default-window-copy', true);
t.installKeyboard()
});
