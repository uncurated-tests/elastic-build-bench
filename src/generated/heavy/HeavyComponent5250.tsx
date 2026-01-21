'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5250<T> = T extends (infer U)[]
  ? DeepReadonlyArray5250<U>
  : T extends object
  ? DeepReadonlyObject5250<T>
  : T;

interface DeepReadonlyArray5250<T> extends ReadonlyArray<DeepReadonly5250<T>> {}

type DeepReadonlyObject5250<T> = {
  readonly [P in keyof T]: DeepReadonly5250<T[P]>;
};

type UnionToIntersection5250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5250<T> = UnionToIntersection5250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5250<T extends unknown[], V> = [...T, V];

type TuplifyUnion5250<T, L = LastOf5250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5250<TuplifyUnion5250<Exclude<T, L>>, L>;

type DeepPartial5250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5250<T[P]> }
  : T;

type Paths5250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5250<K, Paths5250<T[K], Prev5250[D]>> : never }[keyof T]
  : never;

type Prev5250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5250 {
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

type ConfigPaths5250 = Paths5250<NestedConfig5250>;

interface HeavyProps5250 {
  config: DeepPartial5250<NestedConfig5250>;
  path?: ConfigPaths5250;
}

const HeavyComponent5250 = memo(function HeavyComponent5250({ config }: HeavyProps5250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5250.displayName = 'HeavyComponent5250';
export default HeavyComponent5250;
