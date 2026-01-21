'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8574<T> = T extends (infer U)[]
  ? DeepReadonlyArray8574<U>
  : T extends object
  ? DeepReadonlyObject8574<T>
  : T;

interface DeepReadonlyArray8574<T> extends ReadonlyArray<DeepReadonly8574<T>> {}

type DeepReadonlyObject8574<T> = {
  readonly [P in keyof T]: DeepReadonly8574<T[P]>;
};

type UnionToIntersection8574<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8574<T> = UnionToIntersection8574<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8574<T extends unknown[], V> = [...T, V];

type TuplifyUnion8574<T, L = LastOf8574<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8574<TuplifyUnion8574<Exclude<T, L>>, L>;

type DeepPartial8574<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8574<T[P]> }
  : T;

type Paths8574<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8574<K, Paths8574<T[K], Prev8574[D]>> : never }[keyof T]
  : never;

type Prev8574 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8574<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8574 {
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

type ConfigPaths8574 = Paths8574<NestedConfig8574>;

interface HeavyProps8574 {
  config: DeepPartial8574<NestedConfig8574>;
  path?: ConfigPaths8574;
}

const HeavyComponent8574 = memo(function HeavyComponent8574({ config }: HeavyProps8574) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8574) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8574 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8574: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8574.displayName = 'HeavyComponent8574';
export default HeavyComponent8574;
