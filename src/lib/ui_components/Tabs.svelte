<!-- @format -->
<script>
  //Utility to get into the app lifecyle before the DOM is rendered
  import { onMount } from "svelte";
  
  //Utility to add visual effect when loading
  import { fade } from "svelte/transition";

  //Function to bold every instance of a word in a string
  //Let's bold TCP, UDP, HTTP, IP TCP/IP, SCTP, TCPng, in the tabs
  onMount(() => {
    //Get all the paragraph tags in the details
    let pTags = document.querySelectorAll("details p");
    //Loop through all the p tags
    for (let paragraph of pTags) {
      //Get the text content of the paragraph
      let text = paragraph.textContent;
      //Replace all instances of the words with the bolded version
      if (text) {
        text = text.replace(/TCP/g, "<strong>TCP</strong>");
        text = text.replace(/UDP/g, "<strong>UDP</strong>");
        text = text.replace(/HTTP/g, "<strong>HTTP</strong>");
        text = text.replace(/IP/g, "<strong>IP</strong>");
        text = text.replace(/TCP\/IP/g, "<strong>TCP/IP</strong>");
        text = text.replace(/SCTP/g, "<strong>SCTP</strong>");
        text = text.replace(/TCPng/g, "<strong>TCPng</strong>");
        //Set the paragraph's innerHTML to the new text
        paragraph.innerHTML = text;
      }
    }
  });
</script>

<!--
  Tabs component
