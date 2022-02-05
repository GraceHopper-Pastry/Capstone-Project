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
import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "grace-hopper-team-pastry",
        uploadPreset: "ctr9lvj0",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
