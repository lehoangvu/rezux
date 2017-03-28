webpackJsonp([0],{

/***/ 0:
/*!********************!*\
  !*** multi bundle ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/bundle.js */1);


/***/ },

/***/ 1:
/*!***********************!*\
  !*** ./src/bundle.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _jquery = __webpack_require__(/*! jquery */ 2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 98);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _routes = __webpack_require__(/*! ./routes */ 271);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(/*! ./store */ 534);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _WithStylesContex = __webpack_require__(/*! ./global/WithStylesContex */ 546);
	
	var _WithStylesContex2 = _interopRequireDefault(_WithStylesContex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	window.jQuery = _jquery2.default;
	window.$ = _jquery2.default;
	var basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
	window.basePath = basePath;
	
	(0, _reactDom.render)(_react2.default.createElement(
	    _WithStylesContex2.default,
	    { onInsertCss: function onInsertCss(styles) {
	            return Array.isArray(styles) ? styles.map(function (style) {
	                style._insertCss();
	            }) : styles._insertCss();
	        } },
	    _react2.default.createElement(
	        _reactRedux.Provider,
	        { store: _store2.default },
	        _react2.default.createElement(
	            _reactRouter.Router,
	            { history: _reactRouter.browserHistory },
	            _routes2.default
	        )
	    )
	), document.getElementById('root'));

/***/ },

/***/ 271:
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
	var _App = __webpack_require__(/*! ./../components/App */ 272);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _ContainerPlaylist = __webpack_require__(/*! ./../containers/ContainerPlaylist */ 525);
	
	var _ContainerPlaylist2 = _interopRequireDefault(_ContainerPlaylist);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
	window.basePath = basePath;
	
	var Routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: basePath, component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + 'all/:song_id', components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + ':playlist_id', components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + ':playlist_id/:song_id', components: _ContainerPlaylist2.default })
	);
	
	exports.default = Routes;

/***/ },

/***/ 272:
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ContainerSearch = __webpack_require__(/*! ./../containers/ContainerSearch */ 273);
	
	var _ContainerSearch2 = _interopRequireDefault(_ContainerSearch);
	
	var _Player = __webpack_require__(/*! ./../components/Player */ 409);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 522);
	
	var _app = __webpack_require__(/*! ./css/app.scss */ 523);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _app2.default.root, style: { backgroundColor: (0, _colors.coloring)(8, 10, 5, 10) } },
	                _react2.default.createElement(_ContainerSearch2.default, null),
	                this.props.children
	            );
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_app2.default)(App);

/***/ },

/***/ 273:
/*!*******************************************!*\
  !*** ./src/containers/ContainerSearch.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _search = __webpack_require__(/*! ./../actions/search */ 274);
	
	var _playlist = __webpack_require__(/*! ../actions/playlist */ 300);
	
	var _player = __webpack_require__(/*! ../actions/player */ 301);
	
	var _Search = __webpack_require__(/*! ./../components/Search */ 302);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        state: state.search
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            getSuggess: _search.getSuggess,
	            hideSuggess: _search.hideSuggess,
	            showSuggess: _search.showSuggess,
	            showSongOption: _search.showSongOption,
	            hideSongOption: _search.hideSongOption,
	            showPopupAddToPlaylist: _playlist.showPopupAddToPlaylist,
	            // fetchById
	            setPlayerId: _player.setPlayerId
	        }, dispatch)
	    };
	};
	
	var ContainerSearch = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Search2.default);
	exports.default = ContainerSearch;

/***/ },

/***/ 274:
/*!*******************************!*\
  !*** ./src/actions/search.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hideSuggess = exports.hideSongOption = exports.showSongOption = exports.showSuggess = exports.getSuggess = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 275);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getSuggess = exports.getSuggess = function getSuggess(keyword) {
	    return function (dispatch) {
	        // $.ajax({
	        //     url: "http://ac.mp3.zing.vn/complete/desktop",
	        //     type: 'GET',
	        //     data: {
	        //         type: 'artist,album,video,song',
	        //         num: 10,
	        //         query: keyword
	        //     },
	        //     dataType: 'JSON',
	        // }).done((json)=>{
	        //     dispatch({
	        //         type: 'GET_SUGGESS',    
	        //         keyword: keyword,
	        //         data: json.data
	        //     });
	
	        // }).fail((xhr)=>{
	
	        // });
	        _axios2.default.get("http://ac.mp3.zing.vn/complete/desktop", {
	            params: {
	                type: 'artist,album,video,song',
	                num: 20,
	                query: keyword
	            }
	        }).then(function (response) {
	            dispatch({
	                type: 'GET_SUGGESS',
	                keyword: keyword,
	                data: response.data.data
	            });
	        }).catch(function (error) {});
	    };
	};
	var showSuggess = exports.showSuggess = function showSuggess() {
	    return {
	        type: 'SHOW_SUGGESS'
	    };
	};
	var showSongOption = exports.showSongOption = function showSongOption(object) {
	    return {
	        type: 'SHOW_SONG_OPTION',
	        object: object
	    };
	};
	var hideSongOption = exports.hideSongOption = function hideSongOption() {
	    return {
	        type: 'HIDE_SONG_OPTION'
	    };
	};
	var hideSuggess = exports.hideSuggess = function hideSuggess() {
	    return function (dispatch) {
	        setTimeout(function () {
	            dispatch({
	                type: 'HIDE_SUGGESS'
	            });
	        }, 500);
	    };
	};

/***/ },

/***/ 300:
/*!*********************************!*\
  !*** ./src/actions/playlist.js ***!
  \*********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var showPopupAddToPlaylist = exports.showPopupAddToPlaylist = function showPopupAddToPlaylist(songId) {
	    return {
	        type: 'SHOW_POPUP_ADDTOPLAYLIST',
	        songId: songId
	    };
	};
	
	var hidePopupAddToPlaylist = exports.hidePopupAddToPlaylist = function hidePopupAddToPlaylist() {
	    return {
	        type: 'HIDE_POPUP_ADDTOPLAYLIST'
	    };
	};
	
	var addSongToPlaylist = exports.addSongToPlaylist = function addSongToPlaylist(songObj, playlistId) {
	    return {
	        type: 'ADD_SONG',
	        songObj: songObj,
	        playlistId: playlistId
	    };
	};
	
	var createNew = exports.createNew = function createNew() {
	    var playlistName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Untitled';
	    var callbackSongId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	
	    // store
	    var newPlaylist = {
	        name: playlistName,
	        list: Array.isArray(callbackSongId) && callbackSongId.length > 0 ? callbackSongId : [callbackSongId]
	    };
	    return {
	        type: 'CREATE_NEW_OK',
	        newPlaylist: newPlaylist
	    };
	};
	
	var setCurentPlaylist = exports.setCurentPlaylist = function setCurentPlaylist(index) {
	    return {
	        type: 'SET_CURRENT',
	        index: index
	    };
	};

/***/ },

/***/ 301:
/*!*******************************!*\
  !*** ./src/actions/player.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var fetchById = exports.fetchById = function fetchById(id) {
	    return function (dispatch) {
	        $.ajax({
	            url: "http://trondesign.vn/parser.php",
	            data: { request: "http://api.mp3.zing.vn/api/mobile/song/getsonginfo?requestdata={%22id%22:%22" + id + "%22}" },
	            type: 'POST',
	            dataType: 'JSON',
	            crossDomain: true
	        }).done(function (json) {
	
	            // check error
	            if (typeof json.response.is_error !== 'undefined' && json.response.is_error) {
	                dispatch({
	                    type: 'FETCH_ERROR',
	                    data: json.response
	                });
	            } else {
	                dispatch({
	                    type: 'FETCH',
	                    data: json
	                });
	            }
	        }).fail(function (xhr) {});
	    };
	};
	
	var setPlayerId = exports.setPlayerId = function setPlayerId(id) {
	    return {
	        type: 'SET_ID',
	        id: id
	    };
	};
	
	var clearError = exports.clearError = function clearError() {
	    return {
	        type: 'CLEAR_ERROR'
	    };
	};

/***/ },

