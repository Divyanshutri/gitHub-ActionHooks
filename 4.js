   
 const getFederationSocietyDetails =   async id => {
    return await MONGO_MODEL.mongoFindOne('societies', { id }, { projection: { image: 1, societyName: '$name', isOnboarded: 1, propertyType: 1, accessConfig: 1, developerId: 1, logo: 1, isMemberAdditionRestricted: 1, preApprovalDays : 1 } })
  }