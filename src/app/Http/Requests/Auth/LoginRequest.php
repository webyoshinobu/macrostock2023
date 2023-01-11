<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }

    /**
    * Ensure the login request is not rate limited.
    *
    * @return void
    *
    * @throws \Illuminate\Validation\ValidationException
    */
    public function ensureIsNotRateLimited()
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }
        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        // FIXME: responseに何を詰めるべきか検討
        $response = response()->json([
        'status' => Response::HTTP_UNAUTHORIZED,
            'seconds' => $seconds,
            'minutes' => ceil($seconds / 60),
            'errors' => trans('auth.throttle'),
        ], Response::HTTP_UNAUTHORIZED);
        throw new HttpResponseException($response);
    }
}
