export function limitToDigits(value, maxDigits = 15) {
     
    // removing all non-digit characters
    const digitsOnly = value.replace(/[^0-9]/g, '');

    // Limit to maxDigits length
    return digitsOnly.slice(0, maxDigits);
  }
  