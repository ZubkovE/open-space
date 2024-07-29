export interface User {
    telegramId: number | undefined,
    telegramUserName: string,
    coinBalance: number,
    level: number,
    levelStart: number,
    levelTarget: number,
    memberStatus: string,
    invitedFriends: number,
    planetURL: string
}
