export type modalFlag = { 
    isMounted: boolean,
    isMember: number | undefined,
    checkMember: () => Promise<void>

}