'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5941<T> = T extends (infer U)[]
  ? DeepReadonlyArray5941<U>
  : T extends object
  ? DeepReadonlyObject5941<T>
  : T;

interface DeepReadonlyArray5941<T> extends ReadonlyArray<DeepReadonly5941<T>> {}

type DeepReadonlyObject5941<T> = {
  readonly [P in keyof T]: DeepReadonly5941<T[P]>;
};

type UnionToIntersection5941<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5941<T> = UnionToIntersection5941<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5941<T extends unknown[], V> = [...T, V];

type TuplifyUnion5941<T, L = LastOf5941<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5941<TuplifyUnion5941<Exclude<T, L>>, L>;

type DeepPartial5941<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5941<T[P]> }
  : T;

type Paths5941<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5941<K, Paths5941<T[K], Prev5941[D]>> : never }[keyof T]
  : never;

type Prev5941 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5941<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5941 {
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

type ConfigPaths5941 = Paths5941<NestedConfig5941>;

interface HeavyProps5941 {
  config: DeepPartial5941<NestedConfig5941>;
  path?: ConfigPaths5941;
}

const HeavyComponent5941 = memo(function HeavyComponent5941({ config }: HeavyProps5941) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5941) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5941 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5941: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5941.displayName = 'HeavyComponent5941';
export default HeavyComponent5941;
