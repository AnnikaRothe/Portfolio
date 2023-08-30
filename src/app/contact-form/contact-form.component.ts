import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  isMessageSent: boolean = false;
  isButtonExpanded: boolean = false;

  async sendMail() {
    console.log('Sending mail', this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    await fetch('https://annika-rothe.com/send_mail/send_mail.php', {
      method: 'Post',
      body: fd,
    });

    this.isMessageSent = true;
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';

    // Hier setzen wir isButtonExpanded auf true, um die Button-Animation zu starten.
    this.isButtonExpanded = true;

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    setTimeout(() => {
      this.isMessageSent = false;
      // Hier setzen wir isButtonExpanded zurück auf false, um die Button-Animation zu beenden.
      this.isButtonExpanded = false;
    }, 3000); // Die Animation dauert 3 Sekunden.
  }
}
