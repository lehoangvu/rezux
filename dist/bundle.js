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
	
	var _App = __webpack_require__(/*! ./components/App */ 271);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _routes = __webpack_require__(/*! ./routes */ 557);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(/*! ./store */ 558);
	
	var _store2 = _interopRequireDefault(_store);
	
	var _WithStylesContex = __webpack_require__(/*! ./global/WithStylesContex */ 571);
	
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
	        _react2.default.createElement(_App2.default, null)
	    )
	), document.getElementById('root'));
	
	// window.fbAsyncInit = function() {
	// 	FB.init({
	// 	  appId      : '580525262157720',
	// 	  xfbml      : true,
	// 	  version    : 'v2.8'
	// 	});
	// 	FB.AppEvents.logPageView();
	// 	FB.login(function(response) {
	// 	}, {scope: 'user_photos, public_profile'});
	// };
	
	// (function(d, s, id){
	//  var js, fjs = d.getElementsByTagName(s)[0];
	//  if (d.getElementById(id)) {return;}
	//  js = d.createElement(s); js.id = id;
	//  js.src = "//connect.facebook.net/en_US/sdk.js";
	//  fjs.parentNode.insertBefore(js, fjs);
	// }(document, 'script', 'facebook-jssdk'));
	
	
	// $('#camera').on('change', (e)=>{
	// 	var storageRef = firebase.storage().ref('image');
	// 	// Create a reference to 'mountains.jpg'
	// 	var mountainsRef = storageRef.child('mountains.jpg');
	// 	// Create a reference to 'images/mountains.jpg'
	// 	var mountainImagesRef = storageRef.child('images/mountains.jpg');
	// 	// While the file names are the same, the references point to different files
	// 	mountainsRef.name === mountainImagesRef.name            // true
	// 	mountainsRef.fullPath === mountainImagesRef.fullPath    // false
	// 	var file = $('#camera')[0].files[0];
	// 	storageRef.put(file).then(function(snapshot) {
	// 	  console.log(snapshot);
	// 	});
	// })

/***/ },

/***/ 271:
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
	
	var _ContainerSearch = __webpack_require__(/*! ./../containers/ContainerSearch */ 272);
	
	var _ContainerSearch2 = _interopRequireDefault(_ContainerSearch);
	
	var _ContainerUser = __webpack_require__(/*! ./../containers/ContainerUser */ 411);
	
	var _ContainerUser2 = _interopRequireDefault(_ContainerUser);
	
	var _ContainerPlaylist = __webpack_require__(/*! ./../containers/ContainerPlaylist */ 420);
	
	var _ContainerPlaylist2 = _interopRequireDefault(_ContainerPlaylist);
	
	var _ContainerPhoto = __webpack_require__(/*! ./../containers/ContainerPhoto */ 547);
	
	var _ContainerPhoto2 = _interopRequireDefault(_ContainerPhoto);
	
	var _Player = __webpack_require__(/*! ./../components/Player */ 426);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Tab = __webpack_require__(/*! ./../components/Tab */ 552);
	
	var _Tab2 = _interopRequireDefault(_Tab);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 546);
	
	var _app = __webpack_require__(/*! ./css/app.scss */ 555);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	   _inherits(App, _React$Component);
	
	   function App(props) {
	      _classCallCheck(this, App);
	
	      var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	      _this.state = {
	         currentTab: 1
	      };
	      return _this;
	   }
	
	   _createClass(App, [{
	      key: 'setCurrentTab',
	      value: function setCurrentTab(index) {
	         this.setState({
	            currentTab: index
	         });
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         var _this2 = this;
	
	         return _react2.default.createElement(
	            'div',
	            { className: _app2.default.root },
	            _react2.default.createElement(_Tab2.default, {
	               tabs: [_react2.default.createElement(_ContainerUser2.default, null), _react2.default.createElement(_ContainerPhoto2.default, null), _react2.default.createElement(_ContainerPlaylist2.default, null), _react2.default.createElement(_ContainerSearch2.default, null)],
	               currentTab: this.state.currentTab,
	               setCurrentTab: function setCurrentTab(index) {
	                  _this2.setCurrentTab(index);
	               }
	            })
	         );
	      }
	   }]);
	
	   return App;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_app2.default)(App);

/***/ },

/***/ 272:
/*!*******************************************!*\
  !*** ./src/containers/ContainerSearch.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _search = __webpack_require__(/*! ./../actions/search */ 273);
	
	var _player = __webpack_require__(/*! ../actions/player */ 299);
	
	var _playlist = __webpack_require__(/*! ../actions/playlist */ 300);
	
	var _Search = __webpack_require__(/*! ./../components/Search */ 301);
	
	var _Search2 = _interopRequireDefault(_Search);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        state: state.search,
	        playlist: state.playlist
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
	            showPopupAddToPlaylist: _search.showPopupAddToPlaylist,
	            hidePopupAddToPlaylist: _search.hidePopupAddToPlaylist,
	            addSongToPlaylist: _search.addSongToPlaylist,
	            createPlaylist: _playlist.createNew,
	            // fetchById
	            setPlayerId: _player.setPlayerId
	        }, dispatch)
	    };
	};
	
	var ContainerSearch = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Search2.default);
	exports.default = ContainerSearch;

/***/ },

/***/ 273:
/*!*******************************!*\
  !*** ./src/actions/search.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hidePopupAddToPlaylist = exports.showPopupAddToPlaylist = exports.hideSuggess = exports.hideSongOption = exports.showSongOption = exports.showSuggess = exports.addSongToPlaylist = exports.getSuggess = undefined;
	
	var _axios = __webpack_require__(/*! axios */ 274);
	
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
	var addSongToPlaylist = exports.addSongToPlaylist = function addSongToPlaylist(songObj, playlistId) {
	    return {
	        type: 'ADD_SONG',
	        songObj: songObj,
	        playlistId: playlistId
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

/***/ },

/***/ 299:
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
	
	var setPlayerId = exports.setPlayerId = function setPlayerId(id, rolloutPlaylist, rolloutId) {
	    return {
	        type: 'SET_ID',
	        id: id,
	        rolloutPlaylist: rolloutPlaylist,
	        rolloutId: rolloutId
	    };
	};
	
	var clearError = exports.clearError = function clearError() {
	    return {
	        type: 'CLEAR_ERROR'
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
	
	var _SearchSuggess = __webpack_require__(/*! ./SearchSuggess */ 302);
	
	var _SearchSuggess2 = _interopRequireDefault(_SearchSuggess);
	
	var _SongOption = __webpack_require__(/*! ./SongOption */ 405);
	
	var _SongOption2 = _interopRequireDefault(_SongOption);
	
	var _PlaylistCreator = __webpack_require__(/*! ./PlaylistCreator */ 406);
	
	var _PlaylistCreator2 = _interopRequireDefault(_PlaylistCreator);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _search = __webpack_require__(/*! ./css/search.scss */ 409);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Search = function Search(_ref) {
	    var state = _ref.state,
	        playlist = _ref.playlist,
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
	
	    var _onCreateNew = function _onCreateNew(playlistName, callbackSongId) {
	        actions.createNew(playlistName, callbackSongId);
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
	        }),
	        _react2.default.createElement(_PlaylistCreator2.default, { playlist: playlist, onCreateNew: actions.createPlaylist, onHideClick: actions.hidePopupAddToPlaylist, addSongToPlaylist: actions.addSongToPlaylist })
	    );
	};
	
	exports.default = (0, _withStyles2.default)(_search2.default)(Search);

/***/ },

/***/ 302:
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
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _search = __webpack_require__(/*! ./../actions/search */ 273);
	
	var _searchSuggess = __webpack_require__(/*! ./css/search-suggess.scss */ 390);
	
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

/***/ 390:
/*!************************************************!*\
  !*** ./src/components/css/search-suggess.scss ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./search-suggess.scss */ 391);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 391:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/search-suggess.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".search-suggess_root_1T1 {\n  position: fixed;\n  top: 50px;\n  width: 100%;\n  background: #fff;\n  padding: 10px 20px;\n  bottom: 40px;\n  left: 0;\n  overflow: scroll; }\n\n.search-suggess_item_3yI {\n  display: inline-block;\n  width: 100%;\n  padding: 5px 0; }\n\n.search-suggess_hideLink_2Bf {\n  position: fixed;\n  right: 10px;\n  font-size: 30px;\n  color: #4267b2;\n  top: 48px; }\n\n.search-suggess_link_3Jc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-decoration: none; }\n\n.search-suggess_link_3Jc img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 {\n    margin-left: 10px;\n    color: #333;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 span:first-child {\n      color: #333;\n      display: block;\n      text-decoration: none;\n      width: 100%;\n      font-size: 22px; }\n\n.search-suggess_link_3Jc .search-suggess_content_3q7 span:last-child {\n      color: #666;\n      text-decoration: none;\n      font-size: 18px; }\n\n.search-suggess_heading_2Q4 {\n  margin: 10px 0 5px 0;\n  font-size: 30px; }\n", ""]);
	
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

/***/ 392:
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

/***/ 393:
/*!****************************************************!*\
  !*** ./~/isomorphic-style-loader/lib/insertCss.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 394);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 396);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 401);
	
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

/***/ 394:
/*!***************************************************!*\
  !*** ./~/babel-runtime/core-js/json/stringify.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ 395), __esModule: true };

/***/ },

/***/ 395:
/*!************************************************!*\
  !*** ./~/core-js/library/fn/json/stringify.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(/*! ../../modules/_core */ 317)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 396:
/*!**************************************************!*\
  !*** ./~/babel-runtime/helpers/slicedToArray.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ 397);
	
	var _isIterable3 = _interopRequireDefault(_isIterable2);
	
	var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ 401);
	
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

/***/ 397:
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/is-iterable.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ 398), __esModule: true };

/***/ },

/***/ 398:
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/is-iterable.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 361);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 339);
	module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ 399);

/***/ },

/***/ 399:
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/core.is-iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 400)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 360)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 345);
	module.exports = __webpack_require__(/*! ./_core */ 317).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },

/***/ 400:
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/_classof.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./_cof */ 353)
	  , TAG = __webpack_require__(/*! ./_wks */ 360)('toStringTag')
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

/***/ 401:
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 402), __esModule: true };

/***/ },

/***/ 402:
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/web.dom.iterable */ 361);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 339);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 403);

/***/ },

/***/ 403:
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(/*! ./_an-object */ 322)
	  , get      = __webpack_require__(/*! ./core.get-iterator-method */ 404);
	module.exports = __webpack_require__(/*! ./_core */ 317).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },

/***/ 404:
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./_classof */ 400)
	  , ITERATOR  = __webpack_require__(/*! ./_wks */ 360)('iterator')
	  , Iterators = __webpack_require__(/*! ./_iterators */ 345);
	module.exports = __webpack_require__(/*! ./_core */ 317).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },

/***/ 405:
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
	                            props.onPlaySong(props.object.id);
	                        } },
	                    'Nghe b\xE2y gi\u1EDD'
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

/***/ 406:
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
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _style = __webpack_require__(/*! ./style.scss */ 407);
	
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
	                            playlist.list.length,
	                            ' b\xE0i h\xE1t'
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

/***/ 407:
/*!***************************************************!*\
  !*** ./src/components/PlaylistCreator/style.scss ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./style.scss */ 408);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 408:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/PlaylistCreator/style.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".style_root_2hJ {\n  position: fixed;\n  z-index: 999;\n  background: white;\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0; }\n\n.style_container_3-u {\n  padding: 20px 0; }\n\n.style_heading_1JA {\n  margin-bottom: 20px;\n  font-size: 30px;\n  padding: 0 20px; }\n\n.style_item_1nh {\n  color: #fff;\n  padding: 10px;\n  font-size: 23px;\n  font-weight: 400;\n  display: inline-block;\n  width: 100%;\n  line-height: 16px;\n  background: #4267b2;\n  border-top: 1px solid #5776b7;\n  border-bottom: 1px solid #264d9a;\n  text-decoration: none; }\n\n.style_item_1nh em {\n    color: #9E9E9E;\n    font-size: 16px;\n    display: block;\n    margin-top: 10px; }\n\n.style_hideLink_3vN {\n  position: absolute;\n  right: 10px;\n  font-size: 30px;\n  color: #4267b2; }\n\n.style_newForm_2Ce {\n  margin-top: 40px;\n  padding: 0 20px; }\n\n.style_newForm_2Ce span {\n    font-size: 24px; }\n\n.style_input_288 {\n  border: 0px;\n  background: #ffffff;\n  border: 1px solid #375ca8;\n  margin: 10px 0 0 0;\n  font-size: 22px;\n  font-weight: bold;\n  padding: 10px 10px;\n  text-align: center;\n  color: #424242;\n  width: 100%; }\n\n.style_submit_1uA {\n  width: 100%;\n  border: 0px;\n  font-size: 16px;\n  padding: 10px;\n  margin: 10px 0 0 0;\n  background: #4267b2;\n  color: #fff;\n  border: 1px solid #254c9c; }\n", ""]);
	
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

/***/ 409:
/*!****************************************!*\
  !*** ./src/components/css/search.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./search.scss */ 410);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 410:
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/search.scss ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".search_root_11s {\n  width: 100%;\n  background: #4267b2;\n  padding: 5px;\n  position: relative; }\n\n.search_form_3tJ {\n  position: relative; }\n\n.search_input_3Im {\n  border: 0;\n  padding: 8px;\n  font-size: 24px;\n  display: table-row-group;\n  width: 100%;\n  height: 40px; }\n\n.search_optionWrap_2vi {\n  position: fixed;\n  z-index: 999;\n  background: rgba(66, 103, 178, 0.04);\n  left: 0;\n  bottom: 0;\n  top: 0;\n  right: 0; }\n\n.search_optionWrap_2vi ul {\n    left: 20px;\n    right: 20px;\n    margin: auto;\n    list-style: none;\n    background: #fff;\n    border-radius: 5px;\n    top: 50%;\n    position: absolute;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    overflow: hidden; }\n\n.search_optionWrap_2vi li {\n    padding: 10px 5px;\n    text-align: center;\n    font-size: 20px;\n    background: #4267b2;\n    border-top: 1px solid #5776b7;\n    border-bottom: 1px solid #264d9a;\n    color: #fff; }\n\n.search_optionWrap_2vi li a {\n      text-decoration: none;\n      color: #fff; }\n", ""]);
	
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

/***/ 411:
/*!*****************************************!*\
  !*** ./src/containers/ContainerUser.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _user = __webpack_require__(/*! ./../actions/user */ 412);
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _UserDashboard = __webpack_require__(/*! ./../components/UserDashboard */ 899);
	
	var _UserDashboard2 = _interopRequireDefault(_UserDashboard);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        user: state.user
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            loginWithFacebook: _user.loginWithFacebook,
	            loginWithGoogle: _user.loginWithGoogle,
	            parseUserData: _user.parseUserData,
	            commitUserData: _user.commitUserData,
	            connectToDropbox: _user.connectToDropbox
	        }, dispatch)
	    };
	};
	
	var ContainerUser = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_UserDashboard2.default);
	exports.default = ContainerUser;

/***/ },

/***/ 412:
/*!*****************************!*\
  !*** ./src/actions/user.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.appenUserData = exports.commitUserData = exports.parseUserData = exports.loginWithFacebook = exports.loginWithGoogle = exports.connectToDropbox = undefined;
	
	var _FirebaseInstance = __webpack_require__(/*! ./../store/FirebaseInstance */ 922);
	
	var _FirebaseInstance2 = _interopRequireDefault(_FirebaseInstance);
	
	var _dropbox = __webpack_require__(/*! ./../store/dropbox */ 902);
	
	var _dropbox2 = _interopRequireDefault(_dropbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var parseParram = function parseParram(parramStr) {
		var parrams = {};
		parramStr.split('&').map(function (item) {
			var itemArr = item.split('=');
			parrams[itemArr[0]] = itemArr[1];
		});
		return parrams;
	};
	
	var connectToDropbox = exports.connectToDropbox = function connectToDropbox() {
		return function (dispatch) {
			var authUrl = _dropbox2.default.getAuthenticationUrl(window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/auth');
			var form = window.open(authUrl, true);
			window.connectSuccess = function (parramStr) {
				var parram = parseParram(parramStr);
				dispatch({
					type: 'CONNECT_DX_SUCCESS',
					accessToken: parram.access_token
				});
			};
		};
	};
	
	var loginWithGoogle = exports.loginWithGoogle = function loginWithGoogle() {
		return function (dispatch) {
			var provider = new _FirebaseInstance2.default.auth.GoogleAuthProvider();
			provider.addScope('profile');
			provider.addScope('email');
			_FirebaseInstance2.default.auth().signInWithPopup(provider).then(function (result) {
	
				// The signed-in user info.
				var user = {
					uid: result.user.uid,
					ggToken: result.credential.accessToken,
					name: result.user.displayName,
					email: result.user.email,
					displayName: result.user.displayName
				};
	
				dispatch({
					type: 'LOGIN_SOCIAL_SUCCESS',
					user: user
				});
			}).catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
				// ...
			});
		};
	};
	var loginWithFacebook = exports.loginWithFacebook = function loginWithFacebook() {
		return function (dispatch) {
			var provider = new _FirebaseInstance2.default.auth.FacebookAuthProvider();
			provider.addScope('email, user_photos');
			_FirebaseInstance2.default.auth().signInWithPopup(provider).then(function (result) {
				// The signed-in user info.
				var user = {
					uid: result.user.uid,
					fbToken: result.credential.accessToken,
					name: result.user.displayName,
					email: result.user.email,
					displayName: result.user.displayName
				};
	
				dispatch({
					type: 'LOGIN_SOCIAL_SUCCESS',
					user: user
				});
			}).catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				console.log(errorCode, errorMessage);
				// ...
			});
		};
	};
	
	var parseUserData = exports.parseUserData = function parseUserData(uid) {
		console.log('parse uid: ', uid);
		return function (dispatch) {
			var db = _FirebaseInstance2.default.database();
			db.ref('/users/' + uid).once('value').then(function (snap) {
				var userData = snap.val();
				dispatch({
					type: 'USERDATA_PARSED',
					userData: userData
				});
			});
		};
	};
	
	var commitUserData = exports.commitUserData = function commitUserData(uid, data, path) {
		console.log("commit data: ", data, uid);
	
		var db = _FirebaseInstance2.default.database();
		db.ref('/users/' + uid + '/' + path).set(data).then(function (res) {
			console.log(res);
		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
	};
	
	var appenUserData = exports.appenUserData = function appenUserData(uid, data, path) {
		console.log("commit data: ", data, uid);
	
		var db = _FirebaseInstance2.default.database();
		db.ref('/users/' + uid + '/' + path).push(data).then(function (res) {
			console.log(res);
		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode, errorMessage);
			// ...
		});
	};

/***/ },

/***/ 414:
/*!****************************************!*\
  !*** ./~/firebase/firebase-browser.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Firebase libraries for browser - npm package.
	 *
	 * Usage:
	 *
	 *   firebase = require('firebase');
	 */
	var firebase = __webpack_require__(/*! ./app */ 415);
	__webpack_require__(/*! ./auth */ 416);
	__webpack_require__(/*! ./database */ 417);
	__webpack_require__(/*! ./storage */ 418);
	__webpack_require__(/*! ./messaging */ 419);
	module.exports = firebase;


/***/ },

/***/ 415:
/*!***************************!*\
  !*** ./~/firebase/app.js ***!
  \***************************/
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var firebase = (function(){
	/*! @license Firebase v3.7.4
	    Build: 3.7.4-rc.1
	    Terms: https://firebase.google.com/terms/ */
	var firebase = null; (function() { var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,l=function(){l=function(){};k.Symbol||(k.Symbol=ba)},ca=0,ba=function(a){return"jscomp_symbol_"+(a||"")+ca++},p=function(){l();var a=k.Symbol.iterator;a||(a=k.Symbol.iterator=
	k.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return m(this)}});p=function(){}},m=function(a){var b=0;return da(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},da=function(a){p();a={next:a};a[k.Symbol.iterator]=function(){return this};return a},r=this,t=function(){},u=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);
	if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},v=function(a){return"function"==u(a)},ea=function(a,
	b,c){return a.call.apply(a.bind,arguments)},fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},w=function(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return w.apply(null,arguments)},x=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},y=function(a,b){function c(){}c.prototype=b.prototype;a.ha=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,h){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var A;A="undefined"!==typeof window?window:"undefined"!==typeof self?self:global;
	var __extends=function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)},__assign=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++){b=arguments[c];for(var e in b)Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e])}return a},__rest=function(a,b){var c={},d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"===typeof Object.getOwnPropertySymbols){var e=
	0;for(d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&(c[d[e]]=a[d[e]])}return c},__decorate=function(a,b,c,d){var e=arguments.length,h=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;g=A.Reflect;if("object"===typeof g&&"function"===typeof g.decorate)h=g.decorate(a,b,c,d);else for(var f=a.length-1;0<=f;f--)if(g=a[f])h=(3>e?g(h):3<e?g(b,c,h):g(b,c))||h;return 3<e&&h&&Object.defineProperty(b,c,h),h},__metadata=function(a,b){var c=A.Reflect;if("object"===typeof c&&"function"===
	typeof c.metadata)return c.metadata(a,b)},__param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,h){function g(a){try{q(d.next(a))}catch(n){h(n)}}function f(a){try{q(d["throw"](a))}catch(n){h(n)}}function q(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(g,f)}q((d=d.apply(a,b)).next())})},__generator=function(a,b){function c(a){return function(b){return d([a,b])}}function d(c){if(h)throw new TypeError("Generator is already executing.");
	for(;e;)try{if(h=1,g&&(f=g[c[0]&2?"return":c[0]?"throw":"next"])&&!(f=f.call(g,c[1])).done)return f;if(g=0,f)c=[0,f.value];switch(c[0]){case 0:case 1:f=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++;g=c[1];c=[0];continue;case 7:c=e.G.pop();e.I.pop();continue;default:if(!(f=e.I,f=0<f.length&&f[f.length-1])&&(6===c[0]||2===c[0])){e=0;continue}if(3===c[0]&&(!f||c[1]>f[0]&&c[1]<f[3]))e.label=c[1];else if(6===c[0]&&e.label<f[1])e.label=f[1],f=c;else if(f&&e.label<f[2])e.label=f[2],
	e.G.push(c);else{f[2]&&e.G.pop();e.I.pop();continue}}c=b.call(a,e)}catch(z){c=[6,z],g=0}finally{h=f=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}var e={label:0,ga:function(){if(f[0]&1)throw f[1];return f[1]},I:[],G:[]},h,g,f;return{next:c(0),"throw":c(1),"return":c(2)}};
	"undefined"!==typeof A.S&&A.S||(A.__extends=__extends,A.__assign=__assign,A.__rest=__rest,A.__extends=__extends,A.__decorate=__decorate,A.__metadata=__metadata,A.__param=__param,A.__awaiter=__awaiter,A.__generator=__generator);var B=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,B);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};y(B,Error);B.prototype.name="CustomError";var ga=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var C=function(a,b){b.unshift(a);B.call(this,ga.apply(null,b));b.shift()};y(C,B);C.prototype.name="AssertionError";var ha=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),h=d;else a&&(e+=": "+a,h=b);throw new C(""+e,h||[]);},D=function(a,b,c){a||ha("",null,b,Array.prototype.slice.call(arguments,2))},E=function(a,b,c){v(a)||ha("Expected function but got %s: %s.",[u(a),a],b,Array.prototype.slice.call(arguments,2))};var F=function(a,b,c){this.Y=c;this.T=a;this.Z=b;this.s=0;this.o=null};F.prototype.get=function(){var a;0<this.s?(this.s--,a=this.o,this.o=a.next,a.next=null):a=this.T();return a};F.prototype.put=function(a){this.Z(a);this.s<this.Y&&(this.s++,a.next=this.o,this.o=a)};var G;a:{var ia=r.navigator;if(ia){var ja=ia.userAgent;if(ja){G=ja;break a}}G=""};var ka=function(a){r.setTimeout(function(){throw a;},0)},H,la=function(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==G.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+
	"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&-1==G.indexOf("Trident")&&-1==G.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.J;c.J=null;a()}};return function(a){d.next={J:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in
	document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){r.setTimeout(a,0)}};var I=function(){this.v=this.g=null},ma=new F(function(){return new J},function(a){a.reset()},100);I.prototype.add=function(a,b){var c=ma.get();c.set(a,b);this.v?this.v.next=c:(D(!this.g),this.g=c);this.v=c};I.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.v=null),a.next=null);return a};var J=function(){this.next=this.scope=this.B=null};J.prototype.set=function(a,b){this.B=a;this.scope=b;this.next=null};
	J.prototype.reset=function(){this.next=this.scope=this.B=null};var M=function(a,b){K||na();L||(K(),L=!0);oa.add(a,b)},K,na=function(){if(-1!=String(r.Promise).indexOf("[native code]")){var a=r.Promise.resolve(void 0);K=function(){a.then(pa)}}else K=function(){var a=pa;!v(r.setImmediate)||r.Window&&r.Window.prototype&&-1==G.indexOf("Edge")&&r.Window.prototype.setImmediate==r.setImmediate?(H||(H=la()),H(a)):r.setImmediate(a)}},L=!1,oa=new I,pa=function(){for(var a;a=oa.remove();){try{a.B.call(a.scope)}catch(b){ka(b)}ma.put(a)}L=!1};var O=function(a,b){this.b=0;this.R=void 0;this.j=this.h=this.u=null;this.m=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){N(c,2,a)},function(a){try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}N(c,3,a)})}catch(d){N(this,3,d)}},qa=function(){this.next=this.context=this.i=this.f=this.child=null;this.w=!1};qa.prototype.reset=function(){this.context=this.i=this.f=this.child=null;this.w=!1};
	var ra=new F(function(){return new qa},function(a){a.reset()},100),sa=function(a,b,c){var d=ra.get();d.f=a;d.i=b;d.context=c;return d},ua=function(a,b,c){ta(a,b,c,null)||M(x(b,a))};O.prototype.then=function(a,b,c){null!=a&&E(a,"opt_onFulfilled should be a function.");null!=b&&E(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return va(this,v(a)?a:null,v(b)?b:null,c)};O.prototype.then=O.prototype.then;O.prototype.$goog_Thenable=!0;
	O.prototype.ba=function(a,b){return va(this,null,a,b)};var xa=function(a,b){a.h||2!=a.b&&3!=a.b||wa(a);D(null!=b.f);a.j?a.j.next=b:a.h=b;a.j=b},va=function(a,b,c,d){var e=sa(null,null,null);e.child=new O(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(z){g(z)}}:a;e.i=c?function(b){try{var e=c.call(d,b);a(e)}catch(z){g(z)}}:g});e.child.u=a;xa(a,e);return e.child};O.prototype.da=function(a){D(1==this.b);this.b=0;N(this,2,a)};
	O.prototype.ea=function(a){D(1==this.b);this.b=0;N(this,3,a)};
	var N=function(a,b,c){0==a.b&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.b=1,ta(c,a.da,a.ea,a)||(a.R=c,a.b=b,a.u=null,wa(a),3!=b||ya(a,c)))},ta=function(a,b,c,d){if(a instanceof O)return null!=b&&E(b,"opt_onFulfilled should be a function."),null!=c&&E(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),xa(a,sa(b||t,c||null,d)),!0;var e;if(a)try{e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),
	!0;e=typeof a;if("object"==e&&null!=a||"function"==e)try{var h=a.then;if(v(h))return za(a,h,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1},za=function(a,b,c,d,e){var h=!1,g=function(a){h||(h=!0,c.call(e,a))},f=function(a){h||(h=!0,d.call(e,a))};try{b.call(a,g,f)}catch(q){f(q)}},wa=function(a){a.A||(a.A=!0,M(a.V,a))},Aa=function(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);null!=b&&D(null!=b.f);return b};
	O.prototype.V=function(){for(var a;a=Aa(this);){var b=this.b,c=this.R;if(3==b&&a.i&&!a.w){var d;for(d=this;d&&d.m;d=d.u)d.m=!1}if(a.child)a.child.u=null,Ba(a,b,c);else try{a.w?a.f.call(a.context):Ba(a,b,c)}catch(e){Ca.call(null,e)}ra.put(a)}this.A=!1};var Ba=function(a,b,c){2==b?a.f.call(a.context,c):a.i&&a.i.call(a.context,c)},ya=function(a,b){a.m=!0;M(function(){a.m&&Ca.call(null,b)})},Ca=ka;function P(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=P(a[c],b[c]));return a};O.all=function(a){return new O(function(b,c){var d=a.length,e=[];if(d)for(var h=function(a,c){d--;e[a]=c;0==d&&b(e)},g=function(a){c(a)},f=0,q;f<a.length;f++)q=a[f],ua(q,x(h,f),g);else b(e)})};O.resolve=function(a){if(a instanceof O)return a;var b=new O(t);N(b,2,a);return b};O.reject=function(a){return new O(function(b,c){c(a)})};O.prototype["catch"]=O.prototype.ba;var Q=O;"undefined"!==typeof Promise&&(Q=Promise);var Da=Q;function Ea(a,b){a=new R(a,b);return a.subscribe.bind(a)}var R=function(a,b){var c=this;this.a=[];this.P=0;this.task=Da.resolve();this.l=!1;this.F=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};R.prototype.next=function(a){S(this,function(b){b.next(a)})};R.prototype.error=function(a){S(this,function(b){b.error(a)});this.close(a)};R.prototype.complete=function(){S(this,function(a){a.complete()});this.close()};
	R.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=Fa(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=T);void 0===e.error&&(e.error=T);void 0===e.complete&&(e.complete=T);a=this.fa.bind(this,this.a.length);this.l&&this.task.then(function(){try{d.K?e.error(d.K):e.complete()}catch(h){}});this.a.push(e);return a};
	R.prototype.fa=function(a){void 0!==this.a&&void 0!==this.a[a]&&(delete this.a[a],--this.P,0===this.P&&void 0!==this.F&&this.F(this))};var S=function(a,b){if(!a.l)for(var c=0;c<a.a.length;c++)Ga(a,c,b)},Ga=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){"undefined"!==typeof console&&console.error&&console.error(d)}})};R.prototype.close=function(a){var b=this;this.l||(this.l=!0,void 0!==a&&(this.K=a),this.task.then(function(){b.a=void 0;b.F=void 0}))};
	function Fa(a){if("object"!==typeof a||null===a)return!1;var b;b=["next","error","complete"];p();var c=b[Symbol.iterator];b=c?c.call(b):m(b);for(c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function T(){};var Ha=Error.captureStackTrace,V=function(a,b){this.code=a;this.message=b;if(Ha)Ha(this,U.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};V.prototype=Object.create(Error.prototype);V.prototype.constructor=V;V.prototype.name="FirebaseError";var U=function(a,b,c){this.$=a;this.aa=b;this.U=c;this.pattern=/\{\$([^}]+)}/g};
	U.prototype.create=function(a,b){void 0===b&&(b={});var c=this.U[a];a=this.$+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){a=b[c];return void 0!==a?a.toString():"<"+c+"?>"}),c=this.aa+": "+c+" ("+a+").",c=new V(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var W=Q,X=function(a,b,c){var d=this;this.M=c;this.N=!1;this.c={};this.D=b;this.H=P(void 0,a);a="serviceAccount"in this.H;("credential"in this.H||a)&&"undefined"!==typeof console&&console.log("The '"+(a?"serviceAccount":"credential")+"' property specified in the first argument to initializeApp() is deprecated and will be removed in the next major version. You should instead use the 'firebase-admin' package. See https://firebase.google.com/docs/admin/setup for details on how to get started.");Object.keys(c.INTERNAL.factories).forEach(function(a){var b=
	c.INTERNAL.useAsService(d,a);null!==b&&(b=d.X.bind(d,b),d[a]=b)})};X.prototype.delete=function(){var a=this;return(new W(function(b){Y(a);b()})).then(function(){a.M.INTERNAL.removeApp(a.D);var b=[];Object.keys(a.c).forEach(function(c){Object.keys(a.c[c]).forEach(function(d){b.push(a.c[c][d])})});return W.all(b.map(function(a){return a.INTERNAL.delete()}))}).then(function(){a.N=!0;a.c={}})};
	X.prototype.X=function(a,b){Y(this);"undefined"===typeof this.c[a]&&(this.c[a]={});var c=b||"[DEFAULT]";return"undefined"===typeof this.c[a][c]?(b=this.M.INTERNAL.factories[a](this,this.W.bind(this),b),this.c[a][c]=b):this.c[a][c]};X.prototype.W=function(a){P(this,a)};var Y=function(a){a.N&&Z("app-deleted",{name:a.D})};k.Object.defineProperties(X.prototype,{name:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.D}},options:{configurable:!0,enumerable:!0,get:function(){Y(this);return this.H}}});
	X.prototype.name&&X.prototype.options||X.prototype.delete||console.log("dc");
	function Ia(){function a(a){a=a||"[DEFAULT]";var b=d[a];void 0===b&&Z("no-app",{name:a});return b}function b(a,b){Object.keys(e).forEach(function(d){d=c(a,d);if(null!==d&&h[d])h[d](b,a)})}function c(a,b){if("serverAuth"===b)return null;var c=b;a=a.options;"auth"===b&&(a.serviceAccount||a.credential)&&(c="serverAuth","serverAuth"in e||Z("sa-not-supported"));return c}var d={},e={},h={},g={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||Z("bad-app-name",
	{name:c+""});void 0!==d[c]&&Z("duplicate-app",{name:c});a=new X(a,c,g);d[c]=a;b(a,"create");void 0!=a.INTERNAL&&void 0!=a.INTERNAL.getToken||P(a,{INTERNAL:{getUid:function(){return null},getToken:function(){return W.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});return a},app:a,apps:null,Promise:W,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,c,d,n,Ja){e[b]&&Z("duplicate-service",{name:b});e[b]=Ja?c:function(a,b){return c(a,b,"[DEFAULT]")};n&&(h[b]=
	n);n=function(c){void 0===c&&(c=a());"function"!==typeof c[b]&&Z("invalid-app-argument",{name:b});return c[b]()};void 0!==d&&P(n,d);return g[b]=n},createFirebaseNamespace:Ia,extendNamespace:function(a){P(g,a)},createSubscribe:Ea,ErrorFactory:U,removeApp:function(a){b(d[a],"delete");delete d[a]},factories:e,useAsService:c,Promise:O,deepExtend:P}};g["default"]=g;Object.defineProperty(g,"apps",{get:function(){return Object.keys(d).map(function(a){return d[a]})}});a.App=X;return g}
	function Z(a,b){throw Ka.create(a,b);}
	var Ka=new U("app","Firebase",{"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."});"undefined"!==typeof firebase&&(firebase=Ia()); }).call(this);
	firebase.SDK_VERSION = "3.7.4";
	return firebase;}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
	module.exports = firebase;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 416:
/*!****************************!*\
  !*** ./~/firebase/auth.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(/*! ./app */ 415);
	(function(){
	/*! @license Firebase v3.7.4
	    Build: 3.7.4-rc.1
	    Terms: https://firebase.google.com/terms/ */
	(function(){var h,aa=aa||{},l=this,ba=function(){},ca=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
	!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},da=function(a){return null===a},ea=function(a){return"array"==ca(a)},fa=function(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length},m=function(a){return"string"==typeof a},ga=function(a){return"number"==typeof a},p=function(a){return"function"==ca(a)},ha=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,
	b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},q=function(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,
	1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},r=function(a,b){function c(){}c.prototype=b.prototype;a.qd=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.If=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var t=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,t);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};r(t,Error);t.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,ta=/\x00/g,ua=/[\x00&<>"']/,u=function(a,b){return-1!=a.indexOf(b)},va=function(a,b){return a<b?-1:a>b?1:0};var wa=function(a,b){b.unshift(a);t.call(this,ma.apply(null,b));b.shift()};r(wa,t);wa.prototype.name="AssertionError";
	var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new wa(""+e,f||[]);},v=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){ga(a)||xa("Expected number but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c){m(a)||xa("Expected string but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,
	2))},Ba=function(a,b,c){p(a)||xa("Expected function but got %s: %s.",[ca(a),a],b,Array.prototype.slice.call(arguments,2))};var Ca=Array.prototype.indexOf?function(a,b,c){v(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(m(a))return m(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){v(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=function(a,b){for(var c=m(a)?
	a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Ea=Array.prototype.map?function(a,b,c){v(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=m(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Fa=Array.prototype.some?function(a,b,c){v(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=m(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
	Ha=function(a){var b;a:{b=Ga;for(var c=a.length,d=m(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:m(a)?a.charAt(b):a[b]},Ia=function(a,b){return 0<=Ca(a,b)},Ka=function(a,b){b=Ca(a,b);var c;(c=0<=b)&&Ja(a,b);return c},Ja=function(a,b){v(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},La=function(a,b){var c=0;Da(a,function(d,e){b.call(void 0,d,e,a)&&Ja(a,e)&&c++})},Ma=function(a){return Array.prototype.concat.apply([],arguments)},
	Na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Oa=function(a){return Ea(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var Pa;a:{var Qa=l.navigator;if(Qa){var Ra=Qa.userAgent;if(Ra){Pa=Ra;break a}}Pa=""}var x=function(a){return u(Pa,a)};var Sa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ta=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Ua=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Va=function(a){for(var b in a)return!1;return!0},Wa=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},Xa=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
	Za=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ya.length;f++)c=Ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var $a=function(a){$a[" "](a);return a};$a[" "]=ba;var cb=function(a,b){var c=bb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var db=x("Opera"),y=x("Trident")||x("MSIE"),eb=x("Edge"),fb=eb||y,gb=x("Gecko")&&!(u(Pa.toLowerCase(),"webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),hb=u(Pa.toLowerCase(),"webkit")&&!x("Edge"),ib=function(){var a=l.document;return a?a.documentMode:void 0},jb;
	a:{var kb="",lb=function(){var a=Pa;if(gb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(eb)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hb)return/WebKit\/(\S+)/.exec(a);if(db)return/(?:Version)[ \/]?(\S+)/.exec(a)}();lb&&(kb=lb?lb[1]:"");if(y){var mb=ib();if(null!=mb&&mb>parseFloat(kb)){jb=String(mb);break a}}jb=kb}
	var nb=jb,bb={},z=function(a){return cb(a,function(){for(var b=0,c=na(String(nb)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=va(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||va(0==g[2].length,0==k[2].length)||va(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},ob;var pb=l.document;
	ob=pb&&y?ib()||("CSS1Compat"==pb.compatMode?parseInt(nb,10):5):void 0;var qb=null,rb=null,tb=function(a){var b="";sb(a,function(a){b+=String.fromCharCode(a)});return b},sb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=rb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ub();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},ub=function(){if(!qb){qb={};rb={};for(var a=0;65>a;a++)qb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
	rb[qb[a]]=a,62<=a&&(rb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var vb=function(){this.Ba=-1};var yb=function(a,b){this.Ba=64;this.Yb=l.Uint8Array?new Uint8Array(this.Ba):Array(this.Ba);this.Bc=this.cb=0;this.h=[];this.$e=a;this.Nd=b;this.Bf=l.Int32Array?new Int32Array(64):Array(64);void 0!==wb||(wb=l.Int32Array?new Int32Array(xb):xb);this.reset()},wb;r(yb,vb);for(var zb=[],Ab=0;63>Ab;Ab++)zb[Ab]=0;var Bb=Ma(128,zb);yb.prototype.reset=function(){this.Bc=this.cb=0;this.h=l.Int32Array?new Int32Array(this.Nd):Na(this.Nd)};
	var Cb=function(a){var b=a.Yb;v(b.length==a.Ba);for(var c=a.Bf,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){var e=c[b-15]|0,d=c[b-2]|0,f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}for(var d=a.h[0]|0,e=a.h[1]|0,k=a.h[2]|0,n=a.h[3]|0,B=a.h[4]|0,ab=a.h[5]|0,Kb=a.h[6]|0,f=a.h[7]|0,b=0;64>b;b++)var sh=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&k^e&k)|0,g=B&ab^~B&Kb,f=f+((B>>>6|
	B<<26)^(B>>>11|B<<21)^(B>>>25|B<<7))|0,g=g+(wb[b]|0)|0,g=f+(g+(c[b]|0)|0)|0,f=Kb,Kb=ab,ab=B,B=n+g|0,n=k,k=e,e=d,d=g+sh|0;a.h[0]=a.h[0]+d|0;a.h[1]=a.h[1]+e|0;a.h[2]=a.h[2]+k|0;a.h[3]=a.h[3]+n|0;a.h[4]=a.h[4]+B|0;a.h[5]=a.h[5]+ab|0;a.h[6]=a.h[6]+Kb|0;a.h[7]=a.h[7]+f|0};
	yb.prototype.update=function(a,b){void 0===b&&(b=a.length);var c=0,d=this.cb;if(m(a))for(;c<b;)this.Yb[d++]=a.charCodeAt(c++),d==this.Ba&&(Cb(this),d=0);else if(fa(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.Yb[d++]=e;d==this.Ba&&(Cb(this),d=0)}else throw Error("message must be string or array");this.cb=d;this.Bc+=b};
	yb.prototype.digest=function(){var a=[],b=8*this.Bc;56>this.cb?this.update(Bb,56-this.cb):this.update(Bb,this.Ba-(this.cb-56));for(var c=63;56<=c;c--)this.Yb[c]=b&255,b/=256;Cb(this);for(c=b=0;c<this.$e;c++)for(var d=24;0<=d;d-=8)a[b++]=this.h[c]>>d&255;return a};
	var xb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
	4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Eb=function(){yb.call(this,8,Db)};r(Eb,yb);var Db=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Fb=function(){this.Da=this.Da;this.pc=this.pc};Fb.prototype.Da=!1;Fb.prototype.isDisposed=function(){return this.Da};Fb.prototype.Za=function(){if(this.pc)for(;this.pc.length;)this.pc.shift()()};var Gb=!y||9<=Number(ob),Hb=y&&!z("9");!hb||z("528");gb&&z("1.9b")||y&&z("8")||db&&z("9.5")||hb&&z("528");gb&&!z("8")||y&&z("9");var Ib=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.jb=!1;this.Yd=!0};Ib.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Yd=!1};var Jb=function(a,b){Ib.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.$a=this.state=null;a&&this.init(a,b)};r(Jb,Ib);
	Jb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(gb){var e;a:{try{$a(b.nodeName);e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=hb||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=hb||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:
	a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.$a=
	a;a.defaultPrevented&&this.preventDefault()};Jb.prototype.preventDefault=function(){Jb.qd.preventDefault.call(this);var a=this.$a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Hb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Jb.prototype.Fe=function(){return this.$a};var Lb="closure_listenable_"+(1E6*Math.random()|0),Mb=0;var Nb=function(a,b,c,d,e){this.listener=a;this.tc=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++Mb;this.nb=this.Xb=!1},Ob=function(a){a.nb=!0;a.listener=null;a.tc=null;a.src=null;a.fc=null};var Pb=function(a){this.src=a;this.F={};this.Tb=0};Pb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.F[f];a||(a=this.F[f]=[],this.Tb++);var g=Qb(a,b,d,e);-1<g?(b=a[g],c||(b.Xb=!1)):(b=new Nb(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};Pb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.F))return!1;var e=this.F[a];b=Qb(e,b,c,d);return-1<b?(Ob(e[b]),Ja(e,b),0==e.length&&(delete this.F[a],this.Tb--),!0):!1};
	var Rb=function(a,b){var c=b.type;c in a.F&&Ka(a.F[c],b)&&(Ob(b),0==a.F[c].length&&(delete a.F[c],a.Tb--))};Pb.prototype.Pc=function(a,b,c,d){a=this.F[a.toString()];var e=-1;a&&(e=Qb(a,b,c,d));return-1<e?a[e]:null};var Qb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.nb&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1};var Sb="closure_lm_"+(1E6*Math.random()|0),Tb={},Ub=0,Vb=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)Vb(a,b[f],c,d,e);else c=Wb(c),a&&a[Lb]?a.listen(b,c,d,e):Xb(a,b,c,!1,d,e)},Xb=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=Yb(a);k||(a[Sb]=k=new Pb(a));c=k.add(b,c,d,e,f);if(!c.tc){d=Zb();c.tc=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent($b(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");
	Ub++}},Zb=function(){var a=ac,b=Gb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},bc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)bc(a,b[f],c,d,e);else c=Wb(c),a&&a[Lb]?cc(a,b,c,d,e):Xb(a,b,c,!0,d,e)},dc=function(a,b,c,d,e){if(ea(b))for(var f=0;f<b.length;f++)dc(a,b[f],c,d,e);else c=Wb(c),a&&a[Lb]?a.da.remove(String(b),c,d,e):a&&(a=Yb(a))&&(b=a.Pc(b,c,!!d,e))&&ec(b)},ec=function(a){if(!ga(a)&&a&&!a.nb){var b=a.src;if(b&&
	b[Lb])Rb(b.da,a);else{var c=a.type,d=a.tc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent($b(c),d);Ub--;(c=Yb(b))?(Rb(c,a),0==c.Tb&&(c.src=null,b[Sb]=null)):Ob(a)}}},$b=function(a){return a in Tb?Tb[a]:Tb[a]="on"+a},gc=function(a,b,c,d){var e=!0;if(a=Yb(a))if(b=a.F[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.nb&&(f=fc(f,d),e=e&&!1!==f)}return e},fc=function(a,b){var c=a.listener,d=a.fc||a.src;a.Xb&&ec(a);return c.call(d,
	b)},ac=function(a,b){if(a.nb)return!0;if(!Gb){if(!b)a:{b=["window","event"];for(var c=l,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Jb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.currentTarget;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;!b.jb&&0<=e;e--){b.currentTarget=d[e];var f=gc(d[e],a,!0,b),c=c&&f}for(e=0;!b.jb&&e<d.length;e++)b.currentTarget=
	d[e],f=gc(d[e],a,!1,b),c=c&&f}return c}return fc(a,new Jb(b,this))},Yb=function(a){a=a[Sb];return a instanceof Pb?a:null},hc="__closure_events_fn_"+(1E9*Math.random()>>>0),Wb=function(a){v(a,"Listener can not be null.");if(p(a))return a;v(a.handleEvent,"An object listener must have handleEvent method.");a[hc]||(a[hc]=function(b){return a.handleEvent(b)});return a[hc]};var ic=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var kc=function(){this.yc="";this.oe=jc};kc.prototype.jc=!0;kc.prototype.dc=function(){return this.yc};kc.prototype.toString=function(){return"Const{"+this.yc+"}"};var lc=function(a){if(a instanceof kc&&a.constructor===kc&&a.oe===jc)return a.yc;ya("expected object of type Const, got '"+a+"'");return"type_error:Const"},jc={},mc=function(a){var b=new kc;b.yc=a;return b};mc("");var oc=function(){this.sc="";this.pe=nc};oc.prototype.jc=!0;oc.prototype.dc=function(){return this.sc};oc.prototype.toString=function(){return"TrustedResourceUrl{"+this.sc+"}"};var nc={};var qc=function(){this.na="";this.ne=pc};qc.prototype.jc=!0;qc.prototype.dc=function(){return this.na};qc.prototype.toString=function(){return"SafeUrl{"+this.na+"}"};
	var rc=function(a){if(a instanceof qc&&a.constructor===qc&&a.ne===pc)return a.na;ya("expected object of type SafeUrl, got '"+a+"' of type "+ca(a));return"type_error:SafeUrl"},sc=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,uc=function(a){if(a instanceof qc)return a;a=a.jc?a.dc():String(a);sc.test(a)||(a="about:invalid#zClosurez");return tc(a)},pc={},tc=function(a){var b=new qc;b.na=a;return b};tc("about:blank");var xc=function(a){var b=[];vc(new wc,a,b);return b.join("")},wc=function(){this.uc=void 0},vc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],vc(a,a.uc?a.uc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
	yc(d,c),c.push(":"),vc(a,a.uc?a.uc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":yc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},zc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ac=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
	yc=function(a,b){b.push('"',a.replace(Ac,function(a){var b=zc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),zc[a]=b);return b}),'"')};var Bc=function(){};Bc.prototype.ud=null;var Cc=function(a){return a.ud||(a.ud=a.Vc())};var Dc,Ec=function(){};r(Ec,Bc);Ec.prototype.Zb=function(){var a=Fc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Ec.prototype.Vc=function(){var a={};Fc(this)&&(a[0]=!0,a[1]=!0);return a};
	var Fc=function(a){if(!a.Md&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Md=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Md};Dc=new Ec;var Gc=function(){};r(Gc,Bc);Gc.prototype.Zb=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Hc;throw Error("Unsupported browser");};Gc.prototype.Vc=function(){return{}};
	var Hc=function(){this.sa=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.sa.onload=q(this.He,this);this.sa.onerror=q(this.Jd,this);this.sa.onprogress=q(this.Ie,this);this.sa.ontimeout=q(this.Je,this)};h=Hc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.sa.open(a,b)};
	h.send=function(a){if(a)if("string"==typeof a)this.sa.send(a);else throw Error("Only string data is supported");else this.sa.send()};h.abort=function(){this.sa.abort()};h.setRequestHeader=function(){};h.He=function(){this.status=200;this.responseText=this.sa.responseText;Ic(this,4)};h.Jd=function(){this.status=500;this.responseText="";Ic(this,4)};h.Je=function(){this.Jd()};h.Ie=function(){this.status=200;Ic(this,1)};var Ic=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};var Jc=function(a,b,c){this.Ue=c;this.we=a;this.kf=b;this.oc=0;this.gc=null};Jc.prototype.get=function(){var a;0<this.oc?(this.oc--,a=this.gc,this.gc=a.next,a.next=null):a=this.we();return a};Jc.prototype.put=function(a){this.kf(a);this.oc<this.Ue&&(this.oc++,a.next=this.gc,this.gc=a)};var Kc=function(a){l.setTimeout(function(){throw a;},0)},Lc,Mc=function(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
	a=q(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.xd;c.xd=null;a()}};return function(a){d.next={xd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
	function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};var Nc=function(){this.Ec=this.Ua=null},Pc=new Jc(function(){return new Oc},function(a){a.reset()},100);Nc.prototype.add=function(a,b){var c=Pc.get();c.set(a,b);this.Ec?this.Ec.next=c:(v(!this.Ua),this.Ua=c);this.Ec=c};Nc.prototype.remove=function(){var a=null;this.Ua&&(a=this.Ua,this.Ua=this.Ua.next,this.Ua||(this.Ec=null),a.next=null);return a};var Oc=function(){this.next=this.scope=this.Oc=null};Oc.prototype.set=function(a,b){this.Oc=a;this.scope=b;this.next=null};
	Oc.prototype.reset=function(){this.next=this.scope=this.Oc=null};var Uc=function(a,b){Qc||Rc();Sc||(Qc(),Sc=!0);Tc.add(a,b)},Qc,Rc=function(){if(-1!=String(l.Promise).indexOf("[native code]")){var a=l.Promise.resolve(void 0);Qc=function(){a.then(Vc)}}else Qc=function(){var a=Vc;!p(l.setImmediate)||l.Window&&l.Window.prototype&&!x("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Lc||(Lc=Mc()),Lc(a)):l.setImmediate(a)}},Sc=!1,Tc=new Nc,Vc=function(){for(var a;a=Tc.remove();){try{a.Oc.call(a.scope)}catch(b){Kc(b)}Pc.put(a)}Sc=!1};!gb&&!y||y&&9<=Number(ob)||gb&&z("1.9.1");y&&z("9");var Xc=function(){this.na="";this.me=Wc};Xc.prototype.jc=!0;Xc.prototype.dc=function(){return this.na};Xc.prototype.toString=function(){return"SafeHtml{"+this.na+"}"};var Yc=function(a){if(a instanceof Xc&&a.constructor===Xc&&a.me===Wc)return a.na;ya("expected object of type SafeHtml, got '"+a+"' of type "+ca(a));return"type_error:SafeHtml"},Wc={};Xc.prototype.Qe=function(a){this.na=a;return this};var $c=function(a,b){Sa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Zc.hasOwnProperty(d)?a.setAttribute(Zc[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},Zc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};var ad=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},bd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var A=function(a,b){this.M=0;this.pa=void 0;this.Xa=this.la=this.s=null;this.ec=this.Nc=!1;if(a!=ba)try{var c=this;a.call(b,function(a){cd(c,2,a)},function(a){if(!(a instanceof dd))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}cd(c,3,a)})}catch(d){cd(this,3,d)}},ed=function(){this.next=this.context=this.fb=this.La=this.child=null;this.ub=!1};ed.prototype.reset=function(){this.context=this.fb=this.La=this.child=null;this.ub=!1};
	var fd=new Jc(function(){return new ed},function(a){a.reset()},100),gd=function(a,b,c){var d=fd.get();d.La=a;d.fb=b;d.context=c;return d},C=function(a){if(a instanceof A)return a;var b=new A(ba);cd(b,2,a);return b},D=function(a){return new A(function(b,c){c(a)})},id=function(a,b,c){hd(a,b,c,null)||Uc(ka(b,a))},jd=function(a){return new A(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{De:!0,value:f}:{De:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],id(g,ka(e,f,!0),
	ka(e,f,!1));else b(d)})};A.prototype.then=function(a,b,c){null!=a&&Ba(a,"opt_onFulfilled should be a function.");null!=b&&Ba(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return kd(this,p(a)?a:null,p(b)?b:null,c)};ad(A);var md=function(a,b){b=gd(b,b,void 0);b.ub=!0;ld(a,b);return a};A.prototype.f=function(a,b){return kd(this,null,a,b)};A.prototype.cancel=function(a){0==this.M&&Uc(function(){var b=new dd(a);nd(this,b)},this)};
	var nd=function(a,b){if(0==a.M)if(a.s){var c=a.s;if(c.la){for(var d=0,e=null,f=null,g=c.la;g&&(g.ub||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.M&&1==d?nd(c,b):(f?(d=f,v(c.la),v(null!=d),d.next==c.Xa&&(c.Xa=d),d.next=d.next.next):od(c),pd(c,e,3,b)))}a.s=null}else cd(a,3,b)},ld=function(a,b){a.la||2!=a.M&&3!=a.M||qd(a);v(null!=b.La);a.Xa?a.Xa.next=b:a.la=b;a.Xa=b},kd=function(a,b,c,d){var e=gd(null,null,null);e.child=new A(function(a,g){e.La=b?function(c){try{var e=b.call(d,c);a(e)}catch(B){g(B)}}:
	a;e.fb=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof dd?g(b):a(e)}catch(B){g(B)}}:g});e.child.s=a;ld(a,e);return e.child};A.prototype.yf=function(a){v(1==this.M);this.M=0;cd(this,2,a)};A.prototype.zf=function(a){v(1==this.M);this.M=0;cd(this,3,a)};
	var cd=function(a,b,c){0==a.M&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.M=1,hd(c,a.yf,a.zf,a)||(a.pa=c,a.M=b,a.s=null,qd(a),3!=b||c instanceof dd||rd(a,c)))},hd=function(a,b,c,d){if(a instanceof A)return null!=b&&Ba(b,"opt_onFulfilled should be a function."),null!=c&&Ba(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),ld(a,gd(b||ba,c||null,d)),!0;if(bd(a))return a.then(b,c,d),!0;if(ha(a))try{var e=a.then;if(p(e))return sd(a,
	e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},sd=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},k=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,k)}catch(n){k(n)}},qd=function(a){a.Nc||(a.Nc=!0,Uc(a.ze,a))},od=function(a){var b=null;a.la&&(b=a.la,a.la=b.next,b.next=null);a.la||(a.Xa=null);null!=b&&v(null!=b.La);return b};A.prototype.ze=function(){for(var a;a=od(this);)pd(this,a,this.M,this.pa);this.Nc=!1};
	var pd=function(a,b,c,d){if(3==c&&b.fb&&!b.ub)for(;a&&a.ec;a=a.s)a.ec=!1;if(b.child)b.child.s=null,td(b,c,d);else try{b.ub?b.La.call(b.context):td(b,c,d)}catch(e){ud.call(null,e)}fd.put(b)},td=function(a,b,c){2==b?a.La.call(a.context,c):a.fb&&a.fb.call(a.context,c)},rd=function(a,b){a.ec=!0;Uc(function(){a.ec&&ud.call(null,b)})},ud=Kc,dd=function(a){t.call(this,a)};r(dd,t);dd.prototype.name="cancel";/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	var vd=function(a,b){this.vc=[];this.Td=a;this.Ad=b||null;this.xb=this.ab=!1;this.pa=void 0;this.nd=this.td=this.Ic=!1;this.Cc=0;this.s=null;this.Jc=0};vd.prototype.cancel=function(a){if(this.ab)this.pa instanceof vd&&this.pa.cancel();else{if(this.s){var b=this.s;delete this.s;a?b.cancel(a):(b.Jc--,0>=b.Jc&&b.cancel())}this.Td?this.Td.call(this.Ad,this):this.nd=!0;this.ab||wd(this,new xd)}};vd.prototype.yd=function(a,b){this.Ic=!1;yd(this,a,b)};
	var yd=function(a,b,c){a.ab=!0;a.pa=c;a.xb=!b;zd(a)},Bd=function(a){if(a.ab){if(!a.nd)throw new Ad;a.nd=!1}};vd.prototype.callback=function(a){Bd(this);Cd(a);yd(this,!0,a)};
	var wd=function(a,b){Bd(a);Cd(b);yd(a,!1,b)},Cd=function(a){v(!(a instanceof vd),"An execution sequence may not be initiated with a blocking Deferred.")},Gd=function(a){var b=Dd("https://apis.google.com/js/client.js?onload="+Ed);Fd(b,null,a,void 0)},Fd=function(a,b,c,d){v(!a.td,"Blocking Deferreds can not be re-used");a.vc.push([b,c,d]);a.ab&&zd(a)};vd.prototype.then=function(a,b,c){var d,e,f=new A(function(a,b){d=a;e=b});Fd(this,d,function(a){a instanceof xd?f.cancel():e(a)});return f.then(a,b,c)};
	ad(vd);
	var Hd=function(a){return Fa(a.vc,function(a){return p(a[1])})},zd=function(a){if(a.Cc&&a.ab&&Hd(a)){var b=a.Cc,c=Id[b];c&&(l.clearTimeout(c.yb),delete Id[b]);a.Cc=0}a.s&&(a.s.Jc--,delete a.s);for(var b=a.pa,d=c=!1;a.vc.length&&!a.Ic;){var e=a.vc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.xb?g:f)try{var k=f.call(e||a.Ad,b);void 0!==k&&(a.xb=a.xb&&(k==b||k instanceof Error),a.pa=b=k);if(bd(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.Ic=!0}catch(n){b=n,a.xb=!0,Hd(a)||(c=!0)}}a.pa=b;d&&
	(k=q(a.yd,a,!0),d=q(a.yd,a,!1),b instanceof vd?(Fd(b,k,d),b.td=!0):b.then(k,d));c&&(b=new Jd(b),Id[b.yb]=b,a.Cc=b.yb)},Ad=function(){t.call(this)};r(Ad,t);Ad.prototype.message="Deferred has already fired";Ad.prototype.name="AlreadyCalledError";var xd=function(){t.call(this)};r(xd,t);xd.prototype.message="Deferred was canceled";xd.prototype.name="CanceledError";var Jd=function(a){this.yb=l.setTimeout(q(this.xf,this),0);this.O=a};
	Jd.prototype.xf=function(){v(Id[this.yb],"Cannot throw an error that is not scheduled.");delete Id[this.yb];throw this.O;};var Id={};var Dd=function(a){var b=new oc;b.sc=a;return Kd(b)},Kd=function(a){var b={},c=b.document||document,d;a instanceof oc&&a.constructor===oc&&a.pe===nc?d=a.sc:(ya("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ca(a)),d="type_error:TrustedResourceUrl");var e=document.createElement("SCRIPT");a={Zd:e,Sb:void 0};var f=new vd(Ld,a),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){Md(e,!0);wd(f,new Nd(1,"Timeout reached for loading script "+d))},k),a.Sb=g);e.onload=
	e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Md(e,b.Jf||!1,g),f.callback(null))};e.onerror=function(){Md(e,!0,g);wd(f,new Nd(0,"Error while loading script "+d))};a=b.attributes||{};Za(a,{type:"text/javascript",charset:"UTF-8",src:d});$c(e,a);Od(c).appendChild(e);return f},Od=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Ld=function(){if(this&&this.Zd){var a=this.Zd;a&&"SCRIPT"==a.tagName&&
	Md(a,!0,this.Sb)}},Md=function(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ba;a.onerror=ba;a.onreadystatechange=ba;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},Nd=function(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);t.call(this,c);this.code=a};r(Nd,t);var Pd="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""},Qd=function(){};Qd.prototype.next=function(){throw Pd;};Qd.prototype.qe=function(){return this};var Rd=function(a,b){this.ea={};this.w=[];this.tb=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};Rd.prototype.X=function(){Sd(this);for(var a=[],b=0;b<this.w.length;b++)a.push(this.ea[this.w[b]]);return a};Rd.prototype.ma=function(){Sd(this);return this.w.concat()};Rd.prototype.vb=function(a){return Td(this.ea,a)};
	Rd.prototype.remove=function(a){return Td(this.ea,a)?(delete this.ea[a],this.o--,this.tb++,this.w.length>2*this.o&&Sd(this),!0):!1};var Sd=function(a){if(a.o!=a.w.length){for(var b=0,c=0;b<a.w.length;){var d=a.w[b];Td(a.ea,d)&&(a.w[c++]=d);b++}a.w.length=c}if(a.o!=a.w.length){for(var e={},c=b=0;b<a.w.length;)d=a.w[b],Td(e,d)||(a.w[c++]=d,e[d]=1),b++;a.w.length=c}};h=Rd.prototype;h.get=function(a,b){return Td(this.ea,a)?this.ea[a]:b};
	h.set=function(a,b){Td(this.ea,a)||(this.o++,this.w.push(a),this.tb++);this.ea[a]=b};h.addAll=function(a){var b;a instanceof Rd?(b=a.ma(),a=a.X()):(b=Ua(a),a=Ta(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ma(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Rd(this)};
	h.qe=function(a){Sd(this);var b=0,c=this.tb,d=this,e=new Qd;e.next=function(){if(c!=d.tb)throw Error("The map has changed since the iterator was created");if(b>=d.w.length)throw Pd;var e=d.w[b++];return a?e:d.ea[e]};return e};var Td=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Ud=function(a){if(a.X&&"function"==typeof a.X)return a.X();if(m(a))return a.split("");if(fa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ta(a)},Vd=function(a){if(a.ma&&"function"==typeof a.ma)return a.ma();if(!a.X||"function"!=typeof a.X){if(fa(a)||m(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Ua(a)}},Wd=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(fa(a)||m(a))w(a,b,void 0);else for(var c=Vd(a),d=Ud(a),e=
	d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};var Xd=function(a,b,c,d,e){this.reset(a,b,c,d,e)};Xd.prototype.Dd=null;var Yd=0;Xd.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Yd++;d||la();this.Cb=a;this.Xe=b;delete this.Dd};Xd.prototype.be=function(a){this.Cb=a};var Zd=function(a){this.Ye=a;this.Kd=this.Kc=this.Cb=this.s=null},$d=function(a,b){this.name=a;this.value=b};$d.prototype.toString=function(){return this.name};var ae=new $d("SEVERE",1E3),be=new $d("CONFIG",700),ce=new $d("FINE",500);Zd.prototype.getParent=function(){return this.s};Zd.prototype.be=function(a){this.Cb=a};var de=function(a){if(a.Cb)return a.Cb;if(a.s)return de(a.s);ya("Root logger has no level set.");return null};
	Zd.prototype.log=function(a,b,c){if(a.value>=de(this).value)for(p(b)&&(b=b()),a=new Xd(a,String(b),this.Ye),c&&(a.Dd=c),c="log:"+a.Xe,l.console&&(l.console.timeStamp?l.console.timeStamp(c):l.console.markTimeline&&l.console.markTimeline(c)),l.msWriteProfilerMark&&l.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.Kd)for(var f=0;b=d.Kd[f];f++)b(e);c=c.getParent()}};
	var ee={},fe=null,ge=function(a){fe||(fe=new Zd(""),ee[""]=fe,fe.be(be));var b;if(!(b=ee[a])){b=new Zd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ge(a.substr(0,c));c.Kc||(c.Kc={});c.Kc[d]=b;b.s=c;ee[a]=b}return b};var he=function(){Fb.call(this);this.da=new Pb(this);this.re=this;this.ad=null};r(he,Fb);he.prototype[Lb]=!0;h=he.prototype;h.addEventListener=function(a,b,c,d){Vb(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){dc(this,a,b,c,d)};
	h.dispatchEvent=function(a){ie(this);var b,c=this.ad;if(c){b=[];for(var d=1;c;c=c.ad)b.push(c),v(1E3>++d,"infinite loop")}c=this.re;d=a.type||a;if(m(a))a=new Ib(a,c);else if(a instanceof Ib)a.target=a.target||c;else{var e=a;a=new Ib(d,c);Za(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.jb&&0<=g;g--)f=a.currentTarget=b[g],e=je(f,d,!0,a)&&e;a.jb||(f=a.currentTarget=c,e=je(f,d,!0,a)&&e,a.jb||(e=je(f,d,!1,a)&&e));if(b)for(g=0;!a.jb&&g<b.length;g++)f=a.currentTarget=b[g],e=je(f,d,!1,a)&&e;return e};
	h.Za=function(){he.qd.Za.call(this);if(this.da){var a=this.da,b=0,c;for(c in a.F){for(var d=a.F[c],e=0;e<d.length;e++)++b,Ob(d[e]);delete a.F[c];a.Tb--}}this.ad=null};h.listen=function(a,b,c,d){ie(this);return this.da.add(String(a),b,!1,c,d)};
	var cc=function(a,b,c,d,e){a.da.add(String(b),c,!0,d,e)},je=function(a,b,c,d){b=a.da.F[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.nb&&g.capture==c){var k=g.listener,n=g.fc||g.src;g.Xb&&Rb(a.da,g);e=!1!==k.call(n,d)&&e}}return e&&0!=d.Yd};he.prototype.Pc=function(a,b,c,d){return this.da.Pc(String(a),b,c,d)};var ie=function(a){v(a.da,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var E=function(a,b){a&&a.log(ce,b,void 0)};var ke=function(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)},le=function(a){var b=null;return(new A(function(c,d){b=ke(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){l.clearTimeout(b);throw a;})};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ne=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,f=null;0<=d?(e=a[c].substring(0,d),f=a[c].substring(d+1)):e=a[c];b(e,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var F=function(a){he.call(this);this.headers=new Rd;this.Gc=a||null;this.ta=!1;this.Fc=this.b=null;this.Bb=this.Qd=this.mc="";this.Ha=this.Tc=this.kc=this.Mc=!1;this.qb=0;this.Ac=null;this.Xd="";this.Dc=this.ff=this.le=!1};r(F,he);var oe=F.prototype,pe=ge("goog.net.XhrIo");oe.T=pe;var qe=/^https?$/i,re=["POST","PUT"];
	F.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.mc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.mc=a;this.Bb="";this.Qd=b;this.Mc=!1;this.ta=!0;this.b=this.Gc?this.Gc.Zb():Dc.Zb();this.Fc=this.Gc?Cc(this.Gc):Cc(Dc);this.b.onreadystatechange=q(this.Vd,this);this.ff&&"onprogress"in this.b&&(this.b.onprogress=q(function(a){this.Ud(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=q(this.Ud,this)));try{E(this.T,se(this,"Opening Xhr")),
	this.Tc=!0,this.b.open(b,String(a),!0),this.Tc=!1}catch(f){E(this.T,se(this,"Error opening Xhr: "+f.message));this.O(5,f);return}a=c||"";var e=this.headers.clone();d&&Wd(d,function(a,b){e.set(b,a)});d=Ha(e.ma());c=l.FormData&&a instanceof l.FormData;!Ia(re,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Xd&&(this.b.responseType=this.Xd);"withCredentials"in this.b&&this.b.withCredentials!==this.le&&(this.b.withCredentials=
	this.le);try{te(this),0<this.qb&&(this.Dc=ue(this.b),E(this.T,se(this,"Will abort after "+this.qb+"ms if incomplete, xhr2 "+this.Dc)),this.Dc?(this.b.timeout=this.qb,this.b.ontimeout=q(this.Sb,this)):this.Ac=ke(this.Sb,this.qb,this)),E(this.T,se(this,"Sending request")),this.kc=!0,this.b.send(a),this.kc=!1}catch(f){E(this.T,se(this,"Send error: "+f.message)),this.O(5,f)}};var ue=function(a){return y&&z(9)&&ga(a.timeout)&&void 0!==a.ontimeout},Ga=function(a){return"content-type"==a.toLowerCase()};
	F.prototype.Sb=function(){"undefined"!=typeof aa&&this.b&&(this.Bb="Timed out after "+this.qb+"ms, aborting",E(this.T,se(this,this.Bb)),this.dispatchEvent("timeout"),this.abort(8))};F.prototype.O=function(a,b){this.ta=!1;this.b&&(this.Ha=!0,this.b.abort(),this.Ha=!1);this.Bb=b;ve(this);we(this)};var ve=function(a){a.Mc||(a.Mc=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
	F.prototype.abort=function(){this.b&&this.ta&&(E(this.T,se(this,"Aborting")),this.ta=!1,this.Ha=!0,this.b.abort(),this.Ha=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),we(this))};F.prototype.Za=function(){this.b&&(this.ta&&(this.ta=!1,this.Ha=!0,this.b.abort(),this.Ha=!1),we(this,!0));F.qd.Za.call(this)};F.prototype.Vd=function(){this.isDisposed()||(this.Tc||this.kc||this.Ha?xe(this):this.bf())};F.prototype.bf=function(){xe(this)};
	var xe=function(a){if(a.ta&&"undefined"!=typeof aa)if(a.Fc[1]&&4==ye(a)&&2==ze(a))E(a.T,se(a,"Local request error detected and ignored"));else if(a.kc&&4==ye(a))ke(a.Vd,0,a);else if(a.dispatchEvent("readystatechange"),4==ye(a)){E(a.T,se(a,"Request complete"));a.ta=!1;try{var b=ze(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.mc).match(me)[1]||null;if(!f&&l.self&&l.self.location)var g=l.self.location.protocol,
	f=g.substr(0,g.length-1);e=!qe.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{var k;try{k=2<ye(a)?a.b.statusText:""}catch(n){E(a.T,"Can not get status: "+n.message),k=""}a.Bb=k+" ["+ze(a)+"]";ve(a)}}finally{we(a)}}};F.prototype.Ud=function(a,b){v("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Ae(a,"progress"));this.dispatchEvent(Ae(a,b?"downloadprogress":"uploadprogress"))};
	var Ae=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},we=function(a,b){if(a.b){te(a);var c=a.b,d=a.Fc[0]?ba:null;a.b=null;a.Fc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.T)&&a.log(ae,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},te=function(a){a.b&&a.Dc&&(a.b.ontimeout=null);ga(a.Ac)&&(l.clearTimeout(a.Ac),a.Ac=null)},ye=function(a){return a.b?a.b.readyState:0},ze=function(a){try{return 2<ye(a)?
	a.b.status:-1}catch(b){return-1}},Be=function(a){try{return a.b?a.b.responseText:""}catch(b){return E(a.T,"Can not get responseText: "+b.message),""}},se=function(a,b){return b+" ["+a.Qd+" "+a.mc+" "+ze(a)+"]"};var Ce=function(a,b){this.ca=this.Sa=this.fa="";this.hb=null;this.Ga=this.va="";this.R=this.Te=!1;var c;a instanceof Ce?(this.R=void 0!==b?b:a.R,De(this,a.fa),c=a.Sa,G(this),this.Sa=c,Ee(this,a.ca),Fe(this,a.hb),Ge(this,a.va),He(this,a.V.clone()),a=a.Ga,G(this),this.Ga=a):a&&(c=String(a).match(me))?(this.R=!!b,De(this,c[1]||"",!0),a=c[2]||"",G(this),this.Sa=Ie(a),Ee(this,c[3]||"",!0),Fe(this,c[4]),Ge(this,c[5]||"",!0),He(this,c[6]||"",!0),a=c[7]||"",G(this),this.Ga=Ie(a)):(this.R=!!b,this.V=new H(null,
	0,this.R))};Ce.prototype.toString=function(){var a=[],b=this.fa;b&&a.push(Je(b,Ke,!0),":");var c=this.ca;if(c||"file"==b)a.push("//"),(b=this.Sa)&&a.push(Je(b,Ke,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.hb,null!=c&&a.push(":",String(c));if(c=this.va)this.ca&&"/"!=c.charAt(0)&&a.push("/"),a.push(Je(c,"/"==c.charAt(0)?Le:Me,!0));(c=this.V.toString())&&a.push("?",c);(c=this.Ga)&&a.push("#",Je(c,Ne));return a.join("")};
	Ce.prototype.resolve=function(a){var b=this.clone(),c=!!a.fa;c?De(b,a.fa):c=!!a.Sa;if(c){var d=a.Sa;G(b);b.Sa=d}else c=!!a.ca;c?Ee(b,a.ca):c=null!=a.hb;d=a.va;if(c)Fe(b,a.hb);else if(c=!!a.va){if("/"!=d.charAt(0))if(this.ca&&!this.va)d="/"+d;else{var e=b.va.lastIndexOf("/");-1!=e&&(d=b.va.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(u(e,"./")||u(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||
	1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?Ge(b,d):c=""!==a.V.toString();c?He(b,a.V.clone()):c=!!a.Ga;c&&(a=a.Ga,G(b),b.Ga=a);return b};Ce.prototype.clone=function(){return new Ce(this)};
	var De=function(a,b,c){G(a);a.fa=c?Ie(b,!0):b;a.fa&&(a.fa=a.fa.replace(/:$/,""))},Ee=function(a,b,c){G(a);a.ca=c?Ie(b,!0):b},Fe=function(a,b){G(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.hb=b}else a.hb=null},Ge=function(a,b,c){G(a);a.va=c?Ie(b,!0):b},He=function(a,b,c){G(a);b instanceof H?(a.V=b,a.V.md(a.R)):(c||(b=Je(b,Oe)),a.V=new H(b,0,a.R))},I=function(a,b,c){G(a);a.V.set(b,c)},Pe=function(a,b){return a.V.get(b)},Qe=function(a,b){G(a);a.V.remove(b)},G=function(a){if(a.Te)throw Error("Tried to modify a read-only Uri");
	};Ce.prototype.md=function(a){this.R=a;this.V&&this.V.md(a);return this};
	var Re=function(a){return a instanceof Ce?a.clone():new Ce(a,void 0)},Se=function(a,b){var c=new Ce(null,void 0);De(c,"https");a&&Ee(c,a);b&&Ge(c,b);return c},Ie=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Je=function(a,b,c){return m(a)?(a=encodeURI(a).replace(b,Te),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Te=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Ke=/[#\/\?@]/g,Me=/[\#\?:]/g,Le=/[\#\?]/g,Oe=/[\#\?@]/g,
	Ne=/#/g,H=function(a,b,c){this.o=this.l=null;this.N=a||null;this.R=!!c},Ue=function(a){a.l||(a.l=new Rd,a.o=0,a.N&&ne(a.N,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},We=function(a){var b=Vd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new H(null,0,void 0);a=Ud(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ea(f)?Ve(c,e,f):c.add(e,f)}return c};h=H.prototype;
	h.add=function(a,b){Ue(this);this.N=null;a=this.P(a);var c=this.l.get(a);c||this.l.set(a,c=[]);c.push(b);this.o=za(this.o)+1;return this};h.remove=function(a){Ue(this);a=this.P(a);return this.l.vb(a)?(this.N=null,this.o=za(this.o)-this.l.get(a).length,this.l.remove(a)):!1};h.vb=function(a){Ue(this);a=this.P(a);return this.l.vb(a)};h.ma=function(){Ue(this);for(var a=this.l.X(),b=this.l.ma(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
	h.X=function(a){Ue(this);var b=[];if(m(a))this.vb(a)&&(b=Ma(b,this.l.get(this.P(a))));else{a=this.l.X();for(var c=0;c<a.length;c++)b=Ma(b,a[c])}return b};h.set=function(a,b){Ue(this);this.N=null;a=this.P(a);this.vb(a)&&(this.o=za(this.o)-this.l.get(a).length);this.l.set(a,[b]);this.o=za(this.o)+1;return this};h.get=function(a,b){a=a?this.X(a):[];return 0<a.length?String(a[0]):b};var Ve=function(a,b,c){a.remove(b);0<c.length&&(a.N=null,a.l.set(a.P(b),Na(c)),a.o=za(a.o)+c.length)};
	H.prototype.toString=function(){if(this.N)return this.N;if(!this.l)return"";for(var a=[],b=this.l.ma(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.X(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.N=a.join("&")};H.prototype.clone=function(){var a=new H;a.N=this.N;this.l&&(a.l=this.l.clone(),a.o=this.o);return a};H.prototype.P=function(a){a=String(a);this.R&&(a=a.toLowerCase());return a};
	H.prototype.md=function(a){a&&!this.R&&(Ue(this),this.N=null,this.l.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),Ve(this,b,a))},this));this.R=a};var Xe=function(){var a=J();return y&&!!ob&&11==ob||/Edge\/\d+/.test(a)},Ye=function(){return l.window&&l.window.location.href||""},Ze=function(a,b){b=b||l.window;var c="about:blank";a&&(c=rc(uc(a)));b.location.href=c},$e=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ea(a[d])?Wa(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<$e(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},bf=function(){var a;
	a=J();a="Chrome"!=af(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!y||!ob||9<ob},cf=function(a){a=(a||J()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},df=function(a){a=a||l.window;try{a.close()}catch(b){}},ef=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
	b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=J().toLowerCase();d&&(b.target=d,u(c,"crios/")&&(b.target="_blank"));"Firefox"==af(J())&&(a=a||"http://localhost",b.scrollbars=!0);var g;c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof qc?c:uc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;
	default:e.push(g+"="+(d[g]?1:0))}g=e.join(",");(x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),"undefined"!=typeof HTMLAnchorElement&&"undefined"!=typeof Location&&"undefined"!=typeof Element&&(e=g&&(g instanceof HTMLAnchorElement||!(g instanceof Location||g instanceof Element)),f=ha(g)?g.constructor.displayName||g.constructor.name||Object.prototype.toString.call(g):void 0===g?"undefined":null===g?"null":
	typeof g,v(e,"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",f)),b=b instanceof qc?b:uc(b),g.href=rc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=rc(b),g&&(fb&&u(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=mc("b/12014412, meta tag with sanitized URL"),ua.test(d)&&(-1!=d.indexOf("&")&&(d=d.replace(oa,
	"&amp;")),-1!=d.indexOf("<")&&(d=d.replace(pa,"&lt;")),-1!=d.indexOf(">")&&(d=d.replace(qa,"&gt;")),-1!=d.indexOf('"')&&(d=d.replace(ra,"&quot;")),-1!=d.indexOf("'")&&(d=d.replace(sa,"&#39;")),-1!=d.indexOf("\x00")&&(d=d.replace(ta,"&#0;"))),d='<META HTTP-EQUIV="refresh" content="0; url='+d+'">',Aa(lc(a),"must provide justification"),v(!/^[\s\xa0]*$/.test(lc(a)),"must provide non-empty justification"),g.document.write(Yc((new Xc).Qe(d))),g.document.close())):g=a.open(rc(b),c,g);if(g)try{g.focus()}catch(k){}return g},
	ff=function(a){return new A(function(b){var c=function(){le(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},gf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hf=function(){var a=null;return(new A(function(b){"complete"==l.document.readyState?b():(a=function(){b()},bc(window,"load",a))})).f(function(b){dc(window,"load",a);throw b;})},kf=function(){return jf(void 0)?hf().then(function(){return new A(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},
	1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):D(Error("Cordova must run in an Android or iOS file scheme."))},jf=function(a){a=a||J();return!("file:"!==lf()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},mf=function(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}},K=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},nf=function(){var a=K();return"ReactNative"===
	a||"Node"===a},af=function(a){var b=a.toLowerCase();if(u(b,"opera/")||u(b,"opr/")||u(b,"opios/"))return"Opera";if(u(b,"iemobile"))return"IEMobile";if(u(b,"msie")||u(b,"trident/"))return"IE";if(u(b,"edge/"))return"Edge";if(u(b,"firefox/"))return"Firefox";if(u(b,"silk/"))return"Silk";if(u(b,"blackberry"))return"Blackberry";if(u(b,"webos"))return"Webos";if(!u(b,"safari/")||u(b,"chrome/")||u(b,"crios/")||u(b,"android"))if(!u(b,"chrome/")&&!u(b,"crios/")||u(b,"edge/")){if(u(b,"android"))return"Android";
	if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},of=function(a){var b=K();return("Browser"===b?af(J()):b)+"/JsCore/"+a},J=function(){return l.navigator&&l.navigator.userAgent||""},L=function(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b},rf=function(){var a;if(a=(pf()||"chrome-extension:"===lf()||jf()&&!1)&&!nf())a:{try{var b=l.localStorage,
	c=qf();if(b){b.setItem(c,"1");b.removeItem(c);a=Xe()?!!l.indexedDB:!0;break a}}catch(d){}a=!1}return a},pf=function(){return"http:"===lf()||"https:"===lf()},lf=function(){return l.location&&l.location.protocol||null},sf=function(a){a=a||J();return cf(a)||"Firefox"==af(a)?!1:!0},tf=function(a){return"undefined"===typeof a?null:xc(a)},uf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},vf=function(a){if(null!==a)return JSON.parse(a)},qf=function(a){return a?
	a:""+Math.floor(1E9*Math.random()).toString()},wf=function(a){a=a||J();return"Safari"==af(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},xf=function(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},yf=function(){return l.navigator&&"boolean"===typeof l.navigator.onLine?l.navigator.onLine:!0},zf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");
	this.uf=a;this.We=b;a=c||J();d=d||K();this.Se=cf(a)||"ReactNative"===d};zf.prototype.get=function(){return this.Se?this.We:this.uf};
	var Af=function(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Bf=function(){var a=l.document,b=null;return Af()||!a?C():(new A(function(c){b=function(){Af()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Cf={};var Df;try{var Ef={};Object.defineProperty(Ef,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Ef,"abcd",{configurable:!0,enumerable:!0,value:2});Df=2==Ef.abcd}catch(a){Df=!1}
	var M=function(a,b,c){Df?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Ff=function(a){Df?Object.defineProperty(a,"provider",{configurable:!0,enumerable:!0,get:function(){Cf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."]||(Cf["firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.auth.AuthCredential.provider is deprecated. Please use the providerId field instead."));
	return"password"}}):a.provider="password"},Gf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])},Hf=function(a){var b={};Gf(b,a);return b},If=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Jf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},Kf=function(a){var b=a;if("object"==typeof a&&null!=a){var b="length"in a?[]:{},c;for(c in a)M(b,c,Kf(a[c]))}return b};var Lf="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Mf=["client_id","response_type","scope","redirect_uri","state"],Nf={Ef:{Gb:500,Fb:600,providerId:"facebook.com",jd:Mf},Ff:{Gb:500,Fb:620,providerId:"github.com",jd:Mf},Gf:{Gb:515,Fb:680,providerId:"google.com",jd:Mf},Hf:{Gb:485,Fb:705,providerId:"twitter.com",jd:Lf}},Of=function(a){for(var b in Nf)if(Nf[b].providerId==a)return Nf[b];return null};var N=function(a,b){this.code="auth/"+a;this.message=b||Pf[a]||""};r(N,Error);N.prototype.D=function(){return{code:this.code,message:this.message}};N.prototype.toJSON=function(){return this.D()};
	var Qf=function(a){var b=a&&a.code;return b?new N(b.substring(5),a.message):null},Pf={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","cordova-not-ready":"Cordova framework is not ready.",
	"cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.",
	"expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
	"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
	"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.",
	"invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
	"app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.",
	"operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.",
	"popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
	"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
	"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var O=function(a,b,c,d,e){this.ba=a;this.I=b||null;this.rb=c||null;this.ld=d||null;this.O=e||null;if(this.rb||this.O){if(this.rb&&this.O)throw new N("invalid-auth-event");if(this.rb&&!this.ld)throw new N("invalid-auth-event");}else throw new N("invalid-auth-event");};O.prototype.cc=function(){return this.ld};O.prototype.getError=function(){return this.O};O.prototype.D=function(){return{type:this.ba,eventId:this.I,urlResponse:this.rb,sessionId:this.ld,error:this.O&&this.O.D()}};
	var Rf=function(a){a=a||{};return a.type?new O(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&Qf(a.error)):null};var Sf=function(a){var b="unauthorized-domain",c=void 0,d=Re(a);a=d.ca;d=d.fa;"chrome-extension"==d?c=ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
	"operation-not-supported-in-this-environment";N.call(this,b,c)};r(Sf,N);var Tf=function(a){this.Ve=a.sub;la();this.$b=a.email||null};var Uf=function(a,b){return a.then(function(a){if(a.idToken){var c;a:{var e=a.idToken.split(".");if(3==e.length){for(var e=e[1],f=(4-e.length%4)%4,g=0;g<f;g++)e+=".";try{var k=JSON.parse(tb(e));if(k.sub&&k.iss&&k.aud&&k.exp){c=new Tf(k);break a}}catch(n){}}c=null}if(!c||b!=c.Ve)throw new N("user-mismatch");return a}throw new N("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new N("user-mismatch"):a;})},Vf=function(a,b){if(b.idToken||b.accessToken)b.idToken&&M(this,
	"idToken",b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new N("internal-error","failed to construct a credential");M(this,"provider",a);M(this,"providerId",a)};Vf.prototype.bc=function(a){return Wf(a,Xf(this))};Vf.prototype.Rd=function(a,b){var c=Xf(this);c.idToken=b;return Yf(a,c)};Vf.prototype.Sd=function(a,b){var c=Xf(this);return Uf(Zf(a,c),b)};
	var Xf=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:We(b).toString(),requestUri:"http://localhost"}};Vf.prototype.D=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
	var $f=function(a,b){this.jf=b||[];Gf(this,{providerId:a,isOAuthProvider:!0});this.zd={}};$f.prototype.setCustomParameters=function(a){this.zd=Xa(a);return this};var P=function(a){$f.call(this,a,Mf);this.kd=[]};r(P,$f);P.prototype.addScope=function(a){Ia(this.kd,a)||this.kd.push(a);return this};P.prototype.Id=function(){return Na(this.kd)};
	P.prototype.credential=function(a,b){if(!a&&!b)throw new N("argument-error","credential failed: must provide the ID token and/or the access token.");return new Vf(this.providerId,{idToken:a||null,accessToken:b||null})};var ag=function(){P.call(this,"facebook.com")};r(ag,P);M(ag,"PROVIDER_ID","facebook.com");var bg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");return(new ag).credential(null,a)},cg=function(){P.call(this,"github.com")};
	r(cg,P);M(cg,"PROVIDER_ID","github.com");var dg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");return(new cg).credential(null,a)},eg=function(){P.call(this,"google.com");this.addScope("profile")};r(eg,P);M(eg,"PROVIDER_ID","google.com");var fg=function(a,b){return(new eg).credential(a,b)},gg=function(){$f.call(this,"twitter.com",Lf)};r(gg,$f);M(gg,"PROVIDER_ID","twitter.com");
	var hg=function(a,b){if(!a||!b)throw new N("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Vf("twitter.com",{oauthToken:a,oauthTokenSecret:b})},ig=function(a,b){this.$b=a;this.bd=b;Ff(this);M(this,"providerId","password")};ig.prototype.bc=function(a){return Q(a,jg,{email:this.$b,password:this.bd})};ig.prototype.Rd=function(a,b){return Q(a,kg,{idToken:b,email:this.$b,password:this.bd})};ig.prototype.Sd=function(a,b){return Uf(this.bc(a),b)};
	ig.prototype.D=function(){return{email:this.$b,password:this.bd}};var lg=function(){Gf(this,{providerId:"password",isOAuthProvider:!1})};Gf(lg,{PROVIDER_ID:"password"});
	var mg=function(a){var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return fg(a,c);case "facebook.com":return bg(c);case "github.com":return dg(c);case "twitter.com":return hg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},ng=function(a){if(!a.isOAuthProvider)throw new N("invalid-oauth-provider");};var og=function(a,b,c,d){N.call(this,a,d);M(this,"email",b);M(this,"credential",c)};r(og,N);og.prototype.D=function(){var a={code:this.code,message:this.message,email:this.email},b=this.credential&&this.credential.D();b&&Za(a,b);return a};og.prototype.toJSON=function(){return this.D()};var pg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));return a.email?new og(b,a.email,mg(a),a.message):new N(b,a.message||void 0)}return null};var qg=function(a){this.Df=a};r(qg,Bc);qg.prototype.Zb=function(){return new this.Df};qg.prototype.Vc=function(){return{}};
	var R=function(a,b,c){var d;d="Node"==K();d=l.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new N("internal-error","The XMLHttpRequest compatibility library was not found.");this.j=a;a=b||{};this.qf=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.rf=a.secureTokenTimeout||rg;this.$d=Xa(a.secureTokenHeaders||sg);this.Be=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Ce=a.firebaseTimeout||
	tg;this.Gd=Xa(a.firebaseHeaders||ug);c&&(this.Gd["X-Client-Version"]=c,this.$d["X-Client-Version"]=c);this.ve=new Gc;this.Cf=new qg(d)},vg,rg=new zf(3E4,6E4),sg={"Content-Type":"application/x-www-form-urlencoded"},tg=new zf(3E4,6E4),ug={"Content-Type":"application/json"},xg=function(a,b,c,d,e,f,g){yf()?(bf()?a=q(a.tf,a):(vg||(vg=new A(function(a,b){wg(a,b)})),a=q(a.sf,a)),a(b,c,d,e,f,g)):c&&c(null)};
	R.prototype.tf=function(a,b,c,d,e,f){var g="Node"==K(),k=nf()?g?new F(this.Cf):new F:new F(this.ve),n;f&&(k.qb=Math.max(0,f),n=setTimeout(function(){k.dispatchEvent("timeout")},f));k.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Be(this))||null}catch(ab){a=null}b&&b(a)});cc(k,"ready",function(){n&&clearTimeout(n);this.Da||(this.Da=!0,this.Za())});cc(k,"timeout",function(){n&&clearTimeout(n);this.Da||(this.Da=!0,this.Za());b&&b(null)});k.send(a,c,d,e)};
	var Ed="__fcb"+Math.floor(1E6*Math.random()).toString(),wg=function(a,b){((window.gapi||{}).client||{}).request?a():(l[Ed]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))},Gd(function(){b(Error("CORS_UNSUPPORTED"))}))};
	R.prototype.sf=function(a,b,c,d,e){var f=this;vg.then(function(){window.gapi.client.setApiKey(f.j);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
	var zg=function(a,b){return new A(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?xg(a,a.qf+"?key="+encodeURIComponent(a.j),function(a){a?a.error?d(yg(a)):a.access_token&&a.refresh_token?c(a):d(new N("internal-error")):d(new N("network-request-failed"))},"POST",We(b).toString(),a.$d,a.rf.get()):d(new N("internal-error"))})},Ag=function(a,b,c,d,e){var f=Re(a.Be+b);I(f,"key",a.j);e&&I(f,"cb",la().toString());var g="GET"==c;if(g)for(var k in d)d.hasOwnProperty(k)&&
	I(f,k,d[k]);return new A(function(b,e){xg(a,f.toString(),function(a){a?a.error?e(yg(a)):b(a):e(new N("network-request-failed"))},c,g?void 0:xc(uf(d)),a.Gd,a.Ce.get())})},Bg=function(a){if(!ic.test(a.email))throw new N("invalid-email");},Cg=function(a){"email"in a&&Bg(a)},Eg=function(a,b){return Q(a,Dg,{identifier:b,continueUri:pf()?Ye():"http://localhost"}).then(function(a){return a.allProviders||[]})},Gg=function(a){return Q(a,Fg,{}).then(function(a){return a.authorizedDomains||[]})},Hg=function(a){if(!a.idToken)throw new N("internal-error");
	};R.prototype.signInAnonymously=function(){return Q(this,Ig,{})};R.prototype.updateEmail=function(a,b){return Q(this,Jg,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,kg,{idToken:a,password:b})};var Kg={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];Sa(Kg,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,Jg,c)};
	R.prototype.sendPasswordResetEmail=function(a){return Q(this,Lg,{requestType:"PASSWORD_RESET",email:a})};R.prototype.sendEmailVerification=function(a){return Q(this,Mg,{requestType:"VERIFY_EMAIL",idToken:a})};
	var Og=function(a,b,c){return Q(a,Ng,{idToken:b,deleteProvider:c})},Pg=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new N("internal-error");},Qg=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=pg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=pg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=pg(a));if(b)throw b;if(!a.idToken)throw new N("internal-error");},Wf=function(a,
	b){b.returnIdpCredential=!0;return Q(a,Rg,b)},Yf=function(a,b){b.returnIdpCredential=!0;return Q(a,Sg,b)},Zf=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,Tg,b)},Ug=function(a){if(!a.oobCode)throw new N("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,Vg,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,Wg,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,Xg,{oobCode:a})};
	var Xg={endpoint:"setAccountInfo",G:Ug,pb:"email"},Wg={endpoint:"resetPassword",G:Ug,oa:function(a){if(!a.email||!a.requestType)throw new N("internal-error");}},Yg={endpoint:"signupNewUser",G:function(a){Bg(a);if(!a.password)throw new N("weak-password");},oa:Hg,qa:!0},Dg={endpoint:"createAuthUri"},Zg={endpoint:"deleteAccount",ob:["idToken"]},Ng={endpoint:"setAccountInfo",ob:["idToken","deleteProvider"],G:function(a){if(!ea(a.deleteProvider))throw new N("internal-error");}},$g={endpoint:"getAccountInfo"},
	Mg={endpoint:"getOobConfirmationCode",ob:["idToken","requestType"],G:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new N("internal-error");},pb:"email"},Lg={endpoint:"getOobConfirmationCode",ob:["requestType"],G:function(a){if("PASSWORD_RESET"!=a.requestType)throw new N("internal-error");Bg(a)},pb:"email"},Fg={ue:!0,endpoint:"getProjectConfig",Me:"GET"},Vg={endpoint:"resetPassword",G:Ug,pb:"email"},Jg={endpoint:"setAccountInfo",ob:["idToken"],G:Cg,qa:!0},kg={endpoint:"setAccountInfo",ob:["idToken"],
	G:function(a){Cg(a);if(!a.password)throw new N("weak-password");},oa:Hg,qa:!0},Ig={endpoint:"signupNewUser",oa:Hg,qa:!0},Rg={endpoint:"verifyAssertion",G:Pg,oa:Qg,qa:!0},Tg={endpoint:"verifyAssertion",G:Pg,oa:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new N("user-not-found");if(!a.idToken)throw new N("internal-error");},qa:!0},Sg={endpoint:"verifyAssertion",G:function(a){Pg(a);if(!a.idToken)throw new N("internal-error");},oa:Qg,qa:!0},ah={endpoint:"verifyCustomToken",G:function(a){if(!a.token)throw new N("invalid-custom-token");
	},oa:Hg,qa:!0},jg={endpoint:"verifyPassword",G:function(a){Bg(a);if(!a.password)throw new N("wrong-password");},oa:Hg,qa:!0},Q=function(a,b,c){if(!Jf(c,b.ob))return D(new N("internal-error"));var d=b.Me||"POST",e;return C(c).then(b.G).then(function(){b.qa&&(c.returnSecureToken=!0);return Ag(a,b.endpoint,d,c,b.ue||!1)}).then(function(a){return e=a}).then(b.oa).then(function(){if(!b.pb)return e;if(!(b.pb in e))throw new N("internal-error");return e[b.pb]})},yg=function(a){var b,c;c=(a.error&&a.error.errors&&
	a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new N(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",
	EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
	INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled"};b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new N(d[e],b);!b&&a&&(b=tf(a));return new N("internal-error",
	b)};var bh=function(a){this.U=a};bh.prototype.value=function(){return this.U};bh.prototype.ce=function(a){this.U.style=a;return this};var ch=function(a){this.U=a||{}};ch.prototype.value=function(){return this.U};ch.prototype.ce=function(a){this.U.style=a;return this};var eh=function(a){this.Af=a;this.ic=null;this.$c=dh(this)},fh=function(a){var b=new ch;b.U.where=document.body;b.U.url=a.Af;b.U.messageHandlersFilter=L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.U.attributes=b.U.attributes||{};(new bh(b.U.attributes)).ce({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.U.dontclear=!0;return b},dh=function(a){return gh().then(function(){return new A(function(b,c){L("gapi.iframes.getContext")().open(fh(a).value(),function(d){a.ic=d;a.ic.restyle({setHideOnLeave:!1});
	var e=setTimeout(function(){c(Error("Network Error"))},hh.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};eh.prototype.sendMessage=function(a){var b=this;return this.$c.then(function(){return new A(function(c){b.ic.send(a.type,a,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
	var ih=function(a,b){a.$c.then(function(){a.ic.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},jh=new zf(3E4,6E4),hh=new zf(5E3,15E3),gh=function(){return new A(function(a,b){if(yf()){var c=function(){xf();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){xf();b(Error("Network Error"))},timeout:jh.get()})};if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){L("gapi.load")?
	c():b(Error("Network Error"))};C(Dd("https://apis.google.com/js/api.js?onload="+d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})};var kh=function(a,b,c){this.v=a;this.j=b;this.B=c;this.Ta=null;this.Ub=Se(this.v,"/__/auth/iframe");I(this.Ub,"apiKey",this.j);I(this.Ub,"appName",this.B)};kh.prototype.setVersion=function(a){this.Ta=a;return this};kh.prototype.toString=function(){this.Ta?I(this.Ub,"v",this.Ta):Qe(this.Ub,"v");return this.Ub.toString()};var lh=function(a,b,c,d,e){this.v=a;this.j=b;this.B=c;this.te=d;this.Ta=this.I=this.hd=null;this.Jb=e};lh.prototype.setVersion=function(a){this.Ta=a;return this};
	lh.prototype.toString=function(){var a=Se(this.v,"/__/auth/handler");I(a,"apiKey",this.j);I(a,"appName",this.B);I(a,"authType",this.te);if(this.Jb.isOAuthProvider){I(a,"providerId",this.Jb.providerId);var b=this.Jb,c=uf(b.zd),d;for(d in c)c[d]=c[d].toString();b=b.jf;c=Xa(c);for(d=0;d<b.length;d++){var e=b[d];e in c&&delete c[e]}Va(c)||I(a,"customParameters",tf(c))}"function"===typeof this.Jb.Id&&(b=this.Jb.Id(),b.length&&I(a,"scopes",b.join(",")));this.hd?I(a,"redirectUrl",this.hd):Qe(a,"redirectUrl");
	this.I?I(a,"eventId",this.I):Qe(a,"eventId");this.Ta?I(a,"v",this.Ta):Qe(a,"v");if(this.Vb)for(var f in this.Vb)this.Vb.hasOwnProperty(f)&&!Pe(a,f)&&I(a,f,this.Vb[f]);return a.toString()};
	var mh=function(a,b,c,d){this.v=a;this.j=b;this.B=c;this.Ee=(this.Ca=d||null)?of(this.Ca):null;d=this.Ca;this.Ne=(new kh(a,b,c)).setVersion(d).toString();this.ka=[];this.g=new R(b,null,this.Ee);this.lc=this.ua=null},nh=function(a){var b=Ye();return Gg(a).then(function(a){a:{for(var c=Re(b),e=c.fa,c=c.ca,f=0;f<a.length;f++){var g;var k=a[f];g=c;var n=e;0==k.indexOf("chrome-extension://")?g=Re(k).ca==g&&"chrome-extension"==n:"http"!=n&&"https"!=n?g=!1:gf.test(k)?g=g==k:(k=k.split(".").join("\\."),g=
	(new RegExp("^(.+\\."+k+"|"+k+")$","i")).test(g));if(g){a=!0;break a}}a=!1}if(!a)throw new Sf(Ye());})};h=mh.prototype;h.Ab=function(){if(this.lc)return this.lc;var a=this;return this.lc=hf().then(function(){a.hc=new eh(a.Ne);oh(a)})};h.Pb=function(a,b,c){var d=new N("popup-closed-by-user"),e=new N("web-storage-unsupported"),f=this,g=!1;return this.Ia().then(function(){ph(f).then(function(c){c||(a&&df(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return ff(a)}).then(function(){if(!g)return le(c).then(function(){b(d)})})};
	h.de=function(){var a=J();return!sf(a)&&!wf(a)};h.Ld=function(){return!1};h.Hb=function(a,b,c,d,e,f,g){if(!a)return D(new N("popup-blocked"));if(g&&!sf())return this.Ia().f(function(b){df(a);e(b)}),d(),C();this.ua||(this.ua=nh(this.g));var k=this;return this.ua.then(function(){var b=k.Ia().f(function(b){df(a);e(b);throw b;});d();return b}).then(function(){ng(c);if(!g){var d=qh(k.v,k.j,k.B,b,c,null,f,k.Ca);Ze(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(k.ua=null);throw a;})};
	h.Ib=function(a,b,c){this.ua||(this.ua=nh(this.g));var d=this;return this.ua.then(function(){ng(b);var e=qh(d.v,d.j,d.B,a,b,Ye(),c,d.Ca);Ze(e)})};h.Ia=function(){var a=this;return this.Ab().then(function(){return a.hc.$c}).f(function(){a.ua=null;throw new N("network-request-failed");})};h.ge=function(){return!0};
	var qh=function(a,b,c,d,e,f,g,k,n){a=new lh(a,b,c,d,e);a.hd=f;a.I=g;f=a.setVersion(k);f.Vb=Xa(n||null);return f.toString()},oh=function(a){if(!a.hc)throw Error("IfcHandler must be initialized!");ih(a.hc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=Rf(b.authEvent);for(c=0;c<a.ka.length;c++)d=a.ka[c](b)||d;c={};c.status=d?"ACK":"ERROR";return C(c)}c.status="ERROR";return C(c)})},ph=function(a){var b={type:"webStorageSupport"};return a.Ab().then(function(){return a.hc.sendMessage(b)}).then(function(a){if(a&&
	a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};mh.prototype.Va=function(a){this.ka.push(a)};mh.prototype.Nb=function(a){La(this.ka,function(b){return b==a})};var rh=function(a){this.A=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.A)throw new N("internal-error","The React Native compatibility library was not found.");};h=rh.prototype;h.get=function(a){return C(this.A.getItem(a)).then(function(a){return a&&vf(a)})};h.set=function(a,b){return C(this.A.setItem(a,tf(b)))};h.remove=function(a){return C(this.A.removeItem(a))};h.Wa=function(){};h.Qa=function(){};var th=function(){this.A={}};h=th.prototype;h.get=function(a){return C(this.A[a])};h.set=function(a,b){this.A[a]=b;return C()};h.remove=function(a){delete this.A[a];return C()};h.Wa=function(){};h.Qa=function(){};var vh=function(){if(!uh()){if("Node"==K())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.A=l.localStorage||firebase.INTERNAL.node.localStorage},uh=function(){var a="Node"==K(),a=l.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=vh.prototype;
	h.get=function(a){var b=this;return C().then(function(){var c=b.A.getItem(a);return vf(c)})};h.set=function(a,b){var c=this;return C().then(function(){var d=tf(b);null===d?c.remove(a):c.A.setItem(a,d)})};h.remove=function(a){var b=this;return C().then(function(){b.A.removeItem(a)})};h.Wa=function(a){l.window&&Vb(l.window,"storage",a)};h.Qa=function(a){l.window&&dc(l.window,"storage",a)};var wh=function(){this.A={}};h=wh.prototype;h.get=function(){return C(null)};h.set=function(){return C()};h.remove=function(){return C()};h.Wa=function(){};h.Qa=function(){};var yh=function(){if(!xh()){if("Node"==K())throw new N("internal-error","The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.A=l.sessionStorage||firebase.INTERNAL.node.sessionStorage},xh=function(){var a="Node"==K(),a=l.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=yh.prototype;
	h.get=function(a){var b=this;return C().then(function(){var c=b.A.getItem(a);return vf(c)})};h.set=function(a,b){var c=this;return C().then(function(){var d=tf(b);null===d?c.remove(a):c.A.setItem(a,d)})};h.remove=function(a){var b=this;return C().then(function(){b.A.removeItem(a)})};h.Wa=function(){};h.Qa=function(){};var zh=function(a,b,c,d,e,f){if(!window.indexedDB)throw new N("web-storage-unsupported");this.xe=a;this.Zc=b;this.Lc=c;this.ke=d;this.tb=e;this.Y={};this.Qb=[];this.Db=0;this.Oe=f||l.indexedDB},Ah,Bh=function(a){return new A(function(b,c){var d=a.Oe.open(a.xe,a.tb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.Zc,{keyPath:a.Lc})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},Ch=function(a){a.Od||(a.Od=
	Bh(a));return a.Od},Dh=function(a,b){return b.objectStore(a.Zc)},Eh=function(a,b,c){return b.transaction([a.Zc],c?"readwrite":"readonly")},Fh=function(a){return new A(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=zh.prototype;
	h.set=function(a,b){var c=!1,d,e=this;return md(Ch(this).then(function(b){d=b;b=Dh(e,Eh(e,d,!0));return Fh(b.get(a))}).then(function(f){var g=Dh(e,Eh(e,d,!0));if(f)return f.value=b,Fh(g.put(f));e.Db++;c=!0;f={};f[e.Lc]=a;f[e.ke]=b;return Fh(g.add(f))}).then(function(){e.Y[a]=b}),function(){c&&e.Db--})};h.get=function(a){var b=this;return Ch(this).then(function(c){return Fh(Dh(b,Eh(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
	h.remove=function(a){var b=!1,c=this;return md(Ch(this).then(function(d){b=!0;c.Db++;return Fh(Dh(c,Eh(c,d,!0))["delete"](a))}).then(function(){delete c.Y[a]}),function(){b&&c.Db--})};
	h.wf=function(){var a=this;return Ch(this).then(function(b){var c=Dh(a,Eh(a,b,!1));return c.getAll?Fh(c.getAll()):new A(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Db){for(d=0;d<b.length;d++)c[b[d][a.Lc]]=b[d][a.ke];d=$e(a.Y,c);a.Y=c}return d})};h.Wa=function(a){0==this.Qb.length&&this.od();this.Qb.push(a)};
	h.Qa=function(a){La(this.Qb,function(b){return b==a});0==this.Qb.length&&this.xc()};h.od=function(){var a=this;this.xc();var b=function(){a.cd=le(800).then(q(a.wf,a)).then(function(b){0<b.length&&w(a.Qb,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.cd};b()};h.xc=function(){this.cd&&this.cd.cancel("STOP_EVENT")};var Jh=function(){this.Cd={Browser:Gh,Node:Hh,ReactNative:Ih}[K()]},Kh,Gh={K:vh,rd:yh},Hh={K:vh,rd:yh},Ih={K:rh,rd:wh};var Lh=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;M(this,"operation",a);M(this,"data",Kf(b))};var Mh="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),S=function(a,b){return{name:a||"",ha:"a valid string",optional:!!b,ja:m}},Nh=function(a){return{name:a||"",ha:"a valid object",optional:!1,ja:ha}},Oh=function(a,b){return{name:a||"",ha:"a function",optional:!!b,ja:p}},Ph=function(){return{name:"",ha:"null",optional:!1,ja:da}},Qh=function(){return{name:"credential",ha:"a valid credential",optional:!1,ja:function(a){return!(!a||!a.bc)}}},Rh=function(){return{name:"authProvider",
	ha:"a valid Auth provider",optional:!1,ja:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},Sh=function(a,b,c,d){return{name:c||"",ha:a.ha+" or "+b.ha,optional:!!d,ja:function(c){return a.ja(c)||b.ja(c)}}};var Th=function(a,b,c,d,e,f){this.cf=a;this.lf=b;this.Ge=c;this.nc=d;this.sd=e;this.mf=!!f;this.gb=null;this.Ja=this.nc;if(this.sd<this.nc)throw Error("Proactive refresh lower bound greater than upper bound!");};Th.prototype.start=function(){this.Ja=this.nc;Uh(this,!0)};
	var Vh=function(a,b){if(b)return a.Ja=a.nc,a.Ge();b=a.Ja;a.Ja*=2;a.Ja>a.sd&&(a.Ja=a.sd);return b},Uh=function(a,b){a.stop();a.gb=le(Vh(a,b)).then(function(){return a.mf?C():Bf()}).then(function(){return a.cf()}).then(function(){Uh(a,!0)}).f(function(b){a.lf(b)&&Uh(a,!1)})};Th.prototype.stop=function(){this.gb&&(this.gb.cancel(),this.gb=null)};var ai=function(a){var b={};b["facebook.com"]=Wh;b["google.com"]=Xh;b["github.com"]=Yh;b["twitter.com"]=Zh;var c=a&&a.providerId;return c?b[c]?new b[c](a):new $h(a):null},$h=function(a){var b=vf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");M(this,"profile",Kf(b||{}));M(this,"providerId",a)},Wh=function(a){$h.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};r(Wh,$h);
	var Yh=function(a){$h.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",this.profile&&this.profile.login||null)};r(Yh,$h);var Xh=function(a){$h.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};r(Xh,$h);var Zh=function(a){$h.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",a.screenName||null)};r(Zh,$h);var T=function(a,b){for(var c in b){var d=b[c].name;a[d]=bi(d,a[c],b[c].a)}},U=function(a,b,c,d){a[b]=bi(b,c,d)},bi=function(a,b,c){if(!c)return b;var d=ci(a);a=function(){var a=Array.prototype.slice.call(arguments),e;a:{e=Array.prototype.slice.call(a);var k;k=0;for(var n=!1,B=0;B<c.length;B++)if(c[B].optional)n=!0;else{if(n)throw new N("internal-error","Argument validator encountered a required argument after an optional argument.");k++}n=c.length;if(e.length<k||n<e.length)e="Expected "+(k==n?1==
	k?"1 argument":k+" arguments":k+"-"+n+" arguments")+" but got "+e.length+".";else{for(k=0;k<e.length;k++)if(n=c[k].optional&&void 0===e[k],!c[k].ja(e[k])&&!n){e=c[k];if(0>k||k>=Mh.length)throw new N("internal-error","Argument validator received an unsupported number of arguments.");e=Mh[k]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.ha+".";break a}e=null}}if(e)throw new N("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
	b.prototype[e];return a},ci=function(a){a=a.split(".");return a[a.length-1]};var di=function(a,b,c,d){this.Ze=a;this.ae=b;this.nf=c;this.Ob=d;this.S={};Kh||(Kh=new Jh);a=Kh;try{var e;Xe()?(Ah||(Ah=new zh("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1)),e=Ah):e=new a.Cd.K;this.Na=e}catch(f){this.Na=new th,this.Ob=!0}try{this.zc=new a.Cd.rd}catch(f){this.zc=new th}this.pd=q(this.ee,this);this.Y={}},ei,fi=function(){ei||(ei=new di("firebase",":",!wf(J())&&mf()?!0:!1,sf()));return ei};h=di.prototype;
	h.P=function(a,b){return this.Ze+this.ae+a.name+(b?this.ae+b:"")};h.get=function(a,b){return(a.K?this.Na:this.zc).get(this.P(a,b))};h.remove=function(a,b){b=this.P(a,b);a.K&&!this.Ob&&(this.Y[b]=null);return(a.K?this.Na:this.zc).remove(b)};h.set=function(a,b,c){var d=this.P(a,c),e=this,f=a.K?this.Na:this.zc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.K&&!this.Ob&&(e.Y[d]=b)})};
	h.addListener=function(a,b,c){a=this.P(a,b);this.Ob||(this.Y[a]=l.localStorage.getItem(a));Va(this.S)&&this.od();this.S[a]||(this.S[a]=[]);this.S[a].push(c)};h.removeListener=function(a,b,c){a=this.P(a,b);this.S[a]&&(La(this.S[a],function(a){return a==c}),0==this.S[a].length&&delete this.S[a]);Va(this.S)&&this.xc()};h.od=function(){this.Na.Wa(this.pd);this.Ob||Xe()||gi(this)};
	var gi=function(a){hi(a);a.Yc=setInterval(function(){for(var b in a.S){var c=l.localStorage.getItem(b),d=a.Y[b];c!=d&&(a.Y[b]=c,c=new Jb({type:"storage",key:b,target:window,oldValue:d,newValue:c,ef:!0}),a.ee(c))}},1E3)},hi=function(a){a.Yc&&(clearInterval(a.Yc),a.Yc=null)};di.prototype.xc=function(){this.Na.Qa(this.pd);hi(this)};
	di.prototype.ee=function(a){if(a&&a.Fe){var b=a.$a.key;"undefined"!==typeof a.$a.ef?this.Na.Qa(this.pd):hi(this);if(this.nf){var c=l.localStorage.getItem(b);a=a.$a.newValue;a!=c&&(a?l.localStorage.setItem(b,a):a||l.localStorage.removeItem(b))}this.Y[b]=l.localStorage.getItem(b);this.vd(b)}else w(a,q(this.vd,this))};di.prototype.vd=function(a){this.S[a]&&w(this.S[a],function(a){a()})};var ii=function(a,b){this.u=a;this.i=b||fi()},ji={name:"authEvent",K:!0},ki=function(a){return a.i.get(ji,a.u).then(function(a){return Rf(a)})};ii.prototype.Va=function(a){this.i.addListener(ji,this.u,a)};ii.prototype.Nb=function(a){this.i.removeListener(ji,this.u,a)};var li=function(a){this.i=a||fi()},mi={name:"sessionId",K:!1};li.prototype.cc=function(a){return this.i.get(mi,a)};var ni=function(a,b,c,d,e,f){this.v=a;this.j=b;this.B=c;this.Ca=d||null;this.fe=b+":"+c;this.pf=new li;this.Hd=new ii(this.fe);this.Uc=null;this.ka=[];this.Re=e||500;this.gf=f||2E3;this.zb=this.qc=null},oi=function(a){return new N("invalid-cordova-configuration",a)};
	ni.prototype.Ia=function(){return this.Wc?this.Wc:this.Wc=kf().then(function(){if("function"!==typeof L("universalLinks.subscribe",l))throw oi("cordova-universal-links-plugin is not installed");if("undefined"===typeof L("BuildInfo.packageName",l))throw oi("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",l))throw oi("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",l))throw oi("cordova-plugin-inappbrowser is not installed");
	},function(){throw new N("cordova-not-ready");})};var pi=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},qi=function(a){var b=new Eb;b.update(a);return Oa(b.digest())};h=ni.prototype;h.Pb=function(a,b){b(new N("operation-not-supported-in-this-environment"));return C()};h.Hb=function(){return D(new N("operation-not-supported-in-this-environment"))};h.ge=function(){return!1};h.de=function(){return!0};
	h.Ld=function(){return!0};
	h.Ib=function(a,b,c){if(this.qc)return D(new N("redirect-operation-pending"));var d=this,e=l.document,f=null,g=null,k=null,n=null;return this.qc=md(C().then(function(){ng(b);return ri(d)}).then(function(){return si(d,a,b,c)}).then(function(){return(new A(function(a,b){g=function(){var b=L("cordova.plugins.browsertab.close",l);a();"function"===typeof b&&b();d.zb&&"function"===typeof d.zb.close&&(d.zb.close(),d.zb=null);return!1};d.Va(g);k=function(){f||(f=le(d.gf).then(function(){b(new N("redirect-cancelled-by-user"))}))};n=
	function(){Af()&&k()};e.addEventListener("resume",k,!1);J().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return ti(d).then(function(){throw a;})})}),function(){k&&e.removeEventListener("resume",k,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Nb(g);d.qc=null})};
	var si=function(a,b,c,d){var e=pi(),f=new O(b,d,null,e,new N("no-auth-event")),g=L("BuildInfo.packageName",l);if("string"!==typeof g)throw new N("invalid-cordova-configuration");var k=L("BuildInfo.displayName",l),n={};if(J().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(J().toLowerCase().match(/android/))n.apn=g;else return D(new N("operation-not-supported-in-this-environment"));k&&(n.appDisplayName=k);e=qi(e);n.sessionId=e;var B=qh(a.v,a.j,a.B,b,c,null,d,a.Ca,n);return a.Ia().then(function(){var b=
	a.fe;return a.pf.i.set(ji,f.D(),b)}).then(function(){var b=L("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=L("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof c)throw new N("invalid-cordova-configuration");c(B)}else{c=L("cordova.InAppBrowser.open",l);if("function"!==typeof c)throw new N("invalid-cordova-configuration");b=c;var d;d=J();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
	a.zb=b(B,d?"_blank":"_system","location=yes")}})})},ui=function(a,b){for(var c=0;c<a.ka.length;c++)try{a.ka[c](b)}catch(d){}},ri=function(a){a.Uc||(a.Uc=a.Ia().then(function(){return new A(function(b){var c=function(d){b(d);a.Nb(c);return!1};a.Va(c);vi(a)})}));return a.Uc},ti=function(a){var b=null;return ki(a.Hd).then(function(c){b=c;c=a.Hd;return c.i.remove(ji,c.u)}).then(function(){return b})},vi=function(a){var b=L("universalLinks.subscribe",l);if("function"!==typeof b)throw new N("invalid-cordova-configuration");
	var c=new O("unknown",null,null,null,new N("no-auth-event")),d=!1,e=le(a.Re).then(function(){return ti(a).then(function(){d||ui(a,c)})}),f=function(b){d=!0;e&&e.cancel();ti(a).then(function(d){var e=c;if(d&&b&&b.url){var e=null,f;f=b.url;var g=Re(f),k=Pe(g,"link"),n=Pe(Re(k),"link"),g=Pe(g,"deep_link_id");f=Pe(Re(g),"link")||g||n||k||f;-1!=f.indexOf("/__/auth/callback")&&(e=Re(f),e=vf(Pe(e,"firebaseError")||null),e=(e="object"===typeof e?Qf(e):null)?new O(d.ba,d.I,null,null,e):new O(d.ba,d.I,f,d.cc()));
	e=e||c}ui(a,e)})},g=l.handleOpenURL;l.handleOpenURL=function(a){0==a.indexOf(L("BuildInfo.packageName",l)+"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};ni.prototype.Va=function(a){this.ka.push(a);ri(this).f(function(){})};ni.prototype.Nb=function(a){La(this.ka,function(b){return b==a})};var wi=function(a){this.u=a;this.i=fi()},xi={name:"pendingRedirect",K:!1},yi=function(a){return a.i.set(xi,"pending",a.u)},zi=function(a){return a.i.remove(xi,a.u)},Ai=function(a){return a.i.get(xi,a.u).then(function(a){return"pending"==a})};var V=function(a,b,c){this.v=a;this.j=b;this.B=c;this.Rb=[];this.eb=!1;this.Hc=q(this.Rc,this);this.Oa=new Bi(this);this.dd=new Ci(this);this.Eb=new wi(this.j+":"+this.B);this.ya={};this.ya.unknown=this.Oa;this.ya.signInViaRedirect=this.Oa;this.ya.linkViaRedirect=this.Oa;this.ya.reauthViaRedirect=this.Oa;this.ya.signInViaPopup=this.dd;this.ya.linkViaPopup=this.dd;this.ya.reauthViaPopup=this.dd;this.J=Di(this.v,this.j,this.B)},Di=function(a,b,c){var d=firebase.SDK_VERSION||null;return jf()?new ni(a,
	b,c,d):new mh(a,b,c,d)};V.prototype.reset=function(){this.eb=!1;this.J.Nb(this.Hc);this.J=Di(this.v,this.j,this.B)};V.prototype.Ab=function(){var a=this;this.eb||(this.eb=!0,this.J.Va(this.Hc));var b=this.J;return this.J.Ia().f(function(c){a.J==b&&a.reset();throw c;})};var Gi=function(a){a.J.de()&&a.Ab().f(function(b){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Ei(b)&&a.Rc(c)});a.J.Ld()||Fi(a.Oa)};
	V.prototype.subscribe=function(a){Ia(this.Rb,a)||this.Rb.push(a);if(!this.eb){var b=this;Ai(this.Eb).then(function(a){a?zi(b.Eb).then(function(){b.Ab().f(function(a){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));Ei(a)&&b.Rc(c)})}):Gi(b)}).f(function(){Gi(b)})}};V.prototype.unsubscribe=function(a){La(this.Rb,function(b){return b==a})};
	V.prototype.Rc=function(a){if(!a)throw new N("invalid-auth-event");for(var b=!1,c=0;c<this.Rb.length;c++){var d=this.Rb[c];if(d.wd(a.ba,a.I)){(b=this.ya[a.ba])&&b.Wd(a,d);b=!0;break}}Fi(this.Oa);return b};var Hi=new zf(2E3,1E4),Ii=new zf(3E4,6E4);V.prototype.getRedirectResult=function(){return this.Oa.getRedirectResult()};V.prototype.Hb=function(a,b,c,d,e){var f=this;return this.J.Hb(a,b,c,function(){f.eb||(f.eb=!0,f.J.Va(f.Hc))},function(){f.reset()},d,e)};
	var Ei=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};V.prototype.Ib=function(a,b,c){var d=this,e;return yi(this.Eb).then(function(){return d.J.Ib(a,b,c).f(function(a){if(Ei(a))throw new N("operation-not-supported-in-this-environment");e=a;return zi(d.Eb).then(function(){throw e;})}).then(function(){return d.J.ge()?new A(function(){}):zi(d.Eb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
	V.prototype.Pb=function(a,b,c,d){return this.J.Pb(c,function(c){a.Ra(b,null,c,d)},Hi.get())};var Ji={},Ki=function(a,b,c){var d=b+":"+c;Ji[d]||(Ji[d]=new V(a,b,c));return Ji[d]},Bi=function(a){this.i=a;this.mb=null;this.Lb=[];this.Kb=[];this.kb=null;this.gd=!1};Bi.prototype.reset=function(){this.mb=null;this.kb&&(this.kb.cancel(),this.kb=null)};
	Bi.prototype.Wd=function(a,b){if(!a)return D(new N("invalid-auth-event"));this.reset();this.gd=!0;var c=a.ba,d=a.I,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.O?this.ed(a,b):b.wb(c,d)?this.fd(a,b):D(new N("invalid-auth-event")):(Li(this,!1,null,null),a=C());return a};var Fi=function(a){a.gd||(a.gd=!0,Li(a,!1,null,null))};
	Bi.prototype.ed=function(a){Li(this,!0,null,a.getError());return C()};Bi.prototype.fd=function(a,b){var c=this;b=b.wb(a.ba,a.I);var d=a.rb,e=a.cc(),f=!!a.ba.match(/Redirect$/);return b(d,e).then(function(a){Li(c,f,a,null)}).f(function(a){Li(c,f,null,a)})};
	var Mi=function(a,b){a.mb=function(){return D(b)};if(a.Kb.length)for(var c=0;c<a.Kb.length;c++)a.Kb[c](b)},Ni=function(a,b){a.mb=function(){return C(b)};if(a.Lb.length)for(var c=0;c<a.Lb.length;c++)a.Lb[c](b)},Li=function(a,b,c,d){b?d?Mi(a,d):Ni(a,c):Ni(a,{user:null});a.Lb=[];a.Kb=[]};Bi.prototype.getRedirectResult=function(){var a=this;return new A(function(b,c){a.mb?a.mb().then(b,c):(a.Lb.push(b),a.Kb.push(c),Oi(a))})};
	var Oi=function(a){var b=new N("timeout");a.kb&&a.kb.cancel();a.kb=le(Ii.get()).then(function(){a.mb||Li(a,!0,null,b)})},Ci=function(a){this.i=a};Ci.prototype.Wd=function(a,b){if(!a)return D(new N("invalid-auth-event"));var c=a.ba,d=a.I;return a.O?this.ed(a,b):b.wb(c,d)?this.fd(a,b):D(new N("invalid-auth-event"))};Ci.prototype.ed=function(a,b){b.Ra(a.ba,null,a.getError(),a.I);return C()};
	Ci.prototype.fd=function(a,b){var c=a.I,d=a.ba,e=b.wb(d,c),f=a.rb;a=a.cc();return e(f,a).then(function(a){b.Ra(d,a,null,c)}).f(function(a){b.Ra(d,null,a,c)})};var Pi=function(a){this.g=a;this.za=this.W=null;this.Ea=0};Pi.prototype.D=function(){return{apiKey:this.g.j,refreshToken:this.W,accessToken:this.za,expirationTime:this.Ea}};
	var Ri=function(a,b){var c=b.idToken,d=b.refreshToken;b=Qi(b.expiresIn);a.za=c;a.Ea=b;a.W=d},Qi=function(a){return la()+1E3*parseInt(a,10)},Si=function(a,b){return zg(a.g,b).then(function(b){a.za=b.access_token;a.Ea=Qi(b.expires_in);a.W=b.refresh_token;return{accessToken:a.za,expirationTime:a.Ea,refreshToken:a.W}}).f(function(b){"auth/user-token-expired"==b.code&&(a.W=null);throw b;})};
	Pi.prototype.getToken=function(a){a=!!a;return this.za&&!this.W?D(new N("user-token-expired")):a||!this.za||la()>this.Ea-3E4?this.W?Si(this,{grant_type:"refresh_token",refresh_token:this.W}):C(null):C({accessToken:this.za,expirationTime:this.Ea,refreshToken:this.W})};var Ti=function(a,b,c,d,e){Gf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},Ui=function(a,b){Ib.call(this,a);for(var c in b)this[c]=b[c]};r(Ui,Ib);
	var W=function(a,b,c){this.$=[];this.j=a.apiKey;this.B=a.appName;this.v=a.authDomain||null;a=firebase.SDK_VERSION?of(firebase.SDK_VERSION):null;this.g=new R(this.j,null,a);this.ga=new Pi(this.g);Vi(this,b.idToken);Ri(this.ga,b);M(this,"refreshToken",this.ga.W);Wi(this,c||{});he.call(this);this.rc=!1;this.v&&rf()&&(this.m=Ki(this.v,this.j,this.B));this.wc=[];this.ia=null;this.ib=Xi(this);this.sb=q(this.Sc,this)};r(W,he);W.prototype.Sc=function(){this.ib.gb&&(this.ib.stop(),this.ib.start())};
	var Xi=function(a){return new Th(function(){return a.getToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.ga.Ea-la()-3E5;return 0<b?b:0},3E4,96E4,!1)},Yi=function(a){a.Bd||a.ib.gb||(a.ib.start(),dc(a,"tokenChanged",a.sb),Vb(a,"tokenChanged",a.sb))},Zi=function(a){dc(a,"tokenChanged",a.sb);a.ib.stop()},Vi=function(a,b){a.Pd=b;M(a,"_lat",b)},$i=function(a,b){La(a.wc,function(a){return a==b})},aj=function(a){for(var b=[],c=0;c<a.wc.length;c++)b.push(a.wc[c](a));
	return jd(b).then(function(){return a})},bj=function(a){a.m&&!a.rc&&(a.rc=!0,a.m.subscribe(a))},Wi=function(a,b){Gf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,isAnonymous:b.isAnonymous||!1,providerData:[]})};M(W.prototype,"providerId","firebase");
	var cj=function(){},dj=function(a){return C().then(function(){if(a.Bd)throw new N("app-deleted");})},ej=function(a){return Ea(a.providerData,function(a){return a.providerId})},gj=function(a,b){b&&(fj(a,b.providerId),a.providerData.push(b))},fj=function(a,b){La(a.providerData,function(a){return a.providerId==b})},hj=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)};
	W.prototype.copy=function(a){var b=this;b!=a&&(Gf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,isAnonymous:a.isAnonymous,providerData:[]}),w(a.providerData,function(a){gj(b,a)}),this.ga=a.ga,M(this,"refreshToken",this.ga.W))};W.prototype.reload=function(){var a=this;return this.c(dj(this).then(function(){return ij(a).then(function(){return aj(a)}).then(cj)}))};
	var ij=function(a){return a.getToken().then(function(b){var c=a.isAnonymous;return jj(a,b).then(function(){c||hj(a,"isAnonymous",!1);return b})})};W.prototype.getToken=function(a){var b=this;return this.c(dj(this).then(function(){return b.ga.getToken(a)}).then(function(a){if(!a)throw new N("internal-error");a.accessToken!=b.Pd&&(Vi(b,a.accessToken),b.Ka());hj(b,"refreshToken",a.refreshToken);return a.accessToken}))};
	var kj=function(a,b){b.idToken&&a.Pd!=b.idToken&&(Ri(a.ga,b),a.Ka(),Vi(a,b.idToken),hj(a,"refreshToken",a.ga.W))};W.prototype.Ka=function(){this.dispatchEvent(new Ui("tokenChanged"))};var jj=function(a,b){return Q(a.g,$g,{idToken:b}).then(q(a.df,a))};
	W.prototype.df=function(a){a=a.users;if(!a||!a.length)throw new N("internal-error");a=a[0];Wi(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified});for(var b=lj(a),c=0;c<b.length;c++)gj(this,b[c]);hj(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
	var lj=function(a){return(a=a.providerUserInfo)&&a.length?Ea(a,function(a){return new Ti(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]},nj=function(a,b){var c=null;return a.c(b.Sd(a.g,a.uid).then(function(b){kj(a,b);c=mj(a,b,"reauthenticate");a.ia=null;return a.reload()}).then(function(){return c}),!0)};W.prototype.reauthenticate=function(a){return oj(this,a)};
	var oj=function(a,b){return nj(a,b).then(function(){})},pj=function(a,b){return ij(a).then(function(){if(Ia(ej(a),b))return aj(a).then(function(){throw new N("provider-already-linked");})})},rj=function(a,b){var c=null;return a.c(pj(a,b.providerId).then(function(){return a.getToken()}).then(function(c){return b.Rd(a.g,c)}).then(function(b){c=mj(a,b,"link");return qj(a,b)}).then(function(){return c}))};W.prototype.link=function(a){return sj(this,a)};
	var sj=function(a,b){return rj(a,b).then(function(a){return a.user})},mj=function(a,b,c){var d=mg(b);b=ai(b);return Hf({user:a,credential:d,additionalUserInfo:b,operationType:c})},qj=function(a,b){kj(a,b);return a.reload().then(function(){return a})};h=W.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){kj(b,a);return b.reload()}))};
	h.updatePassword=function(a){var b=this;return this.c(this.getToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){kj(b,a);return b.reload()}))};h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return dj(this);var b=this;return this.c(this.getToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){kj(b,a);hj(b,"displayName",a.displayName||null);hj(b,"photoURL",a.photoUrl||null);return aj(b)}).then(cj))};
	h.unlink=function(a){var b=this;return this.c(ij(this).then(function(c){return Ia(ej(b),a)?Og(b.g,c,[a]).then(function(a){var c={};w(a.providerUserInfo||[],function(a){c[a.providerId]=!0});w(ej(b),function(a){c[a]||fj(b,a)});return aj(b)}):aj(b).then(function(){throw new N("no-such-provider");})}))};
	h["delete"]=function(){var a=this;return this.c(this.getToken().then(function(b){return Q(a.g,Zg,{idToken:b})}).then(function(){a.dispatchEvent(new Ui("userDeleted"))})).then(function(){for(var b=0;b<a.$.length;b++)a.$[b].cancel("app-deleted");a.$=[];a.Bd=!0;Zi(a);M(a,"refreshToken",null);a.m&&a.m.unsubscribe(a)})};
	h.wd=function(a,b){return"linkViaPopup"==a&&(this.aa||null)==b&&this.Z||"reauthViaPopup"==a&&(this.aa||null)==b&&this.Z||"linkViaRedirect"==a&&(this.wa||null)==b||"reauthViaRedirect"==a&&(this.wa||null)==b?!0:!1};h.Ra=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.aa||null)||(c&&this.Ma?this.Ma(c):b&&!c&&this.Z&&this.Z(b),this.C&&(this.C.cancel(),this.C=null),delete this.Z,delete this.Ma)};
	h.wb=function(a,b){return"linkViaPopup"==a&&b==(this.aa||null)?q(this.Ed,this):"reauthViaPopup"==a&&b==(this.aa||null)?q(this.Fd,this):"linkViaRedirect"==a&&(this.wa||null)==b?q(this.Ed,this):"reauthViaRedirect"==a&&(this.wa||null)==b?q(this.Fd,this):null};h.ac=function(){return qf(this.uid+":::")};var uj=function(a,b){return tj(a,b,function(){return pj(a,b.providerId).then(function(){return aj(a)})})};
	W.prototype.linkWithPopup=function(a){return uj(this,a).then(function(a){return a?Hf({user:a.user,credential:a.credential}):a})};
	var tj=function(a,b,c){if(!rf())return D(new N("operation-not-supported-in-this-environment"));if(a.ia)return D(a.ia);var d=Of(b.providerId),e=a.ac(),f=null;(!sf()||mf())&&a.v&&b.isOAuthProvider&&(f=qh(a.v,a.j,a.B,"linkViaPopup",b,null,e,firebase.SDK_VERSION||null));var g=ef(f,d&&d.Gb,d&&d.Fb);c=c().then(function(){vj(a);return a.getToken().then(function(){})}).then(function(){return a.m.Hb(g,"linkViaPopup",b,e,!!f)}).then(function(){return new A(function(b,c){a.Ra("linkViaPopup",null,new N("cancelled-popup-request"),
	a.aa||null);a.Z=b;a.Ma=c;a.aa=e;a.C=a.m.Pb(a,"linkViaPopup",g,e)})}).then(function(a){g&&df(g);return a}).f(function(a){g&&df(g);throw a;});return a.c(c,!1)};W.prototype.linkWithRedirect=function(a){var b=this;return wj(this,a,function(){return pj(b,a.providerId)})};
	var wj=function(a,b,c){if(!rf())return D(new N("operation-not-supported-in-this-environment"));if(a.ia)return D(a.ia);var d=null,e=a.ac();c=c().then(function(){vj(a);return a.getToken().then(function(){})}).then(function(){a.wa=e;return aj(a)}).then(function(b){a.Pa&&(b=a.Pa,b=b.i.set(xj,a.D(),b.u));return b}).then(function(){return a.m.Ib("linkViaRedirect",b,e)}).f(function(b){d=b;if(a.Pa)return yj(a.Pa);throw d;}).then(function(){if(d)throw d;});return a.c(c,!1)},vj=function(a){if(!a.m||!a.rc){if(a.m&&
	!a.rc)throw new N("internal-error");throw new N("auth-domain-config-required");}};W.prototype.Ed=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=this.getToken().then(function(d){return Yf(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=mj(c,a,"link");return qj(c,a)}).then(function(){return d});return this.c(e)};
	W.prototype.Fd=function(a,b){var c=this;this.C&&(this.C.cancel(),this.C=null);var d=null,e=C().then(function(){return Uf(Zf(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=mj(c,a,"reauthenticate");kj(c,a);c.ia=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};W.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getToken().then(function(b){return a.g.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};
	W.prototype.c=function(a,b){var c=this,d=zj(this,a,b);this.$.push(d);md(d,function(){Ka(c.$,d)});return d};var zj=function(a,b,c){return a.ia&&!c?(b.cancel(),D(a.ia)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.ia||a.dispatchEvent(new Ui("userInvalidated")),a.ia=b);throw b;})};W.prototype.toJSON=function(){return this.D()};
	W.prototype.D=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.j,appName:this.B,authDomain:this.v,stsTokenManager:this.ga.D(),redirectEventId:this.wa||null};w(this.providerData,function(b){a.providerData.push(If(b))});return a};
	var Aj=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new W(b,c,a);a.providerData&&w(a.providerData,function(a){a&&gj(d,Hf(a))});a.redirectEventId&&(d.wa=a.redirectEventId);return d},
	Bj=function(a,b,c){var d=new W(a,b);c&&(d.Pa=c);return d.reload().then(function(){return d})};var Cj=function(a){this.u=a;this.i=fi()},xj={name:"redirectUser",K:!1},yj=function(a){return a.i.remove(xj,a.u)},Dj=function(a,b){return a.i.get(xj,a.u).then(function(a){a&&b&&(a.authDomain=b);return Aj(a||{})})};var Ej=function(a){this.u=a;this.i=fi()},Fj={name:"authUser",K:!0},Gj=function(a,b){return a.i.set(Fj,b.D(),a.u)},Hj=function(a){return a.i.remove(Fj,a.u)},Ij=function(a,b){return a.i.get(Fj,a.u).then(function(a){a&&b&&(a.authDomain=b);return Aj(a||{})})};var Y=function(a){this.Ya=!1;M(this,"app",a);if(X(this).options&&X(this).options.apiKey)a=firebase.SDK_VERSION?of(firebase.SDK_VERSION):null,this.g=new R(X(this).options&&X(this).options.apiKey,null,a);else throw new N("invalid-api-key");this.$=[];this.Aa=[];this.af=firebase.INTERNAL.createSubscribe(q(this.Pe,this));Jj(this,null);this.ra=new Ej(X(this).options.apiKey+":"+X(this).name);this.lb=new Cj(X(this).options.apiKey+":"+X(this).name);this.Wb=this.c(Kj(this));this.xa=this.c(Lj(this));this.Xc=
	!1;this.Qc=q(this.vf,this);this.je=q(this.bb,this);this.sb=q(this.Sc,this);this.he=q(this.Ke,this);this.ie=q(this.Le,this);Mj(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this["delete"],this);this.Fa=0};Y.prototype.toJSON=function(){return{apiKey:X(this).options.apiKey,authDomain:X(this).options.authDomain,appName:X(this).name,currentUser:Z(this)&&Z(this).D()}};
	var Nj=function(a){return a.ye||D(new N("auth-domain-config-required"))},Mj=function(a){var b=X(a).options.authDomain,c=X(a).options.apiKey;b&&rf()&&(a.ye=a.Wb.then(function(){if(!a.Ya)return a.m=Ki(b,c,X(a).name),a.m.subscribe(a),Z(a)&&bj(Z(a)),a.Mb&&(bj(a.Mb),a.Mb=null),a.m}))};h=Y.prototype;h.wd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.aa==b&&!!this.Z;default:return!1}};
	h.Ra=function(a,b,c,d){"signInViaPopup"==a&&this.aa==d&&(c&&this.Ma?this.Ma(c):b&&!c&&this.Z&&this.Z(b),this.C&&(this.C.cancel(),this.C=null),delete this.Z,delete this.Ma)};h.wb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.aa==b&&this.Z?q(this.Ae,this):null};
	h.Ae=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.C&&(this.C.cancel(),this.C=null);var d=null,e=null,f=Wf(c.g,a).then(function(a){d=mg(a);e=ai(a);return a});a=c.Wb.then(function(){return f}).then(function(a){return Oj(c,a)}).then(function(){return Hf({user:Z(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.ac=function(){return qf()};
	var Pj=function(a,b){if(!rf())return D(new N("operation-not-supported-in-this-environment"));var c=Of(b.providerId),d=a.ac(),e=null;(!sf()||mf())&&X(a).options.authDomain&&b.isOAuthProvider&&(e=qh(X(a).options.authDomain,X(a).options.apiKey,X(a).name,"signInViaPopup",b,null,d,firebase.SDK_VERSION||null));var f=ef(e,c&&c.Gb,c&&c.Fb),c=Nj(a).then(function(a){return a.Hb(f,"signInViaPopup",b,d,!!e)}).then(function(){return new A(function(b,c){a.Ra("signInViaPopup",null,new N("cancelled-popup-request"),
	a.aa);a.Z=b;a.Ma=c;a.aa=d;a.C=a.m.Pb(a,"signInViaPopup",f,d)})}).then(function(a){f&&df(f);return a}).f(function(a){f&&df(f);throw a;});return a.c(c)};Y.prototype.signInWithPopup=function(a){return Pj(this,a).then(function(a){return a?Hf({user:a.user,credential:a.credential}):a})};Y.prototype.getRedirectResult=function(){return Qj(this).then(function(a){return a?Hf({user:a.user,credential:a.credential}):a})};
	Y.prototype.signInWithRedirect=function(a){if(!rf())return D(new N("operation-not-supported-in-this-environment"));var b=this,c=Nj(this).then(function(){return b.m.Ib("signInViaRedirect",a)});return this.c(c)};
	var Qj=function(a){if(!rf())return D(new N("operation-not-supported-in-this-environment"));var b=Nj(a).then(function(){return a.m.getRedirectResult()});return a.c(b)},Oj=function(a,b){var c={};c.apiKey=X(a).options.apiKey;c.authDomain=X(a).options.authDomain;c.appName=X(a).name;return a.Wb.then(function(){return Bj(c,b,a.lb)}).then(function(b){if(Z(a)&&b.uid==Z(a).uid)return Z(a).copy(b),a.bb(b);Jj(a,b);bj(b);return a.bb(b)}).then(function(){a.Ka()})},Jj=function(a,b){Z(a)&&($i(Z(a),a.je),dc(Z(a),
	"tokenChanged",a.sb),dc(Z(a),"userDeleted",a.he),dc(Z(a),"userInvalidated",a.ie),Zi(Z(a)));b&&(b.wc.push(a.je),Vb(b,"tokenChanged",a.sb),Vb(b,"userDeleted",a.he),Vb(b,"userInvalidated",a.ie),0<a.Fa&&Yi(b));M(a,"currentUser",b)};Y.prototype.signOut=function(){var a=this,b=this.xa.then(function(){if(!Z(a))return C();Jj(a,null);return Hj(a.ra).then(function(){a.Ka()})});return this.c(b)};
	var Rj=function(a){var b=Dj(a.lb,X(a).options.authDomain).then(function(b){if(a.Mb=b)b.Pa=a.lb;return yj(a.lb)});return a.c(b)},Kj=function(a){var b=X(a).options.authDomain,c=Rj(a).then(function(){return Ij(a.ra,b)}).then(function(b){return b?(b.Pa=a.lb,a.Mb&&(a.Mb.wa||null)==(b.wa||null)?b:b.reload().then(function(){return Gj(a.ra,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:Hj(a.ra)})):null}).then(function(b){Jj(a,b||null)});return a.c(c)},Lj=function(a){return a.Wb.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Ya)return a.Qc()}).f(function(){}).then(function(){if(!a.Ya){a.Xc=
	!0;var b=a.ra;b.i.addListener(Fj,b.u,a.Qc)}})};h=Y.prototype;h.vf=function(){var a=this;return Ij(this.ra,X(this).options.authDomain).then(function(b){if(!a.Ya){var c;if(c=Z(a)&&b){c=Z(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Z(a).copy(b),Z(a).getToken();if(Z(a)||b)Jj(a,b),b&&(bj(b),b.Pa=a.lb),a.m&&a.m.subscribe(a),a.Ka()}})};h.bb=function(a){return Gj(this.ra,a)};h.Sc=function(){this.Ka();this.bb(Z(this))};h.Ke=function(){this.signOut()};
	h.Le=function(){this.signOut()};var Sj=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=mg(b);d=ai(b);return Oj(a,b)}).then(function(){return Hf({user:Z(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=Y.prototype;h.Pe=function(a){var b=this;this.addAuthTokenListener(function(){a.next(Z(b))})};h.onAuthStateChanged=function(a,b,c){var d=this;this.Xc&&firebase.Promise.resolve().then(function(){p(a)?a(Z(d)):p(a.next)&&a.next(Z(d))});return this.af(a,b,c)};
	h.getToken=function(a){var b=this,c=this.xa.then(function(){return Z(b)?Z(b).getToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};h.signInWithCustomToken=function(a){var b=this;return this.xa.then(function(){return Sj(b,Q(b.g,ah,{token:a}))}).then(function(a){a=a.user;hj(a,"isAnonymous",!1);return b.bb(a)}).then(function(){return Z(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.xa.then(function(){return Sj(c,Q(c.g,jg,{email:a,password:b}))}).then(function(a){return a.user})};
	h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.xa.then(function(){return Sj(c,Q(c.g,Yg,{email:a,password:b}))}).then(function(a){return a.user})};h.signInWithCredential=function(a){return Tj(this,a).then(function(a){return a.user})};var Tj=function(a,b){return a.xa.then(function(){return Sj(a,b.bc(a.g))})};
	Y.prototype.signInAnonymously=function(){var a=Z(this),b=this;return a&&a.isAnonymous?C(a):this.xa.then(function(){return Sj(b,b.g.signInAnonymously())}).then(function(a){a=a.user;hj(a,"isAnonymous",!0);return b.bb(a)}).then(function(){return Z(b)})};var X=function(a){return a.app},Z=function(a){return a.currentUser};h=Y.prototype;h.getUid=function(){return Z(this)&&Z(this).uid||null};h.Ka=function(){if(this.Xc)for(var a=0;a<this.Aa.length;a++)if(this.Aa[a])this.Aa[a](Z(this)&&Z(this)._lat||null)};
	h.se=function(a){this.addAuthTokenListener(a);this.Fa++;0<this.Fa&&Z(this)&&Yi(Z(this))};h.hf=function(a){var b=this;w(this.Aa,function(c){c==a&&b.Fa--});0>this.Fa&&(this.Fa=0);0==this.Fa&&Z(this)&&Zi(Z(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Aa.push(a);this.c(this.xa.then(function(){b.Ya||Ia(b.Aa,a)&&a(Z(b)&&Z(b)._lat||null)}))};h.removeAuthTokenListener=function(a){La(this.Aa,function(b){return b==a})};
	h["delete"]=function(){this.Ya=!0;for(var a=0;a<this.$.length;a++)this.$[a].cancel("app-deleted");this.$=[];this.ra&&(a=this.ra,a.i.removeListener(Fj,a.u,this.Qc));this.m&&this.m.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.$.push(a);md(a,function(){Ka(b.$,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(Eg(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
	h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new Lh(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.g.sendPasswordResetEmail(a).then(function(){}))};T(Y.prototype,{applyActionCode:{name:"applyActionCode",a:[S("code")]},checkActionCode:{name:"checkActionCode",a:[S("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[S("code"),S("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[S("email"),S("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[S("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[Sh(Nh(),Oh(),"nextOrObserver"),
	Oh("opt_error",!0),Oh("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[S("email")]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[Qh()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[S("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",a:[S("email"),S("password")]},signInWithPopup:{name:"signInWithPopup",a:[Rh()]},signInWithRedirect:{name:"signInWithRedirect",a:[Rh()]},signOut:{name:"signOut",
	a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[S("code")]}});
	T(W.prototype,{"delete":{name:"delete",a:[]},getToken:{name:"getToken",a:[{name:"opt_forceRefresh",ha:"a boolean",optional:!0,ja:function(a){return"boolean"==typeof a}}]},link:{name:"link",a:[Qh()]},linkWithPopup:{name:"linkWithPopup",a:[Rh()]},linkWithRedirect:{name:"linkWithRedirect",a:[Rh()]},reauthenticate:{name:"reauthenticate",a:[Qh()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[S(null,!0)]},unlink:{name:"unlink",a:[S("provider")]},
	updateEmail:{name:"updateEmail",a:[S("email")]},updatePassword:{name:"updatePassword",a:[S("password")]},updateProfile:{name:"updateProfile",a:[Nh("profile")]}});T(A.prototype,{f:{name:"catch"},then:{name:"then"}});U(lg,"credential",function(a,b){return new ig(a,b)},[S("email"),S("password")]);T(ag.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Nh("customOAuthParameters")]}});U(ag,"credential",bg,[Sh(S(),Nh(),"token")]);
	T(cg.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Nh("customOAuthParameters")]}});U(cg,"credential",dg,[Sh(S(),Nh(),"token")]);T(eg.prototype,{addScope:{name:"addScope",a:[S("scope")]},setCustomParameters:{name:"setCustomParameters",a:[Nh("customOAuthParameters")]}});U(eg,"credential",fg,[Sh(S(),Ph(),"idToken",!0),Sh(S(),Ph(),"accessToken",!0)]);T(gg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[Nh("customOAuthParameters")]}});
	U(gg,"credential",hg,[Sh(S(),Nh(),"token"),S("secret",!0)]);T(N.prototype,{toJSON:{name:"toJSON",a:[S(null,!0)]}});T(og.prototype,{toJSON:{name:"toJSON",a:[S(null,!0)]}});T(Sf.prototype,{toJSON:{name:"toJSON",a:[S(null,!0)]}});
	(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:Y,Error:N};U(a,"EmailAuthProvider",lg,[]);U(a,"FacebookAuthProvider",ag,[]);U(a,"GithubAuthProvider",cg,[]);U(a,"GoogleAuthProvider",eg,[]);U(a,"TwitterAuthProvider",gg,[]);firebase.INTERNAL.registerService("auth",function(a,c){a=new Y(a);c({INTERNAL:{getUid:q(a.getUid,a),getToken:q(a.getToken,a),addAuthTokenListener:q(a.se,a),removeAuthTokenListener:q(a.hf,a)}});return a},a,function(a,
	c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:W})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);
	}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
	module.exports = firebase.auth;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 417:
/*!********************************!*\
  !*** ./~/firebase/database.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(/*! ./app */ 415);
	(function(){
	/*! @license Firebase v3.7.4
	    Build: 3.7.4-rc.1
	    Terms: https://firebase.google.com/terms/
	
	    ---
	
	    typedarray.js
	    Copyright (c) 2010, Linden Research, Inc.
	
	    Permission is hereby granted, free of charge, to any person obtaining a copy
	    of this software and associated documentation files (the "Software"), to deal
	    in the Software without restriction, including without limitation the rights
	    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	    copies of the Software, and to permit persons to whom the Software is
	    furnished to do so, subject to the following conditions:
	
	    The above copyright notice and this permission notice shall be included in
	    all copies or substantial portions of the Software.
	
	    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	    THE SOFTWARE. */
	(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
	function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
	function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
	function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function na(){this.Fd=void 0}
	function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),pa(f,c),
	c.push(":"),oa(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(){this.Wa=-1};function ta(){this.Wa=-1;this.Wa=64;this.M=[];this.Wd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(ta,sa);ta.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
	function ua(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],m=a.M[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
	5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+m&4294967295}
	ta.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Wd,f=this.$b;d<b;){if(0==f)for(;d<=c;)ua(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){ua(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){ua(this,e);f=0;break}}this.$b=f;this.Pd+=b}};var r;a:{var va=aa.navigator;if(va){var wa=va.userAgent;if(wa){r=wa;break a}}r=""};var t=Array.prototype,xa=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
	a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Aa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ba=t.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ca=t.every?function(a,b,
	c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Da(a,b){var c=Ea(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ea(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Fa(a,b){var c=xa(a,b);0<=c&&t.splice.call(a,c,1)}function Ga(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
	function Ha(a,b){a.sort(b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ka(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function La(a){var b=0,c;for(c in a)b++;return b}function Ma(a){for(var b in a)return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Oa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Pa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
	function Qa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ra(a,b){var c=Qa(a,b,void 0);return c&&a[c]}function Sa(a){for(var b in a)return!1;return!0}function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b};var Ua=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),Va=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Wa=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),Xa=-1!=r.toLowerCase().indexOf("webkit");
	(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
	function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){if(!a)throw db(b);}function db(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function gb(a){var b=[];fb(a,function(a,d){ea(d)?ya(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var hb=firebase.Promise;function ib(){var a=this;this.reject=this.resolve=null;this.ra=new hb(function(b,c){a.resolve=b;a.reject=c})}function jb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(kb(a.ra),1===b.length?b(c):b(c,d))}}function kb(a){a.then(void 0,ba)};function lb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ma(a)}function x(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,cb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function B(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(A(a,b,d)+"must be a valid function.");}function ob(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(A(a,b,!0)+"must be a valid context object.");};function pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function C(a,b){this.name=a;this.R=b}function qb(a,b){return new C(a,b)};function rb(a,b){return sb(a.name,b.name)}function tb(a,b){return sb(a,b)};function ub(a){this.uc=a;this.Cd="firebase:"}g=ub.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,x(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:lb(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return eb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new ub(b)}}catch(c){}return new vb}var xb=wb("localStorage"),yb=wb("sessionStorage");function zb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.qg=d;this.gf=e||"";this.$a=xb.get("host:"+a)||this.host}function Ab(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&xb.set("host:"+a.host,a.$a))}
	function Bb(a,b,c){D("string"===typeof b,"typeof type must == string");D("object"===typeof c,"typeof params must == object");if(b===Cb)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if(b===Db)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.pe);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Eb(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Fb(a,b){var c=new Gb;Hb(a,new E(""),function(a,e){Ib(c,a,Jb(e,b))});return c}function Jb(a,b){var c=a.C().H(),c=Eb(c,b),d;if(a.J()){var e=Eb(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new Kb(e,G(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new Kb(c)));a.O(H,function(a,c){var e=Jb(c,b);e!==c&&(d=d.T(a,e))});return d};var Lb=function(){var a=1;return function(){return a++}}(),D=cb,Mb=db;
	function Nb(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ga(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
	l)}return null}function Ob(a){var b=mb(a);a=new ta;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Wd[d]=c&255,c/=256;ua(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function Pb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Pb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+x(arguments[c]):b+arguments[c],b+=" ";return b}var Qb=null,Rb=!0;
	function Sb(a,b){cb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Qb=q(console.log,console):"object"===typeof console.log&&(Qb=function(a){console.log(a)})),b&&yb.set("logging_enabled",!0)):ha(a)?Qb=a:(Qb=null,yb.remove("logging_enabled"))}function I(a){!0===Rb&&(Rb=!1,null===Qb&&!0===yb.get("logging_enabled")&&Sb(!0));if(Qb){var b=Pb.apply(null,arguments);Qb(b)}}
	function Tb(a){return function(){I(a,arguments)}}function Ub(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Pb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Vb(a){var b=Pb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function J(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Pb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Wb(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Vb(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
	c&&"undefined"!=c||Vb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new zb(b,d,c,"ws"===e||"wss"===e),path:new E(f)}}function Xb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
	function Yb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
	function sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Zb(a),d=Zb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+x(b));}
	function ac(a){if("object"!==typeof a||null===a)return x(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=x(b[d]),c+=":",c+=ac(a[b[d]]);return c+"}"}function bc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function cc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
	function dc(a){D(!Xb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fc(a){try{a()}catch(b){setTimeout(function(){J("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function gc(a,b,c){Object.defineProperty(a,b,{get:c})}function hc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function ic(a){var b={},c={},d={},e="";try{var f=a.split("."),b=lb(Nb(f[0])||""),c=lb(Nb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Je:c,data:d,mg:e}}function jc(a){a=ic(a);var b=a.Je;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function kc(a){a=ic(a).Je;return"object"===typeof a&&!0===w(a,"admin")};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.nd=function(a,b){return 0!==this.compare(new C("[MIN_NAME]",a),new C("[MIN_NAME]",b))};lc.prototype.Hc=function(){return oc};function pc(a){D(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(pc,lc);g=pc.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?sb(a.name,b.name):c};
	g.Ec=function(a,b){var c=G(a),c=L.F(this.bc,c);return new C(b,c)};g.Fc=function(){var a=L.F(this.bc,qc);return new C("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function rc(){}la(rc,lc);g=rc.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?sb(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",new Kb("[PRIORITY-POST]",qc))};
	g.Ec=function(a,b){var c=G(a);return new C(b,new Kb("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var H=new rc;function sc(){}la(sc,lc);g=sc.prototype;g.compare=function(a,b){return sb(a.name,b.name)};g.xc=function(){throw Mb("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",L)};g.Ec=function(a){D(p(a),"KeyIndex indexValue must always be a string.");return new C(a,L)};g.toString=function(){return".key"};
	var tc=new sc;function uc(){}la(uc,lc);g=uc.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?sb(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return oc};g.Fc=function(){return vc};g.Ec=function(a,b){var c=G(a);return new C(b,c)};g.toString=function(){return".value"};var wc=new uc;function xc(a,b){this.od=a;this.cc=b}xc.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function yc(a,b,c){var d=Ja(a.od,function(d,f){var h=w(a.cc,f);D(h,"Missing index implementation for "+f);if(d===mc){if(h.xc(b.R)){for(var k=[],m=c.Wb(qb),l=M(m);l;)l.name!=b.name&&k.push(l),l=M(m);k.push(b);return zc(k,nc(h))}return mc}h=c.get(b.name);k=d;h&&(k=k.remove(new C(b.name,h)));return k.Oa(b,b.R)});return new xc(d,a.cc)}
	function Ac(a,b,c){var d=Ja(a.od,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new C(b.name,d)):a});return new xc(d,a.cc)}var Bc=new xc({".priority":mc},{".priority":H});function Kb(a,b){this.B=a;D(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||L;Cc(this.aa);this.Db=null}var Dc=["object","boolean","number","string"];g=Kb.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new Kb(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:L};g.P=function(a){return a.e()?this:".priority"===K(a)?this.aa:L};g.Da=function(){return!1};g.Ve=function(){return null};
	g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:L.T(a,b).fa(this.aa)};g.F=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;D(".priority"!==c||1===Ec(a),".priority must be the last token in a path");return this.T(c,L.F(N(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
	g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Fc(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+dc(this.B):a+this.B;this.Db=Ob(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===L)return 1;if(a instanceof O)return-1;D(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=xa(Dc,b),e=xa(Dc,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
	g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return x(this.H(!0))};function Gc(){this.set={}}g=Gc.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return eb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return Sa(this.set)};g.count=function(){return La(this.set)};function Hc(a,b){v(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Ic(a){D(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}Ic.prototype.Ge=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ie.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Ic.prototype.gc=function(a,b,c){Jc(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({Ie:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
	Ic.prototype.Ic=function(a,b,c){Jc(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ie===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Jc(a,b){D(Da(a.Bf,function(a){return a===b}),"Unknown event: "+b)};var Kc=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function Lc(){Ic.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!pb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ge("online",!1))},!1)}}la(Lc,Ic);Lc.prototype.Ue=function(a){D("online"===a,"Unknown event type: "+a);return[this.hc]};ca(Lc);function Mc(){Ic.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ge("visible",b))},!1)}}la(Mc,Ic);Mc.prototype.Ue=function(a){D("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(Mc);function E(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function P(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return P(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
	function Nc(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=sb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ec(a){return a.o.length-a.Y}function N(a){var b=a.Y;b<a.o.length&&b++;return new E(a.o,b)}function Oc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=E.prototype;
	g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new E(a,0)};
	g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof E)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new E(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ec(this)!==Ec(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
	g.contains=function(a){var b=this.Y,c=a.Y;if(Ec(this)>Ec(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var Q=new E("");function Pc(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Qe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qc(this)}Pc.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qc(this)};Pc.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
	function Qc(a){if(768<a.Ha)throw Error(a.Qe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Qe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rc(a));}function Rc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof E?b:new E(b),d=a,e;null!==(e=K(c));)d=new Tc(e,d,w(d.A.children,e)||new Sc),c=N(c);return d}g=Tc.prototype;g.Ca=function(){return this.A.value};function Vc(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
	g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;v(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.O(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new E(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
	function Wc(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=eb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.La=a;this.ba=b?b:$c}g=Zc.prototype;g.Oa=function(a,b){return new Zc(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new Zc(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function ad(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
	g.Wb=function(a){return new bd(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new bd(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new bd(this.ba,a,this.La,!0,b)};g.We=function(a){return new bd(this.ba,null,this.La,!0,a)};function bd(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.le?a.right:a.left}
	function M(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function cd(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}g=dd.prototype;
	g.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function ed(a){return a.left.e()?a:ed(a.left)}g.Gc=function(){return ed(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
	g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gd(e)};function hd(a){if(a.left.e())return $c;a.left.ea()||a.left.left.ea()||(a=id(a));a=a.X(null,null,null,hd(a.left),null);return gd(a)}
	g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=id(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=jd(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=kd(c),c.left.left.ea()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,hd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gd(c)};g.ea=function(){return this.color};
	function gd(a){a.right.ea()&&!a.left.ea()&&(a=ld(a));a.left.ea()&&a.left.left.ea()&&(a=jd(a));a.left.ea()&&a.right.ea()&&(a=kd(a));return a}function id(a){a=kd(a);a.right.left.ea()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
	function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}g=md.prototype;g.X=function(){return this};g.Oa=function(a,b){return new dd(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var $c=new md;function O(a,b,c){this.k=a;(this.aa=b)&&Cc(this.aa);a.e()&&D(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=O.prototype;g.J=function(){return!1};g.C=function(){return this.aa||L};g.fa=function(a){return this.k.e()?this:new O(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?L:a};g.P=function(a){var b=K(a);return null===b?this:this.Q(b).P(N(a))};g.Da=function(a){return null!==this.k.get(a)};
	g.T=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new C(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ac(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=yc(this.yb,c,this.k));e=d.e()?L:this.aa;return new O(d,e,c)};g.F=function(a,b){var c=K(a);if(null===c)return b;D(".priority"!==K(a)||1===Ec(a),".priority must be the last token in a path");var d=this.Q(c).F(N(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
	var nd=/^(0|[1-9]\d*)$/;g=O.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(H,function(f,h){b[f]=h.H(a);c++;e&&nd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Fc(this.C().H())+":");this.O(H,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":Ob(a)}return this.Db};
	g.Ve=function(a,b,c){return(c=od(this,c))?(a=ad(c,new C(a,b)))?a.name:null:ad(this.k,a)};function pd(a,b){var c;c=(c=od(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new C(c,a.k.get(c)):null}function qd(a,b){var c;c=(c=od(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new C(c,a.k.get(c)):null}g.O=function(a,b){var c=od(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
	g.Xb=function(a,b){var c=od(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,qb),d=cd(c);null!=d&&0>b.compare(d,a);)M(c),d=cd(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=od(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,qb),d=cd(c);null!=d&&0<b.compare(d,a);)M(c),d=cd(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===qc?-1:0};
	g.nb=function(a){if(a===tc||Pa(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;D(a!==tc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(qb),f=M(c);f;)e=e||a.xc(f.R),d.push(f),f=M(c);d=e?zc(d,nc(a)):mc;e=a.toString();c=Ta(b.cc);c[e]=a;a=Ta(b.od);a[e]=d;return new O(this.k,this.aa,new xc(a,c))};g.yc=function(a){return a===tc||Pa(this.yb.cc,a.toString())};
	g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(H);a=a.Wb(H);for(var c=M(b),d=M(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=M(b);d=M(a)}return null===c&&null===d}return!1};function od(a,b){return b===tc?null:a.yb.get(b.toString())}g.toString=function(){return x(this.H(!0))};function G(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Kb(a,G(c));if(a instanceof Array){var d=L,e=a;v(e,function(a,b){if(eb(e,b)&&"."!==b.substring(0,1)){var c=G(a);if(c.J()||!c.e())d=
	d.T(b,c)}});return d.fa(G(c))}var f=[],h=!1,k=a;fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=G(k[a]);b.e()||(h=h||!b.C().e(),f.push(new C(a,b)))}});if(0==f.length)return L;var m=zc(f,rb,function(a){return a.name},tb);if(h){var l=zc(f,nc(H));return new O(m,G(c),new xc({".priority":l},{".priority":H}))}return new O(m,G(c),Bc)}var rd=Math.log(2);
	function sd(a){this.count=parseInt(Math.log(a+1)/rd,10);this.Oe=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function td(a){var b=!(a.Cf&1<<a.Oe);a.Oe--;return b}
	function zc(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new dd(u,l.R,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new dd(u,l.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new dd(F,k.R,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var F=td(b),fd=Math.pow(2,b.count-(z+1));F?d(fd,!1):(d(fd,!1),d(fd,!0))}return l}(new sd(a.length));
	return null!==f?new Zc(d||b,f):new Zc(d||b)}function Fc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a}function Cc(a){if(a.J()){var b=a.H();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&eb(b,".sv"),"Priority must be a string or number.")}else D(a===qc||a.e(),"priority of unexpected type.");D(a===qc||a.C().e(),"Priority nodes can't have a priority of their own.")}var L=new O(new Zc(tb),null,Bc);function ud(){O.call(this,new Zc(tb),L,Bc)}la(ud,O);g=ud.prototype;
	g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return L};g.e=function(){return!1};var qc=new ud,oc=new C("[MIN_NAME]",L),vc=new C("[MAX_NAME]",qc);function vd(a,b){this.value=a;this.children=b||wd}var wd=new Zc(function(a,b){return a===b?0:a<b?-1:1});function xd(a){var b=R;v(a,function(a,d){b=b.set(new E(d),a)});return b}g=vd.prototype;g.e=function(){return null===this.value&&this.children.e()};function yd(a,b,c){if(null!=a.value&&c(a.value))return{path:Q,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=yd(a,N(b),c),null!=b?{path:(new E(d)).n(b.path),value:b.value}:null):null}
	function zd(a,b){return yd(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):R};g.set=function(a,b){if(a.e())return new vd(b,this.children);var c=K(a),d=(this.children.get(c)||R).set(N(a),b),c=this.children.Oa(c,d);return new vd(this.value,c)};
	g.remove=function(a){if(a.e())return this.children.e()?R:new vd(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?R:new vd(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
	function Ad(a,b,c){if(b.e())return c;var d=K(b);b=Ad(a.children.get(d)||R,N(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new vd(a.value,d)}function Bd(a,b){return Cd(a,Q,b)}function Cd(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Cd(f,b.n(a),c)});return c(b,a.value,d)}function Dd(a,b,c){return Ed(a,b,Q,c)}function Ed(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?Ed(a,N(b),c.n(e),d):null}
	function Fd(a,b,c){Gd(a,b,Q,c)}function Gd(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Gd(a,N(b),c.n(e),d):R}function Hd(a,b){Id(a,Q,b)}function Id(a,b,c){a.children.ha(function(a,e){Id(e,b.n(a),c)});a.value&&c(b,a.value)}function Jd(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var R=new vd(null);vd.prototype.toString=function(){var a={};Hd(this,function(b,c){a[b.toString()]=c.toString()});return x(a)};var Kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ld=/[\[\].#$\u0000-\u001F\u007F]/;function Md(a){return p(a)&&0!==a.length&&!Kd.test(a)}function Nd(a){return null===a||p(a)||ga(a)&&!Xb(a)||ia(a)&&eb(a,".sv")}function Od(a,b,c,d){d&&!n(b)||Pd(A(a,1,d),b,c)}
	function Pd(a,b,c){c instanceof E&&(c=new Pc(c,a));if(!n(b))throw Error(a+"contains undefined "+Rc(c));if(ha(b))throw Error(a+"contains a function "+Rc(c)+" with contents: "+b.toString());if(Xb(b))throw Error(a+"contains "+b.toString()+" "+Rc(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;fb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Md(b)))throw Error(a+" contains an invalid key ("+b+") "+Rc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Pd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rc(c)+" in addition to actual children.");}}
	function Qd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Md(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Nc);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
	function Rd(a,b,c){var d=A(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];fb(b,function(a,b){var k=new E(a);Pd(d,b,c.n(k));if(".priority"===Oc(k)&&!Nd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Qd(d,e)}
	function Sd(a,b,c){if(Xb(c))throw Error(A(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nd(c))throw Error(A(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
	function Td(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ud(a,b){if(n(b)&&!Md(b))throw Error(A(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function Vd(a,b){if(!p(b)||0===b.length||Ld.test(b))throw Error(A(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Wd(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}
	function Xd(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!Md(b.jc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!Ld.test(c)));if(d)throw Error(A(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function Gb(){this.k=this.B=null}Gb.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=K(a);a=N(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Ib(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Gc);var d=K(b);a.k.contains(d)||a.k.add(d,new Gb);a=a.k.get(d);b=N(b);Ib(a,b,c)}}
	function Yd(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(H,function(b,c){Ib(a,new E(b),c)});return Yd(a,b)}return null!==a.k?(c=K(b),b=N(b),a.k.contains(c)&&Yd(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Hb(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new E(b.toString()+"/"+a);Hb(e,f,c)})}Gb.prototype.O=function(a){null!==this.k&&Hc(this.k,function(b,c){a(b,c)})};function Zd(a,b){this.type=$d;this.source=a;this.path=b}Zd.prototype.Mc=function(){return this.path.e()?new Zd(this.source,Q):new Zd(this.source,N(this.path))};Zd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ae(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}ae.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new E(a)),a.e()?null:a.value?new ce(this.source,Q,a.value):new ae(this.source,Q,a);D(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ae(this.source,N(this.path),this.children)};ae.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function de(a,b,c){this.type=ee;this.source=fe;this.path=a;this.Ob=b;this.Id=c}de.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return D(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new E(a));return new de(Q,a,this.Id)}D(K(this.path)===a,"operationForChild called for unrelated child.");return new de(N(this.path),this.Ob,this.Id)};
	de.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};function ce(a,b,c){this.type=ge;this.source=a;this.path=b;this.Ga=c}ce.prototype.Mc=function(a){return this.path.e()?new ce(this.source,Q,this.Ga.Q(a)):new ce(this.source,N(this.path),this.Ga)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};var ge=0,be=1,ee=2,$d=3;function he(a,b,c,d){this.ee=a;this.Se=b;this.Hb=c;this.Ee=d;D(!d||b,"Tagged queries must be from server.")}var fe=new he(!0,!1,null,!1),ie=new he(!1,!0,null,!1);he.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Hb+")":"server"};function je(a,b,c){this.A=a;this.da=b;this.Sb=c}function ke(a){return a.da}function le(a){return a.Sb}function me(a,b){return b.e()?a.da&&!a.Sb:ne(a,K(b))}function ne(a,b){return a.da&&!a.Sb||a.A.Da(b)}je.prototype.j=function(){return this.A};function oe(a,b){this.N=a;this.Ld=b}function pe(a,b,c,d){return new oe(new je(b,c,d),a.Ld)}function qe(a){return a.N.da?a.N.j():null}oe.prototype.w=function(){return this.Ld};function re(a){return a.Ld.da?a.Ld.j():null};function se(){}se.prototype.Te=function(){return null};se.prototype.fe=function(){return null};var te=new se;function ue(a,b,c){this.xf=a;this.Ka=b;this.yd=c}ue.prototype.Te=function(a){var b=this.Ka.N;if(ne(b,a))return b.j().Q(a);b=null!=this.yd?new je(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};ue.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:re(this.Ka);a=this.xf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function ve(a,b){this.Sd=a;this.Df=b}function we(a){this.U=a}
	we.prototype.eb=function(a,b,c,d){var e=new xe,f;if(b.type===ge)b.source.ee?c=ye(this,a,b.path,b.Ga,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w())&&!b.path.e(),c=ze(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===be)b.source.ee?c=Ae(this,a,b.path,b.children,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w()),c=Be(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new ue(c,a,d);d=a.N.j();if(b.e()||".priority"===K(b))ke(a.w())?
	b=c.Aa(re(a)):(b=a.w().j(),D(b instanceof O,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=K(b),k=c.qc(h,a.w());null==k&&ne(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,N(b),f,e):a.N.j().Da(h)?this.U.F(d,h,L,N(b),f,e):d;b.e()&&ke(a.w())&&(d=c.Aa(re(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=ke(a.w())||null!=c.lc(Q);c=pe(a,b,d,this.U.Na())}else c=Ce(this,a,b.path,b.Ob,c,d,e);else if(b.type===$d)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=De(this,new oe(a.N,new je(f,
	h,b.Sb)),d,c,te,e);else throw Mb("Unknown operation type: "+b.type);e=Na(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=qe(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(Ee(qe(d))));return new ve(c,e)};
	function De(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())D(ke(b.w()),"If change path is empty, we must have complete server data"),le(b.w())?(e=re(b),d=d.rc(e instanceof O?e:L)):d=d.Aa(re(b)),f=a.U.ya(b.N.j(),d,f);else{var m=K(c);if(".priority"==m)D(1==Ec(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var l=N(c);ne(h,m)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(m).F(l,d):h.j().Q(m)):d=d.qc(m,
	b.w());f=null!=d?a.U.F(h.j(),m,d,l,e,f):h.j()}}return pe(b,f,h.da||c.e(),a.U.Na())}function ze(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(m.j(),d,null);else if(h.Na()&&!m.Sb)d=m.j().F(c,d),d=h.ya(m.j(),d,null);else{var l=K(c);if(!me(m,c)&&1<Ec(c))return b;var u=N(c);d=m.j().Q(l).F(u,d);d=".priority"==l?h.fa(m.j(),d):h.F(m.j(),l,d,u,te,null)}m=m.da||c.e();b=new oe(b.N,new je(d,m,h.Na()));return De(a,b,c,e,new ue(e,b,f),k)}
	function ye(a,b,c,d,e,f,h){var k=b.N;e=new ue(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=pe(b,h,!0,a.U.Na());else if(f=K(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=pe(b,h,k.da,k.Sb);else{c=N(c);var m=k.j().Q(f);if(!c.e()){var l=e.Te(f);d=null!=l?".priority"===Oc(c)&&l.P(c.parent()).e()?l:l.F(c,d):L}m.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=pe(b,h,k.da,a.U.Na()))}return a}
	function Ae(a,b,c,d,e,f,h){var k=b;Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))&&(k=ye(a,k,u,l,e,f,h))});Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))||(k=ye(a,k,u,l,e,f,h))});return k}function Fe(a,b){Hd(b,function(b,d){a=a.F(b,d)});return a}
	function Be(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!ke(b.w()))return b;var m=b;c=c.e()?d:Ad(R,c,d);var l=b.w().j();c.children.ha(function(c,d){if(l.Da(c)){var F=b.w().j().Q(c),F=Fe(F,d);m=ze(a,m,new E(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!ne(b.w(),c)&&null==d.value;l.Da(c)||F||(F=b.w().j().Q(c),F=Fe(F,d),m=ze(a,m,new E(c),F,e,f,h,k))});return m}
	function Ce(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=le(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.da||me(m,c))return ze(a,b,c,m.j().P(c),e,f,k,h);if(c.e()){var l=R;m.j().O(tc,function(a,b){l=l.set(new E(a),b)});return Be(a,b,c,l,e,f,k,h)}return b}l=R;Hd(d,function(a){var b=c.n(a);me(m,b)&&(l=l.set(a,m.j().P(b)))});return Be(a,b,c,l,e,f,k,h)};function Ge(a){this.V=a;this.g=a.m.g}function He(a,b,c,d){var e=[],f=[];ya(b,function(b){b.type===Ie&&a.g.nd(b.qe,b.Ja)&&f.push(new S(Je,b.Ja,b.Xa))});Ke(a,e,Le,b,d,c);Ke(a,e,Me,b,d,c);Ke(a,e,Je,f,d,c);Ke(a,e,Ie,b,d,c);Ke(a,e,Ne,b,d,c);return e}function Ke(a,b,c,d,e,f){d=za(d,function(a){return a.type===c});Ha(d,q(a.Ff,a));ya(d,function(c){var d=Oe(a,c,f);ya(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
	function Oe(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}Ge.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw Mb("Should only compare child_ events.");return this.g.compare(new C(a.Xa,a.Ja),new C(b.Xa,b.Ja))};function Pe(a,b){this.V=a;var c=a.m,d=new Qe(c.g),c=T(c)?new Qe(c.g):c.xa?new Re(c):new Se(c);this.hf=new we(c);var e=b.w(),f=b.N,h=d.ya(L,e.j(),null),k=c.ya(L,f.j(),null);this.Ka=new oe(new je(k,f.da,c.Na()),new je(h,e.da,d.Na()));this.Za=[];this.Jf=new Ge(a)}function Te(a){return a.V}g=Pe.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=re(this.Ka);return b&&(T(this.V.m)||!a.e()&&!b.Q(K(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
	g.kb=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;ya(this.Za,function(a){(a=a.Me(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
	g.eb=function(a,b,c){a.type===be&&null!==a.source.Hb&&(D(re(this.Ka),"We should always have a full cache before handling merges"),D(qe(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;D(c.N.j().yc(b.U.g),"Event snap not indexed");D(c.w().j().yc(b.U.g),"Server snap not indexed");D(ke(a.Sd.w())||!ke(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Ue(this,a.Df,a.Sd.N.j(),null)};
	function Ve(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(H,function(a,b){d.push(new S(Me,b,a))});c.da&&d.push(Ee(c.j()));return Ue(a,d,c.j(),b)}function Ue(a,b,c,d){return He(a.Jf,b,c,d?[d]:a.Za)};function We(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.hd=a}We.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};We.prototype.ge=function(){return this.hd};We.prototype.Tb=function(){return this.ae.Tb(this)};We.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+x(this.Md.be())};function Xe(a,b,c){this.ae=a;this.error=b;this.path=c}Xe.prototype.Yb=function(){return this.path};Xe.prototype.ge=function(){return"cancel"};
	Xe.prototype.Tb=function(){return this.ae.Tb(this)};Xe.prototype.toString=function(){return this.path.toString()+":cancel"};function Ye(){this.vb=[]}function Ze(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new $e(f));c.add(e)}c&&a.vb.push(c)}function af(a,b,c){Ze(a,c);bf(a,function(a){return a.Z(b)})}function cf(a,b,c){Ze(a,c);bf(a,function(a){return a.contains(b)||b.contains(a)})}
	function bf(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Qb&&I("event: "+h.toString());fc(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function $e(a){this.qa=a;this.jd=[]}$e.prototype.add=function(a){this.jd.push(a)};$e.prototype.Yb=function(){return this.qa};function Qe(a){this.g=a}g=Qe.prototype;g.F=function(a,b,c,d,e,f){D(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?df(f,new S(Le,e,b)):D(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?df(f,new S(Me,c,b)):df(f,new S(Ie,c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
	g.ya=function(a,b,c){null!=c&&(a.J()||a.O(H,function(a,e){b.Da(a)||df(c,new S(Le,e,a))}),b.J()||b.O(H,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||df(c,new S(Ie,e,b,f))}else df(c,new S(Me,e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?L:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Se(a){this.he=new Qe(a.g);this.g=a.g;var b;a.ka?(b=ef(a),b=a.g.Ec(ff(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=gf(a),a=a.g.Ec(hf(a),b)):a=a.g.Fc();this.vc=a}g=Se.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new C(b,c))||(c=L);return this.he.F(a,b,c,d,e,f)};
	g.ya=function(a,b,c){b.J()&&(b=L);var d=b.nb(this.g),d=d.fa(L),e=this;b.O(H,function(a,b){e.matches(new C(a,b))||(d=d.T(a,L))});return this.he.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.he};function Re(a){this.sa=new Se(a);this.g=a.g;D(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!jf(a)}g=Re.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new C(b,c))||(c=L);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):kf(this,a,b,c,e,f)};
	g.ya=function(a,b,c){var d;if(b.J()||b.e())d=L.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=L.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=M(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(L);var k,m,l;if(this.Ib){b=d.We(this.g);k=this.sa.vc;m=this.sa.Uc;var u=nc(this.g);l=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
	m=this.sa.vc,l=nc(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=M(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.T(f.name,L)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
	function kf(a,b,c,d,e,f){var h;if(a.Ib){var k=nc(a.g);h=function(a,b){return k(b,a)}}else h=nc(a.g);D(b.Eb()==a.oa,"");var m=new C(c,d),l=a.Ib?pd(b,a.g):qd(b,a.g),u=a.sa.matches(m);if(b.Da(c)){for(var z=b.Q(c),l=e.fe(a.g,l,a.Ib);null!=l&&(l.name==c||b.Da(l.name));)l=e.fe(a.g,l,a.Ib);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&df(f,new S(Ie,d,c,z)),b.T(c,d);null!=f&&df(f,new S(Le,z,c));b=b.T(c,L);return null!=l&&a.sa.matches(l)?(null!=f&&df(f,new S(Me,l.R,l.name)),b.T(l.name,l.R)):b}return d.e()?
	b:u&&0<=h(l,m)?(null!=f&&(df(f,new S(Le,l.R,l.name)),df(f,new S(Me,d,c))),b.T(c,d).T(l.name,L)):b};function S(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.qe=d;this.Dd=void 0}function Ee(a){return new S(Ne,a)}var Me="child_added",Le="child_removed",Ie="child_changed",Je="child_moved",Ne="value";function xe(){this.fb={}}
	function df(a,b){var c=b.type,d=b.Xa;D(c==Me||c==Ie||c==Le,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if(c==Me&&f==Le)a.fb[d]=new S(Ie,b.Ja,d,e.Ja);else if(c==Le&&f==Me)delete a.fb[d];else if(c==Le&&f==Ie)a.fb[d]=new S(Le,e.qe,d);else if(c==Ie&&f==Me)a.fb[d]=new S(Me,b.Ja,d);else if(c==Ie&&f==Ie)a.fb[d]=new S(Ie,b.Ja,d,e.qe);else throw Mb("Illegal combination of changes: "+b+" occurred after "+
	e);}else a.fb[d]=b};function lf(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=H}var mf=new lf;function jf(a){return""===a.mb?a.ka:"l"===a.mb}function ff(a){D(a.ka,"Only valid if start has been set");return a.dc}function ef(a){D(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function hf(a){D(a.na,"Only valid if end has been set");return a.ac}
	function gf(a){D(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function nf(a){var b=new lf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=lf.prototype;g.ne=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.oe=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=nf(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
	g.gd=function(a,b){var c=nf(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function of(a,b){var c=nf(a);c.g=b;return c}function pf(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=jf(a)?"l":"r");b.vf=c}a.g!==H&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function qf(a){return T(a)&&a.g==H}
	function rf(a){var b={};if(qf(a))return b;var c;a.g===H?c="$priority":a.g===wc?c="$value":a.g===tc?c="$key":(D(a.g instanceof pc,"Unrecognized index type!"),c=a.g.toString());b.orderBy=x(c);a.ka&&(b.startAt=x(a.dc),a.Kb&&(b.startAt+=","+x(a.zb)));a.na&&(b.endAt=x(a.ac),a.Rb&&(b.endAt+=","+x(a.xb)));a.xa&&(jf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return x(pf(this))};function sf(a){this.W=a}var tf=new sf(new vd(null));function uf(a,b,c){if(b.e())return new sf(new vd(c));var d=zd(a.W,b);if(null!=d){var e=d.path,d=d.value;b=P(e,b);d=d.F(b,c);return new sf(a.W.set(e,d))}a=Ad(a.W,b,new vd(c));return new sf(a)}function vf(a,b,c){var d=a;fb(c,function(a,c){d=uf(d,b.n(a),c)});return d}sf.prototype.Ed=function(a){if(a.e())return tf;a=Ad(this.W,a,R);return new sf(a)};function wf(a,b){var c=zd(a.W,b);return null!=c?a.W.get(c.path).P(P(c.path,b)):null}
	function xf(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(H,function(a,c){b.push(new C(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new C(a,c.value))});return b}function yf(a,b){if(b.e())return a;var c=wf(a,b);return null!=c?new sf(new vd(c)):new sf(a.W.subtree(b))}sf.prototype.e=function(){return this.W.e()};sf.prototype.apply=function(a){return zf(Q,this.W,a)};
	function zf(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=zf(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Af(){this.Jd=L}Af.prototype.j=function(a){return this.Jd.P(a)};Af.prototype.toString=function(){return this.Jd.toString()};function Bf(a){this.oc=a}Bf.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Cf(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Df(){this.S=tf;this.la=[];this.Bc=-1}function Ef(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Df.prototype;
	g.Ed=function(a){var b=Ea(this.la,function(b){return b.Zc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Ff(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Gf(this.la,Hf,Q),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;v(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
	g.Aa=function(a,b,c,d){if(c||d){var e=yf(this.S,a);return!d&&e.e()?b:d||null!=b||null!=wf(e,Q)?(e=Gf(this.la,function(b){return(b.visible||d)&&(!c||!(0<=xa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=wf(this.S,a);if(null!=e)return e;e=yf(this.S,a);return e.e()?b:null!=b||null!=wf(e,Q)?(b=b||L,e.apply(b)):null};
	g.rc=function(a,b){var c=L,d=wf(this.S,a);if(d)d.J()||d.O(H,function(a,b){c=c.T(a,b)});else if(b){var e=yf(this.S,a);b.O(H,function(a,b){var d=yf(e,new E(a)).apply(b);c=c.T(a,d)});ya(xf(e),function(a){c=c.T(a.name,a.R)})}else e=yf(this.S,a),ya(xf(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=wf(this.S,a))return null;a=yf(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
	g.qc=function(a,b,c){a=a.n(b);var d=wf(this.S,a);return null!=d?d:ne(c,b)?yf(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return wf(this.S,a)};g.Xd=function(a,b,c,d,e,f){var h;a=yf(this.S,a);h=wf(a,Q);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=nc(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=M(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=M(e);return b};
	function Ff(a,b){return a.Ga?a.path.contains(b):!!Qa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Hf(a){return a.visible}
	function Gf(a,b,c){for(var d=tf,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=P(c,h),d=uf(d,h,f.Ga)):h.contains(c)&&(h=P(h,c),d=uf(d,Q,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=P(c,h),d=vf(d,h,f.children);else{if(h.contains(c))if(h=P(h,c),h.e())d=vf(d,Q,f.children);else if(f=w(f.children,K(h)))f=f.P(N(h)),d=uf(d,Q,f)}else throw Mb("WriteRecord should have .snap or .children");}}return d}function If(a,b){this.Lb=a;this.W=b}g=If.prototype;
	g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Xd=function(a,b,c,d,e){return this.W.Xd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new If(this.Lb.n(a),this.W)};function Jf(a,b){this.rf={};this.Vc=new Kf(a);this.va=b;var c=1E4+2E4*Math.random();hc(q(this.lf,this),Math.floor(c))}Jf.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&eb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);hc(q(this.lf,this),Math.floor(6E5*Math.random()))};function Lf(){this.tc={}}function Mf(a,b,c){n(c)||(c=1);eb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Lf.prototype.get=function(){return Ta(this.tc)};function Kf(a){this.Ef=a;this.rd=null}Kf.prototype.get=function(){var a=this.Ef.get(),b=Ta(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var Nf={},Of={};function Pf(a){a=a.toString();Nf[a]||(Nf[a]=new Lf);return Nf[a]}function Qf(a,b){var c=a.toString();Of[c]||(Of[c]=b());return Of[c]};function Rf(a,b,c){this.f=Tb("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Sf(a,b){if(n(b))return"tag$"+b;D(qf(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Rf.prototype;
	g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Sf(a,c),h={};this.$[f]=h;a=rf(a.m);var k=this;Tf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Sf(a,b);delete this.$[c]};g.kf=function(){};g.re=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.ye=function(){};
	function Tf(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+gb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=lb(h.responseText)}catch(c){J("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
	b)}else 401!==h.status&&404!==h.status&&J("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Uf(a){this.te=a;this.Bd=[];this.Qb=0;this.Yd=-1;this.Fb=null}function Vf(a,b,c){a.Yd=b;a.Fb=c;a.Yd<a.Qb&&(a.Fb(),a.Fb=null)}function Wf(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;fc(function(){f.te(d[e])})}if(a.Qb===a.Yd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};var Cb="websocket",Db="long_polling";var Xf=null;"undefined"!==typeof MozWebSocket?Xf=MozWebSocket:"undefined"!==typeof WebSocket&&(Xf=WebSocket);function Yf(a,b,c,d){this.Zd=a;this.f=Tb(this.Zd);this.frames=this.zc=null;this.pb=this.qb=this.Fe=0;this.Va=Pf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ke=Bb(b,Cb,a)}var Zf;
	Yf.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Ke);this.wc=!1;xb.set("previous_websocket_failure",!0);try{this.Ia=new Xf(this.Ke)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
	a.length,Mf(e.Va,"bytes_received",a.length),$f(e),null!==e.frames)ag(e,a);else{a:{D(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&ag(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};Yf.prototype.start=function(){};
	Yf.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Xf&&!Zf};Yf.responsesRequiredToBeHealthy=2;Yf.healthyTimeout=3E4;g=Yf.prototype;g.sd=function(){xb.remove("previous_websocket_failure")};function ag(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=lb(c);a.Xf(c)}}
	g.send=function(a){$f(this);a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=bc(a,16384);1<a.length&&bg(this,String(a.length));for(var b=0;b<a.length;b++)bg(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
	function $f(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&bg(a,"0");$f(a)},Math.floor(45E3))}function bg(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function cg(a,b,c,d){this.Zd=a;this.f=Tb(a);this.jc=b;this.pb=this.qb=0;this.Va=Pf(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Bb(b,Db,a)}}var dg,eg;
	cg.prototype.open=function(a,b){this.Ne=0;this.ia=b;this.bf=new Uf(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Yb(function(){if(!c.Ab){c.Ta=new fg(function(a,b,d,k,m){gg(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,Vf(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){gg(c,arguments);
	Wf(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);hg(c.Ta,a,function(){})}})};
	cg.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;ig(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
	cg.isAvailable=function(){return dg||!eg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=cg.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
	g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=bc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Ne,pg:a.length,Pe:a[b]});c.Ud&&ig(c);this.Ne++}};function gg(a,b){var c=x(b).length;a.pb+=c;Mf(a.Va,"bytes_received",c)}
	function fg(a,b,c,d){this.Yc=d;this.ib=c;this.ve=new Gc;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Lb();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
	a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
	fg.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
	function ig(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Pe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Pe;d++}else break;jg(a,b+c,a.$d);return!0}return!1}function jg(a,b,c){function d(){a.ve.remove(c);ig(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));hg(a,b,function(){clearTimeout(e);d()})}
	function hg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function kg(a){lg(this,a)}var mg=[cg,Yf];function lg(a,b){var c=Yf&&Yf.isAvailable(),d=c&&!(xb.Ze||!0===xb.get("previous_websocket_failure"));b.qg&&(c||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Yf];else{var e=a.Wc=[];cc(mg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ng(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function og(a,b,c,d,e,f,h){this.id=a;this.f=Tb("c:"+this.id+":");this.te=c;this.Lc=d;this.ia=e;this.se=f;this.L=b;this.Ad=[];this.Le=0;this.sf=new kg(b);this.Ua=0;this.Cb=h;this.f("Connection created");pg(this)}
	function pg(a){var b=ng(a.sf);a.I=new b("c:"+a.id+":"+a.Le++,a.L,void 0,a.Cb);a.xe=b.responsesRequiredToBeHealthy||0;var c=qg(a,a.I),d=rg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=hc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
	a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function rg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(xb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
	function qg(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=$b("t",c);c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ab(a.L,f);0==a.Ua&&(a.I.start(),sg(a,a.I,d),"5"!==e&&J("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&tg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];ug(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
	a.se&&(a.se(c),a.se=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ab(a.L,c),1===a.Ua?a.close():(vg(a),pg(a))):"e"===d?Ub("Server Error: "+c):"o"===d?(a.f("got pong on primary."),wg(a),xg(a)):Ub("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=$b("t",c),c=$b("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?yg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
	a.pf--,yg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}og.prototype.ua=function(a){zg(this,{t:"d",d:a})};function ug(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
	function yg(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,ug(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}og.prototype.wd=function(a){wg(this);this.te(a)};function wg(a){a.Bb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
	function tg(a,b){a.D=new b("c:"+a.id+":"+a.Le++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(qg(a,a.D),rg(a,a.D));hc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function sg(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Bb=!0):hc(function(){xg(a)},Math.floor(5E3))}
	function xg(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),zg(a,{t:"c",d:{t:"p",d:{}}}))}function zg(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}og.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,vg(this),this.ia&&(this.ia(),this.ia=null))};function vg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Ag(a,b,c,d,e,f){this.id=Bg++;this.f=Tb("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.ue=d;this.L=a;this.ob=this.Fa=this.Cb=this.ze=null;this.$c=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Vd=f;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.me=null;Cg(this,0);Mc.Vb().gc("visible",this.Zf,this);-1===a.host.indexOf("fblocal")&&
	Lc.Vb().gc("online",this.Yf,this)}var Bg=0,Dg=0;g=Ag.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(x(a));D(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
	g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};D(qf(a.m)||!T(a.m),"listen() called for non-default but complete query");D(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Eg(this,a)};
	function Eg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=pf(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&eb(k,"w")){var l=w(k,"w");ea(l)&&0<=xa(l,"no_index")&&J("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Fg(a,d,e),b.G&&b.G(m,
	k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Gg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||kc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Gg(a){if(a.ma&&a.ob){var b=a.ob,c=jc(b)?"auth":"gauth",d={cred:b};null===a.Vd?d.noauth=!0:"object"===typeof a.Vd&&(d.authvar=a.Vd);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ke=0:Hg(a,d,c))})}}
	g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);D(qf(a.m)||!T(a.m),"unlisten() called for non-default but complete query");if(Fg(this,c,d)&&this.ma){var e=pf(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Ig(this,"o",a,b,c):this.Kc.push({we:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Ig(this,"om",a,b,c):this.Kc.push({we:a,action:"om",data:b,G:c})};
	g.xd=function(a,b){this.ma?Ig(this,"oc",a,null,b):this.Kc.push({we:a,action:"oc",data:null,G:b})};function Ig(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Jg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Jg(this,"m",a,b,c,d)};function Jg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Kg(a,b):a.f("Buffering put: "+c)}
	function Kg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
	g.wd=function(a){if("r"in a){this.f("from server: "+x(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?Lg(this,a.p,a.q):"ac"===b?Hg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Ub("Unrecognized action received from server: "+
	x(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Mg(this);this.Re=!1;this.Jc(!0)};
	function Cg(a,b){D(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;Ng(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Cg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Cg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
	g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};Og(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
	a+"ms"),Cg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
	function Ng(a){if(Og(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Dg++,f=a.Cb,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Fa={close:m,ua:function(a){D(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.$c.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new og(e,a.L,b,c,d,function(b){J(b+
	" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.ab=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];Sa(this.qd)&&(this.Sa=1E3,this.Fa||Cg(this,0))};
	function Lg(a,b,c){c=c?Aa(c,function(a){return ac(a)}).join("$"):"default";(a=Fg(a,b,c))&&a.G&&a.G("permission_denied")}function Fg(a,b,c){b=(new E(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===La(a.$[b])&&delete a.$[b]):d=void 0;return d}
	function Hg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.ob=null;a.de=!0;a.Fa.close();if("invalid_token"===b||"permission_denied"===b)a.ke++,3<=a.ke&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in
	a.oc.options?b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(b))}
	function Mg(a){Gg(a);v(a.$,function(b){v(b,function(b){Eg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Kg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Ig(a,b.action,b.we,b.data,b.G)}function Og(a){var b;b=Lc.Vb().hc;return Sa(a.qd)&&b};function Pg(a){a instanceof Qg||Vb("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,Q);this.INTERNAL=new Rg(this)}var Sg={TIMESTAMP:{".sv":"timestamp"}};g=Pg.prototype;g.app=null;g.jf=function(a){Tg(this,"ref");y("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
	g.gg=function(a){Tg(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=Wb(a);Xd("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Vb("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function Tg(a,b){null===a.ta&&Vb("Cannot call "+b+" on a deleted database.")}g.Pf=function(){y("database.goOffline",0,0,arguments.length);Tg(this,"goOffline");this.ta.ab()};
	g.Qf=function(){y("database.goOnline",0,0,arguments.length);Tg(this,"goOnline");this.ta.kc()};Object.defineProperty(Pg.prototype,"app",{get:function(){return this.ta.app}});function Rg(a){this.Ya=a}Rg.prototype.delete=function(){Tg(this.Ya,"delete");var a=Ug.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Vb("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
	Pg.prototype.ref=Pg.prototype.jf;Pg.prototype.refFromURL=Pg.prototype.gg;Pg.prototype.goOnline=Pg.prototype.Qf;Pg.prototype.goOffline=Pg.prototype.Pf;Rg.prototype["delete"]=Rg.prototype.delete;function V(a,b,c){this.A=a;this.V=b;this.g=c}V.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.be=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.be;V.prototype.toJSON=function(){y("Firebase.DataSnapshot.toJSON",0,1,arguments.length);return this.be()};V.prototype.toJSON=V.prototype.toJSON;
	V.prototype.Lf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Lf;V.prototype.n=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Vd("Firebase.DataSnapshot.child",a);var b=new E(a),c=this.V.n(b);return new V(this.A.P(b),c,H)};V.prototype.child=V.prototype.n;
	V.prototype.Da=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Vd("Firebase.DataSnapshot.hasChild",a);var b=new E(a);return!this.A.P(b).e()};V.prototype.hasChild=V.prototype.Da;V.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;
	V.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new V(d,b.V.n(c),H))})};V.prototype.forEach=V.prototype.forEach;V.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;
	V.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};gc(V.prototype,"key",V.prototype.getKey);V.prototype.Eb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};V.prototype.numChildren=V.prototype.Eb;V.prototype.wb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};gc(V.prototype,"ref",V.prototype.wb);function Vg(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Vg.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new We("value",this,new V(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
	g.matches=function(a){return a instanceof Vg?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Wg(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Wg.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
	g.createEvent=function(a,b){D(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new We(a.type,this,new V(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
	g.matches=function(a){if(a instanceof Wg){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=La(a.ga);if(b===La(this.ga)){if(1===b){var b=Ma(a.ga),c=Ma(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return Ka(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function Xg(){this.za={}}g=Xg.prototype;g.e=function(){return Sa(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof O?c.rc(d):L,k=!1);h=new Pe(a,new oe(new je(h,k,!1),new je(d,e,!1)));this.za[f]=h}h.Nb(b);return Ve(h,b)};
	g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=Yg(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],T(a.V.m)||e.push(a.V))})}else{var m=w(this.za,d);m&&(f=f.concat(m.kb(b,c)),m.e()&&(delete this.za[d],T(m.V.m)||e.push(m.V)))}h&&null==Yg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Zg(a){return za(Na(a.za),function(a){return!T(a.V.m)})}g.hb=function(a){var b=null;v(this.za,function(c){b=b||c.hb(a)});return b};
	function $g(a,b){if(T(b.m))return Yg(a);var c=b.ja();return w(a.za,c)}function Yg(a){return Ra(a.za,function(a){return T(a.V.m)})||null};function ah(a){this.wa=R;this.jb=new Df;this.De={};this.ic={};this.Cc=a}function bh(a,b,c,d,e){var f=a.jb,h=e;D(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=uf(f.S,b,c));f.Bc=d;return e?ch(a,new ce(fe,b,c)):[]}function dh(a,b,c,d){var e=a.jb;D(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=vf(e.S,b,c);e.Bc=d;c=xd(c);return ch(a,new ae(fe,b,c))}
	function eh(a,b,c){c=c||!1;var d=Ef(a.jb,b);if(a.jb.Ed(b)){var e=R;null!=d.Ga?e=e.set(Q,!0):fb(d.children,function(a,b){e=e.set(new E(a),b)});return ch(a,new de(d.path,e,c))}return[]}function fh(a,b,c){c=xd(c);return ch(a,new ae(ie,b,c))}function gh(a,b,c,d){d=hh(a,d);if(null!=d){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=new ce(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
	function kh(a,b,c,d){if(d=hh(a,d)){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=xd(c);c=new ae(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
	ah.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;Fd(this.wa,c,function(a,b){var f=P(a,c);d=d||b.hb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.hb(Q)):(f=new Xg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=L,Jd(this.wa.subtree(c),function(a,b){var c=b.hb(Q);c&&(d=d.T(a,c))}));var k=null!=$g(f,a);if(!k&&!T(a.m)){var m=lh(a);D(!(m in this.ic),"View does not exist, but we have a tag");var l=mh++;this.ic[m]=l;this.De["_"+l]=m}h=f.Nb(a,b,new If(c,this.jb),d,h);k||
	e||(f=$g(f,a),h=h.concat(nh(this,a,f)));return h};
	ah.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=$g(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Ea(e,function(a){return T(a.m)});var h=Dd(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=oh(d),k=0;k<d.length;++k){var m=d[k],l=m.V,m=ph(this,m);this.Cc.Ae(qh(l),rh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(qh(a),null);else{var u=this;ya(e,function(a){a.ja();
	var b=u.ic[lh(a)];u.Cc.Od(qh(a),b)})}sh(this,e)}return f};ah.prototype.Aa=function(a,b){var c=this.jb,d=Dd(this.wa,a,function(b,c){var d=P(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function oh(a){return Bd(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));v(d,function(a){e=e.concat(a)});return e})}function sh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.m)){var d=lh(d),e=a.ic[d];delete a.ic[d];delete a.De["_"+e]}}}
	function qh(a){return T(a.m)&&!qf(a.m)?a.wb():a}function nh(a,b,c){var d=b.path,e=rh(a,b);c=ph(a,c);b=a.Cc.Ae(qh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)D(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bd(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[Te(Yg(b))];var d=[];b&&(d=d.concat(Aa(Zg(b),function(a){return a.V})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(qh(c),rh(a,c));return b}
	function ph(a,b){var c=b.V,d=rh(a,c);return{ld:function(){return(b.w()||L).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=hh(a,d)){var h=ih(b);b=h.path;h=h.Hb;f=P(b,f);f=new Zd(new he(!1,!0,h,!0),f);b=jh(a,b,f)}else b=[]}else b=ch(a,new Zd(ie,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function lh(a){return a.path.toString()+"$"+a.ja()}function ih(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new E(a.substr(0,b))}}function hh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function rh(a,b){var c=lh(b);return w(a.ic,c)}var mh=1;
	function jh(a,b,c){var d=a.wa.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new If(b,a.jb),null)}function ch(a,b){return th(a,b,a.wa,null,new If(Q,a.jb))}function th(a,b,c,d,e){if(b.path.e())return uh(a,b,c,d,e);var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[],k=K(b.path),m=b.Mc(k);if((c=c.children.get(k))&&m)var l=d?d.Q(k):null,k=e.n(k),h=h.concat(th(a,m,c,l,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
	function uh(a,b,c,d,e){var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[];c.children.ha(function(c,f){var l=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(uh(a,z,f,l,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Qg(a,b,c){this.app=c;var d=new Bf(c);this.L=a;this.Va=Pf(a);this.Vc=null;this.ca=new Ye;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Rf(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride;if("undefined"!==da(b)&&null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
	try{x(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Ag(this.L,q(this.Gb,this),q(this.Jc,this),q(this.ue,this),d,b)}var f=this;Cf(d,function(a){f.va.kf(a)});this.og=Qf(a,q(function(){return new Jf(this.Va,this.va)},this));this.mc=new Tc;this.ie=new Af;this.pd=new ah({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=ch(f.pd,new ce(ie,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});vh(this,"connected",!1);this.ia=new Gb;this.Ya=new Pg(this);this.fd=
	0;this.je=null;this.K=new ah({Ae:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);cf(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Qg.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.pe};function wh(a){a=a.ie.j(new E(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function xh(a){a=a={timestamp:wh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	g.Gb=function(a,b,c,d){this.fd++;var e=new E(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=Ja(b,function(a){return G(a)}),a=kh(this.K,e,b,d)):(b=G(b),a=gh(this.K,e,b,d)):c?(d=Ja(b,function(a){return G(a)}),a=fh(this.K,e,d)):(d=G(b),a=ch(this.K,new ce(ie,e,d)));d=e;0<a.length&&(d=yh(this,e));cf(this.ca,d,a)};g.Jc=function(a){vh(this,"connected",a);!1===a&&zh(this)};g.ue=function(a){var b=this;cc(a,function(a,d){vh(b,d,a)})};
	function vh(a,b,c){b=new E("/.info/"+b);c=G(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=ch(a.pd,new ce(ie,b,c));cf(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=xh(this);b=G(b,c);var e=Jb(b,e),f=this.vd++,e=bh(this.K,a,e,f,!0);Ze(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||J("set at "+a+" failed: "+b);e=eh(h.K,f,!e);cf(h.ca,a,e);Ah(d,b,c)});e=Bh(this,a);yh(this,e);cf(this.ca,e,[])};
	g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=xh(this),f={};v(b,function(a,b){d=!1;var c=G(a);f[b]=Jb(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Ah(c,"ok");else{var h=this.vd++,k=dh(this.K,a,f,h);Ze(this.ca,k);var m=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||J("update at "+a+" failed: "+b);var e=eh(m.K,h,!e),f=a;0<e.length&&(f=yh(m,a));cf(m.ca,f,e);Ah(c,b,d)});v(b,function(b,c){var d=Bh(m,a.n(c));yh(m,d)});cf(this.ca,
	a,[])}};function zh(a){a.f("onDisconnectEvents");var b=xh(a),c=[];Hb(Fb(a.ia,b),Q,function(b,e){c=c.concat(ch(a.K,new ce(ie,b,e)));var f=Bh(a,b);yh(a,f)});a.ia=new Gb;cf(a.ca,Q,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Yd(c.ia,a);Ah(b,d,e)})};function Ch(a,b,c,d){var e=G(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Ib(a.ia,b,e);Ah(d,c,h)})}
	function Dh(a,b,c,d,e){var f=G(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Ib(a.ia,b,f);Ah(e,c,d)})}function Eh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Ah(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=G(c[m]);Ib(a.ia,b.n(m),l)}Ah(d,e,f)})}function Fh(a,b,c){c=".info"===K(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);af(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
	g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Kf(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ba(Oa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Mf(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");I(b,arguments)};
	function Ah(a,b,c){a&&fc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Gh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:Lb(),He:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||L;c.cd=d;d=c.update(d.H());if(n(d)){Pd("transaction failed: Data returned ",d,c.path);c.status=1;e=Uc(a.mc,b);var k=e.Ca()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&eb(d,".priority")?(k=w(d,".priority"),D(Nd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
	k=(a.K.Aa(b)||L).C().H();e=xh(a);d=G(d,k);e=Jb(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=bh(a.K,b,e,c.Ba,c.He);cf(a.ca,b,c);Hh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new V(c.cd,new U(a,c.path),H),c.G(null,!1,a))}function Hh(a,b){var c=b||a.mc;b||Ih(a,c);if(null!==c.Ca()){var d=Jh(a,c);D(0<d.length,"Sending zero length transaction queue");Ca(d,function(a){return 1===a.status})&&Kh(a,c.path(),d)}else c.kd()&&c.O(function(b){Hh(a,b)})}
	function Kh(a,b,c){for(var d=Aa(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];D(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=P(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(eh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
	null,null,!0,new V(h,k,H)))}c[f].Rd()}Ih(a,Uc(a.mc,b));Hh(a);cf(a.ca,b,e);for(f=0;f<d.length;f++)fc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(J("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;yh(a,b)}},e)}function yh(a,b){var c=Lh(a,b),d=c.path(),c=Jh(a,c);Mh(a,c,d);return d}
	function Mh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=za(b,function(a){return 1===a.status}),f=Aa(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],m=P(c,k.path),l=!1,u;D(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(eh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)l=!0,u="maxretry",e=e.concat(eh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||L;k.cd=z;var F=b[h].update(z.H());n(F)?(Pd("transaction failed: Data returned ",F,
	k.path),m=G(F),"object"===typeof F&&null!=F&&eb(F,".priority")||(m=m.fa(z.C())),z=k.Ba,F=xh(a),F=Jb(m,F),k.dd=m,k.ed=F,k.Ba=a.vd++,Fa(f,z),e=e.concat(bh(a.K,k.path,F,k.Ba,k.He)),e=e.concat(eh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(eh(a.K,k.Ba,!0)))}cf(a.ca,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new V(b[h].cd,k,H)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Ih(a,a.mc);for(h=0;h<d.length;h++)fc(d[h]);Hh(a)}}
	function Lh(a,b){for(var c,d=a.mc;null!==(c=K(b))&&null===d.Ca();)d=Uc(d,c),b=N(b);return d}function Jh(a,b){var c=[];Nh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Nh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Nh(a,b,c)})}function Ih(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.O(function(b){Ih(a,b)})}
	function Bh(a,b){var c=Lh(a,b).path(),d=Uc(a.mc,b);Yc(d,function(b){Oh(a,b)});Oh(a,d);Xc(d,function(b){Oh(a,b)});return c}
	function Oh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(D(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(D(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(eh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;cf(a.ca,b.path(),e);for(h=0;h<d.length;h++)fc(d[h])}};function Ug(){this.lb={};this.wf=!1}Ug.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ug.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ug.prototype.ce=function(a){this.wf=a};ca(Ug);Ug.prototype.interrupt=Ug.prototype.ab;Ug.prototype.resume=Ug.prototype.kc;var W={};W.nc=Ag;W.DataConnection=W.nc;Ag.prototype.ng=function(a,b){this.ua("q",{p:a},b)};W.nc.prototype.simpleListen=W.nc.prototype.ng;Ag.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};W.nc.prototype.echo=W.nc.prototype.Hf;Ag.prototype.interrupt=Ag.prototype.ab;W.zf=og;W.RealTimeConnection=W.zf;og.prototype.sendRequest=og.prototype.ua;og.prototype.close=og.prototype.close;
	W.Rf=function(a){var b=Ag.prototype.put;Ag.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ag.prototype.put=b}};W.hijackHash=W.Rf;W.yf=zb;W.ConnectionTarget=W.yf;W.ja=function(a){return a.ja()};W.queryIdentifier=W.ja;W.Uf=function(a){return a.u.Ra.$};W.listens=W.Uf;W.ce=function(a){Ug.Vb().ce(a)};W.forceRestClient=W.ce;W.Context=Ug;function Ph(a,b){this.committed=a;this.snapshot=b};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
	function Qh(a){var b=null,c=null;a.ka&&(b=ff(a));a.na&&(c=hf(a));if(a.g===tc){if(a.ka){if("[MIN_NAME]"!=ef(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=gf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===H){if(null!=b&&!Nd(b)||null!=c&&!Nd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.g instanceof pc||a.g===wc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function Rh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Sh(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
	g.gc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Td("Query.on",a,!1);B("Query.on",2,b,!1);var e=Th("Query.on",c,d);if("value"===a)Fh(this.u,this,new Vg(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Fh(this.u,this,new Wg(f,e.cancel,e.Ma))}return b};
	g.Ic=function(a,b,c){y("Query.off",0,3,arguments.length);Td("Query.off",a,!0);B("Query.off",2,b,!0);ob("Query.off",3,c);var d=null,e=null;"value"===a?d=new Vg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Wg(e,null,c||null));e=this.u;d=".info"===K(this.path)?e.pd.kb(this,d):e.K.kb(this,d);af(e.ca,this.path,d)};
	g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Td("Query.once",a,!1);B("Query.once",2,b,!0);var d=Th("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new ib;kb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
	g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ne(a),this.Nc)};
	g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.oe(a),this.Nc)};
	g.ag=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Vd("Query.orderByChild",a);Sh(this,"Query.orderByChild");var b=new E(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
	b=new pc(b);b=of(this.m,b);Qh(b);return new X(this.u,this.path,b,!0)};g.bg=function(){y("Query.orderByKey",0,0,arguments.length);Sh(this,"Query.orderByKey");var a=of(this.m,tc);Qh(a);return new X(this.u,this.path,a,!0)};g.cg=function(){y("Query.orderByPriority",0,0,arguments.length);Sh(this,"Query.orderByPriority");var a=of(this.m,H);Qh(a);return new X(this.u,this.path,a,!0)};
	g.dg=function(){y("Query.orderByValue",0,0,arguments.length);Sh(this,"Query.orderByValue");var a=of(this.m,wc);Qh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Od("Query.startAt",a,this.path,!0);Ud("Query.startAt",b);var c=this.m.Nd(a,b);Rh(c);Qh(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
	g.gd=function(a,b){y("Query.endAt",0,2,arguments.length);Od("Query.endAt",a,this.path,!0);Ud("Query.endAt",b);var c=this.m.gd(a,b);Rh(c);Qh(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
	g.If=function(a,b){y("Query.equalTo",1,2,arguments.length);Od("Query.equalTo",a,this.path,!1);Ud("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
	g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.toJSON=function(){y("Query.toJSON",0,1,arguments.length);return this.toString()};g.ja=function(){var a=ac(pf(this.m));return"{}"===a?"default":a};
	g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
	function Th(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,B(a,3,d.cancel,!0),d.Ma=c,ob(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(A(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.ag;
	X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;gc(X.prototype,"ref",X.prototype.wb);function Y(a,b){this.ta=a;this.qa=b}Y.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,!0);var b=new ib;this.ta.xd(this.qa,jb(b,a));return b.ra};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Wd("Firebase.onDisconnect().remove",this.qa);B("Firebase.onDisconnect().remove",1,a,!0);var b=new ib;Ch(this.ta,this.qa,null,jb(b,a));return b.ra};
	Y.prototype.remove=Y.prototype.remove;Y.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Wd("Firebase.onDisconnect().set",this.qa);Od("Firebase.onDisconnect().set",a,this.qa,!1);B("Firebase.onDisconnect().set",2,b,!0);var c=new ib;Ch(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.set=Y.prototype.set;
	Y.prototype.Jb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Wd("Firebase.onDisconnect().setWithPriority",this.qa);Od("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Sd("Firebase.onDisconnect().setWithPriority",2,b);B("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new ib;Dh(this.ta,this.qa,a,b,jb(d,c));return d.ra};Y.prototype.setWithPriority=Y.prototype.Jb;
	Y.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Wd("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.onDisconnect().update",a,this.qa);B("Firebase.onDisconnect().update",2,b,!0);
	c=new ib;Eh(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.update=Y.prototype.update;var Z={Mf:function(){dg=Zf=!0}};Z.forceLongPolling=Z.Mf;Z.Nf=function(){eg=!0};Z.forceWebSockets=Z.Nf;Z.Tf=function(){return Yf.isAvailable()};Z.isWebSocketsAvailable=Z.Tf;Z.lg=function(a,b){a.u.Ra.ze=b};Z.setSecurityDebugCallback=Z.lg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.fd=function(a){return a.u.fd};Z.dataUpdateCount=Z.fd;Z.Sf=function(a,b){a.u.je=b};Z.interceptServerData=Z.Sf;function U(a,b){if(!(a instanceof Qg))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,mf,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Oc(this.path)};
	g.n=function(a){y("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof E))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Vd("Firebase.child",b)}else Vd("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
	g.Of=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Wd("Firebase.set",this.path);Od("Firebase.set",a,this.path,!1);B("Firebase.set",2,b,!0);var c=new ib;this.u.Jb(this.path,a,null,jb(c,b));return c.ra};
	g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Wd("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.update",a,this.path);B("Firebase.update",2,b,!0);c=new ib;this.u.update(this.path,a,jb(c,b));return c.ra};
	g.Jb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Wd("Firebase.setWithPriority",this.path);Od("Firebase.setWithPriority",a,this.path,!1);Sd("Firebase.setWithPriority",2,b);B("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new ib;this.u.Jb(this.path,a,b,jb(d,c));return d.ra};
	g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Wd("Firebase.remove",this.path);B("Firebase.remove",1,a,!0);return this.set(null,a)};
	g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Wd("Firebase.transaction",this.path);B("Firebase.transaction",1,a,!1);B("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(A("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new ib;ha(b)&&kb(d.ra);Gh(this.u,this.path,a,function(a,c,h){a?
	d.reject(a):d.resolve(new Ph(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Wd("Firebase.setPriority",this.path);Sd("Firebase.setPriority",1,a);B("Firebase.setPriority",2,b,!0);var c=new ib;this.u.Jb(this.path.n(".priority"),a,null,jb(c,b));return c.ra};
	g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Wd("Firebase.push",this.path);Od("Firebase.push",a,this.path,!0);B("Firebase.push",2,b,!0);var c=wh(this.u),d=Kc(c),c=this.n(d),e=this.n(d),d=null!=a?c.set(a,b).then(function(){return e}):hb.resolve(e);c.then=q(d.then,d);c["catch"]=q(d.then,d,void 0);ha(b)&&kb(d);return c};g.ib=function(){Wd("Firebase.onDisconnect",this.path);return new Y(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;
	U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;gc(U.prototype,"database",U.prototype.Gf);gc(U.prototype,"key",U.prototype.getKey);gc(U.prototype,"parent",U.prototype.getParent);gc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
	try{firebase.INTERNAL.registerService("database",function(a){var b=Ug.Vb(),c=a.options.databaseURL;n(c)||Vb("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Wb(c),c=d.jc;Xd("Invalid Firebase Database URL",d);d.path.e()||Vb("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Vb("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Qg(c,b.wf,a);b.lb[a.name]=
	d;return d.Ya},{Reference:U,Query:X,Database:Pg,enableLogging:Sb,INTERNAL:Z,TEST_ACCESS:W,ServerValue:Sg})}catch(Uh){Vb("Failed to register the Firebase Database Service ("+Uh+")")};})();
	
	}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
	module.exports = firebase.database;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 418:
/*!*******************************!*\
  !*** ./~/firebase/storage.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(/*! ./app */ 415);
	(function(){
	/*! @license Firebase v3.7.4
	    Build: 3.7.4-rc.1
	    Terms: https://firebase.google.com/terms/ */
	(function(){for(var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,m=["Number","MIN_SAFE_INTEGER"],ba=0;ba<m.length-1;ba++){var ca=m[ba];ca in l||(l[ca]={});l=l[ca]}var da=m[m.length-1];
	-9007199254740991!=l[da]&&aa(l,da,{configurable:!0,writable:!0,value:-9007199254740991});
	var n=this,q=function(a){return void 0!==a},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
	!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};var r=function(a,b){this.code="storage/"+a;this.message="Firebase Storage: "+b;this.serverResponse=null;this.name="FirebaseError"};(function(){var a=Error;function b(){}b.prototype=a.prototype;r.b=a.prototype;r.prototype=new b;r.a=function(b,d,e){for(var c=Array(arguments.length-2),f=2;f<arguments.length;f++)c[f-2]=arguments[f];return a.prototype[d].apply(b,c)}})();
	var fa=function(){return new r("unknown","An unknown error occurred, please check the error payload for server response.")},ga=function(){return new r("canceled","User canceled the upload/download.")},ha=function(){return new r("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")},ia=function(a,b,c){return new r("invalid-argument","Invalid argument in `"+b+"` at index "+a+": "+c)},ja=function(){return new r("app-deleted","The Firebase app was deleted.")},t=function(a,b){return new r("invalid-format",
	"String does not match format '"+a+"': "+b)},u=function(a){throw new r("internal-error","Internal error: "+a);};var v="https://firebasestorage.googleapis.com";var ka=function(a){if("undefined"!==typeof firebase)return new firebase.Promise(a);throw Error("Error in Firebase Storage - be sure to load firebase-app.js first.");};var la=function(a,b){return-1!==a.indexOf(b)};var ma=function(a,b,c){function d(){z||(z=!0,b.apply(null,arguments))}function e(b){p=setTimeout(function(){p=null;a(g,2===C)},b)}function g(a,b){if(!z)if(a)d.apply(null,arguments);else if(2===C||B)d.apply(null,arguments);else{64>h&&(h*=2);var c;1===C?(C=2,c=0):c=1E3*(h+Math.random());e(c)}}function f(a){Pa||(Pa=!0,z||(null!==p?(a||(C=2),clearTimeout(p),e(0)):a||(C=1)))}var h=1,p=null,B=!1,C=0,z=!1,Pa=!1;e(0);setTimeout(function(){B=!0;f(!0)},c);return f};var na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},oa=function(a){var b={};na(a,function(a,d){b[a]=d});return b};var w=function(a,b,c,d){this.h=a;this.b={};this.method=b;this.headers={};this.body=null;this.j=c;this.l=this.a=null;this.c=[200];this.g=[];this.timeout=d;this.f=!0};var pa=function(a){var b=encodeURIComponent,c="?";na(a,function(a,e){a=b(a)+"="+b(e);c=c+a+"&"});return c=c.slice(0,-1)};var ra=function(a,b,c,d,e,g,f,h,p,B,C){this.C=a;this.A=b;this.v=c;this.o=d;this.B=e.slice();this.m=g.slice();this.j=this.l=this.c=this.b=null;this.f=this.g=!1;this.s=f;this.h=h;this.D=C;this.w=p;var z=this;this.u=ka(function(a,b){z.l=a;z.j=b;qa(z)})},sa=function(a,b,c){this.b=a;this.c=b;this.a=!!c},qa=function(a){function b(a,b){b?a(!1,new sa(!1,null,!0)):(b=new ta,b.a.withCredentials=d.D,d.b=b,ua(b,d.C,d.A,d.o,d.v).then(function(b){d.b=null;var c=0===va(b),e=x(b);if(!(c=!c))var c=la([408,429],e),
	f=la(d.m,e),c=500<=e&&600>e||c||f;c?(b=2===va(b),a(!1,new sa(!1,null,b))):a(!0,new sa(la(d.B,e),b))}))}function c(a,b){var c=d.l;a=d.j;var e=b.c;if(b.b)try{var g=d.s(e,wa(e));q(g)?c(g):c()}catch(B){a(B)}else null!==e?(b=fa(),g=wa(e),b.serverResponse=g,d.h?a(d.h(e,b)):a(b)):(b=b.a?d.f?ja():ga():new r("retry-limit-exceeded","Max retry time for operation exceeded, please try again."),a(b))}var d=a;a.g?c(0,new sa(!1,null,!0)):a.c=ma(b,c,a.w)};ra.prototype.a=function(){return this.u};
	ra.prototype.cancel=function(a){this.g=!0;this.f=a||!1;null!==this.c&&(0,this.c)(!1);null!==this.b&&this.b.abort()};var xa=function(a,b,c){var d=pa(a.b),d=a.h+d,e=a.headers?oa(a.headers):{};null!==b&&0<b.length&&(e.Authorization="Firebase "+b);e["X-Firebase-Storage-Version"]="webjs/"+("undefined"!==typeof firebase?firebase.SDK_VERSION:"AppManager");return new ra(d,a.method,e,a.body,a.c,a.g,a.j,a.a,a.timeout,0,c)};var ya=function(a){this.b=firebase.Promise.reject(a)};ya.prototype.a=function(){return this.b};ya.prototype.cancel=function(){};var y=function(a,b){this.bucket=a;this.path=b},za=function(a){var b=encodeURIComponent;return"/b/"+b(a.bucket)+"/o/"+b(a.path)},Ba=function(a){var b;try{b=Aa(a)}catch(c){return new y(a,"")}if(""===b.path)return b;throw new r("invalid-default-bucket","Invalid default bucket '"+a+"'.");},Aa=function(a){for(var b=null,c=[{L:/^gs:\/\/([A-Za-z0-9.\-]+)(\/(.*))?$/i,G:{bucket:1,path:3},K:function(a){"/"===a.path.charAt(a.path.length-1)&&(a.path=a.path.slice(0,-1))}},{L:/^https?:\/\/firebasestorage\.googleapis\.com\/v[A-Za-z0-9_]+\/b\/([A-Za-z0-9.\-]+)\/o(\/([^?#]*).*)?$/i,
	G:{bucket:1,path:3},K:function(a){a.path=decodeURIComponent(a.path)}}],d=0;d<c.length;d++){var e=c[d],g=e.L.exec(a);if(g){b=g[e.G.bucket];(g=g[e.G.path])||(g="");b=new y(b,g);e.K(b);break}}if(null==b)throw new r("invalid-url","Invalid URL '"+a+"'.");return b};var Ca=function(){this.a={};this.b=Number.MIN_SAFE_INTEGER},Da=function(a,b){function c(){delete e.a[d]}var d=a.b;a.b++;a.a[d]=b;var e=a;b.a().then(c,c)},Ea=function(a){na(a.a,function(a,c){c&&c.cancel(!0)});a.a={}};var A=function(a){return q(a)&&null!==a},Fa=function(a){return"string"===typeof a||a instanceof String},Ga=function(){return"undefined"!==typeof Blob};var Ha=function(a,b,c,d,e){this.a=a;this.g=null;null!==this.a&&(a=this.a.options,A(a)&&(a=a.storageBucket||null,this.g=null==a?null:Ba(a).bucket));this.o=b;this.m=c;this.j=e;this.l=d;this.c=12E4;this.b=6E4;this.h=new Ca;this.f=!1},Ia=function(a){return null!==a.a&&A(a.a.INTERNAL)&&A(a.a.INTERNAL.getToken)?a.a.INTERNAL.getToken().then(function(a){return A(a)?a.accessToken:null},function(){return null}):firebase.Promise.resolve(null)};Ha.prototype.bucket=function(){if(this.f)throw ja();return this.g};
	var D=function(a,b,c){if(a.f)return new ya(ja());b=a.m(b,c,null===a.a,a.j);Da(a.h,b);return b};var Ja=function(a,b){b=b.split("/").filter(function(a){return 0<a.length}).join("/");return 0===a.length?b:a+"/"+b},Ka=function(a){var b=a.lastIndexOf("/",a.length-2);return-1===b?a:a.slice(b+1)};var La=function(a,b){return b},E=function(a,b,c,d){this.c=a;this.b=b||a;this.writable=!!c;this.a=d||La},Ma=null,Na=function(){if(Ma)return Ma;var a=[];a.push(new E("bucket"));a.push(new E("generation"));a.push(new E("metageneration"));a.push(new E("name","fullPath",!0));var b=new E("name");b.a=function(a,b){return!Fa(b)||2>b.length?b:Ka(b)};a.push(b);b=new E("size");b.a=function(a,b){return A(b)?+b:b};a.push(b);a.push(new E("timeCreated"));a.push(new E("updated"));a.push(new E("md5Hash",null,!0));
	a.push(new E("cacheControl",null,!0));a.push(new E("contentDisposition",null,!0));a.push(new E("contentEncoding",null,!0));a.push(new E("contentLanguage",null,!0));a.push(new E("contentType",null,!0));a.push(new E("metadata","customMetadata",!0));a.push(new E("downloadTokens","downloadURLs",!1,function(a,b){if(!(Fa(b)&&0<b.length))return[];var c=encodeURIComponent;return b.split(",").map(function(b){var d=a.fullPath,d="https://firebasestorage.googleapis.com/v0"+("/b/"+c(a.bucket)+"/o/"+c(d));b=pa({alt:"media",
	token:b});return d+b})}));return Ma=a},Oa=function(a,b){Object.defineProperty(a,"ref",{get:function(){return b.o(b,new y(a.bucket,a.fullPath))}})},Qa=function(a,b){for(var c={},d=b.length,e=0;e<d;e++){var g=b[e];g.writable&&(c[g.c]=a[g.b])}return JSON.stringify(c)},Ra=function(a){if(!a||"object"!==typeof a)throw"Expected Metadata object.";for(var b in a){var c=a[b];if("customMetadata"===b){if("object"!==typeof c)throw"Expected object for 'customMetadata' mapping.";}else if(null!=c&&"object"===typeof c)throw"Mapping for '"+
	b+"' cannot be an object.";}};var F=function(a,b,c){for(var d=b.length,e=b.length,g=0;g<b.length;g++)if(b[g].b){d=g;break}if(!(d<=c.length&&c.length<=e))throw d===e?(b=d,d=1===d?"argument":"arguments"):(b="between "+d+" and "+e,d="arguments"),new r("invalid-argument-count","Invalid argument count in `"+a+"`: Expected "+b+" "+d+", received "+c.length+".");for(g=0;g<c.length;g++)try{b[g].a(c[g])}catch(f){if(f instanceof Error)throw ia(g,a,f.message);throw ia(g,a,f);}},G=function(a,b){var c=this;this.a=function(b){c.b&&!q(b)||a(b)};
	this.b=!!b},Sa=function(a,b){return function(c){a(c);b(c)}},H=function(a,b){function c(a){if(!("string"===typeof a||a instanceof String))throw"Expected string.";}var d;a?d=Sa(c,a):d=c;return new G(d,b)},Ta=function(){return new G(function(a){if(!(a instanceof Uint8Array||a instanceof ArrayBuffer||Ga()&&a instanceof Blob))throw"Expected Blob or File.";})},Ua=function(){return new G(function(a){if(!(("number"===typeof a||a instanceof Number)&&0<=a))throw"Expected a number 0 or greater.";})},Va=function(a,
	b){return new G(function(b){if(!(null===b||A(b)&&b instanceof Object))throw"Expected an Object.";A(a)&&a(b)},b)},I=function(){return new G(function(a){if(null!==a&&"function"!=ea(a))throw"Expected a Function.";},!0)};var J=function(a){return function(){var b=[];Array.prototype.push.apply(b,arguments);firebase.Promise.resolve(!0).then(function(){a.apply(null,b)})}};var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Xa=function(a,b){return a<b?-1:a>b?1:0};var K;a:{var Ya=n.navigator;if(Ya){var Za=Ya.userAgent;if(Za){K=Za;break a}}K=""};var ab=function(a,b){var c=$a;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var bb=-1!=K.indexOf("Opera"),cb=-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"),db=-1!=K.indexOf("Edge"),eb=-1!=K.indexOf("Gecko")&&!(-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"))&&!(-1!=K.indexOf("Trident")||-1!=K.indexOf("MSIE"))&&-1==K.indexOf("Edge"),fb=-1!=K.toLowerCase().indexOf("webkit")&&-1==K.indexOf("Edge"),gb;
	a:{var hb="",ib=function(){var a=K;if(eb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(db)return/Edge\/([\d\.]+)/.exec(a);if(cb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fb)return/WebKit\/(\S+)/.exec(a);if(bb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ib&&(hb=ib?ib[1]:"");if(cb){var jb,kb=n.document;jb=kb?kb.documentMode:void 0;if(null!=jb&&jb>parseFloat(hb)){gb=String(jb);break a}}gb=hb}
	var lb=gb,$a={},mb=function(a){return ab(a,function(){for(var b=0,c=Wa(String(lb)).split("."),d=Wa(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var f=c[g]||"",h=d[g]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;b=Xa(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||Xa(0==f[2].length,0==h[2].length)||Xa(f[2],h[2]);f=f[3];h=h[3]}while(0==b)}return 0<=b})};var nb=function(a){var b=n.BlobBuilder||n.WebKitBlobBuilder;if(q(b)){for(var b=new b,c=0;c<arguments.length;c++)b.append(arguments[c]);return b.getBlob()}b=Array.prototype.slice.call(arguments);c=n.BlobBuilder||n.WebKitBlobBuilder;if(q(c)){for(var c=new c,d=0;d<b.length;d++)c.append(b[d],void 0);b=c.getBlob(void 0)}else if(q(n.Blob))b=new Blob(b,{});else throw Error("This browser doesn't seem to support creating Blobs");return b},ob=function(a,b,c){q(c)||(c=a.size);return a.webkitSlice?a.webkitSlice(b,
	c):a.mozSlice?a.mozSlice(b,c):a.slice?eb&&!mb("13.0")||fb&&!mb("537.1")?(0>b&&(b+=a.size),0>b&&(b=0),0>c&&(c+=a.size),c<b&&(c=b),a.slice(b,c-b)):a.slice(b,c):null};var L={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},pb=function(a){switch(a){case "raw":case "base64":case "base64url":case "data_url":break;default:throw"Expected one of the event types: [raw, base64, base64url, data_url].";}},qb=function(a,b){this.data=a;this.a=b||null},ub=function(a,b){switch(a){case "raw":return new qb(rb(b));case "base64":case "base64url":return new qb(sb(a,b));case "data_url":a=new tb(b);var c;if(a.a)c=sb("base64",a.c);else{try{c=decodeURIComponent(a.c)}catch(d){throw t("data_url",
	"Malformed data URL.");}c=rb(c)}return new qb(c,(new tb(b)).b)}throw fa();},rb=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);if(127>=d)b.push(d);else if(2047>=d)b.push(192|d>>6,128|d&63);else if(55296==(d&64512))if(c<a.length-1&&56320==(a.charCodeAt(c+1)&64512)){var e=a.charCodeAt(++c),d=65536|(d&1023)<<10|e&1023;b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63)}else b.push(239,191,189);else 56320==(d&64512)?b.push(239,191,189):b.push(224|d>>12,128|d>>6&63,128|d&63)}return new Uint8Array(b)},
	sb=function(a,b){switch(a){case "base64":var c=-1!==b.indexOf("-"),d=-1!==b.indexOf("_");if(c||d)throw t(a,"Invalid character '"+(c?"-":"_")+"' found: is it base64url encoded?");break;case "base64url":c=-1!==b.indexOf("+");d=-1!==b.indexOf("/");if(c||d)throw t(a,"Invalid character '"+(c?"+":"/")+"' found: is it base64 encoded?");b=b.replace(/-/g,"+").replace(/_/g,"/")}var e;try{e=atob(b)}catch(g){throw t(a,"Invalid character found");}a=new Uint8Array(e.length);for(b=0;b<e.length;b++)a[b]=e.charCodeAt(b);
	return a},tb=function(a){var b=a.match(/^data:([^,]+)?,/);if(null===b)throw t("data_url","Must be formatted 'data:[<mediatype>][;base64],<data>");b=b[1]||null;this.a=!1;this.b=null;if(null!=b){var c=b.length-7;this.b=(this.a=0<=c&&b.indexOf(";base64",c)==c)?b.substring(0,b.length-7):b}this.c=a.substring(a.indexOf(",")+1)};var M=function(a,b){Ga()&&a instanceof Blob?(this.i=a,b=a.size,a=a.type):(a instanceof ArrayBuffer?(b?this.i=new Uint8Array(a):(this.i=new Uint8Array(a.byteLength),this.i.set(new Uint8Array(a))),b=this.i.length):(b?this.i=a:(this.i=new Uint8Array(a.length),this.i.set(a)),b=a.length),a="");this.a=b;this.b=a};M.prototype.type=function(){return this.b};
	M.prototype.slice=function(a,b){if(Ga()&&this.i instanceof Blob)return a=ob(this.i,a,b),null===a?null:new M(a);a=new Uint8Array(this.i.buffer,a,b-a);return new M(a,!0)};
	var vb=function(a){var b=[];Array.prototype.push.apply(b,arguments);if(Ga())return b=b.map(function(a){return a instanceof M?a.i:a}),new M(nb.apply(null,b));var b=b.map(function(a){return Fa(a)?ub("raw",a).data.buffer:a.i.buffer}),c=0;b.forEach(function(a){c+=a.byteLength});var d=new Uint8Array(c),e=0;b.forEach(function(a){a=new Uint8Array(a);for(var b=0;b<a.length;b++)d[e++]=a[b]});return new M(d,!0)};var wb=function(a,b,c){"function"==ea(a)||A(b)||A(c)?(this.b=a,this.error=b||null,this.a=c||null):(this.b=a.next||null,this.error=a.error||null,this.a=a.complete||null)};var N=function(a){if(!a)throw fa();},xb=function(a,b){return function(c,d){var e;a:{try{e=JSON.parse(d)}catch(h){e=null;break a}c=typeof e;e="object"==c&&null!=e||"function"==c?e:null}if(null===e)e=null;else{c={type:"file"};d=b.length;for(var g=0;g<d;g++){var f=b[g];c[f.b]=f.a(c,e[f.c])}Oa(c,a);e=c}N(null!==e);return e}},O=function(a){return function(b,c){b=401===x(b)?new r("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===x(b)?
	new r("quota-exceeded","Quota for bucket '"+a.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===x(b)?new r("unauthorized","User does not have permission to access '"+a.path+"'."):c;b.serverResponse=c.serverResponse;return b}},yb=function(a){var b=O(a);return function(c,d){var e=b(c,d);404===x(c)&&(e=new r("object-not-found","Object '"+a.path+"' does not exist."));e.serverResponse=d.serverResponse;return e}},zb=function(a,b,c){var d=za(b);a=new w(v+"/v0"+d,"GET",
	xb(a,c),a.c);a.a=yb(b);return a},Ab=function(a,b){var c=za(b);a=new w(v+"/v0"+c,"DELETE",function(){},a.c);a.c=[200,204];a.a=yb(b);return a},Bb=function(a,b,c){c=c?oa(c):{};c.fullPath=a.path;c.size=b.a;c.contentType||(a=b&&b.type()||"application/octet-stream",c.contentType=a);return c},Cb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f={"X-Goog-Upload-Protocol":"multipart"},h;h="";for(var p=0;2>p;p++)h+=Math.random().toString().slice(2);f["Content-Type"]="multipart/related; boundary="+
	h;e=Bb(b,d,e);p=Qa(e,c);d=vb("--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+p+"\r\n--"+h+"\r\nContent-Type: "+e.contentType+"\r\n\r\n",d,"\r\n--"+h+"--");if(null===d)throw ha();a=new w(v+"/v0"+g,"POST",xb(a,c),a.b);a.b={name:e.fullPath};a.headers=f;a.body=d.i;a.a=O(b);return a},Db=function(a,b,c,d){this.current=a;this.total=b;this.H=!!c;this.metadata=d||null},Eb=function(a,b){var c;try{c=a.a.getResponseHeader("X-Goog-Upload-Status")}catch(d){N(!1)}N(la(b||["active"],c));return c},
	Fb=function(a,b,c,d,e){var g="/b/"+encodeURIComponent(b.bucket)+"/o",f=Bb(b,d,e);e={name:f.fullPath};g=v+"/v0"+g;d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":d.a,"X-Goog-Upload-Header-Content-Type":f.contentType,"Content-Type":"application/json; charset=utf-8"};c=Qa(f,c);a=new w(g,"POST",function(a){Eb(a);var b;try{b=a.a.getResponseHeader("X-Goog-Upload-URL")}catch(B){N(!1)}N(Fa(b));return b},a.b);a.b=e;a.headers=d;a.body=c;a.a=O(b);
	return a},Gb=function(a,b,c,d){a=new w(c,"POST",function(a){var b=Eb(a,["active","final"]),c;try{c=a.a.getResponseHeader("X-Goog-Upload-Size-Received")}catch(h){N(!1)}a=c;isFinite(a)&&(a=String(a));a="string"==typeof a?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN;N(!isNaN(a));return new Db(a,d.a,"final"===b)},a.b);a.headers={"X-Goog-Upload-Command":"query"};a.a=O(b);a.f=!1;return a},Hb=function(a,b,c,d,e,g,f){var h=new Db(0,0);f?(h.current=f.current,h.total=f.total):(h.current=0,h.total=
	d.a);if(d.a!==h.total)throw new r("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var p=f=h.total-h.current;0<e&&(p=Math.min(p,e));var B=h.current;e={"X-Goog-Upload-Command":p===f?"upload, finalize":"upload","X-Goog-Upload-Offset":h.current};f=d.slice(B,B+p);if(null===f)throw ha();c=new w(c,"POST",function(a,c){var e=Eb(a,["active","final"]),f=h.current+p,C=d.a,z;"final"===e?z=xb(b,g)(a,c):z=null;return new Db(f,C,"final"===e,z)},b.b);c.headers=e;c.body=
	f.i;c.l=null;c.a=O(a);c.f=!1;return c};var Ib={STATE_CHANGED:"state_changed"},P={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"},Jb=function(a){switch(a){case "running":case "pausing":case "canceling":return"running";case "paused":return"paused";case "success":return"success";case "canceled":return"canceled";case "error":return"error";default:return"error"}};var ta=function(){var a=this;this.a=new XMLHttpRequest;this.c=0;this.f=ka(function(b){a.a.addEventListener("abort",function(){a.c=2;b(a)});a.a.addEventListener("error",function(){a.c=1;b(a)});a.a.addEventListener("load",function(){b(a)})});this.b=!1},ua=function(a,b,c,d,e){if(a.b)throw u("cannot .send() more than once");a.b=!0;a.a.open(c,b,!0);A(e)&&na(e,function(b,c){a.a.setRequestHeader(b,c.toString())});A(d)?a.a.send(d):a.a.send();return a.f},va=function(a){if(!a.b)throw u("cannot .getErrorCode() before sending");
	return a.c},x=function(a){if(!a.b)throw u("cannot .getStatus() before sending");try{return a.a.status}catch(b){return-1}},wa=function(a){if(!a.b)throw u("cannot .getResponseText() before sending");return a.a.responseText};ta.prototype.abort=function(){this.a.abort()};var Kb=function(){};var Q=function(a,b,c,d,e,g){this.b=a;this.h=b;this.f=c;this.a=d;this.g=e;this.c=g};k=Q.prototype;k.W=function(){return this.b};k.ra=function(){return this.h};k.oa=function(){return this.f};k.ja=function(){return this.a};k.X=function(){if(A(this.a)){var a=this.a.downloadURLs;return A(a)&&A(a[0])?a[0]:null}return null};k.qa=function(){return this.g};k.ma=function(){return this.c};var T=function(a,b,c,d,e,g){this.M=a;this.c=b;this.l=c;this.f=e;this.h=g||null;this.s=d;this.m=0;this.D=this.u=!1;this.B=[];this.T=262144<this.f.a;this.b="running";this.a=this.v=this.g=null;this.j=1;var f=this;this.F=function(a){f.a=null;f.j=1;"storage/canceled"===a.code?(f.u=!0,R(f)):(f.g=a,S(f,"error"))};this.R=function(a){f.a=null;"storage/canceled"===a.code?R(f):(f.g=a,S(f,"error"))};this.A=this.o=null;this.C=ka(function(a,b){f.o=a;f.A=b;Lb(f)});this.C.then(null,function(){})},Lb=function(a){"running"===
	a.b&&null===a.a&&(a.T?null===a.v?Mb(a):a.u?Nb(a):a.D?Ob(a):Pb(a):Qb(a))},U=function(a,b){Ia(a.c).then(function(c){switch(a.b){case "running":b(c);break;case "canceling":S(a,"canceled");break;case "pausing":S(a,"paused")}})},Mb=function(a){U(a,function(b){var c=Fb(a.c,a.l,a.s,a.f,a.h);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.v=b;a.u=!1;R(a)},this.F)})},Nb=function(a){var b=a.v;U(a,function(c){var d=Gb(a.c,a.l,b,a.f);a.a=D(a.c,d,c);a.a.a().then(function(b){a.a=null;Rb(a,b.current);a.u=!1;
	b.H&&(a.D=!0);R(a)},a.F)})},Pb=function(a){var b=262144*a.j,c=new Db(a.m,a.f.a),d=a.v;U(a,function(e){var g;try{g=Hb(a.l,a.c,d,a.f,b,a.s,c)}catch(f){a.g=f;S(a,"error");return}a.a=D(a.c,g,e);a.a.a().then(function(b){33554432>262144*a.j&&(a.j*=2);a.a=null;Rb(a,b.current);b.H?(a.h=b.metadata,S(a,"success")):R(a)},a.F)})},Ob=function(a){U(a,function(b){var c=zb(a.c,a.l,a.s);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;S(a,"success")},a.R)})},Qb=function(a){U(a,function(b){var c=Cb(a.c,a.l,a.s,
	a.f,a.h);a.a=D(a.c,c,b);a.a.a().then(function(b){a.a=null;a.h=b;Rb(a,a.f.a);S(a,"success")},a.F)})},Rb=function(a,b){var c=a.m;a.m=b;a.m>c&&V(a)},S=function(a,b){if(a.b!==b)switch(b){case "canceling":a.b=b;null!==a.a&&a.a.cancel();break;case "pausing":a.b=b;null!==a.a&&a.a.cancel();break;case "running":var c="paused"===a.b;a.b=b;c&&(V(a),Lb(a));break;case "paused":a.b=b;V(a);break;case "canceled":a.g=ga();a.b=b;V(a);break;case "error":a.b=b;V(a);break;case "success":a.b=b,V(a)}},R=function(a){switch(a.b){case "pausing":S(a,
	"paused");break;case "canceling":S(a,"canceled");break;case "running":Lb(a)}};T.prototype.w=function(){return new Q(this.m,this.f.a,Jb(this.b),this.h,this,this.M)};
	T.prototype.N=function(a,b,c,d){function e(a){try{f(a);return}catch(z){}try{if(h(a),!(q(a.next)||q(a.error)||q(a.complete)))throw"";}catch(z){throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";}}function g(a){return function(b,c,d){null!==a&&F("on",a,arguments);var e=new wb(b,c,d);Sb(p,e);return function(){var a=p.B,b=a.indexOf(e);-1!==b&&a.splice(b,1)}}}var f=I().a,h=Va(null,!0).a;F("on",[H(function(){if("state_changed"!==a)throw"Expected one of the event types: [state_changed].";
	}),Va(e,!0),I(),I()],arguments);var p=this,B=[Va(function(a){if(null===a)throw"Expected a function or an Object with one of `next`, `error`, `complete` properties.";e(a)}),I(),I()];return q(b)||q(c)||q(d)?g(null)(b,c,d):g(B)};T.prototype.then=function(a,b){return this.C.then(a,b)};T.prototype["catch"]=function(a){return this.then(null,a)};
	var Sb=function(a,b){a.B.push(b);Tb(a,b)},V=function(a){Ub(a);Array.prototype.slice.call(a.B).forEach(function(b){Tb(a,b)})},Ub=function(a){if(null!==a.o){var b=!0;switch(Jb(a.b)){case "success":J(a.o.bind(null,a.w()))();break;case "canceled":case "error":J(a.A.bind(null,a.g))();break;default:b=!1}b&&(a.o=null,a.A=null)}},Tb=function(a,b){switch(Jb(a.b)){case "running":case "paused":null!==b.b&&J(b.b.bind(b,a.w()))();break;case "success":null!==b.a&&J(b.a.bind(b))();break;case "canceled":case "error":null!==
	b.error&&J(b.error.bind(b,a.g))();break;default:null!==b.error&&J(b.error.bind(b,a.g))()}};T.prototype.P=function(){F("resume",[],arguments);var a="paused"===this.b||"pausing"===this.b;a&&S(this,"running");return a};T.prototype.O=function(){F("pause",[],arguments);var a="running"===this.b;a&&S(this,"pausing");return a};T.prototype.cancel=function(){F("cancel",[],arguments);var a="running"===this.b||"pausing"===this.b;a&&S(this,"canceling");return a};var W=function(a,b){this.a=a;this.location=b instanceof y?b:Aa(b)};W.prototype.toString=function(){F("toString",[],arguments);return"gs://"+this.location.bucket+"/"+this.location.path};var Vb=function(a,b){return new W(a,b)};k=W.prototype;k.I=function(a){F("child",[H()],arguments);var b=Ja(this.location.path,a);return Vb(this.a,new y(this.location.bucket,b))};
	k.la=function(){var a;a=this.location.path;if(0==a.length)a=null;else{var b=a.lastIndexOf("/");a=-1===b?"":a.slice(0,b)}return null===a?null:Vb(this.a,new y(this.location.bucket,a))};k.na=function(){return Vb(this.a,new y(this.location.bucket,""))};k.V=function(){return this.location.bucket};k.ga=function(){return this.location.path};k.ka=function(){return Ka(this.location.path)};k.pa=function(){return this.a.l};
	k.$=function(a,b){F("put",[Ta(),new G(Ra,!0)],arguments);X(this,"put");return new T(this,this.a,this.location,Na(),new M(a),b)};k.aa=function(a,b,c){F("putString",[H(),H(pb,!0),new G(Ra,!0)],arguments);X(this,"putString");var d=ub(A(b)?b:"raw",a),e=c?oa(c):{};!A(e.contentType)&&A(d.a)&&(e.contentType=d.a);return new T(this,this.a,this.location,Na(),new M(d.data,!0),e)};
	k.Y=function(){F("delete",[],arguments);X(this,"delete");var a=this;return Ia(this.a).then(function(b){var c=Ab(a.a,a.location);return D(a.a,c,b).a()})};k.J=function(){F("getMetadata",[],arguments);X(this,"getMetadata");var a=this;return Ia(this.a).then(function(b){var c=zb(a.a,a.location,Na());return D(a.a,c,b).a()})};
	k.ba=function(a){F("updateMetadata",[new G(Ra,void 0)],arguments);X(this,"updateMetadata");var b=this;return Ia(this.a).then(function(c){var d=b.a,e=b.location,g=a,f=Na(),h=za(e),h=v+"/v0"+h,g=Qa(g,f),d=new w(h,"PATCH",xb(d,f),d.c);d.headers={"Content-Type":"application/json; charset=utf-8"};d.body=g;d.a=yb(e);return D(b.a,d,c).a()})};
	k.Z=function(){F("getDownloadURL",[],arguments);X(this,"getDownloadURL");return this.J().then(function(a){a=a.downloadURLs[0];if(A(a))return a;throw new r("no-download-url","The given file does not have any download URLs.");})};var X=function(a,b){if(""===a.location.path)throw new r("invalid-root-operation","The operation '"+b+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");};var Y=function(a,b,c){this.a=new Ha(a,function(a,b){return new W(a,b)},xa,this,b);this.c=a;q(c)?this.b=Ba(c):null!=this.a.bucket()&&(this.b=new y(this.a.bucket(),""));this.f=new Wb(this)};k=Y.prototype;k.ca=function(a){F("ref",[H(function(a){if(/^[A-Za-z]+:\/\//.test(a))throw"Expected child path but got a URL, use refFromURL instead.";},!0)],arguments);if(null===this.b)throw Error("No Storage Bucket defined in Firebase Options.");var b=new W(this.a,this.b);return q(a)?b.I(a):b};
	k.da=function(a){F("refFromURL",[H(function(a){if(!/^[A-Za-z]+:\/\//.test(a))throw"Expected full URL but got a child path, use ref instead.";try{Aa(a)}catch(c){throw"Expected valid full URL but got an invalid one.";}},!1)],arguments);return new W(this.a,a)};k.ia=function(){return this.a.b};k.fa=function(a){F("setMaxUploadRetryTime",[Ua()],arguments);this.a.b=a};k.ha=function(){return this.a.c};k.ea=function(a){F("setMaxOperationRetryTime",[Ua()],arguments);this.a.c=a};k.U=function(){return this.c};
	k.S=function(){return this.f};var Wb=function(a){this.a=a};Wb.prototype.b=function(){var a=this.a.a;a.f=!0;a.a=null;Ea(a.h)};var Z=function(a,b,c){Object.defineProperty(a,b,{get:c})};W.prototype.toString=W.prototype.toString;W.prototype.child=W.prototype.I;W.prototype.put=W.prototype.$;W.prototype.putString=W.prototype.aa;W.prototype["delete"]=W.prototype.Y;W.prototype.getMetadata=W.prototype.J;W.prototype.updateMetadata=W.prototype.ba;W.prototype.getDownloadURL=W.prototype.Z;Z(W.prototype,"parent",W.prototype.la);Z(W.prototype,"root",W.prototype.na);Z(W.prototype,"bucket",W.prototype.V);Z(W.prototype,"fullPath",W.prototype.ga);
	Z(W.prototype,"name",W.prototype.ka);Z(W.prototype,"storage",W.prototype.pa);Y.prototype.ref=Y.prototype.ca;Y.prototype.refFromURL=Y.prototype.da;Z(Y.prototype,"maxOperationRetryTime",Y.prototype.ha);Y.prototype.setMaxOperationRetryTime=Y.prototype.ea;Z(Y.prototype,"maxUploadRetryTime",Y.prototype.ia);Y.prototype.setMaxUploadRetryTime=Y.prototype.fa;Z(Y.prototype,"app",Y.prototype.U);Z(Y.prototype,"INTERNAL",Y.prototype.S);Wb.prototype["delete"]=Wb.prototype.b;Y.prototype.capi_=function(a){v=a};
	T.prototype.on=T.prototype.N;T.prototype.resume=T.prototype.P;T.prototype.pause=T.prototype.O;T.prototype.cancel=T.prototype.cancel;T.prototype.then=T.prototype.then;T.prototype["catch"]=T.prototype["catch"];Z(T.prototype,"snapshot",T.prototype.w);Z(Q.prototype,"bytesTransferred",Q.prototype.W);Z(Q.prototype,"totalBytes",Q.prototype.ra);Z(Q.prototype,"state",Q.prototype.oa);Z(Q.prototype,"metadata",Q.prototype.ja);Z(Q.prototype,"downloadURL",Q.prototype.X);Z(Q.prototype,"task",Q.prototype.qa);
	Z(Q.prototype,"ref",Q.prototype.ma);Ib.STATE_CHANGED="state_changed";P.RUNNING="running";P.PAUSED="paused";P.SUCCESS="success";P.CANCELED="canceled";P.ERROR="error";L.RAW="raw";L.BASE64="base64";L.BASE64URL="base64url";L.DATA_URL="data_url";
	(function(){function a(a,b,e){return new Y(a,new Kb,e)}var b={TaskState:P,TaskEvent:Ib,StringFormat:L,Storage:Y,Reference:W};if("undefined"!==typeof firebase)firebase.INTERNAL.registerService("storage",a,b,void 0,!0);else throw Error("Cannot install Firebase Storage - be sure to load firebase-app.js first.");})();}).call(this);
	}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
	module.exports = firebase.storage;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 419:
/*!*********************************!*\
  !*** ./~/firebase/messaging.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var firebase = __webpack_require__(/*! ./app */ 415);
	(function(){
	/*! @license Firebase v3.7.4
	    Build: 3.7.4-rc.1
	    Terms: https://firebase.google.com/terms/ */
	(function(){var f=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},g=this,h=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=
	typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},k=function(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.u=function(a,c,n){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];
	return b.prototype[c].apply(a,d)}};var m=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,m);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};k(m,Error);var p=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};var q=function(a,b){b.unshift(a);m.call(this,p.apply(null,b));b.shift()};k(q,m);var r=function(a,b,c){if(!a){var d="Assertion failed";if(b)var d=d+(": "+b),e=Array.prototype.slice.call(arguments,2);throw new q(""+d,e||[]);}};var u=null;var v=function(a){a=new Uint8Array(a);var b=h(a);r("array"==b||"object"==b&&"number"==typeof a.length,"encodeByteArray takes an array as a parameter");if(!u)for(u={},b=0;65>b;b++)u[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b);for(var b=u,c=[],d=0;d<a.length;d+=3){var e=a[d],n=d+1<a.length,l=n?a[d+1]:0,z=d+2<a.length,t=z?a[d+2]:0,M=e>>2,e=(e&3)<<4|l>>4,l=(l&15)<<2|t>>6,t=t&63;z||(t=64,n||(l=64));c.push(b[M],b[e],b[l],b[t])}return c.join("").replace(/\+/g,"-").replace(/\//g,
	"_").replace(/=+$/,"")};var w={},x=(w["only-available-in-window"]="This method is available in a Window context.",w["only-available-in-sw"]="This method is available in a service worker context.",w["should-be-overriden"]="This method should be overriden by extended classes.",w["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",w["permission-default"]="The required permissions were not granted and dismissed instead.",w["permission-blocked"]="The required permissions were not granted and blocked instead.",
	w["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",w["notifications-blocked"]="Notifications have been blocked.",w["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",w["sw-registration-expected"]="A service worker registration was the expected input.",w["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",w["invalid-saved-token"]="Unable to access details of the saved token.",
	w["sw-reg-redundant"]="The service worker being used for push was made redundant.",w["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$message}",w["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",w["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",w["use-sw-before-get-token"]="You must call useServiceWorker() before calling getToken() to ensure your service worker is used.",w["invalid-delete-token"]=
	"You must pass a valid token into deleteToken(), i.e. the token from getToken().",w["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",w["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",w["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",w["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}",
	w["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",w["failed-to-delete-token"]="Unable to delete the currently saved token.",w["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",w["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",w);var y={userVisibleOnly:!0,applicationServerKey:new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110])};var A=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x),B=function(){this.a=null},C=function(a){if(a.a)return a.a;a.a=new Promise(function(a,c){var b=g.indexedDB.open("fcm_token_details_db",1);b.onerror=function(a){c(a.target.error)};b.onsuccess=function(b){a(b.target.result)};b.onupgradeneeded=function(a){a=a.target.result.createObjectStore("fcm_token_object_Store",{keyPath:"swScope"});a.createIndex("fcmSenderId","fcmSenderId",{unique:!1});a.createIndex("fcmToken","fcmToken",{unique:!0})}});
	return a.a},D=function(a){a.a?a.a.then(function(b){b.close();a.a=null}):Promise.resolve()},E=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").index("fcmToken").get(b);d.onerror=function(a){e(a.target.error)};d.onsuccess=function(a){c(a.target.result)}})})},F=function(a,b){return C(a).then(function(a){return new Promise(function(c,e){var d=[],l=a.transaction(["fcm_token_object_Store"]).objectStore("fcm_token_object_Store").openCursor();
	l.onerror=function(a){e(a.target.error)};l.onsuccess=function(a){(a=a.target.result)?(a.value.fcmSenderId===b&&d.push(a.value),a.continue()):c(d)}})})},G=function(a,b,c){var d=v(b.getKey("p256dh")),e=v(b.getKey("auth"));a="authorized_entity="+a+"&"+("endpoint="+b.endpoint+"&")+("encryption_key="+d+"&")+("encryption_auth="+e);c&&(a+="&pushSet="+c);c=new Headers;c.append("Content-Type","application/x-www-form-urlencoded");return fetch("https://fcm.googleapis.com/fcm/connect/subscribe",{method:"POST",
	headers:c,body:a}).then(function(a){return a.json()}).then(function(a){if(a.error)throw A.create("token-subscribe-failed",{message:a.error.message});if(!a.token)throw A.create("token-subscribe-no-token");if(!a.pushSet)throw A.create("token-subscribe-no-push-set");return{token:a.token,pushSet:a.pushSet}})},H=function(a,b,c,d,e,n){var l={swScope:c.scope,endpoint:d.endpoint,auth:v(d.getKey("auth")),p256dh:v(d.getKey("p256dh")),fcmToken:e,fcmPushSet:n,fcmSenderId:b};return C(a).then(function(a){return new Promise(function(b,
	c){var d=a.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").put(l);d.onerror=function(a){c(a.target.error)};d.onsuccess=function(){b()}})})};
	B.prototype.i=function(a,b){return b instanceof ServiceWorkerRegistration?"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):F(this,a).then(function(c){if(0!==c.length){var d=c.findIndex(function(c){return b.scope===c.swScope&&a===c.fcmSenderId});if(-1!==d)return c[d]}}).then(function(a){if(a)return b.pushManager.getSubscription().catch(function(){throw A.create("get-subscription-failed");}).then(function(b){var c;if(c=b)c=b.endpoint===a.endpoint&&v(b.getKey("auth"))===a.auth&&
	v(b.getKey("p256dh"))===a.p256dh;if(c)return a.fcmToken})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.getSavedToken=B.prototype.i;
	B.prototype.h=function(a,b){var c=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("bad-sender-id")):b instanceof ServiceWorkerRegistration?b.pushManager.getSubscription().then(function(a){return a?a:b.pushManager.subscribe(y)}).then(function(d){return G(a,d).then(function(e){return H(c,a,b,d,e.token,e.pushSet).then(function(){return e.token})})}):Promise.reject(A.create("sw-registration-expected"))};B.prototype.createToken=B.prototype.h;
	B.prototype.deleteToken=function(a){var b=this;return"string"!==typeof a||0===a.length?Promise.reject(A.create("invalid-delete-token")):E(this,a).then(function(a){if(!a)throw A.create("delete-token-not-found");return C(b).then(function(b){return new Promise(function(c,d){var e=b.transaction(["fcm_token_object_Store"],"readwrite").objectStore("fcm_token_object_Store").delete(a.swScope);e.onerror=function(a){d(a.target.error)};e.onsuccess=function(b){0===b.target.result?d(A.create("failed-to-delete-token")):
	c(a)}})})})};var I=function(a){var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);if(!a.options.messagingSenderId||"string"!==typeof a.options.messagingSenderId)throw this.a.create("bad-sender-id");this.l=a.options.messagingSenderId;this.c=new B;this.app=a;this.INTERNAL={};this.INTERNAL.delete=function(){return b.delete}};
	I.prototype.getToken=function(){var a=this,b=Notification.permission;return"granted"!==b?"denied"===b?Promise.reject(this.a.create("notifications-blocked")):Promise.resolve(null):this.f().then(function(b){return a.c.i(a.l,b).then(function(c){return c?c:a.c.h(a.l,b)})})};I.prototype.getToken=I.prototype.getToken;I.prototype.deleteToken=function(a){var b=this;return this.c.deleteToken(a).then(function(){return b.f()}).then(function(a){return a?a.pushManager.getSubscription():null}).then(function(a){if(a)return a.unsubscribe()})};
	I.prototype.deleteToken=I.prototype.deleteToken;I.prototype.f=function(){throw this.a.create("should-be-overriden");};I.prototype.requestPermission=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=function(){throw this.a.create("only-available-in-window");};I.prototype.useServiceWorker=I.prototype.useServiceWorker;I.prototype.onMessage=function(){throw this.a.create("only-available-in-window");};I.prototype.onMessage=I.prototype.onMessage;
	I.prototype.onTokenRefresh=function(){throw this.a.create("only-available-in-window");};I.prototype.onTokenRefresh=I.prototype.onTokenRefresh;I.prototype.setBackgroundMessageHandler=function(){throw this.a.create("only-available-in-sw");};I.prototype.setBackgroundMessageHandler=I.prototype.setBackgroundMessageHandler;I.prototype.delete=function(){D(this.c)};var J=function(a,b){var c={};return c["firebase-messaging-msg-type"]=a,c["firebase-messaging-msg-data"]=b,c};var K=self,P=function(a){I.call(this,a);var b=this;this.a=new firebase.INTERNAL.ErrorFactory("messaging","Messaging",x);K.addEventListener("push",function(a){return L(b,a)},!1);K.addEventListener("pushsubscriptionchange",function(a){return N(b,a)},!1);K.addEventListener("notificationclick",function(a){return O(b,a)},!1);this.b=null};f(P,I);
	var L=function(a,b){var c;try{c=b.data.json()}catch(e){return}var d=Q().then(function(b){if(b){if(c.notification||a.b)return R(a,c)}else{if((b=c)&&"object"===typeof b.notification){var d=Object.assign({},b.notification),e={};d.data=(e.FCM_MSG=b,e);b=d}else b=void 0;if(b)return K.registration.showNotification(b.title||"",b);if(a.b)return a.b(c)}});b.waitUntil(d)},N=function(a,b){var c=a.getToken().then(function(b){if(!b)throw a.a.create("no-fcm-token-for-resubscribe");var c=a.c;return E(c,b).then(function(b){if(!b)throw a.a.create("invalid-saved-token");
	return K.registration.pushManager.subscribe(y).then(function(a){return G(b.w,a,b.v)}).catch(function(d){return c.deleteToken(b.A).then(function(){throw a.a.create("unable-to-resubscribe",{message:d});})})})});b.waitUntil(c)},O=function(a,b){if(b.notification&&b.notification.data&&b.notification.data.FCM_MSG){b.stopImmediatePropagation();b.notification.close();var c=b.notification.data.FCM_MSG,d=c.notification.click_action;if(d){var e=S(d).then(function(a){return a?a:K.clients.openWindow(d)}).then(function(b){if(b)return delete c.notification,
	T(a,b,J("notification-clicked",c))});b.waitUntil(e)}}};P.prototype.setBackgroundMessageHandler=function(a){if(a&&"function"!==typeof a)throw this.a.create("bg-handler-function-expected");this.b=a};P.prototype.setBackgroundMessageHandler=P.prototype.setBackgroundMessageHandler;
	var S=function(a){var b=(new URL(a)).href;return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){for(var c=null,e=0;e<a.length;e++)if((new URL(a[e].url)).href===b){c=a[e];break}if(c)return c.focus(),c})},T=function(a,b,c){return new Promise(function(d,e){if(!b)return e(a.a.create("no-window-client-to-msg"));b.postMessage(c);d()})},Q=function(){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(a){return a.some(function(a){return"visible"===
	a.visibilityState})})},R=function(a,b){return K.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(c){var d=J("push-msg-received",b);return Promise.all(c.map(function(b){return T(a,b,d)}))})};P.prototype.f=function(){return Promise.resolve(K.registration)};var V=function(a){I.call(this,a);var b=this;this.j=null;this.m=firebase.INTERNAL.createSubscribe(function(a){b.j=a});this.s=null;this.o=firebase.INTERNAL.createSubscribe(function(a){b.s=a});U(this)};f(V,I);
	V.prototype.getToken=function(){var a=this;return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")?W(this).then(function(){return I.prototype.getToken.call(a)}):Promise.reject(this.a.create("unsupported-browser"))};V.prototype.getToken=V.prototype.getToken;
	var W=function(a){if(a.g)return a.g;var b=document.querySelector('link[rel="manifest"]');b?a.g=fetch(b.href).then(function(a){return a.json()}).catch(function(){return Promise.resolve()}).then(function(b){if(b&&b.gcm_sender_id&&"103953800507"!==b.gcm_sender_id)throw a.a.create("incorrect-gcm-sender-id");}):a.g=Promise.resolve();return a.g};
	V.prototype.requestPermission=function(){var a=this;return"granted"===Notification.permission?Promise.resolve():new Promise(function(b,c){var d=function(d){return"granted"===d?b():"denied"===d?c(a.a.create("permission-blocked")):c(a.a.create("permission-default"))},e=Notification.requestPermission(function(a){e||d(a)});e&&e.then(d)})};V.prototype.requestPermission=V.prototype.requestPermission;
	V.prototype.useServiceWorker=function(a){if(!(a instanceof ServiceWorkerRegistration))throw this.a.create("sw-registration-expected");if("undefined"!==typeof this.b)throw this.a.create("use-sw-before-get-token");this.b=a};V.prototype.useServiceWorker=V.prototype.useServiceWorker;V.prototype.onMessage=function(a,b,c){return this.m(a,b,c)};V.prototype.onMessage=V.prototype.onMessage;V.prototype.onTokenRefresh=function(a,b,c){return this.o(a,b,c)};V.prototype.onTokenRefresh=V.prototype.onTokenRefresh;
	var X=function(a,b){var c=b.installing||b.waiting||b.active;return new Promise(function(d,e){if(c)if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else{var n=function(){if("activated"===c.state)d(b);else if("redundant"===c.state)e(a.a.create("sw-reg-redundant"));else return;c.removeEventListener("statechange",n)};c.addEventListener("statechange",n)}else e(a.a.create("no-sw-in-reg"))})};
	V.prototype.f=function(){var a=this;if(this.b)return X(this,this.b);this.b=null;return navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(b){throw a.a.create("failed-serviceworker-registration",{browserErrorMessage:b.message});}).then(function(b){return X(a,b).then(function(){a.b=b;b.update();return b})})};
	var U=function(a){"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(b){if(b.data&&b.data["firebase-messaging-msg-type"])switch(b=b.data,b["firebase-messaging-msg-type"]){case "push-msg-received":case "notification-clicked":a.j.next(b["firebase-messaging-msg-data"])}},!1)};if(!(firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService))throw Error("Cannot install Firebase Messaging - be sure to load firebase-app.js first.");firebase.INTERNAL.registerService("messaging",function(a){return self&&"ServiceWorkerGlobalScope"in self?new P(a):new V(a)},{Messaging:V});}).call(this);
	}).call(typeof global !== undefined ? global : typeof self !== undefined ? self : typeof window !== undefined ? window : {});
	module.exports = firebase.messaging;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 420:
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
	
	var _PlaylistExplorer = __webpack_require__(/*! ../components/PlaylistExplorer */ 421);
	
	var _PlaylistExplorer2 = _interopRequireDefault(_PlaylistExplorer);
	
	var _playlist = __webpack_require__(/*! ../actions/playlist */ 300);
	
	var _player = __webpack_require__(/*! ../actions/player */ 299);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        playlist: state.playlist,
	        player: state.player
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

/***/ 421:
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
	
	var _PlaylistCreator = __webpack_require__(/*! ./PlaylistCreator/ */ 406);
	
	var _PlaylistCreator2 = _interopRequireDefault(_PlaylistCreator);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _playlist = __webpack_require__(/*! ./css/playlist.scss */ 422);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _songItem = __webpack_require__(/*! ./css/song-item.scss */ 424);
	
	var _songItem2 = _interopRequireDefault(_songItem);
	
	var _Player = __webpack_require__(/*! ./Player */ 426);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 546);
	
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
	        key: 'parseProps',
	        value: function parseProps(props) {
	            // let playlist_id = typeof props.ownProps.params.playlist_id !== 'undefined' ? props.ownProps.params.playlist_id : -1;
	            // if(playlist_id !== props.playlist.currentIndex){
	            //     this.actions.setCurentPlaylist(playlist_id);
	            // }
	
	            // if(typeof props.ownProps.params.song_id !== 'undefined' && props.ownProps.params.song_id !== props.player.player_id){
	            //     const rolloutPlaylist = this.getSelectedPlaylist(this.props.playlist, props.params.playlist_id, props.ownProps.params.song_id);
	            //     this.actions.setPlayerId(props.ownProps.params.song_id, rolloutPlaylist, props.params.playlist_id);     
	            //     // this.fetchPlayerId = true;
	            // }
	
	            this.setState({
	                playlist: props.playlist,
	                player: props.player
	            });
	        }
	    }, {
	        key: '_onPlaylistClick',
	        value: function _onPlaylistClick(index) {
	            this.actions.setCurentPlaylist(index);
	        }
	    }, {
	        key: '_onSongClick',
	        value: function _onSongClick(index, rolloutPlaylist, currentIndex) {
	            this.actions.setPlayerId(index, rolloutPlaylist, currentIndex);
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
	        key: 'getSelectedPlaylist',
	        value: function getSelectedPlaylist(playlist, playlist_id, song_id) {
	            if (typeof playlist.data[playlist_id] !== 'undefined') {
	                var currentPlaylist = playlist.data[playlist_id];
	                // check if list not contain song
	                var exist = false;
	                currentPlaylist.list.map(function (song) {
	                    if (song.id === song_id) {
	                        exist = true;
	                    }
	                });
	                if (exist) {
	                    return currentPlaylist;
	                }
	            }
	            return false;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
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
	                            'div',
	                            { onClick: function onClick() {
	                                    _this2._onPlaylistClick(index);
	                                }, className: _playlist2.default.item, key: index },
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
	                        'span',
	                        { className: _playlist2.default.icon, onClick: function onClick() {
	                                _this2._onPlaylistClick(-1);
	                            } },
	                        _react2.default.createElement('i', { className: 'ion-ios-arrow-thin-left' })
	                    ),
	                    _react2.default.createElement(
	                        'span',
	                        null,
	                        selectedPlaylist.name
	                    )
	                );
	
	                playerDom = _react2.default.createElement(_Player2.default, { clearError: this.actions.clearError, key: player.player_id, state: player, fetch: this.actions.fetchById });
	
	                if (selectedPlaylist.list.length > 0) {
	                    playlists = selectedPlaylist.list.map(function (song, index) {
	                        return _react2.default.createElement(
	                            'li',
	                            { className: _songItem2.default.root, onClick: function onClick() {
	                                    _this2._onSongClick(song.id, selectedPlaylist, playlist.currentIndex);
	                                } },
	                            _react2.default.createElement(
	                                'div',
	                                { className: _songItem2.default.link },
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
	                    playlists
	                ),
	                playerDom
	            );
	        }
	    }]);
	
	    return PlaylistExplorer;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)([_playlist2.default, _songItem2.default])(PlaylistExplorer);

/***/ },

/***/ 422:
/*!******************************************!*\
  !*** ./src/components/css/playlist.scss ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./playlist.scss */ 423);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 423:
/*!*****************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/playlist.scss ***!
  \*****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".playlist_root_OT1 {\n  padding: 0 0 20px 0; }\n\n.playlist_heading_3MU {\n  margin-bottom: 20px;\n  font-size: 30px; }\n\n.playlist_empty_2ri {\n  margin: 0 20px; }\n\n.playlist_item_38V {\n  color: #fff;\n  padding: 10px;\n  font-size: 23px;\n  font-weight: 400;\n  display: inline-block;\n  width: 100%;\n  line-height: 16px;\n  background: #4267b2;\n  border-top: 1px solid #5776b7;\n  border-bottom: 1px solid #264d9a;\n  text-decoration: none; }\n\n.playlist_item_38V em {\n    color: #9E9E9E;\n    font-size: 16px;\n    display: block;\n    margin-top: 10px; }\n\n.playlist_directoryTitle_2yN {\n  margin: 0 0 10px 0;\n  font-size: 26px;\n  color: #4267b2; }\n\n.playlist_directoryTitle_2yN span:last-child {\n    margin-left: 20px;\n    line-height: 1;\n    padding: 12px 0;\n    vertical-align: middle;\n    font-size: 26px;\n    display: inline-block; }\n\n.playlist_directoryTitle_2yN .playlist_icon_b98 {\n    display: inline-block;\n    vertical-align: middle;\n    background: #4267b2;\n    color: #fff;\n    padding: 10px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "playlist_root_OT1",
		"root": "playlist_root_OT1",
		"heading": "playlist_heading_3MU",
		"heading": "playlist_heading_3MU",
		"empty": "playlist_empty_2ri",
		"empty": "playlist_empty_2ri",
		"item": "playlist_item_38V",
		"item": "playlist_item_38V",
		"directoryTitle": "playlist_directoryTitle_2yN",
		"directoryTitle": "playlist_directoryTitle_2yN",
		"icon": "playlist_icon_b98",
		"icon": "playlist_icon_b98"
	};

/***/ },

/***/ 424:
/*!*******************************************!*\
  !*** ./src/components/css/song-item.scss ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./song-item.scss */ 425);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 425:
/*!******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/song-item.scss ***!
  \******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
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

/***/ 426:
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
	
	var _moment = __webpack_require__(/*! moment */ 427);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _player = __webpack_require__(/*! ./css/player.scss */ 544);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _colors = __webpack_require__(/*! ./../helpers/colors */ 546);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
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
	                setTimeout(function () {
	                    _this.next();
	                }, 4000);
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
	                    this.load();
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
	        key: 'next',
	        value: function next() {
	            var nextSongId = this.getNextSongId();
	            var rolloutId = this.state.rolloutId;
	            if (nextSongId) {
	                this.fetch(nextSongId);
	            }
	        }
	    }, {
	        key: 'getNextSongId',
	        value: function getNextSongId() {
	            var rolloutPlaylist = this.state.rolloutPlaylist;
	            var player_id = this.state.player_id;
	            if (rolloutPlaylist) {
	                var nextId = false;
	                rolloutPlaylist.list.map(function (song, index) {
	                    if (song.id === player_id) {
	                        if (rolloutPlaylist.list.length - 1 <= index) {
	                            nextId = rolloutPlaylist.list[0].id;
	                        } else {
	                            nextId = rolloutPlaylist.list[index + 1].id;
	                        }
	                    }
	                });
	                return nextId;
	            }
	            return false;
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
	            var imageCdnUrl = 'http://image.mp3.zdn.vn/thumb/165_165/';
	            var source = typeof this.state.source !== 'undefined' ? this.state.source : {
	                'lossless': ''
	            };
	            var image = this.state.album_cover !== '' ? imageCdnUrl + this.state.album_cover : imageCdnUrl + this.state.thumbnail;
	            var player = this.state.player;
	            var errorDiv = this.getError();
	            var disabledCover = player.disabled ? _react2.default.createElement('div', { className: _player2.default.cover }) : '';
	
	            return _react2.default.createElement(
	                'div',
	                { className: _player2.default.root, style: { backgroundImage: "url(" + image + ")", filter: player.disabled ? 'grayscale(100%)' : 'none' } },
	                _react2.default.createElement('audio', { src: this.getBestSource(source), autoPlay: 'true', id: 'player',
	                    onLoadedData: this.play.bind(this),
	                    onEnded: this.next.bind(this),
	                    onTimeUpdate: this.updateDuration.bind(this) }),
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

/***/ 544:
/*!****************************************!*\
  !*** ./src/components/css/player.scss ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./player.scss */ 545);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 545:
/*!***************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/player.scss ***!
  \***************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".player_root_qfm {\n  background-repeat: no-repeat !important;\n  background-position: 100% 5% !important;\n  background-size: 53% !important;\n  position: fixed;\n  bottom: 40px;\n  left: 0;\n  width: 100%;\n  background: #4267b2;\n  padding: 10px 10px 5px 0;\n  box-shadow: 0 0 1px #4267b2 inset;\n  /* Special styling for WebKit/Blink */\n  /* All the same stuff for Firefox */\n  /* All the same stuff for IE */ }\n  .player_root_qfm [class^=ion] {\n    font-size: 30px;\n    line-height: 30px; }\n  .player_root_qfm video {\n    width: 100%;\n    height: 48px; }\n  .player_root_qfm input[type=range] {\n    -webkit-appearance: none;\n    /* Hides the slider so that custom slider can be made */\n    width: 100%;\n    /* Specific width is required for Firefox. */\n    background: transparent;\n    /* Otherwise white in Chrome */\n    float: left;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .player_root_qfm input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none; }\n  .player_root_qfm input[type=range]:focus {\n    outline: none;\n    /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */ }\n  .player_root_qfm input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent;\n    border-color: transparent;\n    color: transparent; }\n  .player_root_qfm input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer;\n    margin-top: -6px; }\n  .player_root_qfm input[type=range]::-moz-range-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer; }\n  .player_root_qfm input[type=range]::-ms-thumb {\n    height: 16px;\n    width: 16px;\n    border-radius: 50%;\n    background: #ffffff;\n    cursor: pointer; }\n  .player_root_qfm input[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-webkit-slider-runnable-track {\n    background: #fff; }\n  .player_root_qfm input[type=range]::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: #fff; }\n  .player_root_qfm input[type=range]::-ms-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent; }\n  .player_root_qfm input[type=range]::-ms-fill-lower {\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-ms-fill-lower {\n    background: #fff; }\n  .player_root_qfm input[type=range]::-ms-fill-upper {\n    background: #fff; }\n  .player_root_qfm input[type=range]:focus::-ms-fill-upper {\n    background: #fff; }\n  .player_error_x9V {\n  position: fixed;\n  top: -100%;\n  width: 100%;\n  left: 0;\n  background: #4267b2;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px 0;\n  color: #ffffff;\n  -webkit-animation: player_faceOut_3wv 2.5s;\n          animation: player_faceOut_3wv 2.5s; }\n  .player_control_2O1 button {\n  border: 0;\n  font-size: 0;\n  padding: 0 5px;\n  background: transparent;\n  width: 40px;\n  color: #f5f8fd; }\n  .player_durationWrap_7kb {\n  float: right;\n  width: calc(100% - 40px);\n  color: #fff;\n  font-size: 16px; }\n  .player_duration_2KW {\n  float: left; }\n  .player_totalDuration_35Z {\n  float: right; }\n  .player_cover_3OU {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%; }\n  @-webkit-keyframes player_faceOut_3wv {\n  0% {\n    opacity: 1;\n    top: 0; }\n  60% {\n    opacity: 1;\n    top: 0%; }\n  80% {\n    opacity: 1;\n    top: 0%; }\n  90% {\n    opacity: 0;\n    top: -50%; }\n  95% {\n    opacity: 0;\n    top: -80%; }\n  100% {\n    opacity: 0;\n    top: -100%; } }\n  /* Standard syntax */\n  @keyframes player_faceOut_3wv {\n  0% {\n    opacity: 1;\n    top: 0; }\n  60% {\n    opacity: 1;\n    top: 0%; }\n  80% {\n    opacity: 1;\n    top: 0%; }\n  90% {\n    opacity: 0;\n    top: -50%; }\n  95% {\n    opacity: 0;\n    top: -80%; }\n  100% {\n    opacity: 0;\n    top: -100%; } }\n", ""]);
	
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

/***/ 546:
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

/***/ 547:
/*!******************************************!*\
  !*** ./src/containers/ContainerPhoto.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 244);
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	var _PhotoExplorer = __webpack_require__(/*! ../components/PhotoExplorer */ 548);
	
	var _PhotoExplorer2 = _interopRequireDefault(_PhotoExplorer);
	
	var _photo = __webpack_require__(/*! ../actions/photo */ 551);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapStateToProps = function mapStateToProps(state) {
	    return {
	        photo: state.photo
	    };
	};
	
	var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	    return {
	        actions: (0, _redux.bindActionCreators)({
	            upload: _photo.upload,
	            getThumbnail: _photo.getThumbnail
	        }, dispatch)
	    };
	};
	
	var ContainerPhoto = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PhotoExplorer2.default);
	
	exports.default = ContainerPhoto;

/***/ },

/***/ 548:
/*!*****************************************!*\
  !*** ./src/components/PhotoExplorer.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 35);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _PhotoItem = __webpack_require__(/*! ./PhotoItem */ 924);
	
	var _PhotoItem2 = _interopRequireDefault(_PhotoItem);
	
	var _photoexplorer = __webpack_require__(/*! ./css/photoexplorer.scss */ 549);
	
	var _photoexplorer2 = _interopRequireDefault(_photoexplorer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhotoExplorer = function (_React$Component) {
	    _inherits(PhotoExplorer, _React$Component);
	
	    function PhotoExplorer(props) {
	        _classCallCheck(this, PhotoExplorer);
	
	        return _possibleConstructorReturn(this, (PhotoExplorer.__proto__ || Object.getPrototypeOf(PhotoExplorer)).call(this, props));
	    }
	
	    _createClass(PhotoExplorer, [{
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {}
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {}
	    }, {
	        key: 'submit',
	        value: function submit(e) {
	            e.preventDefault();
	        }
	    }, {
	        key: 'cameraChange',
	        value: function cameraChange(e) {
	            var file = e.target.files[0];
	            this.props.actions.upload(file);
	            e.target.value = '';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;
	
	            var photo = this.props.photo;
	            var photoHtml = Object.keys(photo.albums[0].list).map(function (key) {
	                return _react2.default.createElement(_PhotoItem2.default, { getThumbnail: _this2.props.actions.getThumbnail, _key: key, key: key, photo: photo.albums[0].list[key] });
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: _photoexplorer2.default.root },
	                _react2.default.createElement(
	                    'div',
	                    { className: _photoexplorer2.default.photoList },
	                    photoHtml
	                ),
	                _react2.default.createElement(
	                    'label',
	                    { 'for': 'capture', className: _photoexplorer2.default.captureBtn },
	                    _react2.default.createElement('input', { type: 'file', accept: 'image/*', id: 'capture', capture: 'camera', onChange: this.cameraChange.bind(this) }),
	                    _react2.default.createElement('i', { className: 'ion-ios-camera' })
	                )
	            );
	        }
	    }]);
	
	    return PhotoExplorer;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_photoexplorer2.default)(PhotoExplorer);

/***/ },

/***/ 549:
/*!***********************************************!*\
  !*** ./src/components/css/photoexplorer.scss ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./photoexplorer.scss */ 550);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./photoexplorer.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./photoexplorer.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 550:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/photoexplorer.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".photoexplorer_root_3PP {\n  padding: 20px 0;\n  background: #fff;\n  position: fixed;\n  top: 0;\n  bottom: 100px;\n  width: 100%;\n  overflow: auto; }\n\n.photoexplorer_photoList_1Id {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.photoexplorer_captureBtn_3ep {\n  width: 100%;\n  display: inline-block;\n  text-align: center;\n  position: fixed;\n  bottom: 40px;\n  background: #ffffff; }\n\n.photoexplorer_captureBtn_3ep input {\n    display: none; }\n\n.photoexplorer_captureBtn_3ep i {\n    font-size: 56px;\n    width: 60px;\n    height: 60px;\n    display: inline-block;\n    line-height: 60px;\n    text-align: center;\n    color: #E91E63; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "photoexplorer_root_3PP",
		"root": "photoexplorer_root_3PP",
		"photoList": "photoexplorer_photoList_1Id",
		"photoList": "photoexplorer_photoList_1Id",
		"captureBtn": "photoexplorer_captureBtn_3ep",
		"captureBtn": "photoexplorer_captureBtn_3ep"
	};

/***/ },

/***/ 551:
/*!******************************!*\
  !*** ./src/actions/photo.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getThumbnail = exports.upload = undefined;
	
	var _FirebaseInstance = __webpack_require__(/*! ./../store/FirebaseInstance */ 922);
	
	var _FirebaseInstance2 = _interopRequireDefault(_FirebaseInstance);
	
	var _dropbox = __webpack_require__(/*! ./../store/dropbox */ 902);
	
	var _dropbox2 = _interopRequireDefault(_dropbox);
	
	var _store = __webpack_require__(/*! ./../store */ 558);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var upload = exports.upload = function upload(file) {
	    var user = _store2.default.getState().user;
	    if (user.uid && user.dxToken !== '') {
	        return function (dispatch) {
	            _dropbox2.default.accessToken = user.dxToken;
	            _dropbox2.default.filesUpload({ path: '/' + file.name, contents: file }).then(function (response) {
	                _dropbox2.default.filesGetThumbnail({
	                    path: response.path_lower,
	                    format: 'png',
	                    size: 'w128h128'
	                }).then(function (thumbResponse) {
	                    response.thumbnail = thumbResponse;
	                    dispatch({
	                        type: 'UPLOAD_SUCCESS',
	                        response: response
	                    });
	                });
	            }).catch(function (error) {
	                dispatch({
	                    type: 'UPLOAD_ERROR',
	                    error: error
	                });
	            });
	        };
	    } else {
	        return {
	            type: 'UPLOAD_REQUIRE_LOGIN'
	        };
	    }
	};
	
	var getThumbnail = exports.getThumbnail = function getThumbnail(photo, key) {
	    var user = _store2.default.getState().user;
	    if (user.uid && user.dxToken !== '') {
	        return function (dispatch) {
	            _dropbox2.default.accessToken = user.dxToken;
	            _dropbox2.default.filesGetThumbnail({
	                path: photo.path_lower,
	                format: 'png',
	                size: 'w128h128'
	            }).then(function (response) {
	                photo.thumbnail = response;
	                dispatch({
	                    type: 'GET_THUMB_SUCCESS',
	                    photo: photo,
	                    key: key
	                });
	            });
	        };
	    }
	};

/***/ },

/***/ 552:
/*!*******************************!*\
  !*** ./src/components/Tab.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tab = __webpack_require__(/*! ./css/tab.scss */ 553);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_React$Component) {
	    _inherits(Tab, _React$Component);
	
	    function Tab(props) {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));
	    }
	
	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            var props = this.props;
	            var tabs = props.tabs.map(function (tabComponent, index) {
	                if (tabComponent !== null) {
	                    return _react2.default.createElement(
	                        'div',
	                        { className: props.currentTab === index + 1 ? _tab2.default.tabActive : _tab2.default.tab },
	                        tabComponent
	                    );
	                }
	            });
	            return _react2.default.createElement(
	                'div',
	                { className: _tab2.default.root },
	                _react2.default.createElement(
	                    'div',
	                    { className: _tab2.default.tabList },
	                    _react2.default.createElement(
	                        'div',
	                        { className: props.currentTab === 1 ? _tab2.default.itemActive : _tab2.default.item, onClick: function onClick() {
	                                props.setCurrentTab(1);
	                            } },
	                        _react2.default.createElement('span', { className: 'ion-ios-personadd' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: props.currentTab === 2 ? _tab2.default.itemActive : _tab2.default.item, onClick: function onClick() {
	                                props.setCurrentTab(2);
	                            } },
	                        _react2.default.createElement('span', { className: 'ion-images' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: props.currentTab === 3 ? _tab2.default.itemActive : _tab2.default.item, onClick: function onClick() {
	                                props.setCurrentTab(3);
	                            } },
	                        _react2.default.createElement('span', { className: 'ion-music-note' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: props.currentTab === 4 ? _tab2.default.itemActive : _tab2.default.item, onClick: function onClick() {
	                                props.setCurrentTab(4);
	                            } },
	                        _react2.default.createElement('span', { className: 'ion-ios-search-strong' })
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: _tab2.default.tabContent },
	                    tabs
	                )
	            );
	        }
	    }]);
	
	    return Tab;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_tab2.default)(Tab);

/***/ },

/***/ 553:
/*!*************************************!*\
  !*** ./src/components/css/tab.scss ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./tab.scss */ 554);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./tab.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./tab.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 554:
/*!************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/tab.scss ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".tab_root_2wR {\n  background: #4267b2;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 40px; }\n\n.tab_tabList_8VU {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tab_item_fvy {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  text-align: center;\n  color: #fff;\n  line-height: 47px;\n  font-size: 30px;\n  border-top: 1px solid #375dab;\n  box-shadow: 0 1px 0 #4c6daf inset; }\n\n.tab_itemActive_PfX {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  text-align: center;\n  color: #4267b2;\n  background: #fff;\n  line-height: 47px;\n  font-size: 30px; }\n\n.tab_tab_2LT {\n  display: none; }\n\n.tab_tabActive_oVl {\n  display: block; }\n\n.tab_tabContent_1Ng {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  bottom: 40px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "tab_root_2wR",
		"root": "tab_root_2wR",
		"tabList": "tab_tabList_8VU",
		"tabList": "tab_tabList_8VU",
		"item": "tab_item_fvy",
		"item": "tab_item_fvy",
		"itemActive": "tab_itemActive_PfX",
		"itemActive": "tab_itemActive_PfX",
		"tab": "tab_tab_2LT",
		"tab": "tab_tab_2LT",
		"tabActive": "tab_tabActive_oVl",
		"tabActive": "tab_tabActive_oVl",
		"tabContent": "tab_tabContent_1Ng",
		"tabContent": "tab_tabContent_1Ng"
	};

/***/ },

/***/ 555:
/*!*************************************!*\
  !*** ./src/components/css/app.scss ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./app.scss */ 556);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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

/***/ 556:
/*!************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/app.scss ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".app_root_1Ax {\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: rgba(234, 240, 251, 0.5); }\n  .app_root_1Ax * {\n    font-family: 'Yanone Kaffeesatz', sans-serif; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "app_root_1Ax",
		"root": "app_root_1Ax"
	};

/***/ },

/***/ 557:
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
	
	var _App = __webpack_require__(/*! ./../components/App */ 271);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _ContainerPlaylist = __webpack_require__(/*! ./../containers/ContainerPlaylist */ 420);
	
	var _ContainerPlaylist2 = _interopRequireDefault(_ContainerPlaylist);
	
	var _ContainerPhoto = __webpack_require__(/*! ./../containers/ContainerPhoto */ 547);
	
	var _ContainerPhoto2 = _interopRequireDefault(_ContainerPhoto);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var basePath = typeof _basePath !== 'undefined' ? _basePath : '/';
	window.basePath = basePath;
	
	var Routes = _react2.default.createElement(
	    _reactRouter.Route,
	    { path: basePath, component: _App2.default },
	    _react2.default.createElement(_reactRouter.IndexRoute, { components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + 'all/:song_id', components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + ':playlist_id', components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + ':playlist_id/:song_id', components: _ContainerPlaylist2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: basePath + 'photos/', components: _ContainerPhoto2.default })
	);
	
	exports.default = Routes;

/***/ },

/***/ 558:
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
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 559);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 560);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(/*! ./..//reducers */ 566);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var promiseMiddleware = function promiseMiddleware() {
	    return function (next) {
	        return function (action) {
	            if (typeof action !== 'undefined') {
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
	            }
	            return false;
	        };
	    };
	};
	
	var preloadedState = {};
	
	var middleWare = [_reduxThunk2.default, promiseMiddleware, (0, _reduxLogger2.default)()];
	
	var store = (0, _redux.createStore)(_reducers2.default, preloadedState, _redux.applyMiddleware.apply(undefined, middleWare));
	exports.default = store;

/***/ },

/***/ 566:
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
				value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 251);
	
	var _search = __webpack_require__(/*! ./search */ 567);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _playlist = __webpack_require__(/*! ./playlist */ 568);
	
	var _playlist2 = _interopRequireDefault(_playlist);
	
	var _player = __webpack_require__(/*! ./player */ 569);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _user = __webpack_require__(/*! ./user */ 570);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _photo = __webpack_require__(/*! ./photo */ 923);
	
	var _photo2 = _interopRequireDefault(_photo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = (0, _redux.combineReducers)({
				search: _search2.default,
				player: _player2.default,
				playlist: _playlist2.default,
				user: _user2.default,
				photo: _photo2.default
	});
	
	exports.default = reducer;

/***/ },

/***/ 567:
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
	    showAddPopup: false,
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

/***/ 568:
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

/***/ 569:
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
	                rolloutPlaylist: action.rolloutPlaylist,
	                rolloutId: action.rolloutId,
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

/***/ 570:
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _user = __webpack_require__(/*! ./../actions/user */ 412);
	
	var intinalState = {
	    uid: false,
	    fbToken: '',
	    ggToken: '',
	    dxToken: '',
	    email: '',
	    name: '',
	    displayName: ''
	};
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intinalState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'USERDATA_PARSED':
	            // action[user]
	            return _extends({}, state, action.userData.user);
	        case 'USERDATA_COMMITED':
	            return _extends({}, state);
	            break;
	        case 'CONNECT_DX_SUCCESS':
	            var newState = _extends({}, state, {
	                dxToken: action.accessToken
	            });
	            if (state.uid !== false) {
	                (0, _user.commitUserData)(newState.uid, newState, 'user');
	            }
	            return newState;
	            break;
	        case 'LOGIN_SOCIAL_SUCCESS':
	            {
	                // save uid to local
	                var _newState = _extends({}, state, action.user);
	                localStorage.setItem('uid', action.user.uid);
	                (0, _user.commitUserData)(_newState.uid, _newState, 'user');
	                return _newState;
	                break;
	            }
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 571:
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

/***/ },

/***/ 899:
/*!*****************************************!*\
  !*** ./src/components/UserDashboard.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _userDashboard = __webpack_require__(/*! ./css/user-dashboard.scss */ 900);
	
	var _userDashboard2 = _interopRequireDefault(_userDashboard);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserDashboard = function (_React$Component) {
	    _inherits(UserDashboard, _React$Component);
	
	    function UserDashboard(props) {
	        _classCallCheck(this, UserDashboard);
	
	        return _possibleConstructorReturn(this, (UserDashboard.__proto__ || Object.getPrototypeOf(UserDashboard)).call(this, props));
	    }
	
	    _createClass(UserDashboard, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var uid = localStorage.getItem('uid');
	            if (uid) {
	                this.props.actions.parseUserData(uid);
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            console.log(nextProps);
	        }
	    }, {
	        key: 'getUserLoginBlock',
	        value: function getUserLoginBlock() {
	            var _this2 = this;
	
	            var user = this.props.user;
	            if (!user.uid) {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _userDashboard2.default.loginMethod },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: _userDashboard2.default.blockHeading },
	                        'Ch\u1ECDn c\xE1ch \u0111\u0103ng nh\u1EADp'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { onClick: function onClick() {
	                                _this2.props.actions.loginWithFacebook();
	                            }, className: _userDashboard2.default.btn + ' ' + _userDashboard2.default.btnFb },
	                        _react2.default.createElement('i', { className: 'ion-social-facebook' }),
	                        'Facebook'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { onClick: function onClick() {
	                                _this2.props.actions.loginWithGoogle();
	                            }, className: _userDashboard2.default.btn + ' ' + _userDashboard2.default.btnGg },
	                        _react2.default.createElement('i', { className: 'ion-social-google' }),
	                        'Google'
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _userDashboard2.default.userInfo },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: _userDashboard2.default.blockHeading },
	                        user.displayName
	                    )
	                );
	            }
	        }
	    }, {
	        key: 'getUserDropboxStatusBlock',
	        value: function getUserDropboxStatusBlock() {
	            var _this3 = this;
	
	            var user = this.props.user;
	            if (user.dxToken === '') {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _userDashboard2.default.dropboxStatus },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: _userDashboard2.default.blockHeading },
	                        'K\u1EBFt n\u1ED1i v\u1EDBi Dropbox'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _userDashboard2.default.btn + ' ' + _userDashboard2.default.btnDx, onClick: function onClick() {
	                                _this3.props.actions.connectToDropbox();
	                            } },
	                        _react2.default.createElement('i', { className: 'ion-social-dropbox' }),
	                        'Dropbox'
	                    )
	                );
	            } else {
	                return _react2.default.createElement(
	                    'div',
	                    { className: _userDashboard2.default.dropboxStatusSuccess },
	                    _react2.default.createElement('i', { className: 'ion-social-dropbox' }),
	                    '\u0110\xE3 k\u1EBFt n\u1ED1i'
	                );
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _userDashboard2.default.root },
	                this.getUserLoginBlock(),
	                _react2.default.createElement('span', { className: _userDashboard2.default.breakLine }),
	                this.getUserDropboxStatusBlock(),
	                _react2.default.createElement('span', { className: _userDashboard2.default.breakLine })
	            );
	        }
	    }]);
	
	    return UserDashboard;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_userDashboard2.default)(UserDashboard);

/***/ },

/***/ 900:
/*!************************************************!*\
  !*** ./src/components/css/user-dashboard.scss ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./user-dashboard.scss */ 901);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./user-dashboard.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./user-dashboard.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 901:
/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/user-dashboard.scss ***!
  \***********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".user-dashboard_root_1mJ {\n  padding: 20px 0; }\n\n.user-dashboard_blockHeading_3m0 {\n  padding: 0 20px;\n  font-size: 24px;\n  font-weight: 300; }\n\n.user-dashboard_breakLine_1Pg {\n  margin: 20px 0;\n  width: 100%;\n  height: 1px;\n  background: #ddd;\n  display: block; }\n\n.user-dashboard_btn_3km {\n  border: 1px solid;\n  max-width: 275px;\n  margin: 20px auto 20px auto;\n  border-radius: 5px;\n  font-size: 38px;\n  color: #fff; }\n\n.user-dashboard_btn_3km i {\n    font-size: 42px;\n    margin-right: 39px;\n    padding: 10px 20px;\n    display: inline-block;\n    border-right: 1px solid; }\n\n.user-dashboard_btnFb_lVa {\n  background: #4267b2;\n  border-color: #2d55a7; }\n\n.user-dashboard_btnGg_32U {\n  background: #ea4335;\n  border-color: #c52e22; }\n\n.user-dashboard_btnDx_c8H {\n  background: #1081de;\n  border: 1px solid #0967b5; }\n\n.user-dashboard_dropboxStatusSuccess_3WS {\n  text-align: center;\n  font-size: 26px;\n  background: #A5D6A7;\n  color: #3c5d3d;\n  padding: 14px 0 10px 0; }\n\n.user-dashboard_dropboxStatusSuccess_3WS i {\n    color: #4CAF50;\n    font-size: 47px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px; }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "user-dashboard_root_1mJ",
		"root": "user-dashboard_root_1mJ",
		"blockHeading": "user-dashboard_blockHeading_3m0",
		"blockHeading": "user-dashboard_blockHeading_3m0",
		"breakLine": "user-dashboard_breakLine_1Pg",
		"breakLine": "user-dashboard_breakLine_1Pg",
		"btn": "user-dashboard_btn_3km",
		"btn": "user-dashboard_btn_3km",
		"btnFb": "user-dashboard_btnFb_lVa",
		"btnFb": "user-dashboard_btnFb_lVa",
		"btnGg": "user-dashboard_btnGg_32U",
		"btnGg": "user-dashboard_btnGg_32U",
		"btnDx": "user-dashboard_btnDx_c8H",
		"btnDx": "user-dashboard_btnDx_c8H",
		"dropboxStatusSuccess": "user-dashboard_dropboxStatusSuccess_3WS",
		"dropboxStatusSuccess": "user-dashboard_dropboxStatusSuccess_3WS"
	};

/***/ },

/***/ 902:
/*!******************************!*\
  !*** ./src/store/dropbox.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dropbox = __webpack_require__(/*! dropbox */ 903);
	
	var _dropbox2 = _interopRequireDefault(_dropbox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var CLIENT_ID = 'g048eqdv71saczl';
	
	var dx = new _dropbox2.default({ clientId: CLIENT_ID });
	
	exports.default = dx;

/***/ },

/***/ 903:
/*!********************************!*\
  !*** ./~/dropbox/src/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var Dropbox = __webpack_require__(/*! ./dropbox */ 904);
	
	module.exports = Dropbox;


/***/ },

/***/ 904:
/*!**********************************!*\
  !*** ./~/dropbox/src/dropbox.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var DropboxBase = __webpack_require__(/*! ./dropbox-base */ 905);
	var routes = __webpack_require__(/*! ./routes */ 921);
	var Dropbox;
	
	/**
	 * @class Dropbox
	 * @extends DropboxBase
	 * @classdesc The Dropbox SDK class that provides methods to read, write and
	 * create files or folders in a user's Dropbox.
	 * @arg {Object} options
	 * @arg {String} [options.accessToken] - An access token for making authenticated
	 * requests.
	 * @arg {String} [options.clientId] - The client id for your app. Used to create
	 * authentication URL.
	 * @arg {String} [options.selectUser] - Select user is only used by DropboxTeam.
	 * It specifies which user the team access token should be acting as.
	 */
	Dropbox = function (options) {
	  DropboxBase.call(this, options);
	};
	
	Dropbox.prototype = Object.create(DropboxBase.prototype);
	
	Dropbox.prototype.constructor = Dropbox;
	
	// Add the user endpoint methods to the prototype
	Dropbox.prototype = Object.assign(Dropbox.prototype, routes);
	
	Dropbox.prototype.filesGetSharedLinkFile = function (arg) {
	  return this.request('sharing/get_shared_link_file', arg, 'api', 'download');
	};
	
	module.exports = Dropbox;


/***/ },

/***/ 905:
/*!***************************************!*\
  !*** ./~/dropbox/src/dropbox-base.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var REQUEST_CONSTANTS = __webpack_require__(/*! ./request-constants */ 906);
	var DropboxBase;
	
	// Polyfill Object.assign() for older browsers
	__webpack_require__(/*! ./object-assign-polyfill */ 907);
	
	/**
	 * @private
	 * @class DropboxBase
	 * @classdesc The main Dropbox SDK class. This contains the methods that are
	 * shared between Dropbox and DropboxTeam classes. It is marked as private so
	 * that it doesn't show up in the docs because it is never used directly.
	 * @arg {Object} options
	 * @arg {String} [options.accessToken] - An access token for making authenticated
	 * requests.
	 * @arg {String} [options.clientId] - The client id fo ryour app. Used to create
	 * authentication URL.
	 * @arg {Number} [options.selectUser] - User is the team access token would like
	 * to act as.
	 */
	DropboxBase = function (options) {
	  options = options || {};
	  this.accessToken = options.accessToken;
	  this.clientId = options.clientId;
	  this.selectUser = options.selectUser;
	};
	
	/**
	 * Set the access token used to authenticate requests to the API.
	 * @arg {String} accessToken - An access token
	 * @returns {undefined}
	 */
	DropboxBase.prototype.setAccessToken = function (accessToken) {
	  this.accessToken = accessToken;
	};
	
	/**
	 * Get the access token
	 * @returns {String} Access token
	 */
	DropboxBase.prototype.getAccessToken = function () {
	  return this.accessToken;
	};
	
	/**
	 * Set the client id, which is used to help gain an access token.
	 * @arg {String} clientId - Your apps client id
	 * @returns {undefined}
	 */
	DropboxBase.prototype.setClientId = function (clientId) {
	  this.clientId = clientId;
	};
	
	/**
	 * Get the client id
	 * @returns {String} Client id
	 */
	DropboxBase.prototype.getClientId = function () {
	  return this.clientId;
	};
	
	/**
	 * Get a URL that can be used to authenticate users for the Dropbox API.
	 * @arg {String} redirectUri - A URL to redirect the user to after
	 * authenticating. This must be added to your app through the admin interface.
	 * @arg {String} [state] - State that will be returned in the redirect URL to help
	 * prevent cross site scripting attacks.
	 * @returns {String} Url to send user to for Dropbox API authentication
	 */
	DropboxBase.prototype.getAuthenticationUrl = function (redirectUri, state) {
	  var AUTH_BASE_URL = 'https://www.dropbox.com/oauth2/authorize';
	  var clientId = this.getClientId();
	  var authUrl;
	  if (!clientId) {
	    throw new Error('A client id is required. You can set the client id using .setClientId().');
	  }
	  if (!redirectUri) {
	    throw new Error('A redirect uri is required.');
	  }
	
	  authUrl = AUTH_BASE_URL + '?response_type=token&client_id=' + clientId;
	  if (redirectUri) {
	    authUrl = authUrl + '&redirect_uri=' + redirectUri;
	  }
	  if (state) {
	    authUrl = authUrl + '&state=' + state;
	  }
	  return authUrl;
	};
	
	DropboxBase.prototype.request = function (path, args, auth, host, style) {
	  var request = null;
	  switch (style) {
	    case REQUEST_CONSTANTS.RPC:
	      request = this.getRpcRequest();
	      break;
	    case REQUEST_CONSTANTS.DOWNLOAD:
	      request = this.getDownloadRequest();
	      break;
	    case REQUEST_CONSTANTS.UPLOAD:
	      request = this.getUploadRequest();
	      break;
	    default:
	      throw new Error('Invalid request style: ' + style);
	  }
	
	  return request(path, args, auth, host, this.getAccessToken(), this.selectUser);
	};
	
	DropboxBase.prototype.setRpcRequest = function (newRpcRequest) {
	  DropboxBase.prototype.rpcRequest = newRpcRequest;
	};
	
	DropboxBase.prototype.getRpcRequest = function () {
	  if (DropboxBase.prototype.rpcRequest === undefined) {
	    DropboxBase.prototype.rpcRequest = __webpack_require__(/*! ./rpc-request */ 908);
	  }
	
	  return DropboxBase.prototype.rpcRequest;
	};
	
	DropboxBase.prototype.setDownloadRequest = function (newDownloadRequest) {
	  DropboxBase.prototype.downloadRequest = newDownloadRequest;
	};
	
	DropboxBase.prototype.getDownloadRequest = function () {
	  if (DropboxBase.prototype.downloadRequest === undefined) {
	    DropboxBase.prototype.downloadRequest = __webpack_require__(/*! ./download-request */ 918);
	  }
	
	  return DropboxBase.prototype.downloadRequest;
	};
	
	DropboxBase.prototype.setUploadRequest = function (newUploadRequest) {
	  DropboxBase.prototype.uploadRequest = newUploadRequest;
	};
	
	DropboxBase.prototype.getUploadRequest = function () {
	  if (DropboxBase.prototype.uploadRequest === undefined) {
	    DropboxBase.prototype.uploadRequest = __webpack_require__(/*! ./upload-request */ 920);
	  }
	
	  return DropboxBase.prototype.uploadRequest;
	};
	
	module.exports = DropboxBase;


/***/ },

/***/ 906:
/*!********************************************!*\
  !*** ./~/dropbox/src/request-constants.js ***!
  \********************************************/
/***/ function(module, exports) {

	var REQUEST_CONSTANTS = {
	  RPC: 'rpc',
	  DOWNLOAD: 'download',
	  UPLOAD: 'upload'
	};
	
	module.exports = REQUEST_CONSTANTS;


/***/ },

/***/ 907:
/*!*************************************************!*\
  !*** ./~/dropbox/src/object-assign-polyfill.js ***!
  \*************************************************/
/***/ function(module, exports) {

	// Polyfill object.assign for legacy browsers
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	if (typeof Object.assign !== 'function') {
	  (function () {
	    Object.assign = function (target) {
	      'use strict';
	      var output;
	      var index;
	      var source;
	      var nextKey;
	      if (target === undefined || target === null) {
	        throw new TypeError('Cannot convert undefined or null to object');
	      }
	
	      output = Object(target);
	      for (index = 1; index < arguments.length; index++) {
	        source = arguments[index];
	        if (source !== undefined && source !== null) {
	          for (nextKey in source) {
	            if (source.hasOwnProperty(nextKey)) {
	              output[nextKey] = source[nextKey];
	            }
	          }
	        }
	      }
	      return output;
	    };
	  }());
	}


/***/ },

/***/ 908:
/*!**************************************!*\
  !*** ./~/dropbox/src/rpc-request.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var request = __webpack_require__(/*! superagent */ 909);
	var Promise = __webpack_require__(/*! es6-promise */ 915).Promise;
	var getBaseURL = __webpack_require__(/*! ./get-base-url */ 917);
	
	// This doesn't match what was spec'd in paper doc yet
	var buildCustomError = function (error, response) {
	  return {
	    status: error.status,
	    error: (response ? response.text : null) || error.toString(),
	    response: response
	  };
	};
	
	var rpcRequest = function (path, body, auth, host, accessToken, selectUser) {
	  var promiseFunction = function (resolve, reject) {
	    var apiRequest;
	
	    function success(data) {
	      if (resolve) {
	        resolve(data);
	      }
	    }
	
	    function failure(error) {
	      if (reject) {
	        reject(error);
	      }
	    }
	
	    function responseHandler(error, response) {
	      if (error) {
	        failure(buildCustomError(error, response));
	      } else {
	        success(response.body);
	      }
	    }
	
	    // The API expects null to be passed for endpoints that dont accept any
	    // parameters
	    if (!body) {
	      body = null;
	    }
	
	    apiRequest = request.post(getBaseURL(host) + path)
	      .type('application/json');
	
	    switch (auth) {
	      case 'team':
	      case 'user':
	        apiRequest.set('Authorization', 'Bearer ' + accessToken);
	        break;
	      case 'noauth':
	        break;
	      default:
	        throw new Error('Unhandled auth type: ' + auth);
	    }
	
	    if (selectUser) {
	      apiRequest = apiRequest.set('Dropbox-API-Select-User', selectUser);
	    }
	
	    apiRequest.send(body)
	      .end(responseHandler);
	  };
	
	  return new Promise(promiseFunction);
	};
	
	module.exports = rpcRequest;


/***/ },

/***/ 909:
/*!************************************!*\
  !*** ./~/superagent/lib/client.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	var Emitter = __webpack_require__(/*! emitter */ 910);
	var reduce = __webpack_require__(/*! reduce */ 911);
	var requestBase = __webpack_require__(/*! ./request-base */ 912);
	var isObject = __webpack_require__(/*! ./is-object */ 913);
	
	/**
	 * Root reference for iframes.
	 */
	
	var root;
	if (typeof window !== 'undefined') { // Browser window
	  root = window;
	} else if (typeof self !== 'undefined') { // Web Worker
	  root = self;
	} else { // Other environments
	  root = this;
	}
	
	/**
	 * Noop.
	 */
	
	function noop(){};
	
	/**
	 * Check if `obj` is a host object,
	 * we don't want to serialize these :)
	 *
	 * TODO: future proof, move to compoent land
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isHost(obj) {
	  var str = {}.toString.call(obj);
	
	  switch (str) {
	    case '[object File]':
	    case '[object Blob]':
	    case '[object FormData]':
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Expose `request`.
	 */
	
	var request = module.exports = __webpack_require__(/*! ./request */ 914).bind(null, Request);
	
	/**
	 * Determine XHR.
	 */
	
	request.getXHR = function () {
	  if (root.XMLHttpRequest
	      && (!root.location || 'file:' != root.location.protocol
	          || !root.ActiveXObject)) {
	    return new XMLHttpRequest;
	  } else {
	    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
	    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
	  }
	  return false;
	};
	
	/**
	 * Removes leading and trailing whitespace, added to support IE.
	 *
	 * @param {String} s
	 * @return {String}
	 * @api private
	 */
	
	var trim = ''.trim
	  ? function(s) { return s.trim(); }
	  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };
	
	/**
	 * Serialize the given `obj`.
	 *
	 * @param {Object} obj
	 * @return {String}
	 * @api private
	 */
	
	function serialize(obj) {
	  if (!isObject(obj)) return obj;
	  var pairs = [];
	  for (var key in obj) {
	    if (null != obj[key]) {
	      pushEncodedKeyValuePair(pairs, key, obj[key]);
	        }
	      }
	  return pairs.join('&');
	}
	
	/**
	 * Helps 'serialize' with serializing arrays.
	 * Mutates the pairs array.
	 *
	 * @param {Array} pairs
	 * @param {String} key
	 * @param {Mixed} val
	 */
	
	function pushEncodedKeyValuePair(pairs, key, val) {
	  if (Array.isArray(val)) {
	    return val.forEach(function(v) {
	      pushEncodedKeyValuePair(pairs, key, v);
	    });
	  }
	  pairs.push(encodeURIComponent(key)
	    + '=' + encodeURIComponent(val));
	}
	
	/**
	 * Expose serialization method.
	 */
	
	 request.serializeObject = serialize;
	
	 /**
	  * Parse the given x-www-form-urlencoded `str`.
	  *
	  * @param {String} str
	  * @return {Object}
	  * @api private
	  */
	
	function parseString(str) {
	  var obj = {};
	  var pairs = str.split('&');
	  var parts;
	  var pair;
	
	  for (var i = 0, len = pairs.length; i < len; ++i) {
	    pair = pairs[i];
	    parts = pair.split('=');
	    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
	  }
	
	  return obj;
	}
	
	/**
	 * Expose parser.
	 */
	
	request.parseString = parseString;
	
	/**
	 * Default MIME type map.
	 *
	 *     superagent.types.xml = 'application/xml';
	 *
	 */
	
	request.types = {
	  html: 'text/html',
	  json: 'application/json',
	  xml: 'application/xml',
	  urlencoded: 'application/x-www-form-urlencoded',
	  'form': 'application/x-www-form-urlencoded',
	  'form-data': 'application/x-www-form-urlencoded'
	};
	
	/**
	 * Default serialization map.
	 *
	 *     superagent.serialize['application/xml'] = function(obj){
	 *       return 'generated xml here';
	 *     };
	 *
	 */
	
	 request.serialize = {
	   'application/x-www-form-urlencoded': serialize,
	   'application/json': JSON.stringify
	 };
	
	 /**
	  * Default parsers.
	  *
	  *     superagent.parse['application/xml'] = function(str){
	  *       return { object parsed from str };
	  *     };
	  *
	  */
	
	request.parse = {
	  'application/x-www-form-urlencoded': parseString,
	  'application/json': JSON.parse
	};
	
	/**
	 * Parse the given header `str` into
	 * an object containing the mapped fields.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function parseHeader(str) {
	  var lines = str.split(/\r?\n/);
	  var fields = {};
	  var index;
	  var line;
	  var field;
	  var val;
	
	  lines.pop(); // trailing CRLF
	
	  for (var i = 0, len = lines.length; i < len; ++i) {
	    line = lines[i];
	    index = line.indexOf(':');
	    field = line.slice(0, index).toLowerCase();
	    val = trim(line.slice(index + 1));
	    fields[field] = val;
	  }
	
	  return fields;
	}
	
	/**
	 * Check if `mime` is json or has +json structured syntax suffix.
	 *
	 * @param {String} mime
	 * @return {Boolean}
	 * @api private
	 */
	
	function isJSON(mime) {
	  return /[\/+]json\b/.test(mime);
	}
	
	/**
	 * Return the mime type for the given `str`.
	 *
	 * @param {String} str
	 * @return {String}
	 * @api private
	 */
	
	function type(str){
	  return str.split(/ *; */).shift();
	};
	
	/**
	 * Return header field parameters.
	 *
	 * @param {String} str
	 * @return {Object}
	 * @api private
	 */
	
	function params(str){
	  return reduce(str.split(/ *; */), function(obj, str){
	    var parts = str.split(/ *= */)
	      , key = parts.shift()
	      , val = parts.shift();
	
	    if (key && val) obj[key] = val;
	    return obj;
	  }, {});
	};
	
	/**
	 * Initialize a new `Response` with the given `xhr`.
	 *
	 *  - set flags (.ok, .error, etc)
	 *  - parse header
	 *
	 * Examples:
	 *
	 *  Aliasing `superagent` as `request` is nice:
	 *
	 *      request = superagent;
	 *
	 *  We can use the promise-like API, or pass callbacks:
	 *
	 *      request.get('/').end(function(res){});
	 *      request.get('/', function(res){});
	 *
	 *  Sending data can be chained:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' })
	 *        .end(function(res){});
	 *
	 *  Or passed to `.send()`:
	 *
	 *      request
	 *        .post('/user')
	 *        .send({ name: 'tj' }, function(res){});
	 *
	 *  Or passed to `.post()`:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' })
	 *        .end(function(res){});
	 *
	 * Or further reduced to a single call for simple cases:
	 *
	 *      request
	 *        .post('/user', { name: 'tj' }, function(res){});
	 *
	 * @param {XMLHTTPRequest} xhr
	 * @param {Object} options
	 * @api private
	 */
	
	function Response(req, options) {
	  options = options || {};
	  this.req = req;
	  this.xhr = this.req.xhr;
	  // responseText is accessible only if responseType is '' or 'text' and on older browsers
	  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
	     ? this.xhr.responseText
	     : null;
	  this.statusText = this.req.xhr.statusText;
	  this.setStatusProperties(this.xhr.status);
	  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
	  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
	  // getResponseHeader still works. so we get content-type even if getting
	  // other headers fails.
	  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
	  this.setHeaderProperties(this.header);
	  this.body = this.req.method != 'HEAD'
	    ? this.parseBody(this.text ? this.text : this.xhr.response)
	    : null;
	}
	
	/**
	 * Get case-insensitive `field` value.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	Response.prototype.get = function(field){
	  return this.header[field.toLowerCase()];
	};
	
	/**
	 * Set header related properties:
	 *
	 *   - `.type` the content type without params
	 *
	 * A response of "Content-Type: text/plain; charset=utf-8"
	 * will provide you with a `.type` of "text/plain".
	 *
	 * @param {Object} header
	 * @api private
	 */
	
	Response.prototype.setHeaderProperties = function(header){
	  // content-type
	  var ct = this.header['content-type'] || '';
	  this.type = type(ct);
	
	  // params
	  var obj = params(ct);
	  for (var key in obj) this[key] = obj[key];
	};
	
	/**
	 * Parse the given body `str`.
	 *
	 * Used for auto-parsing of bodies. Parsers
	 * are defined on the `superagent.parse` object.
	 *
	 * @param {String} str
	 * @return {Mixed}
	 * @api private
	 */
	
	Response.prototype.parseBody = function(str){
	  var parse = request.parse[this.type];
	  if (!parse && isJSON(this.type)) {
	    parse = request.parse['application/json'];
	  }
	  return parse && str && (str.length || str instanceof Object)
	    ? parse(str)
	    : null;
	};
	
	/**
	 * Set flags such as `.ok` based on `status`.
	 *
	 * For example a 2xx response will give you a `.ok` of __true__
	 * whereas 5xx will be __false__ and `.error` will be __true__. The
	 * `.clientError` and `.serverError` are also available to be more
	 * specific, and `.statusType` is the class of error ranging from 1..5
	 * sometimes useful for mapping respond colors etc.
	 *
	 * "sugar" properties are also defined for common cases. Currently providing:
	 *
	 *   - .noContent
	 *   - .badRequest
	 *   - .unauthorized
	 *   - .notAcceptable
	 *   - .notFound
	 *
	 * @param {Number} status
	 * @api private
	 */
	
	Response.prototype.setStatusProperties = function(status){
	  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
	  if (status === 1223) {
	    status = 204;
	  }
	
	  var type = status / 100 | 0;
	
	  // status / class
	  this.status = this.statusCode = status;
	  this.statusType = type;
	
	  // basics
	  this.info = 1 == type;
	  this.ok = 2 == type;
	  this.clientError = 4 == type;
	  this.serverError = 5 == type;
	  this.error = (4 == type || 5 == type)
	    ? this.toError()
	    : false;
	
	  // sugar
	  this.accepted = 202 == status;
	  this.noContent = 204 == status;
	  this.badRequest = 400 == status;
	  this.unauthorized = 401 == status;
	  this.notAcceptable = 406 == status;
	  this.notFound = 404 == status;
	  this.forbidden = 403 == status;
	};
	
	/**
	 * Return an `Error` representative of this response.
	 *
	 * @return {Error}
	 * @api public
	 */
	
	Response.prototype.toError = function(){
	  var req = this.req;
	  var method = req.method;
	  var url = req.url;
	
	  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
	  var err = new Error(msg);
	  err.status = this.status;
	  err.method = method;
	  err.url = url;
	
	  return err;
	};
	
	/**
	 * Expose `Response`.
	 */
	
	request.Response = Response;
	
	/**
	 * Initialize a new `Request` with the given `method` and `url`.
	 *
	 * @param {String} method
	 * @param {String} url
	 * @api public
	 */
	
	function Request(method, url) {
	  var self = this;
	  this._query = this._query || [];
	  this.method = method;
	  this.url = url;
	  this.header = {}; // preserves header name case
	  this._header = {}; // coerces header names to lowercase
	  this.on('end', function(){
	    var err = null;
	    var res = null;
	
	    try {
	      res = new Response(self);
	    } catch(e) {
	      err = new Error('Parser is unable to parse the response');
	      err.parse = true;
	      err.original = e;
	      // issue #675: return the raw response if the response parsing fails
	      err.rawResponse = self.xhr && self.xhr.responseText ? self.xhr.responseText : null;
	      // issue #876: return the http status code if the response parsing fails
	      err.statusCode = self.xhr && self.xhr.status ? self.xhr.status : null;
	      return self.callback(err);
	    }
	
	    self.emit('response', res);
	
	    if (err) {
	      return self.callback(err, res);
	    }
	
	    if (res.status >= 200 && res.status < 300) {
	      return self.callback(err, res);
	    }
	
	    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
	    new_err.original = err;
	    new_err.response = res;
	    new_err.status = res.status;
	
	    self.callback(new_err, res);
	  });
	}
	
	/**
	 * Mixin `Emitter` and `requestBase`.
	 */
	
	Emitter(Request.prototype);
	for (var key in requestBase) {
	  Request.prototype[key] = requestBase[key];
	}
	
	/**
	 * Abort the request, and clear potential timeout.
	 *
	 * @return {Request}
	 * @api public
	 */
	
	Request.prototype.abort = function(){
	  if (this.aborted) return;
	  this.aborted = true;
	  this.xhr && this.xhr.abort();
	  this.clearTimeout();
	  this.emit('abort');
	  return this;
	};
	
	/**
	 * Set Content-Type to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.xml = 'application/xml';
	 *
	 *      request.post('/')
	 *        .type('xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 *      request.post('/')
	 *        .type('application/xml')
	 *        .send(xmlstring)
	 *        .end(callback);
	 *
	 * @param {String} type
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.type = function(type){
	  this.set('Content-Type', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set responseType to `val`. Presently valid responseTypes are 'blob' and 
	 * 'arraybuffer'.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .responseType('blob')
	 *        .end(callback);
	 *
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.responseType = function(val){
	  this._responseType = val;
	  return this;
	};
	
	/**
	 * Set Accept to `type`, mapping values from `request.types`.
	 *
	 * Examples:
	 *
	 *      superagent.types.json = 'application/json';
	 *
	 *      request.get('/agent')
	 *        .accept('json')
	 *        .end(callback);
	 *
	 *      request.get('/agent')
	 *        .accept('application/json')
	 *        .end(callback);
	 *
	 * @param {String} accept
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.accept = function(type){
	  this.set('Accept', request.types[type] || type);
	  return this;
	};
	
	/**
	 * Set Authorization field value with `user` and `pass`.
	 *
	 * @param {String} user
	 * @param {String} pass
	 * @param {Object} options with 'type' property 'auto' or 'basic' (default 'basic')
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.auth = function(user, pass, options){
	  if (!options) {
	    options = {
	      type: 'basic'
	    }
	  }
	
	  switch (options.type) {
	    case 'basic':
	      var str = btoa(user + ':' + pass);
	      this.set('Authorization', 'Basic ' + str);
	    break;
	
	    case 'auto':
	      this.username = user;
	      this.password = pass;
	    break;
	  }
	  return this;
	};
	
	/**
	* Add query-string `val`.
	*
	* Examples:
	*
	*   request.get('/shoes')
	*     .query('size=10')
	*     .query({ color: 'blue' })
	*
	* @param {Object|String} val
	* @return {Request} for chaining
	* @api public
	*/
	
	Request.prototype.query = function(val){
	  if ('string' != typeof val) val = serialize(val);
	  if (val) this._query.push(val);
	  return this;
	};
	
	/**
	 * Queue the given `file` as an attachment to the specified `field`,
	 * with optional `filename`.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} field
	 * @param {Blob|File} file
	 * @param {String} filename
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.attach = function(field, file, filename){
	  this._getFormData().append(field, file, filename || file.name);
	  return this;
	};
	
	Request.prototype._getFormData = function(){
	  if (!this._formData) {
	    this._formData = new root.FormData();
	  }
	  return this._formData;
	};
	
	/**
	 * Send `data` as the request body, defaulting the `.type()` to "json" when
	 * an object is given.
	 *
	 * Examples:
	 *
	 *       // manual json
	 *       request.post('/user')
	 *         .type('json')
	 *         .send('{"name":"tj"}')
	 *         .end(callback)
	 *
	 *       // auto json
	 *       request.post('/user')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // manual x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send('name=tj')
	 *         .end(callback)
	 *
	 *       // auto x-www-form-urlencoded
	 *       request.post('/user')
	 *         .type('form')
	 *         .send({ name: 'tj' })
	 *         .end(callback)
	 *
	 *       // defaults to x-www-form-urlencoded
	  *      request.post('/user')
	  *        .send('name=tobi')
	  *        .send('species=ferret')
	  *        .end(callback)
	 *
	 * @param {String|Object} data
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.send = function(data){
	  var obj = isObject(data);
	  var type = this._header['content-type'];
	
	  // merge
	  if (obj && isObject(this._data)) {
	    for (var key in data) {
	      this._data[key] = data[key];
	    }
	  } else if ('string' == typeof data) {
	    if (!type) this.type('form');
	    type = this._header['content-type'];
	    if ('application/x-www-form-urlencoded' == type) {
	      this._data = this._data
	        ? this._data + '&' + data
	        : data;
	    } else {
	      this._data = (this._data || '') + data;
	    }
	  } else {
	    this._data = data;
	  }
	
	  if (!obj || isHost(data)) return this;
	  if (!type) this.type('json');
	  return this;
	};
	
	/**
	 * @deprecated
	 */
	Response.prototype.parse = function serialize(fn){
	  if (root.console) {
	    console.warn("Client-side parse() method has been renamed to serialize(). This method is not compatible with superagent v2.0");
	  }
	  this.serialize(fn);
	  return this;
	};
	
	Response.prototype.serialize = function serialize(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Invoke the callback with `err` and `res`
	 * and handle arity check.
	 *
	 * @param {Error} err
	 * @param {Response} res
	 * @api private
	 */
	
	Request.prototype.callback = function(err, res){
	  var fn = this._callback;
	  this.clearTimeout();
	  fn(err, res);
	};
	
	/**
	 * Invoke callback with x-domain error.
	 *
	 * @api private
	 */
	
	Request.prototype.crossDomainError = function(){
	  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
	  err.crossDomain = true;
	
	  err.status = this.status;
	  err.method = this.method;
	  err.url = this.url;
	
	  this.callback(err);
	};
	
	/**
	 * Invoke callback with timeout error.
	 *
	 * @api private
	 */
	
	Request.prototype.timeoutError = function(){
	  var timeout = this._timeout;
	  var err = new Error('timeout of ' + timeout + 'ms exceeded');
	  err.timeout = timeout;
	  this.callback(err);
	};
	
	/**
	 * Enable transmission of cookies with x-domain requests.
	 *
	 * Note that for this to work the origin must not be
	 * using "Access-Control-Allow-Origin" with a wildcard,
	 * and also must set "Access-Control-Allow-Credentials"
	 * to "true".
	 *
	 * @api public
	 */
	
	Request.prototype.withCredentials = function(){
	  this._withCredentials = true;
	  return this;
	};
	
	/**
	 * Initiate request, invoking callback `fn(res)`
	 * with an instanceof `Response`.
	 *
	 * @param {Function} fn
	 * @return {Request} for chaining
	 * @api public
	 */
	
	Request.prototype.end = function(fn){
	  var self = this;
	  var xhr = this.xhr = request.getXHR();
	  var query = this._query.join('&');
	  var timeout = this._timeout;
	  var data = this._formData || this._data;
	
	  // store callback
	  this._callback = fn || noop;
	
	  // state change
	  xhr.onreadystatechange = function(){
	    if (4 != xhr.readyState) return;
	
	    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
	    // result in the error "Could not complete the operation due to error c00c023f"
	    var status;
	    try { status = xhr.status } catch(e) { status = 0; }
	
	    if (0 == status) {
	      if (self.timedout) return self.timeoutError();
	      if (self.aborted) return;
	      return self.crossDomainError();
	    }
	    self.emit('end');
	  };
	
	  // progress
	  var handleProgress = function(e){
	    if (e.total > 0) {
	      e.percent = e.loaded / e.total * 100;
	    }
	    e.direction = 'download';
	    self.emit('progress', e);
	  };
	  if (this.hasListeners('progress')) {
	    xhr.onprogress = handleProgress;
	  }
	  try {
	    if (xhr.upload && this.hasListeners('progress')) {
	      xhr.upload.onprogress = handleProgress;
	    }
	  } catch(e) {
	    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
	    // Reported here:
	    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
	  }
	
	  // timeout
	  if (timeout && !this._timer) {
	    this._timer = setTimeout(function(){
	      self.timedout = true;
	      self.abort();
	    }, timeout);
	  }
	
	  // querystring
	  if (query) {
	    query = request.serializeObject(query);
	    this.url += ~this.url.indexOf('?')
	      ? '&' + query
	      : '?' + query;
	  }
	
	  // initiate request
	  if (this.username && this.password) {
	    xhr.open(this.method, this.url, true, this.username, this.password);
	  } else {
	    xhr.open(this.method, this.url, true);
	  }
	
	  // CORS
	  if (this._withCredentials) xhr.withCredentials = true;
	
	  // body
	  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
	    // serialize stuff
	    var contentType = this._header['content-type'];
	    var serialize = this._parser || request.serialize[contentType ? contentType.split(';')[0] : ''];
	    if (!serialize && isJSON(contentType)) serialize = request.serialize['application/json'];
	    if (serialize) data = serialize(data);
	  }
	
	  // set header fields
	  for (var field in this.header) {
	    if (null == this.header[field]) continue;
	    xhr.setRequestHeader(field, this.header[field]);
	  }
	
	  if (this._responseType) {
	    xhr.responseType = this._responseType;
	  }
	
	  // send stuff
	  this.emit('request', this);
	
	  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
	  // We need null here if data is undefined
	  xhr.send(typeof data !== 'undefined' ? data : null);
	  return this;
	};
	
	
	/**
	 * Expose `Request`.
	 */
	
	request.Request = Request;
	
	/**
	 * GET `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.get = function(url, data, fn){
	  var req = request('GET', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.query(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * HEAD `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.head = function(url, data, fn){
	  var req = request('HEAD', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * DELETE `url` with optional callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	function del(url, fn){
	  var req = request('DELETE', url);
	  if (fn) req.end(fn);
	  return req;
	};
	
	request['del'] = del;
	request['delete'] = del;
	
	/**
	 * PATCH `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.patch = function(url, data, fn){
	  var req = request('PATCH', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * POST `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed} data
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.post = function(url, data, fn){
	  var req = request('POST', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};
	
	/**
	 * PUT `url` with optional `data` and callback `fn(res)`.
	 *
	 * @param {String} url
	 * @param {Mixed|Function} data or fn
	 * @param {Function} fn
	 * @return {Request}
	 * @api public
	 */
	
	request.put = function(url, data, fn){
	  var req = request('PUT', url);
	  if ('function' == typeof data) fn = data, data = null;
	  if (data) req.send(data);
	  if (fn) req.end(fn);
	  return req;
	};


/***/ },

/***/ 910:
/*!**************************************!*\
  !*** ./~/component-emitter/index.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Expose `Emitter`.
	 */
	
	if (true) {
	  module.exports = Emitter;
	}
	
	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */
	
	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};
	
	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */
	
	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
	    .push(fn);
	  return this;
	};
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.once = function(event, fn){
	  function on() {
	    this.off(event, on);
	    fn.apply(this, arguments);
	  }
	
	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */
	
	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	
	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }
	
	  // specific event
	  var callbacks = this._callbacks['$' + event];
	  if (!callbacks) return this;
	
	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks['$' + event];
	    return this;
	  }
	
	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};
	
	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */
	
	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks['$' + event];
	
	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */
	
	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks['$' + event] || [];
	};
	
	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */
	
	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 911:
/*!*************************************!*\
  !*** ./~/reduce-component/index.js ***!
  \*************************************/
/***/ function(module, exports) {

	
	/**
	 * Reduce `arr` with `fn`.
	 *
	 * @param {Array} arr
	 * @param {Function} fn
	 * @param {Mixed} initial
	 *
	 * TODO: combatible error handling?
	 */
	
	module.exports = function(arr, fn, initial){  
	  var idx = 0;
	  var len = arr.length;
	  var curr = arguments.length == 3
	    ? initial
	    : arr[idx++];
	
	  while (idx < len) {
	    curr = fn.call(null, curr, arr[idx], ++idx, arr);
	  }
	  
	  return curr;
	};

/***/ },

/***/ 912:
/*!******************************************!*\
  !*** ./~/superagent/lib/request-base.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module of mixed-in functions shared between node and client code
	 */
	var isObject = __webpack_require__(/*! ./is-object */ 913);
	
	/**
	 * Clear previous timeout.
	 *
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.clearTimeout = function _clearTimeout(){
	  this._timeout = 0;
	  clearTimeout(this._timer);
	  return this;
	};
	
	/**
	 * Force given parser
	 *
	 * Sets the body parser no matter type.
	 *
	 * @param {Function}
	 * @api public
	 */
	
	exports.parse = function parse(fn){
	  this._parser = fn;
	  return this;
	};
	
	/**
	 * Set timeout to `ms`.
	 *
	 * @param {Number} ms
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.timeout = function timeout(ms){
	  this._timeout = ms;
	  return this;
	};
	
	/**
	 * Faux promise support
	 *
	 * @param {Function} fulfill
	 * @param {Function} reject
	 * @return {Request}
	 */
	
	exports.then = function then(fulfill, reject) {
	  return this.end(function(err, res) {
	    err ? reject(err) : fulfill(res);
	  });
	}
	
	/**
	 * Allow for extension
	 */
	
	exports.use = function use(fn) {
	  fn(this);
	  return this;
	}
	
	
	/**
	 * Get request header `field`.
	 * Case-insensitive.
	 *
	 * @param {String} field
	 * @return {String}
	 * @api public
	 */
	
	exports.get = function(field){
	  return this._header[field.toLowerCase()];
	};
	
	/**
	 * Get case-insensitive header `field` value.
	 * This is a deprecated internal API. Use `.get(field)` instead.
	 *
	 * (getHeader is no longer used internally by the superagent code base)
	 *
	 * @param {String} field
	 * @return {String}
	 * @api private
	 * @deprecated
	 */
	
	exports.getHeader = exports.get;
	
	/**
	 * Set header `field` to `val`, or multiple fields with one object.
	 * Case-insensitive.
	 *
	 * Examples:
	 *
	 *      req.get('/')
	 *        .set('Accept', 'application/json')
	 *        .set('X-API-Key', 'foobar')
	 *        .end(callback);
	 *
	 *      req.get('/')
	 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
	 *        .end(callback);
	 *
	 * @param {String|Object} field
	 * @param {String} val
	 * @return {Request} for chaining
	 * @api public
	 */
	
	exports.set = function(field, val){
	  if (isObject(field)) {
	    for (var key in field) {
	      this.set(key, field[key]);
	    }
	    return this;
	  }
	  this._header[field.toLowerCase()] = val;
	  this.header[field] = val;
	  return this;
	};
	
	/**
	 * Remove header `field`.
	 * Case-insensitive.
	 *
	 * Example:
	 *
	 *      req.get('/')
	 *        .unset('User-Agent')
	 *        .end(callback);
	 *
	 * @param {String} field
	 */
	exports.unset = function(field){
	  delete this._header[field.toLowerCase()];
	  delete this.header[field];
	  return this;
	};
	
	/**
	 * Write the field `name` and `val` for "multipart/form-data"
	 * request bodies.
	 *
	 * ``` js
	 * request.post('/upload')
	 *   .field('foo', 'bar')
	 *   .end(callback);
	 * ```
	 *
	 * @param {String} name
	 * @param {String|Blob|File|Buffer|fs.ReadStream} val
	 * @return {Request} for chaining
	 * @api public
	 */
	exports.field = function(name, val) {
	  this._getFormData().append(name, val);
	  return this;
	};


/***/ },

/***/ 913:
/*!***************************************!*\
  !*** ./~/superagent/lib/is-object.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Check if `obj` is an object.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(obj) {
	  return null != obj && 'object' == typeof obj;
	}
	
	module.exports = isObject;


/***/ },

/***/ 914:
/*!*************************************!*\
  !*** ./~/superagent/lib/request.js ***!
  \*************************************/
/***/ function(module, exports) {

	// The node and browser modules expose versions of this with the
	// appropriate constructor function bound as first argument
	/**
	 * Issue a request:
	 *
	 * Examples:
	 *
	 *    request('GET', '/users').end(callback)
	 *    request('/users').end(callback)
	 *    request('/users', callback)
	 *
	 * @param {String} method
	 * @param {String|Function} url or callback
	 * @return {Request}
	 * @api public
	 */
	
	function request(RequestConstructor, method, url) {
	  // callback
	  if ('function' == typeof url) {
	    return new RequestConstructor('GET', method).end(url);
	  }
	
	  // url first
	  if (2 == arguments.length) {
	    return new RequestConstructor('GET', method);
	  }
	
	  return new RequestConstructor(method, url);
	}
	
	module.exports = request;


/***/ },

/***/ 915:
/*!*****************************************************!*\
  !*** ./~/dropbox/~/es6-promise/dist/es6-promise.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(/*! vertx */ 916);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../process/browser.js */ 6), (function() { return this; }())))

/***/ },

/***/ 916:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 917:
/*!***************************************!*\
  !*** ./~/dropbox/src/get-base-url.js ***!
  \***************************************/
/***/ function(module, exports) {

	function getBaseURL(host) {
	  return 'https://' + host + '.dropboxapi.com/2/';
	}
	
	module.exports = getBaseURL;


/***/ },

/***/ 918:
/*!*******************************************!*\
  !*** ./~/dropbox/src/download-request.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var request = __webpack_require__(/*! superagent */ 909);
	var Promise = __webpack_require__(/*! es6-promise */ 915).Promise;
	var getBaseURL = __webpack_require__(/*! ./get-base-url */ 917);
	var httpHeaderSafeJson = __webpack_require__(/*! ./http-header-safe-json */ 919);
	
	var buildCustomError;
	var downloadRequest;
	var nodeBinaryParser;
	
	// Register a handler that will instruct superagent how to parse the response
	request.parse['application/octect-stream'] = function (obj) {
	  return obj;
	};
	
	// This doesn't match what was spec'd in paper doc yet
	buildCustomError = function (error, response) {
	  return {
	    status: error.status,
	    error: (response ? response.text : null) || error.toString(),
	    response: response
	  };
	};
	
	nodeBinaryParser = function (res, done) {
	  res.text = '';
	  res.setEncoding('binary');
	  res.on('data', function (chunk) { res.text += chunk; });
	  res.on('end', function () {
	    done();
	  });
	};
	
	downloadRequest = function (path, args, auth, host, accessToken, selectUser) {
	  if (auth !== 'user') {
	    throw new Error('Unexpected auth type: ' + auth);
	  }
	
	  var promiseFunction = function (resolve, reject) {
	    var apiRequest;
	
	    function success(data) {
	      if (resolve) {
	        resolve(data);
	      }
	    }
	
	    function failure(error) {
	      if (reject) {
	        reject(error);
	      }
	    }
	
	    function responseHandler(error, response) {
	      var data;
	      if (error) {
	        failure(buildCustomError(error, response));
	      } else {
	        // In the browser, the file is passed as a blob and in node the file is
	        // passed as a string of binary data.
	        data = JSON.parse(response.headers['dropbox-api-result']);
	        if (response.xhr) {
	          data.fileBlob = response.xhr.response;
	        } else {
	          data.fileBinary = response.res.text;
	        }
	        success(data);
	      }
	    }
	
	    apiRequest = request.post(getBaseURL(host) + path)
	      .set('Authorization', 'Bearer ' + accessToken)
	      .set('Dropbox-API-Arg', httpHeaderSafeJson(args))
	      .on('request', function () {
	        if (this.xhr) {
	          this.xhr.responseType = 'blob';
	        }
	      });
	
	    if (selectUser) {
	      apiRequest = apiRequest.set('Dropbox-API-Select-User', selectUser);
	    }
	
	    // Apply the node binary parser to the response if executing in node
	    if (typeof window === 'undefined') {
	      apiRequest
	        .buffer(true)
	        .parse(nodeBinaryParser)
	        .end(responseHandler);
	    } else {
	      apiRequest.end(responseHandler);
	    }
	  };
	
	  return new Promise(promiseFunction);
	};
	
	module.exports = downloadRequest;


/***/ },

/***/ 919:
/*!************************************************!*\
  !*** ./~/dropbox/src/http-header-safe-json.js ***!
  \************************************************/
/***/ function(module, exports) {

	// source https://www.dropboxforum.com/t5/API-support/HTTP-header-quot-Dropbox-API-Arg-quot-could-not-decode-input-as/m-p/173823/highlight/true#M6786
	var charsToEncode = /[\u007f-\uffff]/g;
	
	function httpHeaderSafeJson(args) {
	  return JSON.stringify(args).replace(charsToEncode, function (c) {
	    return '\\u' + ('000' + c.charCodeAt(0).toString(16)).slice(-4);
	  });
	}
	
	module.exports = httpHeaderSafeJson;


/***/ },

/***/ 920:
/*!*****************************************!*\
  !*** ./~/dropbox/src/upload-request.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var request = __webpack_require__(/*! superagent */ 909);
	var Promise = __webpack_require__(/*! es6-promise */ 915).Promise;
	var getBaseURL = __webpack_require__(/*! ./get-base-url */ 917);
	var httpHeaderSafeJson = __webpack_require__(/*! ./http-header-safe-json */ 919);
	
	// This doesn't match what was spec'd in paper doc yet
	var buildCustomError = function (error, response) {
	  return {
	    status: error.status,
	    error: (response ? response.text : null) || error.toString(),
	    response: response
	  };
	};
	
	var uploadRequest = function (path, args, auth, host, accessToken, selectUser) {
	  if (auth !== 'user') {
	    throw new Error('Unexpected auth type: ' + auth);
	  }
	
	  var promiseFunction = function (resolve, reject) {
	    var apiRequest;
	
	    // Since args.contents is sent as the body of the request and not added to
	    // the url, it needs to be remove it from args.
	    var contents = args.contents;
	    delete args.contents;
	
	    function success(data) {
	      if (resolve) {
	        resolve(data);
	      }
	    }
	
	    function failure(error) {
	      if (reject) {
	        reject(error);
	      }
	    }
	
	    function responseHandler(error, response) {
	      if (error) {
	        failure(buildCustomError(error, response));
	      } else {
	        success(response.body);
	      }
	    }
	
	    apiRequest = request.post(getBaseURL(host) + path)
	      .type('application/octet-stream')
	      .set('Authorization', 'Bearer ' + accessToken)
	      .set('Dropbox-API-Arg', httpHeaderSafeJson(args));
	
	    if (selectUser) {
	      apiRequest = apiRequest.set('Dropbox-API-Select-User', selectUser);
	    }
	
	    apiRequest
	      .send(contents)
	      .end(responseHandler);
	  };
	
	  return new Promise(promiseFunction);
	};
	
	module.exports = uploadRequest;


/***/ },

/***/ 921:
/*!*********************************!*\
  !*** ./~/dropbox/src/routes.js ***!
  \*********************************/
/***/ function(module, exports) {

	// Auto-generated by Stone, do not modify.
	var routes = {};
	
	/**
	 * Creates an OAuth 2.0 access token from the supplied OAuth 1.0 access token.
	 * @function Dropbox#authTokenFromOauth1
	 * @arg {AuthTokenFromOAuth1Arg} arg - The request parameters.
	 * @returns {Promise.<AuthTokenFromOAuth1Result, Error.<AuthTokenFromOAuth1Error>>}
	 */
	routes.authTokenFromOauth1 = function (arg) {
	  return this.request('auth/token/from_oauth1', arg, 'app', 'api', 'rpc');
	};
	
	/**
	 * Disables the access token used to authenticate the call.
	 * @function Dropbox#authTokenRevoke
	 * @arg {void} arg - The request parameters.
	 * @returns {Promise.<void, Error.<void>>}
	 */
	routes.authTokenRevoke = function (arg) {
	  return this.request('auth/token/revoke', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the metadata for a file or folder. This is an alpha endpoint
	 * compatible with the properties API. Note: Metadata for the root folder is
	 * unsupported.
	 * @function Dropbox#filesAlphaGetMetadata
	 * @arg {FilesAlphaGetMetadataArg} arg - The request parameters.
	 * @returns {Promise.<(FilesFileMetadata|FilesFolderMetadata|FilesDeletedMetadata), Error.<FilesAlphaGetMetadataError>>}
	 */
	routes.filesAlphaGetMetadata = function (arg) {
	  return this.request('files/alpha/get_metadata', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Create a new file with the contents provided in the request. Note that this
	 * endpoint is part of the properties API alpha and is slightly different from
	 * upload. Do not use this to upload a file larger than 150 MB. Instead, create
	 * an upload session with upload_session/start.
	 * @function Dropbox#filesAlphaUpload
	 * @arg {FilesCommitInfoWithProperties} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesUploadErrorWithProperties>>}
	 */
	routes.filesAlphaUpload = function (arg) {
	  return this.request('files/alpha/upload', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * Copy a file or folder to a different location in the user's Dropbox. If the
	 * source path is a folder all its contents will be copied.
	 * @function Dropbox#filesCopy
	 * @arg {FilesRelocationArg} arg - The request parameters.
	 * @returns {Promise.<(FilesFileMetadata|FilesFolderMetadata|FilesDeletedMetadata), Error.<FilesRelocationError>>}
	 */
	routes.filesCopy = function (arg) {
	  return this.request('files/copy', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Copy multiple files or folders to different locations at once in the user's
	 * Dropbox. If RelocationBatchArg.allow_shared_folder is false, this route is
	 * atomic. If on entry failes, the whole transaction will abort. If
	 * RelocationBatchArg.allow_shared_folder is true, not atomicity is guaranteed,
	 * but you will be able to copy the contents of shared folders to new locations.
	 * This route will return job ID immediately and do the async copy job in
	 * background. Please use copy_batch/check to check the job status.
	 * @function Dropbox#filesCopyBatch
	 * @arg {FilesRelocationBatchArg} arg - The request parameters.
	 * @returns {Promise.<FilesRelocationBatchLaunch, Error.<void>>}
	 */
	routes.filesCopyBatch = function (arg) {
	  return this.request('files/copy_batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for copy_batch. If success, it
	 * returns list of results for each entry.
	 * @function Dropbox#filesCopyBatchCheck
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<FilesRelocationBatchJobStatus, Error.<AsyncPollError>>}
	 */
	routes.filesCopyBatchCheck = function (arg) {
	  return this.request('files/copy_batch/check', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get a copy reference to a file or folder. This reference string can be used
	 * to save that file or folder to another user's Dropbox by passing it to
	 * copy_reference/save.
	 * @function Dropbox#filesCopyReferenceGet
	 * @arg {FilesGetCopyReferenceArg} arg - The request parameters.
	 * @returns {Promise.<FilesGetCopyReferenceResult, Error.<FilesGetCopyReferenceError>>}
	 */
	routes.filesCopyReferenceGet = function (arg) {
	  return this.request('files/copy_reference/get', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Save a copy reference returned by copy_reference/get to the user's Dropbox.
	 * @function Dropbox#filesCopyReferenceSave
	 * @arg {FilesSaveCopyReferenceArg} arg - The request parameters.
	 * @returns {Promise.<FilesSaveCopyReferenceResult, Error.<FilesSaveCopyReferenceError>>}
	 */
	routes.filesCopyReferenceSave = function (arg) {
	  return this.request('files/copy_reference/save', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Create a folder at a given path.
	 * @function Dropbox#filesCreateFolder
	 * @arg {FilesCreateFolderArg} arg - The request parameters.
	 * @returns {Promise.<FilesFolderMetadata, Error.<FilesCreateFolderError>>}
	 */
	routes.filesCreateFolder = function (arg) {
	  return this.request('files/create_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Delete the file or folder at a given path. If the path is a folder, all its
	 * contents will be deleted too. A successful response indicates that the file
	 * or folder was deleted. The returned metadata will be the corresponding
	 * FileMetadata or FolderMetadata for the item at time of deletion, and not a
	 * DeletedMetadata object.
	 * @function Dropbox#filesDelete
	 * @arg {FilesDeleteArg} arg - The request parameters.
	 * @returns {Promise.<(FilesFileMetadata|FilesFolderMetadata|FilesDeletedMetadata), Error.<FilesDeleteError>>}
	 */
	routes.filesDelete = function (arg) {
	  return this.request('files/delete', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Delete multiple files/folders at once. This route is asynchronous, which
	 * returns a job ID immediately and runs the delete batch asynchronously. Use
	 * delete_batch/check to check the job status.
	 * @function Dropbox#filesDeleteBatch
	 * @arg {FilesDeleteBatchArg} arg - The request parameters.
	 * @returns {Promise.<FilesDeleteBatchLaunch, Error.<void>>}
	 */
	routes.filesDeleteBatch = function (arg) {
	  return this.request('files/delete_batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for delete_batch. If success, it
	 * returns list of result for each entry.
	 * @function Dropbox#filesDeleteBatchCheck
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<FilesDeleteBatchJobStatus, Error.<AsyncPollError>>}
	 */
	routes.filesDeleteBatchCheck = function (arg) {
	  return this.request('files/delete_batch/check', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Download a file from a user's Dropbox.
	 * @function Dropbox#filesDownload
	 * @arg {FilesDownloadArg} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesDownloadError>>}
	 */
	routes.filesDownload = function (arg) {
	  return this.request('files/download', arg, 'user', 'content', 'download');
	};
	
	/**
	 * Returns the metadata for a file or folder. Note: Metadata for the root folder
	 * is unsupported.
	 * @function Dropbox#filesGetMetadata
	 * @arg {FilesGetMetadataArg} arg - The request parameters.
	 * @returns {Promise.<(FilesFileMetadata|FilesFolderMetadata|FilesDeletedMetadata), Error.<FilesGetMetadataError>>}
	 */
	routes.filesGetMetadata = function (arg) {
	  return this.request('files/get_metadata', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get a preview for a file. Currently previews are only generated for the files
	 * with  the following extensions: .doc, .docx, .docm, .ppt, .pps, .ppsx, .ppsm,
	 * .pptx, .pptm,  .xls, .xlsx, .xlsm, .rtf.
	 * @function Dropbox#filesGetPreview
	 * @arg {FilesPreviewArg} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesPreviewError>>}
	 */
	routes.filesGetPreview = function (arg) {
	  return this.request('files/get_preview', arg, 'user', 'content', 'download');
	};
	
	/**
	 * Get a temporary link to stream content of a file. This link will expire in
	 * four hours and afterwards you will get 410 Gone. Content-Type of the link is
	 * determined automatically by the file's mime type.
	 * @function Dropbox#filesGetTemporaryLink
	 * @arg {FilesGetTemporaryLinkArg} arg - The request parameters.
	 * @returns {Promise.<FilesGetTemporaryLinkResult, Error.<FilesGetTemporaryLinkError>>}
	 */
	routes.filesGetTemporaryLink = function (arg) {
	  return this.request('files/get_temporary_link', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get a thumbnail for an image. This method currently supports files with the
	 * following file extensions: jpg, jpeg, png, tiff, tif, gif and bmp. Photos
	 * that are larger than 20MB in size won't be converted to a thumbnail.
	 * @function Dropbox#filesGetThumbnail
	 * @arg {FilesThumbnailArg} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesThumbnailError>>}
	 */
	routes.filesGetThumbnail = function (arg) {
	  return this.request('files/get_thumbnail', arg, 'user', 'content', 'download');
	};
	
	/**
	 * Starts returning the contents of a folder. If the result's
	 * ListFolderResult.has_more field is true, call list_folder/continue with the
	 * returned ListFolderResult.cursor to retrieve more entries. If you're using
	 * ListFolderArg.recursive set to true to keep a local cache of the contents of
	 * a Dropbox account, iterate through each entry in order and process them as
	 * follows to keep your local state in sync: For each FileMetadata, store the
	 * new entry at the given path in your local state. If the required parent
	 * folders don't exist yet, create them. If there's already something else at
	 * the given path, replace it and remove all its children. For each
	 * FolderMetadata, store the new entry at the given path in your local state. If
	 * the required parent folders don't exist yet, create them. If there's already
	 * something else at the given path, replace it but leave the children as they
	 * are. Check the new entry's FolderSharingInfo.read_only and set all its
	 * children's read-only statuses to match. For each DeletedMetadata, if your
	 * local state has something at the given path, remove it and all its children.
	 * If there's nothing at the given path, ignore this entry.
	 * @function Dropbox#filesListFolder
	 * @arg {FilesListFolderArg} arg - The request parameters.
	 * @returns {Promise.<FilesListFolderResult, Error.<FilesListFolderError>>}
	 */
	routes.filesListFolder = function (arg) {
	  return this.request('files/list_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from list_folder, use this to paginate
	 * through all files and retrieve updates to the folder, following the same
	 * rules as documented for list_folder.
	 * @function Dropbox#filesListFolderContinue
	 * @arg {FilesListFolderContinueArg} arg - The request parameters.
	 * @returns {Promise.<FilesListFolderResult, Error.<FilesListFolderContinueError>>}
	 */
	routes.filesListFolderContinue = function (arg) {
	  return this.request('files/list_folder/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * A way to quickly get a cursor for the folder's state. Unlike list_folder,
	 * list_folder/get_latest_cursor doesn't return any entries. This endpoint is
	 * for app which only needs to know about new files and modifications and
	 * doesn't need to know about files that already exist in Dropbox.
	 * @function Dropbox#filesListFolderGetLatestCursor
	 * @arg {FilesListFolderArg} arg - The request parameters.
	 * @returns {Promise.<FilesListFolderGetLatestCursorResult, Error.<FilesListFolderError>>}
	 */
	routes.filesListFolderGetLatestCursor = function (arg) {
	  return this.request('files/list_folder/get_latest_cursor', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * A longpoll endpoint to wait for changes on an account. In conjunction with
	 * list_folder/continue, this call gives you a low-latency way to monitor an
	 * account for file changes. The connection will block until there are changes
	 * available or a timeout occurs. This endpoint is useful mostly for client-side
	 * apps. If you're looking for server-side notifications, check out our webhooks
	 * documentation https://www.dropbox.com/developers/reference/webhooks.
	 * @function Dropbox#filesListFolderLongpoll
	 * @arg {FilesListFolderLongpollArg} arg - The request parameters.
	 * @returns {Promise.<FilesListFolderLongpollResult, Error.<FilesListFolderLongpollError>>}
	 */
	routes.filesListFolderLongpoll = function (arg) {
	  return this.request('files/list_folder/longpoll', arg, 'noauth', 'notify', 'rpc');
	};
	
	/**
	 * Return revisions of a file.
	 * @function Dropbox#filesListRevisions
	 * @arg {FilesListRevisionsArg} arg - The request parameters.
	 * @returns {Promise.<FilesListRevisionsResult, Error.<FilesListRevisionsError>>}
	 */
	routes.filesListRevisions = function (arg) {
	  return this.request('files/list_revisions', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Move a file or folder to a different location in the user's Dropbox. If the
	 * source path is a folder all its contents will be moved.
	 * @function Dropbox#filesMove
	 * @arg {FilesRelocationArg} arg - The request parameters.
	 * @returns {Promise.<(FilesFileMetadata|FilesFolderMetadata|FilesDeletedMetadata), Error.<FilesRelocationError>>}
	 */
	routes.filesMove = function (arg) {
	  return this.request('files/move', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Move multiple files or folders to different locations at once in the user's
	 * Dropbox. This route is 'all or nothing', which means if one entry fails, the
	 * whole transaction will abort. This route will return job ID immediately and
	 * do the async moving job in background. Please use move_batch/check to check
	 * the job status.
	 * @function Dropbox#filesMoveBatch
	 * @arg {FilesRelocationBatchArg} arg - The request parameters.
	 * @returns {Promise.<FilesRelocationBatchLaunch, Error.<void>>}
	 */
	routes.filesMoveBatch = function (arg) {
	  return this.request('files/move_batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for move_batch. If success, it
	 * returns list of results for each entry.
	 * @function Dropbox#filesMoveBatchCheck
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<FilesRelocationBatchJobStatus, Error.<AsyncPollError>>}
	 */
	routes.filesMoveBatchCheck = function (arg) {
	  return this.request('files/move_batch/check', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Permanently delete the file or folder at a given path (see
	 * https://www.dropbox.com/en/help/40). Note: This endpoint is only available
	 * for Dropbox Business apps.
	 * @function Dropbox#filesPermanentlyDelete
	 * @arg {FilesDeleteArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesDeleteError>>}
	 */
	routes.filesPermanentlyDelete = function (arg) {
	  return this.request('files/permanently_delete', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Add custom properties to a file using a filled property template. See
	 * properties/template/add to create new property templates.
	 * @function Dropbox#filesPropertiesAdd
	 * @arg {FilesPropertyGroupWithPath} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesAddPropertiesError>>}
	 */
	routes.filesPropertiesAdd = function (arg) {
	  return this.request('files/properties/add', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Overwrite custom properties from a specified template associated with a file.
	 * @function Dropbox#filesPropertiesOverwrite
	 * @arg {FilesPropertyGroupWithPath} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesInvalidPropertyGroupError>>}
	 */
	routes.filesPropertiesOverwrite = function (arg) {
	  return this.request('files/properties/overwrite', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Remove all custom properties from a specified template associated with a
	 * file. To remove specific property key value pairs, see properties/update. To
	 * update a property template, see properties/template/update. Property
	 * templates can't be removed once created.
	 * @function Dropbox#filesPropertiesRemove
	 * @arg {FilesRemovePropertiesArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesRemovePropertiesError>>}
	 */
	routes.filesPropertiesRemove = function (arg) {
	  return this.request('files/properties/remove', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get the schema for a specified template.
	 * @function Dropbox#filesPropertiesTemplateGet
	 * @arg {PropertiesGetPropertyTemplateArg} arg - The request parameters.
	 * @returns {Promise.<PropertiesGetPropertyTemplateResult, Error.<PropertiesPropertyTemplateError>>}
	 */
	routes.filesPropertiesTemplateGet = function (arg) {
	  return this.request('files/properties/template/get', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get the property template identifiers for a user. To get the schema of each
	 * template use properties/template/get.
	 * @function Dropbox#filesPropertiesTemplateList
	 * @arg {void} arg - The request parameters.
	 * @returns {Promise.<PropertiesListPropertyTemplateIds, Error.<PropertiesPropertyTemplateError>>}
	 */
	routes.filesPropertiesTemplateList = function (arg) {
	  return this.request('files/properties/template/list', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Add, update or remove custom properties from a specified template associated
	 * with a file. Fields that already exist and not described in the request will
	 * not be modified.
	 * @function Dropbox#filesPropertiesUpdate
	 * @arg {FilesUpdatePropertyGroupArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesUpdatePropertiesError>>}
	 */
	routes.filesPropertiesUpdate = function (arg) {
	  return this.request('files/properties/update', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Restore a file to a specific revision.
	 * @function Dropbox#filesRestore
	 * @arg {FilesRestoreArg} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesRestoreError>>}
	 */
	routes.filesRestore = function (arg) {
	  return this.request('files/restore', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Save a specified URL into a file in user's Dropbox. If the given path already
	 * exists, the file will be renamed to avoid the conflict (e.g. myfile (1).txt).
	 * @function Dropbox#filesSaveUrl
	 * @arg {FilesSaveUrlArg} arg - The request parameters.
	 * @returns {Promise.<FilesSaveUrlResult, Error.<FilesSaveUrlError>>}
	 */
	routes.filesSaveUrl = function (arg) {
	  return this.request('files/save_url', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Check the status of a save_url job.
	 * @function Dropbox#filesSaveUrlCheckJobStatus
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<FilesSaveUrlJobStatus, Error.<AsyncPollError>>}
	 */
	routes.filesSaveUrlCheckJobStatus = function (arg) {
	  return this.request('files/save_url/check_job_status', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Searches for files and folders. Note: Recent changes may not immediately be
	 * reflected in search results due to a short delay in indexing.
	 * @function Dropbox#filesSearch
	 * @arg {FilesSearchArg} arg - The request parameters.
	 * @returns {Promise.<FilesSearchResult, Error.<FilesSearchError>>}
	 */
	routes.filesSearch = function (arg) {
	  return this.request('files/search', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Create a new file with the contents provided in the request. Do not use this
	 * to upload a file larger than 150 MB. Instead, create an upload session with
	 * upload_session/start.
	 * @function Dropbox#filesUpload
	 * @arg {FilesCommitInfo} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesUploadError>>}
	 */
	routes.filesUpload = function (arg) {
	  return this.request('files/upload', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * Append more data to an upload session. A single request should not upload
	 * more than 150 MB of file contents.
	 * @function Dropbox#filesUploadSessionAppend
	 * @deprecated
	 * @arg {FilesUploadSessionCursor} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesUploadSessionLookupError>>}
	 */
	routes.filesUploadSessionAppend = function (arg) {
	  return this.request('files/upload_session/append', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * Append more data to an upload session. When the parameter close is set, this
	 * call will close the session. A single request should not upload more than 150
	 * MB of file contents.
	 * @function Dropbox#filesUploadSessionAppendV2
	 * @arg {FilesUploadSessionAppendArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<FilesUploadSessionLookupError>>}
	 */
	routes.filesUploadSessionAppendV2 = function (arg) {
	  return this.request('files/upload_session/append_v2', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * Finish an upload session and save the uploaded data to the given file path. A
	 * single request should not upload more than 150 MB of file contents.
	 * @function Dropbox#filesUploadSessionFinish
	 * @arg {FilesUploadSessionFinishArg} arg - The request parameters.
	 * @returns {Promise.<FilesFileMetadata, Error.<FilesUploadSessionFinishError>>}
	 */
	routes.filesUploadSessionFinish = function (arg) {
	  return this.request('files/upload_session/finish', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * This route helps you commit many files at once into a user's Dropbox. Use
	 * upload_session/start and upload_session/append_v2 to upload file contents. We
	 * recommend uploading many files in parallel to increase throughput. Once the
	 * file contents have been uploaded, rather than calling upload_session/finish,
	 * use this route to finish all your upload sessions in a single request.
	 * UploadSessionStartArg.close or UploadSessionAppendArg.close needs to be true
	 * for the last upload_session/start or upload_session/append_v2 call. This
	 * route will return a job_id immediately and do the async commit job in
	 * background. Use upload_session/finish_batch/check to check the job status.
	 * For the same account, this route should be executed serially. That means you
	 * should not start the next job before current job finishes. We allow up to
	 * 1000 entries in a single request.
	 * @function Dropbox#filesUploadSessionFinishBatch
	 * @arg {FilesUploadSessionFinishBatchArg} arg - The request parameters.
	 * @returns {Promise.<FilesUploadSessionFinishBatchLaunch, Error.<void>>}
	 */
	routes.filesUploadSessionFinishBatch = function (arg) {
	  return this.request('files/upload_session/finish_batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for upload_session/finish_batch. If
	 * success, it returns list of result for each entry.
	 * @function Dropbox#filesUploadSessionFinishBatchCheck
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<FilesUploadSessionFinishBatchJobStatus, Error.<AsyncPollError>>}
	 */
	routes.filesUploadSessionFinishBatchCheck = function (arg) {
	  return this.request('files/upload_session/finish_batch/check', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Upload sessions allow you to upload a single file in one or more requests,
	 * for example where the size of the file is greater than 150 MB.  This call
	 * starts a new upload session with the given data. You can then use
	 * upload_session/append_v2 to add more data and upload_session/finish to save
	 * all the data to a file in Dropbox. A single request should not upload more
	 * than 150 MB of file contents.
	 * @function Dropbox#filesUploadSessionStart
	 * @arg {FilesUploadSessionStartArg} arg - The request parameters.
	 * @returns {Promise.<FilesUploadSessionStartResult, Error.<void>>}
	 */
	routes.filesUploadSessionStart = function (arg) {
	  return this.request('files/upload_session/start', arg, 'user', 'content', 'upload');
	};
	
	/**
	 * Marks the given Paper doc as deleted. This operation is non-destructive and
	 * the doc can be revived by the owner.  Note: This action can be performed only
	 * by the doc owner.
	 * @function Dropbox#paperDocsArchive
	 * @arg {PaperRefPaperDoc} arg - The request parameters.
	 * @returns {Promise.<void, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsArchive = function (arg) {
	  return this.request('paper/docs/archive', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Exports and downloads Paper doc either as HTML or markdown.
	 * @function Dropbox#paperDocsDownload
	 * @arg {PaperPaperDocExport} arg - The request parameters.
	 * @returns {Promise.<PaperPaperDocExportResult, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsDownload = function (arg) {
	  return this.request('paper/docs/download', arg, 'user', 'api', 'download');
	};
	
	/**
	 * Lists the users who are explicitly invited to the Paper folder in which the
	 * Paper doc is contained. For private folders all users (including owner)
	 * shared on the folder are listed and for team folders all non-team users
	 * shared on the folder are returned.
	 * @function Dropbox#paperDocsFolderUsersList
	 * @arg {PaperListUsersOnFolderArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListUsersOnFolderResponse, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsFolderUsersList = function (arg) {
	  return this.request('paper/docs/folder_users/list', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from docs/folder_users/list, use this to
	 * paginate through all users on the Paper folder.
	 * @function Dropbox#paperDocsFolderUsersListContinue
	 * @arg {PaperListUsersOnFolderContinueArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListUsersOnFolderResponse, Error.<PaperListUsersCursorError>>}
	 */
	routes.paperDocsFolderUsersListContinue = function (arg) {
	  return this.request('paper/docs/folder_users/list/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Retrieves folder information for the given Paper doc. This includes:   -
	 * folder sharing policy; permissions for subfolders are set by the top-level
	 * folder.   - full 'filepath', i.e. the list of folders (both folderId and
	 * folderName) from the root folder to the folder directly containing the Paper
	 * doc.  Note: If the Paper doc is not in any folder (aka unfiled) the response
	 * will be empty.
	 * @function Dropbox#paperDocsGetFolderInfo
	 * @arg {PaperRefPaperDoc} arg - The request parameters.
	 * @returns {Promise.<PaperFoldersContainingPaperDoc, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsGetFolderInfo = function (arg) {
	  return this.request('paper/docs/get_folder_info', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Return the list of all Paper docs according to the argument specifications.
	 * To iterate over through the full pagination, pass the cursor to
	 * docs/list/continue.
	 * @function Dropbox#paperDocsList
	 * @arg {PaperListPaperDocsArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListPaperDocsResponse, Error.<void>>}
	 */
	routes.paperDocsList = function (arg) {
	  return this.request('paper/docs/list', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from docs/list, use this to paginate through
	 * all Paper doc.
	 * @function Dropbox#paperDocsListContinue
	 * @arg {PaperListPaperDocsContinueArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListPaperDocsResponse, Error.<PaperListDocsCursorError>>}
	 */
	routes.paperDocsListContinue = function (arg) {
	  return this.request('paper/docs/list/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Permanently deletes the given Paper doc. This operation is final as the doc
	 * cannot be recovered.  Note: This action can be performed only by the doc
	 * owner.
	 * @function Dropbox#paperDocsPermanentlyDelete
	 * @arg {PaperRefPaperDoc} arg - The request parameters.
	 * @returns {Promise.<void, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsPermanentlyDelete = function (arg) {
	  return this.request('paper/docs/permanently_delete', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Gets the default sharing policy for the given Paper doc.
	 * @function Dropbox#paperDocsSharingPolicyGet
	 * @arg {PaperRefPaperDoc} arg - The request parameters.
	 * @returns {Promise.<PaperSharingPolicy, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsSharingPolicyGet = function (arg) {
	  return this.request('paper/docs/sharing_policy/get', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Sets the default sharing policy for the given Paper doc. The default
	 * 'team_sharing_policy' can be changed only by teams, omit this field for
	 * personal accounts.  Note: 'public_sharing_policy' cannot be set to the value
	 * 'disabled' because this setting can be changed only via the team admin
	 * console.
	 * @function Dropbox#paperDocsSharingPolicySet
	 * @arg {PaperPaperDocSharingPolicy} arg - The request parameters.
	 * @returns {Promise.<void, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsSharingPolicySet = function (arg) {
	  return this.request('paper/docs/sharing_policy/set', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows an owner or editor to add users to a Paper doc or change their
	 * permissions using their email or Dropbox account id.  Note: The Doc owner's
	 * permissions cannot be changed.
	 * @function Dropbox#paperDocsUsersAdd
	 * @arg {PaperAddPaperDocUser} arg - The request parameters.
	 * @returns {Promise.<Array.<PaperAddPaperDocUserMemberResult>, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsUsersAdd = function (arg) {
	  return this.request('paper/docs/users/add', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Lists all users who visited the Paper doc or users with explicit access. This
	 * call excludes users who have been removed. The list is sorted by the date of
	 * the visit or the share date. The list will include both users, the explicitly
	 * shared ones as well as those who came in using the Paper url link.
	 * @function Dropbox#paperDocsUsersList
	 * @arg {PaperListUsersOnPaperDocArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListUsersOnPaperDocResponse, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsUsersList = function (arg) {
	  return this.request('paper/docs/users/list', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from docs/users/list, use this to paginate
	 * through all users on the Paper doc.
	 * @function Dropbox#paperDocsUsersListContinue
	 * @arg {PaperListUsersOnPaperDocContinueArgs} arg - The request parameters.
	 * @returns {Promise.<PaperListUsersOnPaperDocResponse, Error.<PaperListUsersCursorError>>}
	 */
	routes.paperDocsUsersListContinue = function (arg) {
	  return this.request('paper/docs/users/list/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows an owner or editor to remove users from a Paper doc using their email
	 * or Dropbox account id.  Note: Doc owner cannot be removed.
	 * @function Dropbox#paperDocsUsersRemove
	 * @arg {PaperRemovePaperDocUser} arg - The request parameters.
	 * @returns {Promise.<void, Error.<PaperDocLookupError>>}
	 */
	routes.paperDocsUsersRemove = function (arg) {
	  return this.request('paper/docs/users/remove', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Adds specified members to a file.
	 * @function Dropbox#sharingAddFileMember
	 * @arg {SharingAddFileMemberArgs} arg - The request parameters.
	 * @returns {Promise.<Array.<SharingFileMemberActionResult>, Error.<SharingAddFileMemberError>>}
	 */
	routes.sharingAddFileMember = function (arg) {
	  return this.request('sharing/add_file_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows an owner or editor (if the ACL update policy allows) of a shared
	 * folder to add another member. For the new member to get access to all the
	 * functionality for this folder, you will need to call mount_folder on their
	 * behalf. Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingAddFolderMember
	 * @arg {SharingAddFolderMemberArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingAddFolderMemberError>>}
	 */
	routes.sharingAddFolderMember = function (arg) {
	  return this.request('sharing/add_folder_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Identical to update_file_member but with less information returned.
	 * @function Dropbox#sharingChangeFileMemberAccess
	 * @deprecated
	 * @arg {SharingChangeFileMemberAccessArgs} arg - The request parameters.
	 * @returns {Promise.<SharingFileMemberActionResult, Error.<SharingFileMemberActionError>>}
	 */
	routes.sharingChangeFileMemberAccess = function (arg) {
	  return this.request('sharing/change_file_member_access', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job. Apps must have full Dropbox access
	 * to use this endpoint.
	 * @function Dropbox#sharingCheckJobStatus
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<SharingJobStatus, Error.<AsyncPollError>>}
	 */
	routes.sharingCheckJobStatus = function (arg) {
	  return this.request('sharing/check_job_status', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for sharing a folder. Apps must
	 * have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingCheckRemoveMemberJobStatus
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<SharingRemoveMemberJobStatus, Error.<AsyncPollError>>}
	 */
	routes.sharingCheckRemoveMemberJobStatus = function (arg) {
	  return this.request('sharing/check_remove_member_job_status', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns the status of an asynchronous job for sharing a folder. Apps must
	 * have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingCheckShareJobStatus
	 * @arg {AsyncPollArg} arg - The request parameters.
	 * @returns {Promise.<SharingShareFolderJobStatus, Error.<AsyncPollError>>}
	 */
	routes.sharingCheckShareJobStatus = function (arg) {
	  return this.request('sharing/check_share_job_status', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Create a shared link. If a shared link already exists for the given path,
	 * that link is returned. Note that in the returned PathLinkMetadata, the
	 * PathLinkMetadata.url field is the shortened URL if
	 * CreateSharedLinkArg.short_url argument is set to true. Previously, it was
	 * technically possible to break a shared link by moving or renaming the
	 * corresponding file or folder. In the future, this will no longer be the case,
	 * so your app shouldn't rely on this behavior. Instead, if your app needs to
	 * revoke a shared link, use revoke_shared_link.
	 * @function Dropbox#sharingCreateSharedLink
	 * @deprecated
	 * @arg {SharingCreateSharedLinkArg} arg - The request parameters.
	 * @returns {Promise.<SharingPathLinkMetadata, Error.<SharingCreateSharedLinkError>>}
	 */
	routes.sharingCreateSharedLink = function (arg) {
	  return this.request('sharing/create_shared_link', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Create a shared link with custom settings. If no settings are given then the
	 * default visibility is RequestedVisibility.public (The resolved visibility,
	 * though, may depend on other aspects such as team and shared folder settings).
	 * @function Dropbox#sharingCreateSharedLinkWithSettings
	 * @arg {SharingCreateSharedLinkWithSettingsArg} arg - The request parameters.
	 * @returns {Promise.<(SharingFileLinkMetadata|SharingFolderLinkMetadata|SharingSharedLinkMetadata), Error.<SharingCreateSharedLinkWithSettingsError>>}
	 */
	routes.sharingCreateSharedLinkWithSettings = function (arg) {
	  return this.request('sharing/create_shared_link_with_settings', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns shared file metadata.
	 * @function Dropbox#sharingGetFileMetadata
	 * @arg {SharingGetFileMetadataArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFileMetadata, Error.<SharingGetFileMetadataError>>}
	 */
	routes.sharingGetFileMetadata = function (arg) {
	  return this.request('sharing/get_file_metadata', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns shared file metadata.
	 * @function Dropbox#sharingGetFileMetadataBatch
	 * @arg {SharingGetFileMetadataBatchArg} arg - The request parameters.
	 * @returns {Promise.<Array.<SharingGetFileMetadataBatchResult>, Error.<SharingSharingUserError>>}
	 */
	routes.sharingGetFileMetadataBatch = function (arg) {
	  return this.request('sharing/get_file_metadata/batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns shared folder metadata by its folder ID. Apps must have full Dropbox
	 * access to use this endpoint.
	 * @function Dropbox#sharingGetFolderMetadata
	 * @arg {SharingGetMetadataArgs} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFolderMetadata, Error.<SharingSharedFolderAccessError>>}
	 */
	routes.sharingGetFolderMetadata = function (arg) {
	  return this.request('sharing/get_folder_metadata', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Download the shared link's file from a user's Dropbox.
	 * @function Dropbox#sharingGetSharedLinkFile
	 * @arg {Object} arg - The request parameters.
	 * @returns {Promise.<(SharingFileLinkMetadata|SharingFolderLinkMetadata|SharingSharedLinkMetadata), Error.<SharingGetSharedLinkFileError>>}
	 */
	routes.sharingGetSharedLinkFile = function (arg) {
	  return this.request('sharing/get_shared_link_file', arg, 'user', 'content', 'download');
	};
	
	/**
	 * Get the shared link's metadata.
	 * @function Dropbox#sharingGetSharedLinkMetadata
	 * @arg {SharingGetSharedLinkMetadataArg} arg - The request parameters.
	 * @returns {Promise.<(SharingFileLinkMetadata|SharingFolderLinkMetadata|SharingSharedLinkMetadata), Error.<SharingSharedLinkError>>}
	 */
	routes.sharingGetSharedLinkMetadata = function (arg) {
	  return this.request('sharing/get_shared_link_metadata', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns a list of LinkMetadata objects for this user, including collection
	 * links. If no path is given, returns a list of all shared links for the
	 * current user, including collection links. If a non-empty path is given,
	 * returns a list of all shared links that allow access to the given path.
	 * Collection links are never returned in this case. Note that the url field in
	 * the response is never the shortened URL.
	 * @function Dropbox#sharingGetSharedLinks
	 * @deprecated
	 * @arg {SharingGetSharedLinksArg} arg - The request parameters.
	 * @returns {Promise.<SharingGetSharedLinksResult, Error.<SharingGetSharedLinksError>>}
	 */
	routes.sharingGetSharedLinks = function (arg) {
	  return this.request('sharing/get_shared_links', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Use to obtain the members who have been invited to a file, both inherited and
	 * uninherited members.
	 * @function Dropbox#sharingListFileMembers
	 * @arg {SharingListFileMembersArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFileMembers, Error.<SharingListFileMembersError>>}
	 */
	routes.sharingListFileMembers = function (arg) {
	  return this.request('sharing/list_file_members', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get members of multiple files at once. The arguments to this route are more
	 * limited, and the limit on query result size per file is more strict. To
	 * customize the results more, use the individual file endpoint. Inherited users
	 * and groups are not included in the result, and permissions are not returned
	 * for this endpoint.
	 * @function Dropbox#sharingListFileMembersBatch
	 * @arg {SharingListFileMembersBatchArg} arg - The request parameters.
	 * @returns {Promise.<Array.<SharingListFileMembersBatchResult>, Error.<SharingSharingUserError>>}
	 */
	routes.sharingListFileMembersBatch = function (arg) {
	  return this.request('sharing/list_file_members/batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from list_file_members or
	 * list_file_members/batch, use this to paginate through all shared file
	 * members.
	 * @function Dropbox#sharingListFileMembersContinue
	 * @arg {SharingListFileMembersContinueArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFileMembers, Error.<SharingListFileMembersContinueError>>}
	 */
	routes.sharingListFileMembersContinue = function (arg) {
	  return this.request('sharing/list_file_members/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns shared folder membership by its folder ID. Apps must have full
	 * Dropbox access to use this endpoint.
	 * @function Dropbox#sharingListFolderMembers
	 * @arg {SharingListFolderMembersArgs} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFolderMembers, Error.<SharingSharedFolderAccessError>>}
	 */
	routes.sharingListFolderMembers = function (arg) {
	  return this.request('sharing/list_folder_members', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from list_folder_members, use this to
	 * paginate through all shared folder members. Apps must have full Dropbox
	 * access to use this endpoint.
	 * @function Dropbox#sharingListFolderMembersContinue
	 * @arg {SharingListFolderMembersContinueArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFolderMembers, Error.<SharingListFolderMembersContinueError>>}
	 */
	routes.sharingListFolderMembersContinue = function (arg) {
	  return this.request('sharing/list_folder_members/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Return the list of all shared folders the current user has access to. Apps
	 * must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingListFolders
	 * @arg {SharingListFoldersArgs} arg - The request parameters.
	 * @returns {Promise.<SharingListFoldersResult, Error.<void>>}
	 */
	routes.sharingListFolders = function (arg) {
	  return this.request('sharing/list_folders', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from list_folders, use this to paginate
	 * through all shared folders. The cursor must come from a previous call to
	 * list_folders or list_folders/continue. Apps must have full Dropbox access to
	 * use this endpoint.
	 * @function Dropbox#sharingListFoldersContinue
	 * @arg {SharingListFoldersContinueArg} arg - The request parameters.
	 * @returns {Promise.<SharingListFoldersResult, Error.<SharingListFoldersContinueError>>}
	 */
	routes.sharingListFoldersContinue = function (arg) {
	  return this.request('sharing/list_folders/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Return the list of all shared folders the current user can mount or unmount.
	 * Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingListMountableFolders
	 * @arg {SharingListFoldersArgs} arg - The request parameters.
	 * @returns {Promise.<SharingListFoldersResult, Error.<void>>}
	 */
	routes.sharingListMountableFolders = function (arg) {
	  return this.request('sharing/list_mountable_folders', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Once a cursor has been retrieved from list_mountable_folders, use this to
	 * paginate through all mountable shared folders. The cursor must come from a
	 * previous call to list_mountable_folders or list_mountable_folders/continue.
	 * Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingListMountableFoldersContinue
	 * @arg {SharingListFoldersContinueArg} arg - The request parameters.
	 * @returns {Promise.<SharingListFoldersResult, Error.<SharingListFoldersContinueError>>}
	 */
	routes.sharingListMountableFoldersContinue = function (arg) {
	  return this.request('sharing/list_mountable_folders/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Returns a list of all files shared with current user.  Does not include files
	 * the user has received via shared folders, and does  not include unclaimed
	 * invitations.
	 * @function Dropbox#sharingListReceivedFiles
	 * @arg {SharingListFilesArg} arg - The request parameters.
	 * @returns {Promise.<SharingListFilesResult, Error.<SharingSharingUserError>>}
	 */
	routes.sharingListReceivedFiles = function (arg) {
	  return this.request('sharing/list_received_files', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get more results with a cursor from list_received_files.
	 * @function Dropbox#sharingListReceivedFilesContinue
	 * @arg {SharingListFilesContinueArg} arg - The request parameters.
	 * @returns {Promise.<SharingListFilesResult, Error.<SharingListFilesContinueError>>}
	 */
	routes.sharingListReceivedFilesContinue = function (arg) {
	  return this.request('sharing/list_received_files/continue', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * List shared links of this user. If no path is given, returns a list of all
	 * shared links for the current user. If a non-empty path is given, returns a
	 * list of all shared links that allow access to the given path - direct links
	 * to the given path and links to parent folders of the given path. Links to
	 * parent folders can be suppressed by setting direct_only to true.
	 * @function Dropbox#sharingListSharedLinks
	 * @arg {SharingListSharedLinksArg} arg - The request parameters.
	 * @returns {Promise.<SharingListSharedLinksResult, Error.<SharingListSharedLinksError>>}
	 */
	routes.sharingListSharedLinks = function (arg) {
	  return this.request('sharing/list_shared_links', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Modify the shared link's settings. If the requested visibility conflict with
	 * the shared links policy of the team or the shared folder (in case the linked
	 * file is part of a shared folder) then the LinkPermissions.resolved_visibility
	 * of the returned SharedLinkMetadata will reflect the actual visibility of the
	 * shared link and the LinkPermissions.requested_visibility will reflect the
	 * requested visibility.
	 * @function Dropbox#sharingModifySharedLinkSettings
	 * @arg {SharingModifySharedLinkSettingsArgs} arg - The request parameters.
	 * @returns {Promise.<(SharingFileLinkMetadata|SharingFolderLinkMetadata|SharingSharedLinkMetadata), Error.<SharingModifySharedLinkSettingsError>>}
	 */
	routes.sharingModifySharedLinkSettings = function (arg) {
	  return this.request('sharing/modify_shared_link_settings', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * The current user mounts the designated folder. Mount a shared folder for a
	 * user after they have been added as a member. Once mounted, the shared folder
	 * will appear in their Dropbox. Apps must have full Dropbox access to use this
	 * endpoint.
	 * @function Dropbox#sharingMountFolder
	 * @arg {SharingMountFolderArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFolderMetadata, Error.<SharingMountFolderError>>}
	 */
	routes.sharingMountFolder = function (arg) {
	  return this.request('sharing/mount_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * The current user relinquishes their membership in the designated file. Note
	 * that the current user may still have inherited access to this file through
	 * the parent folder. Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingRelinquishFileMembership
	 * @arg {SharingRelinquishFileMembershipArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingRelinquishFileMembershipError>>}
	 */
	routes.sharingRelinquishFileMembership = function (arg) {
	  return this.request('sharing/relinquish_file_membership', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * The current user relinquishes their membership in the designated shared
	 * folder and will no longer have access to the folder.  A folder owner cannot
	 * relinquish membership in their own folder. This will run synchronously if
	 * leave_a_copy is false, and asynchronously if leave_a_copy is true. Apps must
	 * have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingRelinquishFolderMembership
	 * @arg {SharingRelinquishFolderMembershipArg} arg - The request parameters.
	 * @returns {Promise.<AsyncLaunchEmptyResult, Error.<SharingRelinquishFolderMembershipError>>}
	 */
	routes.sharingRelinquishFolderMembership = function (arg) {
	  return this.request('sharing/relinquish_folder_membership', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Identical to remove_file_member_2 but with less information returned.
	 * @function Dropbox#sharingRemoveFileMember
	 * @deprecated
	 * @arg {SharingRemoveFileMemberArg} arg - The request parameters.
	 * @returns {Promise.<SharingFileMemberActionIndividualResult, Error.<SharingRemoveFileMemberError>>}
	 */
	routes.sharingRemoveFileMember = function (arg) {
	  return this.request('sharing/remove_file_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Removes a specified member from the file.
	 * @function Dropbox#sharingRemoveFileMember2
	 * @arg {SharingRemoveFileMemberArg} arg - The request parameters.
	 * @returns {Promise.<SharingFileMemberRemoveActionResult, Error.<SharingRemoveFileMemberError>>}
	 */
	routes.sharingRemoveFileMember2 = function (arg) {
	  return this.request('sharing/remove_file_member_2', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows an owner or editor (if the ACL update policy allows) of a shared
	 * folder to remove another member. Apps must have full Dropbox access to use
	 * this endpoint.
	 * @function Dropbox#sharingRemoveFolderMember
	 * @arg {SharingRemoveFolderMemberArg} arg - The request parameters.
	 * @returns {Promise.<AsyncLaunchResultBase, Error.<SharingRemoveFolderMemberError>>}
	 */
	routes.sharingRemoveFolderMember = function (arg) {
	  return this.request('sharing/remove_folder_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Revoke a shared link. Note that even after revoking a shared link to a file,
	 * the file may be accessible if there are shared links leading to any of the
	 * file parent folders. To list all shared links that enable access to a
	 * specific file, you can use the list_shared_links with the file as the
	 * ListSharedLinksArg.path argument.
	 * @function Dropbox#sharingRevokeSharedLink
	 * @arg {SharingRevokeSharedLinkArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingRevokeSharedLinkError>>}
	 */
	routes.sharingRevokeSharedLink = function (arg) {
	  return this.request('sharing/revoke_shared_link', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Share a folder with collaborators. Most sharing will be completed
	 * synchronously. Large folders will be completed asynchronously. To make
	 * testing the async case repeatable, set `ShareFolderArg.force_async`. If a
	 * ShareFolderLaunch.async_job_id is returned, you'll need to call
	 * check_share_job_status until the action completes to get the metadata for the
	 * folder. Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingShareFolder
	 * @arg {SharingShareFolderArg} arg - The request parameters.
	 * @returns {Promise.<SharingShareFolderLaunch, Error.<SharingShareFolderError>>}
	 */
	routes.sharingShareFolder = function (arg) {
	  return this.request('sharing/share_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Transfer ownership of a shared folder to a member of the shared folder. User
	 * must have AccessLevel.owner access to the shared folder to perform a
	 * transfer. Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingTransferFolder
	 * @arg {SharingTransferFolderArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingTransferFolderError>>}
	 */
	routes.sharingTransferFolder = function (arg) {
	  return this.request('sharing/transfer_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * The current user unmounts the designated folder. They can re-mount the folder
	 * at a later time using mount_folder. Apps must have full Dropbox access to use
	 * this endpoint.
	 * @function Dropbox#sharingUnmountFolder
	 * @arg {SharingUnmountFolderArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingUnmountFolderError>>}
	 */
	routes.sharingUnmountFolder = function (arg) {
	  return this.request('sharing/unmount_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Remove all members from this file. Does not remove inherited members.
	 * @function Dropbox#sharingUnshareFile
	 * @arg {SharingUnshareFileArg} arg - The request parameters.
	 * @returns {Promise.<void, Error.<SharingUnshareFileError>>}
	 */
	routes.sharingUnshareFile = function (arg) {
	  return this.request('sharing/unshare_file', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows a shared folder owner to unshare the folder. You'll need to call
	 * check_job_status to determine if the action has completed successfully. Apps
	 * must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingUnshareFolder
	 * @arg {SharingUnshareFolderArg} arg - The request parameters.
	 * @returns {Promise.<AsyncLaunchEmptyResult, Error.<SharingUnshareFolderError>>}
	 */
	routes.sharingUnshareFolder = function (arg) {
	  return this.request('sharing/unshare_folder', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Changes a member's access on a shared file.
	 * @function Dropbox#sharingUpdateFileMember
	 * @arg {SharingUpdateFileMemberArgs} arg - The request parameters.
	 * @returns {Promise.<SharingMemberAccessLevelResult, Error.<SharingFileMemberActionError>>}
	 */
	routes.sharingUpdateFileMember = function (arg) {
	  return this.request('sharing/update_file_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Allows an owner or editor of a shared folder to update another member's
	 * permissions. Apps must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingUpdateFolderMember
	 * @arg {SharingUpdateFolderMemberArg} arg - The request parameters.
	 * @returns {Promise.<SharingMemberAccessLevelResult, Error.<SharingUpdateFolderMemberError>>}
	 */
	routes.sharingUpdateFolderMember = function (arg) {
	  return this.request('sharing/update_folder_member', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Update the sharing policies for a shared folder. User must have
	 * AccessLevel.owner access to the shared folder to update its policies. Apps
	 * must have full Dropbox access to use this endpoint.
	 * @function Dropbox#sharingUpdateFolderPolicy
	 * @arg {SharingUpdateFolderPolicyArg} arg - The request parameters.
	 * @returns {Promise.<SharingSharedFolderMetadata, Error.<SharingUpdateFolderPolicyError>>}
	 */
	routes.sharingUpdateFolderPolicy = function (arg) {
	  return this.request('sharing/update_folder_policy', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get information about a user's account.
	 * @function Dropbox#usersGetAccount
	 * @arg {UsersGetAccountArg} arg - The request parameters.
	 * @returns {Promise.<UsersBasicAccount, Error.<UsersGetAccountError>>}
	 */
	routes.usersGetAccount = function (arg) {
	  return this.request('users/get_account', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get information about multiple user accounts.  At most 300 accounts may be
	 * queried per request.
	 * @function Dropbox#usersGetAccountBatch
	 * @arg {UsersGetAccountBatchArg} arg - The request parameters.
	 * @returns {Promise.<Object, Error.<UsersGetAccountBatchError>>}
	 */
	routes.usersGetAccountBatch = function (arg) {
	  return this.request('users/get_account_batch', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get information about the current user's account.
	 * @function Dropbox#usersGetCurrentAccount
	 * @arg {void} arg - The request parameters.
	 * @returns {Promise.<UsersFullAccount, Error.<void>>}
	 */
	routes.usersGetCurrentAccount = function (arg) {
	  return this.request('users/get_current_account', arg, 'user', 'api', 'rpc');
	};
	
	/**
	 * Get the space usage information for the current user's account.
	 * @function Dropbox#usersGetSpaceUsage
	 * @arg {void} arg - The request parameters.
	 * @returns {Promise.<UsersSpaceUsage, Error.<void>>}
	 */
	routes.usersGetSpaceUsage = function (arg) {
	  return this.request('users/get_space_usage', arg, 'user', 'api', 'rpc');
	};
	
	module.exports = routes;


/***/ },

/***/ 922:
/*!***************************************!*\
  !*** ./src/store/FirebaseInstance.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _firebase = __webpack_require__(/*! firebase */ 414);
	
	var _firebase2 = _interopRequireDefault(_firebase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var config = {
	    apiKey: "AIzaSyBNiaBVWEvAg1HnN_XBlo70ATLT0ef6gJ0",
	    authDomain: "luminous-heat-3458.firebaseapp.com",
	    databaseURL: "https://luminous-heat-3458.firebaseio.com",
	    storageBucket: "luminous-heat-3458.appspot.com",
	    messagingSenderId: "635828897166"
	};
	
	_firebase2.default.initializeApp(config);
	
	exports.default = _firebase2.default;

/***/ },

/***/ 923:
/*!*******************************!*\
  !*** ./src/reducers/photo.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _user = __webpack_require__(/*! ./../actions/user */ 412);
	
	var _store = __webpack_require__(/*! ./../store */ 558);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var intinalState = {
	    albums: [{
	        name: 'Ảnh mới',
	        list: {}
	    }]
	
	};
	
	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intinalState;
	    var action = arguments[1];
	
	    switch (action.type) {
	        case 'USERDATA_PARSED':
	            return _extends({}, state, action.userData.photo);
	            break;
	
	        case 'GET_THUMB_SUCCESS':
	            {
	                var _newState = _extends({}, state);
	                _newState.albums[0].list[action.key] = action.photo;
	                return _newState;
	                break;
	            }
	        case 'UPLOAD_SUCCESS':
	            var newState = _extends({}, state);
	
	            newState.albums[0].list[action.response.id] = action.response;
	            (0, _user.appenUserData)(_store2.default.getState().user.uid, _extends({}, action.response, {
	                thumbnail: null
	            }), 'photo/albums/0/list');
	            return _extends({}, newState);
	            break;
	
	        default:
	            return state;
	    }
	};

/***/ },

/***/ 924:
/*!*************************************!*\
  !*** ./src/components/PhotoItem.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 4);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _withStyles = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 303);
	
	var _withStyles2 = _interopRequireDefault(_withStyles);
	
	var _photoItem = __webpack_require__(/*! ./css/photo-item.scss */ 925);
	
	var _photoItem2 = _interopRequireDefault(_photoItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PhotoItem = function (_React$Component) {
	    _inherits(PhotoItem, _React$Component);
	
	    function PhotoItem(props) {
	        _classCallCheck(this, PhotoItem);
	
	        var _this2 = _possibleConstructorReturn(this, (PhotoItem.__proto__ || Object.getPrototypeOf(PhotoItem)).call(this, props));
	
	        _this2.state = {
	            photo: props.photo,
	            src: ''
	        };
	        return _this2;
	    }
	
	    _createClass(PhotoItem, [{
	        key: 'convertThumbnail',
	        value: function convertThumbnail() {
	            if (this.state.photo.thumbnail) {
	                var _this = this;
	                var reader = new FileReader();
	                reader.onload = function (e) {
	                    _this.setState({
	                        src: e.target.result
	                    });
	                };
	                reader.readAsDataURL(this.state.photo.thumbnail.fileBlob);
	            } else {
	                this.props.getThumbnail(this.state.photo, this.props._key);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {}
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.setState(_extends({}, this.state, {
	                photo: nextProps.photo
	            }));
	            this.convertThumbnail();
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.convertThumbnail();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var state = this.state;
	            var image = _react2.default.createElement('img', { className: state.src === '' ? _photoItem2.default.skeleton : '', src: state.src });
	            return _react2.default.createElement(
	                'div',
	                { className: _photoItem2.default.root },
	                image
	            );
	        }
	    }]);
	
	    return PhotoItem;
	}(_react2.default.Component);
	
	exports.default = (0, _withStyles2.default)(_photoItem2.default)(PhotoItem);

/***/ },

/***/ 925:
/*!********************************************!*\
  !*** ./src/components/css/photo-item.scss ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	
	    var content = __webpack_require__(/*! !../../../~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../~/postcss-loader!../../../~/sass-loader!./photo-item.scss */ 926);
	    var insertCss = __webpack_require__(/*! ../../../~/isomorphic-style-loader/lib/insertCss.js */ 393);
	
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
	      module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./photo-item.scss", function() {
	        content = require("!!../../../node_modules/css-loader/index.js?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!../../../node_modules/postcss-loader/index.js!../../../node_modules/sass-loader/index.js!./photo-item.scss");
	
	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }
	
	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }
	  

/***/ },

/***/ 926:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?modules&camelCase&-url&localIdentName=[name]_[local]_[hash:base64:3]!./~/postcss-loader!./~/sass-loader!./src/components/css/photo-item.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 392)();
	// imports
	
	
	// module
	exports.push([module.id, ".photo-item_root_2-8 {\n  width: 33.3333%;\n  height: 128px;\n  text-align: center;\n  position: relative;\n  padding-top: 128px; }\n  .photo-item_root_2-8 img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto; }\n  .photo-item_skeleton_3YN {\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: photo-item_placeHolderShimmer_22q;\n          animation-name: photo-item_placeHolderShimmer_22q;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: #f6f7f8;\n  background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n  background-size: 800px 104px;\n  width: 100%;\n  height: 100%; }\n  @-webkit-keyframes photo-item_placeHolderShimmer_22q {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n  @keyframes photo-item_placeHolderShimmer_22q {\n  0% {\n    background-position: -468px 0; }\n  100% {\n    background-position: 468px 0; } }\n", ""]);
	
	// exports
	exports.locals = {
		"root": "photo-item_root_2-8",
		"root": "photo-item_root_2-8",
		"skeleton": "photo-item_skeleton_3YN",
		"skeleton": "photo-item_skeleton_3YN",
		"placeHolderShimmer": "photo-item_placeHolderShimmer_22q",
		"placeHolderShimmer": "photo-item_placeHolderShimmer_22q"
	};

/***/ }

});
//# sourceMappingURL=bundle.js.map