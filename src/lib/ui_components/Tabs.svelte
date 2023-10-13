<details>
     <!--Invormative Tabs, No styling-->

     <!--What is port number?, is already coded, need to go back & find it for styling-->

    <!--What are Ports?-->
   <summary>What are Ports? </summary> 
    <p>A port is a 16-bit number used to identify specific applications and services. TCP and UDP specify the source and destination port numbers in their packet headers and that information, along with the source and destination IP addresses and the transport protocol (TCP or UDP), enables applications running on hosts on a TCP/IP network to communicate.</p> 

    <p>Applications that provide a service (such as FTP and HTTP servers) open a port on the local computer and listen for connection requests. A client can request the service by pointing the request to the application’s IP address and port. A client can use any locally unused port number for communication.</p>
        <!--Link to reference source-->
    <a href="https://study-ccna.com/ports-explained">study-ccna</a>
</details>

<!--What are the different Transport Protocols?-->
<details>
    <summary>What are the different Transport Protocols? </summary> 
   
    <!--TCP-->
    <p>The Transmission Control Protocol (TCP) is a transport protocol that is used on top of IP to ensure reliable transmission of packets.</p>
    <p>TCP includes mechanisms to solve many of the problems that arise from packet-based messaging, such as lost packets, out of order packets, duplicate packets, and corrupted packets.
    Since TCP is the protocol used most commonly on top of IP, the Internet protocol stack is sometimes referred to as TCP/IP.</p>
    <!--Link to reference source-->
    <a href="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/transmission-control-protocol--tcp">Khan Academy</a>

     <!--UDP-->
    <p>The User Datagram Protocol (UDP) is a lightweight data transport protocol that works on top of IP.
    UDP provides a mechanism to detect corrupt data in packets, but it does not attempt to solve other problems that arise with packets, such as lost or out of order packets. That's why UDP is sometimes known as the Unreliable Data Protocol.</p>

    <p>UDP is simple but fast, at least in comparison to other protocols that work over IP. It's often used for time-sensitive applications (such as real-time video streaming) where speed is more important than accuracy.</p>
        <!--Link to reference source-->
        <a href="https://www.khanacademy.org/computing/computers-and-internet/xcae6f4a7ff015e7d:the-internet/xcae6f4a7ff015e7d:transporting-packets/a/user-datagram-protocol-udp">Khan Academy</a>
    
    <!--SCTP-->
    <p>SCTP stands for Stream Control Transmission Protocol 
    It is a connection- oriented protocol in computer networks which provides a full-duplex association i.e., transmitting multiple streams of data between two end points at the same time that have established a connection in network</p>

    <p>It is sometimes referred to as next generation TCP or TCPng, SCTP makes it easier to support telephonic conversation on Internet. A telephonic conversation requires transmitting of voice along with other data at the same time on both ends, SCTP protocol makes it easier to establish reliable connection. 
    SCTP is also intended to make it easier to establish connection over wireless network and managing transmission of multimedia data.</p> 
        <!--Link to reference source-->
    <a href="https://www.geeksforgeeks.org/sctp-full-form/">geeksforgeeks</a>
</details>

<!--Port Ranges and Types-->
<details>
   <summary>Port Ranges and Types</summary> 
<p>There are three three types of ports with corresponding port number ranges:</p>
   <ol type="1">
   <li> Well-known/System ports: 0 – 1023</li>
   <li>Registered ports: 1024 – 49151</li> 
   <li>Dynamic/Private ports: 49152 – 65535</li>
   </ol>
   <!--Link to reference source-->  
   <a href="https://www.stationx.net/common-ports-cheat-sheet/">stationx</a>
</details>

<!--Encrypted vs.Unencrytped-->
<details>
   <summary>Encrypted vs.Unencrytped</summary>
 <!--Encrypted-->
<p>Encrypted data is often referred to as a "Cipher Text", Encrypted means anything that is protected by an encryption algorithm to prevent unauthorized access. Encryption is the method of converting a plaintext into a cipher text so that only the authorized parties can decrypt the information and no third parties can tamper with the data.</p>
<p>Being encrypted is being in code which means it’s unreadable and secure. It is the most effective method to protect or secure your data including messages, emails, documents, files, etc. from unauthorized outside access. The most common method to encrypt data is public key encryption which protects your data by transforming data into cipher text.</p>

<!--Unencrytped-->
<p>Unencrypted or "Plaintext" means the data or information (i.e. a document, message, email, file, etc.) is stored unprotected, without any encryption is in an unsecured form that can be easily viewed or accessed without the need of a decryption key. This means the information is unprotected and almost anyone can access it at any stage.</p>
 <!--Link to reference source--> 
 <a href="http://www.differencebetween.net/technology/difference-between-encrypted-and-unencrypted/">difference between</a>   
</details>



<!-- Shouldn't be Tabs but Tool Tips

<details>
   <summary>Search</summary> 
<p>Search by entering the Port Number and selecting a Protocol </p>
</details>

<details>
<summary>List</summary> 
<p>Lists ALL ports in numercial order</p>
<details>
    
   <summary>Favorites</summary> 
<p>Login to save customized list of favorites </p>
</details> -->

<!--Tab Tooltips when hovering over the Search, List, & Favorites icons, Not Working-->

<!--Search-->
<div class="tooltip">Search
    <span class="Search by entering the Port Number and selecting a Protocol"></span>
</div>
<!--List-->
<div class="tooltip">List
    <span class="Lists ALL ports in numercial orderl"></span>
</div>
<!--Favorites-->
<div class="tooltip">Favorites
    <span class="Login to save customized list of favorites"></span>
</div>


