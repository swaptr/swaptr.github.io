---
title: 'Contributing to uniffi Aries-VCX'
description: 'This blog post elaborates on how to contribute to the uniffi project on Aries-VCX'
date: '2023-11-16'
categories: [aries-vcx, rust, android]
published: true
image: '/images/hyperledger.png'
sponsor: 'Hyperledger Foundation'
---

Aries VCX is an open-source project developed by the **Hyperledger Aries** community. Aries VCX enables the exchange of verifiable credentials, in a secure and interoperable manner between different entities in a decentralized network.

Aries VCX is primarily written in Rust, which presents challenges when it comes to compiling it for android. Luckily, the team at Mozilla has developed the [uniffi-rs](https://github.com/mozilla/uniffi-rs) crate, which enables the automatic generation of library bindings for other programming environments.

To set up the development environment for Uniffi Aries development, you need to:

You can set up Android Studio to assist with most of the stuff.

1. Set up the android SDK and NDK, and make sure to expose two variables to the respective roots.

```bash
ANDROID_SDK=
ANDROID_NDK_ROOT=
```

2. Set up the latest version of Rust.

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

3. Clone the repository.

```bash
git clone git@github.com:hyperledger/aries-vcx.git
```

4. Work on the API and expose the interface on the `vcx.udl` file. You need to make sure the definition in the UDL matches the signature of the exposed method/interface.

5. Run the build script and generate the bindings.

```bash
sh aries/wrappers/uniffi-aries-vcx/scripts/android.build.cargo.ndk.sh
```

5. Work on the android demo application and run the application on a virtual x86 or physical device.
