deserialize user......
req IncomingMessage {
  _readableState:
   ReadableState {
     objectMode: false,
     highWaterMark: 16384,
     buffer: [],
     length: 0,
     pipes: null,
     pipesCount: 0,
     flowing: null,
     ended: true,
     endEmitted: false,
     reading: false,
     sync: true,
     needReadable: false,
     emittedReadable: true,
     readableListening: false,
     resumeScheduled: false,
     defaultEncoding: 'utf8',
     ranOut: false,
     awaitDrain: 0,
     readingMore: true,
     decoder: null,
     encoding: null },
  readable: true,
  domain: null,
  _events: {},
  _eventsCount: 0,
  _maxListeners: undefined,
  socket:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 2444,
        _externalStream: {},
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 925,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 18003,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 18110,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end] } },
  connection:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 2444,
        _externalStream: {},
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 925,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 18003,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 18110,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end] } },
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  httpVersion: '1.1',
  complete: true,
  headers:
   { host: 'localhost:3000',
     connection: 'keep-alive',
     'cache-control': 'max-age=0',
     'upgrade-insecure-requests': '1',
     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36',
     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     referer: 'http://localhost:3000/login',
     'accept-encoding': 'gzip, deflate, sdch',
     'accept-language': 'en,zh-CN;q=0.8,zh;q=0.6',
     cookie: 'connect.sid=s%3AruYwpOFKWslvc0wrggmlhJsE6cYuvuP2.LcfFpnkyzaGydr9hL6mWZC%2FUgPKEOgvhDd%2FCwzHXPo8',
     'if-none-match': 'W/"ee-a7F3idxUDwx4zgsJXKIxcw"' },
  rawHeaders:
   [ 'Host',
     'localhost:3000',
     'Connection',
     'keep-alive',
     'Cache-Control',
     'max-age=0',
     'Upgrade-Insecure-Requests',
     '1',
     'User-Agent',
     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36',
     'Accept',
     'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
     'Referer',
     'http://localhost:3000/login',
     'Accept-Encoding',
     'gzip, deflate, sdch',
     'Accept-Language',
     'en,zh-CN;q=0.8,zh;q=0.6',
     'Cookie',
     'connect.sid=s%3AruYwpOFKWslvc0wrggmlhJsE6cYuvuP2.LcfFpnkyzaGydr9hL6mWZC%2FUgPKEOgvhDd%2FCwzHXPo8',
     'If-None-Match',
     'W/"ee-a7F3idxUDwx4zgsJXKIxcw"' ],
  trailers: {},
  rawTrailers: [],
  upgrade: false,
  url: '/',
  method: 'GET',
  statusCode: null,
  statusMessage: null,
  client:
   Socket {
     _connecting: false,
     _hadError: false,
     _handle:
      TCP {
        bytesRead: 2444,
        _externalStream: {},
        fd: 16,
        reading: true,
        owner: [Circular],
        onread: [Function: onread],
        onconnection: null,
        writeQueueSize: 0 },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function: socketOnError],
        close: [Object],
        data: [Function: socketOnData],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 10,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     destroyed: false,
     _bytesDispatched: 925,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _server:
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 3,
        _maxListeners: undefined,
        _connections: 3,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::3000' },
     _idleTimeout: 120000,
     _idleNext:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 0,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 18003,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 18110,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: onParserExecute],
        _headers: [],
        _url: '',
        _consumed: true,
        socket: [Circular],
        incoming: [Circular],
        outgoing: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function: parserOnIncoming] },
     on: [Function: socketOnWrap],
     _paused: false,
     read: [Function],
     _consuming: true,
     _httpMessage:
      ServerResponse {
        domain: null,
        _events: [Object],
        _eventsCount: 1,
        _maxListeners: undefined,
        output: [],
        outputEncodings: [],
        outputCallbacks: [],
        outputSize: 0,
        writable: true,
        _last: false,
        chunkedEncoding: false,
        shouldKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: true,
        _removedHeader: {},
        _contentLength: null,
        _hasBody: true,
        _trailer: '',
        finished: false,
        _headerSent: false,
        socket: [Circular],
        connection: [Circular],
        _header: null,
        _headers: [Object],
        _headerNames: [Object],
        _onPendingData: [Function: updateOutgoingData],
        req: [Circular],
        locals: {},
        writeHead: [Function: writeHead],
        end: [Function: end] } },
  _consuming: false,
  _dumped: false,
  next: [Function: next],
  baseUrl: '',
  originalUrl: '/',
  _parsedUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/',
     path: '/',
     href: '/',
     _raw: '/' },
  params: {},
  query: {},
  res:
   ServerResponse {
     domain: null,
     _events: { finish: [Function: resOnFinish] },
     _eventsCount: 1,
     _maxListeners: undefined,
     output: [],
     outputEncodings: [],
     outputCallbacks: [],
     outputSize: 0,
     writable: true,
     _last: false,
     chunkedEncoding: false,
     shouldKeepAlive: true,
     useChunkedEncodingByDefault: true,
     sendDate: true,
     _removedHeader: {},
     _contentLength: null,
     _hasBody: true,
     _trailer: '',
     finished: false,
     _headerSent: false,
     socket:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 925,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 18110,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular] },
     connection:
      Socket {
        _connecting: false,
        _hadError: false,
        _handle: [Object],
        _parent: null,
        _host: null,
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _eventsCount: 10,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        destroyed: false,
        _bytesDispatched: 925,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Object],
        _idleStart: 18110,
        parser: [Object],
        on: [Function: socketOnWrap],
        _paused: false,
        read: [Function],
        _consuming: true,
        _httpMessage: [Circular] },
     _header: null,
     _headers: { 'x-powered-by': 'Express' },
     _headerNames: { 'x-powered-by': 'X-Powered-By' },
     _onPendingData: [Function: updateOutgoingData],
     req: [Circular],
     locals: {},
     writeHead: [Function: writeHead],
     end: [Function: end] },
  body: {},
  _parsedOriginalUrl:
   Url {
     protocol: null,
     slashes: null,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: null,
     search: null,
     query: null,
     pathname: '/',
     path: '/',
     href: '/',
     _raw: '/' },
  sessionStore:
   KnexStore {
     domain: null,
     _events:
      { disconnect: [Function: ondisconnect],
        connect: [Function: onconnect] },
     _eventsCount: 2,
     _maxListeners: undefined,
     tablename: 'sessions',
     knex:
      { [Function: knex]
        Promise: [Object],
        queryBuilder: [Function: queryBuilder],
        raw: [Function: raw],
        batchInsert: [Function: batchInsert],
        transaction: [Function: transaction],
        initialize: [Function: initialize],
        destroy: [Function: destroy],
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        setMaxListeners: [Function: setMaxListeners],
        getMaxListeners: [Function: getMaxListeners],
        emit: [Function: emit],
        addListener: [Function: addListener],
        on: [Function: addListener],
        once: [Function: once],
        removeListener: [Function: removeListener],
        removeAllListeners: [Function: removeAllListeners],
        listeners: [Function: listeners],
        listenerCount: [Function: listenerCount],
        with: [Function],
        select: [Function],
        as: [Function],
        columns: [Function],
        column: [Function],
        from: [Function],
        fromJS: [Function],
        into: [Function],
        withSchema: [Function],
        table: [Function],
        distinct: [Function],
        join: [Function],
        joinRaw: [Function],
        innerJoin: [Function],
        leftJoin: [Function],
        leftOuterJoin: [Function],
        rightJoin: [Function],
        rightOuterJoin: [Function],
        outerJoin: [Function],
        fullOuterJoin: [Function],
        crossJoin: [Function],
        where: [Function],
        andWhere: [Function],
        orWhere: [Function],
        whereNot: [Function],
        orWhereNot: [Function],
        whereRaw: [Function],
        whereWrapped: [Function],
        havingWrapped: [Function],
        orWhereRaw: [Function],
        whereExists: [Function],
        orWhereExists: [Function],
        whereNotExists: [Function],
        orWhereNotExists: [Function],
        whereIn: [Function],
        orWhereIn: [Function],
        whereNotIn: [Function],
        orWhereNotIn: [Function],
        whereNull: [Function],
        orWhereNull: [Function],
        whereNotNull: [Function],
        orWhereNotNull: [Function],
        whereBetween: [Function],
        whereNotBetween: [Function],
        andWhereBetween: [Function],
        andWhereNotBetween: [Function],
        orWhereBetween: [Function],
        orWhereNotBetween: [Function],
        groupBy: [Function],
        groupByRaw: [Function],
        orderBy: [Function],
        orderByRaw: [Function],
        union: [Function],
        unionAll: [Function],
        having: [Function],
        havingRaw: [Function],
        orHaving: [Function],
        orHavingRaw: [Function],
        offset: [Function],
        limit: [Function],
        count: [Function],
        countDistinct: [Function],
        min: [Function],
        max: [Function],
        sum: [Function],
        sumDistinct: [Function],
        avg: [Function],
        avgDistinct: [Function],
        increment: [Function],
        decrement: [Function],
        first: [Function],
        debug: [Function],
        pluck: [Function],
        insert: [Function],
        update: [Function],
        returning: [Function],
        del: [Function],
        delete: [Function],
        truncate: [Function],
        transacting: [Function],
        connection: [Function],
        client: [Object] },
     ready:
      Promise {
        _bitField: 33554432,
        _fulfillmentHandler0: [Function],
        _rejectionHandler0: null,
        _promise0: undefined,
        _receiver0: undefined },
     generate: [Function],
     _clearer:
      { _called: false,
        _idleTimeout: 60000,
        _idlePrev: null,
        _idleNext: null,
        _idleStart: 726,
        _onTimeout: [Function: wrapper],
        _repeat: [Function],
        _handle: [Object] } },
  sessionID: 'ruYwpOFKWslvc0wrggmlhJsE6cYuvuP2',
  session:
   Session {
     cookie:
      { path: '/',
        _expires: null,
        originalMaxAge: null,
        httpOnly: true },
     returnTo: '/',
     flash: {},
     passport: { user: [Object] } },
  flash: [Function: _flash],
  _passport:
   { instance:
      Authenticator {
        _key: 'passport',
        _strategies: [Object],
        _serializers: [Object],
        _deserializers: [Object],
        _infoTransformers: [],
        _framework: [Object],
        _userProperty: 'user',
        Authenticator: [Function: Authenticator],
        Passport: [Function: Authenticator],
        Strategy: [Object],
        strategies: [Object] },
     session: { user: [Object] } },
  user:
   { id: 2,
     username: 'haha',
     hash: '$2a$10$fXx8OHWhTcfPLn8txjXcxeQIKkcujFVrvVIBpXRbRyEmx1Df67ftq' },
  route:
   Route {
     path: '/',
     stack: [ [Object], [Object] ],
     methods: { get: true } } }
