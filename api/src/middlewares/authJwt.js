import jwt from 'jsonwebtoken'
import User from '../models/User'

export const verifyToken  = async (req, res, next) => {
       try {
                const token = req.headers["x-acces-token"];
        
        if(!token) return res.status(403).json({message: "no token provided"})

        const decoded = jwt.verify(token, 'auth/api')
        req.userID = decoded.id;

        const user = await User.findById(req.userId, {password: 0})
        if(!user) return res.status(404).json({message: "no user found"})
        
        next()
       } catch (error) {
              return res.status(401).json({message: 'unauthorized'}) 
       }
}