/**
 * API Facet to make calls to methods in the team namespace.
 *
 * This provides functions to call:
 *   - accessLogs: {@link https://api.slack.com/methods/team.accessLogs|team.accessLogs}
 *   - billableInfo: {@link https://api.slack.com/methods/team.billableInfo|team.billableInfo}
 *   - info: {@link https://api.slack.com/methods/team.info|team.info}
 *   - integrationLogs: {@link https://api.slack.com/methods/team.integrationLogs|team.integrationLogs}
 *
 */

/**
 * @constructor
 */
function TeamFacet(makeAPICall) {
  this.name = 'team';
  this.makeAPICall = makeAPICall;
}


/**
 * Gets the access logs for the current team.
 * @see {@link https://api.slack.com/methods/team.accessLogs|team.accessLogs}
 *
 * @param {Object=} opts


 * @param {function=} optCb Optional callback, if not using promises.
 */
TeamFacet.prototype.accessLogs = function accessLogs(opts, optCb) {
  return this.makeAPICall('team.accessLogs', null, opts, optCb);
};


/**
 * Gets billable users information for the current team.
 * @see {@link https://api.slack.com/methods/team.billableInfo|team.billableInfo}
 *
 * @param {Object=} opts
 * @param {?} opts.user - A user to retrieve the billable information for. Defaults to all users.
 * @param {function=} optCb Optional callback, if not using promises.
 */
TeamFacet.prototype.billableInfo = function billableInfo(opts, optCb) {
  return this.makeAPICall('team.billableInfo', null, opts, optCb);
};


/**
 * Gets information about the current team.
 * @see {@link https://api.slack.com/methods/team.info|team.info}
 *
 * @param {function=} optCb Optional callback, if not using promises.
 */
TeamFacet.prototype.info = function info(optCb) {
  return this.makeAPICall('team.info', null, null, optCb);
};


/**
 * Gets the integration logs for the current team.
 * @see {@link https://api.slack.com/methods/team.integrationLogs|team.integrationLogs}
 *
 * @param {Object=} opts
 * @param {?} opts.service_id - Filter logs to this service. Defaults to all logs.
 * @param {?} opts.app_id - Filter logs to this Slack app. Defaults to all logs.
 * @param {?} opts.user - Filter logs generated by this user’s actions. Defaults to all logs.
 * @param {?} opts.change_type - Filter logs with this change type. Defaults to all logs.


 * @param {function=} optCb Optional callback, if not using promises.
 */
TeamFacet.prototype.integrationLogs = function integrationLogs(opts, optCb) {
  return this.makeAPICall('team.integrationLogs', null, opts, optCb);
};


module.exports = TeamFacet;
