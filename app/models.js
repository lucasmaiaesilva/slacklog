const LogModel = {
  token: String,
  team_id: String,
  api_app_id: String,
  event: {
    type: String,
    user: {
      id: String,
      team_id: String,
      name: String,
      deleted: false,
      color: String,
      real_name: String,
      tz: String,
      tz_label: String,
      tz_offset: Number,
      profile: Object,
      is_admin: Boolean,
      is_owner: Boolean,
      is_primary_owner: Boolean,
      is_restricted: Boolean,
      is_ultra_restricted: Boolean,
      is_bot: Boolean,
      is_app_user: Boolean,
      updated: Number,
      presence: String
    },
    cache_ts: Number,
    event_ts: String
  },
  type: String,
  event_id: String,
  event_time: Number,
  authed_users: Array
}

module.exports = {
  LogModel  
}; 
