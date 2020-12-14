const getUserId = state => state.user.id;

const getUserAvatar = state => state.user.avatar;
const getUserHeight = state => state.user.height;
const getUserWeight = state => state.user.weight;
const getUserBirthdate = state => state.user.birthdate;
export default {
  getUserId,
  getUserAvatar,
  getUserHeight,
  getUserWeight,
  getUserBirthdate,
};
