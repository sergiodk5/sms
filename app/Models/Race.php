<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Race extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'gender'];

    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }
}