/***/ 302:
/*!**********************************!*\
  !*** ./src/components/Search.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SearchSuggess = __webpack_require__(/*! ./SearchSuggess */ 303);
	
	var _SearchSuggess2 = _interopRequireDefault(_SearchSuggess);
	
	var _SongOption = __webpack_require__(/*! ./SongOption */ 406);
	
	var _SongOption2 = _interopRequireDefault(_SongOption);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _search = __webpack_require__(/*! ./css/search.scss */ 407);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Search = function Search(_ref) {
	    var state = _ref.state,
	        actions = _ref.actions;
	
	    var keyword = void 0;
	
	    var _onSubmit = function _onSubmit() {};
	
	    var _onSongClick = function _onSongClick(object) {
	        actions.showSongOption(object);
	    };
	
	    var _onHideSongOption = function _onHideSongOption() {
	        actions.hideSongOption();
	    };
	
	    var _showPopupAddToPlaylist = function _showPopupAddToPlaylist(id) {
	        actions.showPopupAddToPlaylist(id);
	    };
	
	    var _onChange = function _onChange() {
	        actions.getSuggess(keyword.value);
	    };
	
	    var _onPlaySong = function _onPlaySong(id) {
	        // actions.fetchById(id);
	        actions.setPlayerId(id);
	    };
	
	    var _onFocus = function _onFocus() {
	        console.log('focus');
	        actions.showSuggess();
	    };
	
	    var _onHideClick = function _onHideClick() {
	        actions.hideSuggess();
	    };
	
	    return _react2.default.createElement(
	        'div',
	        { className: _search2.default.root },
	        _react2.default.createElement(
	            'form',
	            { className: _search2.default.form, onSubmit: _onSubmit },
	            _react2.default.createElement('input', {
	                className: _search2.default.input,
	                onChange: _onChange,
	                onFocus: _onFocus
	                // onBlur={_onBlur}
	                , ref: function ref(node) {
	                    keyword = node;
	                },
	                type: 'text',
	                placeholder: 'Nh\u1EADp t\u1EEB kh\xF3a'
	            })
	        ),
	        _react2.default.createElement(_SearchSuggess2.default, { suggess: state.suggess, onHideClick: function onHideClick() {
	                return _onHideClick();
	            }, onSongClick: function onSongClick(id) {
	                _onSongClick(id);
	            } }),
	        _react2.default.createElement(_SongOption2.default, {
	            object: state.object,
	            show: state.showSongOption,
	            onHideSongOption: _onHideSongOption,
	            showPopupAddToPlaylist: _showPopupAddToPlaylist,
	            onPlaySong: _onPlaySong,
	            s: _search2.default
	        })
	    );
	};
	
	exports.default = (0, _withStyles2.default)(_search2.default)(Search);

/***/ },

/***/ 303:
/*!*****************************************!*\
  !*** ./src/components/SearchSuggess.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _search = __webpack_require__(/*! ./../actions/search */ 274);
	
	var _searchSuggess = __webpack_require__(/*! ./css/search-suggess.scss */ 391);
	
	var _searchSuggess2 = _interopRequireDefault(_searchSuggess);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchSuggess = function SearchSuggess(_ref) {
	    var suggess = _ref.suggess,
	        onSongClick = _ref.onSongClick,
	        onHideClick = _ref.onHideClick;
	
	
	    var suggessArtist = void 0;
	    var suggessAlbum = void 0;
	    var suggessVideo = void 0;
	    var suggessSong = void 0;
	
	    var artists = suggess.data[0].artist;
	    var albums = suggess.data[1].album;
	    var videos = suggess.data[2].video;
	    var songs = suggess.data[3].song;
	
	    var imageCdnUrl = 'http://image.mp3.zdn.vn/thumb/94_94/';
	
	    var emptyResult = true;
	
	    if (artists.length > 0) {
	        emptyResult = false;
	        suggessArtist = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                { className: _searchSuggess2.default.heading },
	                'T\xE1c gi\u1EA3'
	            ),
	            artists.map(function (artist) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: _searchSuggess2.default.item },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#', className: _searchSuggess2.default.link },
	                        _react2.default.createElement('img', { src: imageCdnUrl + artist.thumb }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _searchSuggess2.default.content },
	                            artist.name
	                        )
	                    )
	                );
	            })
	        );
	    }
	    if (albums.length > 0) {
	        emptyResult = false;
	        suggessAlbum = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                { className: _searchSuggess2.default.heading },
	                'Album'
	            ),
	            albums.map(function (album) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: _searchSuggess2.default.item },
	                    _react2.default.createElement(
	                        'a',
	                        { className: _searchSuggess2.default.link },
	                        _react2.default.createElement('img', { src: imageCdnUrl + album.thumb }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _searchSuggess2.default.content },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                album.name
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                album.artist
	                            )
	                        )
	                    )
	                );
	            })
	        );
	    }
	    if (videos.length > 0) {
	        emptyResult = false;
	        suggessVideo = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                { className: _searchSuggess2.default.heading },
	                'Video'
	            ),
	            videos.map(function (video) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: _searchSuggess2.default.item },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#', className: _searchSuggess2.default.link },
	                        _react2.default.createElement('img', { src: imageCdnUrl + video.thumb }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _searchSuggess2.default.content },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                video.name
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                video.artist
	                            )
	                        )
	                    )
	                );
	            })
	        );
	    }
	    if (songs.length > 0) {
	        emptyResult = false;
	        suggessSong = _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'h4',
	                { className: _searchSuggess2.default.heading },
	                'B\xE0i h\xE1t'
	            ),
	            songs.map(function (song) {
	                return _react2.default.createElement(
	                    'li',
	                    { className: _searchSuggess2.default.item },
	                    _react2.default.createElement(
	                        'a',
	                        { href: '#', className: _searchSuggess2.default.link, onClick: function onClick() {
	                                onSongClick(song);
	                            } },
	                        _react2.default.createElement(
	                            'span',
	                            { className: _searchSuggess2.default.content },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                song.name
	                            ),
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                song.artist
	                            )
	                        )
	                    )
	                );
	            })
	        );
	    }
	
	    return _react2.default.createElement(
	        'div',
	        null,
	        suggess.show && _react2.default.createElement(
	            'div',
	            { className: _searchSuggess2.default.root },
	            _react2.default.createElement(
	                'span',
	                { className: _searchSuggess2.default.hideLink, onClick: function onClick() {
	                        onHideClick();
	                    } },
	                _react2.default.createElement('i', { className: 'ion-android-close' })
	            ),
	            _react2.default.createElement(
	                'p',
	                null,
	                suggess.message
	            ),
	            suggessSong,
	            suggessAlbum,
	            suggessArtist,
	            suggessVideo
	        )
	    );
	};
	exports.default = (0, _withStyles2.default)(_searchSuggess2.default)(SearchSuggess);

/***/ },

/***/ 391:
/*!************************************************!*\
  !*** ./src/components/css/search-suggess.scss ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./search-suggess.scss */ 392);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./search-suggess.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./search-suggess.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 392:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/search-suggess.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".search-suggess_root_1T1 {\n  position: fixed;\n  top: 44px;\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  bottom: 63px;\n  left: 0;\n  overflow: scroll; }\n\n.search-suggess_item_3yI {\n  display: inline-block;\n  width: 100%;\n  padding: 5px 0; }\n\n.search-suggess_hideLink_2Bf {\n  position: fixed;\n  right: 10px;\n  font-size: 30px;\n  color: #4267b2;\n  top: 48px; }\n\n.search-suggess_link_3Jc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none; }\n\n.search-suggess_link_3Jc img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 {\n    margin-left: 10px;\n    color: #333;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 span:first-child {\n      color: #333;\n      display: block;\n      text-decoration: none;\n      width: 100%;\n      font-size: 22px; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 span:last-child {\n      color: #666;\n      text-decoration: none;\n      font-size: 18px; }\n\n.search-suggess_heading_2Q4 {\n  margin: 10px 0 5px 0;\n  font-size: 30px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "search-suggess_root_1T1",
		"root": "search-suggess_root_1T1",
		"item": "search-suggess_item_3yI",
		"item": "search-suggess_item_3yI",
		"hideLink": "search-suggess_hideLink_2Bf",
		"hideLink": "search-suggess_hideLink_2Bf",
		"link": "search-suggess_link_3Jc",
		"link": "search-suggess_link_3Jc",
		"content": "search-suggess_content_3q7",
		"content": "search-suggess_content_3q7",
		"heading": "search-suggess_heading_2Q4",
		"heading": "search-suggess_heading_2Q4"
	};

