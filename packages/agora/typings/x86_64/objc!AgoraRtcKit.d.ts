declare const enum AgoraAreaCode {
	CN = 1,

	NA = 2,

	EU = 4,

	AS = 8,

	JP = 16,

	IN = 32,

	GLOB = 4294967295,
}

declare const enum AgoraAudienceLatencyLevelType {
	LowLatency = 1,

	UltraLowLatency = 2,
}

declare const enum AgoraAudioCodecProfileType {
	LCAAC = 0,

	HEAAC = 1,
}

declare const enum AgoraAudioEffectPreset {
	AudioEffectOff = 0,

	RoomAcousticsKTV = 33620224,

	RoomAcousticsVocalConcert = 33620480,

	RoomAcousticsStudio = 33620736,

	RoomAcousticsPhonograph = 33620992,

	RoomAcousticsVirtualStereo = 33621248,

	RoomAcousticsSpacial = 33621504,

	RoomAcousticsEthereal = 33621760,

	RoomAcoustics3DVoice = 33622016,

	VoiceChangerEffectUncle = 33685760,

	VoiceChangerEffectOldMan = 33686016,

	VoiceChangerEffectBoy = 33686272,

	VoiceChangerEffectSister = 33686528,

	VoiceChangerEffectGirl = 33686784,

	VoiceChangerEffectPigKing = 33687040,

	VoiceChangerEffectHulk = 33687296,

	StyleTransformationRnB = 33751296,

	StyleTransformationPopular = 33751552,

	PitchCorrection = 33816832,
}

declare const enum AgoraAudioEqualizationBandFrequency {
	Band31 = 0,

	Band62 = 1,

	Band125 = 2,

	Band250 = 3,

	Band500 = 4,

	Band1K = 5,

	Band2K = 6,

	Band4K = 7,

	Band8K = 8,

	Band16K = 9,
}

declare class AgoraAudioFrame extends NSObject {
	static alloc(): AgoraAudioFrame; // inherited from NSObject

	static new(): AgoraAudioFrame; // inherited from NSObject

	avSyncType: number;

	buffer: NSData;

	bytesPerSample: number;

	channels: number;

	renderTimeMs: number;

	samplesPerChannel: number;

	samplesPerSec: number;
}

interface AgoraAudioFrameDelegate extends NSObjectProtocol {
	onMixedAudioFrame(frame: AgoraAudioFrame): boolean;

	onPlaybackAudioFrame(frame: AgoraAudioFrame): boolean;

	onPlaybackAudioFrameBeforeMixingUid(frame: AgoraAudioFrame, uid: number): boolean;

	onRecordAudioFrame(frame: AgoraAudioFrame): boolean;
}
declare var AgoraAudioFrameDelegate: {
	prototype: AgoraAudioFrameDelegate;
};

declare const enum AgoraAudioLocalError {
	Ok = 0,

	Failure = 1,

	DeviceNoPermission = 2,

	DeviceBusy = 3,

	RecordFailure = 4,

	EncodeFailure = 5,
}

declare const enum AgoraAudioLocalState {
	Stopped = 0,

	Recording = 1,

	Encoding = 2,

	Failed = 3,
}

declare const enum AgoraAudioMixingErrorCode {
	CanNotOpen = 701,

	TooFrequentCall = 702,

	InterruptedEOF = 703,

	OK = 0,
}

declare const enum AgoraAudioMixingReasonCode {
	CanNotOpen = 701,

	TooFrequentCall = 702,

	InterruptedEOF = 703,

	StartedByUser = 720,

	OneLoopCompleted = 721,

	StartNewLoop = 722,

	AllLoopsCompleted = 723,

	StoppedByUser = 724,

	PausedByUser = 725,

	ResumedByUser = 726,
}

declare const enum AgoraAudioMixingStateCode {
	Playing = 710,

	Paused = 711,

	Stopped = 713,

	Failed = 714,
}

declare const enum AgoraAudioOutputRouting {
	Default = -1,

	Headset = 0,

	Earpiece = 1,

	HeadsetNoMic = 2,

	Speakerphone = 3,

	Loudspeaker = 4,

	HeadsetBluetooth = 5,

	Usb = 6,

	Hdmi = 7,

	DisplayPort = 8,

	AirPlay = 9,
}

declare const enum AgoraAudioProfile {
	Default = 0,

	SpeechStandard = 1,

	MusicStandard = 2,

	MusicStandardStereo = 3,

	MusicHighQuality = 4,

	MusicHighQualityStereo = 5,
}

declare const enum AgoraAudioRawFrameOperationMode {
	ReadOnly = 0,

	WriteOnly = 1,

	ReadWrite = 2,
}

declare class AgoraAudioRecordingConfiguration extends NSObject {
	static alloc(): AgoraAudioRecordingConfiguration; // inherited from NSObject

	static new(): AgoraAudioRecordingConfiguration; // inherited from NSObject

	filePath: string;

	recordingPosition: AgoraAudioRecordingPosition;

	recordingQuality: AgoraAudioRecordingQuality;

	recordingSampleRate: number;
}

declare const enum AgoraAudioRecordingPosition {
	MixedRecordingAndPlayback = 0,

	Recording = 1,

	MixedPlayback = 2,
}

declare const enum AgoraAudioRecordingQuality {
	Low = 0,

	Medium = 1,

	High = 2,
}

declare const enum AgoraAudioRemoteState {
	Stopped = 0,

	Starting = 1,

	Decoding = 2,

	Frozen = 3,

	Failed = 4,
}

declare const enum AgoraAudioRemoteStateReason {
	ReasonInternal = 0,

	ReasonNetworkCongestion = 1,

	ReasonNetworkRecovery = 2,

	ReasonLocalMuted = 3,

	ReasonLocalUnmuted = 4,

	ReasonRemoteMuted = 5,

	ReasonRemoteUnmuted = 6,

	ReasonRemoteOffline = 7,
}

declare const enum AgoraAudioReverbPreset {
	Off = 0,

	FxKTV = 1048577,

	FxVocalConcert = 1048578,

	FxUncle = 1048579,

	FxSister = 1048580,

	FxStudio = 1048581,

	FxPopular = 1048582,

	FxRNB = 1048583,

	FxPhonograph = 1048584,

	Popular = 1,

	RnB = 2,

	Rock = 3,

	HipHop = 4,

	VocalConcert = 5,

	KTV = 6,

	Studio = 7,

	VirtualStereo = 2097153,

	ElectronicVoice = 3145729,

	ThreeDimVoice = 4194305,
}

declare const enum AgoraAudioReverbType {
	DryLevel = 0,

	WetLevel = 1,

	RoomSize = 2,

	WetDelay = 3,

	Strength = 4,
}

declare const enum AgoraAudioSampleRateType {
	Type32000 = 32000,

	Type44100 = 44100,

	Type48000 = 48000,
}

declare const enum AgoraAudioScenario {
	Default = 0,

	ChatRoomEntertainment = 1,

	Education = 2,

	GameStreaming = 3,

	ShowRoom = 4,

	ChatRoomGaming = 5,

	Iot = 6,

	Communication = 7,

	Meeting = 8,
}

declare const enum AgoraAudioSessionOperationRestriction {
	None = 0,

	SetCategory = 1,

	ConfigureSession = 2,

	DeactivateSession = 4,

	All = 128,
}

declare const enum AgoraAudioVoiceChanger {
	VoiceChangerOff = 0,

	VoiceChangerOldMan = 1,

	VoiceChangerBabyBoy = 2,

	VoiceChangerBabyGirl = 3,

	VoiceChangerZhuBaJie = 4,

	VoiceChangerEthereal = 5,

	VoiceChangerHulk = 6,

	VoiceBeautyVigorous = 1048577,

	VoiceBeautyDeep = 1048578,

	VoiceBeautyMellow = 1048579,

	VoiceBeautyFalsetto = 1048580,

	VoiceBeautyFull = 1048581,

	VoiceBeautyClear = 1048582,

	VoiceBeautyResounding = 1048583,

	VoiceBeautyRinging = 1048584,

	VoiceBeautySpacial = 1048585,

	GeneralBeautyVoiceMaleMagnetic = 2097153,

	GeneralBeautyVoiceFemaleFresh = 2097154,

	GeneralBeautyVoiceFemaleVitality = 2097155,
}

declare class AgoraBeautyOptions extends NSObject {
	static alloc(): AgoraBeautyOptions; // inherited from NSObject

	static new(): AgoraBeautyOptions; // inherited from NSObject

	lighteningContrastLevel: AgoraLighteningContrastLevel;

	lighteningLevel: number;

	rednessLevel: number;

	smoothnessLevel: number;
}

declare const enum AgoraCameraCaptureOutputPreference {
	Auto = 0,

	Performance = 1,

	Preview = 2,

	Manual = 3,

	Unkown = 4,
}

declare class AgoraCameraCapturerConfiguration extends NSObject {
	static alloc(): AgoraCameraCapturerConfiguration; // inherited from NSObject

	static new(): AgoraCameraCapturerConfiguration; // inherited from NSObject

	cameraDirection: AgoraCameraDirection;

	captureHeight: number;

	captureWidth: number;

	preference: AgoraCameraCaptureOutputPreference;

	constructor(o: { size: CGSize; facing: AgoraCameraDirection });

	constructor(o: { width: number; height: number; facing: AgoraCameraDirection });

	initWithSizeFacing(size: CGSize, facing: AgoraCameraDirection): this;

	initWithWidthHeightFacing(width: number, height: number, facing: AgoraCameraDirection): this;
}

declare const enum AgoraCameraDirection {
	Rear = 0,

	Front = 1,
}

declare const enum AgoraCaptureBrightnessLevelType {
	Invalid = -1,

	Normal = 0,

	Bright = 1,

	Dark = 2,
}

declare class AgoraChannelMediaRelayConfiguration extends NSObject {
	static alloc(): AgoraChannelMediaRelayConfiguration; // inherited from NSObject

	static new(): AgoraChannelMediaRelayConfiguration; // inherited from NSObject

	readonly destinationInfos: NSDictionary<string, AgoraChannelMediaRelayInfo>;

	sourceInfo: AgoraChannelMediaRelayInfo;

	removeDestinationInfoForChannelName(channelName: string): boolean;

	setDestinationInfoForChannelName(destinationInfo: AgoraChannelMediaRelayInfo, channelName: string): boolean;
}

declare const enum AgoraChannelMediaRelayError {
	None = 0,

	ServerErrorResponse = 1,

	ServerNoResponse = 2,

	NoResourceAvailable = 3,

	FailedJoinSourceChannel = 4,

	FailedJoinDestinationChannel = 5,

	FailedPacketReceivedFromSource = 6,

	FailedPacketSentToDestination = 7,

	ServerConnectionLost = 8,

	InternalError = 9,

	SourceTokenExpired = 10,

	DestinationTokenExpired = 11,
}

