# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proto/governance.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from . import mwitkow_goprotovalidators_validator_pb2 as github_dot_com_dot_mwitkow_dot_go__proto__validators_dot_validator__pb2
from .markets_pb2 import (DESCRIPTOR as markets_DESCRIPTOR, _MARKET as markets_MARKET)
from .assets_pb2 import (DESCRIPTOR as assets_DESCRIPTOR, _ASSET as assets_ASSET, _ASSETSOURCE as assets_ASSETSOURCE)


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proto/governance.proto',
  package='vega',
  syntax='proto3',
  serialized_options=b'Z\037code.vegaprotocol.io/vega/proto',
  serialized_pb=b'\n\x16proto/governance.proto\x12\x04vega\x1a\x36github.com/mwitkow/go-proto-validators/validator.proto\x1a\x13proto/markets.proto\x1a\x12proto/assets.proto\"\xa1\x01\n\x14NetworkConfiguration\x12\x19\n\x11minCloseInSeconds\x18\x01 \x01(\x03\x12\x19\n\x11maxCloseInSeconds\x18\x02 \x01(\x03\x12\x19\n\x11minEnactInSeconds\x18\x03 \x01(\x03\x12\x19\n\x11maxEnactInSeconds\x18\x04 \x01(\x03\x12\x1d\n\x15minParticipationStake\x18\x05 \x01(\x04\"\x0e\n\x0cUpdateMarket\"2\n\tNewMarket\x12%\n\x07\x63hanges\x18\x01 \x01(\x0b\x32\x0c.vega.MarketB\x06\xe2\xdf\x1f\x02 \x01\"D\n\rUpdateNetwork\x12\x33\n\x07\x63hanges\x18\x01 \x01(\x0b\x32\x1a.vega.NetworkConfigurationB\x06\xe2\xdf\x1f\x02 \x01\"6\n\x08NewAsset\x12*\n\x07\x63hanges\x18\x01 \x01(\x0b\x32\x11.vega.AssetSourceB\x06\xe2\xdf\x1f\x02 \x01\"\xc9\x02\n\rProposalTerms\x12 \n\x10\x63losingTimestamp\x18\x01 \x01(\x03\x42\x06\xe2\xdf\x1f\x02\x10\x00\x12\"\n\x12\x65nactmentTimestamp\x18\x02 \x01(\x03\x42\x06\xe2\xdf\x1f\x02\x10\x00\x12\'\n\x15minParticipationStake\x18\x03 \x01(\x04\x42\x08\xe2\xdf\x1f\x04\x10\x00\x18\x65\x12\x1b\n\x13validationTimestamp\x18\x04 \x01(\x03\x12*\n\x0cupdateMarket\x18\x65 \x01(\x0b\x32\x12.vega.UpdateMarketH\x00\x12$\n\tnewMarket\x18\x66 \x01(\x0b\x32\x0f.vega.NewMarketH\x00\x12,\n\rupdateNetwork\x18g \x01(\x0b\x32\x13.vega.UpdateNetworkH\x00\x12\"\n\x08newAsset\x18h \x01(\x0b\x32\x0e.vega.NewAssetH\x00\x42\x08\n\x06\x63hange\"c\n\x0eGovernanceData\x12 \n\x08proposal\x18\x01 \x01(\x0b\x32\x0e.vega.Proposal\x12\x17\n\x03yes\x18\x02 \x03(\x0b\x32\n.vega.Vote\x12\x16\n\x02no\x18\x03 \x03(\x0b\x32\n.vega.Vote\"\x83\x02\n\x08Proposal\x12\n\n\x02ID\x18\x01 \x01(\t\x12\x11\n\treference\x18\x02 \x01(\t\x12\x17\n\x07partyID\x18\x03 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01\x12,\n\x05state\x18\x04 \x01(\x0e\x32\x14.vega.Proposal.StateB\x07\xe2\xdf\x1f\x03\x88\x01\x01\x12\x11\n\ttimestamp\x18\x05 \x01(\x03\x12*\n\x05terms\x18\x06 \x01(\x0b\x32\x13.vega.ProposalTermsB\x06\xe2\xdf\x1f\x02 \x01\"R\n\x05State\x12\n\n\x06\x46\x41ILED\x10\x00\x12\x08\n\x04OPEN\x10\x01\x12\n\n\x06PASSED\x10\x02\x12\x0c\n\x08REJECTED\x10\x03\x12\x0c\n\x08\x44\x45\x43LINED\x10\x04\x12\x0b\n\x07\x45NACTED\x10\x05\"\x92\x01\n\x04Vote\x12\x17\n\x07partyID\x18\x01 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01\x12(\n\x05value\x18\x02 \x01(\x0e\x32\x10.vega.Vote.ValueB\x07\xe2\xdf\x1f\x03\x88\x01\x01\x12\x1a\n\nproposalID\x18\x03 \x01(\tB\x06\xe2\xdf\x1f\x02X\x01\x12\x11\n\ttimestamp\x18\x04 \x01(\x03\"\x18\n\x05Value\x12\x06\n\x02NO\x10\x00\x12\x07\n\x03YES\x10\x01\x42!Z\x1f\x63ode.vegaprotocol.io/vega/protob\x06proto3'
  ,
  dependencies=[github_dot_com_dot_mwitkow_dot_go__proto__validators_dot_validator__pb2.DESCRIPTOR,markets_DESCRIPTOR,assets_DESCRIPTOR,])



