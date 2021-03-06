// what is the minimal representation of our app state via a javascript object

{
    users: {
        isAuthed,
        isFetching,
        error,
        authedId
        [uid] : {
            lastUpdated
            info: {
                name
                uid
                avatar
            }
        }
    },

    modal: {
        duck,
        isOpen,
    }

    ducks: {
        isFetching,
        error,
        [duckId] : {
            lastUpdated
            info: {
                avatar
                duckId
                name
                text
                timeStamp
                uid
            }
        }
    },

    usersDucks: {
        isFetching,
        error,
        [uid] : {
            lastUpdated
            duckIds: [duckId, duckId, duckId]
        }
    }

    likeCount: {
        [duckId]: 0
    },

    usersLikes: {
        [duckId]: true
    },

    replies: {
        isFetching,
        error,
        [duckId]: {
            lastUpdated,
            replies : {
                [replyId] : {
                    name
                    reply
                    uid
                    timeStamp
                    avatar
                    replyId
                }
            }
        }
    },

    listeners: {
        [listenerId]: true
    },

    feed: {
        isFetching,
        error,
        newDucksAvailable,
        duckIdsToAdd: [duckId, duckId],
        duckIds: [duckId, duckId]
    }

}