declare const enum AgoraChannelMediaRelayEvent {
	Disconnect = 0,

	Connected = 1,

	JoinedSourceChannel = 2,

	JoinedDestinationChannel = 3,

	SentToDestinationChannel = 4,

	ReceivedVideoPacketFromSource = 5,

	ReceivedAudioPacketFromSource = 6,

	UpdateDestinationChannel = 7,

	UpdateDestinationChannelRefused = 8,

	UpdateDestinationChannelNotChange = 9,

	UpdateDestinationChannelIsNil = 10,

	VideoProfileUpdate = 11,
}

declare class AgoraChannelMediaRelayInfo extends NSObject {
	static alloc(): AgoraChannelMediaRelayInfo; // inherited from NSObject

	static new(): AgoraChannelMediaRelayInfo; // inherited from NSObject

	channelName: string;

	token: string;

	uid: number;

	constructor(o: { token: string });

	initWithToken(token: string): this;
}

declare const enum AgoraChannelMediaRelayState {
	Idle = 0,

	Connecting = 1,

	Running = 2,

	Failure = 3,
}

declare const enum AgoraChannelProfile {
	Communication = 0,

	LiveBroadcasting = 1,

	Game = 2,
}

declare class AgoraChannelStats extends NSObject {
	static alloc(): AgoraChannelStats; // inherited from NSObject

	static new(): AgoraChannelStats; // inherited from NSObject

	cpuAppUsage: number;

	cpuTotalUsage: number;

	duration: number;

	gatewayRtt: number;

	lastmileDelay: number;

	memoryAppUsageInKbytes: number;

	memoryAppUsageRatio: number;

	memoryTotalUsageRatio: number;

	rxAudioBytes: number;

	rxAudioKBitrate: number;

	rxBytes: number;

	rxKBitrate: number;

	rxPacketLossRate: number;

	rxVideoBytes: number;

	rxVideoKBitrate: number;

	txAudioBytes: number;

	txAudioKBitrate: number;

	txBytes: number;

	txKBitrate: number;

	txPacketLossRate: number;

	txVideoBytes: number;

	txVideoKBitrate: number;

	userCount: number;
}

declare const enum AgoraClientRole {
	Broadcaster = 1,

	Audience = 2,
}

declare class AgoraClientRoleOptions extends NSObject {
	static alloc(): AgoraClientRoleOptions; // inherited from NSObject

	static new(): AgoraClientRoleOptions; // inherited from NSObject

	audienceLatencyLevel: AgoraAudienceLatencyLevelType;
}

declare const enum AgoraCloudProxyType {
	NoneProxy = 0,

	UdpProxy = 1,

	TcpProxy = 2,
}

declare const enum AgoraConnectionChangedReason {
	Connecting = 0,

	JoinSuccess = 1,

	Interrupted = 2,

	BannedByServer = 3,

	JoinFailed = 4,

	LeaveChannel = 5,

	InvalidAppId = 6,

	InvalidChannelName = 7,

	InvalidToken = 8,

	TokenExpired = 9,

	RejectedByServer = 10,

	SettingProxyServer = 11,

	RenewToken = 12,

	ClientIpAddressChanged = 13,

	KeepAliveTimeout = 14,

	ProxyServerInterrupted = 15,
}

declare const enum AgoraConnectionStateType {
	Disconnected = 1,

	Connecting = 2,

	Connected = 3,

	Reconnecting = 4,

	Failed = 5,
}

declare class AgoraDataStreamConfig extends NSObject {
	static alloc(): AgoraDataStreamConfig; // inherited from NSObject

	static new(): AgoraDataStreamConfig; // inherited from NSObject

	ordered: boolean;

	syncWithAudio: boolean;
}

declare const enum AgoraDegradationPreference {
	MaintainQuality = 0,

	MaintainFramerate = 1,

	Balanced = 2,
}

declare class AgoraEncryptionConfig extends NSObject {
	static alloc(): AgoraEncryptionConfig; // inherited from NSObject

	static new(): AgoraEncryptionConfig; // inherited from NSObject

	encryptionKey: string;

	encryptionMode: AgoraEncryptionMode;
}

declare const enum AgoraEncryptionMode {
	None = 0,

	AES128XTS = 1,

	AES128ECB = 2,

	AES256XTS = 3,

	SM4128ECB = 4,

	AES128GCM = 5,

	AES256GCM = 6,

	End = 7,
}

declare const enum AgoraErrorCode {
	NoError = 0,

	Failed = 1,

	InvalidArgument = 2,

	NotReady = 3,

	NotSupported = 4,

	Refused = 5,

	BufferTooSmall = 6,

	NotInitialized = 7,

	NoPermission = 9,

	TimedOut = 10,

	Canceled = 11,

	TooOften = 12,

	BindSocket = 13,

	NetDown = 14,

	NoBufs = 15,

	JoinChannelRejected = 17,

	LeaveChannelRejected = 18,

	AlreadyInUse = 19,

	Abort = 20,

	InitNetEngine = 21,

	ResourceLimited = 22,

	InvalidAppId = 101,

	InvalidChannelId = 102,

	NoServerResources = 103,

	TokenExpired = 109,

	InvalidToken = 110,

	ConnectionInterrupted = 111,

	ConnectionLost = 112,

	NotInChannel = 113,

	SizeTooLarge = 114,

	BitrateLimit = 115,

	TooManyDataStreams = 116,

	DecryptionFailed = 120,

	WatermarkParam = 124,

	WatermarkPath = 125,

	WatermarkPng = 126,

	WatermarkInfo = 127,

	WatermarkAGRB = 128,

	WatermarkRead = 129,

	EncryptedStreamNotAllowedPublish = 130,

	InvalidUserAccount = 134,

	PublishStreamCDNError = 151,

	PublishStreamNumReachLimit = 152,

	PublishStreamNotAuthorized = 153,

	PublishStreamInternalServerError = 154,

	PublishStreamNotFound = 155,

	PublishStreamFormatNotSuppported = 156,

	ModuleNotFound = 157,

	AlreadyInRecording = 160,

	LoadMediaEngine = 1001,

	StartCall = 1002,

	StartCamera = 1003,

	StartVideoRender = 1004,

	AdmGeneralError = 1005,

	AdmJavaResource = 1006,

	AdmSampleRate = 1007,

	AdmInitPlayout = 1008,

	AdmStartPlayout = 1009,

	AdmStopPlayout = 1010,

	AdmInitRecording = 1011,

	AdmStartRecording = 1012,

	AdmStopRecording = 1013,

	AdmRuntimePlayoutError = 1015,

	AdmRuntimeRecordingError = 1017,

	AdmRecordAudioFailed = 1018,

	AdmPlayAbnormalFrequency = 1020,

	AdmRecordAbnormalFrequency = 1021,

	AdmInitLoopback = 1022,

	AdmStartLoopback = 1023,

	AdmNoPermission = 1027,

	AdmActivateSessionFail = 1206,

	AdmNoRecordingDevice = 1359,

	AdmNoPlayoutDevice = 1360,

	VdmCameraNotAuthorized = 1501,

	VcmUnknownError = 1600,

	VcmEncoderInitError = 1601,

	VcmEncoderEncodeError = 1602,

	VcmEncoderSetError = 1603,
}

declare const enum AgoraExperiencePoorReason {
	ExperienceReasonNone = 0,

	RemoteNetworkPoor = 1,

	LocalNetworkPoor = 2,

	WirelessSignalPoor = 4,

	WifiBluetoothCoexist = 8,
}

declare const enum AgoraExperienceQuality {
	Good = 0,

	Bad = 1,
}

declare class AgoraFacePositionInfo extends NSObject {
	static alloc(): AgoraFacePositionInfo; // inherited from NSObject

	static new(): AgoraFacePositionInfo; // inherited from NSObject

	distance: number;

	height: number;

	width: number;

	x: number;

	y: number;
}

declare class AgoraImage extends NSObject {
	static alloc(): AgoraImage; // inherited from NSObject

	static new(): AgoraImage; // inherited from NSObject

	rect: CGRect;

	url: NSURL;
}

declare const enum AgoraInjectStreamStatus {
	StartSuccess = 0,

	StartAlreadyExists = 1,

	StartUnauthorized = 2,

	StartTimedout = 3,

	StartFailed = 4,

	StopSuccess = 5,

	StopNotFound = 6,

	StopUnauthorized = 7,

	StopTimedout = 8,

	StopFailed = 9,

	Broken = 10,
}

declare class AgoraLastmileProbeConfig extends NSObject {
	static alloc(): AgoraLastmileProbeConfig; // inherited from NSObject

	static new(): AgoraLastmileProbeConfig; // inherited from NSObject

	expectedDownlinkBitrate: number;

	expectedUplinkBitrate: number;

	probeDownlink: boolean;

	probeUplink: boolean;
}

declare class AgoraLastmileProbeOneWayResult extends NSObject {
	static alloc(): AgoraLastmileProbeOneWayResult; // inherited from NSObject

	static new(): AgoraLastmileProbeOneWayResult; // inherited from NSObject

	availableBandwidth: number;

	jitter: number;

	packetLossRate: number;
}

declare class AgoraLastmileProbeResult extends NSObject {
	static alloc(): AgoraLastmileProbeResult; // inherited from NSObject

	static new(): AgoraLastmileProbeResult; // inherited from NSObject

	downlinkReport: AgoraLastmileProbeOneWayResult;

	rtt: number;

	state: AgoraLastmileProbeResultState;

	uplinkReport: AgoraLastmileProbeOneWayResult;
}

declare const enum AgoraLastmileProbeResultState {
	Complete = 1,

	IncompleteNoBwe = 2,

	Unavailable = 3,
}

declare const enum AgoraLighteningContrastLevel {
	Low = 0,

	Normal = 1,

	High = 2,
}

declare class AgoraLiveInjectStreamConfig extends NSObject {
	static alloc(): AgoraLiveInjectStreamConfig; // inherited from NSObject

	static defaultConfig(): AgoraLiveInjectStreamConfig;

	static new(): AgoraLiveInjectStreamConfig; // inherited from NSObject

	audioBitrate: number;

	audioChannels: number;

	audioSampleRate: AgoraAudioSampleRateType;

	size: CGSize;

	videoBitrate: number;

	videoFramerate: number;

	videoGop: number;
}

declare class AgoraLiveStreamAdvancedFeature extends NSObject {
	static alloc(): AgoraLiveStreamAdvancedFeature; // inherited from NSObject

	static new(): AgoraLiveStreamAdvancedFeature; // inherited from NSObject

	featureName: string;

	opened: boolean;
}

declare class AgoraLiveTranscoding extends NSObject {
	static alloc(): AgoraLiveTranscoding; // inherited from NSObject

	static defaultTranscoding(): AgoraLiveTranscoding;

	static new(): AgoraLiveTranscoding; // inherited from NSObject

	audioBitrate: number;

	audioChannels: number;

	audioCodecProfile: AgoraAudioCodecProfileType;

	audioSampleRate: AgoraAudioSampleRateType;

	backgroundColor: UIColor;