_PROPOSAL_STATE = _descriptor.EnumDescriptor(
  name='State',
  full_name='vega.Proposal.State',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='FAILED', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='OPEN', index=1, number=1,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='PASSED', index=2, number=2,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='REJECTED', index=3, number=3,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DECLINED', index=4, number=4,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ENACTED', index=5, number=5,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1098,
  serialized_end=1180,
)
_sym_db.RegisterEnumDescriptor(_PROPOSAL_STATE)

_VOTE_VALUE = _descriptor.EnumDescriptor(
  name='Value',
  full_name='vega.Vote.Value',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='NO', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='YES', index=1, number=1,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1305,
  serialized_end=1329,
)
_sym_db.RegisterEnumDescriptor(_VOTE_VALUE)


_NETWORKCONFIGURATION = _descriptor.Descriptor(
  name='NetworkConfiguration',
  full_name='vega.NetworkConfiguration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='minCloseInSeconds', full_name='vega.NetworkConfiguration.minCloseInSeconds', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='maxCloseInSeconds', full_name='vega.NetworkConfiguration.maxCloseInSeconds', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='minEnactInSeconds', full_name='vega.NetworkConfiguration.minEnactInSeconds', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='maxEnactInSeconds', full_name='vega.NetworkConfiguration.maxEnactInSeconds', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='minParticipationStake', full_name='vega.NetworkConfiguration.minParticipationStake', index=4,
      number=5, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=130,
  serialized_end=291,
)


_UPDATEMARKET = _descriptor.Descriptor(
  name='UpdateMarket',
  full_name='vega.UpdateMarket',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=293,
  serialized_end=307,
)


_NEWMARKET = _descriptor.Descriptor(
  name='NewMarket',
  full_name='vega.NewMarket',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='changes', full_name='vega.NewMarket.changes', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002 \001', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=309,
  serialized_end=359,
)


_UPDATENETWORK = _descriptor.Descriptor(
  name='UpdateNetwork',
  full_name='vega.UpdateNetwork',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='changes', full_name='vega.UpdateNetwork.changes', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002 \001', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=361,
  serialized_end=429,
)


_NEWASSET = _descriptor.Descriptor(
  name='NewAsset',
  full_name='vega.NewAsset',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='changes', full_name='vega.NewAsset.changes', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002 \001', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=431,
  serialized_end=485,
)


_PROPOSALTERMS = _descriptor.Descriptor(
  name='ProposalTerms',
  full_name='vega.ProposalTerms',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='closingTimestamp', full_name='vega.ProposalTerms.closingTimestamp', index=0,
      number=1, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002\020\000', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='enactmentTimestamp', full_name='vega.ProposalTerms.enactmentTimestamp', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002\020\000', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='minParticipationStake', full_name='vega.ProposalTerms.minParticipationStake', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\004\020\000\030e', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='validationTimestamp', full_name='vega.ProposalTerms.validationTimestamp', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='updateMarket', full_name='vega.ProposalTerms.updateMarket', index=4,
      number=101, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='newMarket', full_name='vega.ProposalTerms.newMarket', index=5,
      number=102, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='updateNetwork', full_name='vega.ProposalTerms.updateNetwork', index=6,
      number=103, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='newAsset', full_name='vega.ProposalTerms.newAsset', index=7,
      number=104, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='change', full_name='vega.ProposalTerms.change',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=488,
  serialized_end=817,
)


