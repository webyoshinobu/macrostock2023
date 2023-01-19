<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class LogoutApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    /**
     * @test
     */
    public function should_認証済みのユーザーをログアウトさせる()
    {
        // $response = $this->get('/');
        $response = $this->actingAs($this->user)
            ->json('POST', route('logout'));

        // $response->assertStatus(200);
        $response->assertStatus(200);
        $this->assertGuest();
    }
}