/***/ },

/***/ 393:
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 394:
/*!****************************************************!*\
  !*** ./~/isomorphic-style-loader/lib/insertCss.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 395);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 397);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 402);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Isomorphic CSS style loader for Webpack
	 *
	 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.txt file in the root directory of this source tree.
	 */
	
	var prefix = 's';
	var inserted = {};
	
	// Base64 encoding and decoding - The "Unicode Problem"
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
	function b64EncodeUnicode(str) {
	  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
	    return String.fromCharCode('0x' + p1);
	  }));
	}
	
	/**
	 * Remove style/link elements for specified node IDs
	 * if they are no longer referenced by UI components.
	 */
	function removeCss(ids) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var id = _step.value;
	
	      if (--inserted[id] <= 0) {
	        var elem = document.getElementById(prefix + id);
	        if (elem) {
	          elem.parentNode.removeChild(elem);
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}
	
	/**
	 * Example:
	 *   // Insert CSS styles object generated by `css-loader` into DOM
	 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
	 *
	 *   // Remove it from the DOM
	 *   removeCss();
	 */
	function insertCss(styles) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$replace = _ref.replace,
	      replace = _ref$replace === undefined ? false : _ref$replace,
	      _ref$prepend = _ref.prepend,
	      prepend = _ref$prepend === undefined ? false : _ref$prepend;
	
	  var ids = [];
	  for (var i = 0; i < styles.length; i++) {
	    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
	        moduleId = _styles$i[0],
	        css = _styles$i[1],
	        media = _styles$i[2],
	        sourceMap = _styles$i[3];
	
	    var id = moduleId + '-' + i;
	
	    ids.push(id);
	
	    if (inserted[id]) {
	      if (!replace) {
	        inserted[id]++;
	        continue;
	      }
	    }
	
	    inserted[id] = 1;
	
	    var elem = document.getElementById(prefix + id);
	    var create = false;
	
	    if (!elem) {
	      create = true;
	
	      elem = document.createElement('style');
	      elem.setAttribute('type', 'text/css');
	      elem.id = prefix + id;
	
	      if (media) {
	        elem.setAttribute('media', media);
	      }
	    }
	
	    var cssText = css;
	    if (sourceMap && btoa) {
	      // skip IE9 and below, see http://caniuse.com/atob-btoa
	      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
	      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
	    }
	
	    if ('textContent' in elem) {
	      elem.textContent = cssText;
	    } else {
	      elem.styleSheet.cssText = cssText;
	    }
	
	    if (create) {
	      if (prepend) {
	        document.head.insertBefore(elem, document.head.childNodes[0]);
	      } else {
	        document.head.appendChild(elem);
	      }
	    }
	  }
	
	  return removeCss.bind(null, ids);
	}
	
	module.exports = insertCss;

/***/ },

/***/ 395:
/*!***************************************************!*\
  !*** ./~/babel-runtime/core-js/json/stringify.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 396), __esModule: true };

/***/ },

/***/ 396:
/*!************************************************!*\
  !*** ./~/core-js/library/fn/json/stringify.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(/*! ../../modules/_core */ 318)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 397:
/*!**************************************************!*\
  !*** ./~/babel-runtime/helpers/slicedToArray.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 398);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 402);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;
	
	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);
	
	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }
	
	    return _arr;
	  }
	
	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },

/***/ 398:
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/is-iterable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 399), __esModule: true };

/***/ },

/***/ 399:
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/is-iterable.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 362);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 340);
	module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 400);

/***/ },

/***/ 400:
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 401)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 361)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 346);
	module.exports = __webpack_require__(/*! ./_core */ 318).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },

/***/ 401:
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_classof.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 354)
	  , TAG = __webpack_require__(/*! ./_wks */ 361)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },

/***/ 402:
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 403), __esModule: true };

/***/ },

/***/ 403:
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 362);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 340);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 404);

/***/ },

/***/ 404:
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 323)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 405);
	module.exports = __webpack_require__(/*! ./_core */ 318).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },

/***/ 405:
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 401)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 361)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 346);
	module.exports = __webpack_require__(/*! ./_core */ 318).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 406:
/*!**************************************!*\
  !*** ./src/components/SongOption.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SongOption = function SongOption(props) {
	    var s = props.s;
	    return _react2.default.createElement(
	        'div',
	        null,
	        props.show && _react2.default.createElement(
	            'div',
	            { className: s.optionWrap },
	            _react2.default.createElement(
	                'ul',
	                null,
	                _react2.default.createElement(
	                    'li',
	                    { onClick: function onClick() {
	                            props.onHideSongOption();
	                            // props.onPlaySong(props.objectId);
	                            // browserHistory.push('/all/'+props.objectId);
	                        } },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: window.basePath + 'all/' + props.object.id },
	                        'Nghe b\xE2y gi\u1EDD'
	                    )
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { onClick: function onClick() {
	                            props.onHideSongOption();
	                            props.showPopupAddToPlaylist(props.object);
	                        } },
	                    'L\u01B0u v\xE0o Playlist'
	                ),
	                _react2.default.createElement(
	                    'li',
	                    { onClick: props.onHideSongOption },
	                    '\u0110\xF3ng'
	                )
	            )
	        )
	    );
	};
	
	exports.default = SongOption;

/***/ },

/***/ 407:
/*!****************************************!*\
  !*** ./src/components/css/search.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./search.scss */ 408);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./search.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./search.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 408:
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/search.scss ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".search_root_11s {\n  width: 100%;\n  background: #4267b2;\n  padding: 5px;\n  position: relative; }\n\n.search_form_3tJ {\n  position: relative; }\n\n.search_input_3Im {\n  border: 0;\n  padding: 8px;\n  font-size: 16px;\n  display: table-row-group;\n  width: 100%; }\n\n.search_optionWrap_2vi {\n  position: fixed;\n  z-index: 999;\n  background: rgba(66, 103, 178, 0.04);\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0; }\n\n.search_optionWrap_2vi ul {\n    left: 20px;\n    right: 20px;\n    margin: auto;\n    list-style: none;\n    background: #fff;\n    border-radius: 5px;\n    top: 50%;\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    overflow: hidden; }\n\n.search_optionWrap_2vi li {\n    padding: 10px 5px;\n    text-align: center;\n    font-size: 20px;\n    background: #4267b2;\n    border-top: 1px solid #5776b7;\n    border-bottom: 1px solid #264d9a;\n    color: #fff; }\n\n.search_optionWrap_2vi li a {\n      text-decoration: none;\n      color: #fff; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "search_root_11s",
		"root": "search_root_11s",
		"form": "search_form_3tJ",
		"form": "search_form_3tJ",
		"input": "search_input_3Im",
		"input": "search_input_3Im",
		"optionWrap": "search_optionWrap_2vi",
		"optionWrap": "search_optionWrap_2vi"
	};

/***/ },

