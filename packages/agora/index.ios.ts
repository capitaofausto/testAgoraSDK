import { AgoraCommon } from './common';
import { Device, File, Frame, ImageSource, knownFolders, path } from '@nativescript/core';

export class Agora extends AgoraCommon {
	rtcEngine: AgoraRtcEngineKit;
	delegate: ViewController;

	start() {
		console.log('Banuba start IOS');
		let topMostFrame = Frame.topmost();
		let viewController: UIViewController = topMostFrame.currentPage && topMostFrame.currentPage.ios;
		this.delegate = ViewController.initWithOwner(this);
		this.delegate._owner = new WeakRef(this);
		// this.rtcEngine.delegate = this.delegate;
		this.delegate.viewDidLoad();
	}
}

/*
// Specifies AgoraRtcEngineDelegate for monitoring a callback
@interface ViewController : UIViewController <AgoraRtcEngineDelegate>
// Defines agoraKit
@property (strong, nonatomic) AgoraRtcEngineKit *agoraKit;
*/
@NativeClass()
class ViewController extends UIViewController implements AgoraRtcEngineDelegate {
	public static ObjCProtocols = [AgoraRtcEngineDelegate];
	public static ObjCExposedMethods = {
		viewDidLoad: { returns: interop.types.void, params: [] },
	};

	_owner: WeakRef<Agora>;
	agoraKit: AgoraRtcEngineKit;

	static new(): ViewController {
		return <ViewController>super.new(); // calls new() on the NSObject
	}

	public static initWithOwner(owner: Agora): ViewController {
		let delegate = <ViewController>super.new();
		delegate._owner = new WeakRef(owner);
		return delegate;
	}

	viewDidLoad() {
		console.log('VIEW DID LOAD');

		super.viewDidLoad();
		// The following functions are used when calling Agora APIs
		this.initializeAgoraEngine();
		this.joinChannel();
	}

	initializeAgoraEngine() {
		// Initializes AgoraRtcEngineKit
		this.agoraKit = AgoraRtcEngineKit.sharedEngineWithAppIdDelegate('2338b5c9feb94e608ba09158446a887e', this);
	}

	joinChannel() {
		// The uid of each user in the channel must be unique.
		this.agoraKit?.joinChannelByTokenChannelIdInfoUidJoinSuccess('0062338b5c9feb94e608ba09158446a887eIACspASGIOV1G/Qcdgwg3Xbved2wie772g5Y9i3x/uSfZ3OdoTIAAAAAEAC8aS6Kg9jJYAEAAQCD2Mlg', 'fave', null, 0, (channel, uid, elapsed) => {
			console.log('JOINED CHANNEL', channel, uid);
		});
	}

	leaveChannel() {
		this.agoraKit?.leaveChannel(null);
	}

	destroy() {
		AgoraRtcEngineKit.destroy();
	}
}