	backgroundImage: AgoraImage;

	lowLatency: boolean;

	size: CGSize;

	transcodingExtraInfo: string;

	transcodingUsers: NSArray<AgoraLiveTranscodingUser>;

	videoBitrate: number;

	videoCodecProfile: AgoraVideoCodecProfileType;

	videoCodecType: AgoraVideoCodecTypeForStream;

	videoFramerate: number;

	videoGop: number;

	watermark: AgoraImage;

	addUser(user: AgoraLiveTranscodingUser): number;

	getAdvancedFeatures(): NSArray<AgoraLiveStreamAdvancedFeature>;

	removeUser(uid: number): number;

	setAdvancedFeaturesOpened(featureName: string, opened: boolean): void;
}

declare class AgoraLiveTranscodingUser extends NSObject {
	static alloc(): AgoraLiveTranscodingUser; // inherited from NSObject

	static new(): AgoraLiveTranscodingUser; // inherited from NSObject

	alpha: number;

	audioChannel: number;

	rect: CGRect;

	uid: number;

	zOrder: number;
}

declare const enum AgoraLocalVideoStreamError {
	OK = 0,

	Failure = 1,

	DeviceNoPermission = 2,

	DeviceBusy = 3,

	CaptureFailure = 4,

	EncodeFailure = 5,

	CaptureInBackGround = 6,

	CaptureMultipleForegroundApps = 7,

	CaptureNoDeviceFound = 8,

	ScreenCaptureWindowMinimized = 11,

	ScreenCaptureWindowClosed = 12,
}

declare const enum AgoraLocalVideoStreamState {
	Stopped = 0,

	Capturing = 1,

	Encoding = 2,

	Failed = 3,
}

declare class AgoraLogConfig extends NSObject {
	static alloc(): AgoraLogConfig; // inherited from NSObject

	static new(): AgoraLogConfig; // inherited from NSObject

	filePath: string;

	fileSize: number;

	level: AgoraLogLevel;
}

declare const enum AgoraLogFilter {
	Off = 0,

	Debug = 2063,

	Info = 15,

	Warning = 14,

	Error = 12,

	Critical = 8,
}

declare const enum AgoraLogLevel {
	None = 0,

	Info = 1,

	Warn = 2,

	Error = 4,

	Fatal = 8,
}

interface AgoraLogWriterDelegate extends NSObjectProtocol {
	writeLogLength(message: NSData, length: number): number;
}
declare var AgoraLogWriterDelegate: {
	prototype: AgoraLogWriterDelegate;
};

declare const enum AgoraMediaDeviceType {
	AudioUnknown = -1,

	AudioPlayout = 0,

	AudioRecording = 1,

	VideoRender = 2,

	VideoCapture = 3,
}

interface AgoraMediaMetadataDataSource extends NSObjectProtocol {
	metadataMaxSize(): number;

	readyToSendMetadataAtTimestamp(timestamp: number): NSData;
}
declare var AgoraMediaMetadataDataSource: {
	prototype: AgoraMediaMetadataDataSource;
};

interface AgoraMediaMetadataDelegate extends NSObjectProtocol {
	receiveMetadataFromUserAtTimestamp(data: NSData, uid: number, timestamp: number): void;
}
declare var AgoraMediaMetadataDelegate: {
	prototype: AgoraMediaMetadataDelegate;
};

declare const enum AgoraMediaType {
	None = 0,

	AudioOnly = 1,

	VideoOnly = 2,

	AudioAndVideo = 3,
}

declare const enum AgoraMetadataType {
	Unknown = -1,

	Video = 0,
}

declare const enum AgoraNetworkQuality {
	Unknown = 0,

	Excellent = 1,

	Good = 2,

	Poor = 3,

	Bad = 4,

	VBad = 5,

	Down = 6,

	Unsupported = 7,

	Detecting = 8,
}

declare const enum AgoraNetworkType {
	Unknown = -1,

	Disconnected = 0,

	LAN = 1,

	WIFI = 2,

	Mobile2G = 3,

	Mobile3G = 4,

	Mobile4G = 5,
}

declare class AgoraRtcAudioVolumeInfo extends NSObject {
	static alloc(): AgoraRtcAudioVolumeInfo; // inherited from NSObject

	static new(): AgoraRtcAudioVolumeInfo; // inherited from NSObject

	channelId: string;

	uid: number;

	vad: number;

	volume: number;
}

declare class AgoraRtcChannel extends NSObject {
	static alloc(): AgoraRtcChannel; // inherited from NSObject

	static new(): AgoraRtcChannel; // inherited from NSObject

	addInjectStreamUrlConfig(url: string, config: AgoraLiveInjectStreamConfig): number;

	addPublishStreamUrlTranscodingEnabled(url: string, transcodingEnabled: boolean): number;

	adjustUserPlaybackSignalVolumeVolume(uid: number, volume: number): number;

	createDataStreamConfig(streamId: interop.Pointer | interop.Reference<number>, config: AgoraDataStreamConfig): number;

	createDataStreamReliableOrdered(streamId: interop.Pointer | interop.Reference<number>, reliable: boolean, ordered: boolean): number;

	destroy(): number;

	enableEncryptionEncryptionConfig(enabled: boolean, config: AgoraEncryptionConfig): number;

	enableRemoteSuperResolutionEnabled(uid: number, enabled: boolean): number;

	getCallId(): string;

	getChannelId(): string;

	getConnectionState(): AgoraConnectionStateType;

	joinChannelByTokenInfoUidOptions(token: string, info: string, uid: number, options: AgoraRtcChannelMediaOptions): number;

	joinChannelByUserAccountTokenOptions(userAccount: string, token: string, options: AgoraRtcChannelMediaOptions): number;

	leaveChannel(): number;

	muteAllRemoteAudioStreams(mute: boolean): number;

	muteAllRemoteVideoStreams(mute: boolean): number;

	muteRemoteAudioStreamMute(uid: number, mute: boolean): number;

	muteRemoteVideoStreamMute(uid: number, mute: boolean): number;

	publish(): number;

	remoteVideoRendererOfUserId(userId: number): AgoraVideoSinkProtocol;

	removeInjectStreamUrl(url: string): number;

	removePublishStreamUrl(url: string): number;

	renewToken(token: string): number;

	sendStreamMessageData(streamId: number, data: NSData): number;

	setClientRole(role: AgoraClientRole): number;

	setClientRoleOptions(role: AgoraClientRole, options: AgoraClientRoleOptions): number;

	setDefaultMuteAllRemoteAudioStreams(mute: boolean): number;

	setDefaultMuteAllRemoteVideoStreams(mute: boolean): number;

	setEncryptionMode(encryptionMode: string): number;

	setEncryptionSecret(secret: string): number;

	setLiveTranscoding(transcoding: AgoraLiveTranscoding): number;

	setMediaMetadataDataSourceWithType(metadataDataSource: AgoraMediaMetadataDataSource, type: AgoraMetadataType): boolean;

	setMediaMetadataDelegateWithType(metadataDelegate: AgoraMediaMetadataDelegate, type: AgoraMetadataType): boolean;

	setRemoteDefaultVideoStreamType(streamType: AgoraVideoStreamType): number;

	setRemoteRenderModeRenderModeMirrorMode(uid: number, renderMode: AgoraVideoRenderMode, mirrorMode: AgoraVideoMirrorMode): number;

	setRemoteUserPriorityType(uid: number, userPriority: AgoraUserPriority): number;

	setRemoteVideoRendererForUserId(videoRenderer: AgoraVideoSinkProtocol, userId: number): void;

	setRemoteVideoStreamType(uid: number, streamType: AgoraVideoStreamType): number;

	setRemoteVoicePositionPanGain(uid: number, pan: number, gain: number): number;

	setRtcChannelDelegate(channelDelegate: AgoraRtcChannelDelegate): void;

	startChannelMediaRelay(config: AgoraChannelMediaRelayConfiguration): number;

	stopChannelMediaRelay(): number;

	unpublish(): number;

	updateChannelMediaRelay(config: AgoraChannelMediaRelayConfiguration): number;
}

interface AgoraRtcChannelDelegate extends NSObjectProtocol {
	rtcChannelActiveSpeaker?(rtcChannel: AgoraRtcChannel, speakerUid: number): void;

	rtcChannelChannelMediaRelayStateDidChangeError?(rtcChannel: AgoraRtcChannel, state: AgoraChannelMediaRelayState, error: AgoraChannelMediaRelayError): void;

	rtcChannelConnectionChangedToStateReason?(rtcChannel: AgoraRtcChannel, state: AgoraConnectionStateType, reason: AgoraConnectionChangedReason): void;

	rtcChannelDidAudioPublishStateChangeNewStateElapseSinceLastState?(rtcChannel: AgoraRtcChannel, oldState: AgoraStreamPublishState, newState: AgoraStreamPublishState, elapseSinceLastState: number): void;

	rtcChannelDidAudioSubscribeStateChangeOldStateNewStateElapseSinceLastState?(rtcChannel: AgoraRtcChannel, uid: number, oldState: AgoraStreamSubscribeState, newState: AgoraStreamSubscribeState, elapseSinceLastState: number): void;

	rtcChannelDidClientRoleChangedNewRole?(rtcChannel: AgoraRtcChannel, oldRole: AgoraClientRole, newRole: AgoraClientRole): void;

	rtcChannelDidJoinChannelWithUidElapsed?(rtcChannel: AgoraRtcChannel, uid: number, elapsed: number): void;

	rtcChannelDidJoinedOfUidElapsed?(rtcChannel: AgoraRtcChannel, uid: number, elapsed: number): void;

	rtcChannelDidLeaveChannelWithStats?(rtcChannel: AgoraRtcChannel, stats: AgoraChannelStats): void;

	rtcChannelDidLocalPublishFallbackToAudioOnly?(rtcChannel: AgoraRtcChannel, isFallbackOrRecover: boolean): void;

	rtcChannelDidLost?(rtcChannel: AgoraRtcChannel): void;

	rtcChannelDidOccurError?(rtcChannel: AgoraRtcChannel, errorCode: AgoraErrorCode): void;

	rtcChannelDidOccurStreamMessageErrorFromUidStreamIdErrorMissedCached?(rtcChannel: AgoraRtcChannel, uid: number, streamId: number, error: number, missed: number, cached: number): void;

	rtcChannelDidOccurWarning?(rtcChannel: AgoraRtcChannel, warningCode: AgoraWarningCode): void;

	rtcChannelDidOfflineOfUidReason?(rtcChannel: AgoraRtcChannel, uid: number, reason: AgoraUserOfflineReason): void;

	rtcChannelDidReceiveChannelMediaRelayEvent?(rtcChannel: AgoraRtcChannel, event: AgoraChannelMediaRelayEvent): void;

	rtcChannelDidRejoinChannelWithUidElapsed?(rtcChannel: AgoraRtcChannel, uid: number, elapsed: number): void;