/***/ 409:
/*!**********************************!*\
  !*** ./src/components/Player.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(/*! moment */ 410);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _player = __webpack_require__(/*! ./css/player.scss */ 520);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 522);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Player = function (_React$Component) {
	    _inherits(Player, _React$Component);
	
	    function Player(props) {
	        _classCallCheck(this, Player);
	
	        var _this2 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	
	        _this2.state = _extends({}, props.state, {
	            duration: 0,
	            player: {
	                disabled: true,
	                play: false,
	                currentTime: 0
	            }
	        });
	        _this2.timeout = null;
	        _this2.slide = false;
	        return _this2;
	    }
	
	    _createClass(Player, [{
	        key: 'fetch',
	        value: function fetch(id) {
	            this.props.fetch(id);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setTitle();
	        }
	    }, {
	        key: 'getError',
	        value: function getError() {
	            var _this = this;
	            var errorDiv = void 0;
	            if (typeof this.props.state.response.is_error !== 'undefined') {
	                errorDiv = _react2.default.createElement(
	                    'div',
	                    { className: _player2.default.error },
	                    'C\xF3 l\u1ED7i s\u1EA3y ra, vui l\xF2ng th\u1EED l\u1EA1i b\xE0i kh\xE1c'
	                );
	                // setTimeout(()=>{
	                //     _this.props.clearError();
	                // }, 2000);
	            }
	            return errorDiv;
	        }
	    }, {
	        key: 'setTitle',
	        value: function setTitle() {
	            var state = this.state;
	            if (typeof state.title !== 'undefined') {
	                document.title = state.title;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (this.state.player_id !== null && !this.state.fetched) {
	                this.fetch(this.state.player_id);
	            }
	            this.player = document.getElementById('player');
	            this.load();
	            this.play();
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var newState = _extends({}, this.state, nextProps.state);
	
	            if (newState.fetched) {
	                if (!this.state.player.play) {
	                    newState.player.play = true;
	                    this.play();
	                }
	                newState.player.disabled = false;
	            }
	
	            this.setState(newState);
	        }
	    }, {
	        key: '_onPlayToggleClick',
	        value: function _onPlayToggleClick(e) {
	            var state = this.state;
	            state.player.play = !state.player.play;
	            state.player.play ? this.play() : this.stop();
	            this.setState(state);
	        }
	    }, {
	        key: '_onPlayerToggle',
	        value: function _onPlayerToggle(e) {
	            var state = this.state;
	            state.player.play = !state.player.play;
	            this.setState(state);
	        }
	    }, {
	        key: 'updateDuration',
	        value: function updateDuration(e) {
	            if (!this.slide) {
	                var state = this.state;
	                state.player.currentTime = this.player.currentTime;
	                this.setState(state);
	            }
	            if (typeof this.props.selectedPlaylist !== 'undefined') {
	                console.log(this.props.selectedPlaylist);
	            }
	        }
	    }, {
	        key: 'sliderChange',
	        value: function sliderChange(e) {
	            this.slide = true;
	            this.setState({
	                player: _extends({}, this.state.player, {
	                    currentTime: e.target.value
	                })
	            });
	
	            var _this = this;
	            clearTimeout(this.timeout);
	            this.timeout = setTimeout(function () {
	                _this.slide = false;
	                _this.play();
	            }, 300);
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.player.pause();
	        }
	    }, {
	        key: 'play',
	        value: function play() {
	            this.player.currentTime = this.state.player.currentTime;
	            this.player.play();
	        }
	    }, {
	        key: 'load',
	        value: function load() {
	            this.player.pause();
	            this.player.load();
	        }
	    }, {
	        key: 'toTime',
	        value: function toTime(s) {
	            return (0, _moment2.default)("1993-09-18").startOf('day').seconds(s).format('H:mm:ss');
	        }
	    }, {
	        key: 'getBestSource',
	        value: function getBestSource(source) {
	            // if(typeof source['lossless'] !== 'undefined') return source['lossless'];
	            if (typeof source['320'] !== 'undefined') return source['320'];
	            if (typeof source['128'] !== 'undefined') return source['128'];
	            return '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var source = typeof this.state.source !== 'undefined' ? this.state.source : {
	                'lossless': ''
	            };
	            var player = this.state.player;
	            var errorDiv = this.getError();
	            var disabledCover = player.disabled ? _react2.default.createElement('div', { className: _player2.default.cover }) : '';
	
	            return _react2.default.createElement(
	                'div',
	                { className: _player2.default.root, style: { backgroundColor: (0, _colors.coloring)(0), filter: player.disabled ? 'grayscale(100%)' : 'none' } },
	                _react2.default.createElement('audio', { src: this.getBestSource(source), autoPlay: 'true', id: 'player', onTimeUpdate: this.updateDuration.bind(this) }),
	                errorDiv,
	                disabledCover,
	                _react2.default.createElement(
	                    'div',
	                    { className: _player2.default.control },
	                    _react2.default.createElement(
	                        'button',
	                        { className: _player2.default.playBtn, onClick: this._onPlayToggleClick.bind(this) },
	                        _react2.default.createElement('span', { className: player.play ? 'ion-ios-pause' : 'ion-ios-play' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _player2.default.durationWrap },
	                        _react2.default.createElement('input', { type: 'range', min: '0', max: this.state.duration, onChange: this.sliderChange.bind(this), value: player.currentTime }),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _player2.default.duration },
	                            this.toTime(player.currentTime)
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            { className: _player2.default.totalDuration },
	                            this.toTime(this.state.duration)
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Player;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_player2.default)(Player);

/***/ },

/***/ 520:
/*!****************************************!*\
  !*** ./src/components/css/player.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./player.scss */ 521);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./player.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./player.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 521:
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/player.scss ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".player_root_qfm {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #4267b2;\n  padding: 10px;\n  /* Special styling for WebKit/Blink */\n  /* All the same stuff for Firefox */\n  /* All the same stuff for IE */ }\n  .player_root_qfm [class^=ion] {\n    font-size: 30px;\n    line-height: 30px; }\n  .player_root_qfm video {\n    width: 100%;\n    height: 48px; }\n  .player_root_qfm input[type=range] {\n    -webkit-appearance: none;\n    /* Hides the slider so that custom slider can be made */\n    width: 100%;\n    /* Specific width is required for Firefox. */\n    background: transparent;\n    /* Otherwise white in Chrome */\n    float: left;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .player_root_qfm input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  .player_root_qfm input[type=range]:focus {\n    outline: none;\n    /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */ }\n  .player_root_qfm input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent; }\n  .player_root_qfm input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer;\n    margin-top: -6px; }\n  .player_root_qfm input[type=range]::-moz-range-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer; }\n  .player_root_qfm input[type=range]::-ms-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer; }\n  .player_root_qfm input[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-webkit-slider-runnable-track {\n    background: #fff; }\n  .player_root_qfm input[type=range]::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: #fff; }\n  .player_root_qfm input[type=range]::-ms-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent; }\n  .player_root_qfm input[type=range]::-ms-fill-lower {\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-ms-fill-lower {\n    background: #fff; }\n  .player_root_qfm input[type=range]::-ms-fill-upper {\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-ms-fill-upper {\n    background: #fff; }\n  .player_error_x9V {\n  position: fixed;\n  top: -100%;\n  width: 100%;\n  left: 0;\n  background: #4267b2;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px 0;\n  color: #ffffff;\n  -webkit-animation: player_faceOut_3wv 2.5s;\n          animation: player_faceOut_3wv 2.5s; }\n  .player_control_2O1 button {\n  border: 0;\n  font-size: 0;\n  padding: 0 5px;\n  background: transparent;\n  width: 40px;\n  color: #f5f8fd; }\n  .player_durationWrap_7kb {\n  float: right;\n  width: calc(100% - 40px);\n  color: #fff; }\n  .player_duration_2KW {\n  float: left; }\n  .player_totalDuration_35Z {\n  float: right; }\n  .player_cover_3OU {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%; }\n  @-webkit-keyframes player_faceOut_3wv {\n  0% {\n    opacity: 1;\n    top: 0; }\n  60% {\n    opacity: 1;\n    top: 0%; }\n  80% {\n    opacity: 1;\n    top: 0%; }\n  90% {\n    opacity: 0;\n    top: -50%; }\n  95% {\n    opacity: 0;\n    top: -80%; }\n  100% {\n    opacity: 0;\n    top: -100%; } }\n  /* Standard syntax */\n  @keyframes player_faceOut_3wv {\n  0% {\n    opacity: 1;\n    top: 0; }\n  60% {\n    opacity: 1;\n    top: 0%; }\n  80% {\n    opacity: 1;\n    top: 0%; }\n  90% {\n    opacity: 0;\n    top: -50%; }\n  95% {\n    opacity: 0;\n    top: -80%; }\n  100% {\n    opacity: 0;\n    top: -100%; } }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "player_root_qfm",
		"root": "player_root_qfm",
		"error": "player_error_x9V",
		"error": "player_error_x9V",
		"faceOut": "player_faceOut_3wv",
		"faceOut": "player_faceOut_3wv",
		"control": "player_control_2O1",
		"control": "player_control_2O1",
		"durationWrap": "player_durationWrap_7kb",
		"durationWrap": "player_durationWrap_7kb",
		"duration": "player_duration_2KW",
		"duration": "player_duration_2KW",
		"totalDuration": "player_totalDuration_35Z",
		"totalDuration": "player_totalDuration_35Z",
		"cover": "player_cover_3OU",
		"cover": "player_cover_3OU"
	};

/***/ },

/***/ 522:
/*!*******************************!*\
  !*** ./src/helpers/colors.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var materialColors = [["rgb(244, 67, 54)", "rgb(255, 235, 238)", "rgb(255, 205, 210)", "rgb(239, 154, 154)", "rgb(229, 115, 115)", "rgb(239, 83, 80)", "rgb(244, 67, 54)", "rgb(229, 57, 53)", "rgb(211, 47, 47)", "rgb(198, 40, 40)", "rgb(183, 28, 28)", "rgb(255, 138, 128)", "rgb(255, 82, 82)", "rgb(255, 23, 68)", "rgb(213, 0, 0)"], ["rgb(233, 30, 99)", "rgb(252, 228, 236)", "rgb(248, 187, 208)", "rgb(244, 143, 177)", "rgb(240, 98, 146)", "rgb(236, 64, 122)", "rgb(233, 30, 99)", "rgb(216, 27, 96)", "rgb(194, 24, 91)", "rgb(173, 20, 87)", "rgb(136, 14, 79)", "rgb(255, 128, 171)", "rgb(255, 64, 129)", "rgb(245, 0, 87)", "rgb(197, 17, 98)"], ["rgb(156, 39, 176)", "rgb(243, 229, 245)", "rgb(225, 190, 231)", "rgb(206, 147, 216)", "rgb(186, 104, 200)", "rgb(171, 71, 188)", "rgb(156, 39, 176)", "rgb(142, 36, 170)", "rgb(123, 31, 162)", "rgb(106, 27, 154)", "rgb(74, 20, 140)", "rgb(234, 128, 252)", "rgb(224, 64, 251)", "rgb(213, 0, 249)", "rgb(170, 0, 255)"], ["rgb(103, 58, 183)", "rgb(237, 231, 246)", "rgb(209, 196, 233)", "rgb(179, 157, 219)", "rgb(149, 117, 205)", "rgb(126, 87, 194)", "rgb(103, 58, 183)", "rgb(94, 53, 177)", "rgb(81, 45, 168)", "rgb(69, 39, 160)", "rgb(49, 27, 146)", "rgb(179, 136, 255)", "rgb(124, 77, 255)", "rgb(101, 31, 255)", "rgb(98, 0, 234)"], ["rgb(63, 81, 181)", "rgb(232, 234, 246)", "rgb(197, 202, 233)", "rgb(159, 168, 218)", "rgb(121, 134, 203)", "rgb(92, 107, 192)", "rgb(63, 81, 181)", "rgb(57, 73, 171)", "rgb(48, 63, 159)", "rgb(40, 53, 147)", "rgb(26, 35, 126)", "rgb(140, 158, 255)", "rgb(83, 109, 254)", "rgb(61, 90, 254)", "rgb(48, 79, 254)"], ["rgb(33, 150, 243)", "rgb(227, 242, 253)", "rgb(187, 222, 251)", "rgb(144, 202, 249)", "rgb(100, 181, 246)", "rgb(66, 165, 245)", "rgb(33, 150, 243)", "rgb(30, 136, 229)", "rgb(25, 118, 210)", "rgb(21, 101, 192)", "rgb(13, 71, 161)", "rgb(130, 177, 255)", "rgb(68, 138, 255)", "rgb(41, 121, 255)", "rgb(41, 98, 255)"], ["rgb(3, 169, 244)", "rgb(225, 245, 254)", "rgb(179, 229, 252)", "rgb(129, 212, 250)", "rgb(79, 195, 247)", "rgb(41, 182, 246)", "rgb(3, 169, 244)", "rgb(3, 155, 229)", "rgb(2, 136, 209)", "rgb(2, 119, 189)", "rgb(1, 87, 155)", "rgb(128, 216, 255)", "rgb(64, 196, 255)", "rgb(0, 176, 255)", "rgb(0, 145, 234)"], ["rgb(0, 188, 212)", "rgb(224, 247, 250)", "rgb(178, 235, 242)", "rgb(128, 222, 234)", "rgb(77, 208, 225)", "rgb(38, 198, 218)", "rgb(0, 188, 212)", "rgb(0, 172, 193)", "rgb(0, 151, 167)", "rgb(0, 131, 143)", "rgb(0, 96, 100)", "rgb(132, 255, 255)", "rgb(24, 255, 255)", "rgb(0, 229, 255)", "rgb(0, 184, 212)"], ["rgb(0, 150, 136)", "rgb(224, 242, 241)", "rgb(178, 223, 219)", "rgb(128, 203, 196)", "rgb(77, 182, 172)", "rgb(38, 166, 154)", "rgb(0, 150, 136)", "rgb(0, 137, 123)", "rgb(0, 121, 107)", "rgb(0, 105, 92)", "rgb(0, 77, 64)", "rgb(167, 255, 235)", "rgb(100, 255, 218)", "rgb(29, 233, 182)", "rgb(0, 191, 165)"], ["rgb(76, 175, 80)", "rgb(232, 245, 233)", "rgb(200, 230, 201)", "rgb(165, 214, 167)", "rgb(129, 199, 132)", "rgb(102, 187, 106)", "rgb(76, 175, 80)", "rgb(67, 160, 71)", "rgb(56, 142, 60)", "rgb(46, 125, 50)", "rgb(27, 94, 32)", "rgb(185, 246, 202)", "rgb(105, 240, 174)", "rgb(0, 230, 118)", "rgb(0, 200, 83)"], ["rgb(139, 195, 74)", "rgb(241, 248, 233)", "rgb(220, 237, 200)", "rgb(197, 225, 165)", "rgb(174, 213, 129)", "rgb(156, 204, 101)", "rgb(139, 195, 74)", "rgb(124, 179, 66)", "rgb(104, 159, 56)", "rgb(85, 139, 47)", "rgb(51, 105, 30)", "rgb(204, 255, 144)", "rgb(178, 255, 89)", "rgb(118, 255, 3)", "rgb(100, 221, 23)"], ["rgb(205, 220, 57)", "rgb(249, 251, 231)", "rgb(240, 244, 195)", "rgb(230, 238, 156)", "rgb(220, 231, 117)", "rgb(212, 225, 87)", "rgb(205, 220, 57)", "rgb(192, 202, 51)", "rgb(175, 180, 43)", "rgb(158, 157, 36)", "rgb(130, 119, 23)", "rgb(244, 255, 129)", "rgb(238, 255, 65)", "rgb(198, 255, 0)", "rgb(174, 234, 0)"], ["rgb(255, 235, 59)", "rgb(255, 253, 231)", "rgb(255, 249, 196)", "rgb(255, 245, 157)", "rgb(255, 241, 118)", "rgb(255, 238, 88)", "rgb(255, 235, 59)", "rgb(253, 216, 53)", "rgb(251, 192, 45)", "rgb(249, 168, 37)", "rgb(245, 127, 23)", "rgb(255, 255, 141)", "rgb(255, 255, 0)", "rgb(255, 234, 0)", "rgb(255, 214, 0)"], ["rgb(255, 193, 7)", "rgb(255, 248, 225)", "rgb(255, 236, 179)", "rgb(255, 224, 130)", "rgb(255, 213, 79)", "rgb(255, 202, 40)", "rgb(255, 193, 7)", "rgb(255, 179, 0)", "rgb(255, 160, 0)", "rgb(255, 143, 0)", "rgb(255, 111, 0)", "rgb(255, 229, 127)", "rgb(255, 215, 64)", "rgb(255, 196, 0)", "rgb(255, 171, 0)"], ["rgb(255, 152, 0)", "rgb(255, 243, 224)", "rgb(255, 224, 178)", "rgb(255, 204, 128)", "rgb(255, 183, 77)", "rgb(255, 167, 38)", "rgb(255, 152, 0)", "rgb(251, 140, 0)", "rgb(245, 124, 0)", "rgb(239, 108, 0)", "rgb(230, 81, 0)", "rgb(255, 209, 128)", "rgb(255, 171, 64)", "rgb(255, 145, 0)", "rgb(255, 109, 0)"], ["rgb(255, 87, 34)", "rgb(251, 233, 231)", "rgb(255, 204, 188)", "rgb(255, 171, 145)", "rgb(255, 138, 101)", "rgb(255, 112, 67)", "rgb(255, 87, 34)", "rgb(244, 81, 30)", "rgb(230, 74, 25)", "rgb(216, 67, 21)", "rgb(191, 54, 12)", "rgb(255, 158, 128)", "rgb(255, 110, 64)", "rgb(255, 61, 0)", "rgb(221, 44, 0)"], ["rgb(121, 85, 72)", "rgb(239, 235, 233)", "rgb(215, 204, 200)", "rgb(188, 170, 164)", "rgb(161, 136, 127)", "rgb(141, 110, 99)", "rgb(121, 85, 72)", "rgb(109, 76, 65)", "rgb(93, 64, 55)", "rgb(78, 52, 46)", "rgb(62, 39, 35)"], ["rgb(158, 158, 158)", "rgb(250, 250, 250)", "rgb(245, 245, 245)", "rgb(238, 238, 238)", "rgb(224, 224, 224)", "rgb(189, 189, 189)", "rgb(158, 158, 158)", "rgb(117, 117, 117)", "rgb(97, 97, 97)", "rgb(66, 66, 66)", "rgb(33, 33, 33)"], ["rgb(96, 125, 139)", "rgb(236, 239, 241)", "rgb(207, 216, 220)", "rgb(176, 190, 197)", "rgb(144, 164, 174)", "rgb(120, 144, 156)", "rgb(96, 125, 139)", "rgb(84, 110, 122)", "rgb(69, 90, 100)", "rgb(55, 71, 79)", "rgb(38, 50, 56)"]];
	
	var coloring = exports.coloring = function coloring(index1) {
	  var total1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var index2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  var total2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
	  return '';
	  if (!total1) {
	    total1 = materialColors.length;
	  }
	  var color1 = Math.floor(index1 * materialColors.length / total1);
	  if (!index2) {
	    return materialColors[color1][0];
	  } else {
	    return materialColors[color1][Math.floor(index2 * materialColors.length / total2)];
	  }
	};

/***/ },

/***/ 523:
/*!*************************************!*\
  !*** ./src/components/css/app.scss ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./app.scss */ 524);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./app.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./app.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 524:
/*!************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/app.scss ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".app_root_1Ax {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(234, 240, 251, 0.5); }\n  .app_root_1Ax * {\n    font-family: 'Yanone Kaffeesatz', sans-serif; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "app_root_1Ax",
		"root": "app_root_1Ax"
	};

/***/ },

