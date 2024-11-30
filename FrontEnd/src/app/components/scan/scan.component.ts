import { Component } from '@angular/core';
import { ScanService } from './scan.service';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-scan',
  standalone: false,
  
  templateUrl: './scan.component.html',
  styleUrl: './scan.component.css'
})
export class ScanComponent {

  actualFile: File | undefined ;
  constructor(private scanService: ScanService){}

  public files: NgxFileDropEntry[] = [];

  onFileDropped(files: any){
    this.files = files;
    if (files.length > 1) {
      alert('Please upload only one file.');
      return;
    }

    const droppedFile = files[0];
    if (droppedFile.fileEntry.isFile) {
      const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        //Verify extension
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
          this.actualFile = file; 
          console.log('Uploaded file:', file);
          this.getSkinDisease(file)
        } else {
          alert('Only JPG or PNG files are allowed.');
        }
      });
    }
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    if (file.type === 'image/jpeg' || file.type === 'image/png') {
      this.actualFile = file
      console.log('Selected file:', file);
      this.getSkinDisease(file)
    } else {
      alert('Only JPG or PNG files are allowed.');
    }
  }

  getSkinDisease(file:File){
    this.scanService.getDisease(file).subscribe(
      res => {
        console.log("Success! Disease: ", res)
      }, 
      error => {
        console.log("Error "+ error)
      }
    )
  }
}