	rtcChannelDidRemoteSubscribeFallbackToAudioOnlyByUid?(rtcChannel: AgoraRtcChannel, isFallbackOrRecover: boolean, uid: number): void;

	rtcChannelDidVideoPublishStateChangeNewStateElapseSinceLastState?(rtcChannel: AgoraRtcChannel, oldState: AgoraStreamPublishState, newState: AgoraStreamPublishState, elapseSinceLastState: number): void;

	rtcChannelDidVideoSubscribeStateChangeOldStateNewStateElapseSinceLastState?(rtcChannel: AgoraRtcChannel, uid: number, oldState: AgoraStreamSubscribeState, newState: AgoraStreamSubscribeState, elapseSinceLastState: number): void;

	rtcChannelNetworkQualityTxQualityRxQuality?(rtcChannel: AgoraRtcChannel, uid: number, txQuality: AgoraNetworkQuality, rxQuality: AgoraNetworkQuality): void;

	rtcChannelReceiveStreamMessageFromUidStreamIdData?(rtcChannel: AgoraRtcChannel, uid: number, streamId: number, data: NSData): void;

	rtcChannelRemoteAudioStateChangedOfUidStateReasonElapsed?(rtcChannel: AgoraRtcChannel, uid: number, state: AgoraAudioRemoteState, reason: AgoraAudioRemoteStateReason, elapsed: number): void;

	rtcChannelRemoteAudioStats?(rtcChannel: AgoraRtcChannel, stats: AgoraRtcRemoteAudioStats): void;

	rtcChannelRemoteVideoStateChangedOfUidStateReasonElapsed?(rtcChannel: AgoraRtcChannel, uid: number, state: AgoraVideoRemoteState, reason: AgoraVideoRemoteStateReason, elapsed: number): void;

	rtcChannelRemoteVideoStats?(rtcChannel: AgoraRtcChannel, stats: AgoraRtcRemoteVideoStats): void;

	rtcChannelReportRtcStats?(rtcChannel: AgoraRtcChannel, stats: AgoraChannelStats): void;

	rtcChannelRequestToken?(rtcChannel: AgoraRtcChannel): void;

	rtcChannelRtmpStreamingChangedToStateStateErrorCode?(rtcChannel: AgoraRtcChannel, url: string, state: AgoraRtmpStreamingState, errorCode: AgoraRtmpStreamingErrorCode): void;

	rtcChannelRtmpStreamingEventWithUrlEventCode?(rtcChannel: AgoraRtcChannel, url: string, eventCode: AgoraRtmpStreamingEvent): void;

	rtcChannelStreamInjectedStatusOfUrlUidStatus?(rtcChannel: AgoraRtcChannel, url: string, uid: number, status: AgoraInjectStreamStatus): void;

	rtcChannelSuperResolutionEnabledOfUidEnabledReason?(rtcChannel: AgoraRtcChannel, uid: number, enabled: boolean, reason: AgoraSuperResolutionStateReason): void;

	rtcChannelTokenPrivilegeWillExpire?(rtcChannel: AgoraRtcChannel, token: string): void;

	rtcChannelTranscodingUpdated?(rtcChannel: AgoraRtcChannel): void;

	rtcChannelVideoSizeChangedOfUidSizeRotation?(rtcChannel: AgoraRtcChannel, uid: number, size: CGSize, rotation: number): void;
}
declare var AgoraRtcChannelDelegate: {
	prototype: AgoraRtcChannelDelegate;
};

declare class AgoraRtcChannelMediaOptions extends NSObject {
	static alloc(): AgoraRtcChannelMediaOptions; // inherited from NSObject

	static new(): AgoraRtcChannelMediaOptions; // inherited from NSObject

	autoSubscribeAudio: boolean;

	autoSubscribeVideo: boolean;
}

declare class AgoraRtcDefaultCamera extends NSObject implements AgoraVideoSourceProtocol {
	static alloc(): AgoraRtcDefaultCamera; // inherited from NSObject

	static new(): AgoraRtcDefaultCamera; // inherited from NSObject

	position: AgoraRtcDefaultCameraPosition;

	consumer: AgoraVideoFrameConsumer; // inherited from AgoraVideoSourceProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { position: AgoraRtcDefaultCameraPosition });

	bufferType(): AgoraVideoBufferType;

	captureType(): AgoraVideoCaptureType;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	contentHint(): AgoraVideoContentHint;

	initWithPosition(position: AgoraRtcDefaultCameraPosition): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldDispose(): void;

	shouldInitialize(): boolean;

	shouldStart(): void;

	shouldStop(): void;
}

declare const enum AgoraRtcDefaultCameraPosition {
	Front = 0,

	Back = 1,
}

declare class AgoraRtcDefaultRenderer extends NSObject implements AgoraVideoSinkProtocol {
	static alloc(): AgoraRtcDefaultRenderer; // inherited from NSObject

	static new(): AgoraRtcDefaultRenderer; // inherited from NSObject

	mode: AgoraVideoRenderMode;

	readonly view: UIView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

	constructor(o: { view: UIView; renderMode: AgoraVideoRenderMode });

	bufferType(): AgoraVideoBufferType;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithViewRenderMode(view: UIView, mode: AgoraVideoRenderMode): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pixelFormat(): AgoraVideoPixelFormat;

	renderPixelBufferRotation(pixelBuffer: any, rotation: AgoraVideoRotation): void;

	renderRawDataSizeRotation(rawData: interop.Pointer | interop.Reference<any>, size: CGSize, rotation: AgoraVideoRotation): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldDispose(): void;

	shouldInitialize(): boolean;

	shouldStart(): void;

	shouldStop(): void;
}

declare class AgoraRtcEngineConfig extends NSObject {
	static alloc(): AgoraRtcEngineConfig; // inherited from NSObject

	static new(): AgoraRtcEngineConfig; // inherited from NSObject

	appId: string;

	areaCode: number;

	logConfig: AgoraLogConfig;
}

interface AgoraRtcEngineDelegate extends NSObjectProtocol {
	rtcEngineActiveSpeaker?(engine: AgoraRtcEngineKit, speakerUid: number): void;

	rtcEngineAirPlayIsConnected?(engine: AgoraRtcEngineKit): void;

	rtcEngineAudioQualityOfUidQualityDelayLost?(engine: AgoraRtcEngineKit, uid: number, quality: AgoraNetworkQuality, delay: number, lost: number): void;

	rtcEngineAudioTransportStatsOfUidDelayLostRxKBitRate?(engine: AgoraRtcEngineKit, uid: number, delay: number, lost: number, rxKBitRate: number): void;

	rtcEngineCameraDidReady?(engine: AgoraRtcEngineKit): void;

	rtcEngineCameraExposureDidChangedToRect?(engine: AgoraRtcEngineKit, rect: CGRect): void;

	rtcEngineCameraFocusDidChangedToRect?(engine: AgoraRtcEngineKit, rect: CGRect): void;

	rtcEngineChannelMediaRelayStateDidChangeError?(engine: AgoraRtcEngineKit, state: AgoraChannelMediaRelayState, error: AgoraChannelMediaRelayError): void;

	rtcEngineConnectionChangedToStateReason?(engine: AgoraRtcEngineKit, state: AgoraConnectionStateType, reason: AgoraConnectionChangedReason): void;

	rtcEngineConnectionDidBanned?(engine: AgoraRtcEngineKit): void;

	rtcEngineConnectionDidInterrupted?(engine: AgoraRtcEngineKit): void;

	rtcEngineConnectionDidLost?(engine: AgoraRtcEngineKit): void;

	rtcEngineDidApiCallExecuteApiResult?(engine: AgoraRtcEngineKit, error: number, api: string, result: string): void;

	rtcEngineDidAudioEffectFinishSoundId?(engine: AgoraRtcEngineKit, soundId: number): void;

	rtcEngineDidAudioMutedByUid?(engine: AgoraRtcEngineKit, muted: boolean, uid: number): void;

	rtcEngineDidAudioPublishStateChangeOldStateNewStateElapseSinceLastState?(engine: AgoraRtcEngineKit, channel: string, oldState: AgoraStreamPublishState, newState: AgoraStreamPublishState, elapseSinceLastState: number): void;

	rtcEngineDidAudioRouteChanged?(engine: AgoraRtcEngineKit, routing: AgoraAudioOutputRouting): void;

	rtcEngineDidAudioSubscribeStateChangeWithUidOldStateNewStateElapseSinceLastState?(engine: AgoraRtcEngineKit, channel: string, uid: number, oldState: AgoraStreamSubscribeState, newState: AgoraStreamSubscribeState, elapseSinceLastState: number): void;

	rtcEngineDidClientRoleChangedNewRole?(engine: AgoraRtcEngineKit, oldRole: AgoraClientRole, newRole: AgoraClientRole): void;

	rtcEngineDidJoinChannelWithUidElapsed?(engine: AgoraRtcEngineKit, channel: string, uid: number, elapsed: number): void;

	rtcEngineDidJoinedOfUidElapsed?(engine: AgoraRtcEngineKit, uid: number, elapsed: number): void;

	rtcEngineDidLeaveChannelWithStats?(engine: AgoraRtcEngineKit, stats: AgoraChannelStats): void;

	rtcEngineDidLocalPublishFallbackToAudioOnly?(engine: AgoraRtcEngineKit, isFallbackOrRecover: boolean): void;

	rtcEngineDidLocalVideoEnabledByUid?(engine: AgoraRtcEngineKit, enabled: boolean, uid: number): void;

	rtcEngineDidMicrophoneEnabled?(engine: AgoraRtcEngineKit, enabled: boolean): void;

	rtcEngineDidOccurError?(engine: AgoraRtcEngineKit, errorCode: AgoraErrorCode): void;

	rtcEngineDidOccurStreamMessageErrorFromUidStreamIdErrorMissedCached?(engine: AgoraRtcEngineKit, uid: number, streamId: number, error: number, missed: number, cached: number): void;

	rtcEngineDidOccurWarning?(engine: AgoraRtcEngineKit, warningCode: AgoraWarningCode): void;

	rtcEngineDidOfflineOfUidReason?(engine: AgoraRtcEngineKit, uid: number, reason: AgoraUserOfflineReason): void;

	rtcEngineDidReceiveChannelMediaRelayEvent?(engine: AgoraRtcEngineKit, event: AgoraChannelMediaRelayEvent): void;

	rtcEngineDidRegisteredLocalUserWithUid?(engine: AgoraRtcEngineKit, userAccount: string, uid: number): void;

	rtcEngineDidRejoinChannelWithUidElapsed?(engine: AgoraRtcEngineKit, channel: string, uid: number, elapsed: number): void;

	rtcEngineDidRemoteSubscribeFallbackToAudioOnlyByUid?(engine: AgoraRtcEngineKit, isFallbackOrRecover: boolean, uid: number): void;

	rtcEngineDidUpdatedUserInfoWithUid?(engine: AgoraRtcEngineKit, userInfo: AgoraUserInfo, uid: number): void;