/***/ 525:
/*!*********************************************!*\
  !*** ./src/containers/ContainerPlaylist.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	var _PlaylistExplorer = __webpack_require__(/*! ../components/PlaylistExplorer */ 526);
	
	var _PlaylistExplorer2 = _interopRequireDefault(_PlaylistExplorer);
	
	var _playlist = __webpack_require__(/*! ../actions/playlist */ 300);
	
	var _player = __webpack_require__(/*! ../actions/player */ 301);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	    return {
	        playlist: state.playlist,
	        player: state.player,
	        ownProps: ownProps
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            addSongToPlaylist: _playlist.addSongToPlaylist,
	            createNew: _playlist.createNew,
	            onHideClick: _playlist.hidePopupAddToPlaylist,
	            setCurentPlaylist: _playlist.setCurentPlaylist,
	            fetchById: _player.fetchById,
	            setPlayerId: _player.setPlayerId,
	            clearError: _player.clearError
	        }, dispatch)
	    };
	};
	
	var ContainerPlaylist = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PlaylistExplorer2.default);
	
	exports.default = ContainerPlaylist;

/***/ },

/***/ 526:
/*!********************************************!*\
  !*** ./src/components/PlaylistExplorer.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
	var _PlaylistCreator = __webpack_require__(/*! ./PlaylistCreator/ */ 527);
	
	var _PlaylistCreator2 = _interopRequireDefault(_PlaylistCreator);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _playlist = __webpack_require__(/*! ./css/playlist.scss */ 530);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _songItem = __webpack_require__(/*! ./css/song-item.scss */ 532);
	
	var _songItem2 = _interopRequireDefault(_songItem);
	
	var _Player = __webpack_require__(/*! ./Player */ 409);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 522);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlaylistExplorer = function (_React$Component) {
	    _inherits(PlaylistExplorer, _React$Component);
	
	    function PlaylistExplorer(props) {
	        _classCallCheck(this, PlaylistExplorer);
	
	        var _this = _possibleConstructorReturn(this, (PlaylistExplorer.__proto__ || Object.getPrototypeOf(PlaylistExplorer)).call(this, props));
	
	        _this.state = {
	            playlist: props.playlist,
	            player: props.player
	        };
	        _this.actions = props.actions;
	        return _this;
	    }
	
	    _createClass(PlaylistExplorer, [{
	        key: 'parseProps',
	        value: function parseProps(props) {
	            var playlist_id = typeof props.ownProps.params.playlist_id !== 'undefined' ? props.ownProps.params.playlist_id : -1;
	            if (playlist_id !== props.playlist.currentIndex) {
	                this.actions.setCurentPlaylist(playlist_id);
	            }
	
	            if (typeof props.ownProps.params.song_id !== 'undefined' && props.ownProps.params.song_id !== props.player.player_id) {
	                this.actions.setPlayerId(props.ownProps.params.song_id);
	                // this.fetchPlayerId = true;
	            }
	
	            // this.setState ({
	            //     playlist: props.playlist,
	            //     player: props.player,
	            // });
	        }
	    }, {
	        key: '_onCreateNew',
	        value: function _onCreateNew(playlistName, callbackSongId) {
	            this.actions.createNew(playlistName, callbackSongId);
	        }
	    }, {
	        key: 'setTitle',
	        value: function setTitle() {
	            var playlist = this.props.playlist;
	            if (parseInt(playlist.currentIndex) !== -1) {
	                document.title = playlist.data[playlist.currentIndex].name;
	            } else {
	                document.title = 'Rezux - Chỉ để vui';
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.setTitle();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.parseProps(this.props);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.parseProps(nextProps);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log(_playlist2.default);
	            var playlist = this.props.playlist;
	            var player = this.props.player;
	            var directoryTitle = _react2.default.createElement(
	                'h3',
	                { className: _playlist2.default.directoryTitle },
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    'Danh s\xE1ch Playlist'
	                )
	            );
	
	            var playlists = void 0,
	                playerDom = void 0;
	
	            if (playlist.currentIndex === -1) {
	
	                playerDom = _react2.default.createElement(_Player2.default, { clearError: this.actions.clearError, key: player.player_id, state: player, fetch: this.actions.fetchById });
	
	                if (playlist.data.length > 0) {
	                    playlists = playlist.data.map(function (playlist, index) {
	                        return _react2.default.createElement(
	                            _reactRouter.Link,
	                            { to: window.basePath + index, className: _playlist2.default.item, key: index },
	                            playlist.name,
	                            _react2.default.createElement('br', null),
	                            _react2.default.createElement(
	                                'em',
	                                null,
	                                playlist.list.length,
	                                ' b\xE0i h\xE1t'
	                            )
	                        );
	                    });
	                } else {
	                    playlists = _react2.default.createElement(
	                        'p',
	                        { className: _playlist2.default.empty },
	                        'Ch\u01B0a c\xF3 Playlist n\xE0o!'
	                    );
	                }
	            } else {
	                var selectedPlaylist = playlist.data[playlist.currentIndex];
	                directoryTitle = _react2.default.createElement(
	                    'h3',
	                    { className: _playlist2.default.directoryTitle },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: window.basePath, className: _playlist2.default.directoryTitle.icon },
	                        _react2.default.createElement('span', { className: 'ion-ios-arrow-thin-left' })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        selectedPlaylist.name
	                    )
	                );
	
	                playerDom = _react2.default.createElement(_Player2.default, { clearError: this.actions.clearError, selectedPlaylist: selectedPlaylist, key: player.player_id, state: player, fetch: this.actions.fetchById });
	
	                if (selectedPlaylist.list.length > 0) {
	                    playlists = selectedPlaylist.list.map(function (song, index) {
	                        return _react2.default.createElement(
	                            'li',
	                            { className: _songItem2.default.root },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: window.basePath + playlist.currentIndex + '/' + song.id, className: _songItem2.default.link },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: _songItem2.default.content },
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        song.name
	                                    ),
	                                    _react2.default.createElement(
	                                        'span',
	                                        null,
	                                        song.artist
	                                    )
	                                )
	                            )
	                        );
	                    });
	                } else {
	                    playlists = _react2.default.createElement(
	                        'p',
	                        { className: _playlist2.default.empty },
	                        'Ch\u01B0a c\xF3 b\xE0i h\xE1t n\xE0o!'
	                    );
	                }
	            }
	
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: _playlist2.default.root },
	                    directoryTitle,
	                    playlists,
	                    _react2.default.createElement(_PlaylistCreator2.default, { playlist: playlist, onCreateNew: this._onCreateNew.bind(this), onHideClick: this.actions.onHideClick, addSongToPlaylist: this.actions.addSongToPlaylist })
	                ),
	                playerDom
	            );
	        }
	    }]);
	
	    return PlaylistExplorer;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)([_playlist2.default, _songItem2.default])(PlaylistExplorer);

