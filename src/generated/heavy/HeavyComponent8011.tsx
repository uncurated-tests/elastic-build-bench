'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8011<T> = T extends (infer U)[]
  ? DeepReadonlyArray8011<U>
  : T extends object
  ? DeepReadonlyObject8011<T>
  : T;

interface DeepReadonlyArray8011<T> extends ReadonlyArray<DeepReadonly8011<T>> {}

type DeepReadonlyObject8011<T> = {
  readonly [P in keyof T]: DeepReadonly8011<T[P]>;
};

type UnionToIntersection8011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8011<T> = UnionToIntersection8011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8011<T extends unknown[], V> = [...T, V];

type TuplifyUnion8011<T, L = LastOf8011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8011<TuplifyUnion8011<Exclude<T, L>>, L>;

type DeepPartial8011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8011<T[P]> }
  : T;

type Paths8011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8011<K, Paths8011<T[K], Prev8011[D]>> : never }[keyof T]
  : never;

type Prev8011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8011 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8011 = Paths8011<NestedConfig8011>;

interface HeavyProps8011 {
  config: DeepPartial8011<NestedConfig8011>;
  path?: ConfigPaths8011;
}

const HeavyComponent8011 = memo(function HeavyComponent8011({ config }: HeavyProps8011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8011.displayName = 'HeavyComponent8011';
export default HeavyComponent8011;
