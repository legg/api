// source: vega.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_mwitkow_go$proto$validators_validator_pb = require('./github.com/mwitkow/go-proto-validators/validator_pb.js');
goog.object.extend(proto, github_com_mwitkow_go$proto$validators_validator_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var markets_pb = require('./markets_pb.js');
goog.object.extend(proto, markets_pb);
goog.exportSymbol('proto.vega.Account', null, global);
goog.exportSymbol('proto.vega.AccountType', null, global);
goog.exportSymbol('proto.vega.AuctionIndicativeState', null, global);
goog.exportSymbol('proto.vega.AuctionTrigger', null, global);
goog.exportSymbol('proto.vega.Candle', null, global);
goog.exportSymbol('proto.vega.ChainStatus', null, global);
goog.exportSymbol('proto.vega.Deposit', null, global);
goog.exportSymbol('proto.vega.Deposit.Status', null, global);
goog.exportSymbol('proto.vega.Erc20WithdrawExt', null, global);
goog.exportSymbol('proto.vega.ErrorDetail', null, global);
goog.exportSymbol('proto.vega.EthereumConfig', null, global);
goog.exportSymbol('proto.vega.Fee', null, global);
goog.exportSymbol('proto.vega.FinancialAmount', null, global);
goog.exportSymbol('proto.vega.Interval', null, global);
goog.exportSymbol('proto.vega.LedgerEntry', null, global);
goog.exportSymbol('proto.vega.LiquidityOrder', null, global);
goog.exportSymbol('proto.vega.LiquidityOrderReference', null, global);
goog.exportSymbol('proto.vega.LiquidityProvision', null, global);
goog.exportSymbol('proto.vega.LiquidityProvision.Status', null, global);
goog.exportSymbol('proto.vega.LiquidityProvisionSubmission', null, global);
goog.exportSymbol('proto.vega.MarginLevels', null, global);
goog.exportSymbol('proto.vega.MarketData', null, global);
goog.exportSymbol('proto.vega.MarketDepth', null, global);
goog.exportSymbol('proto.vega.MarketDepthUpdate', null, global);
goog.exportSymbol('proto.vega.NetworkParameter', null, global);
goog.exportSymbol('proto.vega.NodeRegistration', null, global);
goog.exportSymbol('proto.vega.NodeSignature', null, global);
goog.exportSymbol('proto.vega.NodeSignatureKind', null, global);
goog.exportSymbol('proto.vega.NodeVote', null, global);
goog.exportSymbol('proto.vega.Order', null, global);
goog.exportSymbol('proto.vega.Order.Status', null, global);
goog.exportSymbol('proto.vega.Order.TimeInForce', null, global);
goog.exportSymbol('proto.vega.Order.Type', null, global);
goog.exportSymbol('proto.vega.OrderAmendment', null, global);
goog.exportSymbol('proto.vega.OrderCancellation', null, global);
goog.exportSymbol('proto.vega.OrderCancellationConfirmation', null, global);
goog.exportSymbol('proto.vega.OrderConfirmation', null, global);
goog.exportSymbol('proto.vega.OrderError', null, global);
goog.exportSymbol('proto.vega.OrderSubmission', null, global);
goog.exportSymbol('proto.vega.Party', null, global);
goog.exportSymbol('proto.vega.PeggedOrder', null, global);
goog.exportSymbol('proto.vega.PeggedReference', null, global);
goog.exportSymbol('proto.vega.Position', null, global);
goog.exportSymbol('proto.vega.PositionTrade', null, global);
goog.exportSymbol('proto.vega.Price', null, global);
goog.exportSymbol('proto.vega.PriceLevel', null, global);
goog.exportSymbol('proto.vega.PriceMonitoringBounds', null, global);
goog.exportSymbol('proto.vega.RiskFactor', null, global);
goog.exportSymbol('proto.vega.RiskResult', null, global);
goog.exportSymbol('proto.vega.Side', null, global);
goog.exportSymbol('proto.vega.Signature', null, global);
goog.exportSymbol('proto.vega.SignedBundle', null, global);
goog.exportSymbol('proto.vega.Statistics', null, global);
goog.exportSymbol('proto.vega.Timestamp', null, global);
goog.exportSymbol('proto.vega.Trade', null, global);
goog.exportSymbol('proto.vega.Trade.Type', null, global);
goog.exportSymbol('proto.vega.TradeSet', null, global);
goog.exportSymbol('proto.vega.Transaction', null, global);
goog.exportSymbol('proto.vega.Transaction.FromCase', null, global);
goog.exportSymbol('proto.vega.Transfer', null, global);
goog.exportSymbol('proto.vega.TransferBalance', null, global);
goog.exportSymbol('proto.vega.TransferRequest', null, global);
goog.exportSymbol('proto.vega.TransferResponse', null, global);
goog.exportSymbol('proto.vega.TransferType', null, global);
goog.exportSymbol('proto.vega.WithdrawExt', null, global);
goog.exportSymbol('proto.vega.WithdrawExt.ExtCase', null, global);
goog.exportSymbol('proto.vega.WithdrawSubmission', null, global);
goog.exportSymbol('proto.vega.Withdrawal', null, global);
goog.exportSymbol('proto.vega.Withdrawal.Status', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Price = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Price, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Price.displayName = 'proto.vega.Price';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Timestamp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Timestamp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Timestamp.displayName = 'proto.vega.Timestamp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Party = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Party, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Party.displayName = 'proto.vega.Party';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RiskFactor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RiskFactor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RiskFactor.displayName = 'proto.vega.RiskFactor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.RiskResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.RiskResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.RiskResult.displayName = 'proto.vega.RiskResult';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PeggedOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PeggedOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PeggedOrder.displayName = 'proto.vega.PeggedOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Order.displayName = 'proto.vega.Order';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderCancellationConfirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.OrderCancellationConfirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderCancellationConfirmation.displayName = 'proto.vega.OrderCancellationConfirmation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderConfirmation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.OrderConfirmation.repeatedFields_, null);
};
goog.inherits(proto.vega.OrderConfirmation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderConfirmation.displayName = 'proto.vega.OrderConfirmation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.AuctionIndicativeState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.AuctionIndicativeState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.AuctionIndicativeState.displayName = 'proto.vega.AuctionIndicativeState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Trade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Trade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Trade.displayName = 'proto.vega.Trade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Fee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Fee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Fee.displayName = 'proto.vega.Fee';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TradeSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.TradeSet.repeatedFields_, null);
};
goog.inherits(proto.vega.TradeSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TradeSet.displayName = 'proto.vega.TradeSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Candle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Candle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Candle.displayName = 'proto.vega.Candle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PriceLevel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PriceLevel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PriceLevel.displayName = 'proto.vega.PriceLevel';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketDepth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketDepth.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketDepth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketDepth.displayName = 'proto.vega.MarketDepth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketDepthUpdate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketDepthUpdate.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketDepthUpdate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketDepthUpdate.displayName = 'proto.vega.MarketDepthUpdate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Position.displayName = 'proto.vega.Position';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PositionTrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PositionTrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PositionTrade.displayName = 'proto.vega.PositionTrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Statistics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Statistics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Statistics.displayName = 'proto.vega.Statistics';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Deposit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Deposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Deposit.displayName = 'proto.vega.Deposit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Withdrawal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Withdrawal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Withdrawal.displayName = 'proto.vega.Withdrawal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.WithdrawSubmission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.WithdrawSubmission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.WithdrawSubmission.displayName = 'proto.vega.WithdrawSubmission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.WithdrawExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vega.WithdrawExt.oneofGroups_);
};
goog.inherits(proto.vega.WithdrawExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.WithdrawExt.displayName = 'proto.vega.WithdrawExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Erc20WithdrawExt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Erc20WithdrawExt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Erc20WithdrawExt.displayName = 'proto.vega.Erc20WithdrawExt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderAmendment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.OrderAmendment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderAmendment.displayName = 'proto.vega.OrderAmendment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderSubmission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.OrderSubmission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderSubmission.displayName = 'proto.vega.OrderSubmission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.OrderCancellation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.OrderCancellation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.OrderCancellation.displayName = 'proto.vega.OrderCancellation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NodeRegistration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NodeRegistration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NodeRegistration.displayName = 'proto.vega.NodeRegistration';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NodeVote = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NodeVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NodeVote.displayName = 'proto.vega.NodeVote';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Account.displayName = 'proto.vega.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.FinancialAmount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.FinancialAmount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.FinancialAmount.displayName = 'proto.vega.FinancialAmount';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Transfer.displayName = 'proto.vega.Transfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TransferRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.TransferRequest.repeatedFields_, null);
};
goog.inherits(proto.vega.TransferRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TransferRequest.displayName = 'proto.vega.TransferRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LedgerEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LedgerEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LedgerEntry.displayName = 'proto.vega.LedgerEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TransferBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.TransferBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TransferBalance.displayName = 'proto.vega.TransferBalance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.TransferResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.TransferResponse.repeatedFields_, null);
};
goog.inherits(proto.vega.TransferResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.TransferResponse.displayName = 'proto.vega.TransferResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarginLevels = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.MarginLevels, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarginLevels.displayName = 'proto.vega.MarginLevels';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.MarketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.MarketData.repeatedFields_, null);
};
goog.inherits(proto.vega.MarketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.MarketData.displayName = 'proto.vega.MarketData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.PriceMonitoringBounds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.PriceMonitoringBounds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.PriceMonitoringBounds.displayName = 'proto.vega.PriceMonitoringBounds';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.ErrorDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.ErrorDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.ErrorDetail.displayName = 'proto.vega.ErrorDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, proto.vega.Transaction.oneofGroups_);
};
goog.inherits(proto.vega.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Transaction.displayName = 'proto.vega.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.Signature.displayName = 'proto.vega.Signature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.SignedBundle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.SignedBundle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.SignedBundle.displayName = 'proto.vega.SignedBundle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NodeSignature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NodeSignature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NodeSignature.displayName = 'proto.vega.NodeSignature';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.NetworkParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.NetworkParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.NetworkParameter.displayName = 'proto.vega.NetworkParameter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LiquidityOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityOrder.displayName = 'proto.vega.LiquidityOrder';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityProvisionSubmission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.LiquidityProvisionSubmission.repeatedFields_, null);
};
goog.inherits(proto.vega.LiquidityProvisionSubmission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityProvisionSubmission.displayName = 'proto.vega.LiquidityProvisionSubmission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityOrderReference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.LiquidityOrderReference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityOrderReference.displayName = 'proto.vega.LiquidityOrderReference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.LiquidityProvision = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vega.LiquidityProvision.repeatedFields_, null);
};
goog.inherits(proto.vega.LiquidityProvision, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.LiquidityProvision.displayName = 'proto.vega.LiquidityProvision';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vega.EthereumConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vega.EthereumConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vega.EthereumConfig.displayName = 'proto.vega.EthereumConfig';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Price.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Price.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Price} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Price.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Price}
 */
proto.vega.Price.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Price;
  return proto.vega.Price.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Price} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Price}
 */
proto.vega.Price.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Price.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Price.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Price} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Price.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 value = 1;
 * @return {number}
 */
proto.vega.Price.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Price} returns this
 */
proto.vega.Price.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Timestamp.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Timestamp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Timestamp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Timestamp.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Timestamp}
 */
proto.vega.Timestamp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Timestamp;
  return proto.vega.Timestamp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Timestamp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Timestamp}
 */
proto.vega.Timestamp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Timestamp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Timestamp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Timestamp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Timestamp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 value = 1;
 * @return {number}
 */
proto.vega.Timestamp.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Timestamp} returns this
 */
proto.vega.Timestamp.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Party.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Party.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Party} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Party.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Party}
 */
proto.vega.Party.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Party;
  return proto.vega.Party.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Party} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Party}
 */
proto.vega.Party.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Party.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Party.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Party} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Party.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Party.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Party} returns this
 */
proto.vega.Party.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RiskFactor.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RiskFactor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RiskFactor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskFactor.toObject = function(includeInstance, msg) {
  var f, obj = {
    market: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pb_short: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    pb_long: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RiskFactor}
 */
proto.vega.RiskFactor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RiskFactor;
  return proto.vega.RiskFactor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RiskFactor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RiskFactor}
 */
proto.vega.RiskFactor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setShort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLong(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RiskFactor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RiskFactor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RiskFactor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskFactor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShort();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLong();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional string market = 1;
 * @return {string}
 */
proto.vega.RiskFactor.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional double short = 2;
 * @return {number}
 */
proto.vega.RiskFactor.prototype.getShort = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setShort = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double long = 3;
 * @return {number}
 */
proto.vega.RiskFactor.prototype.getLong = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vega.RiskFactor} returns this
 */
proto.vega.RiskFactor.prototype.setLong = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.RiskResult.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.RiskResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.RiskResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    updatedtimestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    riskfactorsMap: (f = msg.getRiskfactorsMap()) ? f.toObject(includeInstance, proto.vega.RiskFactor.toObject) : [],
    nextupdatetimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    predictednextriskfactorsMap: (f = msg.getPredictednextriskfactorsMap()) ? f.toObject(includeInstance, proto.vega.RiskFactor.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.RiskResult}
 */
proto.vega.RiskResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.RiskResult;
  return proto.vega.RiskResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.RiskResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.RiskResult}
 */
proto.vega.RiskResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedtimestamp(value);
      break;
    case 2:
      var value = msg.getRiskfactorsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.vega.RiskFactor.deserializeBinaryFromReader, "", new proto.vega.RiskFactor());
         });
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextupdatetimestamp(value);
      break;
    case 4:
      var value = msg.getPredictednextriskfactorsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.vega.RiskFactor.deserializeBinaryFromReader, "", new proto.vega.RiskFactor());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.RiskResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.RiskResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.RiskResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.RiskResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUpdatedtimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRiskfactorsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.vega.RiskFactor.serializeBinaryToWriter);
  }
  f = message.getNextupdatetimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPredictednextriskfactorsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.vega.RiskFactor.serializeBinaryToWriter);
  }
};


/**
 * optional int64 updatedTimestamp = 1;
 * @return {number}
 */
proto.vega.RiskResult.prototype.getUpdatedtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.RiskResult} returns this
 */
proto.vega.RiskResult.prototype.setUpdatedtimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, RiskFactor> riskFactors = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.vega.RiskFactor>}
 */
proto.vega.RiskResult.prototype.getRiskfactorsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.vega.RiskFactor>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.vega.RiskFactor));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.vega.RiskResult} returns this
 */
proto.vega.RiskResult.prototype.clearRiskfactorsMap = function() {
  this.getRiskfactorsMap().clear();
  return this;};


/**
 * optional int64 nextUpdateTimestamp = 3;
 * @return {number}
 */
proto.vega.RiskResult.prototype.getNextupdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.RiskResult} returns this
 */