	rtcEngineDidVideoEnabledByUid?(engine: AgoraRtcEngineKit, enabled: boolean, uid: number): void;

	rtcEngineDidVideoMutedByUid?(engine: AgoraRtcEngineKit, muted: boolean, uid: number): void;

	rtcEngineDidVideoPublishStateChangeOldStateNewStateElapseSinceLastState?(engine: AgoraRtcEngineKit, channel: string, oldState: AgoraStreamPublishState, newState: AgoraStreamPublishState, elapseSinceLastState: number): void;

	rtcEngineDidVideoSubscribeStateChangeWithUidOldStateNewStateElapseSinceLastState?(engine: AgoraRtcEngineKit, channel: string, uid: number, oldState: AgoraStreamSubscribeState, newState: AgoraStreamSubscribeState, elapseSinceLastState: number): void;

	rtcEngineFacePositionDidChangeWidthPreviewHeightFaces?(engine: AgoraRtcEngineKit, width: number, height: number, faces: NSArray<AgoraFacePositionInfo> | AgoraFacePositionInfo[]): void;

	rtcEngineFirstLocalAudioFrame?(engine: AgoraRtcEngineKit, elapsed: number): void;

	rtcEngineFirstLocalAudioFramePublished?(engine: AgoraRtcEngineKit, elapsed: number): void;

	rtcEngineFirstLocalVideoFramePublished?(engine: AgoraRtcEngineKit, elapsed: number): void;

	rtcEngineFirstLocalVideoFrameWithSizeElapsed?(engine: AgoraRtcEngineKit, size: CGSize, elapsed: number): void;

	rtcEngineFirstRemoteAudioFrameDecodedOfUidElapsed?(engine: AgoraRtcEngineKit, uid: number, elapsed: number): void;

	rtcEngineFirstRemoteAudioFrameOfUidElapsed?(engine: AgoraRtcEngineKit, uid: number, elapsed: number): void;

	rtcEngineFirstRemoteVideoDecodedOfUidSizeElapsed?(engine: AgoraRtcEngineKit, uid: number, size: CGSize, elapsed: number): void;

	rtcEngineFirstRemoteVideoFrameOfUidSizeElapsed?(engine: AgoraRtcEngineKit, uid: number, size: CGSize, elapsed: number): void;

	rtcEngineLastmileProbeTestResult?(engine: AgoraRtcEngineKit, result: AgoraLastmileProbeResult): void;

	rtcEngineLastmileQuality?(engine: AgoraRtcEngineKit, quality: AgoraNetworkQuality): void;

	rtcEngineLocalAudioMixingDidFinish?(engine: AgoraRtcEngineKit): void;

	rtcEngineLocalAudioMixingStateDidChangedReason?(engine: AgoraRtcEngineKit, state: AgoraAudioMixingStateCode, reason: AgoraAudioMixingReasonCode): void;

	rtcEngineLocalAudioStateChangeError?(engine: AgoraRtcEngineKit, state: AgoraAudioLocalState, error: AgoraAudioLocalError): void;

	rtcEngineLocalAudioStats?(engine: AgoraRtcEngineKit, stats: AgoraRtcLocalAudioStats): void;

	rtcEngineLocalVideoStateChangeError?(engine: AgoraRtcEngineKit, state: AgoraLocalVideoStreamState, error: AgoraLocalVideoStreamError): void;

	rtcEngineLocalVideoStats?(engine: AgoraRtcEngineKit, stats: AgoraRtcLocalVideoStats): void;

	rtcEngineMediaEngineDidLoaded?(engine: AgoraRtcEngineKit): void;

	rtcEngineMediaEngineDidStartCall?(engine: AgoraRtcEngineKit): void;

	rtcEngineNetworkQualityTxQualityRxQuality?(engine: AgoraRtcEngineKit, uid: number, txQuality: AgoraNetworkQuality, rxQuality: AgoraNetworkQuality): void;

	rtcEngineNetworkTypeChangedToType?(engine: AgoraRtcEngineKit, type: AgoraNetworkType): void;

	rtcEngineReceiveStreamMessageFromUidStreamIdData?(engine: AgoraRtcEngineKit, uid: number, streamId: number, data: NSData): void;

	rtcEngineRemoteAudioMixingDidFinish?(engine: AgoraRtcEngineKit): void;

	rtcEngineRemoteAudioMixingDidStart?(engine: AgoraRtcEngineKit): void;

	rtcEngineRemoteAudioStateChangedOfUidStateReasonElapsed?(engine: AgoraRtcEngineKit, uid: number, state: AgoraAudioRemoteState, reason: AgoraAudioRemoteStateReason, elapsed: number): void;

	rtcEngineRemoteAudioStats?(engine: AgoraRtcEngineKit, stats: AgoraRtcRemoteAudioStats): void;

	rtcEngineRemoteVideoStateChangedOfUidStateReasonElapsed?(engine: AgoraRtcEngineKit, uid: number, state: AgoraVideoRemoteState, reason: AgoraVideoRemoteStateReason, elapsed: number): void;

	rtcEngineRemoteVideoStats?(engine: AgoraRtcEngineKit, stats: AgoraRtcRemoteVideoStats): void;

	rtcEngineReportAudioVolumeIndicationOfSpeakersTotalVolume?(engine: AgoraRtcEngineKit, speakers: NSArray<AgoraRtcAudioVolumeInfo> | AgoraRtcAudioVolumeInfo[], totalVolume: number): void;

	rtcEngineReportRtcStats?(engine: AgoraRtcEngineKit, stats: AgoraChannelStats): void;

	rtcEngineRequestToken?(engine: AgoraRtcEngineKit): void;

	rtcEngineRtmpStreamingChangedToStateStateErrorCode?(engine: AgoraRtcEngineKit, url: string, state: AgoraRtmpStreamingState, errorCode: AgoraRtmpStreamingErrorCode): void;

	rtcEngineRtmpStreamingEventWithUrlEventCode?(engine: AgoraRtcEngineKit, url: string, eventCode: AgoraRtmpStreamingEvent): void;

	rtcEngineStreamInjectedStatusOfUrlUidStatus?(engine: AgoraRtcEngineKit, url: string, uid: number, status: AgoraInjectStreamStatus): void;

	rtcEngineStreamPublishedWithUrlErrorCode?(engine: AgoraRtcEngineKit, url: string, errorCode: AgoraErrorCode): void;

	rtcEngineStreamUnpublishedWithUrl?(engine: AgoraRtcEngineKit, url: string): void;

	rtcEngineSuperResolutionEnabledOfUidEnabledReason?(engine: AgoraRtcEngineKit, uid: number, enabled: boolean, reason: AgoraSuperResolutionStateReason): void;

	rtcEngineTokenPrivilegeWillExpire?(engine: AgoraRtcEngineKit, token: string): void;

	rtcEngineTranscodingUpdated?(engine: AgoraRtcEngineKit): void;

	rtcEngineUploadLogResultRequestIdSuccessReason?(engine: AgoraRtcEngineKit, requestId: string, success: boolean, reason: AgoraUploadErrorReason): void;

	rtcEngineVideoDidStop?(engine: AgoraRtcEngineKit): void;

	rtcEngineVideoSizeChangedOfUidSizeRotation?(engine: AgoraRtcEngineKit, uid: number, size: CGSize, rotation: number): void;

	rtcEngineVideoTransportStatsOfUidDelayLostRxKBitRate?(engine: AgoraRtcEngineKit, uid: number, delay: number, lost: number, rxKBitRate: number): void;
}
declare var AgoraRtcEngineDelegate: {
	prototype: AgoraRtcEngineDelegate;
};

declare class AgoraRtcEngineKit extends NSObject {
	static alloc(): AgoraRtcEngineKit; // inherited from NSObject

	static destroy(): void;

	static getErrorDescription(code: number): string;

	static getMediaEngineVersion(): string;

	static getSdkVersion(): string;

	static new(): AgoraRtcEngineKit; // inherited from NSObject

	static sharedEngineWithAppIdDelegate(appId: string, delegate: AgoraRtcEngineDelegate): AgoraRtcEngineKit;

	static sharedEngineWithAppIdError(AppId: string, errorBlock: (p1: AgoraErrorCode) => void): AgoraRtcEngineKit;

	static sharedEngineWithConfigDelegate(config: AgoraRtcEngineConfig, delegate: AgoraRtcEngineDelegate): AgoraRtcEngineKit;

	delegate: AgoraRtcEngineDelegate;

	logWriterDelegate: AgoraLogWriterDelegate;

	addInjectStreamUrlConfig(url: string, config: AgoraLiveInjectStreamConfig): number;

	addPublishStreamUrlTranscodingEnabled(url: string, transcodingEnabled: boolean): number;

	addVideoWatermark(watermark: AgoraImage): number;

	addVideoWatermarkOptions(url: NSURL, options: WatermarkOptions): number;

	adjustAudioMixingPlayoutVolume(volume: number): number;

	adjustAudioMixingPublishVolume(volume: number): number;

	adjustAudioMixingVolume(volume: number): number;

	adjustLoopbackRecordingSignalVolume(volume: number): number;

	adjustPlaybackSignalVolume(volume: number): number;

	adjustRecordingSignalVolume(volume: number): number;

	adjustUserPlaybackSignalVolumeVolume(uid: number, volume: number): number;

	audioQualityBlock(audioQualityBlock: (p1: number, p2: AgoraNetworkQuality, p3: number, p4: number) => void): void;

	audioVolumeIndicationBlock(audioVolumeIndicationBlock: (p1: NSArray<any>, p2: number) => void): void;

	cameraReadyBlock(cameraReadyBlock: () => void): void;

	clearVideoWatermarks(): number;

	complainDescription(callId: string, description: string): number;

	configRhythmPlayer(config: AgoraRtcRhythmPlayerConfig): number;

	connectionLostBlock(connectionLostBlock: () => void): void;

	createDataStreamConfig(streamId: interop.Pointer | interop.Reference<number>, config: AgoraDataStreamConfig): number;

	createDataStreamReliableOrdered(streamId: interop.Pointer | interop.Reference<number>, reliable: boolean, ordered: boolean): number;

	createRtcChannel(channelId: string): AgoraRtcChannel;

	disableAudio(): number;

	disableExternalAudioSink(): void;

	disableExternalAudioSource(): void;

	disableLastmileTest(): number;

	disableVideo(): number;

	enableAudio(): number;

	enableAudioVolumeIndicationSmoothReport_vad(interval: number, smooth: number, report_vad: boolean): number;

	enableDeepLearningDenoise(enabled: boolean): number;

	enableDualStreamMode(enabled: boolean): number;

	enableEncryptionEncryptionConfig(enabled: boolean, config: AgoraEncryptionConfig): number;

	enableExternalAudioSinkChannels(sampleRate: number, channels: number): void;

	enableExternalAudioSourceWithSampleRateChannelsPerFrame(sampleRate: number, channelsPerFrame: number): void;

	enableFaceDetection(enable: boolean): number;

