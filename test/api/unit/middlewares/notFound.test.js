import notFound from '../../../../website/server/middlewares/notFound';

describe.only('notFound Middleware testing', () => {
  let req, res, next;

  beforeEach(() => {
    req = generateReq();
    res = generateRes();
    next = generateNext();
  });

  it.only('sets if has an existing route', () => {
    notFound(req, res, next);
    expect(res.set).to.have.been.calledWith({
      'api': '/api',
      'amazon':'/amazon',
      'iap': '/iap',
      'paypal': '/paypal',
      'stripe': '/stripe',
      'export': '/export',
      'email': '/email',
    });
  });

  it.only('responds immediately if method is GET', () => {
    req.method = 'GET';
    cors(req, res, next);
    expect(res.set).to.have.been.calledWith({
      'method': 'GET'
    });
  });
});