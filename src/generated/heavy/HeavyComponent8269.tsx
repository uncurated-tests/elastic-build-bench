'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8269<T> = T extends (infer U)[]
  ? DeepReadonlyArray8269<U>
  : T extends object
  ? DeepReadonlyObject8269<T>
  : T;

interface DeepReadonlyArray8269<T> extends ReadonlyArray<DeepReadonly8269<T>> {}

type DeepReadonlyObject8269<T> = {
  readonly [P in keyof T]: DeepReadonly8269<T[P]>;
};

type UnionToIntersection8269<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8269<T> = UnionToIntersection8269<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8269<T extends unknown[], V> = [...T, V];

type TuplifyUnion8269<T, L = LastOf8269<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8269<TuplifyUnion8269<Exclude<T, L>>, L>;

type DeepPartial8269<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8269<T[P]> }
  : T;

type Paths8269<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8269<K, Paths8269<T[K], Prev8269[D]>> : never }[keyof T]
  : never;

type Prev8269 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8269<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8269 {
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

type ConfigPaths8269 = Paths8269<NestedConfig8269>;

interface HeavyProps8269 {
  config: DeepPartial8269<NestedConfig8269>;
  path?: ConfigPaths8269;
}

const HeavyComponent8269 = memo(function HeavyComponent8269({ config }: HeavyProps8269) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8269) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8269 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8269: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8269.displayName = 'HeavyComponent8269';
export default HeavyComponent8269;
