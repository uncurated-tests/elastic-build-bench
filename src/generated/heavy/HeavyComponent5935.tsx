'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5935<T> = T extends (infer U)[]
  ? DeepReadonlyArray5935<U>
  : T extends object
  ? DeepReadonlyObject5935<T>
  : T;

interface DeepReadonlyArray5935<T> extends ReadonlyArray<DeepReadonly5935<T>> {}

type DeepReadonlyObject5935<T> = {
  readonly [P in keyof T]: DeepReadonly5935<T[P]>;
};

type UnionToIntersection5935<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5935<T> = UnionToIntersection5935<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5935<T extends unknown[], V> = [...T, V];

type TuplifyUnion5935<T, L = LastOf5935<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5935<TuplifyUnion5935<Exclude<T, L>>, L>;

type DeepPartial5935<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5935<T[P]> }
  : T;

type Paths5935<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5935<K, Paths5935<T[K], Prev5935[D]>> : never }[keyof T]
  : never;

type Prev5935 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5935<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5935 {
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

type ConfigPaths5935 = Paths5935<NestedConfig5935>;

interface HeavyProps5935 {
  config: DeepPartial5935<NestedConfig5935>;
  path?: ConfigPaths5935;
}

const HeavyComponent5935 = memo(function HeavyComponent5935({ config }: HeavyProps5935) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5935) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5935 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5935: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5935.displayName = 'HeavyComponent5935';
export default HeavyComponent5935;