/***/ },

/***/ 527:
/*!*************************************************!*\
  !*** ./src/components/PlaylistCreator/index.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 304);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _style = __webpack_require__(/*! ./style.scss */ 528);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlaylistCreator = function (_React$Component) {
	    _inherits(PlaylistCreator, _React$Component);
	
	    function PlaylistCreator(props) {
	        _classCallCheck(this, PlaylistCreator);
	
	        var _this = _possibleConstructorReturn(this, (PlaylistCreator.__proto__ || Object.getPrototypeOf(PlaylistCreator)).call(this, props));
	
	        _this.state = _extends({}, props.playlist, {
	            newPlaylistName: ''
	        });
	        return _this;
	    }
	
	    _createClass(PlaylistCreator, [{
	        key: 'inputChange',
	        value: function inputChange(e) {
	            this.setState(_extends({}, this.state, {
	                newPlaylistName: e.target.value
	            }));
	        }
	    }, {
	        key: 'savePlaylist',
	        value: function savePlaylist() {
	            // const playListName;
	            this.props.onCreateNew(this.state.newPlaylistName, this.state.callbackSongId);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(_extends({}, nextProps.playlist, {
	                newPlaylistName: ''
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var playlists = void 0;
	            if (this.state.data.length > 0) {
	                playlists = this.state.data.map(function (playlist, index) {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: index, className: _style2.default.item, onClick: function onClick() {
	                                _this2.props.addSongToPlaylist(_this2.state.callbackSongId, index);
	                            } },
	                        playlist.name,
	                        _react2.default.createElement(
	                            'em',
	                            null,
	                            playlist.list.length
	                        )
	                    );
	                });
	            }
	            return _react2.default.createElement(
	                'div',
	                { style: { display: this.state.showAddPopup ? 'block' : 'none' } },
	                _react2.default.createElement(
	                    'div',
	                    { className: _style2.default.root },
	                    _react2.default.createElement(
	                        'span',
	                        { className: _style2.default.hideLink, onClick: function onClick() {
	                                _this2.props.onHideClick();
	                            } },
	                        _react2.default.createElement('i', { className: 'ion-android-close' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _style2.default.container },
	                        _react2.default.createElement(
	                            'h3',
	                            { className: _style2.default.heading },
	                            'Ch\u1ECDn t\u1EEB danh s\xE1ch Playlist'
	                        ),
	                        playlists,
	                        _react2.default.createElement(
	                            'div',
	                            { className: _style2.default.newForm },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                'Ho\u1EB7c t\u1EA1o m\u1EDBi'
	                            ),
	                            _react2.default.createElement('input', { className: _style2.default.input, onChange: this.inputChange.bind(this), value: this.state.newPlaylistName }),
	                            _react2.default.createElement(
	                                'button',
	                                { className: _style2.default.submit, disabled: this.state.newPlaylistName === '', onClick: this.savePlaylist.bind(this) },
	                                'L\u01B0u'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return PlaylistCreator;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_style2.default)(PlaylistCreator);

/***/ },

/***/ 528:
/*!***************************************************!*\
  !*** ./src/components/PlaylistCreator/style.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./style.scss */ 529);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./style.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./style.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 529:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/PlaylistCreator/style.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".style_root_2hJ {\n  position: fixed;\n  z-index: 999;\n  background: white;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0; }\n\n.style_container_3-u {\n  padding: 20px; }\n\n.style_heading_1JA {\n  margin-bottom: 20px;\n  font-size: 30px; }\n\n.style_item_1nh {\n  color: #fff;\n  padding: 10px;\n  font-size: 23px;\n  font-weight: 400;\n  display: inline-block;\n  width: 100%;\n  line-height: 16px;\n  background: #4267b2;\n  border-top: 1px solid #5776b7;\n  border-bottom: 1px solid #264d9a;\n  text-decoration: none; }\n\n.style_hideLink_3vN {\n  position: absolute;\n  right: 10px;\n  font-size: 30px;\n  color: #4267b2; }\n\n.style_newForm_2Ce {\n  margin-top: 40px; }\n\n.style_input_288 {\n  border: 0px;\n  background: #4267b2;\n  margin: 10px 0 0 0;\n  font-size: 22px;\n  font-weight: 300;\n  padding: 10px 10px;\n  text-align: center;\n  color: #fff;\n  width: 100%; }\n\n.style_submit_1uA {\n  width: 100%;\n  border: 0px;\n  font-size: 16px;\n  padding: 10px;\n  margin: 10px 0 0 0;\n  background: #4267b2;\n  color: #fff;\n  border: 1px solid #254c9c; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "style_root_2hJ",
		"root": "style_root_2hJ",
		"container": "style_container_3-u",
		"container": "style_container_3-u",
		"heading": "style_heading_1JA",
		"heading": "style_heading_1JA",
		"item": "style_item_1nh",
		"item": "style_item_1nh",
		"hideLink": "style_hideLink_3vN",
		"hideLink": "style_hideLink_3vN",
		"newForm": "style_newForm_2Ce",
		"newForm": "style_newForm_2Ce",
		"input": "style_input_288",
		"input": "style_input_288",
		"submit": "style_submit_1uA",
		"submit": "style_submit_1uA"
	};

/***/ },

/***/ 530:
/*!******************************************!*\
  !*** ./src/components/css/playlist.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./playlist.scss */ 531);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./playlist.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./playlist.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 531:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/playlist.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".playlist_root_OT1 {\n  padding: 20px 0; }\n\n.playlist_heading_3MU {\n  margin-bottom: 20px;\n  font-size: 30px; }\n\n.playlist_item_38V {\n  color: #fff;\n  padding: 10px;\n  font-size: 23px;\n  font-weight: 400;\n  display: inline-block;\n  width: 100%;\n  line-height: 16px;\n  background: #4267b2;\n  border-top: 1px solid #5776b7;\n  border-bottom: 1px solid #264d9a;\n  text-decoration: none; }\n\n.playlist_item_38V em {\n    color: #9E9E9E;\n    font-size: 16px;\n    display: block;\n    margin-top: 10px; }\n\n.playlist_directoryTitle_2yN {\n  margin: 10px 0;\n  font-size: 26px;\n  color: #4267b2; }\n\n.playlist_directoryTitle_2yN > span {\n    margin-left: 20px; }\n\n.playlist_directoryTitle_2yN a {\n    background: #4267b2;\n    color: #fff;\n    padding: 10px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "playlist_root_OT1",
		"root": "playlist_root_OT1",
		"heading": "playlist_heading_3MU",
		"heading": "playlist_heading_3MU",
		"item": "playlist_item_38V",
		"item": "playlist_item_38V",
		"directoryTitle": "playlist_directoryTitle_2yN",
		"directoryTitle": "playlist_directoryTitle_2yN"
	};

/***/ },

/***/ 532:
/*!*******************************************!*\
  !*** ./src/components/css/song-item.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./song-item.scss */ 533);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 394);
	
	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }
	
	    module.exports = content.locals || {};
	    module.exports._getContent = function() { return content; };
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };
	    
	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./song-item.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./song-item.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 533:
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/song-item.scss ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 393)();
	// imports
	
	
	// module
	exports.push([module.id, ".song-item_root_2nr {\n  display: inline-block;\n  width: 100%;\n  padding: 5px 0;\n  border-top: 1px solid #eef0f5; }\n\n.song-item_link_359 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none; }\n\n.song-item_link_359 img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px; }\n\n.song-item_content_K8p {\n  margin-left: 10px;\n  color: #333;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.song-item_content_K8p span:first-child {\n    color: #333;\n    display: block;\n    text-decoration: none;\n    width: 100%;\n    font-size: 22px; }\n\n.song-item_content_K8p span:last-child {\n    color: #666;\n    text-decoration: none;\n    font-size: 18px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "song-item_root_2nr",
		"root": "song-item_root_2nr",
		"link": "song-item_link_359",
		"link": "song-item_link_359",
		"content": "song-item_content_K8p",
		"content": "song-item_content_K8p"
	};

/***/ },

