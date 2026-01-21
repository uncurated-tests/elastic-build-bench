'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5863<T> = T extends (infer U)[]
  ? DeepReadonlyArray5863<U>
  : T extends object
  ? DeepReadonlyObject5863<T>
  : T;

interface DeepReadonlyArray5863<T> extends ReadonlyArray<DeepReadonly5863<T>> {}

type DeepReadonlyObject5863<T> = {
  readonly [P in keyof T]: DeepReadonly5863<T[P]>;
};

type UnionToIntersection5863<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5863<T> = UnionToIntersection5863<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5863<T extends unknown[], V> = [...T, V];

type TuplifyUnion5863<T, L = LastOf5863<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5863<TuplifyUnion5863<Exclude<T, L>>, L>;

type DeepPartial5863<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5863<T[P]> }
  : T;

type Paths5863<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5863<K, Paths5863<T[K], Prev5863[D]>> : never }[keyof T]
  : never;

type Prev5863 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5863<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5863 {
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

type ConfigPaths5863 = Paths5863<NestedConfig5863>;

interface HeavyProps5863 {
  config: DeepPartial5863<NestedConfig5863>;
  path?: ConfigPaths5863;
}

const HeavyComponent5863 = memo(function HeavyComponent5863({ config }: HeavyProps5863) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5863) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5863 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5863: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5863.displayName = 'HeavyComponent5863';
export default HeavyComponent5863;