proto.vega.RiskResult.prototype.setNextupdatetimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * map<string, RiskFactor> predictedNextRiskFactors = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.vega.RiskFactor>}
 */
proto.vega.RiskResult.prototype.getPredictednextriskfactorsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.vega.RiskFactor>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.vega.RiskFactor));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.vega.RiskResult} returns this
 */
proto.vega.RiskResult.prototype.clearPredictednextriskfactorsMap = function() {
  this.getPredictednextriskfactorsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PeggedOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PeggedOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PeggedOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PeggedOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PeggedOrder}
 */
proto.vega.PeggedOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PeggedOrder;
  return proto.vega.PeggedOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PeggedOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PeggedOrder}
 */
proto.vega.PeggedOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.PeggedReference} */ (reader.readEnum());
      msg.setReference(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PeggedOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PeggedOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PeggedOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PeggedOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional PeggedReference reference = 1;
 * @return {!proto.vega.PeggedReference}
 */
proto.vega.PeggedOrder.prototype.getReference = function() {
  return /** @type {!proto.vega.PeggedReference} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.PeggedReference} value
 * @return {!proto.vega.PeggedOrder} returns this
 */
proto.vega.PeggedOrder.prototype.setReference = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.vega.PeggedOrder.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PeggedOrder} returns this
 */
proto.vega.PeggedOrder.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    side: jspb.Message.getFieldWithDefault(msg, 4, 0),
    price: jspb.Message.getFieldWithDefault(msg, 5, 0),
    size: jspb.Message.getFieldWithDefault(msg, 6, 0),
    remaining: jspb.Message.getFieldWithDefault(msg, 7, 0),
    timeinforce: jspb.Message.getFieldWithDefault(msg, 8, 0),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdat: jspb.Message.getFieldWithDefault(msg, 10, 0),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0),
    expiresat: jspb.Message.getFieldWithDefault(msg, 12, 0),
    reference: jspb.Message.getFieldWithDefault(msg, 13, ""),
    reason: jspb.Message.getFieldWithDefault(msg, 14, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 15, 0),
    version: jspb.Message.getFieldWithDefault(msg, 16, 0),
    batchid: jspb.Message.getFieldWithDefault(msg, 17, 0),
    peggedorder: (f = msg.getPeggedorder()) && proto.vega.PeggedOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Order}
 */
proto.vega.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Order;
  return proto.vega.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Order}
 */
proto.vega.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 4:
      var value = /** @type {!proto.vega.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRemaining(value);
      break;
    case 8:
      var value = /** @type {!proto.vega.Order.TimeInForce} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 9:
      var value = /** @type {!proto.vega.Order.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.Order.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresat(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 14:
      var value = /** @type {!proto.vega.OrderError} */ (reader.readEnum());
      msg.setReason(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBatchid(value);
      break;
    case 18:
      var value = new proto.vega.PeggedOrder;
      reader.readMessage(value,proto.vega.PeggedOrder.deserializeBinaryFromReader);
      msg.setPeggedorder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getRemaining();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTimeinforce();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getExpiresat();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getReason();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getBatchid();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getPeggedorder();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.vega.PeggedOrder.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Order.TimeInForce = {
  TIF_UNSPECIFIED: 0,
  TIF_GTC: 1,
  TIF_GTT: 2,
  TIF_IOC: 3,
  TIF_FOK: 4,
  TIF_GFA: 5,
  TIF_GFN: 6
};

/**
 * @enum {number}
 */
proto.vega.Order.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_LIMIT: 1,
  TYPE_MARKET: 2,
  TYPE_NETWORK: 3
};

/**
 * @enum {number}
 */
proto.vega.Order.Status = {
  STATUS_INVALID: 0,
  STATUS_ACTIVE: 1,
  STATUS_EXPIRED: 2,
  STATUS_CANCELLED: 3,
  STATUS_STOPPED: 4,
  STATUS_FILLED: 5,
  STATUS_REJECTED: 6,
  STATUS_PARTIALLY_FILLED: 7,
  STATUS_PARKED: 8
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Order.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.vega.Order.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partyID = 3;
 * @return {string}
 */
proto.vega.Order.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Side side = 4;
 * @return {!proto.vega.Side}
 */
proto.vega.Order.prototype.getSide = function() {
  return /** @type {!proto.vega.Side} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.vega.Side} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional uint64 price = 5;
 * @return {number}
 */
proto.vega.Order.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 size = 6;
 * @return {number}
 */
proto.vega.Order.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 remaining = 7;
 * @return {number}
 */
proto.vega.Order.prototype.getRemaining = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setRemaining = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional TimeInForce timeInForce = 8;
 * @return {!proto.vega.Order.TimeInForce}
 */
proto.vega.Order.prototype.getTimeinforce = function() {
  return /** @type {!proto.vega.Order.TimeInForce} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.vega.Order.TimeInForce} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setTimeinforce = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional Type type = 9;
 * @return {!proto.vega.Order.Type}
 */
proto.vega.Order.prototype.getType = function() {
  return /** @type {!proto.vega.Order.Type} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.vega.Order.Type} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional int64 createdAt = 10;
 * @return {number}
 */
proto.vega.Order.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Status status = 11;
 * @return {!proto.vega.Order.Status}
 */
proto.vega.Order.prototype.getStatus = function() {
  return /** @type {!proto.vega.Order.Status} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.Order.Status} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional int64 expiresAt = 12;
 * @return {number}
 */
proto.vega.Order.prototype.getExpiresat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setExpiresat = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string reference = 13;
 * @return {string}
 */
proto.vega.Order.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional OrderError reason = 14;
 * @return {!proto.vega.OrderError}
 */
proto.vega.Order.prototype.getReason = function() {
  return /** @type {!proto.vega.OrderError} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.vega.OrderError} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setReason = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional int64 updatedAt = 15;
 * @return {number}
 */
proto.vega.Order.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 version = 16;
 * @return {number}
 */
proto.vega.Order.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 batchID = 17;
 * @return {number}
 */
proto.vega.Order.prototype.getBatchid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.setBatchid = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional PeggedOrder peggedOrder = 18;
 * @return {?proto.vega.PeggedOrder}
 */
proto.vega.Order.prototype.getPeggedorder = function() {
  return /** @type{?proto.vega.PeggedOrder} */ (
    jspb.Message.getWrapperField(this, proto.vega.PeggedOrder, 18));
};


/**
 * @param {?proto.vega.PeggedOrder|undefined} value
 * @return {!proto.vega.Order} returns this
*/
proto.vega.Order.prototype.setPeggedorder = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Order} returns this
 */
proto.vega.Order.prototype.clearPeggedorder = function() {
  return this.setPeggedorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Order.prototype.hasPeggedorder = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderCancellationConfirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderCancellationConfirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderCancellationConfirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellationConfirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.vega.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderCancellationConfirmation}
 */
proto.vega.OrderCancellationConfirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderCancellationConfirmation;
  return proto.vega.OrderCancellationConfirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderCancellationConfirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderCancellationConfirmation}
 */
proto.vega.OrderCancellationConfirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderCancellationConfirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderCancellationConfirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderCancellationConfirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellationConfirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.vega.OrderCancellationConfirmation.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto.vega.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.vega.OrderCancellationConfirmation} returns this
*/
proto.vega.OrderCancellationConfirmation.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderCancellationConfirmation} returns this
 */
proto.vega.OrderCancellationConfirmation.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderCancellationConfirmation.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.OrderConfirmation.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderConfirmation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderConfirmation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderConfirmation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderConfirmation.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && proto.vega.Order.toObject(includeInstance, f),
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.vega.Trade.toObject, includeInstance),
    passiveordersaffectedList: jspb.Message.toObjectList(msg.getPassiveordersaffectedList(),
    proto.vega.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderConfirmation}
 */
proto.vega.OrderConfirmation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderConfirmation;
  return proto.vega.OrderConfirmation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderConfirmation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderConfirmation}
 */
proto.vega.OrderConfirmation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 2:
      var value = new proto.vega.Trade;
      reader.readMessage(value,proto.vega.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    case 3:
      var value = new proto.vega.Order;
      reader.readMessage(value,proto.vega.Order.deserializeBinaryFromReader);
      msg.addPassiveordersaffected(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderConfirmation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderConfirmation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderConfirmation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderConfirmation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.Trade.serializeBinaryToWriter
    );
  }
  f = message.getPassiveordersaffectedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.vega.Order}
 */
proto.vega.OrderConfirmation.prototype.getOrder = function() {
  return /** @type{?proto.vega.Order} */ (
    jspb.Message.getWrapperField(this, proto.vega.Order, 1));
};


/**
 * @param {?proto.vega.Order|undefined} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderConfirmation.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Trade trades = 2;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.vega.OrderConfirmation.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Trade, 2));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.vega.OrderConfirmation.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};


/**
 * repeated Order passiveOrdersAffected = 3;
 * @return {!Array<!proto.vega.Order>}
 */
proto.vega.OrderConfirmation.prototype.getPassiveordersaffectedList = function() {
  return /** @type{!Array<!proto.vega.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Order, 3));
};


/**
 * @param {!Array<!proto.vega.Order>} value
 * @return {!proto.vega.OrderConfirmation} returns this
*/
proto.vega.OrderConfirmation.prototype.setPassiveordersaffectedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Order}
 */
proto.vega.OrderConfirmation.prototype.addPassiveordersaffected = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.OrderConfirmation} returns this
 */
proto.vega.OrderConfirmation.prototype.clearPassiveordersaffectedList = function() {
  return this.setPassiveordersaffectedList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.AuctionIndicativeState.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.AuctionIndicativeState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.AuctionIndicativeState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AuctionIndicativeState.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    indicativeprice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    indicativevolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    auctionstart: jspb.Message.getFieldWithDefault(msg, 4, 0),
    auctionend: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.AuctionIndicativeState}
 */
proto.vega.AuctionIndicativeState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.AuctionIndicativeState;
  return proto.vega.AuctionIndicativeState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.AuctionIndicativeState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.AuctionIndicativeState}
 */
proto.vega.AuctionIndicativeState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativeprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativevolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionstart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.AuctionIndicativeState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.AuctionIndicativeState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.AuctionIndicativeState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.AuctionIndicativeState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIndicativeprice();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getIndicativevolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAuctionstart();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getAuctionend();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.vega.AuctionIndicativeState.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 indicativePrice = 2;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getIndicativeprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setIndicativeprice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 indicativeVolume = 3;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getIndicativevolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setIndicativevolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 auctionStart = 4;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getAuctionstart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setAuctionstart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 auctionEnd = 5;
 * @return {number}
 */
proto.vega.AuctionIndicativeState.prototype.getAuctionend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.AuctionIndicativeState} returns this
 */
proto.vega.AuctionIndicativeState.prototype.setAuctionend = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Trade.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Trade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Trade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Trade.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    price: jspb.Message.getFieldWithDefault(msg, 3, 0),
    size: jspb.Message.getFieldWithDefault(msg, 4, 0),
    buyer: jspb.Message.getFieldWithDefault(msg, 5, ""),
    seller: jspb.Message.getFieldWithDefault(msg, 6, ""),
    aggressor: jspb.Message.getFieldWithDefault(msg, 7, 0),
    buyorder: jspb.Message.getFieldWithDefault(msg, 8, ""),
    sellorder: jspb.Message.getFieldWithDefault(msg, 9, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    type: jspb.Message.getFieldWithDefault(msg, 11, 0),
    buyerfee: (f = msg.getBuyerfee()) && proto.vega.Fee.toObject(includeInstance, f),
    sellerfee: (f = msg.getSellerfee()) && proto.vega.Fee.toObject(includeInstance, f),
    buyerauctionbatch: jspb.Message.getFieldWithDefault(msg, 14, 0),
    sellerauctionbatch: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Trade}
 */
proto.vega.Trade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Trade;
  return proto.vega.Trade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Trade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Trade}
 */
