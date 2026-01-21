'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8915<T> = T extends (infer U)[]
  ? DeepReadonlyArray8915<U>
  : T extends object
  ? DeepReadonlyObject8915<T>
  : T;

interface DeepReadonlyArray8915<T> extends ReadonlyArray<DeepReadonly8915<T>> {}

type DeepReadonlyObject8915<T> = {
  readonly [P in keyof T]: DeepReadonly8915<T[P]>;
};

type UnionToIntersection8915<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8915<T> = UnionToIntersection8915<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8915<T extends unknown[], V> = [...T, V];

type TuplifyUnion8915<T, L = LastOf8915<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8915<TuplifyUnion8915<Exclude<T, L>>, L>;

type DeepPartial8915<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8915<T[P]> }
  : T;

type Paths8915<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8915<K, Paths8915<T[K], Prev8915[D]>> : never }[keyof T]
  : never;

type Prev8915 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8915<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8915 {
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

type ConfigPaths8915 = Paths8915<NestedConfig8915>;

interface HeavyProps8915 {
  config: DeepPartial8915<NestedConfig8915>;
  path?: ConfigPaths8915;
}

const HeavyComponent8915 = memo(function HeavyComponent8915({ config }: HeavyProps8915) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8915) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8915 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8915: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8915.displayName = 'HeavyComponent8915';
export default HeavyComponent8915;
