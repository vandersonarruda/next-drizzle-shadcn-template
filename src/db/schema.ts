import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const example = pgTable('example', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text('title').notNull(),
  email: text('email').unique(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
})