/***/ 534:
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 535);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 536);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(/*! ./..//reducers */ 542);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var promiseMiddleware = function promiseMiddleware() {
	    return function (next) {
	        return function (action) {
	            var promise = action.promise,
	                type = action.type,
	                rest = _objectWithoutProperties(action, ['promise', 'type']);
	
	            if (!promise) return next(action);
	
	            var SUCCESS = type;
	            var REQUEST = type + '_REQUEST';
	            var FAILURE = type + '_FAILURE';
	            next(_extends({}, rest, { type: REQUEST }));
	
	            return promise.then(function (res) {
	                next(_extends({}, rest, { res: res, type: SUCCESS }));
	                return true;
	            }).catch(function (error) {
	                next(_extends({}, rest, { error: error, type: FAILURE }));
	                console.log(error);
	                return false;
	            });
	        };
	    };
	};
	
	var preloadedState = {};
	
	var middleWare = [_reduxThunk2.default, promiseMiddleware, (0, _reduxLogger2.default)()];
	
	var store = (0, _redux.createStore)(_reducers2.default, preloadedState, _redux.applyMiddleware.apply(undefined, middleWare));
	exports.default = store;

/***/ },

/***/ 542:
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	var _search = __webpack_require__(/*! ./search */ 543);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _playlist = __webpack_require__(/*! ./playlist */ 544);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _player = __webpack_require__(/*! ./player */ 545);
	
	var _player2 = _interopRequireDefault(_player);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = (0, _redux.combineReducers)({
		search: _search2.default,
		player: _player2.default,
		playlist: _playlist2.default
	});
	
	exports.default = reducer;

