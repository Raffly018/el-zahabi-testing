// Middleware autentikasi sederhana
module.exports = (req, res, next) => {
  const auth = req.headers.authorization;
  
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Token tidak valid',
    });
  }
  
  const token = auth.slice(7);
  
  // Validasi token (simplified)
  if (!token || token.length < 10) {
    return res.status(401).json({
      success: false,
      message: 'Token tidak valid',
    });
  }
  
  // Attach user info ke request
  req.user = {
    id: 'user_from_token',
    token,
  };
  
  next();
};