	enableInEarMonitoring(enabled: boolean): number;

	enableLastmileTest(): number;

	enableLocalAudio(enabled: boolean): number;

	enableLocalVideo(enabled: boolean): number;

	enableMainQueueDispatch(enabled: boolean): number;

	enableRemoteSuperResolutionEnabled(uid: number, enabled: boolean): number;

	enableSoundPositionIndication(enabled: boolean): number;

	enableVideo(): number;

	enableWebSdkInteroperability(enabled: boolean): number;

	firstLocalVideoFrameBlock(firstLocalVideoFrameBlock: (p1: number, p2: number, p3: number) => void): void;

	firstRemoteVideoDecodedBlock(firstRemoteVideoDecodedBlock: (p1: number, p2: number, p3: number, p4: number) => void): void;

	firstRemoteVideoFrameBlock(firstRemoteVideoFrameBlock: (p1: number, p2: number, p3: number, p4: number) => void): void;

	getAudioMixingCurrentPosition(): number;

	getAudioMixingDuration(filePath: string): number;

	getAudioMixingPlayoutVolume(): number;

	getAudioMixingPublishVolume(): number;

	getCallId(): string;

	getConnectionState(): AgoraConnectionStateType;

	getEffectCurrentPosition(soundId: number): number;

	getEffectDuration(filePath: string): number;

	getEffectsVolume(): number;

	getNativeHandle(): interop.Pointer | interop.Reference<any>;

	getParameterArgs(parameter: string, args: string): string;

	getUserInfoByUidWithError(uid: number, error: interop.Pointer | interop.Reference<AgoraErrorCode>): AgoraUserInfo;

	getUserInfoByUserAccountWithError(userAccount: string, error: interop.Pointer | interop.Reference<AgoraErrorCode>): AgoraUserInfo;

	isCameraAutoFocusFaceModeSupported(): boolean;

	isCameraExposurePositionSupported(): boolean;

	isCameraFocusPositionInPreviewSupported(): boolean;

	isCameraTorchSupported(): boolean;

	isCameraZoomSupported(): boolean;

	isSpeakerphoneEnabled(): boolean;

	joinChannelByTokenChannelIdInfoUidJoinSuccess(token: string, channelId: string, info: string, uid: number, joinSuccessBlock: (p1: string, p2: number, p3: number) => void): number;

	joinChannelByTokenChannelIdInfoUidOptions(token: string, channelId: string, info: string, uid: number, options: AgoraRtcChannelMediaOptions): number;

	joinChannelByUserAccountTokenChannelIdJoinSuccess(userAccount: string, token: string, channelId: string, joinSuccessBlock: (p1: string, p2: number, p3: number) => void): number;

	joinChannelByUserAccountTokenChannelIdOptions(userAccount: string, token: string, channelId: string, options: AgoraRtcChannelMediaOptions): number;

	lastmileQualityBlock(lastmileQualityBlock: (p1: AgoraNetworkQuality) => void): void;

	leaveChannel(leaveChannelBlock: (p1: AgoraChannelStats) => void): number;

	leaveChannelBlock(leaveChannelBlock: (p1: AgoraChannelStats) => void): void;

	localVideoRenderer(): AgoraVideoSinkProtocol;

	localVideoStatBlock(localVideoStatBlock: (p1: number, p2: number) => void): void;

	mediaEngineEventBlock(mediaEngineEventBlock: (p1: number) => void): void;

	muteAllRemoteAudioStreams(mute: boolean): number;

	muteAllRemoteVideoStreams(mute: boolean): number;

	muteLocalAudioStream(mute: boolean): number;

	muteLocalVideoStream(mute: boolean): number;

	muteRemoteAudioStreamMute(uid: number, mute: boolean): number;

	muteRemoteVideoStreamMute(uid: number, mute: boolean): number;

	networkQualityBlock(networkQualityBlock: (p1: number, p2: AgoraNetworkQuality, p3: AgoraNetworkQuality) => void): void;

	pauseAllEffects(): number;

	pauseAudio(): number;

	pauseAudioMixing(): number;

	pauseEffect(soundId: number): number;

	playEffectFilePathLoopCountPitchPanGain(soundId: number, filePath: string, loopCount: number, pitch: number, pan: number, gain: number): number;

	playEffectFilePathLoopCountPitchPanGainPublish(soundId: number, filePath: string, loopCount: number, pitch: number, pan: number, gain: number, publish: boolean): number;

	playEffectFilePathLoopCountPitchPanGainPublishStartPos(soundId: number, filePath: string, loopCount: number, pitch: number, pan: number, gain: number, publish: boolean, startPos: number): number;

	preloadEffectFilePath(soundId: number, filePath: string): number;

	pullPlaybackAudioFrameRawDataLengthInByte(data: interop.Pointer | interop.Reference<any>, lengthInByte: number): boolean;

	pullPlaybackAudioFrameSampleBufferByLengthInByte(lengthInByte: number): any;

	pushExternalAudioFrameRawDataSamplesTimestamp(data: interop.Pointer | interop.Reference<any>, samples: number, timestamp: number): boolean;

	pushExternalAudioFrameSampleBuffer(sampleBuffer: any): boolean;

	pushExternalVideoFrame(frame: AgoraVideoFrame): boolean;

	rateRatingDescription(callId: string, rating: number, description: string): number;

	registerLocalUserAccountAppId(userAccount: string, appId: string): number;

	rejoinChannelSuccessBlock(rejoinChannelSuccessBlock: (p1: string, p2: number, p3: number) => void): void;

	remoteAudioStatBlock(remoteAudioStatBlock: (p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number) => void): void;

	remoteVideoRendererOfUserId(userId: number): AgoraVideoSinkProtocol;

	remoteVideoStatBlock(remoteVideoStatBlock: (p1: number, p2: number, p3: number, p4: number, p5: number) => void): void;

	removeInjectStreamUrl(url: string): number;

	removePublishStreamUrl(url: string): number;

	renewToken(token: string): number;

	resumeAllEffects(): number;

	resumeAudio(): number;

	resumeAudioMixing(): number;

	resumeEffect(soundId: number): number;

	rtcStatsBlock(rtcStatsBlock: (p1: AgoraChannelStats) => void): void;

	sendCustomReportMessageCategoryEventLabelValue(id: string, category: string, event: string, label: string, value: number): number;

	sendStreamMessageData(streamId: number, data: NSData): number;

	setAudioEffectParametersParam1Param2(preset: AgoraAudioEffectPreset, param1: number, param2: number): number;

	setAudioEffectPreset(preset: AgoraAudioEffectPreset): number;

	setAudioFrameDelegate(delegate: AgoraAudioFrameDelegate): boolean;

	setAudioMixingPitch(pitch: number): number;

	setAudioMixingPosition(pos: number): number;

	setAudioProfileScenario(profile: AgoraAudioProfile, scenario: AgoraAudioScenario): number;

	setAudioSessionOperationRestriction(restriction: AgoraAudioSessionOperationRestriction): void;

	setBeautyEffectOptionsOptions(enable: boolean, options: AgoraBeautyOptions): number;

	setCameraAutoFocusFaceModeEnabled(enable: boolean): boolean;

	setCameraCapturerConfiguration(configuration: AgoraCameraCapturerConfiguration): number;

	setCameraExposurePosition(positionInView: CGPoint): boolean;

	setCameraFocusPositionInPreview(position: CGPoint): boolean;

	setCameraTorchOn(isOn: boolean): boolean;

	setCameraZoomFactor(zoomFactor: number): number;

	setChannelProfile(profile: AgoraChannelProfile): number;

	setClientRole(role: AgoraClientRole): number;

	setClientRoleOptions(role: AgoraClientRole, options: AgoraClientRoleOptions): number;

	setCloudProxy(proxyType: AgoraCloudProxyType): number;

	setDefaultAudioRouteToSpeakerphone(defaultToSpeaker: boolean): number;

	setDefaultMuteAllRemoteAudioStreams(mute: boolean): number;

	setDefaultMuteAllRemoteVideoStreams(mute: boolean): number;

	setEffectPositionPos(soundId: number, pos: number): number;

	setEffectsVolume(volume: number): number;

	setEnableSpeakerphone(enableSpeaker: boolean): number;

	setEncryptionMode(encryptionMode: string): number;

	setEncryptionSecret(secret: string): number;

	setExternalVideoSourceUseTexturePushMode(enable: boolean, useTexture: boolean, pushMode: boolean): void;

	setHighQualityAudioParametersWithFullbandStereoFullBitrate(fullband: boolean, stereo: boolean, fullBitrate: boolean): number;

	setInEarMonitoringVolume(volume: number): number;

	setLiveTranscoding(transcoding: AgoraLiveTranscoding): number;

	setLocalPublishFallbackOption(option: AgoraStreamFallbackOptions): number;

	setLocalRenderMode(mode: AgoraVideoRenderMode): number;

	setLocalRenderModeMirrorMode(renderMode: AgoraVideoRenderMode, mirrorMode: AgoraVideoMirrorMode): number;

	setLocalVideoMirrorMode(mode: AgoraVideoMirrorMode): number;

	setLocalVideoRenderer(videoRenderer: AgoraVideoSinkProtocol): void;

	setLocalVoiceChanger(voiceChanger: AgoraAudioVoiceChanger): number;

	setLocalVoiceEqualizationOfBandFrequencyWithGain(bandFrequency: AgoraAudioEqualizationBandFrequency, gain: number): number;

	setLocalVoicePitch(pitch: number): number;

	setLocalVoiceReverbOfTypeWithValue(reverbType: AgoraAudioReverbType, value: number): number;

	setLocalVoiceReverbPreset(reverbPreset: AgoraAudioReverbPreset): number;

	setLogFile(filePath: string): number;

	setLogFileSize(fileSizeInKBytes: number): number;

	setLogFilter(filter: number): number;

	setMediaMetadataDataSourceWithType(metadataDataSource: AgoraMediaMetadataDataSource, type: AgoraMetadataType): boolean;

	setMediaMetadataDelegateWithType(metadataDelegate: AgoraMediaMetadataDelegate, type: AgoraMetadataType): boolean;

	setMixedAudioFrameParametersWithSampleRateSamplesPerCall(sampleRate: number, samplesPerCall: number): number;

	setParameters(options: string): number;

	setPlaybackAudioFrameParametersWithSampleRateChannelModeSamplesPerCall(sampleRate: number, channel: number, mode: AgoraAudioRawFrameOperationMode, samplesPerCall: number): number;

	setRecordingAudioFrameParametersWithSampleRateChannelModeSamplesPerCall(sampleRate: number, channel: number, mode: AgoraAudioRawFrameOperationMode, samplesPerCall: number): number;

	setRemoteDefaultVideoStreamType(streamType: AgoraVideoStreamType): number;

	setRemoteRenderModeMode(uid: number, mode: AgoraVideoRenderMode): number;

	setRemoteRenderModeRenderModeMirrorMode(uid: number, renderMode: AgoraVideoRenderMode, mirrorMode: AgoraVideoMirrorMode): number;

