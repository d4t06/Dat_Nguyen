function dateFormatter(dateString: string): string {
   const dateFormatter = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
   });

   return dateFormatter.format(new Date(dateString));
}


export default dateFormatter