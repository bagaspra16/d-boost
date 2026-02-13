# D-BOOST Early Access Setup

## Environment Variables

To enable email notifications for the early access page, you need to set up Web3Forms:

### 1. Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form
4. Copy your Access Key

### 2. Add Environment Variable

Create a `.env.local` file in the root of your project (if it doesn't exist):

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

Replace `your_access_key_here` with the actual access key from Web3Forms.

### 3. Restart Development Server

After adding the environment variable, restart your development server:

```bash
npm run dev
```

## Testing the Form

1. Navigate to `/early-access` or click any App Store/Play Store button
2. Enter an email address
3. Click "Notify Me"
4. Check the email inbox configured in Web3Forms (dboostapp@gmail.com)

## Email Content

When a user submits the form, an email will be sent to `dboostapp@gmail.com` with:
- Subject: "New D-BOOST Early Access Request"
- Message: "We're interested with D-BOOST Launch!"
- User's email address

## Features

- ✅ Beautiful, responsive design matching landing page
- ✅ Smooth animations and transitions
- ✅ Loading states during submission
- ✅ Success/error messages
- ✅ Email validation
- ✅ Disabled state after successful submission