	setRemoteSubscribeFallbackOption(option: AgoraStreamFallbackOptions): number;

	setRemoteUserPriorityType(uid: number, userPriority: AgoraUserPriority): number;

	setRemoteVideoRendererForUserId(videoRenderer: AgoraVideoSinkProtocol, userId: number): void;

	setRemoteVideoStreamType(uid: number, streamType: AgoraVideoStreamType): number;

	setRemoteVoicePositionPanGain(uid: number, pan: number, gain: number): number;

	setVideoEncoderConfiguration(config: AgoraVideoEncoderConfiguration): number;

	setVideoProfileSwapWidthAndHeight(profile: AgoraVideoProfile, swapWidthAndHeight: boolean): number;

	setVideoQualityParameters(preferFrameRateOverImageQuality: boolean): number;

	setVideoResolutionAndFrameRateBitrate(size: CGSize, frameRate: number, bitrate: number): number;

	setVideoSource(videoSource: AgoraVideoSourceProtocol): void;

	setVoiceBeautifierParametersParam1Param2(preset: AgoraVoiceBeautifierPreset, param1: number, param2: number): number;

	setVoiceBeautifierPreset(preset: AgoraVoiceBeautifierPreset): number;

	setVoiceConversionPreset(preset: AgoraVoiceConversionPreset): number;

	setVolumeOfEffectWithVolume(soundId: number, volume: number): number;

	setupLocalVideo(local: AgoraRtcVideoCanvas): number;

	setupRemoteVideo(remote: AgoraRtcVideoCanvas): number;

	startAudioMixingLoopbackReplaceCycle(filePath: string, loopback: boolean, replace: boolean, cycle: number): number;

	startAudioMixingLoopbackReplaceCycleStartPos(filePath: string, loopback: boolean, replace: boolean, cycle: number, startPos: number): number;

	startAudioRecordingQuality(filePath: string, quality: AgoraAudioRecordingQuality): number;

	startAudioRecordingSampleRateQuality(filePath: string, sampleRate: number, quality: AgoraAudioRecordingQuality): number;

	startAudioRecordingWithConfig(config: AgoraAudioRecordingConfiguration): number;

	startChannelMediaRelay(config: AgoraChannelMediaRelayConfiguration): number;

	startEchoTest(successBlock: (p1: string, p2: number, p3: number) => void): number;

	startEchoTestWithIntervalSuccessBlock(interval: number, successBlock: (p1: string, p2: number, p3: number) => void): number;

	startLastmileProbeTest(config: AgoraLastmileProbeConfig): number;

	startPreview(): number;

	startRhythmPlayerSound2Config(sound1: string, sound2: string, config: AgoraRtcRhythmPlayerConfig): number;

	stopAllEffects(): number;

	stopAudioMixing(): number;

	stopAudioRecording(): number;

	stopChannelMediaRelay(): number;

	stopEchoTest(): number;

	stopEffect(soundId: number): number;

	stopLastmileProbeTest(): number;

	stopPreview(): number;

	stopRhythmPlayer(): number;

	switchCamera(): number;

	switchChannelByTokenChannelIdJoinSuccess(token: string, channelId: string, joinSuccessBlock: (p1: string, p2: number, p3: number) => void): number;

	switchChannelByTokenChannelIdOptions(token: string, channelId: string, options: AgoraRtcChannelMediaOptions): number;

	unloadEffect(soundId: number): number;

	updateChannelMediaRelay(config: AgoraChannelMediaRelayConfiguration): number;

	uploadLogFile(): string;

	userJoinedBlock(userJoinedBlock: (p1: number, p2: number) => void): void;

	userMuteAudioBlock(userMuteAudioBlock: (p1: number, p2: boolean) => void): void;

	userMuteVideoBlock(userMuteVideoBlock: (p1: number, p2: boolean) => void): void;

	userOfflineBlock(userOfflineBlock: (p1: number) => void): void;

	videoSource(): AgoraVideoSourceProtocol;
}

declare class AgoraRtcLocalAudioStats extends NSObject {
	static alloc(): AgoraRtcLocalAudioStats; // inherited from NSObject

	static new(): AgoraRtcLocalAudioStats; // inherited from NSObject

	numChannels: number;

	sentBitrate: number;

	sentSampleRate: number;

	txPacketLossRate: number;
}

declare class AgoraRtcLocalVideoStats extends NSObject {
	static alloc(): AgoraRtcLocalVideoStats; // inherited from NSObject

	static new(): AgoraRtcLocalVideoStats; // inherited from NSObject

	captureBrightnessLevel: AgoraCaptureBrightnessLevelType;

	captureFrameRate: number;

	codecType: AgoraVideoCodecType;

	encodedBitrate: number;

	encodedFrameCount: number;

	encodedFrameHeight: number;

	encodedFrameWidth: number;

	encoderOutputFrameRate: number;

	qualityAdaptIndication: AgoraVideoQualityAdaptIndication;

	rendererOutputFrameRate: number;

	sentBitrate: number;

	sentFrameRate: number;

	sentTargetBitrate: number;

	sentTargetFrameRate: number;

	txPacketLossRate: number;
}

declare class AgoraRtcRemoteAudioStats extends NSObject {
	static alloc(): AgoraRtcRemoteAudioStats; // inherited from NSObject

	static new(): AgoraRtcRemoteAudioStats; // inherited from NSObject

	audioLossRate: number;

	frozenRate: number;

	jitterBufferDelay: number;

	mosValue: number;

	networkTransportDelay: number;

	numChannels: number;

	publishDuration: number;

	qoeQuality: number;

	quality: number;

	qualityChangedReason: number;

	receivedBitrate: number;

	receivedSampleRate: number;

	totalActiveTime: number;

	totalFrozenTime: number;

	uid: number;
}

declare class AgoraRtcRemoteVideoStats extends NSObject {
	static alloc(): AgoraRtcRemoteVideoStats; // inherited from NSObject

	static new(): AgoraRtcRemoteVideoStats; // inherited from NSObject

	decoderOutputFrameRate: number;

	delay: number;

	frozenRate: number;

	height: number;

	packetLossRate: number;

	publishDuration: number;

	receivedBitrate: number;

	rendererOutputFrameRate: number;

	rxStreamType: AgoraVideoStreamType;

	totalActiveTime: number;

	totalFrozenTime: number;

	uid: number;

	width: number;
}

declare class AgoraRtcRhythmPlayerConfig extends NSObject {
	static alloc(): AgoraRtcRhythmPlayerConfig; // inherited from NSObject

	static new(): AgoraRtcRhythmPlayerConfig; // inherited from NSObject

	beatsPerMeasure: number;

	beatsPerMinute: number;

	publish: boolean;
}

declare class AgoraRtcVideoCanvas extends NSObject {
	static alloc(): AgoraRtcVideoCanvas; // inherited from NSObject

	static new(): AgoraRtcVideoCanvas; // inherited from NSObject

	channelId: string;

	mirrorMode: AgoraVideoMirrorMode;

	renderMode: AgoraVideoRenderMode;

	uid: number;

	view: UIView;
}

declare const enum AgoraRtmpStreamLifeCycle {
	BindToChannel = 1,

	BindToOwnner = 2,
}

declare const enum AgoraRtmpStreamingErrorCode {
	OK = 0,

	InvalidParameters = 1,

	EncryptedStreamNotAllowed = 2,

	ConnectionTimeout = 3,

	InternalServerError = 4,

	RtmpServerError = 5,

	TooOften = 6,

	ReachLimit = 7,

	NotAuthorized = 8,

	StreamNotFound = 9,

	FormatNotSupported = 10,
}

declare const enum AgoraRtmpStreamingEvent {
	FailedLoadImage = 1,
}

declare const enum AgoraRtmpStreamingState {
	Idle = 0,

	Connecting = 1,

	Running = 2,

	Recovering = 3,

	Failure = 4,
}

declare class AgoraScreenCaptureParameters extends NSObject {
	static alloc(): AgoraScreenCaptureParameters; // inherited from NSObject

	static new(): AgoraScreenCaptureParameters; // inherited from NSObject

	bitrate: number;

	captureMouseCursor: boolean;

	dimensions: CGSize;

	excludeWindowList: NSArray<any>;

	frameRate: number;

	windowFocus: boolean;
}

declare const enum AgoraStreamFallbackOptions {
	Disabled = 0,

	VideoStreamLow = 1,

	AudioOnly = 2,
}

declare const enum AgoraStreamPublishState {
	Idle = 0,

	NoPublished = 1,

	Publishing = 2,

	Published = 3,
}

declare const enum AgoraStreamSubscribeState {
	Idle = 0,

	NoSubscribed = 1,

	Subscribing = 2,

	Subscribed = 3,
}

declare const enum AgoraSuperResolutionStateReason {
	RStateReasonSuccess = 0,

	RStateReasonStreamOverLimitation = 1,

	RStateReasonUserCountOverLimitation = 2,

	RStateReasonDeviceNotSupported = 3,
}

declare const enum AgoraUploadErrorReason {
	Success = 0,

	NetError = 1,

	ServerError = 2,
}

declare class AgoraUserInfo extends NSObject {
	static alloc(): AgoraUserInfo; // inherited from NSObject

	static new(): AgoraUserInfo; // inherited from NSObject

	uid: number;

	userAccount: string;
}

declare const enum AgoraUserOfflineReason {
	Quit = 0,

	Dropped = 1,

	BecomeAudience = 2,
}

declare const enum AgoraUserPriority {
	High = 50,

	Normal = 100,
}

declare var AgoraVideoBitrateCompatible: number;

declare var AgoraVideoBitrateDefaultMin: number;

declare var AgoraVideoBitrateStandard: number;

declare const enum AgoraVideoBufferType {
	PixelBuffer = 1,

	RawData = 2,
}

declare const enum AgoraVideoCaptureType {
	Unknown = 0,

	Camera = 1,

	Screen = 2,
}

declare const enum AgoraVideoCodecProfileType {
	BaseLine = 66,

	Main = 77,

	High = 100,
}

declare const enum AgoraVideoCodecType {
	VP8 = 1,

	H264 = 2,

	EVP = 3,

	E264 = 4,
}

declare const enum AgoraVideoCodecTypeForStream {
	H264ForStream = 1,

	H265ForStream = 2,
}

declare const enum AgoraVideoContentHint {
	None = 0,

	Motion = 1,

	Details = 2,
}

declare var AgoraVideoDimension120x120: CGSize;

declare var AgoraVideoDimension1280x720: CGSize;

declare var AgoraVideoDimension160x120: CGSize;

declare var AgoraVideoDimension180x180: CGSize;

declare var AgoraVideoDimension240x180: CGSize;

declare var AgoraVideoDimension240x240: CGSize;

declare var AgoraVideoDimension320x180: CGSize;

declare var AgoraVideoDimension320x240: CGSize;

declare var AgoraVideoDimension360x360: CGSize;

