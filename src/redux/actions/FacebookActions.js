import { ADD_COMMENT } from "../types/FacebookTypes";

export const commentAction = (userComment) => ({
  type: ADD_COMMENT,
  userComment
})
