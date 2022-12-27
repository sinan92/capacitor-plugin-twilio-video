import Foundation

@objc public class TwilioVideo: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
