import axios from "axios";
const URL = "http://localhost:3001"
const Flags = {
    sent: "isSent",
    inbox: "isRecieved",
    favorite: "isFavorite",
    deleted: "isDeleted",
    draft: "isDraft",
    read: "isRead",
    notRead: { "isRead": false },
}
const testConnection = async () => {
    axios.get(URL + "/user/email").then(data => { console.log(data) })
}
const getEmails = async (emailType) => {
    const flags = [Flags[emailType]]
    console.log(1111,flags);
    const data = await axios.post(URL + "/userchats/getchats", {flags})

    return data.data
}
export { testConnection, getEmails }