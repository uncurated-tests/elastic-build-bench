'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5172<T> = T extends (infer U)[]
  ? DeepReadonlyArray5172<U>
  : T extends object
  ? DeepReadonlyObject5172<T>
  : T;

interface DeepReadonlyArray5172<T> extends ReadonlyArray<DeepReadonly5172<T>> {}

type DeepReadonlyObject5172<T> = {
  readonly [P in keyof T]: DeepReadonly5172<T[P]>;
};

type UnionToIntersection5172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5172<T> = UnionToIntersection5172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5172<T extends unknown[], V> = [...T, V];

type TuplifyUnion5172<T, L = LastOf5172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5172<TuplifyUnion5172<Exclude<T, L>>, L>;

type DeepPartial5172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5172<T[P]> }
  : T;

type Paths5172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5172<K, Paths5172<T[K], Prev5172[D]>> : never }[keyof T]
  : never;

type Prev5172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5172 {
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

type ConfigPaths5172 = Paths5172<NestedConfig5172>;

interface HeavyProps5172 {
  config: DeepPartial5172<NestedConfig5172>;
  path?: ConfigPaths5172;
}

const HeavyComponent5172 = memo(function HeavyComponent5172({ config }: HeavyProps5172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5172.displayName = 'HeavyComponent5172';
export default HeavyComponent5172;