proto.vega.Trade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyer(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSeller(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.Side} */ (reader.readEnum());
      msg.setAggressor(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuyorder(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSellorder(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.Trade.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 12:
      var value = new proto.vega.Fee;
      reader.readMessage(value,proto.vega.Fee.deserializeBinaryFromReader);
      msg.setBuyerfee(value);
      break;
    case 13:
      var value = new proto.vega.Fee;
      reader.readMessage(value,proto.vega.Fee.deserializeBinaryFromReader);
      msg.setSellerfee(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBuyerauctionbatch(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSellerauctionbatch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Trade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Trade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Trade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Trade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBuyer();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSeller();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAggressor();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBuyorder();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSellorder();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getBuyerfee();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.vega.Fee.serializeBinaryToWriter
    );
  }
  f = message.getSellerfee();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.vega.Fee.serializeBinaryToWriter
    );
  }
  f = message.getBuyerauctionbatch();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getSellerauctionbatch();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Trade.Type = {
  TYPE_UNSPECIFIED: 0,
  TYPE_DEFAULT: 1,
  TYPE_NETWORK_CLOSE_OUT_GOOD: 2,
  TYPE_NETWORK_CLOSE_OUT_BAD: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Trade.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.vega.Trade.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 price = 3;
 * @return {number}
 */
proto.vega.Trade.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 size = 4;
 * @return {number}
 */
proto.vega.Trade.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string buyer = 5;
 * @return {string}
 */
proto.vega.Trade.prototype.getBuyer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyer = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string seller = 6;
 * @return {string}
 */
proto.vega.Trade.prototype.getSeller = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSeller = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Side aggressor = 7;
 * @return {!proto.vega.Side}
 */
proto.vega.Trade.prototype.getAggressor = function() {
  return /** @type {!proto.vega.Side} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.Side} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setAggressor = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string buyOrder = 8;
 * @return {string}
 */
proto.vega.Trade.prototype.getBuyorder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyorder = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string sellOrder = 9;
 * @return {string}
 */
proto.vega.Trade.prototype.getSellorder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSellorder = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 timestamp = 10;
 * @return {number}
 */
proto.vega.Trade.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Type type = 11;
 * @return {!proto.vega.Trade.Type}
 */
proto.vega.Trade.prototype.getType = function() {
  return /** @type {!proto.vega.Trade.Type} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.Trade.Type} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional Fee buyerFee = 12;
 * @return {?proto.vega.Fee}
 */
proto.vega.Trade.prototype.getBuyerfee = function() {
  return /** @type{?proto.vega.Fee} */ (
    jspb.Message.getWrapperField(this, proto.vega.Fee, 12));
};


/**
 * @param {?proto.vega.Fee|undefined} value
 * @return {!proto.vega.Trade} returns this
*/
proto.vega.Trade.prototype.setBuyerfee = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.clearBuyerfee = function() {
  return this.setBuyerfee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Trade.prototype.hasBuyerfee = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Fee sellerFee = 13;
 * @return {?proto.vega.Fee}
 */
proto.vega.Trade.prototype.getSellerfee = function() {
  return /** @type{?proto.vega.Fee} */ (
    jspb.Message.getWrapperField(this, proto.vega.Fee, 13));
};


/**
 * @param {?proto.vega.Fee|undefined} value
 * @return {!proto.vega.Trade} returns this
*/
proto.vega.Trade.prototype.setSellerfee = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.clearSellerfee = function() {
  return this.setSellerfee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Trade.prototype.hasSellerfee = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint64 buyerAuctionBatch = 14;
 * @return {number}
 */
proto.vega.Trade.prototype.getBuyerauctionbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setBuyerauctionbatch = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 sellerAuctionBatch = 15;
 * @return {number}
 */
proto.vega.Trade.prototype.getSellerauctionbatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Trade} returns this
 */
proto.vega.Trade.prototype.setSellerauctionbatch = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Fee.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Fee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Fee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Fee.toObject = function(includeInstance, msg) {
  var f, obj = {
    makerfee: jspb.Message.getFieldWithDefault(msg, 1, 0),
    infrastructurefee: jspb.Message.getFieldWithDefault(msg, 2, 0),
    liquidityfee: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Fee}
 */
proto.vega.Fee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Fee;
  return proto.vega.Fee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Fee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Fee}
 */
proto.vega.Fee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMakerfee(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInfrastructurefee(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLiquidityfee(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Fee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Fee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Fee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Fee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMakerfee();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getInfrastructurefee();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getLiquidityfee();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 makerFee = 1;
 * @return {number}
 */
proto.vega.Fee.prototype.getMakerfee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setMakerfee = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 infrastructureFee = 2;
 * @return {number}
 */
proto.vega.Fee.prototype.getInfrastructurefee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setInfrastructurefee = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 liquidityFee = 3;
 * @return {number}
 */
proto.vega.Fee.prototype.getLiquidityfee = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Fee} returns this
 */
proto.vega.Fee.prototype.setLiquidityfee = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.TradeSet.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TradeSet.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TradeSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TradeSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TradeSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradesList: jspb.Message.toObjectList(msg.getTradesList(),
    proto.vega.Trade.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TradeSet}
 */
proto.vega.TradeSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TradeSet;
  return proto.vega.TradeSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TradeSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TradeSet}
 */
proto.vega.TradeSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Trade;
      reader.readMessage(value,proto.vega.Trade.deserializeBinaryFromReader);
      msg.addTrades(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TradeSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TradeSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TradeSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TradeSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.Trade.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Trade trades = 1;
 * @return {!Array<!proto.vega.Trade>}
 */
proto.vega.TradeSet.prototype.getTradesList = function() {
  return /** @type{!Array<!proto.vega.Trade>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Trade, 1));
};


/**
 * @param {!Array<!proto.vega.Trade>} value
 * @return {!proto.vega.TradeSet} returns this
*/
proto.vega.TradeSet.prototype.setTradesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Trade=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Trade}
 */
proto.vega.TradeSet.prototype.addTrades = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Trade, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TradeSet} returns this
 */
proto.vega.TradeSet.prototype.clearTradesList = function() {
  return this.setTradesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Candle.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Candle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Candle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Candle.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    datetime: jspb.Message.getFieldWithDefault(msg, 2, ""),
    high: jspb.Message.getFieldWithDefault(msg, 3, 0),
    low: jspb.Message.getFieldWithDefault(msg, 4, 0),
    open: jspb.Message.getFieldWithDefault(msg, 5, 0),
    close: jspb.Message.getFieldWithDefault(msg, 6, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 7, 0),
    interval: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Candle}
 */
proto.vega.Candle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Candle;
  return proto.vega.Candle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Candle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Candle}
 */
proto.vega.Candle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatetime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHigh(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLow(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpen(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClose(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 8:
      var value = /** @type {!proto.vega.Interval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Candle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Candle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Candle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Candle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDatetime();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHigh();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getLow();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getOpen();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getClose();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.vega.Candle.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string datetime = 2;
 * @return {string}
 */
proto.vega.Candle.prototype.getDatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setDatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 high = 3;
 * @return {number}
 */
proto.vega.Candle.prototype.getHigh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setHigh = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 low = 4;
 * @return {number}
 */
proto.vega.Candle.prototype.getLow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setLow = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 open = 5;
 * @return {number}
 */
proto.vega.Candle.prototype.getOpen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setOpen = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 close = 6;
 * @return {number}
 */
proto.vega.Candle.prototype.getClose = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setClose = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 volume = 7;
 * @return {number}
 */
proto.vega.Candle.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Interval interval = 8;
 * @return {!proto.vega.Interval}
 */
proto.vega.Candle.prototype.getInterval = function() {
  return /** @type {!proto.vega.Interval} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.vega.Interval} value
 * @return {!proto.vega.Candle} returns this
 */
proto.vega.Candle.prototype.setInterval = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PriceLevel.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PriceLevel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PriceLevel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceLevel.toObject = function(includeInstance, msg) {
  var f, obj = {
    price: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numberoforders: jspb.Message.getFieldWithDefault(msg, 2, 0),
    volume: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.PriceLevel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PriceLevel;
  return proto.vega.PriceLevel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PriceLevel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.PriceLevel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumberoforders(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PriceLevel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PriceLevel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PriceLevel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceLevel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNumberoforders();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 price = 1;
 * @return {number}
 */
proto.vega.PriceLevel.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 numberOfOrders = 2;
 * @return {number}
 */
proto.vega.PriceLevel.prototype.getNumberoforders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setNumberoforders = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 volume = 3;
 * @return {number}
 */
proto.vega.PriceLevel.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceLevel} returns this
 */
proto.vega.PriceLevel.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketDepth.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketDepth.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketDepth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketDepth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepth.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sequencenumber: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketDepth}
 */
proto.vega.MarketDepth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketDepth;
  return proto.vega.MarketDepth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketDepth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketDepth}
 */
proto.vega.MarketDepth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequencenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketDepth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketDepth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketDepth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSequencenumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.vega.MarketDepth.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepth.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 2));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepth} returns this
*/
proto.vega.MarketDepth.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepth.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepth.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 3));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepth} returns this
*/
proto.vega.MarketDepth.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepth.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional uint64 sequenceNumber = 4;
 * @return {number}
 */
proto.vega.MarketDepth.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketDepth} returns this
 */
proto.vega.MarketDepth.prototype.setSequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketDepthUpdate.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketDepthUpdate.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketDepthUpdate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketDepthUpdate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepthUpdate.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    buyList: jspb.Message.toObjectList(msg.getBuyList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sellList: jspb.Message.toObjectList(msg.getSellList(),
    proto.vega.PriceLevel.toObject, includeInstance),
    sequencenumber: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketDepthUpdate}
 */
proto.vega.MarketDepthUpdate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketDepthUpdate;
  return proto.vega.MarketDepthUpdate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketDepthUpdate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketDepthUpdate}
 */
proto.vega.MarketDepthUpdate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addBuy(value);
      break;
    case 3:
      var value = new proto.vega.PriceLevel;
      reader.readMessage(value,proto.vega.PriceLevel.deserializeBinaryFromReader);
      msg.addSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequencenumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketDepthUpdate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketDepthUpdate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketDepthUpdate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketDepthUpdate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBuyList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSellList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.vega.PriceLevel.serializeBinaryToWriter
    );
  }
  f = message.getSequencenumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.vega.MarketDepthUpdate.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated PriceLevel buy = 2;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepthUpdate.prototype.getBuyList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 2));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
*/
proto.vega.MarketDepthUpdate.prototype.setBuyList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepthUpdate.prototype.addBuy = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.clearBuyList = function() {
  return this.setBuyList([]);
};


/**
 * repeated PriceLevel sell = 3;
 * @return {!Array<!proto.vega.PriceLevel>}
 */
proto.vega.MarketDepthUpdate.prototype.getSellList = function() {
  return /** @type{!Array<!proto.vega.PriceLevel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceLevel, 3));
};


/**
 * @param {!Array<!proto.vega.PriceLevel>} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
*/
proto.vega.MarketDepthUpdate.prototype.setSellList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.vega.PriceLevel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceLevel}
 */
proto.vega.MarketDepthUpdate.prototype.addSell = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.vega.PriceLevel, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.clearSellList = function() {
  return this.setSellList([]);
};


/**
 * optional uint64 sequenceNumber = 4;
 * @return {number}
 */
proto.vega.MarketDepthUpdate.prototype.getSequencenumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketDepthUpdate} returns this
 */
proto.vega.MarketDepthUpdate.prototype.setSequencenumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    openvolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    realisedpnl: jspb.Message.getFieldWithDefault(msg, 4, 0),
    unrealisedpnl: jspb.Message.getFieldWithDefault(msg, 5, 0),
    averageentryprice: jspb.Message.getFieldWithDefault(msg, 6, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Position}
 */
proto.vega.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Position;
  return proto.vega.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Position}
 */
proto.vega.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOpenvolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRealisedpnl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnrealisedpnl(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAverageentryprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOpenvolume();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRealisedpnl();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getUnrealisedpnl();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAverageentryprice();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.vega.Position.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.vega.Position.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 openVolume = 3;
 * @return {number}
 */
proto.vega.Position.prototype.getOpenvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setOpenvolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 realisedPNL = 4;
 * @return {number}
 */
proto.vega.Position.prototype.getRealisedpnl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setRealisedpnl = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 unrealisedPNL = 5;
 * @return {number}
 */
proto.vega.Position.prototype.getUnrealisedpnl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setUnrealisedpnl = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 averageEntryPrice = 6;
 * @return {number}
 */
proto.vega.Position.prototype.getAverageentryprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setAverageentryprice = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 updatedAt = 7;
 * @return {number}
 */
proto.vega.Position.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Position} returns this
 */
proto.vega.Position.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PositionTrade.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PositionTrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PositionTrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PositionTrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    volume: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PositionTrade}
 */
proto.vega.PositionTrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PositionTrade;
  return proto.vega.PositionTrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PositionTrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PositionTrade}
 */
proto.vega.PositionTrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVolume(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PositionTrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PositionTrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PositionTrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PositionTrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVolume();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional int64 volume = 1;
 * @return {number}
 */
proto.vega.PositionTrade.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PositionTrade} returns this
 */
proto.vega.PositionTrade.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 price = 2;
 * @return {number}
 */
proto.vega.PositionTrade.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PositionTrade} returns this
 */
proto.vega.PositionTrade.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Statistics.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Statistics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Statistics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Statistics.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockheight: jspb.Message.getFieldWithDefault(msg, 1, 0),
    backloglength: jspb.Message.getFieldWithDefault(msg, 2, 0),
    totalpeers: jspb.Message.getFieldWithDefault(msg, 3, 0),
    genesistime: jspb.Message.getFieldWithDefault(msg, 4, ""),
    currenttime: jspb.Message.getFieldWithDefault(msg, 5, ""),
    vegatime: jspb.Message.getFieldWithDefault(msg, 6, ""),
    status: jspb.Message.getFieldWithDefault(msg, 7, 0),
    txperblock: jspb.Message.getFieldWithDefault(msg, 8, 0),
    averagetxbytes: jspb.Message.getFieldWithDefault(msg, 9, 0),
    averageordersperblock: jspb.Message.getFieldWithDefault(msg, 10, 0),
    tradespersecond: jspb.Message.getFieldWithDefault(msg, 11, 0),
    orderspersecond: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalmarkets: jspb.Message.getFieldWithDefault(msg, 13, 0),
    totalamendorder: jspb.Message.getFieldWithDefault(msg, 16, 0),
    totalcancelorder: jspb.Message.getFieldWithDefault(msg, 17, 0),
    totalcreateorder: jspb.Message.getFieldWithDefault(msg, 18, 0),
    totalorders: jspb.Message.getFieldWithDefault(msg, 19, 0),
    totaltrades: jspb.Message.getFieldWithDefault(msg, 20, 0),
    ordersubscriptions: jspb.Message.getFieldWithDefault(msg, 21, 0),
    tradesubscriptions: jspb.Message.getFieldWithDefault(msg, 22, 0),
    candlesubscriptions: jspb.Message.getFieldWithDefault(msg, 23, 0),
    marketdepthsubscriptions: jspb.Message.getFieldWithDefault(msg, 24, 0),
    positionssubscriptions: jspb.Message.getFieldWithDefault(msg, 25, 0),
    accountsubscriptions: jspb.Message.getFieldWithDefault(msg, 26, 0),
    marketdatasubscriptions: jspb.Message.getFieldWithDefault(msg, 27, 0),
    appversionhash: jspb.Message.getFieldWithDefault(msg, 28, ""),
    appversion: jspb.Message.getFieldWithDefault(msg, 29, ""),
    chainversion: jspb.Message.getFieldWithDefault(msg, 30, ""),
    blockduration: jspb.Message.getFieldWithDefault(msg, 31, 0),
    uptime: jspb.Message.getFieldWithDefault(msg, 32, ""),
    chainid: jspb.Message.getFieldWithDefault(msg, 33, ""),
    marketdepthupdatessubscriptions: jspb.Message.getFieldWithDefault(msg, 34, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Statistics}
 */
proto.vega.Statistics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Statistics;
  return proto.vega.Statistics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Statistics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Statistics}
 */
