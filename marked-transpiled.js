"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.Tokenizer = exports.TextRenderer = exports.Renderer = exports.Parser = exports.Marked = exports.Lexer = exports.Hooks = void 0;
exports.getDefaults = _getDefaults;
exports.lexer = void 0;
exports.marked = marked;
exports.walkTokens = exports.use = exports.setOptions = exports.parser = exports.parseInline = exports.parse = exports.options = void 0;
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * marked v11.1.1 - a markdown parser
 * Copyright (c) 2011-2023, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

/**
 * Gets the original marked default options.
 */
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
var _defaults = exports.defaults = _getDefaults();
function changeDefaults(newDefaults) {
  exports.defaults = _defaults = newDefaults;
}

/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = new RegExp(escapeTest.source, 'g');
var escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, 'g');
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};
function escape$1(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}
var caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  var source = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      var valSource = typeof val === 'string' ? val : val.source;
      valSource = valSource.replace(caret, '$1');
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}
var noopTest = {
  exec: function exec() {
    return null;
  }
};
function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false;
      var curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  var i = 0;
  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push('');
    }
  }
  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}
/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param str
 * @param c
 * @param invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  var l = str.length;
  if (l === 0) {
    return '';
  }
  // Length of suffix matching the invert condition.
  var suffLen = 0;
  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function outputLink(cap, link, raw, lexer) {
  var href = link.href;
  var title = link.title ? escape$1(link.title) : null;
  var text = cap[1].replace(/\\([\[\]])/g, '$1');
  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    var token = {
      type: 'link',
      raw: raw,
      href: href,
      title: title,
      text: text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw: raw,
    href: href,
    title: title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  var indentToCode = matchIndentToCode[1];
  return text.split('\n').map(function (node) {
    var matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    var _matchIndentInNode = _slicedToArray(matchIndentInNode, 1),
      indentInNode = _matchIndentInNode[0];
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join('\n');
}
/**
 * Tokenizer
 */
var _Tokenizer = exports.Tokenizer = /*#__PURE__*/function () {
  // set by the lexer
  function _Tokenizer(options) {
    _classCallCheck(this, _Tokenizer);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "rules", void 0);
    // set by the lexer
    _defineProperty(this, "lexer", void 0);
    this.options = options || _defaults;
  }
  _createClass(_Tokenizer, [{
    key: "space",
    value: function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap && cap[0].length > 0) {
        return {
          type: 'space',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "code",
    value: function code(src) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim(text, '\n') : text
        };
      }
    }
  }, {
    key: "fences",
    value: function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, '$1') : cap[2],
          text: text
        };
      }
    }
  }, {
    key: "heading",
    value: function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim();
        // remove trailing #s
        if (/#$/.test(text)) {
          var trimmed = rtrim(text, '#');
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "hr",
    value: function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "blockquote",
    value: function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        var text = rtrim(cap[0].replace(/^ *>[ \t]?/gm, ''), '\n');
        var top = this.lexer.state.top;
        this.lexer.state.top = true;
        var tokens = this.lexer.blockTokens(text);
        this.lexer.state.top = top;
        return {
          type: 'blockquote',
          raw: cap[0],
          tokens: tokens,
          text: text
        };
      }
    }
  }, {
    key: "list",
    value: function list(src) {
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var bull = cap[1].trim();
        var isordered = bull.length > 1;
        var _list = {
          type: 'list',
          raw: '',
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        };
        bull = isordered ? "\\d{1,9}\\".concat(bull.slice(-1)) : "\\".concat(bull);
        if (this.options.pedantic) {
          bull = isordered ? bull : '[*+-]';
        }
        // Get next list item
        var itemRegex = new RegExp("^( {0,3}".concat(bull, ")((?:[\t ][^\\n]*)?(?:\\n|$))"));
        var raw = '';
        var itemContents = '';
        var endsWithBlankLine = false;
        // Check if current bullet point can start a new List Item
        while (src) {
          var endEarly = false;
          if (!(cap = itemRegex.exec(src))) {
            break;
          }
          if (this.rules.block.hr.test(src)) {
            // End list if bullet was actually HR (possibly move into itemRegex?)
            break;
          }
          raw = cap[0];
          src = src.substring(raw.length);
          var line = cap[2].split('\n', 1)[0].replace(/^\t+/, function (t) {
            return ' '.repeat(3 * t.length);
          });
          var nextLine = src.split('\n', 1)[0];
          var indent = 0;
          if (this.options.pedantic) {
            indent = 2;
            itemContents = line.trimStart();
          } else {
            indent = cap[2].search(/[^ ]/); // Find first non-space char
            indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
            itemContents = line.slice(indent);
            indent += cap[1].length;
          }
          var blankLine = false;
          if (!line && /^ *$/.test(nextLine)) {
            // Items begin with at most one blank line
            raw += nextLine + '\n';
            src = src.substring(nextLine.length + 1);
            endEarly = true;
          }
          if (!endEarly) {
            var nextBulletRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))"));
            var hrRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"));
            var fencesBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}(?:```|~~~)"));
            var headingBeginRegex = new RegExp("^ {0,".concat(Math.min(3, indent - 1), "}#"));
            // Check if following lines should be included in List Item
            while (src) {
              var rawLine = src.split('\n', 1)[0];
              nextLine = rawLine;
              // Re-align to follow commonmark nesting rules
              if (this.options.pedantic) {
                nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
              }
              // End list item if found code fences
              if (fencesBeginRegex.test(nextLine)) {
                break;
              }
              // End list item if found start of new heading
              if (headingBeginRegex.test(nextLine)) {
                break;
              }
              // End list item if found start of new bullet
              if (nextBulletRegex.test(nextLine)) {
                break;
              }
              // Horizontal rule found
              if (hrRegex.test(src)) {
                break;
              }
              if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
                // Dedent if possible
                itemContents += '\n' + nextLine.slice(indent);
              } else {
                // not enough indentation
                if (blankLine) {
                  break;
                }
                // paragraph continuation unless last line was a different block level element
                if (line.search(/[^ ]/) >= 4) {
                  // indented code block
                  break;
                }
                if (fencesBeginRegex.test(line)) {
                  break;
                }
                if (headingBeginRegex.test(line)) {
                  break;
                }
                if (hrRegex.test(line)) {
                  break;
                }
                itemContents += '\n' + nextLine;
              }
              if (!blankLine && !nextLine.trim()) {
                // Check if current line is blank
                blankLine = true;
              }
              raw += rawLine + '\n';
              src = src.substring(rawLine.length + 1);
              line = nextLine.slice(indent);
            }
          }
          if (!_list.loose) {
            // If the previous item ended with a blank line, the list is loose
            if (endsWithBlankLine) {
              _list.loose = true;
            } else if (/\n *\n *$/.test(raw)) {
              endsWithBlankLine = true;
            }
          }
          var istask = null;
          var ischecked = void 0;
          // Check for task list items
          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.exec(itemContents);
            if (istask) {
              ischecked = istask[0] !== '[ ] ';
              itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
            }
          }
          _list.items.push({
            type: 'list_item',
            raw: raw,
            task: !!istask,
            checked: ischecked,
            loose: false,
            text: itemContents,
            tokens: []
          });
          _list.raw += raw;
        }
        // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
        _list.items[_list.items.length - 1].raw = raw.trimEnd();
        _list.items[_list.items.length - 1].text = itemContents.trimEnd();
        _list.raw = _list.raw.trimEnd();
        // Item child tokens handled here at end because we needed to have the final item to trim it first
        for (var i = 0; i < _list.items.length; i++) {
          this.lexer.state.top = false;
          _list.items[i].tokens = this.lexer.blockTokens(_list.items[i].text, []);
          if (!_list.loose) {
            // Check if list should be loose
            var spacers = _list.items[i].tokens.filter(function (t) {
              return t.type === 'space';
            });
            var hasMultipleLineBreaks = spacers.length > 0 && spacers.some(function (t) {
              return /\n.*\n/.test(t.raw);
            });
            _list.loose = hasMultipleLineBreaks;
          }
        }
        // Set all items to loose if list is loose
        if (_list.loose) {
          for (var _i = 0; _i < _list.items.length; _i++) {
            _list.items[_i].loose = true;
          }
        }
        return _list;
      }
    }
  }, {
    key: "html",
    value: function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        var token = {
          type: 'html',
          block: true,
          raw: cap[0],
          pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
          text: cap[0]
        };
        return token;
      }
    }
  }, {
    key: "def",
    value: function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        var _tag2 = cap[1].toLowerCase().replace(/\s+/g, ' ');
        var href = cap[2] ? cap[2].replace(/^<(.*)>$/, '$1').replace(this.rules.inline.anyPunctuation, '$1') : '';
        var title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, '$1') : cap[3];
        return {
          type: 'def',
          tag: _tag2,
          raw: cap[0],
          href: href,
          title: title
        };
      }
    }
  }, {
    key: "table",
    value: function table(src) {
      var _this = this;
      var cap = this.rules.block.table.exec(src);
      if (!cap) {
        return;
      }
      if (!/[:|]/.test(cap[2])) {
        // delimiter row must have a pipe (|) or colon (:) otherwise it is a setext heading
        return;
      }
      var headers = splitCells(cap[1]);
      var aligns = cap[2].replace(/^\||\| *$/g, '').split('|');
      var rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : [];
      var item = {
        type: 'table',
        raw: cap[0],
        header: [],
        align: [],
        rows: []
      };
      if (headers.length !== aligns.length) {
        // header and align columns must be equal, rows can be different.
        return;
      }
      var _iterator = _createForOfIteratorHelper(aligns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var align = _step.value;
          if (/^ *-+: *$/.test(align)) {
            item.align.push('right');
          } else if (/^ *:-+: *$/.test(align)) {
            item.align.push('center');
          } else if (/^ *:-+ *$/.test(align)) {
            item.align.push('left');
          } else {
            item.align.push(null);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(headers),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var header = _step2.value;
          item.header.push({
            text: header,
            tokens: this.lexer.inline(header)
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      var _iterator3 = _createForOfIteratorHelper(rows),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var row = _step3.value;
          item.rows.push(splitCells(row, item.header.length).map(function (cell) {
            return {
              text: cell,
              tokens: _this.lexer.inline(cell)
            };
          }));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return item;
    }
  }, {
    key: "lheading",
    value: function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1],
          tokens: this.lexer.inline(cap[1])
        };
      }
    }
  }, {
    key: "paragraph",
    value: function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        var text = cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1];
        return {
          type: 'paragraph',
          raw: cap[0],
          text: text,
          tokens: this.lexer.inline(text)
        };
      }
    }
  }, {
    key: "text",
    value: function text(src) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0],
          tokens: this.lexer.inline(cap[0])
        };
      }
    }
  }, {
    key: "escape",
    value: function escape(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: escape$1(cap[1])
        };
      }
    }
  }, {
    key: "tag",
    value: function tag(src) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
          this.lexer.state.inLink = true;
        } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
          this.lexer.state.inLink = false;
        }
        if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = true;
        } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.lexer.state.inRawBlock = false;
        }
        return {
          type: 'html',
          raw: cap[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          block: false,
          text: cap[0]
        };
      }
    }
  }, {
    key: "link",
    value: function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          }
          // ending angle bracket cannot be escaped
          var rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket(cap[2], '()');
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }
        var href = cap[2];
        var title = '';
        if (this.options.pedantic) {
          // split pedantic href and title
          var _link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (_link) {
            href = _link[1];
            title = _link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline.anyPunctuation, '$1') : href,
          title: title ? title.replace(this.rules.inline.anyPunctuation, '$1') : title
        }, cap[0], this.lexer);
      }
    }
  }, {
    key: "reflink",
    value: function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var linkString = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        var _link2 = links[linkString.toLowerCase()];
        if (!_link2) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }
        return outputLink(cap, _link2, cap[0], this.lexer);
      }
    }
  }, {
    key: "emStrong",
    value: function emStrong(src, maskedSrc) {
      var prevChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var match = this.rules.inline.emStrongLDelim.exec(src);
      if (!match) return;
      // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
      if (match[3] && prevChar.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDF50-\uDF59\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEC0-\uDED3\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDCD0-\uDCEB\uDCF0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])/)) return;
      var nextChar = match[1] || match[2] || '';
      if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
        // unicode Regex counts emoji as 1 char; spread into array for proper count (used multiple times below)
        var lLength = _toConsumableArray(match[0]).length - 1;
        var rDelim,
          rLength,
          delimTotal = lLength,
          midDelimTotal = 0;
        var endReg = match[0][0] === '*' ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
        endReg.lastIndex = 0;
        // Clip maskedSrc to same section of string as src (move to lexer?)
        maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
        while ((match = endReg.exec(maskedSrc)) != null) {
          rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
          if (!rDelim) continue; // skip single * in __abc*abc__
          rLength = _toConsumableArray(rDelim).length;
          if (match[3] || match[4]) {
            // found another Left Delim
            delimTotal += rLength;
            continue;
          } else if (match[5] || match[6]) {
            // either Left or Right Delim
            if (lLength % 3 && !((lLength + rLength) % 3)) {
              midDelimTotal += rLength;
              continue; // CommonMark Emphasis Rules 9-10
            }
          }
          delimTotal -= rLength;
          if (delimTotal > 0) continue; // Haven't found enough closing delimiters
          // Remove extra characters. *a*** -> *a*
          rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
          // char length can be >1 for unicode characters;
          var lastCharLength = _toConsumableArray(match[0])[0].length;
          var raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
          // Create `em` if smallest delimiter has odd char count. *a***
          if (Math.min(lLength, rLength) % 2) {
            var _text = raw.slice(1, -1);
            return {
              type: 'em',
              raw: raw,
              text: _text,
              tokens: this.lexer.inlineTokens(_text)
            };
          }
          // Create 'strong' if smallest delimiter has even char count. **a***
          var text = raw.slice(2, -2);
          return {
            type: 'strong',
            raw: raw,
            text: text,
            tokens: this.lexer.inlineTokens(text)
          };
        }
      }
    }
  }, {
    key: "codespan",
    value: function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = escape$1(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    }
  }, {
    key: "br",
    value: function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    }
  }, {
    key: "del",
    value: function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2],
          tokens: this.lexer.inlineTokens(cap[2])
        };
      }
    }
  }, {
    key: "autolink",
    value: function autolink(src) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === '@') {
          text = escape$1(cap[1]);
          href = 'mailto:' + text;
        } else {
          text = escape$1(cap[1]);
          href = text;
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "url",
    value: function url(src) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === '@') {
          text = escape$1(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;
          do {
            var _this$rules$inline$_b, _this$rules$inline$_b2;
            prevCapZero = cap[0];
            cap[0] = (_this$rules$inline$_b = (_this$rules$inline$_b2 = this.rules.inline._backpedal.exec(cap[0])) === null || _this$rules$inline$_b2 === void 0 ? void 0 : _this$rules$inline$_b2[0]) !== null && _this$rules$inline$_b !== void 0 ? _this$rules$inline$_b : '';
          } while (prevCapZero !== cap[0]);
          text = escape$1(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + cap[0];
          } else {
            href = cap[0];
          }
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    }
  }, {
    key: "inlineText",
    value: function inlineText(src) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var text;
        if (this.lexer.state.inRawBlock) {
          text = cap[0];
        } else {
          text = escape$1(cap[0]);
        }
        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    }
  }]);
  return _Tokenizer;
}();
/**
 * Block-Level Grammar
 */
var newline = /^(?: *(?:\n|$))+/;
var blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
var fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var bullet = /(?:[*+-]|\d{1,9}[.)])/;
var lheading = edit(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet) // lists can interrupt
.getRegex();
var _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var blockText = /^[^\n]+/;
var _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
var def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace('label', _blockLabel).replace('title', /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
var _tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
var _comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
var html = edit('^ {0,3}(?:' // optional indentation
+ '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
+ '|comment[^\\n]*(\\n+|$)' // (2)
+ '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
+ '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
+ '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
+ '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
+ '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
+ '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
+ ')', 'i').replace('comment', _comment).replace('tag', _tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var paragraph = edit(_paragraph).replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('|table', '').replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // pars can be interrupted by type (6) html blocks
.getRegex();
var blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace('paragraph', paragraph).getRegex();
/**
 * Normal Block Grammar
 */
var blockNormal = {
  blockquote: blockquote,
  code: blockCode,
  def: def,
  fences: fences,
  heading: heading,
  hr: hr,
  html: html,
  lheading: lheading,
  list: list,
  newline: newline,
  paragraph: paragraph,
  table: noopTest,
  text: blockText
};
/**
 * GFM Block Grammar
 */
var gfmTable = edit('^ *([^\\n ].*)\\n' // Header
+ ' {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)' // Align
+ '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)') // Cells
.replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // tables can be interrupted by type (6) html blocks
.getRegex();
var blockGfm = _objectSpread(_objectSpread({}, blockNormal), {}, {
  table: gfmTable,
  paragraph: edit(_paragraph).replace('hr', hr).replace('heading', ' {0,3}#{1,6}(?:\\s|$)').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', gfmTable) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)').replace('tag', _tag) // pars can be interrupted by type (6) html blocks
  .getRegex()
});
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */
var blockPedantic = _objectSpread(_objectSpread({}, blockNormal), {}, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', _comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace('hr', hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', lheading).replace('|table', '').replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').replace('|tag', '').getRegex()
});
/**
 * Inline-Level Grammar
 */
var escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var br = /^( {2,}|\\)\n(?!\s*$)/;
var inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
// list of unicode punctuation marks, plus any missing characters from CommonMark spec
var _punctuation = '\\p{P}$+<=>`^|~';
var punctuation = edit(/^((?![*_])[\spunctuation])/, 'u').replace(/punctuation/g, _punctuation).getRegex();
// sequences em should skip over [title](link), `code`, <html>
var blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
var emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, 'u').replace(/punct/g, _punctuation).getRegex();
var emStrongRDelimAst = edit('^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)' // Skip orphan inside strong
+ '|[^*]+(?=[^*])' // Consume to delim
+ '|(?!\\*)[punct](\\*+)(?=[\\s]|$)' // (1) #*** can only be a Right Delimiter
+ '|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)' // (2) a***#, a*** can only be a Right Delimiter
+ '|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])' // (3) #***a, ***a can only be Left Delimiter
+ '|[\\s](\\*+)(?!\\*)(?=[punct])' // (4) ***# can only be Left Delimiter
+ '|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])' // (5) #***# can be either Left or Right Delimiter
+ '|[^punct\\s](\\*+)(?=[^punct\\s])', 'gu') // (6) a***a can be either Left or Right Delimiter
.replace(/punct/g, _punctuation).getRegex();
// (6) Not allowed for _
var emStrongRDelimUnd = edit('^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)' // Skip orphan inside strong
+ '|[^_]+(?=[^_])' // Consume to delim
+ '|(?!_)[punct](_+)(?=[\\s]|$)' // (1) #___ can only be a Right Delimiter
+ '|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)' // (2) a___#, a___ can only be a Right Delimiter
+ '|(?!_)[punct\\s](_+)(?=[^punct\\s])' // (3) #___a, ___a can only be Left Delimiter
+ '|[\\s](_+)(?!_)(?=[punct])' // (4) ___# can only be Left Delimiter
+ '|(?!_)[punct](_+)(?!_)(?=[punct])', 'gu') // (5) #___# can be either Left or Right Delimiter
.replace(/punct/g, _punctuation).getRegex();
var anyPunctuation = edit(/\\([punct])/, 'gu').replace(/punct/g, _punctuation).getRegex();
var autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace('email', /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var _inlineComment = edit(_comment).replace('(?:-->|$)', '-->').getRegex();
var tag = edit('^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
+ '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
+ '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
+ '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
+ '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>') // CDATA section
.replace('comment', _inlineComment).replace('attribute', /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
var link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace('label', _inlineLabel).replace('href', /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace('title', /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace('label', _inlineLabel).replace('ref', _blockLabel).getRegex();
var nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace('ref', _blockLabel).getRegex();
var reflinkSearch = edit('reflink|nolink(?!\\()', 'g').replace('reflink', reflink).replace('nolink', nolink).getRegex();
/**
 * Normal Inline Grammar
 */
var inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation: anyPunctuation,
  autolink: autolink,
  blockSkip: blockSkip,
  br: br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim: emStrongLDelim,
  emStrongRDelimAst: emStrongRDelimAst,
  emStrongRDelimUnd: emStrongRDelimUnd,
  escape: escape,
  link: link,
  nolink: nolink,
  punctuation: punctuation,
  reflink: reflink,
  reflinkSearch: reflinkSearch,
  tag: tag,
  text: inlineText,
  url: noopTest
};
/**
 * Pedantic Inline Grammar
 */
var inlinePedantic = _objectSpread(_objectSpread({}, inlineNormal), {}, {
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', _inlineLabel).getRegex()
});
/**
 * GFM Inline Grammar
 */
var inlineGfm = _objectSpread(_objectSpread({}, inlineNormal), {}, {
  escape: edit(escape).replace('])', '~|])').getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, 'i').replace('email', /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
/**
 * GFM + Line Breaks Inline Grammar
 */
var inlineBreaks = _objectSpread(_objectSpread({}, inlineGfm), {}, {
  br: edit(br).replace('{2,}', '*').getRegex(),
  text: edit(inlineGfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
/**
 * exports
 */
var block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
var inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};

/**
 * Block Lexer
 */
var _Lexer = exports.Lexer = /*#__PURE__*/function () {
  function _Lexer(options) {
    _classCallCheck(this, _Lexer);
    _defineProperty(this, "tokens", void 0);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "state", void 0);
    _defineProperty(this, "tokenizer", void 0);
    _defineProperty(this, "inlineQueue", void 0);
    // TokenList cannot be created in one go
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    var rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  _createClass(_Lexer, [{
    key: "lex",
    value:
    /**
     * Preprocessing
     */
    function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n');
      this.blockTokens(src, this.tokens);
      for (var i = 0; i < this.inlineQueue.length; i++) {
        var next = this.inlineQueue[i];
        this.inlineTokens(next.src, next.tokens);
      }
      this.inlineQueue = [];
      return this.tokens;
    }
  }, {
    key: "blockTokens",
    value: function blockTokens(src) {
      var _this2 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (this.options.pedantic) {
        src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
      } else {
        src = src.replace(/^( *)(\t+)/gm, function (_, leading, tabs) {
          return leading + '    '.repeat(tabs.length);
        });
      }
      var token;
      var lastToken;
      var cutSrc;
      var lastParagraphClipped;
      var _loop = function _loop() {
          if (_this2.options.extensions && _this2.options.extensions.block && _this2.options.extensions.block.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this2
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          // newline
          if (token = _this2.tokenizer.space(src)) {
            src = src.substring(token.raw.length);
            if (token.raw.length === 1 && tokens.length > 0) {
              // if there's a single \n as a spacer, it's terminating the last line,
              // so move it there so that we don't get unnecessary paragraph tags
              tokens[tokens.length - 1].raw += '\n';
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // code
          if (token = _this2.tokenizer.code(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            // An indented code block cannot interrupt a paragraph.
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // fences
          if (token = _this2.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // heading
          if (token = _this2.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // hr
          if (token = _this2.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // blockquote
          if (token = _this2.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // list
          if (token = _this2.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // html
          if (token = _this2.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // def
          if (token = _this2.tokenizer.def(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.raw;
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else if (!_this2.tokens.links[token.tag]) {
              _this2.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }
            return 0; // continue
          }
          // table (gfm)
          if (token = _this2.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // lheading
          if (token = _this2.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // top-level paragraph
          // prevent paragraph consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this2.options.extensions && _this2.options.extensions.startBlock) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this2.options.extensions.startBlock.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this2
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (_this2.state.top && (token = _this2.tokenizer.paragraph(cutSrc))) {
            lastToken = tokens[tokens.length - 1];
            if (lastParagraphClipped && lastToken.type === 'paragraph') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue.pop();
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            lastParagraphClipped = cutSrc.length !== src.length;
            src = src.substring(token.raw.length);
            return 0; // continue
          }
          // text
          if (token = _this2.tokenizer.text(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
              _this2.inlineQueue.pop();
              _this2.inlineQueue[_this2.inlineQueue.length - 1].src = lastToken.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this2.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret;
      while (src) {
        _ret = _loop();
        if (_ret === 0) continue;
        if (_ret === 1) break;
      }
      this.state.top = true;
      return tokens;
    }
  }, {
    key: "inline",
    value: function inline(src) {
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      this.inlineQueue.push({
        src: src,
        tokens: tokens
      });
      return tokens;
    }
    /**
     * Lexing/Compiling
     */
  }, {
    key: "inlineTokens",
    value: function inlineTokens(src) {
      var _this3 = this;
      var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var token, lastToken, cutSrc;
      // String with links masked to avoid interference with em and strong
      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar;
      // Mask out reflinks
      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      }
      // Mask out other blocks
      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + 'a'.repeat(match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      // Mask out escaped characters
      while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
      }
      var _loop2 = function _loop2() {
          if (!keepPrevChar) {
            prevChar = '';
          }
          keepPrevChar = false;
          // extensions
          if (_this3.options.extensions && _this3.options.extensions.inline && _this3.options.extensions.inline.some(function (extTokenizer) {
            if (token = extTokenizer.call({
              lexer: _this3
            }, src, tokens)) {
              src = src.substring(token.raw.length);
              tokens.push(token);
              return true;
            }
            return false;
          })) {
            return 0; // continue
          }
          // escape
          if (token = _this3.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // tag
          if (token = _this3.tokenizer.tag(src)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // link
          if (token = _this3.tokenizer.link(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // reflink, nolink
          if (token = _this3.tokenizer.reflink(src, _this3.tokens.links)) {
            src = src.substring(token.raw.length);
            lastToken = tokens[tokens.length - 1];
            if (lastToken && token.type === 'text' && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          // em & strong
          if (token = _this3.tokenizer.emStrong(src, maskedSrc, prevChar)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // code
          if (token = _this3.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // br
          if (token = _this3.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // del (gfm)
          if (token = _this3.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // autolink
          if (token = _this3.tokenizer.autolink(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // url (gfm)
          if (!_this3.state.inLink && (token = _this3.tokenizer.url(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return 0; // continue
          }
          // text
          // prevent inlineText consuming extensions by clipping 'src' to extension start
          cutSrc = src;
          if (_this3.options.extensions && _this3.options.extensions.startInline) {
            var startIndex = Infinity;
            var tempSrc = src.slice(1);
            var tempStart;
            _this3.options.extensions.startInline.forEach(function (getStartIndex) {
              tempStart = getStartIndex.call({
                lexer: _this3
              }, tempSrc);
              if (typeof tempStart === 'number' && tempStart >= 0) {
                startIndex = Math.min(startIndex, tempStart);
              }
            });
            if (startIndex < Infinity && startIndex >= 0) {
              cutSrc = src.substring(0, startIndex + 1);
            }
          }
          if (token = _this3.tokenizer.inlineText(cutSrc)) {
            src = src.substring(token.raw.length);
            if (token.raw.slice(-1) !== '_') {
              // Track prevChar before string of ____ started
              prevChar = token.raw.slice(-1);
            }
            keepPrevChar = true;
            lastToken = tokens[tokens.length - 1];
            if (lastToken && lastToken.type === 'text') {
              lastToken.raw += token.raw;
              lastToken.text += token.text;
            } else {
              tokens.push(token);
            }
            return 0; // continue
          }
          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
            if (_this3.options.silent) {
              console.error(errMsg);
              return 1; // break
            } else {
              throw new Error(errMsg);
            }
          }
        },
        _ret2;
      while (src) {
        _ret2 = _loop2();
        if (_ret2 === 0) continue;
        if (_ret2 === 1) break;
      }
      return tokens;
    }
  }], [{
    key: "rules",
    get: function get() {
      return {
        block: block,
        inline: inline
      };
    }
    /**
     * Static Lex Method
     */
  }, {
    key: "lex",
    value: function lex(src, options) {
      var lexer = new _Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */
  }, {
    key: "lexInline",
    value: function lexInline(src, options) {
      var lexer = new _Lexer(options);
      return lexer.inlineTokens(src);
    }
  }]);
  return _Lexer;
}();
/**
 * Renderer
 */
var _Renderer = exports.Renderer = /*#__PURE__*/function () {
  function _Renderer(options) {
    _classCallCheck(this, _Renderer);
    _defineProperty(this, "options", void 0);
    this.options = options || _defaults;
  }
  _createClass(_Renderer, [{
    key: "code",
    value: function code(_code, infostring, escaped) {
      var _match;
      var lang = (_match = (infostring || '').match(/^\S*/)) === null || _match === void 0 ? void 0 : _match[0];
      _code = _code.replace(/\n$/, '') + '\n';
      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }
      return '<pre><code class="language-' + escape$1(lang) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    }
  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return "<blockquote>\n".concat(quote, "</blockquote>\n");
    }
  }, {
    key: "html",
    value: function html(_html, block) {
      return _html;
    }
  }, {
    key: "heading",
    value: function heading(text, level, raw) {
      // ignore IDs
      return "<h".concat(level, ">").concat(text, "</h").concat(level, ">\n");
    }
  }, {
    key: "hr",
    value: function hr() {
      return '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul';
      var startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
  }, {
    key: "listitem",
    value: function listitem(text, task, checked) {
      return "<li>".concat(text, "</li>\n");
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox">';
    }
  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return "<p>".concat(text, "</p>\n");
    }
  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = "<tbody>".concat(body, "</tbody>");
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return "<tr>\n".concat(content, "</tr>\n");
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? "<".concat(type, " align=\"").concat(flags.align, "\">") : "<".concat(type, ">");
      return tag + content + "</".concat(type, ">\n");
    }
    /**
     * span level renderer
     */
  }, {
    key: "strong",
    value: function strong(text) {
      return "<strong>".concat(text, "</strong>");
    }
  }, {
    key: "em",
    value: function em(text) {
      return "<em>".concat(text, "</em>");
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return "<code>".concat(text, "</code>");
    }
  }, {
    key: "br",
    value: function br() {
      return '<br>';
    }
  }, {
    key: "del",
    value: function del(text) {
      return "<del>".concat(text, "</del>");
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = '<a href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      var cleanHref = cleanUrl(href);
      if (cleanHref === null) {
        return text;
      }
      href = cleanHref;
      var out = "<img src=\"".concat(href, "\" alt=\"").concat(text, "\"");
      if (title) {
        out += " title=\"".concat(title, "\"");
      }
      out += '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text2) {
      return _text2;
    }
  }]);
  return _Renderer;
}();
/**
 * TextRenderer
 * returns only the textual part of the token
 */
var _TextRenderer = exports.TextRenderer = /*#__PURE__*/function () {
  function _TextRenderer() {
    _classCallCheck(this, _TextRenderer);
  }
  _createClass(_TextRenderer, [{
    key: "strong",
    value:
    // no need for block level renderers
    function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "html",
    value: function html(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text3) {
      return _text3;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);
  return _TextRenderer;
}();
/**
 * Parsing & Compiling
 */
var _Parser = exports.Parser = /*#__PURE__*/function () {
  function _Parser(options) {
    _classCallCheck(this, _Parser);
    _defineProperty(this, "options", void 0);
    _defineProperty(this, "renderer", void 0);
    _defineProperty(this, "textRenderer", void 0);
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  _createClass(_Parser, [{
    key: "parse",
    value:
    /**
     * Parse Loop
     */
    function parse(tokens) {
      var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var out = '';
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          var genericToken = token;
          var ret = this.options.extensions.renderers[genericToken.type].call({
            parser: this
          }, genericToken);
          if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(genericToken.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'space':
            {
              continue;
            }
          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }
          case 'heading':
            {
              var headingToken = token;
              out += this.renderer.heading(this.parseInline(headingToken.tokens), headingToken.depth, unescape(this.parseInline(headingToken.tokens, this.textRenderer)));
              continue;
            }
          case 'code':
            {
              var codeToken = token;
              out += this.renderer.code(codeToken.text, codeToken.lang, !!codeToken.escaped);
              continue;
            }
          case 'table':
            {
              var tableToken = token;
              var header = '';
              // header
              var cell = '';
              for (var j = 0; j < tableToken.header.length; j++) {
                cell += this.renderer.tablecell(this.parseInline(tableToken.header[j].tokens), {
                  header: true,
                  align: tableToken.align[j]
                });
              }
              header += this.renderer.tablerow(cell);
              var body = '';
              for (var _j = 0; _j < tableToken.rows.length; _j++) {
                var row = tableToken.rows[_j];
                cell = '';
                for (var k = 0; k < row.length; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k].tokens), {
                    header: false,
                    align: tableToken.align[k]
                  });
                }
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
          case 'blockquote':
            {
              var blockquoteToken = token;
              var _body = this.parse(blockquoteToken.tokens);
              out += this.renderer.blockquote(_body);
              continue;
            }
          case 'list':
            {
              var listToken = token;
              var ordered = listToken.ordered;
              var start = listToken.start;
              var loose = listToken.loose;
              var _body2 = '';
              for (var _j2 = 0; _j2 < listToken.items.length; _j2++) {
                var item = listToken.items[_j2];
                var checked = item.checked;
                var task = item.task;
                var itemBody = '';
                if (item.task) {
                  var checkbox = this.renderer.checkbox(!!checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox + ' '
                      });
                    }
                  } else {
                    itemBody += checkbox + ' ';
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                _body2 += this.renderer.listitem(itemBody, task, !!checked);
              }
              out += this.renderer.list(_body2, ordered, start);
              continue;
            }
          case 'html':
            {
              var htmlToken = token;
              out += this.renderer.html(htmlToken.text, htmlToken.block);
              continue;
            }
          case 'paragraph':
            {
              var paragraphToken = token;
              out += this.renderer.paragraph(this.parseInline(paragraphToken.tokens));
              continue;
            }
          case 'text':
            {
              var textToken = token;
              var _body3 = textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text;
              while (i + 1 < tokens.length && tokens[i + 1].type === 'text') {
                textToken = tokens[++i];
                _body3 += '\n' + (textToken.tokens ? this.parseInline(textToken.tokens) : textToken.text);
              }
              out += top ? this.renderer.paragraph(_body3) : _body3;
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return '';
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '';
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        // Run any renderer extensions
        if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
          var ret = this.options.extensions.renderers[token.type].call({
            parser: this
          }, token);
          if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
            out += ret || '';
            continue;
          }
        }
        switch (token.type) {
          case 'escape':
            {
              var escapeToken = token;
              out += renderer.text(escapeToken.text);
              break;
            }
          case 'html':
            {
              var tagToken = token;
              out += renderer.html(tagToken.text);
              break;
            }
          case 'link':
            {
              var linkToken = token;
              out += renderer.link(linkToken.href, linkToken.title, this.parseInline(linkToken.tokens, renderer));
              break;
            }
          case 'image':
            {
              var imageToken = token;
              out += renderer.image(imageToken.href, imageToken.title, imageToken.text);
              break;
            }
          case 'strong':
            {
              var strongToken = token;
              out += renderer.strong(this.parseInline(strongToken.tokens, renderer));
              break;
            }
          case 'em':
            {
              var emToken = token;
              out += renderer.em(this.parseInline(emToken.tokens, renderer));
              break;
            }
          case 'codespan':
            {
              var codespanToken = token;
              out += renderer.codespan(codespanToken.text);
              break;
            }
          case 'br':
            {
              out += renderer.br();
              break;
            }
          case 'del':
            {
              var delToken = token;
              out += renderer.del(this.parseInline(delToken.tokens, renderer));
              break;
            }
          case 'text':
            {
              var textToken = token;
              out += renderer.text(textToken.text);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return '';
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new _Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */
  }, {
    key: "parseInline",
    value: function parseInline(tokens, options) {
      var parser = new _Parser(options);
      return parser.parseInline(tokens);
    }
  }]);
  return _Parser;
}();
var _Hooks = exports.Hooks = /*#__PURE__*/function () {
  function _Hooks(options) {
    _classCallCheck(this, _Hooks);
    _defineProperty(this, "options", void 0);
    this.options = options || _defaults;
  }
  _createClass(_Hooks, [{
    key: "preprocess",
    value:
    /**
     * Process markdown before marked
     */
    function preprocess(markdown) {
      return markdown;
    }
    /**
     * Process HTML after marked is finished
     */
  }, {
    key: "postprocess",
    value: function postprocess(html) {
      return html;
    }
    /**
     * Process all tokens before walk tokens
     */
  }, {
    key: "processAllTokens",
    value: function processAllTokens(tokens) {
      return tokens;
    }
  }]);
  return _Hooks;
}();
_defineProperty(_Hooks, "passThroughHooks", new Set(['preprocess', 'postprocess', 'processAllTokens']));
var _parseMarkdown = /*#__PURE__*/new WeakSet();
var _onError = /*#__PURE__*/new WeakSet();
var Marked = exports.Marked = /*#__PURE__*/function () {
  function Marked() {
    _classCallCheck(this, Marked);
    _classPrivateMethodInitSpec(this, _onError);
    _classPrivateMethodInitSpec(this, _parseMarkdown);
    _defineProperty(this, "defaults", _getDefaults());
    _defineProperty(this, "options", this.setOptions);
    _defineProperty(this, "parse", _classPrivateMethodGet(this, _parseMarkdown, _parseMarkdown2).call(this, _Lexer.lex, _Parser.parse));
    _defineProperty(this, "parseInline", _classPrivateMethodGet(this, _parseMarkdown, _parseMarkdown2).call(this, _Lexer.lexInline, _Parser.parseInline));
    _defineProperty(this, "Parser", _Parser);
    _defineProperty(this, "Renderer", _Renderer);
    _defineProperty(this, "TextRenderer", _TextRenderer);
    _defineProperty(this, "Lexer", _Lexer);
    _defineProperty(this, "Tokenizer", _Tokenizer);
    _defineProperty(this, "Hooks", _Hooks);
    this.use.apply(this, arguments);
  }
  /**
   * Run callback for every token
   */
  _createClass(Marked, [{
    key: "walkTokens",
    value: function walkTokens(tokens, callback) {
      var _this4 = this;
      var values = [];
      var _iterator4 = _createForOfIteratorHelper(tokens),
        _step4;
      try {
        var _loop3 = function _loop3() {
          var token = _step4.value;
          values = values.concat(callback.call(_this4, token));
          switch (token.type) {
            case 'table':
              {
                var tableToken = token;
                var _iterator5 = _createForOfIteratorHelper(tableToken.header),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var cell = _step5.value;
                    values = values.concat(_this4.walkTokens(cell.tokens, callback));
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                var _iterator6 = _createForOfIteratorHelper(tableToken.rows),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var row = _step6.value;
                    var _iterator7 = _createForOfIteratorHelper(row),
                      _step7;
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        var _cell = _step7.value;
                        values = values.concat(_this4.walkTokens(_cell.tokens, callback));
                      }
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                break;
              }
            case 'list':
              {
                var listToken = token;
                values = values.concat(_this4.walkTokens(listToken.items, callback));
                break;
              }
            default:
              {
                var _this4$defaults$exten;
                var genericToken = token;
                if ((_this4$defaults$exten = _this4.defaults.extensions) !== null && _this4$defaults$exten !== void 0 && (_this4$defaults$exten = _this4$defaults$exten.childTokens) !== null && _this4$defaults$exten !== void 0 && _this4$defaults$exten[genericToken.type]) {
                  _this4.defaults.extensions.childTokens[genericToken.type].forEach(function (childTokens) {
                    values = values.concat(_this4.walkTokens(genericToken[childTokens], callback));
                  });
                } else if (genericToken.tokens) {
                  values = values.concat(_this4.walkTokens(genericToken.tokens, callback));
                }
              }
          }
        };
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          _loop3();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return values;
    }
  }, {
    key: "use",
    value: function use() {
      var _this5 = this;
      var extensions = this.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      args.forEach(function (pack) {
        // copy options to new object
        var opts = _objectSpread({}, pack);
        // set async to true if it was set to true before
        opts.async = _this5.defaults.async || opts.async || false;
        // ==-- Parse "addon" extensions --== //
        if (pack.extensions) {
          pack.extensions.forEach(function (ext) {
            if (!ext.name) {
              throw new Error('extension name required');
            }
            if ('renderer' in ext) {
              // Renderer extensions
              var prevRenderer = extensions.renderers[ext.name];
              if (prevRenderer) {
                // Replace extension with func to run new extension but fall back if false
                extensions.renderers[ext.name] = function () {
                  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                  }
                  var ret = ext.renderer.apply(this, args);
                  if (ret === false) {
                    ret = prevRenderer.apply(this, args);
                  }
                  return ret;
                };
              } else {
                extensions.renderers[ext.name] = ext.renderer;
              }
            }
            if ('tokenizer' in ext) {
              // Tokenizer Extensions
              if (!ext.level || ext.level !== 'block' && ext.level !== 'inline') {
                throw new Error("extension level must be 'block' or 'inline'");
              }
              var extLevel = extensions[ext.level];
              if (extLevel) {
                extLevel.unshift(ext.tokenizer);
              } else {
                extensions[ext.level] = [ext.tokenizer];
              }
              if (ext.start) {
                // Function to check for start of token
                if (ext.level === 'block') {
                  if (extensions.startBlock) {
                    extensions.startBlock.push(ext.start);
                  } else {
                    extensions.startBlock = [ext.start];
                  }
                } else if (ext.level === 'inline') {
                  if (extensions.startInline) {
                    extensions.startInline.push(ext.start);
                  } else {
                    extensions.startInline = [ext.start];
                  }
                }
              }
            }
            if ('childTokens' in ext && ext.childTokens) {
              // Child tokens to be visited by walkTokens
              extensions.childTokens[ext.name] = ext.childTokens;
            }
          });
          opts.extensions = extensions;
        }
        // ==-- Parse "overwrite" extensions --== //
        if (pack.renderer) {
          var renderer = _this5.defaults.renderer || new _Renderer(_this5.defaults);
          var _loop4 = function _loop4() {
            if (!(prop in renderer)) {
              throw new Error("renderer '".concat(prop, "' does not exist"));
            }
            if (prop === 'options') {
              // ignore options property
              return 1; // continue
            }
            var rendererProp = prop;
            var rendererFunc = pack.renderer[rendererProp];
            var prevRenderer = renderer[rendererProp];
            // Replace renderer with func to run extension, but fall back if false
            renderer[rendererProp] = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var ret = rendererFunc.apply(renderer, args);
              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }
              return ret || '';
            };
          };
          for (var prop in pack.renderer) {
            if (_loop4()) continue;
          }
          opts.renderer = renderer;
        }
        if (pack.tokenizer) {
          var tokenizer = _this5.defaults.tokenizer || new _Tokenizer(_this5.defaults);
          var _loop5 = function _loop5() {
            if (!(_prop in tokenizer)) {
              throw new Error("tokenizer '".concat(_prop, "' does not exist"));
            }
            if (['options', 'rules', 'lexer'].includes(_prop)) {
              // ignore options, rules, and lexer properties
              return 1; // continue
            }
            var tokenizerProp = _prop;
            var tokenizerFunc = pack.tokenizer[tokenizerProp];
            var prevTokenizer = tokenizer[tokenizerProp];
            // Replace tokenizer with func to run extension, but fall back if false
            // @ts-expect-error cannot type tokenizer function dynamically
            tokenizer[tokenizerProp] = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              var ret = tokenizerFunc.apply(tokenizer, args);
              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }
              return ret;
            };
          };
          for (var _prop in pack.tokenizer) {
            if (_loop5()) continue;
          }
          opts.tokenizer = tokenizer;
        }
        // ==-- Parse Hooks extensions --== //
        if (pack.hooks) {
          var hooks = _this5.defaults.hooks || new _Hooks();
          var _loop6 = function _loop6() {
            if (!(_prop2 in hooks)) {
              throw new Error("hook '".concat(_prop2, "' does not exist"));
            }
            if (_prop2 === 'options') {
              // ignore options property
              return 1; // continue
            }
            var hooksProp = _prop2;
            var hooksFunc = pack.hooks[hooksProp];
            var prevHook = hooks[hooksProp];
            if (_Hooks.passThroughHooks.has(_prop2)) {
              // @ts-expect-error cannot type hook function dynamically
              hooks[hooksProp] = function (arg) {
                if (_this5.defaults.async) {
                  return Promise.resolve(hooksFunc.call(hooks, arg)).then(function (ret) {
                    return prevHook.call(hooks, ret);
                  });
                }
                var ret = hooksFunc.call(hooks, arg);
                return prevHook.call(hooks, ret);
              };
            } else {
              // @ts-expect-error cannot type hook function dynamically
              hooks[hooksProp] = function () {
                for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                  args[_key5] = arguments[_key5];
                }
                var ret = hooksFunc.apply(hooks, args);
                if (ret === false) {
                  ret = prevHook.apply(hooks, args);
                }
                return ret;
              };
            }
          };
          for (var _prop2 in pack.hooks) {
            if (_loop6()) continue;
          }
          opts.hooks = hooks;
        }
        // ==-- Parse WalkTokens extensions --== //
        if (pack.walkTokens) {
          var _walkTokens = _this5.defaults.walkTokens;
          var packWalktokens = pack.walkTokens;
          opts.walkTokens = function (token) {
            var values = [];
            values.push(packWalktokens.call(this, token));
            if (_walkTokens) {
              values = values.concat(_walkTokens.call(this, token));
            }
            return values;
          };
        }
        _this5.defaults = _objectSpread(_objectSpread({}, _this5.defaults), opts);
      });
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions(opt) {
      this.defaults = _objectSpread(_objectSpread({}, this.defaults), opt);
      return this;
    }
  }, {
    key: "lexer",
    value: function lexer(src, options) {
      return _Lexer.lex(src, options !== null && options !== void 0 ? options : this.defaults);
    }
  }, {
    key: "parser",
    value: function parser(tokens, options) {
      return _Parser.parse(tokens, options !== null && options !== void 0 ? options : this.defaults);
    }
  }]);
  return Marked;
}();
function _parseMarkdown2(lexer, parser) {
  var _this6 = this;
  return function (src, options) {
    var origOpt = _objectSpread({}, options);
    var opt = _objectSpread(_objectSpread({}, _this6.defaults), origOpt);
    // Show warning if an extension set async to true but the parse was called with async: false
    if (_this6.defaults.async === true && origOpt.async === false) {
      if (!opt.silent) {
        console.warn('marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.');
      }
      opt.async = true;
    }
    var throwError = _classPrivateMethodGet(_this6, _onError, _onError2).call(_this6, !!opt.silent, !!opt.async);
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      return throwError(new Error('marked(): input parameter is undefined or null'));
    }
    if (typeof src !== 'string') {
      return throwError(new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected'));
    }
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then(function (src) {
        return lexer(src, opt);
      }).then(function (tokens) {
        return opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens;
      }).then(function (tokens) {
        return opt.walkTokens ? Promise.all(_this6.walkTokens(tokens, opt.walkTokens)).then(function () {
          return tokens;
        }) : tokens;
      }).then(function (tokens) {
        return parser(tokens, opt);
      }).then(function (html) {
        return opt.hooks ? opt.hooks.postprocess(html) : html;
      })["catch"](throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      var tokens = lexer(src, opt);
      if (opt.hooks) {
        tokens = opt.hooks.processAllTokens(tokens);
      }
      if (opt.walkTokens) {
        _this6.walkTokens(tokens, opt.walkTokens);
      }
      var _html2 = parser(tokens, opt);
      if (opt.hooks) {
        _html2 = opt.hooks.postprocess(_html2);
      }
      return _html2;
    } catch (e) {
      return throwError(e);
    }
  };
}
function _onError2(silent, async) {
  return function (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (silent) {
      var msg = '<p>An error occurred:</p><pre>' + escape$1(e.message + '', true) + '</pre>';
      if (async) {
        return Promise.resolve(msg);
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    throw e;
  };
}
var markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
/**
 * Sets the default options.
 *
 * @param options Hash of options
 */
marked.options = marked.setOptions = function (options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Gets the original marked default options.
 */
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
/**
 * Use Extension
 */
marked.use = function () {
  markedInstance.use.apply(markedInstance, arguments);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
/**
 * Run callback for every token
 */
marked.walkTokens = function (tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
/**
 * Compiles markdown to HTML without enclosing `p` tag.
 *
 * @param src String of markdown source to be compiled
 * @param options Hash of options
 * @return String of compiled HTML
 */
marked.parseInline = markedInstance.parseInline;
/**
 * Expose
 */
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
var options = exports.options = marked.options;
var setOptions = exports.setOptions = marked.setOptions;
var use = exports.use = marked.use;
var walkTokens = exports.walkTokens = marked.walkTokens;
var parseInline = exports.parseInline = marked.parseInline;
var parse = exports.parse = marked;
var parser = exports.parser = _Parser.parse;
var lexer = exports.lexer = _Lexer.lex;
