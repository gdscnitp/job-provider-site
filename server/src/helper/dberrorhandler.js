const ErrorHandler = (err) => {
   let message = '';
   if (err.code) {
      switch (err.code) {
         case 11000:
         case 11001:
            const field = Object.keys(err.keyValue);
            message = `An account with that ${field} already exists .`            
            break;
         default:
            message = 'An unknown error occured '
            break;
      }
   }

   if (err.name === 'ValidationError') {
      if (err.errors) {
         let error_fields = Object.keys(err.errors);
         message = err.errors[error_fields[0]].message;
      }
   }

   console.log(message);

   return message;
}

module.exports  = ErrorHandler;