proto.vega.Statistics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockheight(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBackloglength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalpeers(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGenesistime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrenttime(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVegatime(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.ChainStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTxperblock(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAveragetxbytes(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAverageordersperblock(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTradespersecond(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOrderspersecond(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalmarkets(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalamendorder(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalcancelorder(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalcreateorder(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalorders(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotaltrades(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrdersubscriptions(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTradesubscriptions(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCandlesubscriptions(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdepthsubscriptions(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPositionssubscriptions(value);
      break;
    case 26:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAccountsubscriptions(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdatasubscriptions(value);
      break;
    case 28:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppversionhash(value);
      break;
    case 29:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppversion(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainversion(value);
      break;
    case 31:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockduration(value);
      break;
    case 32:
      var value = /** @type {string} */ (reader.readString());
      msg.setUptime(value);
      break;
    case 33:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMarketdepthupdatessubscriptions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Statistics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Statistics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Statistics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Statistics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBackloglength();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotalpeers();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGenesistime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCurrenttime();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getVegatime();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getTxperblock();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getAveragetxbytes();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getAverageordersperblock();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getTradespersecond();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getOrderspersecond();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTotalmarkets();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getTotalamendorder();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getTotalcancelorder();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getTotalcreateorder();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getTotalorders();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getTotaltrades();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getOrdersubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getTradesubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getCandlesubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      23,
      f
    );
  }
  f = message.getMarketdepthsubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      24,
      f
    );
  }
  f = message.getPositionssubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      25,
      f
    );
  }
  f = message.getAccountsubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      26,
      f
    );
  }
  f = message.getMarketdatasubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      27,
      f
    );
  }
  f = message.getAppversionhash();
  if (f.length > 0) {
    writer.writeString(
      28,
      f
    );
  }
  f = message.getAppversion();
  if (f.length > 0) {
    writer.writeString(
      29,
      f
    );
  }
  f = message.getChainversion();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getBlockduration();
  if (f !== 0) {
    writer.writeUint64(
      31,
      f
    );
  }
  f = message.getUptime();
  if (f.length > 0) {
    writer.writeString(
      32,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      33,
      f
    );
  }
  f = message.getMarketdepthupdatessubscriptions();
  if (f !== 0) {
    writer.writeUint32(
      34,
      f
    );
  }
};


/**
 * optional uint64 blockHeight = 1;
 * @return {number}
 */
proto.vega.Statistics.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setBlockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 backlogLength = 2;
 * @return {number}
 */
proto.vega.Statistics.prototype.getBackloglength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setBackloglength = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 totalPeers = 3;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalpeers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalpeers = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string genesisTime = 4;
 * @return {string}
 */
proto.vega.Statistics.prototype.getGenesistime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setGenesistime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string currentTime = 5;
 * @return {string}
 */
proto.vega.Statistics.prototype.getCurrenttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setCurrenttime = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string vegaTime = 6;
 * @return {string}
 */
proto.vega.Statistics.prototype.getVegatime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setVegatime = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ChainStatus status = 7;
 * @return {!proto.vega.ChainStatus}
 */
proto.vega.Statistics.prototype.getStatus = function() {
  return /** @type {!proto.vega.ChainStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.ChainStatus} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional uint64 txPerBlock = 8;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTxperblock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTxperblock = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 averageTxBytes = 9;
 * @return {number}
 */
proto.vega.Statistics.prototype.getAveragetxbytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setAveragetxbytes = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 averageOrdersPerBlock = 10;
 * @return {number}
 */
proto.vega.Statistics.prototype.getAverageordersperblock = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setAverageordersperblock = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 tradesPerSecond = 11;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTradespersecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTradespersecond = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 ordersPerSecond = 12;
 * @return {number}
 */
proto.vega.Statistics.prototype.getOrderspersecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setOrderspersecond = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 totalMarkets = 13;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalmarkets = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalmarkets = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 totalAmendOrder = 16;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalamendorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalamendorder = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 totalCancelOrder = 17;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalcancelorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalcancelorder = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 totalCreateOrder = 18;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalcreateorder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalcreateorder = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint64 totalOrders = 19;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotalorders = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotalorders = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint64 totalTrades = 20;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTotaltrades = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTotaltrades = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint32 orderSubscriptions = 21;
 * @return {number}
 */
proto.vega.Statistics.prototype.getOrdersubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setOrdersubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint32 tradeSubscriptions = 22;
 * @return {number}
 */
proto.vega.Statistics.prototype.getTradesubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setTradesubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint32 candleSubscriptions = 23;
 * @return {number}
 */
proto.vega.Statistics.prototype.getCandlesubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setCandlesubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional uint32 marketDepthSubscriptions = 24;
 * @return {number}
 */
proto.vega.Statistics.prototype.getMarketdepthsubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setMarketdepthsubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional uint32 positionsSubscriptions = 25;
 * @return {number}
 */
proto.vega.Statistics.prototype.getPositionssubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setPositionssubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional uint32 accountSubscriptions = 26;
 * @return {number}
 */
proto.vega.Statistics.prototype.getAccountsubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 26, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setAccountsubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 26, value);
};


/**
 * optional uint32 marketDataSubscriptions = 27;
 * @return {number}
 */
proto.vega.Statistics.prototype.getMarketdatasubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setMarketdatasubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional string appVersionHash = 28;
 * @return {string}
 */
proto.vega.Statistics.prototype.getAppversionhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 28, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setAppversionhash = function(value) {
  return jspb.Message.setProto3StringField(this, 28, value);
};


/**
 * optional string appVersion = 29;
 * @return {string}
 */
proto.vega.Statistics.prototype.getAppversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 29, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setAppversion = function(value) {
  return jspb.Message.setProto3StringField(this, 29, value);
};


/**
 * optional string chainVersion = 30;
 * @return {string}
 */
proto.vega.Statistics.prototype.getChainversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setChainversion = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional uint64 blockDuration = 31;
 * @return {number}
 */
proto.vega.Statistics.prototype.getBlockduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 31, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setBlockduration = function(value) {
  return jspb.Message.setProto3IntField(this, 31, value);
};


/**
 * optional string uptime = 32;
 * @return {string}
 */
proto.vega.Statistics.prototype.getUptime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 32, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setUptime = function(value) {
  return jspb.Message.setProto3StringField(this, 32, value);
};


/**
 * optional string chainID = 33;
 * @return {string}
 */
proto.vega.Statistics.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 33, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 33, value);
};


/**
 * optional uint32 marketDepthUpdatesSubscriptions = 34;
 * @return {number}
 */
proto.vega.Statistics.prototype.getMarketdepthupdatessubscriptions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Statistics} returns this
 */
proto.vega.Statistics.prototype.setMarketdepthupdatessubscriptions = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Deposit.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Deposit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Deposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Deposit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    partyid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 5, ""),
    txhash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    creditedtimestamp: jspb.Message.getFieldWithDefault(msg, 7, 0),
    createdtimestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Deposit}
 */
proto.vega.Deposit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Deposit;
  return proto.vega.Deposit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Deposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Deposit}
 */
proto.vega.Deposit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!proto.vega.Deposit.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxhash(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreditedtimestamp(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedtimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Deposit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Deposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Deposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Deposit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAmount();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTxhash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreditedtimestamp();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getCreatedtimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Deposit.Status = {
  DEPOSIT_STATUS_UNSPECIFIED: 0,
  DEPOSIT_STATUS_OPEN: 1,
  DEPOSIT_STATUS_CANCELLED: 2,
  DEPOSIT_STATUS_FINALIZED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Deposit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Status status = 2;
 * @return {!proto.vega.Deposit.Status}
 */
proto.vega.Deposit.prototype.getStatus = function() {
  return /** @type {!proto.vega.Deposit.Status} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.vega.Deposit.Status} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string partyID = 3;
 * @return {string}
 */
proto.vega.Deposit.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Deposit.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string amount = 5;
 * @return {string}
 */
proto.vega.Deposit.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setAmount = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string txHash = 6;
 * @return {string}
 */
proto.vega.Deposit.prototype.getTxhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setTxhash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 creditedTimestamp = 7;
 * @return {number}
 */
proto.vega.Deposit.prototype.getCreditedtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setCreditedtimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 createdTimestamp = 8;
 * @return {number}
 */
proto.vega.Deposit.prototype.getCreatedtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Deposit} returns this
 */
proto.vega.Deposit.prototype.setCreatedtimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Withdrawal.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Withdrawal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Withdrawal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Withdrawal.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    status: jspb.Message.getFieldWithDefault(msg, 5, 0),
    ref: jspb.Message.getFieldWithDefault(msg, 6, ""),
    expiry: jspb.Message.getFieldWithDefault(msg, 7, 0),
    txhash: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createdtimestamp: jspb.Message.getFieldWithDefault(msg, 9, 0),
    withdrawntimestamp: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ext: (f = msg.getExt()) && proto.vega.WithdrawExt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Withdrawal}
 */
proto.vega.Withdrawal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Withdrawal;
  return proto.vega.Withdrawal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Withdrawal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Withdrawal}
 */
proto.vega.Withdrawal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {!proto.vega.Withdrawal.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRef(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiry(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxhash(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedtimestamp(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWithdrawntimestamp(value);
      break;
    case 11:
      var value = new proto.vega.WithdrawExt;
      reader.readMessage(value,proto.vega.WithdrawExt.deserializeBinaryFromReader);
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Withdrawal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Withdrawal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Withdrawal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Withdrawal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getRef();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExpiry();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTxhash();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedtimestamp();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getWithdrawntimestamp();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getExt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vega.WithdrawExt.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.Withdrawal.Status = {
  WITHDRAWAL_STATUS_UNSPECIFIED: 0,
  WITHDRAWAL_STATUS_OPEN: 1,
  WITHDRAWAL_STATUS_CANCELLED: 2,
  WITHDRAWAL_STATUS_FINALIZED: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Status status = 5;
 * @return {!proto.vega.Withdrawal.Status}
 */
proto.vega.Withdrawal.prototype.getStatus = function() {
  return /** @type {!proto.vega.Withdrawal.Status} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.vega.Withdrawal.Status} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string ref = 6;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getRef = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setRef = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 expiry = 7;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getExpiry = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setExpiry = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string txHash = 8;
 * @return {string}
 */
proto.vega.Withdrawal.prototype.getTxhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setTxhash = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 createdTimestamp = 9;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getCreatedtimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setCreatedtimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 withdrawnTimestamp = 10;
 * @return {number}
 */
proto.vega.Withdrawal.prototype.getWithdrawntimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.setWithdrawntimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional WithdrawExt ext = 11;
 * @return {?proto.vega.WithdrawExt}
 */
proto.vega.Withdrawal.prototype.getExt = function() {
  return /** @type{?proto.vega.WithdrawExt} */ (
    jspb.Message.getWrapperField(this, proto.vega.WithdrawExt, 11));
};


/**
 * @param {?proto.vega.WithdrawExt|undefined} value
 * @return {!proto.vega.Withdrawal} returns this
*/
proto.vega.Withdrawal.prototype.setExt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Withdrawal} returns this
 */
proto.vega.Withdrawal.prototype.clearExt = function() {
  return this.setExt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Withdrawal.prototype.hasExt = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.WithdrawSubmission.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.WithdrawSubmission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.WithdrawSubmission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawSubmission.toObject = function(includeInstance, msg) {
  var f, obj = {
    partyid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ext: (f = msg.getExt()) && proto.vega.WithdrawExt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.WithdrawSubmission}
 */
proto.vega.WithdrawSubmission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.WithdrawSubmission;
  return proto.vega.WithdrawSubmission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.WithdrawSubmission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.WithdrawSubmission}
 */
proto.vega.WithdrawSubmission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 4:
      var value = new proto.vega.WithdrawExt;
      reader.readMessage(value,proto.vega.WithdrawExt.deserializeBinaryFromReader);
      msg.setExt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.WithdrawSubmission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.WithdrawSubmission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.WithdrawSubmission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawSubmission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.WithdrawExt.serializeBinaryToWriter
    );
  }
};


/**
 * optional string partyID = 1;
 * @return {string}
 */
proto.vega.WithdrawSubmission.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.WithdrawSubmission} returns this
 */
proto.vega.WithdrawSubmission.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.vega.WithdrawSubmission.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.WithdrawSubmission} returns this
 */
proto.vega.WithdrawSubmission.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string asset = 3;
 * @return {string}
 */
proto.vega.WithdrawSubmission.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.WithdrawSubmission} returns this
 */
proto.vega.WithdrawSubmission.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional WithdrawExt ext = 4;
 * @return {?proto.vega.WithdrawExt}
 */
proto.vega.WithdrawSubmission.prototype.getExt = function() {
  return /** @type{?proto.vega.WithdrawExt} */ (
    jspb.Message.getWrapperField(this, proto.vega.WithdrawExt, 4));
};


/**
 * @param {?proto.vega.WithdrawExt|undefined} value
 * @return {!proto.vega.WithdrawSubmission} returns this
*/
proto.vega.WithdrawSubmission.prototype.setExt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.WithdrawSubmission} returns this
 */
proto.vega.WithdrawSubmission.prototype.clearExt = function() {
  return this.setExt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.WithdrawSubmission.prototype.hasExt = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.WithdrawExt.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.vega.WithdrawExt.ExtCase = {
  EXT_NOT_SET: 0,
  ERC20: 1
};

/**
 * @return {proto.vega.WithdrawExt.ExtCase}
 */
proto.vega.WithdrawExt.prototype.getExtCase = function() {
  return /** @type {proto.vega.WithdrawExt.ExtCase} */(jspb.Message.computeOneofCase(this, proto.vega.WithdrawExt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.WithdrawExt.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.WithdrawExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.WithdrawExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    erc20: (f = msg.getErc20()) && proto.vega.Erc20WithdrawExt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.WithdrawExt}
 */
proto.vega.WithdrawExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.WithdrawExt;
  return proto.vega.WithdrawExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.WithdrawExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.WithdrawExt}
 */
proto.vega.WithdrawExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Erc20WithdrawExt;
      reader.readMessage(value,proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader);
      msg.setErc20(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.WithdrawExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.WithdrawExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.WithdrawExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.WithdrawExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErc20();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Erc20WithdrawExt.serializeBinaryToWriter
    );
  }
};


/**
 * optional Erc20WithdrawExt erc20 = 1;
 * @return {?proto.vega.Erc20WithdrawExt}
 */
proto.vega.WithdrawExt.prototype.getErc20 = function() {
  return /** @type{?proto.vega.Erc20WithdrawExt} */ (
    jspb.Message.getWrapperField(this, proto.vega.Erc20WithdrawExt, 1));
};


/**
 * @param {?proto.vega.Erc20WithdrawExt|undefined} value
 * @return {!proto.vega.WithdrawExt} returns this
*/
proto.vega.WithdrawExt.prototype.setErc20 = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vega.WithdrawExt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.WithdrawExt} returns this
 */
proto.vega.WithdrawExt.prototype.clearErc20 = function() {
  return this.setErc20(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.WithdrawExt.prototype.hasErc20 = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Erc20WithdrawExt.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Erc20WithdrawExt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Erc20WithdrawExt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Erc20WithdrawExt.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiveraddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Erc20WithdrawExt}
 */
proto.vega.Erc20WithdrawExt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Erc20WithdrawExt;
  return proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Erc20WithdrawExt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Erc20WithdrawExt}
 */
proto.vega.Erc20WithdrawExt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiveraddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Erc20WithdrawExt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Erc20WithdrawExt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Erc20WithdrawExt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Erc20WithdrawExt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiveraddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string receiverAddress = 1;
 * @return {string}
 */
proto.vega.Erc20WithdrawExt.prototype.getReceiveraddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Erc20WithdrawExt} returns this
 */
proto.vega.Erc20WithdrawExt.prototype.setReceiveraddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderAmendment.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderAmendment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderAmendment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderAmendment.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    price: (f = msg.getPrice()) && proto.vega.Price.toObject(includeInstance, f),
    sizedelta: jspb.Message.getFieldWithDefault(msg, 5, 0),
    expiresat: (f = msg.getExpiresat()) && proto.vega.Timestamp.toObject(includeInstance, f),
    timeinforce: jspb.Message.getFieldWithDefault(msg, 7, 0),
    peggedoffset: (f = msg.getPeggedoffset()) && google_protobuf_wrappers_pb.Int64Value.toObject(includeInstance, f),
    peggedreference: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderAmendment}
 */
proto.vega.OrderAmendment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderAmendment;
  return proto.vega.OrderAmendment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderAmendment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderAmendment}
 */