_GOVERNANCEDATA = _descriptor.Descriptor(
  name='GovernanceData',
  full_name='vega.GovernanceData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='proposal', full_name='vega.GovernanceData.proposal', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='yes', full_name='vega.GovernanceData.yes', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='no', full_name='vega.GovernanceData.no', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=819,
  serialized_end=918,
)


_PROPOSAL = _descriptor.Descriptor(
  name='Proposal',
  full_name='vega.Proposal',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ID', full_name='vega.Proposal.ID', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reference', full_name='vega.Proposal.reference', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='partyID', full_name='vega.Proposal.partyID', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='state', full_name='vega.Proposal.state', index=3,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\003\210\001\001', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='vega.Proposal.timestamp', index=4,
      number=5, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='terms', full_name='vega.Proposal.terms', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002 \001', file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _PROPOSAL_STATE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=921,
  serialized_end=1180,
)


_VOTE = _descriptor.Descriptor(
  name='Vote',
  full_name='vega.Vote',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='partyID', full_name='vega.Vote.partyID', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='value', full_name='vega.Vote.value', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\003\210\001\001', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='proposalID', full_name='vega.Vote.proposalID', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=b'\342\337\037\002X\001', file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='vega.Vote.timestamp', index=3,
      number=4, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _VOTE_VALUE,
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1183,
  serialized_end=1329,
)

_NEWMARKET.fields_by_name['changes'].message_type = markets_MARKET
_UPDATENETWORK.fields_by_name['changes'].message_type = _NETWORKCONFIGURATION
_NEWASSET.fields_by_name['changes'].message_type = assets_ASSETSOURCE
_PROPOSALTERMS.fields_by_name['updateMarket'].message_type = _UPDATEMARKET
_PROPOSALTERMS.fields_by_name['newMarket'].message_type = _NEWMARKET
_PROPOSALTERMS.fields_by_name['updateNetwork'].message_type = _UPDATENETWORK
_PROPOSALTERMS.fields_by_name['newAsset'].message_type = _NEWASSET
_PROPOSALTERMS.oneofs_by_name['change'].fields.append(
  _PROPOSALTERMS.fields_by_name['updateMarket'])
_PROPOSALTERMS.fields_by_name['updateMarket'].containing_oneof = _PROPOSALTERMS.oneofs_by_name['change']
_PROPOSALTERMS.oneofs_by_name['change'].fields.append(
  _PROPOSALTERMS.fields_by_name['newMarket'])
_PROPOSALTERMS.fields_by_name['newMarket'].containing_oneof = _PROPOSALTERMS.oneofs_by_name['change']
_PROPOSALTERMS.oneofs_by_name['change'].fields.append(
  _PROPOSALTERMS.fields_by_name['updateNetwork'])
_PROPOSALTERMS.fields_by_name['updateNetwork'].containing_oneof = _PROPOSALTERMS.oneofs_by_name['change']
_PROPOSALTERMS.oneofs_by_name['change'].fields.append(
  _PROPOSALTERMS.fields_by_name['newAsset'])
