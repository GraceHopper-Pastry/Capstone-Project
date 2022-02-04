import React from "react";
// import { Button, Input } from "@mui/material";

// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { file: "", imagePreviewUrl: "" };
//   }

//   _handleSubmit(e) {
//     e.preventDefault();
//     // TODO: do something with -> this.state.file
//     console.log("handle uploading-", this.state.file);
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];
//     let file_size = file.size;
//     if (file.size > 4000000) {
//       alert("image must be less than 4MB");
//     }

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result,
//       });
//     };

//     reader.readAsDataURL(file);
//   }

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = <img width={200} src={imagePreviewUrl} />;
//     } else {
//       $imagePreview = (
//         <div className="previewText">Please select an Image for Preview</div>
//       );
//     }

//     return (
//       <div className="previewComponent">
//         <form onSubmit={(e) => this._handleSubmit(e)}>
//           <Input
//             className="fileInput"
//             type="file"
//             onChange={(e) => this._handleImageChange(e)}
//           />
//           <Button
//             className="submitButton"
//             type="submit"
//             onClick={(e) => this._handleSubmit(e)}
//           >
//             Upload Image
//           </Button>
//         </form>
//         <div className="imgPreview">{$imagePreview}</div>
//       </div>
//     );
//   }
// }

function showUploadWidget() {
  cloudinary.openUploadWidget(
    {
      cloudName: "<cloud name>",
      uploadPreset: "<upload preset>",
      sources: [
        "local",
        "url",
        "camera",
        "image_search",
        "google_drive",
        "facebook",
        "dropbox",
        "instagram",
        "shutterstock",
        "getty",
        "istock",
        "unsplash",
      ],
      googleApiKey: "<image_search_google_api_key>",
      showAdvancedOptions: true,
      cropping: true,
      multiple: false,
      defaultSource: "local",
      styles: {
        palette: {
          window: "#FFFFFF",
          windowBorder: "#90A0B3",
          tabIcon: "#0078FF",
          menuIcons: "#5A616A",
          textDark: "#000000",
          textLight: "#FFFFFF",
          link: "#0078FF",
          action: "#FF620C",
          inactiveTabIcon: "#0E2F5A",
          error: "#F44235",
          inProgress: "#0078FF",
          complete: "#20B832",
          sourceBg: "#E4EBF1",
        },
        fonts: {
          default: {
            active: true,
          },
        },
      },
    },
    (err, info) => {
      if (!err) {
        console.log("Upload Widget event - ", info);
      }
    }
  );
}

export default showUploadWidget;
