var searchIndex = {};
searchIndex['kinetic-bench'] = {"items":[],"paths":[]};
searchIndex['kinetic'] = {"items":[[0,"","kinetic","Kinetic protocol library in Rust"],[1,"Client","","The Kinetic device client"],[3,"version","","Returns the current version of the package"],[0,"commands","","Available Kinetic commands"],[1,"Get","kinetic::commands","Get's the value and the metadata for the given key"],[11,"key","","",0],[1,"Put","","Stores the value asociated with the key"],[11,"key","","Key to store.",1],[11,"value","","Value to store associated with the `key`.",1],[11,"new_version","","The version of the `value` being stored.",1],[11,"current_version","","The version of value currently stored in the device.",1],[11,"synchronization","","Write synchronization mode",1],[11,"integrity","","End to end data integrity",1],[1,"GetLog","","Get's the requested logs"],[11,"log_types","","",2],[1,"GetKeyRange","","Requests a range of keys between two given keys"],[11,"start","","",3],[11,"end","","",3],[11,"start_inclusive","","",3],[11,"end_inclusive","","",3],[11,"max_returned","","",3],[11,"reverse","","",3],[1,"GetVersion","","Get's the version and integrity for the given key"],[11,"key","","",4],[1,"GetNext","","Get's the value and the metadata for the given key following the given key"],[11,"key","","",5],[1,"GetPrevious","","Get's the value and the metadata for the key before the given key"],[11,"key","","",6],[1,"Noop","","Sends a Noop to the Kinetic device"],[1,"Flush","","Sends a flush command to the Kinetic device"],[2,"Delete","","Deletes the key"],[12,"Versioned","","",7],[12,"Forced","","",7],[10,"build_proto","","",0],[10,"default","","",1],[10,"build_proto","","",1],[10,"build_proto","","",2],[10,"build_proto","","",7],[10,"build_proto","","",3],[10,"build_proto","","",4],[10,"build_proto","","",5],[10,"build_proto","","",6],[10,"build_proto","","",8],[10,"build_proto","","",9],[0,"pin","","Pin based commands"],[1,"Unlock","kinetic::commands::pin","Unlocks the device"],[10,"build_proto","","",10],[6,"PinCommand","","Trait representing a Kinetic pin based command"],[0,"common","kinetic::commands",""],[1,"Integrity","kinetic::commands::common","Point-to-point data integrity"],[11,"tag","","",11],[11,"algorithm","","",11],[2,"Versioning","","Version checking modes for operations"],[12,"Match","","Match current version",12],[12,"Force","","Force the operation without checks",12],[10,"fmt","","",11],[0,"responses","kinetic","Kinetic responses for available commands"],[1,"GetResponse","kinetic::responses","A `Get` command result"],[11,"value","","",13],[11,"version","","",13],[11,"integrity","","",13],[1,"GetKeyRangeResponse","","A `GetKeyRange` command result"],[11,"keys","","",14],[1,"GetVersionResponse","","A `GetVersion` command result"],[11,"version","","",15],[11,"integrity","","",15],[1,"GetNextResponse","","A `GetNext` command result"],[11,"value","","",16],[11,"version","","",16],[11,"integrity","","",16],[1,"GetPreviousResponse","","A `GetPrevious` command result"],[11,"value","","",17],[11,"version","","",17],[11,"integrity","","",17],[10,"fmt","","",13],[10,"from_proto","","",13],[10,"from_proto","","",14],[10,"fmt","","",15],[10,"from_proto","","",15],[10,"fmt","","",16],[10,"from_proto","","",16],[10,"fmt","","",17],[10,"from_proto","","",17],[0,"pin","","Kinetic responses for available pin commands"],[4,"UnlockResponse","kinetic::responses::pin","An `Unlock` command result"],[4,"GetLogResponse","kinetic::responses","A `GetLog` command result"],[4,"PutResponse","","A `Put` command result"],[4,"DeleteResponse","","A `Delete` command result"],[4,"NoopResponse","","A `Noop` command result"],[4,"FlushResponse","","A `Flush` command result"],[0,"error","kinetic","Kinetic error handling"],[2,"KineticError","kinetic::error","Enum representing possible Kinetic errors"],[12,"IoError","","",18],[12,"ProtobufError","","",18],[12,"InvalidMagicNumber","","",18],[12,"RemoteError","","",18],[10,"fmt","","",18],[10,"description","","",18],[10,"detail","","",18],[10,"cause","","",18],[10,"from_error","","",18],[10,"from_error","","",18],[0,"result","kinetic","Kinetic result"],[4,"KineticResult","kinetic::result","Kinetic result"],[0,"proto","kinetic","Public exports of the raw proto generated files"],[1,"Command","kinetic::proto",""],[1,"Message","",""],[2,"StatusCode","",""],[12,"INVALID_STATUS_CODE","","",19],[12,"NOT_ATTEMPTED","","",19],[12,"SUCCESS","","",19],[12,"HMAC_FAILURE","","",19],[12,"NOT_AUTHORIZED","","",19],[12,"VERSION_FAILURE","","",19],[12,"INTERNAL_ERROR","","",19],[12,"HEADER_REQUIRED","","",19],[12,"NOT_FOUND","","",19],[12,"VERSION_MISMATCH","","",19],[12,"SERVICE_BUSY","","",19],[12,"EXPIRED","","",19],[12,"DATA_ERROR","","",19],[12,"PERM_DATA_ERROR","","",19],[12,"REMOTE_CONNECTION_ERROR","","",19],[12,"NO_SPACE","","",19],[12,"NO_SUCH_HMAC_ALGORITHM","","",19],[12,"INVALID_REQUEST","","",19],[12,"NESTED_OPERATION_ERRORS","","",19],[12,"DEVICE_LOCKED","","",19],[12,"DEVICE_ALREADY_UNLOCKED","","",19],[12,"CONNECTION_TERMINATED","","",19],[3,"version","","Returns the version of the Kinetic Protocol"],[10,"default","","",20],[10,"clone","","",20],[10,"new","","",20],[10,"default_instance","","",20],[10,"clear_authType","","",20],[10,"has_authType","","",20],[10,"set_authType","","",20],[10,"get_authType","","",20],[10,"clear_hmacAuth","","",20],[10,"has_hmacAuth","","",20],[10,"set_hmacAuth","","",20],[10,"mut_hmacAuth","","",20],[10,"take_hmacAuth","","",20],[10,"get_hmacAuth","","",20],[10,"clear_pinAuth","","",20],[10,"has_pinAuth","","",20],[10,"set_pinAuth","","",20],[10,"mut_pinAuth","","",20],[10,"take_pinAuth","","",20],[10,"get_pinAuth","","",20],[10,"clear_commandBytes","","",20],[10,"has_commandBytes","","",20],[10,"set_commandBytes","","",20],[10,"mut_commandBytes","","",20],[10,"take_commandBytes","","",20],[10,"get_commandBytes","","",20],[10,"new","","",20],[10,"is_initialized","","",20],[10,"merge_from","","",20],[10,"compute_size","","",20],[10,"write_to_with_cached_sizes","","",20],[10,"get_cached_size","","",20],[10,"get_unknown_fields","","",20],[10,"mut_unknown_fields","","",20],[10,"descriptor_static","","",20],[10,"type_id","","",20],[10,"clear","","",20],[10,"eq","","",20],[10,"fmt","","",20],[10,"default","","",21],[10,"clone","","",21],[10,"new","","",21],[10,"default_instance","","",21],[10,"clear_header","","",21],[10,"has_header","","",21],[10,"set_header","","",21],[10,"mut_header","","",21],[10,"take_header","","",21],[10,"get_header","","",21],[10,"clear_body","","",21],[10,"has_body","","",21],[10,"set_body","","",21],[10,"mut_body","","",21],[10,"take_body","","",21],[10,"get_body","","",21],[10,"clear_status","","",21],[10,"has_status","","",21],[10,"set_status","","",21],[10,"mut_status","","",21],[10,"take_status","","",21],[10,"get_status","","",21],[10,"new","","",21],[10,"is_initialized","","",21],[10,"merge_from","","",21],[10,"compute_size","","",21],[10,"write_to_with_cached_sizes","","",21],[10,"get_cached_size","","",21],[10,"get_unknown_fields","","",21],[10,"mut_unknown_fields","","",21],[10,"descriptor_static","","",21],[10,"type_id","","",21],[10,"clear","","",21],[10,"eq","","",21],[10,"fmt","","",21],[10,"fmt","","",19],[10,"eq","","",19],[10,"ne","","",19],[10,"clone","","",19],[10,"value","","",19],[10,"from_i32","","",19],[10,"enum_descriptor_static","","",19],[0,"message","",""],[1,"HmacAuth","kinetic::proto::message",""],[1,"PinAuth","",""],[2,"AuthType","",""],[12,"INVALID_AUTH_TYPE","","",22],[12,"HMACAUTH","","",22],[12,"PINAUTH","","",22],[12,"UNSOLICITEDSTATUS","","",22],[0,"command","kinetic::proto",""],[1,"Header","kinetic::proto::command",""],[1,"Body","",""],[1,"Status","",""],[1,"KeyValue","",""],[1,"Range","",""],[1,"GetLog","",""],[1,"PinOperation","",""],[2,"MessageType","",""],[12,"INVALID_MESSAGE_TYPE","","",23],[12,"GET","","",23],[12,"GET_RESPONSE","","",23],[12,"PUT","","",23],[12,"PUT_RESPONSE","","",23],[12,"DELETE","","",23],[12,"DELETE_RESPONSE","","",23],[12,"GETNEXT","","",23],[12,"GETNEXT_RESPONSE","","",23],[12,"GETPREVIOUS","","",23],[12,"GETPREVIOUS_RESPONSE","","",23],[12,"GETKEYRANGE","","",23],[12,"GETKEYRANGE_RESPONSE","","",23],[12,"GETVERSION","","",23],[12,"GETVERSION_RESPONSE","","",23],[12,"SETUP","","",23],[12,"SETUP_RESPONSE","","",23],[12,"GETLOG","","",23],[12,"GETLOG_RESPONSE","","",23],[12,"SECURITY","","",23],[12,"SECURITY_RESPONSE","","",23],[12,"PEER2PEERPUSH","","",23],[12,"PEER2PEERPUSH_RESPONSE","","",23],[12,"NOOP","","",23],[12,"NOOP_RESPONSE","","",23],[12,"FLUSHALLDATA","","",23],[12,"FLUSHALLDATA_RESPONSE","","",23],[12,"PINOP","","",23],[12,"PINOP_RESPONSE","","",23],[12,"MEDIASCAN","","",23],[12,"MEDIASCAN_RESPONSE","","",23],[12,"MEDIAOPTIMIZE","","",23],[12,"MEDIAOPTIMIZE_RESPONSE","","",23],[2,"Algorithm","",""],[12,"INVALID_ALGORITHM","","",24],[12,"SHA1","","",24],[12,"SHA2","","",24],[12,"SHA3","","",24],[12,"CRC32","","",24],[12,"CRC64","","",24],[2,"Synchronization","",""],[12,"INVALID_SYNCHRONIZATION","","",25],[12,"WRITETHROUGH","","",25],[12,"WRITEBACK","","",25],[12,"FLUSH","","",25],[2,"LogType","",""],[12,"INVALID_TYPE","","",26],[12,"UTILIZATIONS","","",26],[12,"TEMPERATURES","","",26],[12,"CAPACITIES","","",26],[12,"CONFIGURATION","","",26],[12,"STATISTICS","","",26],[12,"MESSAGES","","",26],[12,"LIMITS","","",26],[12,"DEVICE","","",26],[2,"PinOpTypes","",""],[12,"INVALID_PINOP","","",27],[12,"UNLOCK_PINOP","","",27],[12,"LOCK_PINOP","","",27],[12,"ERASE_PINOP","","",27],[12,"SECURE_ERASE_PINOP","","",27],[0,"log","",""],[1,"Utilization","kinetic::proto::command::log",""],[1,"Temperature","",""],[1,"Capacity","",""],[1,"Configuration","",""],[1,"Statistics","",""],[1,"Limits","",""],[0,"channel","kinetic","Module representing raw communication channels with a kinetic device"],[1,"AsyncChannel","kinetic::channel",""],[4,"Operation","",""],[4,"Result","",""],[6,"KineticChannel","",""],[9,"is_closed","","",28],[9,"get_configuration","","",28],[9,"get_limits","","",28],[9,"send","","",28],[9,"receive","","",28],[9,"get_unsolicited_receiver","","",28],[10,"drop","","",29],[10,"new","","",29],[10,"is_closed","","",29],[10,"get_unsolicited_receiver","","",29],[10,"get_configuration","","",29],[10,"get_limits","","",29],[10,"send","","",29],[10,"receive","","",29],[0,"authentication","kinetic","Kinetic authentication mechanisms"],[2,"Method","kinetic::authentication","Kinetic authentication methods"],[12,"Hmac","","Authenticates a message with an `identity` and a `key`",30],[12,"Pin","","Authenticates a message with an `pin`",30],[10,"clone","","",30],[10,"authenticate_proto","","",30],[10,"verify_proto","","",30],[10,"default","","",30],[10,"new","kinetic","Creates a new `Client` backed by an `AsyncChannel`",31],[10,"new_with_channel","","Creates a new `Client` with an specific `KineticChannel`",31],[10,"set_cluster_version","","",31],[10,"get_config","","Gets the device `Configuration` received during _handshake_",31],[10,"get_limits","","Gets the device `Limits` received during _handshake_",31],[10,"send","","Sends a `Command` to the target device an waits for the `Response`",31],[10,"send_with_pin","","Sends a `PinCommand` to the target device an waits for the `Response`",31],[10,"new_with_credentials","","",31],[10,"send_future","","",31],[6,"Command","","Trait representing a Kinetic command"],[9,"build_proto","","Build the raw kinetic proto structure for the Command",32],[6,"Response","","Trait representing a Kinetic response"],[9,"from_proto","","Create a Response un populate it with values from the raw kinetic proto",33],[10,"from_proto","kinetic::responses","",34],[10,"default","kinetic::proto::message","",35],[10,"clone","","",35],[10,"new","","",35],[10,"default_instance","","",35],[10,"clear_identity","","",35],[10,"has_identity","","",35],[10,"set_identity","","",35],[10,"get_identity","","",35],[10,"clear_hmac","","",35],[10,"has_hmac","","",35],[10,"set_hmac","","",35],[10,"mut_hmac","","",35],[10,"take_hmac","","",35],[10,"get_hmac","","",35],[10,"new","","",35],[10,"is_initialized","","",35],[10,"merge_from","","",35],[10,"compute_size","","",35],[10,"write_to_with_cached_sizes","","",35],[10,"get_cached_size","","",35],[10,"get_unknown_fields","","",35],[10,"mut_unknown_fields","","",35],[10,"descriptor_static","","",35],[10,"type_id","","",35],[10,"clear","","",35],[10,"eq","","",35],[10,"fmt","","",35],[10,"default","","",36],[10,"clone","","",36],[10,"new","","",36],[10,"default_instance","","",36],[10,"clear_pin","","",36],[10,"has_pin","","",36],[10,"set_pin","","",36],[10,"mut_pin","","",36],[10,"take_pin","","",36],[10,"get_pin","","",36],[10,"new","","",36],[10,"is_initialized","","",36],[10,"merge_from","","",36],[10,"compute_size","","",36],[10,"write_to_with_cached_sizes","","",36],[10,"get_cached_size","","",36],[10,"get_unknown_fields","","",36],[10,"mut_unknown_fields","","",36],[10,"descriptor_static","","",36],[10,"type_id","","",36],[10,"clear","","",36],[10,"eq","","",36],[10,"fmt","","",36],[10,"fmt","","",22],[10,"eq","","",22],[10,"ne","","",22],[10,"clone","","",22],[10,"value","","",22],[10,"from_i32","","",22],[10,"enum_descriptor_static","","",22],[10,"default","kinetic::proto::command","",37],[10,"clone","","",37],[10,"new","","",37],[10,"default_instance","","",37],[10,"clear_clusterVersion","","",37],[10,"has_clusterVersion","","",37],[10,"set_clusterVersion","","",37],[10,"get_clusterVersion","","",37],[10,"clear_connectionID","","",37],[10,"has_connectionID","","",37],[10,"set_connectionID","","",37],[10,"get_connectionID","","",37],[10,"clear_sequence","","",37],[10,"has_sequence","","",37],[10,"set_sequence","","",37],[10,"get_sequence","","",37],[10,"clear_ackSequence","","",37],[10,"has_ackSequence","","",37],[10,"set_ackSequence","","",37],[10,"get_ackSequence","","",37],[10,"clear_messageType","","",37],[10,"has_messageType","","",37],[10,"set_messageType","","",37],[10,"get_messageType","","",37],[10,"clear_timeout","","",37],[10,"has_timeout","","",37],[10,"set_timeout","","",37],[10,"get_timeout","","",37],[10,"clear_earlyExit","","",37],[10,"has_earlyExit","","",37],[10,"set_earlyExit","","",37],[10,"get_earlyExit","","",37],[10,"clear_priority","","",37],[10,"has_priority","","",37],[10,"set_priority","","",37],[10,"get_priority","","",37],[10,"clear_TimeQuanta","","",37],[10,"has_TimeQuanta","","",37],[10,"set_TimeQuanta","","",37],[10,"get_TimeQuanta","","",37],[10,"new","","",37],[10,"is_initialized","","",37],[10,"merge_from","","",37],[10,"compute_size","","",37],[10,"write_to_with_cached_sizes","","",37],[10,"get_cached_size","","",37],[10,"get_unknown_fields","","",37],[10,"mut_unknown_fields","","",37],[10,"descriptor_static","","",37],[10,"type_id","","",37],[10,"clear","","",37],[10,"eq","","",37],[10,"fmt","","",37],[10,"default","","",38],[10,"clone","","",38],[10,"new","","",38],[10,"default_instance","","",38],[10,"clear_keyValue","","",38],[10,"has_keyValue","","",38],[10,"set_keyValue","","",38],[10,"mut_keyValue","","",38],[10,"take_keyValue","","",38],[10,"get_keyValue","","",38],[10,"clear_range","","",38],[10,"has_range","","",38],[10,"set_range","","",38],[10,"mut_range","","",38],[10,"take_range","","",38],[10,"get_range","","",38],[10,"clear_setup","","",38],[10,"has_setup","","",38],[10,"set_setup","","",38],[10,"mut_setup","","",38],[10,"take_setup","","",38],[10,"get_setup","","",38],[10,"clear_p2pOperation","","",38],[10,"has_p2pOperation","","",38],[10,"set_p2pOperation","","",38],[10,"mut_p2pOperation","","",38],[10,"take_p2pOperation","","",38],[10,"get_p2pOperation","","",38],[10,"clear_getLog","","",38],[10,"has_getLog","","",38],[10,"set_getLog","","",38],[10,"mut_getLog","","",38],[10,"take_getLog","","",38],[10,"get_getLog","","",38],[10,"clear_security","","",38],[10,"has_security","","",38],[10,"set_security","","",38],[10,"mut_security","","",38],[10,"take_security","","",38],[10,"get_security","","",38],[10,"clear_pinOp","","",38],[10,"has_pinOp","","",38],[10,"set_pinOp","","",38],[10,"mut_pinOp","","",38],[10,"take_pinOp","","",38],[10,"get_pinOp","","",38],[10,"new","","",38],[10,"is_initialized","","",38],[10,"merge_from","","",38],[10,"compute_size","","",38],[10,"write_to_with_cached_sizes","","",38],[10,"get_cached_size","","",38],[10,"get_unknown_fields","","",38],[10,"mut_unknown_fields","","",38],[10,"descriptor_static","","",38],[10,"type_id","","",38],[10,"clear","","",38],[10,"eq","","",38],[10,"fmt","","",38],[10,"default","","",39],[10,"clone","","",39],[10,"new","","",39],[10,"default_instance","","",39],[10,"clear_code","","",39],[10,"has_code","","",39],[10,"set_code","","",39],[10,"get_code","","",39],[10,"clear_statusMessage","","",39],[10,"has_statusMessage","","",39],[10,"set_statusMessage","","",39],[10,"mut_statusMessage","","",39],[10,"take_statusMessage","","",39],[10,"get_statusMessage","","",39],[10,"clear_detailedMessage","","",39],[10,"has_detailedMessage","","",39],[10,"set_detailedMessage","","",39],[10,"mut_detailedMessage","","",39],[10,"take_detailedMessage","","",39],[10,"get_detailedMessage","","",39],[10,"new","","",39],[10,"is_initialized","","",39],[10,"merge_from","","",39],[10,"compute_size","","",39],[10,"write_to_with_cached_sizes","","",39],[10,"get_cached_size","","",39],[10,"get_unknown_fields","","",39],[10,"mut_unknown_fields","","",39],[10,"descriptor_static","","",39],[10,"type_id","","",39],[10,"clear","","",39],[10,"eq","","",39],[10,"fmt","","",39],[10,"default","","",40],[10,"clone","","",40],[10,"new","","",40],[10,"default_instance","","",40],[10,"clear_newVersion","","",40],[10,"has_newVersion","","",40],[10,"set_newVersion","","",40],[10,"mut_newVersion","","",40],[10,"take_newVersion","","",40],[10,"get_newVersion","","",40],[10,"clear_force","","",40],[10,"has_force","","",40],[10,"set_force","","",40],[10,"get_force","","",40],[10,"clear_key","","",40],[10,"has_key","","",40],[10,"set_key","","",40],[10,"mut_key","","",40],[10,"take_key","","",40],[10,"get_key","","",40],[10,"clear_dbVersion","","",40],[10,"has_dbVersion","","",40],[10,"set_dbVersion","","",40],[10,"mut_dbVersion","","",40],[10,"take_dbVersion","","",40],[10,"get_dbVersion","","",40],[10,"clear_tag","","",40],[10,"has_tag","","",40],[10,"set_tag","","",40],[10,"mut_tag","","",40],[10,"take_tag","","",40],[10,"get_tag","","",40],[10,"clear_algorithm","","",40],[10,"has_algorithm","","",40],[10,"set_algorithm","","",40],[10,"get_algorithm","","",40],[10,"clear_metadataOnly","","",40],[10,"has_metadataOnly","","",40],[10,"set_metadataOnly","","",40],[10,"get_metadataOnly","","",40],[10,"clear_synchronization","","",40],[10,"has_synchronization","","",40],[10,"set_synchronization","","",40],[10,"get_synchronization","","",40],[10,"new","","",40],[10,"is_initialized","","",40],[10,"merge_from","","",40],[10,"compute_size","","",40],[10,"write_to_with_cached_sizes","","",40],[10,"get_cached_size","","",40],[10,"get_unknown_fields","","",40],[10,"mut_unknown_fields","","",40],[10,"descriptor_static","","",40],[10,"type_id","","",40],[10,"clear","","",40],[10,"eq","","",40],[10,"fmt","","",40],[10,"default","","",41],[10,"clone","","",41],[10,"new","","",41],[10,"default_instance","","",41],[10,"clear_startKey","","",41],[10,"has_startKey","","",41],[10,"set_startKey","","",41],[10,"mut_startKey","","",41],[10,"take_startKey","","",41],[10,"get_startKey","","",41],[10,"clear_endKey","","",41],[10,"has_endKey","","",41],[10,"set_endKey","","",41],[10,"mut_endKey","","",41],[10,"take_endKey","","",41],[10,"get_endKey","","",41],[10,"clear_startKeyInclusive","","",41],[10,"has_startKeyInclusive","","",41],[10,"set_startKeyInclusive","","",41],[10,"get_startKeyInclusive","","",41],[10,"clear_endKeyInclusive","","",41],[10,"has_endKeyInclusive","","",41],[10,"set_endKeyInclusive","","",41],[10,"get_endKeyInclusive","","",41],[10,"clear_maxReturned","","",41],[10,"has_maxReturned","","",41],[10,"set_maxReturned","","",41],[10,"get_maxReturned","","",41],[10,"clear_reverse","","",41],[10,"has_reverse","","",41],[10,"set_reverse","","",41],[10,"get_reverse","","",41],[10,"clear_keys","","",41],[10,"set_keys","","",41],[10,"mut_keys","","",41],[10,"take_keys","","",41],[10,"get_keys","","",41],[10,"new","","",41],[10,"is_initialized","","",41],[10,"merge_from","","",41],[10,"compute_size","","",41],[10,"write_to_with_cached_sizes","","",41],[10,"get_cached_size","","",41],[10,"get_unknown_fields","","",41],[10,"mut_unknown_fields","","",41],[10,"descriptor_static","","",41],[10,"type_id","","",41],[10,"clear","","",41],[10,"eq","","",41],[10,"fmt","","",41],[10,"default","","",42],[10,"clone","","",42],[10,"new","","",42],[10,"default_instance","","",42],[10,"clear_types","","",42],[10,"set_types","","",42],[10,"mut_types","","",42],[10,"take_types","","",42],[10,"get_types","","",42],[10,"clear_utilizations","","",42],[10,"set_utilizations","","",42],[10,"mut_utilizations","","",42],[10,"take_utilizations","","",42],[10,"get_utilizations","","",42],[10,"clear_temperatures","","",42],[10,"set_temperatures","","",42],[10,"mut_temperatures","","",42],[10,"take_temperatures","","",42],[10,"get_temperatures","","",42],[10,"clear_capacity","","",42],[10,"has_capacity","","",42],[10,"set_capacity","","",42],[10,"mut_capacity","","",42],[10,"take_capacity","","",42],[10,"get_capacity","","",42],[10,"clear_configuration","","",42],[10,"has_configuration","","",42],[10,"set_configuration","","",42],[10,"mut_configuration","","",42],[10,"take_configuration","","",42],[10,"get_configuration","","",42],[10,"clear_statistics","","",42],[10,"set_statistics","","",42],[10,"mut_statistics","","",42],[10,"take_statistics","","",42],[10,"get_statistics","","",42],[10,"clear_messages","","",42],[10,"has_messages","","",42],[10,"set_messages","","",42],[10,"mut_messages","","",42],[10,"take_messages","","",42],[10,"get_messages","","",42],[10,"clear_limits","","",42],[10,"has_limits","","",42],[10,"set_limits","","",42],[10,"mut_limits","","",42],[10,"take_limits","","",42],[10,"get_limits","","",42],[10,"clear_device","","",42],[10,"has_device","","",42],[10,"set_device","","",42],[10,"mut_device","","",42],[10,"take_device","","",42],[10,"get_device","","",42],[10,"new","","",42],[10,"is_initialized","","",42],[10,"merge_from","","",42],[10,"compute_size","","",42],[10,"write_to_with_cached_sizes","","",42],[10,"get_cached_size","","",42],[10,"get_unknown_fields","","",42],[10,"mut_unknown_fields","","",42],[10,"descriptor_static","","",42],[10,"type_id","","",42],[10,"clear","","",42],[10,"eq","","",42],[10,"fmt","","",42],[10,"default","kinetic::proto::command::log","",43],[10,"clone","","",43],[10,"new","","",43],[10,"default_instance","","",43],[10,"clear_name","","",43],[10,"has_name","","",43],[10,"set_name","","",43],[10,"mut_name","","",43],[10,"take_name","","",43],[10,"get_name","","",43],[10,"clear_value","","",43],[10,"has_value","","",43],[10,"set_value","","",43],[10,"get_value","","",43],[10,"new","","",43],[10,"is_initialized","","",43],[10,"merge_from","","",43],[10,"compute_size","","",43],[10,"write_to_with_cached_sizes","","",43],[10,"get_cached_size","","",43],[10,"get_unknown_fields","","",43],[10,"mut_unknown_fields","","",43],[10,"descriptor_static","","",43],[10,"type_id","","",43],[10,"clear","","",43],[10,"eq","","",43],[10,"fmt","","",43],[10,"default","","",44],[10,"clone","","",44],[10,"new","","",44],[10,"default_instance","","",44],[10,"clear_name","","",44],[10,"has_name","","",44],[10,"set_name","","",44],[10,"mut_name","","",44],[10,"take_name","","",44],[10,"get_name","","",44],[10,"clear_current","","",44],[10,"has_current","","",44],[10,"set_current","","",44],[10,"get_current","","",44],[10,"clear_minimum","","",44],[10,"has_minimum","","",44],[10,"set_minimum","","",44],[10,"get_minimum","","",44],[10,"clear_maximum","","",44],[10,"has_maximum","","",44],[10,"set_maximum","","",44],[10,"get_maximum","","",44],[10,"clear_target","","",44],[10,"has_target","","",44],[10,"set_target","","",44],[10,"get_target","","",44],[10,"new","","",44],[10,"is_initialized","","",44],[10,"merge_from","","",44],[10,"compute_size","","",44],[10,"write_to_with_cached_sizes","","",44],[10,"get_cached_size","","",44],[10,"get_unknown_fields","","",44],[10,"mut_unknown_fields","","",44],[10,"descriptor_static","","",44],[10,"type_id","","",44],[10,"clear","","",44],[10,"eq","","",44],[10,"fmt","","",44],[10,"default","","",45],[10,"clone","","",45],[10,"new","","",45],[10,"default_instance","","",45],[10,"clear_nominalCapacityInBytes","","",45],[10,"has_nominalCapacityInBytes","","",45],[10,"set_nominalCapacityInBytes","","",45],[10,"get_nominalCapacityInBytes","","",45],[10,"clear_portionFull","","",45],[10,"has_portionFull","","",45],[10,"set_portionFull","","",45],[10,"get_portionFull","","",45],[10,"new","","",45],[10,"is_initialized","","",45],[10,"merge_from","","",45],[10,"compute_size","","",45],[10,"write_to_with_cached_sizes","","",45],[10,"get_cached_size","","",45],[10,"get_unknown_fields","","",45],[10,"mut_unknown_fields","","",45],[10,"descriptor_static","","",45],[10,"type_id","","",45],[10,"clear","","",45],[10,"eq","","",45],[10,"fmt","","",45],[10,"default","","",46],[10,"clone","","",46],[10,"new","","",46],[10,"default_instance","","",46],[10,"clear_vendor","","",46],[10,"has_vendor","","",46],[10,"set_vendor","","",46],[10,"mut_vendor","","",46],[10,"take_vendor","","",46],[10,"get_vendor","","",46],[10,"clear_model","","",46],[10,"has_model","","",46],[10,"set_model","","",46],[10,"mut_model","","",46],[10,"take_model","","",46],[10,"get_model","","",46],[10,"clear_serialNumber","","",46],[10,"has_serialNumber","","",46],[10,"set_serialNumber","","",46],[10,"mut_serialNumber","","",46],[10,"take_serialNumber","","",46],[10,"get_serialNumber","","",46],[10,"clear_worldWideName","","",46],[10,"has_worldWideName","","",46],[10,"set_worldWideName","","",46],[10,"mut_worldWideName","","",46],[10,"take_worldWideName","","",46],[10,"get_worldWideName","","",46],[10,"clear_version","","",46],[10,"has_version","","",46],[10,"set_version","","",46],[10,"mut_version","","",46],[10,"take_version","","",46],[10,"get_version","","",46],[10,"clear_compilationDate","","",46],[10,"has_compilationDate","","",46],[10,"set_compilationDate","","",46],[10,"mut_compilationDate","","",46],[10,"take_compilationDate","","",46],[10,"get_compilationDate","","",46],[10,"clear_sourceHash","","",46],[10,"has_sourceHash","","",46],[10,"set_sourceHash","","",46],[10,"mut_sourceHash","","",46],[10,"take_sourceHash","","",46],[10,"get_sourceHash","","",46],[10,"clear_protocolVersion","","",46],[10,"has_protocolVersion","","",46],[10,"set_protocolVersion","","",46],[10,"mut_protocolVersion","","",46],[10,"take_protocolVersion","","",46],[10,"get_protocolVersion","","",46],[10,"clear_protocolCompilationDate","","",46],[10,"has_protocolCompilationDate","","",46],[10,"set_protocolCompilationDate","","",46],[10,"mut_protocolCompilationDate","","",46],[10,"take_protocolCompilationDate","","",46],[10,"get_protocolCompilationDate","","",46],[10,"clear_protocolSourceHash","","",46],[10,"has_protocolSourceHash","","",46],[10,"set_protocolSourceHash","","",46],[10,"mut_protocolSourceHash","","",46],[10,"take_protocolSourceHash","","",46],[10,"get_protocolSourceHash","","",46],[10,"clear_interface","","",46],[10,"set_interface","","",46],[10,"mut_interface","","",46],[10,"take_interface","","",46],[10,"get_interface","","",46],[10,"clear_port","","",46],[10,"has_port","","",46],[10,"set_port","","",46],[10,"get_port","","",46],[10,"clear_tlsPort","","",46],[10,"has_tlsPort","","",46],[10,"set_tlsPort","","",46],[10,"get_tlsPort","","",46],[10,"new","","",46],[10,"is_initialized","","",46],[10,"merge_from","","",46],[10,"compute_size","","",46],[10,"write_to_with_cached_sizes","","",46],[10,"get_cached_size","","",46],[10,"get_unknown_fields","","",46],[10,"mut_unknown_fields","","",46],[10,"descriptor_static","","",46],[10,"type_id","","",46],[10,"clear","","",46],[10,"eq","","",46],[10,"fmt","","",46],[10,"default","","",47],[10,"clone","","",47],[10,"new","","",47],[10,"default_instance","","",47],[10,"clear_messageType","","",47],[10,"has_messageType","","",47],[10,"set_messageType","","",47],[10,"get_messageType","","",47],[10,"clear_count","","",47],[10,"has_count","","",47],[10,"set_count","","",47],[10,"get_count","","",47],[10,"clear_bytes","","",47],[10,"has_bytes","","",47],[10,"set_bytes","","",47],[10,"get_bytes","","",47],[10,"new","","",47],[10,"is_initialized","","",47],[10,"merge_from","","",47],[10,"compute_size","","",47],[10,"write_to_with_cached_sizes","","",47],[10,"get_cached_size","","",47],[10,"get_unknown_fields","","",47],[10,"mut_unknown_fields","","",47],[10,"descriptor_static","","",47],[10,"type_id","","",47],[10,"clear","","",47],[10,"eq","","",47],[10,"fmt","","",47],[10,"default","","",48],[10,"clone","","",48],[10,"new","","",48],[10,"default_instance","","",48],[10,"clear_maxKeySize","","",48],[10,"has_maxKeySize","","",48],[10,"set_maxKeySize","","",48],[10,"get_maxKeySize","","",48],[10,"clear_maxValueSize","","",48],[10,"has_maxValueSize","","",48],[10,"set_maxValueSize","","",48],[10,"get_maxValueSize","","",48],[10,"clear_maxVersionSize","","",48],[10,"has_maxVersionSize","","",48],[10,"set_maxVersionSize","","",48],[10,"get_maxVersionSize","","",48],[10,"clear_maxTagSize","","",48],[10,"has_maxTagSize","","",48],[10,"set_maxTagSize","","",48],[10,"get_maxTagSize","","",48],[10,"clear_maxConnections","","",48],[10,"has_maxConnections","","",48],[10,"set_maxConnections","","",48],[10,"get_maxConnections","","",48],[10,"clear_maxOutstandingReadRequests","","",48],[10,"has_maxOutstandingReadRequests","","",48],[10,"set_maxOutstandingReadRequests","","",48],[10,"get_maxOutstandingReadRequests","","",48],[10,"clear_maxOutstandingWriteRequests","","",48],[10,"has_maxOutstandingWriteRequests","","",48],[10,"set_maxOutstandingWriteRequests","","",48],[10,"get_maxOutstandingWriteRequests","","",48],[10,"clear_maxMessageSize","","",48],[10,"has_maxMessageSize","","",48],[10,"set_maxMessageSize","","",48],[10,"get_maxMessageSize","","",48],[10,"clear_maxKeyRangeCount","","",48],[10,"has_maxKeyRangeCount","","",48],[10,"set_maxKeyRangeCount","","",48],[10,"get_maxKeyRangeCount","","",48],[10,"clear_maxIdentityCount","","",48],[10,"has_maxIdentityCount","","",48],[10,"set_maxIdentityCount","","",48],[10,"get_maxIdentityCount","","",48],[10,"clear_maxPinSize","","",48],[10,"has_maxPinSize","","",48],[10,"set_maxPinSize","","",48],[10,"get_maxPinSize","","",48],[10,"new","","",48],[10,"is_initialized","","",48],[10,"merge_from","","",48],[10,"compute_size","","",48],[10,"write_to_with_cached_sizes","","",48],[10,"get_cached_size","","",48],[10,"get_unknown_fields","","",48],[10,"mut_unknown_fields","","",48],[10,"descriptor_static","","",48],[10,"type_id","","",48],[10,"clear","","",48],[10,"eq","","",48],[10,"fmt","","",48],[10,"fmt","kinetic::proto::command","",26],[10,"eq","","",26],[10,"ne","","",26],[10,"clone","","",26],[10,"value","","",26],[10,"from_i32","","",26],[10,"enum_descriptor_static","","",26],[10,"default","","",49],[10,"clone","","",49],[10,"new","","",49],[10,"default_instance","","",49],[10,"clear_pinOpType","","",49],[10,"has_pinOpType","","",49],[10,"set_pinOpType","","",49],[10,"get_pinOpType","","",49],[10,"new","","",49],[10,"is_initialized","","",49],[10,"merge_from","","",49],[10,"compute_size","","",49],[10,"write_to_with_cached_sizes","","",49],[10,"get_cached_size","","",49],[10,"get_unknown_fields","","",49],[10,"mut_unknown_fields","","",49],[10,"descriptor_static","","",49],[10,"type_id","","",49],[10,"clear","","",49],[10,"eq","","",49],[10,"fmt","","",49],[10,"fmt","","",27],[10,"eq","","",27],[10,"ne","","",27],[10,"clone","","",27],[10,"value","","",27],[10,"from_i32","","",27],[10,"enum_descriptor_static","","",27],[10,"fmt","","",25],[10,"eq","","",25],[10,"ne","","",25],[10,"clone","","",25],[10,"value","","",25],[10,"from_i32","","",25],[10,"enum_descriptor_static","","",25],[10,"fmt","","",24],[10,"eq","","",24],[10,"ne","","",24],[10,"clone","","",24],[10,"value","","",24],[10,"from_i32","","",24],[10,"enum_descriptor_static","","",24],[10,"fmt","","",23],[10,"eq","","",23],[10,"ne","","",23],[10,"clone","","",23],[10,"value","","",23],[10,"from_i32","","",23],[10,"enum_descriptor_static","","",23]],"paths":[[1,"Get"],[1,"Put"],[1,"GetLog"],[1,"GetKeyRange"],[1,"GetVersion"],[1,"GetNext"],[1,"GetPrevious"],[2,"Delete"],[1,"Noop"],[1,"Flush"],[1,"Unlock"],[1,"Integrity"],[2,"Versioning"],[1,"GetResponse"],[1,"GetKeyRangeResponse"],[1,"GetVersionResponse"],[1,"GetNextResponse"],[1,"GetPreviousResponse"],[2,"KineticError"],[2,"StatusCode"],[1,"Message"],[1,"Command"],[2,"AuthType"],[2,"MessageType"],[2,"Algorithm"],[2,"Synchronization"],[2,"LogType"],[2,"PinOpTypes"],[6,"KineticChannel"],[1,"AsyncChannel"],[2,"Method"],[1,"Client"],[6,"Command"],[6,"Response"],[4,"GetLogResponse"],[1,"HmacAuth"],[1,"PinAuth"],[1,"Header"],[1,"Body"],[1,"Status"],[1,"KeyValue"],[1,"Range"],[1,"GetLog"],[1,"Utilization"],[1,"Temperature"],[1,"Capacity"],[1,"Configuration"],[1,"Statistics"],[1,"Limits"],[1,"PinOperation"]]};

initSearch(searchIndex);
