import { ServiceProvider } from './ServiceProvider'
import { container } from '../../app/Container'
export class QuartzServiceProvider extends ServiceProvider {

  register() {

  	container.set('$quartz.tags', ['data', 'system'])
    container.set('$quartz.data', [])

    this.addLang({
      'en': require('../../lang/en.json'),
      'it': require('../../lang/it.json')
    })

  }
}