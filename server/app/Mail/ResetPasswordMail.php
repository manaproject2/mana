<?php

namespace app\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use app\Http\Controllers\ResetPasswordController;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token)
    {
        
       $this->token = $token;
      
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('Email.passwordReset')->with([
            'token' => $this->token
            ]);
        //  return $this->markdown('Email.passwordReset')->with(['token' => $this->token

        //  ]);
        
           
    }
}