declare var AgoraVideoDimension424x240: CGSize;

declare var AgoraVideoDimension480x360: CGSize;

declare var AgoraVideoDimension480x480: CGSize;

declare var AgoraVideoDimension640x360: CGSize;

declare var AgoraVideoDimension640x480: CGSize;

declare var AgoraVideoDimension840x480: CGSize;

declare var AgoraVideoDimension960x720: CGSize;

declare class AgoraVideoEncoderConfiguration extends NSObject {
	static alloc(): AgoraVideoEncoderConfiguration; // inherited from NSObject

	static new(): AgoraVideoEncoderConfiguration; // inherited from NSObject

	bitrate: number;

	degradationPreference: AgoraDegradationPreference;

	dimensions: CGSize;

	frameRate: number;

	minBitrate: number;

	minFrameRate: number;

	mirrorMode: AgoraVideoMirrorMode;

	orientationMode: AgoraVideoOutputOrientationMode;

	constructor(o: { size: CGSize; frameRate: AgoraVideoFrameRate; bitrate: number; orientationMode: AgoraVideoOutputOrientationMode });

	constructor(o: { width: number; height: number; frameRate: AgoraVideoFrameRate; bitrate: number; orientationMode: AgoraVideoOutputOrientationMode });

	initWithSizeFrameRateBitrateOrientationMode(size: CGSize, frameRate: AgoraVideoFrameRate, bitrate: number, orientationMode: AgoraVideoOutputOrientationMode): this;

	initWithWidthHeightFrameRateBitrateOrientationMode(width: number, height: number, frameRate: AgoraVideoFrameRate, bitrate: number, orientationMode: AgoraVideoOutputOrientationMode): this;
}

declare class AgoraVideoFrame extends NSObject {
	static alloc(): AgoraVideoFrame; // inherited from NSObject

	static new(): AgoraVideoFrame; // inherited from NSObject

	cropBottom: number;

	cropLeft: number;

	cropRight: number;

	cropTop: number;

	dataBuf: NSData;

	format: number;

	height: number;

	rotation: number;

	stride: number;

	strideInPixels: number;

	textureBuf: any;

	time: CMTime;
}

interface AgoraVideoFrameConsumer extends NSObjectProtocol {
	consumePixelBufferWithTimestampRotation(pixelBuffer: any, timestamp: CMTime, rotation: AgoraVideoRotation): void;

	consumeRawDataWithTimestampFormatSizeRotation(rawData: interop.Pointer | interop.Reference<any>, timestamp: CMTime, format: AgoraVideoPixelFormat, size: CGSize, rotation: AgoraVideoRotation): void;
}
declare var AgoraVideoFrameConsumer: {
	prototype: AgoraVideoFrameConsumer;
};

declare const enum AgoraVideoFrameRate {
	Fps1 = 1,

	Fps7 = 7,

	Fps10 = 10,

	Fps15 = 15,

	Fps24 = 24,

	Fps30 = 30,

	Fps60 = 60,
}

declare const enum AgoraVideoMirrorMode {
	Auto = 0,

	Enabled = 1,

	Disabled = 2,
}

declare const enum AgoraVideoOutputOrientationMode {
	Adaptative = 0,

	FixedLandscape = 1,

	FixedPortrait = 2,
}

declare const enum AgoraVideoPixelFormat {
	I420 = 1,

	BGRA = 2,

	NV12 = 8,
}

declare const enum AgoraVideoProfile {
	Invalid = -1,

	Landscape120P = 0,

	Landscape120P_3 = 2,

	Landscape180P = 10,

	Landscape180P_3 = 12,

	Landscape180P_4 = 13,

	Landscape240P = 20,

	Landscape240P_3 = 22,

	Landscape240P_4 = 23,

	Landscape360P = 30,

	Landscape360P_3 = 32,

	Landscape360P_4 = 33,

	Landscape360P_6 = 35,

	Landscape360P_7 = 36,

	Landscape360P_8 = 37,

	Landscape360P_9 = 38,

	Landscape360P_10 = 39,

	Landscape360P_11 = 100,

	Landscape480P = 40,

	Landscape480P_3 = 42,

	Landscape480P_4 = 43,

	Landscape480P_6 = 45,

	Landscape480P_8 = 47,

	Landscape480P_9 = 48,

	Landscape480P_10 = 49,

	Landscape720P = 50,

	Landscape720P_3 = 52,

	Landscape720P_5 = 54,

	Landscape720P_6 = 55,

	Landscape1080P = 60,

	Landscape1080P_3 = 62,

	Landscape1080P_5 = 64,

	Landscape1440P = 66,

	Landscape1440P_2 = 67,

	Landscape4K = 70,

	Landscape4K_3 = 72,

	Portrait120P = 1000,

	Portrait120P_3 = 1002,

	Portrait180P = 1010,

	Portrait180P_3 = 1012,

	Portrait180P_4 = 1013,

	Portrait240P = 1020,

	Portrait240P_3 = 1022,

	Portrait240P_4 = 1023,

	Portrait360P = 1030,

	Portrait360P_3 = 1032,

	Portrait360P_4 = 1033,

	Portrait360P_6 = 1035,

	Portrait360P_7 = 1036,

	Portrait360P_8 = 1037,

	Portrait360P_9 = 1038,

	Portrait360P_10 = 1039,

	Portrait360P_11 = 1100,

	Portrait480P = 1040,

	Portrait480P_3 = 1042,

	Portrait480P_4 = 1043,

	Portrait480P_6 = 1045,

	Portrait480P_8 = 1047,

	Portrait480P_9 = 1048,

	Portrait480P_10 = 1049,

	Portrait720P = 1050,

	Portrait720P_3 = 1052,

	Portrait720P_5 = 1054,

	Portrait720P_6 = 1055,

	Portrait1080P = 1060,

	Portrait1080P_3 = 1062,

	Portrait1080P_5 = 1064,

	Portrait1440P = 1066,

	Portrait1440P_2 = 1067,

	Portrait4K = 1070,

	Portrait4K_3 = 1072,

	DEFAULT = 30,
}

declare const enum AgoraVideoQualityAdaptIndication {
	None = 0,

	UpBandwidth = 1,

	DownBandwidth = 2,
}

declare const enum AgoraVideoRemoteState {
	Stopped = 0,

	Starting = 1,

	Decoding = 2,

	Frozen = 3,

	Failed = 4,
}

declare const enum AgoraVideoRemoteStateReason {
	Internal = 0,

	NetworkCongestion = 1,

	NetworkRecovery = 2,

	LocalMuted = 3,

	LocalUnmuted = 4,

	RemoteMuted = 5,

	RemoteUnmuted = 6,

	RemoteOffline = 7,

	AudioFallback = 8,

	AudioFallbackRecovery = 9,
}

declare const enum AgoraVideoRenderMode {
	Hidden = 1,

	Fit = 2,

	Adaptive = 3,

	Fill = 4,
}

declare const enum AgoraVideoRotation {
	RotationNone = 0,

	Rotation90 = 1,

	Rotation180 = 2,

	Rotation270 = 3,
}

interface AgoraVideoSinkProtocol extends NSObjectProtocol {
	bufferType(): AgoraVideoBufferType;

	pixelFormat(): AgoraVideoPixelFormat;

	renderPixelBufferRotation?(pixelBuffer: any, rotation: AgoraVideoRotation): void;

	renderRawDataSizeRotation?(rawData: interop.Pointer | interop.Reference<any>, size: CGSize, rotation: AgoraVideoRotation): void;

	shouldDispose(): void;

	shouldInitialize(): boolean;

	shouldStart(): void;

	shouldStop(): void;
}
declare var AgoraVideoSinkProtocol: {
	prototype: AgoraVideoSinkProtocol;
};

interface AgoraVideoSourceProtocol extends NSObjectProtocol {
	consumer: AgoraVideoFrameConsumer;

	bufferType(): AgoraVideoBufferType;

	captureType(): AgoraVideoCaptureType;

	contentHint(): AgoraVideoContentHint;

	shouldDispose(): void;

	shouldInitialize(): boolean;

	shouldStart(): void;

	shouldStop(): void;
}
declare var AgoraVideoSourceProtocol: {
	prototype: AgoraVideoSourceProtocol;
};

declare const enum AgoraVideoStreamType {
	High = 0,

	Low = 1,
}

declare const enum AgoraVoiceBeautifierPreset {
	VoiceBeautifierOff = 0,

	ChatBeautifierMagnetic = 16843008,

	ChatBeautifierFresh = 16843264,

	ChatBeautifierVitality = 16843520,

	SingingBeautifier = 16908544,

	TimbreTransformationVigorous = 16974080,

	TimbreTransformationDeep = 16974336,

	TimbreTransformationMellow = 16974592,

	TimbreTransformationFalsetto = 16974848,

	TimbreTransformationFull = 16975104,

	TimbreTransformationClear = 16975360,

	TimbreTransformationResounding = 16975616,

	TimbreTransformationRinging = 16975872,
}

declare const enum AgoraVoiceConversionPreset {
	ConversionOff = 0,

	ChangerNeutral = 50397440,

	ChangerSweet = 50397696,

	ChangerSolid = 50397952,

	ChangerBass = 50398208,
}

declare const enum AgoraWarningCode {
	InvalidView = 8,

	InitVideo = 16,

	Pending = 20,

	NoAvailableChannel = 103,

	LookupChannelTimeout = 104,

	LookupChannelRejected = 105,

	OpenChannelTimeout = 106,

	OpenChannelRejected = 107,

	SwitchLiveVideoTimeout = 111,

	SetClientRoleTimeout = 118,

	SetClientRoleNotAuthorized = 119,

	OpenChannelInvalidTicket = 121,

	OpenChannelTryNextVos = 122,

	AudioMixingOpenError = 701,

	AdmRuntimePlayoutWarning = 1014,

	AdmRuntimeRecordingWarning = 1016,

	AdmRecordAudioSilence = 1019,

	AdmPlaybackMalfunction = 1020,

	AdmRecordMalfunction = 1021,

	AdmInterruption = 1025,

	AdmCategoryNotPlayAndRecord = 1029,

	AdmRecordAudioLowlevel = 1031,

	AdmPlayoutAudioLowlevel = 1032,

	AdmNoDataReadyCallback = 1040,

	AdmInconsistentDevices = 1042,

	ApmHowling = 1051,

	AdmGlitchState = 1052,

	ApmResidualEcho = 1053,

	SuperResolutionStreamOverLimitation = 1610,

	SuperResolutionUserCountOverLimitation = 1611,

	SuperResolutionDeviceNotSupported = 1612,
}

declare var LBHQ: string;

declare var VEO: string;

declare class WatermarkOptions extends NSObject {
	static alloc(): WatermarkOptions; // inherited from NSObject

	static new(): WatermarkOptions; // inherited from NSObject

	positionInLandscapeMode: CGRect;

	positionInPortraitMode: CGRect;

	visibleInPreview: boolean;
}