_PROPOSALTERMS.fields_by_name['newAsset'].containing_oneof = _PROPOSALTERMS.oneofs_by_name['change']
_GOVERNANCEDATA.fields_by_name['proposal'].message_type = _PROPOSAL
_GOVERNANCEDATA.fields_by_name['yes'].message_type = _VOTE
_GOVERNANCEDATA.fields_by_name['no'].message_type = _VOTE
_PROPOSAL.fields_by_name['state'].enum_type = _PROPOSAL_STATE
_PROPOSAL.fields_by_name['terms'].message_type = _PROPOSALTERMS
_PROPOSAL_STATE.containing_type = _PROPOSAL
_VOTE.fields_by_name['value'].enum_type = _VOTE_VALUE
_VOTE_VALUE.containing_type = _VOTE
DESCRIPTOR.message_types_by_name['NetworkConfiguration'] = _NETWORKCONFIGURATION
DESCRIPTOR.message_types_by_name['UpdateMarket'] = _UPDATEMARKET
DESCRIPTOR.message_types_by_name['NewMarket'] = _NEWMARKET
DESCRIPTOR.message_types_by_name['UpdateNetwork'] = _UPDATENETWORK
DESCRIPTOR.message_types_by_name['NewAsset'] = _NEWASSET
DESCRIPTOR.message_types_by_name['ProposalTerms'] = _PROPOSALTERMS
DESCRIPTOR.message_types_by_name['GovernanceData'] = _GOVERNANCEDATA
DESCRIPTOR.message_types_by_name['Proposal'] = _PROPOSAL
DESCRIPTOR.message_types_by_name['Vote'] = _VOTE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

NetworkConfiguration = _reflection.GeneratedProtocolMessageType('NetworkConfiguration', (_message.Message,), {
  'DESCRIPTOR' : _NETWORKCONFIGURATION,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.NetworkConfiguration)
  })
_sym_db.RegisterMessage(NetworkConfiguration)

UpdateMarket = _reflection.GeneratedProtocolMessageType('UpdateMarket', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEMARKET,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.UpdateMarket)
  })
_sym_db.RegisterMessage(UpdateMarket)

NewMarket = _reflection.GeneratedProtocolMessageType('NewMarket', (_message.Message,), {
  'DESCRIPTOR' : _NEWMARKET,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.NewMarket)
  })
_sym_db.RegisterMessage(NewMarket)

UpdateNetwork = _reflection.GeneratedProtocolMessageType('UpdateNetwork', (_message.Message,), {
  'DESCRIPTOR' : _UPDATENETWORK,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.UpdateNetwork)
  })
_sym_db.RegisterMessage(UpdateNetwork)

NewAsset = _reflection.GeneratedProtocolMessageType('NewAsset', (_message.Message,), {
  'DESCRIPTOR' : _NEWASSET,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.NewAsset)
  })
_sym_db.RegisterMessage(NewAsset)

ProposalTerms = _reflection.GeneratedProtocolMessageType('ProposalTerms', (_message.Message,), {
  'DESCRIPTOR' : _PROPOSALTERMS,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.ProposalTerms)
  })
_sym_db.RegisterMessage(ProposalTerms)

GovernanceData = _reflection.GeneratedProtocolMessageType('GovernanceData', (_message.Message,), {
  'DESCRIPTOR' : _GOVERNANCEDATA,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.GovernanceData)
  })
_sym_db.RegisterMessage(GovernanceData)

Proposal = _reflection.GeneratedProtocolMessageType('Proposal', (_message.Message,), {
  'DESCRIPTOR' : _PROPOSAL,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.Proposal)
  })
_sym_db.RegisterMessage(Proposal)

Vote = _reflection.GeneratedProtocolMessageType('Vote', (_message.Message,), {
  'DESCRIPTOR' : _VOTE,
  '__module__' : 'proto.governance_pb2'
  # @@protoc_insertion_point(class_scope:vega.Vote)
  })
_sym_db.RegisterMessage(Vote)


DESCRIPTOR._options = None
_NEWMARKET.fields_by_name['changes']._options = None
_UPDATENETWORK.fields_by_name['changes']._options = None
_NEWASSET.fields_by_name['changes']._options = None
_PROPOSALTERMS.fields_by_name['closingTimestamp']._options = None
_PROPOSALTERMS.fields_by_name['enactmentTimestamp']._options = None
_PROPOSALTERMS.fields_by_name['minParticipationStake']._options = None
_PROPOSAL.fields_by_name['partyID']._options = None
_PROPOSAL.fields_by_name['state']._options = None
_PROPOSAL.fields_by_name['terms']._options = None
_VOTE.fields_by_name['partyID']._options = None
_VOTE.fields_by_name['value']._options = None
_VOTE.fields_by_name['proposalID']._options = None
# @@protoc_insertion_point(module_scope)
