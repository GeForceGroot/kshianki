// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import pincodes from '../../'

export default function handler(req, res) {
  // let pincodes = 
    res.status(200).json({
        "305901": ["Beawar", "Rajasthan"],
        "302022": ["Jaipur", "Rajasthan"],
        "500055": ["Hydrabad", "Telangana"]
      })
  }
  