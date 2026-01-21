'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5696<T> = T extends (infer U)[]
  ? DeepReadonlyArray5696<U>
  : T extends object
  ? DeepReadonlyObject5696<T>
  : T;

interface DeepReadonlyArray5696<T> extends ReadonlyArray<DeepReadonly5696<T>> {}

type DeepReadonlyObject5696<T> = {
  readonly [P in keyof T]: DeepReadonly5696<T[P]>;
};

type UnionToIntersection5696<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5696<T> = UnionToIntersection5696<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5696<T extends unknown[], V> = [...T, V];

type TuplifyUnion5696<T, L = LastOf5696<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5696<TuplifyUnion5696<Exclude<T, L>>, L>;

type DeepPartial5696<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5696<T[P]> }
  : T;

type Paths5696<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5696<K, Paths5696<T[K], Prev5696[D]>> : never }[keyof T]
  : never;

type Prev5696 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5696<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5696 {
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

type ConfigPaths5696 = Paths5696<NestedConfig5696>;

interface HeavyProps5696 {
  config: DeepPartial5696<NestedConfig5696>;
  path?: ConfigPaths5696;
}

const HeavyComponent5696 = memo(function HeavyComponent5696({ config }: HeavyProps5696) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5696) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5696 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5696: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5696.displayName = 'HeavyComponent5696';
export default HeavyComponent5696;