proto.vega.OrderAmendment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 4:
      var value = new proto.vega.Price;
      reader.readMessage(value,proto.vega.Price.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSizedelta(value);
      break;
    case 6:
      var value = new proto.vega.Timestamp;
      reader.readMessage(value,proto.vega.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresat(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.Order.TimeInForce} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.Int64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int64Value.deserializeBinaryFromReader);
      msg.setPeggedoffset(value);
      break;
    case 9:
      var value = /** @type {!proto.vega.PeggedReference} */ (reader.readEnum());
      msg.setPeggedreference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderAmendment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderAmendment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderAmendment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderAmendment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vega.Price.serializeBinaryToWriter
    );
  }
  f = message.getSizedelta();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getExpiresat();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.vega.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTimeinforce();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getPeggedoffset();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.Int64Value.serializeBinaryToWriter
    );
  }
  f = message.getPeggedreference();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.vega.OrderAmendment.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.vega.OrderAmendment.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string marketID = 3;
 * @return {string}
 */
proto.vega.OrderAmendment.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Price price = 4;
 * @return {?proto.vega.Price}
 */
proto.vega.OrderAmendment.prototype.getPrice = function() {
  return /** @type{?proto.vega.Price} */ (
    jspb.Message.getWrapperField(this, proto.vega.Price, 4));
};


/**
 * @param {?proto.vega.Price|undefined} value
 * @return {!proto.vega.OrderAmendment} returns this
*/
proto.vega.OrderAmendment.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderAmendment.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 sizeDelta = 5;
 * @return {number}
 */
proto.vega.OrderAmendment.prototype.getSizedelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setSizedelta = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Timestamp expiresAt = 6;
 * @return {?proto.vega.Timestamp}
 */
proto.vega.OrderAmendment.prototype.getExpiresat = function() {
  return /** @type{?proto.vega.Timestamp} */ (
    jspb.Message.getWrapperField(this, proto.vega.Timestamp, 6));
};


/**
 * @param {?proto.vega.Timestamp|undefined} value
 * @return {!proto.vega.OrderAmendment} returns this
*/
proto.vega.OrderAmendment.prototype.setExpiresat = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.clearExpiresat = function() {
  return this.setExpiresat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderAmendment.prototype.hasExpiresat = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Order.TimeInForce timeInForce = 7;
 * @return {!proto.vega.Order.TimeInForce}
 */
proto.vega.OrderAmendment.prototype.getTimeinforce = function() {
  return /** @type {!proto.vega.Order.TimeInForce} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.Order.TimeInForce} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setTimeinforce = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional google.protobuf.Int64Value peggedOffset = 8;
 * @return {?proto.google.protobuf.Int64Value}
 */
proto.vega.OrderAmendment.prototype.getPeggedoffset = function() {
  return /** @type{?proto.google.protobuf.Int64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int64Value, 8));
};


/**
 * @param {?proto.google.protobuf.Int64Value|undefined} value
 * @return {!proto.vega.OrderAmendment} returns this
*/
proto.vega.OrderAmendment.prototype.setPeggedoffset = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.clearPeggedoffset = function() {
  return this.setPeggedoffset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderAmendment.prototype.hasPeggedoffset = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PeggedReference peggedReference = 9;
 * @return {!proto.vega.PeggedReference}
 */
proto.vega.OrderAmendment.prototype.getPeggedreference = function() {
  return /** @type {!proto.vega.PeggedReference} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.vega.PeggedReference} value
 * @return {!proto.vega.OrderAmendment} returns this
 */
proto.vega.OrderAmendment.prototype.setPeggedreference = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderSubmission.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderSubmission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderSubmission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderSubmission.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    price: jspb.Message.getFieldWithDefault(msg, 4, 0),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0),
    side: jspb.Message.getFieldWithDefault(msg, 6, 0),
    timeinforce: jspb.Message.getFieldWithDefault(msg, 7, 0),
    expiresat: jspb.Message.getFieldWithDefault(msg, 8, 0),
    type: jspb.Message.getFieldWithDefault(msg, 9, 0),
    reference: jspb.Message.getFieldWithDefault(msg, 10, ""),
    peggedorder: (f = msg.getPeggedorder()) && proto.vega.PeggedOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderSubmission}
 */
proto.vega.OrderSubmission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderSubmission;
  return proto.vega.OrderSubmission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderSubmission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderSubmission}
 */
proto.vega.OrderSubmission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSize(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.Side} */ (reader.readEnum());
      msg.setSide(value);
      break;
    case 7:
      var value = /** @type {!proto.vega.Order.TimeInForce} */ (reader.readEnum());
      msg.setTimeinforce(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresat(value);
      break;
    case 9:
      var value = /** @type {!proto.vega.Order.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 11:
      var value = new proto.vega.PeggedOrder;
      reader.readMessage(value,proto.vega.PeggedOrder.deserializeBinaryFromReader);
      msg.setPeggedorder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderSubmission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderSubmission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderSubmission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderSubmission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getSide();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getTimeinforce();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getExpiresat();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPeggedorder();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vega.PeggedOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.OrderSubmission.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.vega.OrderSubmission.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partyID = 3;
 * @return {string}
 */
proto.vega.OrderSubmission.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 price = 4;
 * @return {number}
 */
proto.vega.OrderSubmission.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 size = 5;
 * @return {number}
 */
proto.vega.OrderSubmission.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Side side = 6;
 * @return {!proto.vega.Side}
 */
proto.vega.OrderSubmission.prototype.getSide = function() {
  return /** @type {!proto.vega.Side} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.Side} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setSide = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional Order.TimeInForce timeInForce = 7;
 * @return {!proto.vega.Order.TimeInForce}
 */
proto.vega.OrderSubmission.prototype.getTimeinforce = function() {
  return /** @type {!proto.vega.Order.TimeInForce} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.vega.Order.TimeInForce} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setTimeinforce = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional int64 expiresAt = 8;
 * @return {number}
 */
proto.vega.OrderSubmission.prototype.getExpiresat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setExpiresat = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional Order.Type type = 9;
 * @return {!proto.vega.Order.Type}
 */
proto.vega.OrderSubmission.prototype.getType = function() {
  return /** @type {!proto.vega.Order.Type} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.vega.Order.Type} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string reference = 10;
 * @return {string}
 */
proto.vega.OrderSubmission.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional PeggedOrder peggedOrder = 11;
 * @return {?proto.vega.PeggedOrder}
 */
proto.vega.OrderSubmission.prototype.getPeggedorder = function() {
  return /** @type{?proto.vega.PeggedOrder} */ (
    jspb.Message.getWrapperField(this, proto.vega.PeggedOrder, 11));
};


/**
 * @param {?proto.vega.PeggedOrder|undefined} value
 * @return {!proto.vega.OrderSubmission} returns this
*/
proto.vega.OrderSubmission.prototype.setPeggedorder = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.OrderSubmission} returns this
 */
proto.vega.OrderSubmission.prototype.clearPeggedorder = function() {
  return this.setPeggedorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.OrderSubmission.prototype.hasPeggedorder = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.OrderCancellation.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.OrderCancellation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.OrderCancellation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellation.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.OrderCancellation}
 */
proto.vega.OrderCancellation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.OrderCancellation;
  return proto.vega.OrderCancellation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.OrderCancellation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.OrderCancellation}
 */
proto.vega.OrderCancellation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.OrderCancellation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.OrderCancellation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.OrderCancellation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.OrderCancellation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.vega.OrderCancellation.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderCancellation} returns this
 */
proto.vega.OrderCancellation.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string marketID = 2;
 * @return {string}
 */
proto.vega.OrderCancellation.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderCancellation} returns this
 */
proto.vega.OrderCancellation.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string partyID = 3;
 * @return {string}
 */
proto.vega.OrderCancellation.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.OrderCancellation} returns this
 */
proto.vega.OrderCancellation.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NodeRegistration.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NodeRegistration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NodeRegistration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeRegistration.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubkey: msg.getPubkey_asB64(),
    chainpubkey: msg.getChainpubkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NodeRegistration}
 */
proto.vega.NodeRegistration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NodeRegistration;
  return proto.vega.NodeRegistration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NodeRegistration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NodeRegistration}
 */
proto.vega.NodeRegistration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setChainpubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NodeRegistration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NodeRegistration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NodeRegistration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeRegistration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getChainpubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional bytes pubKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.vega.NodeRegistration.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pubKey = 1;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.vega.NodeRegistration.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.vega.NodeRegistration.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.NodeRegistration} returns this
 */
proto.vega.NodeRegistration.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes chainPubKey = 2;
 * @return {!(string|Uint8Array)}
 */
proto.vega.NodeRegistration.prototype.getChainpubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes chainPubKey = 2;
 * This is a type-conversion wrapper around `getChainpubkey()`
 * @return {string}
 */
proto.vega.NodeRegistration.prototype.getChainpubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getChainpubkey()));
};


/**
 * optional bytes chainPubKey = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getChainpubkey()`
 * @return {!Uint8Array}
 */
proto.vega.NodeRegistration.prototype.getChainpubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getChainpubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.NodeRegistration} returns this
 */
proto.vega.NodeRegistration.prototype.setChainpubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NodeVote.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NodeVote.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NodeVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeVote.toObject = function(includeInstance, msg) {
  var f, obj = {
    pubkey: msg.getPubkey_asB64(),
    reference: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NodeVote}
 */
proto.vega.NodeVote.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NodeVote;
  return proto.vega.NodeVote.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NodeVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NodeVote}
 */
proto.vega.NodeVote.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NodeVote.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NodeVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NodeVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeVote.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPubkey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes pubKey = 1;
 * @return {!(string|Uint8Array)}
 */
proto.vega.NodeVote.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pubKey = 1;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.vega.NodeVote.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubKey = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.vega.NodeVote.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.NodeVote} returns this
 */
proto.vega.NodeVote.prototype.setPubkey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string reference = 2;
 * @return {string}
 */
proto.vega.NodeVote.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NodeVote} returns this
 */
proto.vega.NodeVote.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 2, ""),
    balance: jspb.Message.getFieldWithDefault(msg, 3, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 4, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    type: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Account}
 */
proto.vega.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Account;
  return proto.vega.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Account}
 */
proto.vega.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 6:
      var value = /** @type {!proto.vega.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.Account.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner = 2;
 * @return {string}
 */
proto.vega.Account.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 balance = 3;
 * @return {number}
 */
proto.vega.Account.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string asset = 4;
 * @return {string}
 */
proto.vega.Account.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string marketID = 5;
 * @return {string}
 */
proto.vega.Account.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional AccountType type = 6;
 * @return {!proto.vega.AccountType}
 */
proto.vega.Account.prototype.getType = function() {
  return /** @type {!proto.vega.AccountType} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.vega.AccountType} value
 * @return {!proto.vega.Account} returns this
 */
proto.vega.Account.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.FinancialAmount.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.FinancialAmount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.FinancialAmount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.FinancialAmount.toObject = function(includeInstance, msg) {
  var f, obj = {
    amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.FinancialAmount}
 */
proto.vega.FinancialAmount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.FinancialAmount;
  return proto.vega.FinancialAmount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.FinancialAmount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.FinancialAmount}
 */
proto.vega.FinancialAmount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.FinancialAmount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.FinancialAmount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.FinancialAmount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.FinancialAmount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.vega.FinancialAmount.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.FinancialAmount} returns this
 */
proto.vega.FinancialAmount.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string asset = 2;
 * @return {string}
 */
proto.vega.FinancialAmount.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.FinancialAmount} returns this
 */
proto.vega.FinancialAmount.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: (f = msg.getAmount()) && proto.vega.FinancialAmount.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minamount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Transfer}
 */
proto.vega.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Transfer;
  return proto.vega.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Transfer}
 */
proto.vega.Transfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = new proto.vega.FinancialAmount;
      reader.readMessage(value,proto.vega.FinancialAmount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.TransferType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinamount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.FinancialAmount.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMinamount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.vega.Transfer.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional FinancialAmount amount = 2;
 * @return {?proto.vega.FinancialAmount}
 */
proto.vega.Transfer.prototype.getAmount = function() {
  return /** @type{?proto.vega.FinancialAmount} */ (
    jspb.Message.getWrapperField(this, proto.vega.FinancialAmount, 2));
};


/**
 * @param {?proto.vega.FinancialAmount|undefined} value
 * @return {!proto.vega.Transfer} returns this
*/
proto.vega.Transfer.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Transfer.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TransferType type = 3;
 * @return {!proto.vega.TransferType}
 */
proto.vega.Transfer.prototype.getType = function() {
  return /** @type {!proto.vega.TransferType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.TransferType} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional int64 minAmount = 4;
 * @return {number}
 */
proto.vega.Transfer.prototype.getMinamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Transfer} returns this
 */
proto.vega.Transfer.prototype.setMinamount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.TransferRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TransferRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TransferRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TransferRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromaccountList: jspb.Message.toObjectList(msg.getFromaccountList(),
    proto.vega.Account.toObject, includeInstance),
    toaccountList: jspb.Message.toObjectList(msg.getToaccountList(),
    proto.vega.Account.toObject, includeInstance),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    minamount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    asset: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reference: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TransferRequest}
 */
proto.vega.TransferRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TransferRequest;
  return proto.vega.TransferRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TransferRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TransferRequest}
 */
proto.vega.TransferRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Account;
      reader.readMessage(value,proto.vega.Account.deserializeBinaryFromReader);
      msg.addFromaccount(value);
      break;
    case 2:
      var value = new proto.vega.Account;
      reader.readMessage(value,proto.vega.Account.deserializeBinaryFromReader);
      msg.addToaccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinamount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TransferRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TransferRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TransferRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromaccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.Account.serializeBinaryToWriter
    );
  }
  f = message.getToaccountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.Account.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMinamount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * repeated Account fromAccount = 1;
 * @return {!Array<!proto.vega.Account>}
 */
proto.vega.TransferRequest.prototype.getFromaccountList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Account, 1));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.vega.TransferRequest} returns this
*/
proto.vega.TransferRequest.prototype.setFromaccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.vega.TransferRequest.prototype.addFromaccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.clearFromaccountList = function() {
  return this.setFromaccountList([]);
};


/**
 * repeated Account toAccount = 2;
 * @return {!Array<!proto.vega.Account>}
 */
