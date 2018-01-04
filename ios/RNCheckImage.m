
#import "RNCheckImage.h"

@implementation RNCheckImage

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(checkCemera:(NSString*)name resovler:(RCTPromiseResolveBlock)resovler rejecter:(RCTPromiseRejectBlock)reject){
    if (name&&name.length>0) {
        resovler(name);
    }else{
        reject(@"code",@"message",nil);
    }
}

RCT_EXPORT_METHOD(check:(NSString*)name callback:(RCTResponseSenderBlock)callback){
    NSArray *callbackArr = @[@"zhang",@"wang",@"tang"];
    if (name) {
        callback(@[[NSNull null],callbackArr]);
    }else{
        callback(@[[NSNull null],name]);
    }
}


@end
  
