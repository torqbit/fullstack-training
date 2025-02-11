class TalkStore {
    constructor(accountWithTalks) {
      if (accountWithTalks && accountWithTalks.size > 0) {
        for (const [account, talks] of accountWithTalks) {
          if (Array.isArray(talks) && talks.length > 0) {
            localStorage.setItem(`talks-${account}`, JSON.stringify(talks));
          }
        }
      }
    }
    addTalk(account, talk) {
      if(localStorage.getItem(`talks-${account}`) == null){
        localStorage.setItem(`talks-${account}`,JSON.stringify(talk))
      } 
      else {
        const talksString= localStorage.getItem(`talks-${account}`)
        const talksArray= JSON.parse(talksString)
        talksArray.push(talk)
        localStorage.setItem(`talks-${account}`,JSON.stringify(talksArray))
      }
    }
    getTalks(account) {
      const TalksString=localStorage.getItem(`talks-${account}`)
      const TalksArray=JSON.parse(TalksString)
      return TalksArray
    }
    deleteTalks(account){
      localStorage.removeItem(`talks-${account}`)
    }
}
export default TalkStore;
  