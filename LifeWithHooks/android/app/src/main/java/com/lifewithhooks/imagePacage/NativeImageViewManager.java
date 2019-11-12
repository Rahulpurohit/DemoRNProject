package com.lifewithhooks.imagePacage;

import android.content.Context;
import android.graphics.Color;
import android.text.TextUtils;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.lifecycle.LifecycleOwner;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.lifewithhooks.MainApplication;
import com.lifewithhooks.R;
import com.otaliastudios.cameraview.CameraListener;
import com.otaliastudios.cameraview.CameraView;
import com.otaliastudios.cameraview.FileCallback;
import com.otaliastudios.cameraview.PictureResult;
import com.otaliastudios.cameraview.filter.Filters;
import com.otaliastudios.cameraview.gesture.Gesture;
import com.otaliastudios.cameraview.gesture.GestureAction;
import com.otaliastudios.cameraview.overlay.OverlayLayout;

import java.io.File;
import java.util.Date;

public class NativeImageViewManager extends SimpleViewManager<CameraView> {
    public static final String REACT_CLASS = "NativeImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected CameraView createViewInstance(ThemedReactContext reactContext) {
        CameraView cameraView = new CameraView(reactContext);
        cameraView.setLifecycleOwner((LifecycleOwner) reactContext.getCurrentActivity());
        cameraView.mapGesture(Gesture.PINCH, GestureAction.ZOOM); // Pinch to zoom!
        cameraView.mapGesture(Gesture.TAP, GestureAction.AUTO_FOCUS); // Tap to focus!
        cameraView.mapGesture(Gesture.LONG_TAP, GestureAction.TAKE_PICTURE);
        cameraView.setExperimental(true);
        return cameraView;
    }


    @Override
    public void receiveCommand(CameraView cameraView, String commandId, @Nullable ReadableArray args) {
        super.receiveCommand(cameraView, commandId, args);
        if (commandId.equalsIgnoreCase("takePhoto")) {

            cameraView.addCameraListener(new CameraListener() {
                @Override
                public void onPictureTaken(PictureResult result) {
                    Date now = new Date();

                    String fileName = (String) android.text.format.DateFormat.format("yyyy-MM-dd_hh:mm:ss", now);
                    String localFilePath =cameraView.getContext().getExternalFilesDir("Hooks") + File.separator + fileName + ".jpeg";
                    File imageFile = new File(localFilePath);
                    result.toFile(imageFile, new FileCallback() {
                        @Override
                        public void onFileReady(@Nullable File file) {
                            Toast.makeText(cameraView.getContext(),"File Saved",Toast.LENGTH_LONG).show();
                            WritableMap params = Arguments.createMap();
                            params.putString("file_url", localFilePath);

// get the base 64 stri
                            String imgString = Base64.encodeToString( result.getData(),
                                    Base64.NO_WRAP);
                            params.putString("file",imgString);
                            (((MainApplication) cameraView.getContext().getApplicationContext()).getReactNativeHost().getReactInstanceManager().getCurrentReactContext())
                                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                    .emit("onFileSaved", params);
                        }
                    });


                }
            });
            cameraView.takePicture();
        }else if(commandId.equalsIgnoreCase("grayscaleFilter")){
            cameraView.setFilter(Filters.GRAYSCALE.newInstance());
        }}

    @ReactProp(name="overlayText")
    public void setOverlayPath(CameraView cameraView, String overlayText) {
        if(!TextUtils.isEmpty(overlayText)){
            OverlayLayout.LayoutParams  params = new OverlayLayout.LayoutParams(OverlayLayout.LayoutParams.MATCH_PARENT,OverlayLayout.LayoutParams.WRAP_CONTENT );
            LayoutInflater inflater = (LayoutInflater) cameraView.getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            View view = inflater.inflate(android.R.layout.activity_list_item, null);
            TextView overlay=view.findViewById(android.R.id.text1);
            overlay.setText(overlayText);
            view.findViewById(android.R.id.icon2);
            overlay.setTextColor(Color.RED);
            cameraView.addView(view);


        }
    }
}