/***/ },

/***/ 543:
/*!********************************!*\
  !*** ./src/reducers/search.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var intinalState = {
	    suggess: {
	        show: false,
	        message: 'Gõ để tìm kiếm',
	        result: false,
	        data: [{
	            "artist": []
	        }, {
	            "album": []
	        }, {
	            "video": []
	        }, {
	            "song": []
	        }]
	    },
	    keyword: '',
	    showSongOption: false,
	    optionObjectId: -1
	};
	
	var getMessage = function getMessage(search) {
	    var artists = search.suggess.data[0].artist;
	    var albums = search.suggess.data[1].album;
	    var videos = search.suggess.data[2].video;
	    var songs = search.suggess.data[3].song;
	    if (search.keyword.length === 0) return 'Gõ để tìm kiếm bài hát';
	    if (artists.length === 0 && albums.length === 0 && videos.length === 0 && songs.length === 0) {
	        return 'Không có kết quả';
	    }
	
	    return '';
	};
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intinalState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'HIDE_SONG_OPTION':
	            return _extends({}, state, {
	                showSongOption: false
	            });
	            break;
	        case 'SHOW_SONG_OPTION':
	            return _extends({}, state, {
	                object: action.object,
	                showSongOption: true
	            });
	            break;
	        case 'GET_SUGGESS':
	            return _extends({}, state, {
	                keyword: action.keyword,
	                suggess: _extends({}, state.suggess, {
	                    data: action.data
	                })
	            });
	            break;
	        case 'SHOW_SUGGESS':
	            return _extends({}, state, {
	                suggess: _extends({}, state.suggess, {
	                    message: getMessage(state),
	                    show: true
	                })
	            });
	            break;
	        case 'HIDE_SUGGESS':
	            return _extends({}, state, {
	                suggess: _extends({}, state.suggess, {
	                    show: false
	                })
	            });
	            break;
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 544:
/*!**********************************!*\
  !*** ./src/reducers/playlist.js ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var playlistDb = {
	    get: function get() {
	        var playlist = localStorage.getItem('db_playlist');
	        if (playlist) {
	            return JSON.parse(playlist);
	        }
	        return [];
	    },
	    set: function set(data) {
	        localStorage.setItem('db_playlist', JSON.stringify(data));
	    }
	};
	
	function savePlaylistToDb(playlist) {
	    localStorage.setItem('playlist_db', JSON.stringify(playlist));
	}
	function getPlaylistFromDb(playlist) {
	    localStorage.setItem('playlist_db', JSON.stringify(playlist));
	}
	var intinalState = {
	    showAddPopup: false,
	    callbackSongId: false,
	    currentIndex: -1,
	    // data: [
	    //     {
	    //         name: 'Yêu thích',
	    //         list: []
	    //     },
	    //     {
	    //         name: 'Nhạc trẻ',
	    //         list: []
	    //     }
	    // ]
	    data: playlistDb.get()
	};
	
	var addToPlaylist = function addToPlaylist(list, songId) {
	    var newList = list;
	    if (Array.isArray(songId)) {
	        songId.map(function (id, index) {
	            if (newList.indexOf(id) === -1) {
	                newList.push(id);
	            }
	        });
	    } else {
	        if (newList.indexOf(songId) === -1) {
	            newList.push(songId);
	        }
	    }
	    return newList;
	};
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intinalState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'GET_PLAYLIST':
	            return _extends({}, state);
	            break;
	        case 'CREATE_NEW_OK':
	            var newData = state.data;
	            newData.push(action.newPlaylist);
	            playlistDb.set(newData);
	            return _extends({}, state, {
	                data: newData
	            });
	            break;
	        case 'SHOW_POPUP_ADDTOPLAYLIST':
	            return _extends({}, state, {
	                callbackSongId: action.songId,
	                showAddPopup: true
	            });
	            break;
	        case 'HIDE_POPUP_ADDTOPLAYLIST':
	            return _extends({}, state, {
	                callbackSongId: false,
	                showAddPopup: false
	            });
	            break;
	        case 'ADD_SONG':
	            var finalState = state;
	            finalState.data[action.playlistId].list = addToPlaylist(finalState.data[action.playlistId].list, action.songObj);
	            playlistDb.set(finalState.data);
	            return _extends({}, finalState, {
	                callbackSongId: false,
	                showAddPopup: false
	            });
	            break;
	        case 'SET_CURRENT':
	            if (state.currentIndex !== action.index && (action.index === -1 || typeof state.data[action.index] !== 'undefined')) {
	                return _extends({}, state, {
	                    currentIndex: action.index
	                });
	            }
	            return state;
	            break;
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 545:
/*!********************************!*\
  !*** ./src/reducers/player.js ***!
  \********************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var intinalState = {
	    player_id: null,
	    fetched: false,
	    response: {
	        msgCode: 1,
	        msg: ""
	    }
	};
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intinalState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'SET_ID':
	            return {
	                fetched: false,
	                player_id: action.id,
	                response: {
	                    msgCode: 1,
	                    msg: ""
	                }
	            };
	            break;
	        case 'FETCH':
	            return _extends({}, state, {
	                fetched: true,
	                response: {
	                    msgCode: 1,
	                    msg: ""
	                }
	            }, action.data);
	            break;
	        case 'FETCH_ERROR':
	            return _extends({}, state, {
	                response: _extends({}, action.data)
	            });
	            break;
	        case 'CLEAR_ERROR':
	            return _extends({}, state, {
	                response: {
	                    msgCode: 1,
	                    msg: ""
	                }
	            });
	            break;
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 546:
/*!****************************************!*\
  !*** ./src/global/WithStylesContex.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WithStylesContext = function (_React$Component) {
	    _inherits(WithStylesContext, _React$Component);
	
	    function WithStylesContext() {
	        _classCallCheck(this, WithStylesContext);
	
	        return _possibleConstructorReturn(this, (WithStylesContext.__proto__ || Object.getPrototypeOf(WithStylesContext)).apply(this, arguments));
	    }
	
	    _createClass(WithStylesContext, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { insertCss: this.props.onInsertCss };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react.Children.only(this.props.children);
	        }
	    }]);
	
	    return WithStylesContext;
	}(_react2.default.Component);
	
	WithStylesContext.childContextTypes = {
	    insertCss: _react.PropTypes.func.isRequired
	};
	
	WithStylesContext.propTypes = {
	    children: _react.PropTypes.element.isRequired,
	    onInsertCss: _react.PropTypes.func.isRequired
	};
	
	exports.default = WithStylesContext;

/***/ }

});
//# sourceMappingURL=bundle.js.map