-->
<section id="tabs">
  <details in:fade={{duration: 300, delay: 150}}>
    <!--What are Ports?-->
    <summary>What are Ports? </summary>
    <p>
      A port is a <strong
        >16-bit number used to identify specific applications and services.</strong
      > TCP and UDP specify the source and destination port numbers in their packet
      headers and that information, along with the source and destination IP addresses
      and the transport protocol (TCP or UDP), enables applications running on hosts
      on a TCP/IP network to communicate.
    </p>

    <p>
      Applications that provide a service (such as FTP and HTTP servers) open a
      port on the local computer and listen for connection requests. A client
      can request the service by pointing the request to the application’s IP
      address and port. A client can use any locally unused port number for
      communication.
    </p>
    <!--Link to reference source-->
    <span
      >Courtesy:
      <a href="https://study-ccna.com/ports-explained" target="_blank"
        >study-ccna</a
      >
    </span>
  </details>

  <!--What are the different Transport Protocols?-->
  <details in:fade={{duration: 300, delay: 300}}>
    <summary>What are the different Transport Protocols? </summary>
    <!--TCP-->
    <p>
      The Transmission Control Protocol (TCP) is a transport protocol that is
      used on top of IP to ensure reliable transmission of packets.
    </p>
    <p>
      TCP includes mechanisms to solve many of the problems that arise from
      packet-based messaging, such as lost packets, out of order packets,
      duplicate packets, and corrupted packets. Since TCP is the protocol used
      most commonly on top of IP, the Internet protocol stack is sometimes
      referred to as TCP/IP.
    </p>
    <!--Link to reference source-->
    <span
      >Courtesy:
      <a
        href="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/transmission-control-protocol--tcp"
        target="_blank">Khan Academy</a
      >
    </span>

    <!--UDP-->
    <p>
      The User Datagram Protocol (UDP) is a lightweight data transport protocol
      that works on top of IP. UDP provides a mechanism to detect corrupt data
      in packets, but it does not attempt to solve other problems that arise
      with packets, such as lost or out of order packets. That's why UDP is
      sometimes known as the Unreliable Data Protocol.
    </p>

    <p>
      UDP is simple but fast, at least in comparison to other protocols that
      work over IP. It's often used for time-sensitive applications (such as
      real-time video streaming) where speed is more important than accuracy.
    </p>
    <!--Link to reference source-->
    <span>
      Courtesy
      <a
        href="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/user-datagram-protocol-udp"
        target="_blank">Khan Academy</a
      >
    </span>

    <!--SCTP-->
    <p>
      SCTP stands for Stream Control Transmission Protocol It is a connection-
      oriented protocol in computer networks which provides a full-duplex
      association i.e., transmitting multiple streams of data between two end
      points at the same time that have established a connection in network
    </p>

    <p>
      It is sometimes referred to as next generation TCP or TCPng, SCTP makes it
      easier to support telephonic conversation on Internet. A telephonic
      conversation requires transmitting of voice along with other data at the
      same time on both ends, SCTP protocol makes it easier to establish
      reliable connection. SCTP is also intended to make it easier to establish
      connection over wireless network and managing transmission of multimedia
      data.
    </p>
    <!--Link to reference source-->
    <span>
      Courtesy
      <a href="https://www.geeksforgeeks.org/sctp-full-form/" target="_blank"
        >geeksforgeeks</a
      >
    </span>
  </details>

  <!--Port Ranges and Types-->
  <details in:fade={{duration: 300, delay: 450}}>
    <summary>Port Ranges and Types</summary>
    <p>
      There are three three types of ports with corresponding port number
      ranges:
    </p>
    <ul>
      <li>Well-known/System ports: 0 – 1023</li>
      <li>Registered ports: 1024 – 49151</li>
      <li>Dynamic/Private ports: 49152 – 65535</li>
    </ul>
    <!--Link to reference source-->
    <span>
      Courtesy:
      <a
        href="https://www.stationx.net/common-ports-cheat-sheet/"
        target="_blank">stationx</a
      >
    </span>
  </details>

  <!--Encrypted vs.Unencrytped-->
  <details in:fade={{duration: 300, delay: 600}}>
    <summary>Encrypted vs.Unencrytped</summary>
    <!--Encrypted-->
    <p>
      Encrypted data is often referred to as a "Cipher Text", Encrypted means
      anything that is protected by an encryption algorithm to prevent
      unauthorized access. Encryption is the method of converting a plaintext
      into a cipher text so that only the authorized parties can decrypt the
      information and no third parties can tamper with the data.
    </p>
    <p>
      Being encrypted is being in code which means it’s unreadable and secure.
      It is the most effective method to protect or secure your data including
      messages, emails, documents, files, etc. from unauthorized outside access.
      The most common method to encrypt data is public key encryption which
      protects your data by transforming data into cipher text.
    </p>

    <!--Unencrytped-->
    <p>
      Unencrypted or "Plaintext" means the data or information (i.e. a document,
      message, email, file, etc.) is stored unprotected, without any encryption
      is in an unsecured form that can be easily viewed or accessed without the
      need of a decryption key. This means the information is unprotected and
      almost anyone can access it at any stage.
    </p>
    <!--Link to reference source-->
    <span>
      Courtesy:
      <a
        href="http://www.differencebetween.net/technology/difference-between-encrypted-and-unencrypted/"
        target="_blank">difference between</a
      >
    </span>
  </details>
</section>

<style>
  #tabs {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 1em;
    width: 100%;
  }
  details {
    background: var(--darkblue);
    color: var(--lig);
    border-radius: 7px;
    margin-bottom: 0.5em;
    padding: 1em;
    width: 50ch;
  }
  summary {
    font-weight: 500;
    cursor: pointer;
  }

  details:hover {
    background-color: var(--lightblue);
    box-shadow: 0 0 10px var(--lightblue);
  }

  details[open] {
    background-color: var(--lightblue);
    padding-bottom: 0.5em !important;
    box-shadow: 0 0 10px var(--lightblue);
  }

  details[open] summary {
    margin-bottom: 1em;
  }

  details[open] p {
    font-size: 0.8em !important;
    margin-bottom: 0.5em !important;
  }

  span {
    display: block;
    font-size: 0.8em !important;
    text-transform: capitalize;
    margin-bottom: 1em !important;
  }

  span a {
    margin-bottom: 1em !important;
  }

  ul {
    font-size: 0.8em;
    padding-left: 1.5em;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    details {
      width: 100%;
    }
  }
</style>
