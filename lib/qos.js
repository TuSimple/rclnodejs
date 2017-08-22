// Copyright (c) 2017 Intel Corporation. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/* eslint-disable */

/**
 * Enum for HistoryPolicy
 * @readonly
 * @enum {number}
 */
let HistoryPolicy = {
  /** @member {number} */
  RMW_QOS_POLICY_HISTORY_SYSTEM_DEFAULT: 0,
  /** @member {number} */
  RMW_QOS_POLICY_HISTORY_KEEP_LAST: 1,
  /** @member {number} */
  RMW_QOS_POLICY_HISTORY_KEEP_ALL: 2};

/**
 * Enum for ReliabilityPolicy
 * @readonly
 * @enum {number}
 */
let ReliabilityPolicy = {
  /** @member {number} */
  RMW_QOS_POLICY_RELIABILITY_SYSTEM_DEFAULT: 0,
  /** @member {number} */
  RMW_QOS_POLICY_RELIABILITY_RELIABLE: 1,
  /** @member {number} */
  RMW_QOS_POLICY_RELIABILITY_BEST_EFFORT: 2};

/**
 * Enum for DurabilityPolicy
 * @readonly
 * @enum {number}
 */
let DurabilityPolicy = {
  /** @member {number} */
  RMW_QOS_POLICY_DURABILITY_SYSTEM_DEFAULT: 0,
  /** @member {number} */
  RMW_QOS_POLICY_DURABILITY_TRANSIENT_LOCAL: 1,
  /** @member {number} */
  RMW_QOS_POLICY_DURABILITY_VOLATILE: 2};

/** Class representing middleware quality of service */
class QoS {
  constructor() {
    this._history = undefined;
    this._depth = undefined;
    this._reliability = undefined;
    this._durability = undefined;
    this._avoidRosNameSpaceConventions = undefined;
  }

  /**
   * Get HistoryPolicy enum.
   * @name QoS#get:HistoryPolicy
   * @function
   * @return {HistoryPolicy}
   */
  static get HistoryPolicy() {
    return HistoryPolicy;
  }

  /**
   * Get ReliabilityPolicy enum.
   * @name QoS#get:ReliabilityPolicy
   * @function
   * @return {ReliabilityPolicy}
   */
  static get ReliabilityPolicy() {
    return ReliabilityPolicy;
  }

  /**
   * Get DurabilityPolicy enum.
   * @name QoS#get:DurabilityPolicy
   * @function
   * @return {DurabilityPolicy}
   */
  static get DurabilityPolicy() {
    return DurabilityPolicy;
  }

  /**
   * Get the history value.
   * @name QoS#get:history
   * @function
   * @return {number}
   */
  get history() {
    return this._history;
  }

  /**
   * Set the history value.
   * @param {number} history - value to be set.
   * @name QoS#set:history
   * @function
   * @return {undefined}
   */
  set history(history) {
    this._history = history;
  }

  /**
   * Get the depth value.
   * @name QoS#get:depth
   * @function
   * @return {number}
   */
  get depth() {
    return this._depth;
  }

  /**
   * Set the depth value.
   * @param {number} depth - value to be set.
   * @name QoS#set:depth
   * @function
   * @return {undefined}
   */
  set depth(depth) {
    this._depth = depth;
  }

  /**
   * Get the reliability value.
   * @name QoS#get:reliability
   * @function
   * @return {number}
   */
  get reliability() {
    return this._reliability;
  }

  /**
   * Set the reliability value.
   * @param {number} reliability - value to be set.
   * @name QoS#set:reliability
   * @function
   * @return {undefined}
   */
  set reliability(reliability) {
    this._reliability = reliability;
  }

  /**
   * Get the durability value.
   * @name QoS#get:durability
   * @function
   * @return {number}
   */
  get durability() {
    return this._durability;
  }

  /**
   * Set the durability value.
   * @param {number} durability - value to be set.
   * @name QoS#set:durability
   * @function
   * @return {undefined}
   */
  set durability(durability) {
    this._durability = durability;
  }

  /**
   * Get the avoidRosNameSpaceConventions value.
   * @name QoS#get:avoidRosNameSpaceConventions
   * @function
   * @return {boolean}
   */
  get avoidRosNameSpaceConventions() {
    return this._avoidRosNameSpaceConventions;
  }

  /**
   * Set the avoidRosNameSpaceConventions value.
   * @param {boolean} avoidRosNameSpaceConventions - value to be set.
   * @name QoS#set:avoidRosNameSpaceConventions
   * @function
   * @return {undefined}
   */
  set avoidRosNameSpaceConventions(avoidRosNameSpaceConventions) {
    this._avoidRosNameSpaceConventions = avoidRosNameSpaceConventions;
  }

  /**
   * Get default profile.
   * @name QoS#get:profileDefault
   * @function
   * @return {string}
   */
  static get profileDefault() {
    return 'qos_profile_default';
  }

  /**
   * Get default system profile.
   * @name QoS#get:profileSystemDefault
   * @function
   * @return {string}
   */
  static get profileSystemDefault() {
    return 'qos_profile_system_default';
  }

  /**
   * Get sensor data profile.
   * @name QoS#get:profileSensorData
   * @function
   * @return {string}
   */
  static get profileSensorData() {
    return 'qos_profile_sensor_data';
  }

  /**
   * Get default services profile.
   * @name QoS#get:profileServicesDefault
   * @function
   * @return {string}
   */
  static get profileServicesDefault() {
    return 'qos_profile_services_default';
  }

  /**
   * Get parameters profile.
   * @name QoS#get:profileParameters
   * @function
   * @return {string}
   */
  static get profileParameters() {
    return 'qos_profile_parameters';
  }

  /**
   * Get parameter events profile.
   * @name QoS#get:profileParameterEvents
   * @function
   * @return {string}
   */
  static get profileParameterEvents() {
    return 'qos_profile_parameter_events';
  }
}

module.exports = QoS;