import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class BattlenetProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { Battlenet } = await import('../src/Battlenet')

    Ally.extend('Battlenet', (_, __, config, ctx) => {
      return new Battlenet(ctx, config)
    })
  }
}