proto.vega.TransferRequest.prototype.getToaccountList = function() {
  return /** @type{!Array<!proto.vega.Account>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.Account, 2));
};


/**
 * @param {!Array<!proto.vega.Account>} value
 * @return {!proto.vega.TransferRequest} returns this
*/
proto.vega.TransferRequest.prototype.setToaccountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.Account=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.Account}
 */
proto.vega.TransferRequest.prototype.addToaccount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.Account, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.clearToaccountList = function() {
  return this.setToaccountList([]);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.vega.TransferRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 minAmount = 4;
 * @return {number}
 */
proto.vega.TransferRequest.prototype.getMinamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setMinamount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string asset = 5;
 * @return {string}
 */
proto.vega.TransferRequest.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reference = 6;
 * @return {string}
 */
proto.vega.TransferRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.TransferRequest} returns this
 */
proto.vega.TransferRequest.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LedgerEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LedgerEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LedgerEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromaccount: jspb.Message.getFieldWithDefault(msg, 1, ""),
    toaccount: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    reference: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.LedgerEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LedgerEntry;
  return proto.vega.LedgerEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LedgerEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.LedgerEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromaccount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToaccount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LedgerEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LedgerEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LedgerEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LedgerEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFromaccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getToaccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string fromAccount = 1;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getFromaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setFromaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string toAccount = 2;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getToaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setToaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.vega.LedgerEntry.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string reference = 4;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.vega.LedgerEntry.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 timestamp = 6;
 * @return {number}
 */
proto.vega.LedgerEntry.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LedgerEntry} returns this
 */
proto.vega.LedgerEntry.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TransferBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TransferBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TransferBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.vega.Account.toObject(includeInstance, f),
    balance: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TransferBalance}
 */
proto.vega.TransferBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TransferBalance;
  return proto.vega.TransferBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TransferBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TransferBalance}
 */
proto.vega.TransferBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.Account;
      reader.readMessage(value,proto.vega.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBalance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TransferBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TransferBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TransferBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vega.Account.serializeBinaryToWriter
    );
  }
  f = message.getBalance();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.vega.Account}
 */
proto.vega.TransferBalance.prototype.getAccount = function() {
  return /** @type{?proto.vega.Account} */ (
    jspb.Message.getWrapperField(this, proto.vega.Account, 1));
};


/**
 * @param {?proto.vega.Account|undefined} value
 * @return {!proto.vega.TransferBalance} returns this
*/
proto.vega.TransferBalance.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.TransferBalance} returns this
 */
proto.vega.TransferBalance.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.TransferBalance.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 balance = 2;
 * @return {number}
 */
proto.vega.TransferBalance.prototype.getBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.TransferBalance} returns this
 */
proto.vega.TransferBalance.prototype.setBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.TransferResponse.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.TransferResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.TransferResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.TransferResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    transfersList: jspb.Message.toObjectList(msg.getTransfersList(),
    proto.vega.LedgerEntry.toObject, includeInstance),
    balancesList: jspb.Message.toObjectList(msg.getBalancesList(),
    proto.vega.TransferBalance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.TransferResponse}
 */
proto.vega.TransferResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.TransferResponse;
  return proto.vega.TransferResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.TransferResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.TransferResponse}
 */
proto.vega.TransferResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vega.LedgerEntry;
      reader.readMessage(value,proto.vega.LedgerEntry.deserializeBinaryFromReader);
      msg.addTransfers(value);
      break;
    case 2:
      var value = new proto.vega.TransferBalance;
      reader.readMessage(value,proto.vega.TransferBalance.deserializeBinaryFromReader);
      msg.addBalances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.TransferResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.TransferResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.TransferResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.TransferResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransfersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vega.LedgerEntry.serializeBinaryToWriter
    );
  }
  f = message.getBalancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.vega.TransferBalance.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LedgerEntry transfers = 1;
 * @return {!Array<!proto.vega.LedgerEntry>}
 */
proto.vega.TransferResponse.prototype.getTransfersList = function() {
  return /** @type{!Array<!proto.vega.LedgerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LedgerEntry, 1));
};


/**
 * @param {!Array<!proto.vega.LedgerEntry>} value
 * @return {!proto.vega.TransferResponse} returns this
*/
proto.vega.TransferResponse.prototype.setTransfersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vega.LedgerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LedgerEntry}
 */
proto.vega.TransferResponse.prototype.addTransfers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vega.LedgerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferResponse} returns this
 */
proto.vega.TransferResponse.prototype.clearTransfersList = function() {
  return this.setTransfersList([]);
};


/**
 * repeated TransferBalance balances = 2;
 * @return {!Array<!proto.vega.TransferBalance>}
 */
proto.vega.TransferResponse.prototype.getBalancesList = function() {
  return /** @type{!Array<!proto.vega.TransferBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.TransferBalance, 2));
};


/**
 * @param {!Array<!proto.vega.TransferBalance>} value
 * @return {!proto.vega.TransferResponse} returns this
*/
proto.vega.TransferResponse.prototype.setBalancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.vega.TransferBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.TransferBalance}
 */
proto.vega.TransferResponse.prototype.addBalances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.vega.TransferBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.TransferResponse} returns this
 */
proto.vega.TransferResponse.prototype.clearBalancesList = function() {
  return this.setBalancesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarginLevels.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarginLevels.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarginLevels} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarginLevels.toObject = function(includeInstance, msg) {
  var f, obj = {
    maintenancemargin: jspb.Message.getFieldWithDefault(msg, 1, 0),
    searchlevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
    initialmargin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    collateralreleaselevel: jspb.Message.getFieldWithDefault(msg, 4, 0),
    partyid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    marketid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    asset: jspb.Message.getFieldWithDefault(msg, 7, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarginLevels}
 */
proto.vega.MarginLevels.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarginLevels;
  return proto.vega.MarginLevels.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarginLevels} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarginLevels}
 */
proto.vega.MarginLevels.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaintenancemargin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSearchlevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setInitialmargin(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCollateralreleaselevel(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setAsset(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarginLevels.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarginLevels.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarginLevels} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarginLevels.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMaintenancemargin();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getSearchlevel();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getInitialmargin();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCollateralreleaselevel();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAsset();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
};


/**
 * optional uint64 maintenanceMargin = 1;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getMaintenancemargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setMaintenancemargin = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 searchLevel = 2;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getSearchlevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setSearchlevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 initialMargin = 3;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getInitialmargin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setInitialmargin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 collateralReleaseLevel = 4;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getCollateralreleaselevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setCollateralreleaselevel = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string partyID = 5;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string marketID = 6;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string asset = 7;
 * @return {string}
 */
proto.vega.MarginLevels.prototype.getAsset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setAsset = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 timestamp = 8;
 * @return {number}
 */
proto.vega.MarginLevels.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarginLevels} returns this
 */
proto.vega.MarginLevels.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.MarketData.repeatedFields_ = [23];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.MarketData.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.MarketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.MarketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketData.toObject = function(includeInstance, msg) {
  var f, obj = {
    markprice: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bestbidprice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    bestbidvolume: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bestofferprice: jspb.Message.getFieldWithDefault(msg, 4, 0),
    bestoffervolume: jspb.Message.getFieldWithDefault(msg, 5, 0),
    beststaticbidprice: jspb.Message.getFieldWithDefault(msg, 6, 0),
    beststaticbidvolume: jspb.Message.getFieldWithDefault(msg, 7, 0),
    beststaticofferprice: jspb.Message.getFieldWithDefault(msg, 8, 0),
    beststaticoffervolume: jspb.Message.getFieldWithDefault(msg, 9, 0),
    midprice: jspb.Message.getFieldWithDefault(msg, 10, 0),
    staticmidprice: jspb.Message.getFieldWithDefault(msg, 11, 0),
    market: jspb.Message.getFieldWithDefault(msg, 12, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 13, 0),
    openinterest: jspb.Message.getFieldWithDefault(msg, 14, 0),
    auctionend: jspb.Message.getFieldWithDefault(msg, 15, 0),
    auctionstart: jspb.Message.getFieldWithDefault(msg, 16, 0),
    indicativeprice: jspb.Message.getFieldWithDefault(msg, 17, 0),
    indicativevolume: jspb.Message.getFieldWithDefault(msg, 18, 0),
    markettradingmode: jspb.Message.getFieldWithDefault(msg, 19, 0),
    trigger: jspb.Message.getFieldWithDefault(msg, 20, 0),
    targetstake: jspb.Message.getFieldWithDefault(msg, 21, ""),
    suppliedstake: jspb.Message.getFieldWithDefault(msg, 22, ""),
    pricemonitoringboundsList: jspb.Message.toObjectList(msg.getPricemonitoringboundsList(),
    proto.vega.PriceMonitoringBounds.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.MarketData}
 */
proto.vega.MarketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.MarketData;
  return proto.vega.MarketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.MarketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.MarketData}
 */
proto.vega.MarketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMarkprice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestbidprice(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestbidvolume(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestofferprice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBestoffervolume(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBeststaticbidprice(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBeststaticbidvolume(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBeststaticofferprice(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBeststaticoffervolume(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMidprice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setStaticmidprice(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarket(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpeninterest(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionend(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAuctionstart(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativeprice(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndicativevolume(value);
      break;
    case 19:
      var value = /** @type {!proto.vega.Market.TradingMode} */ (reader.readEnum());
      msg.setMarkettradingmode(value);
      break;
    case 20:
      var value = /** @type {!proto.vega.AuctionTrigger} */ (reader.readEnum());
      msg.setTrigger(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setTargetstake(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuppliedstake(value);
      break;
    case 23:
      var value = new proto.vega.PriceMonitoringBounds;
      reader.readMessage(value,proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader);
      msg.addPricemonitoringbounds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.MarketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.MarketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.MarketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.MarketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarkprice();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBestbidprice();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBestbidvolume();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getBestofferprice();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getBestoffervolume();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getBeststaticbidprice();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getBeststaticbidvolume();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBeststaticofferprice();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getBeststaticoffervolume();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getMidprice();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getStaticmidprice();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getMarket();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getOpeninterest();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getAuctionend();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getAuctionstart();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getIndicativeprice();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getIndicativevolume();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getMarkettradingmode();
  if (f !== 0.0) {
    writer.writeEnum(
      19,
      f
    );
  }
  f = message.getTrigger();
  if (f !== 0.0) {
    writer.writeEnum(
      20,
      f
    );
  }
  f = message.getTargetstake();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getSuppliedstake();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getPricemonitoringboundsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto.vega.PriceMonitoringBounds.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 markPrice = 1;
 * @return {number}
 */
proto.vega.MarketData.prototype.getMarkprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarkprice = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 bestBidPrice = 2;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestbidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestbidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 bestBidVolume = 3;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestbidvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestbidvolume = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 bestOfferPrice = 4;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestofferprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestofferprice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 bestOfferVolume = 5;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBestoffervolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBestoffervolume = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 bestStaticBidPrice = 6;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBeststaticbidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBeststaticbidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 bestStaticBidVolume = 7;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBeststaticbidvolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBeststaticbidvolume = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 bestStaticOfferPrice = 8;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBeststaticofferprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBeststaticofferprice = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 bestStaticOfferVolume = 9;
 * @return {number}
 */
proto.vega.MarketData.prototype.getBeststaticoffervolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setBeststaticoffervolume = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 midPrice = 10;
 * @return {number}
 */
proto.vega.MarketData.prototype.getMidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 staticMidPrice = 11;
 * @return {number}
 */
proto.vega.MarketData.prototype.getStaticmidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setStaticmidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string market = 12;
 * @return {string}
 */
proto.vega.MarketData.prototype.getMarket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarket = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 timestamp = 13;
 * @return {number}
 */
proto.vega.MarketData.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 openInterest = 14;
 * @return {number}
 */
proto.vega.MarketData.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setOpeninterest = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 auctionEnd = 15;
 * @return {number}
 */
proto.vega.MarketData.prototype.getAuctionend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setAuctionend = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional int64 auctionStart = 16;
 * @return {number}
 */
proto.vega.MarketData.prototype.getAuctionstart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setAuctionstart = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 indicativePrice = 17;
 * @return {number}
 */
proto.vega.MarketData.prototype.getIndicativeprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setIndicativeprice = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 indicativeVolume = 18;
 * @return {number}
 */
proto.vega.MarketData.prototype.getIndicativevolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setIndicativevolume = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional Market.TradingMode marketTradingMode = 19;
 * @return {!proto.vega.Market.TradingMode}
 */
proto.vega.MarketData.prototype.getMarkettradingmode = function() {
  return /** @type {!proto.vega.Market.TradingMode} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {!proto.vega.Market.TradingMode} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setMarkettradingmode = function(value) {
  return jspb.Message.setProto3EnumField(this, 19, value);
};


/**
 * optional AuctionTrigger trigger = 20;
 * @return {!proto.vega.AuctionTrigger}
 */
proto.vega.MarketData.prototype.getTrigger = function() {
  return /** @type {!proto.vega.AuctionTrigger} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {!proto.vega.AuctionTrigger} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTrigger = function(value) {
  return jspb.Message.setProto3EnumField(this, 20, value);
};


/**
 * optional string targetStake = 21;
 * @return {string}
 */
proto.vega.MarketData.prototype.getTargetstake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setTargetstake = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string suppliedStake = 22;
 * @return {string}
 */
proto.vega.MarketData.prototype.getSuppliedstake = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.setSuppliedstake = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * repeated PriceMonitoringBounds priceMonitoringBounds = 23;
 * @return {!Array<!proto.vega.PriceMonitoringBounds>}
 */
proto.vega.MarketData.prototype.getPricemonitoringboundsList = function() {
  return /** @type{!Array<!proto.vega.PriceMonitoringBounds>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.PriceMonitoringBounds, 23));
};


/**
 * @param {!Array<!proto.vega.PriceMonitoringBounds>} value
 * @return {!proto.vega.MarketData} returns this
*/
proto.vega.MarketData.prototype.setPricemonitoringboundsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.vega.PriceMonitoringBounds=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.MarketData.prototype.addPricemonitoringbounds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.vega.PriceMonitoringBounds, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.MarketData} returns this
 */
proto.vega.MarketData.prototype.clearPricemonitoringboundsList = function() {
  return this.setPricemonitoringboundsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.PriceMonitoringBounds.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.PriceMonitoringBounds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.PriceMonitoringBounds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceMonitoringBounds.toObject = function(includeInstance, msg) {
  var f, obj = {
    minvalidprice: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxvalidprice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    trigger: (f = msg.getTrigger()) && markets_pb.PriceMonitoringTrigger.toObject(includeInstance, f),
    referenceprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.PriceMonitoringBounds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.PriceMonitoringBounds;
  return proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.PriceMonitoringBounds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.PriceMonitoringBounds}
 */
proto.vega.PriceMonitoringBounds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinvalidprice(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxvalidprice(value);
      break;
    case 3:
      var value = new markets_pb.PriceMonitoringTrigger;
      reader.readMessage(value,markets_pb.PriceMonitoringTrigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReferenceprice(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.PriceMonitoringBounds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.PriceMonitoringBounds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.PriceMonitoringBounds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.PriceMonitoringBounds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinvalidprice();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getMaxvalidprice();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      markets_pb.PriceMonitoringTrigger.serializeBinaryToWriter
    );
  }
  f = message.getReferenceprice();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
};


/**
 * optional uint64 minValidPrice = 1;
 * @return {number}
 */
proto.vega.PriceMonitoringBounds.prototype.getMinvalidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setMinvalidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 maxValidPrice = 2;
 * @return {number}
 */
proto.vega.PriceMonitoringBounds.prototype.getMaxvalidprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setMaxvalidprice = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional PriceMonitoringTrigger trigger = 3;
 * @return {?proto.vega.PriceMonitoringTrigger}
 */
proto.vega.PriceMonitoringBounds.prototype.getTrigger = function() {
  return /** @type{?proto.vega.PriceMonitoringTrigger} */ (
    jspb.Message.getWrapperField(this, markets_pb.PriceMonitoringTrigger, 3));
};


/**
 * @param {?proto.vega.PriceMonitoringTrigger|undefined} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
*/
proto.vega.PriceMonitoringBounds.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.PriceMonitoringBounds.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double referencePrice = 4;
 * @return {number}
 */
proto.vega.PriceMonitoringBounds.prototype.getReferenceprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.vega.PriceMonitoringBounds} returns this
 */
proto.vega.PriceMonitoringBounds.prototype.setReferenceprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.ErrorDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.ErrorDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.ErrorDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ErrorDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inner: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.ErrorDetail}
 */
proto.vega.ErrorDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.ErrorDetail;
  return proto.vega.ErrorDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.ErrorDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.ErrorDetail}
 */
proto.vega.ErrorDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.ErrorDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.ErrorDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.ErrorDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.ErrorDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInner();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.vega.ErrorDetail.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.vega.ErrorDetail.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string inner = 3;
 * @return {string}
 */
proto.vega.ErrorDetail.prototype.getInner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.ErrorDetail} returns this
 */
proto.vega.ErrorDetail.prototype.setInner = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vega.Transaction.oneofGroups_ = [[1001,1002]];

/**
 * @enum {number}
 */
proto.vega.Transaction.FromCase = {
  FROM_NOT_SET: 0,
  ADDRESS: 1001,
  PUBKEY: 1002
};

/**
 * @return {proto.vega.Transaction.FromCase}
 */
proto.vega.Transaction.prototype.getFromCase = function() {
  return /** @type {proto.vega.Transaction.FromCase} */(jspb.Message.computeOneofCase(this, proto.vega.Transaction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    inputdata: msg.getInputdata_asB64(),
    nonce: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockheight: jspb.Message.getFieldWithDefault(msg, 3, 0),
    address: msg.getAddress_asB64(),
    pubkey: msg.getPubkey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Transaction}
 */
proto.vega.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Transaction;
  return proto.vega.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Transaction}
 */
proto.vega.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputdata(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNonce(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockheight(value);
      break;
    case 1001:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 1002:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInputdata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNonce();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBlockheight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1001));
  if (f != null) {
    writer.writeBytes(
      1001,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1002));
  if (f != null) {
    writer.writeBytes(
      1002,
      f
    );
  }
};


/**
 * optional bytes inputData = 1;
 * @return {!(string|Uint8Array)}
 */
proto.vega.Transaction.prototype.getInputdata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes inputData = 1;
 * This is a type-conversion wrapper around `getInputdata()`
 * @return {string}
 */
proto.vega.Transaction.prototype.getInputdata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputdata()));
};


/**
 * optional bytes inputData = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputdata()`
 * @return {!Uint8Array}
 */
proto.vega.Transaction.prototype.getInputdata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputdata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.setInputdata = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 nonce = 2;
 * @return {number}
 */
proto.vega.Transaction.prototype.getNonce = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.setNonce = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 blockHeight = 3;
 * @return {number}
 */
proto.vega.Transaction.prototype.getBlockheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.setBlockheight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes address = 1001;
 * @return {!(string|Uint8Array)}
 */
proto.vega.Transaction.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1001, ""));
};


/**
 * optional bytes address = 1001;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.vega.Transaction.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1001;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.vega.Transaction.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.setAddress = function(value) {
  return jspb.Message.setOneofField(this, 1001, proto.vega.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.clearAddress = function() {
  return jspb.Message.setOneofField(this, 1001, proto.vega.Transaction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Transaction.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1001) != null;
};


/**
 * optional bytes pubKey = 1002;
 * @return {!(string|Uint8Array)}
 */
proto.vega.Transaction.prototype.getPubkey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1002, ""));
};


/**
 * optional bytes pubKey = 1002;
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {string}
 */
proto.vega.Transaction.prototype.getPubkey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPubkey()));
};


/**
 * optional bytes pubKey = 1002;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPubkey()`
 * @return {!Uint8Array}
 */
proto.vega.Transaction.prototype.getPubkey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPubkey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.setPubkey = function(value) {
  return jspb.Message.setOneofField(this, 1002, proto.vega.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.vega.Transaction} returns this
 */
proto.vega.Transaction.prototype.clearPubkey = function() {
  return jspb.Message.setOneofField(this, 1002, proto.vega.Transaction.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.Transaction.prototype.hasPubkey = function() {
  return jspb.Message.getField(this, 1002) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    sig: msg.getSig_asB64(),
    algo: jspb.Message.getFieldWithDefault(msg, 2, ""),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.Signature}
 */
proto.vega.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.Signature;
  return proto.vega.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.Signature}
 */
proto.vega.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAlgo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bytes sig = 1;
 * @return {!(string|Uint8Array)}
 */
proto.vega.Signature.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes sig = 1;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.vega.Signature.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.vega.Signature.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.Signature} returns this
 */
proto.vega.Signature.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string algo = 2;
 * @return {string}
 */
proto.vega.Signature.prototype.getAlgo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.Signature} returns this
 */
proto.vega.Signature.prototype.setAlgo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 version = 3;
 * @return {number}
 */
proto.vega.Signature.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.Signature} returns this
 */
proto.vega.Signature.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.SignedBundle.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.SignedBundle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.SignedBundle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.SignedBundle.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: msg.getTx_asB64(),
    sig: (f = msg.getSig()) && proto.vega.Signature.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.SignedBundle}
 */
proto.vega.SignedBundle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.SignedBundle;
  return proto.vega.SignedBundle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.SignedBundle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.SignedBundle}
 */
proto.vega.SignedBundle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setTx(value);
      break;
    case 2:
      var value = new proto.vega.Signature;
      reader.readMessage(value,proto.vega.Signature.deserializeBinaryFromReader);
      msg.setSig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.SignedBundle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.SignedBundle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.SignedBundle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.SignedBundle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.Signature.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes tx = 1;
 * @return {!(string|Uint8Array)}
 */
proto.vega.SignedBundle.prototype.getTx = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes tx = 1;
 * This is a type-conversion wrapper around `getTx()`
 * @return {string}
 */
proto.vega.SignedBundle.prototype.getTx_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getTx()));
};


