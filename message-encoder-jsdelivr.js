// YAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY 
//Partial code comes from https://github.com/Blobby-Boi/data-URL-Generator
        function utf8ToBase64(str) {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);

            const binaryString = String.fromCharCode.apply(null, data);
            return btoa(binaryString);
        }

    // Function to decode a Base64 string to UTF-8
        function base64ToUtf8(b64) {
            const binaryString = atob(b64);
            // Create a Uint8Array from the binary string.
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const decoder = new TextDecoder();
            return decoder.decode(bytes);
        }
        // Source - https://stackoverflow.com/a
        // Posted by belacqua, modified by community. See post 'Timeline' for change history
        // Retrieved 2025-12-11, License - CC BY-SA 4.0

        function reverse(s){
            return s.split("").reverse().join("");
        }
        

        var textbox; 

        function encryptMessage() {
            textbox = $("#messagebox").val();
            
            textboxURL = encodeURIComponent(textbox);

            base64Encode = utf8ToBase64(textboxURL);
            
            finalEncode = reverse(base64Encode); 

            $("#encrypted").text(finalEncode);

            document.getElementById('copybutton').disabled = false;
        }

        function decryptMessage() {
           textbox = $("#decryptmessagebox").val();
           
           textboxReverse = reverse(textbox);

           textboxBaseDecode = base64ToUtf8(textboxReverse);

           finalEncode = decodeURIComponent(textboxBaseDecode);

           $("#decrypted").text(finalEncode);

           document.getElementById('decryptcopybutton').disabled = false;

        }

        function copyToClipboard() {
            //var encrypted = document.getElementById('encrypted').innerText;
            var encrypted = $("#encrypted").text();
            var tempInput = document.createElement('input');
            tempInput.value = encrypted;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            //alert('Encoded Message Copied to Clipboard');
            document.getElementById('copybutton').innerHTML = "Encoded Message Copied to Clipboard";
            setTimeout(function() {
                //do what you need here
                document.getElementById('copybutton').innerHTML = "Copy Encoded Message to Clipboard";    
            }, 2000);
        }
        
        function copyDecodedToClipboard() {
            var decrypted = $("#decrypted").text();
            var tempInput = document.createElement('input');
            tempInput.value = decrypted;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            //alert('Decoded Message Copied to Clipboard');           
            document.getElementById('decryptcopybutton').innerHTML = "Decoded Message Copied to Clipboard";
            setTimeout(function() {
                document.getElementById('decryptcopybutton').innerHTML = "Copy Decoded Message to Clipboard";
            }, 2000);

        }
