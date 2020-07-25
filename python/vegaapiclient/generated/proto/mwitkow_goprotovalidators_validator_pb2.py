# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/mwitkow/go-proto-validators/validator.proto

from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import descriptor_pb2 as google_dot_protobuf_dot_descriptor__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/mwitkow/go-proto-validators/validator.proto',
  package='validator',
  syntax='proto2',
  serialized_options=b'Z\tvalidator',
  serialized_pb=b'\n6github.com/mwitkow/go-proto-validators/validator.proto\x12\tvalidator\x1a google/protobuf/descriptor.proto\"\xfa\x02\n\x0e\x46ieldValidator\x12\r\n\x05regex\x18\x01 \x01(\t\x12\x0e\n\x06int_gt\x18\x02 \x01(\x03\x12\x0e\n\x06int_lt\x18\x03 \x01(\x03\x12\x12\n\nmsg_exists\x18\x04 \x01(\x08\x12\x13\n\x0bhuman_error\x18\x05 \x01(\t\x12\x10\n\x08\x66loat_gt\x18\x06 \x01(\x01\x12\x10\n\x08\x66loat_lt\x18\x07 \x01(\x01\x12\x15\n\rfloat_epsilon\x18\x08 \x01(\x01\x12\x11\n\tfloat_gte\x18\t \x01(\x01\x12\x11\n\tfloat_lte\x18\n \x01(\x01\x12\x18\n\x10string_not_empty\x18\x0b \x01(\x08\x12\x1a\n\x12repeated_count_min\x18\x0c \x01(\x03\x12\x1a\n\x12repeated_count_max\x18\r \x01(\x03\x12\x11\n\tlength_gt\x18\x0e \x01(\x03\x12\x11\n\tlength_lt\x18\x0f \x01(\x03\x12\x11\n\tlength_eq\x18\x10 \x01(\x03\x12\x12\n\nis_in_enum\x18\x11 \x01(\x08\x12\x10\n\x08uuid_ver\x18\x12 \x01(\x05\"\"\n\x0eOneofValidator\x12\x10\n\x08required\x18\x01 \x01(\x08:I\n\x05\x66ield\x12\x1d.google.protobuf.FieldOptions\x18\xfc\xfb\x03 \x01(\x0b\x32\x19.validator.FieldValidator:I\n\x05oneof\x12\x1d.google.protobuf.OneofOptions\x18\xfd\xfb\x03 \x01(\x0b\x32\x19.validator.OneofValidatorB\x0bZ\tvalidator'
  ,
  dependencies=[google_dot_protobuf_dot_descriptor__pb2.DESCRIPTOR,])


FIELD_FIELD_NUMBER = 65020
field = _descriptor.FieldDescriptor(
  name='field', full_name='validator.field', index=0,
  number=65020, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, file=DESCRIPTOR)
ONEOF_FIELD_NUMBER = 65021
oneof = _descriptor.FieldDescriptor(
  name='oneof', full_name='validator.oneof', index=1,
  number=65021, type=11, cpp_type=10, label=1,
  has_default_value=False, default_value=None,
  message_type=None, enum_type=None, containing_type=None,
  is_extension=True, extension_scope=None,
  serialized_options=None, file=DESCRIPTOR)


_FIELDVALIDATOR = _descriptor.Descriptor(
  name='FieldValidator',
  full_name='validator.FieldValidator',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='regex', full_name='validator.FieldValidator.regex', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='int_gt', full_name='validator.FieldValidator.int_gt', index=1,
      number=2, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='int_lt', full_name='validator.FieldValidator.int_lt', index=2,
      number=3, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='msg_exists', full_name='validator.FieldValidator.msg_exists', index=3,
      number=4, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='human_error', full_name='validator.FieldValidator.human_error', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='float_gt', full_name='validator.FieldValidator.float_gt', index=5,
      number=6, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='float_lt', full_name='validator.FieldValidator.float_lt', index=6,
      number=7, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='float_epsilon', full_name='validator.FieldValidator.float_epsilon', index=7,
      number=8, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='float_gte', full_name='validator.FieldValidator.float_gte', index=8,
      number=9, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='float_lte', full_name='validator.FieldValidator.float_lte', index=9,
      number=10, type=1, cpp_type=5, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='string_not_empty', full_name='validator.FieldValidator.string_not_empty', index=10,
      number=11, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='repeated_count_min', full_name='validator.FieldValidator.repeated_count_min', index=11,
      number=12, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='repeated_count_max', full_name='validator.FieldValidator.repeated_count_max', index=12,
      number=13, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='length_gt', full_name='validator.FieldValidator.length_gt', index=13,
      number=14, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='length_lt', full_name='validator.FieldValidator.length_lt', index=14,
      number=15, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='length_eq', full_name='validator.FieldValidator.length_eq', index=15,
      number=16, type=3, cpp_type=2, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='is_in_enum', full_name='validator.FieldValidator.is_in_enum', index=16,
      number=17, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='uuid_ver', full_name='validator.FieldValidator.uuid_ver', index=17,
      number=18, type=5, cpp_type=1, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=104,
  serialized_end=482,
)


_ONEOFVALIDATOR = _descriptor.Descriptor(
  name='OneofValidator',
  full_name='validator.OneofValidator',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='required', full_name='validator.OneofValidator.required', index=0,
      number=1, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=484,
  serialized_end=518,
)

DESCRIPTOR.message_types_by_name['FieldValidator'] = _FIELDVALIDATOR
DESCRIPTOR.message_types_by_name['OneofValidator'] = _ONEOFVALIDATOR
DESCRIPTOR.extensions_by_name['field'] = field
DESCRIPTOR.extensions_by_name['oneof'] = oneof
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

FieldValidator = _reflection.GeneratedProtocolMessageType('FieldValidator', (_message.Message,), {
  'DESCRIPTOR' : _FIELDVALIDATOR,
  '__module__' : 'github.com.mwitkow.go_proto_validators.validator_pb2'
  # @@protoc_insertion_point(class_scope:validator.FieldValidator)
  })
_sym_db.RegisterMessage(FieldValidator)

OneofValidator = _reflection.GeneratedProtocolMessageType('OneofValidator', (_message.Message,), {
  'DESCRIPTOR' : _ONEOFVALIDATOR,
  '__module__' : 'github.com.mwitkow.go_proto_validators.validator_pb2'
  # @@protoc_insertion_point(class_scope:validator.OneofValidator)
  })
_sym_db.RegisterMessage(OneofValidator)

field.message_type = _FIELDVALIDATOR
google_dot_protobuf_dot_descriptor__pb2.FieldOptions.RegisterExtension(field)
oneof.message_type = _ONEOFVALIDATOR
google_dot_protobuf_dot_descriptor__pb2.OneofOptions.RegisterExtension(oneof)

DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