/**
 * optional bytes tx = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getTx()`
 * @return {!Uint8Array}
 */
proto.vega.SignedBundle.prototype.getTx_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getTx()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.SignedBundle} returns this
 */
proto.vega.SignedBundle.prototype.setTx = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional Signature sig = 2;
 * @return {?proto.vega.Signature}
 */
proto.vega.SignedBundle.prototype.getSig = function() {
  return /** @type{?proto.vega.Signature} */ (
    jspb.Message.getWrapperField(this, proto.vega.Signature, 2));
};


/**
 * @param {?proto.vega.Signature|undefined} value
 * @return {!proto.vega.SignedBundle} returns this
*/
proto.vega.SignedBundle.prototype.setSig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.SignedBundle} returns this
 */
proto.vega.SignedBundle.prototype.clearSig = function() {
  return this.setSig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.SignedBundle.prototype.hasSig = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NodeSignature.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NodeSignature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NodeSignature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeSignature.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sig: msg.getSig_asB64(),
    kind: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NodeSignature}
 */
proto.vega.NodeSignature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NodeSignature;
  return proto.vega.NodeSignature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NodeSignature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NodeSignature}
 */
proto.vega.NodeSignature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSig(value);
      break;
    case 3:
      var value = /** @type {!proto.vega.NodeSignatureKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NodeSignature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NodeSignature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NodeSignature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NodeSignature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string ID = 1;
 * @return {string}
 */
proto.vega.NodeSignature.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NodeSignature} returns this
 */
proto.vega.NodeSignature.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.vega.NodeSignature.prototype.getSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes sig = 2;
 * This is a type-conversion wrapper around `getSig()`
 * @return {string}
 */
proto.vega.NodeSignature.prototype.getSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSig()));
};


/**
 * optional bytes sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSig()`
 * @return {!Uint8Array}
 */
proto.vega.NodeSignature.prototype.getSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.vega.NodeSignature} returns this
 */
proto.vega.NodeSignature.prototype.setSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional NodeSignatureKind kind = 3;
 * @return {!proto.vega.NodeSignatureKind}
 */
proto.vega.NodeSignature.prototype.getKind = function() {
  return /** @type {!proto.vega.NodeSignatureKind} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.vega.NodeSignatureKind} value
 * @return {!proto.vega.NodeSignature} returns this
 */
proto.vega.NodeSignature.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.NetworkParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.NetworkParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.NetworkParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.NetworkParameter}
 */
proto.vega.NetworkParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.NetworkParameter;
  return proto.vega.NetworkParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.NetworkParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.NetworkParameter}
 */
proto.vega.NetworkParameter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.NetworkParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.NetworkParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.NetworkParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.NetworkParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Key = 1;
 * @return {string}
 */
proto.vega.NetworkParameter.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NetworkParameter} returns this
 */
proto.vega.NetworkParameter.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Value = 2;
 * @return {string}
 */
proto.vega.NetworkParameter.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.NetworkParameter} returns this
 */
proto.vega.NetworkParameter.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    reference: jspb.Message.getFieldWithDefault(msg, 1, 0),
    proportion: jspb.Message.getFieldWithDefault(msg, 2, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityOrder;
  return proto.vega.LiquidityOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vega.PeggedReference} */ (reader.readEnum());
      msg.setReference(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProportion(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReference();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getProportion();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional PeggedReference reference = 1;
 * @return {!proto.vega.PeggedReference}
 */
proto.vega.LiquidityOrder.prototype.getReference = function() {
  return /** @type {!proto.vega.PeggedReference} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vega.PeggedReference} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setReference = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional uint32 proportion = 2;
 * @return {number}
 */
proto.vega.LiquidityOrder.prototype.getProportion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setProportion = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 offset = 3;
 * @return {number}
 */
proto.vega.LiquidityOrder.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityOrder} returns this
 */
proto.vega.LiquidityOrder.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.LiquidityProvisionSubmission.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityProvisionSubmission.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityProvisionSubmission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityProvisionSubmission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvisionSubmission.toObject = function(includeInstance, msg) {
  var f, obj = {
    marketid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    commitmentamount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sellsList: jspb.Message.toObjectList(msg.getSellsList(),
    proto.vega.LiquidityOrder.toObject, includeInstance),
    buysList: jspb.Message.toObjectList(msg.getBuysList(),
    proto.vega.LiquidityOrder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityProvisionSubmission}
 */
proto.vega.LiquidityProvisionSubmission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityProvisionSubmission;
  return proto.vega.LiquidityProvisionSubmission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityProvisionSubmission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityProvisionSubmission}
 */
proto.vega.LiquidityProvisionSubmission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommitmentamount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 4:
      var value = new proto.vega.LiquidityOrder;
      reader.readMessage(value,proto.vega.LiquidityOrder.deserializeBinaryFromReader);
      msg.addSells(value);
      break;
    case 5:
      var value = new proto.vega.LiquidityOrder;
      reader.readMessage(value,proto.vega.LiquidityOrder.deserializeBinaryFromReader);
      msg.addBuys(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityProvisionSubmission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityProvisionSubmission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityProvisionSubmission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvisionSubmission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCommitmentamount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vega.LiquidityOrder.serializeBinaryToWriter
    );
  }
  f = message.getBuysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vega.LiquidityOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string marketID = 1;
 * @return {string}
 */
proto.vega.LiquidityProvisionSubmission.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
 */
proto.vega.LiquidityProvisionSubmission.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 commitmentAmount = 2;
 * @return {number}
 */
proto.vega.LiquidityProvisionSubmission.prototype.getCommitmentamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
 */
proto.vega.LiquidityProvisionSubmission.prototype.setCommitmentamount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string fee = 3;
 * @return {string}
 */
proto.vega.LiquidityProvisionSubmission.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
 */
proto.vega.LiquidityProvisionSubmission.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated LiquidityOrder Sells = 4;
 * @return {!Array<!proto.vega.LiquidityOrder>}
 */
proto.vega.LiquidityProvisionSubmission.prototype.getSellsList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrder, 4));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrder>} value
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
*/
proto.vega.LiquidityProvisionSubmission.prototype.setSellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vega.LiquidityOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityProvisionSubmission.prototype.addSells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vega.LiquidityOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
 */
proto.vega.LiquidityProvisionSubmission.prototype.clearSellsList = function() {
  return this.setSellsList([]);
};


/**
 * repeated LiquidityOrder Buys = 5;
 * @return {!Array<!proto.vega.LiquidityOrder>}
 */
proto.vega.LiquidityProvisionSubmission.prototype.getBuysList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrder>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrder, 5));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrder>} value
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
*/
proto.vega.LiquidityProvisionSubmission.prototype.setBuysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vega.LiquidityOrder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityProvisionSubmission.prototype.addBuys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vega.LiquidityOrder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvisionSubmission} returns this
 */
proto.vega.LiquidityProvisionSubmission.prototype.clearBuysList = function() {
  return this.setBuysList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityOrderReference.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityOrderReference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityOrderReference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrderReference.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    liquidityorder: (f = msg.getLiquidityorder()) && proto.vega.LiquidityOrder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityOrderReference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityOrderReference;
  return proto.vega.LiquidityOrderReference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityOrderReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityOrderReference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrderid(value);
      break;
    case 2:
      var value = new proto.vega.LiquidityOrder;
      reader.readMessage(value,proto.vega.LiquidityOrder.deserializeBinaryFromReader);
      msg.setLiquidityorder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityOrderReference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityOrderReference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityOrderReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityOrderReference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLiquidityorder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vega.LiquidityOrder.serializeBinaryToWriter
    );
  }
};


