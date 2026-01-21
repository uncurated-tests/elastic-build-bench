'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5979<T> = T extends (infer U)[]
  ? DeepReadonlyArray5979<U>
  : T extends object
  ? DeepReadonlyObject5979<T>
  : T;

interface DeepReadonlyArray5979<T> extends ReadonlyArray<DeepReadonly5979<T>> {}

type DeepReadonlyObject5979<T> = {
  readonly [P in keyof T]: DeepReadonly5979<T[P]>;
};

type UnionToIntersection5979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5979<T> = UnionToIntersection5979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5979<T extends unknown[], V> = [...T, V];

type TuplifyUnion5979<T, L = LastOf5979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5979<TuplifyUnion5979<Exclude<T, L>>, L>;

type DeepPartial5979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5979<T[P]> }
  : T;

type Paths5979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5979<K, Paths5979<T[K], Prev5979[D]>> : never }[keyof T]
  : never;

type Prev5979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5979 {
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

type ConfigPaths5979 = Paths5979<NestedConfig5979>;

interface HeavyProps5979 {
  config: DeepPartial5979<NestedConfig5979>;
  path?: ConfigPaths5979;
}

const HeavyComponent5979 = memo(function HeavyComponent5979({ config }: HeavyProps5979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5979.displayName = 'HeavyComponent5979';
export default HeavyComponent5979;