/**
 * optional string orderID = 1;
 * @return {string}
 */
proto.vega.LiquidityOrderReference.prototype.getOrderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityOrderReference} returns this
 */
proto.vega.LiquidityOrderReference.prototype.setOrderid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional LiquidityOrder liquidityOrder = 2;
 * @return {?proto.vega.LiquidityOrder}
 */
proto.vega.LiquidityOrderReference.prototype.getLiquidityorder = function() {
  return /** @type{?proto.vega.LiquidityOrder} */ (
    jspb.Message.getWrapperField(this, proto.vega.LiquidityOrder, 2));
};


/**
 * @param {?proto.vega.LiquidityOrder|undefined} value
 * @return {!proto.vega.LiquidityOrderReference} returns this
*/
proto.vega.LiquidityOrderReference.prototype.setLiquidityorder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vega.LiquidityOrderReference} returns this
 */
proto.vega.LiquidityOrderReference.prototype.clearLiquidityorder = function() {
  return this.setLiquidityorder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vega.LiquidityOrderReference.prototype.hasLiquidityorder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vega.LiquidityProvision.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.LiquidityProvision.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.LiquidityProvision.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.LiquidityProvision} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvision.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 3, 0),
    updatedat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    marketid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    commitmentamount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fee: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sellsList: jspb.Message.toObjectList(msg.getSellsList(),
    proto.vega.LiquidityOrderReference.toObject, includeInstance),
    buysList: jspb.Message.toObjectList(msg.getBuysList(),
    proto.vega.LiquidityOrderReference.toObject, includeInstance),
    version: jspb.Message.getFieldWithDefault(msg, 10, ""),
    status: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.LiquidityProvision}
 */
proto.vega.LiquidityProvision.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.LiquidityProvision;
  return proto.vega.LiquidityProvision.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.LiquidityProvision} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.LiquidityProvision}
 */
proto.vega.LiquidityProvision.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartyid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedat(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedat(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMarketid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCommitmentamount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
      break;
    case 8:
      var value = new proto.vega.LiquidityOrderReference;
      reader.readMessage(value,proto.vega.LiquidityOrderReference.deserializeBinaryFromReader);
      msg.addSells(value);
      break;
    case 9:
      var value = new proto.vega.LiquidityOrderReference;
      reader.readMessage(value,proto.vega.LiquidityOrderReference.deserializeBinaryFromReader);
      msg.addBuys(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 11:
      var value = /** @type {!proto.vega.LiquidityProvision.Status} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.LiquidityProvision.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.LiquidityProvision.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.LiquidityProvision} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.LiquidityProvision.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedat();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUpdatedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMarketid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCommitmentamount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSellsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.vega.LiquidityOrderReference.serializeBinaryToWriter
    );
  }
  f = message.getBuysList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.vega.LiquidityOrderReference.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vega.LiquidityProvision.Status = {
  LIQUIDITY_PROVISION_STATUS_UNSPECIFIED: 0,
  LIQUIDITY_PROVISION_STATUS_ACTIVE: 1,
  LIQUIDITY_PROVISION_STATUS_STOPPED: 2,
  LIQUIDITY_PROVISION_STATUS_CANCELLED: 3,
  LIQUIDITY_PROVISION_STATUS_REJECTED: 4
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string partyID = 2;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getPartyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setPartyid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 createdAt = 3;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getCreatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setCreatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 updatedAt = 4;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getUpdatedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setUpdatedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string marketID = 5;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getMarketid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setMarketid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 commitmentAmount = 6;
 * @return {number}
 */
proto.vega.LiquidityProvision.prototype.getCommitmentamount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setCommitmentamount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string fee = 7;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated LiquidityOrderReference sells = 8;
 * @return {!Array<!proto.vega.LiquidityOrderReference>}
 */
proto.vega.LiquidityProvision.prototype.getSellsList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrderReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrderReference, 8));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrderReference>} value
 * @return {!proto.vega.LiquidityProvision} returns this
*/
proto.vega.LiquidityProvision.prototype.setSellsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.vega.LiquidityOrderReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityProvision.prototype.addSells = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.vega.LiquidityOrderReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.clearSellsList = function() {
  return this.setSellsList([]);
};


/**
 * repeated LiquidityOrderReference buys = 9;
 * @return {!Array<!proto.vega.LiquidityOrderReference>}
 */
proto.vega.LiquidityProvision.prototype.getBuysList = function() {
  return /** @type{!Array<!proto.vega.LiquidityOrderReference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vega.LiquidityOrderReference, 9));
};


/**
 * @param {!Array<!proto.vega.LiquidityOrderReference>} value
 * @return {!proto.vega.LiquidityProvision} returns this
*/
proto.vega.LiquidityProvision.prototype.setBuysList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.vega.LiquidityOrderReference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vega.LiquidityOrderReference}
 */
proto.vega.LiquidityProvision.prototype.addBuys = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.vega.LiquidityOrderReference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.clearBuysList = function() {
  return this.setBuysList([]);
};


/**
 * optional string version = 10;
 * @return {string}
 */
proto.vega.LiquidityProvision.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Status status = 11;
 * @return {!proto.vega.LiquidityProvision.Status}
 */
proto.vega.LiquidityProvision.prototype.getStatus = function() {
  return /** @type {!proto.vega.LiquidityProvision.Status} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.vega.LiquidityProvision.Status} value
 * @return {!proto.vega.LiquidityProvision} returns this
 */
proto.vega.LiquidityProvision.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vega.EthereumConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.vega.EthereumConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vega.EthereumConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    networkid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    chainid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bridgeaddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    confirmations: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vega.EthereumConfig}
 */
proto.vega.EthereumConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vega.EthereumConfig;
  return proto.vega.EthereumConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vega.EthereumConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vega.EthereumConfig}
 */
proto.vega.EthereumConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBridgeaddress(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfirmations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vega.EthereumConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vega.EthereumConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vega.EthereumConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vega.EthereumConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNetworkid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBridgeaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConfirmations();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional string networkId = 1;
 * @return {string}
 */
proto.vega.EthereumConfig.prototype.getNetworkid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setNetworkid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string chainId = 2;
 * @return {string}
 */
proto.vega.EthereumConfig.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string bridgeAddress = 3;
 * @return {string}
 */
proto.vega.EthereumConfig.prototype.getBridgeaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setBridgeaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 confirmations = 4;
 * @return {number}
 */
proto.vega.EthereumConfig.prototype.getConfirmations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.vega.EthereumConfig} returns this
 */
proto.vega.EthereumConfig.prototype.setConfirmations = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * @enum {number}
 */
proto.vega.Side = {
  SIDE_UNSPECIFIED: 0,
  SIDE_BUY: 1,
  SIDE_SELL: 2
};

/**
 * @enum {number}
 */
proto.vega.Interval = {
  INTERVAL_UNSPECIFIED: 0,
  INTERVAL_I1M: 60,
  INTERVAL_I5M: 300,
  INTERVAL_I15M: 900,
  INTERVAL_I1H: 3600,
  INTERVAL_I6H: 21600,
  INTERVAL_I1D: 86400
};

/**
 * @enum {number}
 */
proto.vega.AuctionTrigger = {
  AUCTION_TRIGGER_UNSPECIFIED: 0,
  AUCTION_TRIGGER_BATCH: 1,
  AUCTION_TRIGGER_OPENING: 2,
  AUCTION_TRIGGER_PRICE: 3,
  AUCTION_TRIGGER_LIQUIDITY: 4
};

/**
 * @enum {number}
 */
proto.vega.PeggedReference = {
  PEGGED_REFERENCE_UNSPECIFIED: 0,
  PEGGED_REFERENCE_MID: 1,
  PEGGED_REFERENCE_BEST_BID: 2,
  PEGGED_REFERENCE_BEST_ASK: 3
};

/**
 * @enum {number}
 */
proto.vega.OrderError = {
  ORDER_ERROR_NONE: 0,
  ORDER_ERROR_INVALID_MARKET_ID: 1,
  ORDER_ERROR_INVALID_ORDER_ID: 2,
  ORDER_ERROR_OUT_OF_SEQUENCE: 3,
  ORDER_ERROR_INVALID_REMAINING_SIZE: 4,
  ORDER_ERROR_TIME_FAILURE: 5,
  ORDER_ERROR_REMOVAL_FAILURE: 6,
  ORDER_ERROR_INVALID_EXPIRATION_DATETIME: 7,
  ORDER_ERROR_INVALID_ORDER_REFERENCE: 8,
  ORDER_ERROR_EDIT_NOT_ALLOWED: 9,
  ORDER_ERROR_AMEND_FAILURE: 10,
  ORDER_ERROR_NOT_FOUND: 11,
  ORDER_ERROR_INVALID_PARTY_ID: 12,
  ORDER_ERROR_MARKET_CLOSED: 13,
  ORDER_ERROR_MARGIN_CHECK_FAILED: 14,
  ORDER_ERROR_MISSING_GENERAL_ACCOUNT: 15,
  ORDER_ERROR_INTERNAL_ERROR: 16,
  ORDER_ERROR_INVALID_SIZE: 17,
  ORDER_ERROR_INVALID_PERSISTENCE: 18,
  ORDER_ERROR_INVALID_TYPE: 19,
  ORDER_ERROR_SELF_TRADING: 20,
  ORDER_ERROR_INSUFFICIENT_FUNDS_TO_PAY_FEES: 21,
  ORDER_ERROR_INCORRECT_MARKET_TYPE: 22,
  ORDER_ERROR_INVALID_TIME_IN_FORCE: 23,
  ORDER_ERROR_GFN_ORDER_DURING_AN_AUCTION: 24,
  ORDER_ERROR_GFA_ORDER_DURING_CONTINUOUS_TRADING: 25,
  ORDER_ERROR_CANNOT_AMEND_TO_GTT_WITHOUT_EXPIRYAT: 26,
  ORDER_ERROR_EXPIRYAT_BEFORE_CREATEDAT: 27,
  ORDER_ERROR_CANNOT_HAVE_GTC_AND_EXPIRYAT: 28,
  ORDER_ERROR_CANNOT_AMEND_TO_FOK_OR_IOC: 29,
  ORDER_ERROR_CANNOT_AMEND_TO_GFA_OR_GFN: 30,
  ORDER_ERROR_CANNOT_AMEND_FROM_GFA_OR_GFN: 31,
  ORDER_ERROR_CANNOT_SEND_IOC_ORDER_DURING_AUCTION: 32,
  ORDER_ERROR_CANNOT_SEND_FOK_ORDER_DURING_AUCTION: 33,
  ORDER_ERROR_MUST_BE_LIMIT_ORDER: 34,
  ORDER_ERROR_MUST_BE_GTT_OR_GTC: 35,
  ORDER_ERROR_WITHOUT_REFERENCE_PRICE: 36,
  ORDER_ERROR_BUY_CANNOT_REFERENCE_BEST_ASK_PRICE: 37,
  ORDER_ERROR_OFFSET_MUST_BE_LESS_OR_EQUAL_TO_ZERO: 38,
  ORDER_ERROR_OFFSET_MUST_BE_LESS_THAN_ZERO: 39,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_OR_EQUAL_TO_ZERO: 40,
  ORDER_ERROR_SELL_CANNOT_REFERENCE_BEST_BID_PRICE: 41,
  ORDER_ERROR_OFFSET_MUST_BE_GREATER_THAN_ZERO: 42,
  ORDER_ERROR_INSUFFICIENT_ASSET_BALANCE: 43,
  ORDER_ERROR_CANNOT_AMEND_PEGGED_ORDER_DETAILS_ON_NON_PEGGED_ORDER: 44,
  ORDER_ERROR_UNABLE_TO_REPRICE_PEGGED_ORDER: 45,
  ORDER_ERROR_UNABLE_TO_AMEND_PRICE_ON_PEGGED_ORDER: 46
};

/**
 * @enum {number}
 */
proto.vega.ChainStatus = {
  CHAIN_STATUS_UNSPECIFIED: 0,
  CHAIN_STATUS_DISCONNECTED: 1,
  CHAIN_STATUS_REPLAYING: 2,
  CHAIN_STATUS_CONNECTED: 3
};

/**
 * @enum {number}
 */
proto.vega.AccountType = {
  ACCOUNT_TYPE_UNSPECIFIED: 0,
  ACCOUNT_TYPE_INSURANCE: 1,
  ACCOUNT_TYPE_SETTLEMENT: 2,
  ACCOUNT_TYPE_MARGIN: 3,
  ACCOUNT_TYPE_GENERAL: 4,
  ACCOUNT_TYPE_FEES_INFRASTRUCTURE: 5,
  ACCOUNT_TYPE_FEES_LIQUIDITY: 6,
  ACCOUNT_TYPE_FEES_MAKER: 7,
  ACCOUNT_TYPE_LOCK_WITHDRAW: 8,
  ACCOUNT_TYPE_BOND: 9,
  ACCOUNT_TYPE_EXTERNAL: 10
};

/**
 * @enum {number}
 */
proto.vega.TransferType = {
  TRANSFER_TYPE_UNSPECIFIED: 0,
  TRANSFER_TYPE_LOSS: 1,
  TRANSFER_TYPE_WIN: 2,
  TRANSFER_TYPE_CLOSE: 3,
  TRANSFER_TYPE_MTM_LOSS: 4,
  TRANSFER_TYPE_MTM_WIN: 5,
  TRANSFER_TYPE_MARGIN_LOW: 6,
  TRANSFER_TYPE_MARGIN_HIGH: 7,
  TRANSFER_TYPE_MARGIN_CONFISCATED: 8,
  TRANSFER_TYPE_MAKER_FEE_PAY: 9,
  TRANSFER_TYPE_MAKER_FEE_RECEIVE: 10,
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_PAY: 11,
  TRANSFER_TYPE_INFRASTRUCTURE_FEE_DISTRIBUTE: 12,
  TRANSFER_TYPE_LIQUIDITY_FEE_PAY: 13,
  TRANSFER_TYPE_LIQUIDITY_FEE_DISTRIBUTE: 14,
  TRANSFER_TYPE_BOND_LOW: 15,
  TRANSFER_TYPE_BOND_HIGH: 16,
  TRANSFER_TYPE_WITHDRAW_LOCK: 17,
  TRANSFER_TYPE_WITHDRAW: 18,
  TRANSFER_TYPE_DEPOSIT: 19,
  TRANSFER_TYPE_BOND_SLASHING: 20
};

/**
 * @enum {number}
 */
proto.vega.NodeSignatureKind = {
  NODE_SIGNATURE_KIND_UNSPECIFIED: 0,
  NODE_SIGNATURE_KIND_ASSET_NEW: 1,
  NODE_SIGNATURE_KIND_ASSET_WITHDRAWAL: 2
};

goog.object.extend(exports, proto.vega);
