'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5402<T> = T extends (infer U)[]
  ? DeepReadonlyArray5402<U>
  : T extends object
  ? DeepReadonlyObject5402<T>
  : T;

interface DeepReadonlyArray5402<T> extends ReadonlyArray<DeepReadonly5402<T>> {}

type DeepReadonlyObject5402<T> = {
  readonly [P in keyof T]: DeepReadonly5402<T[P]>;
};

type UnionToIntersection5402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5402<T> = UnionToIntersection5402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5402<T extends unknown[], V> = [...T, V];

type TuplifyUnion5402<T, L = LastOf5402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5402<TuplifyUnion5402<Exclude<T, L>>, L>;

type DeepPartial5402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5402<T[P]> }
  : T;

type Paths5402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5402<K, Paths5402<T[K], Prev5402[D]>> : never }[keyof T]
  : never;

type Prev5402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5402 {
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

type ConfigPaths5402 = Paths5402<NestedConfig5402>;

interface HeavyProps5402 {
  config: DeepPartial5402<NestedConfig5402>;
  path?: ConfigPaths5402;
}

const HeavyComponent5402 = memo(function HeavyComponent5402({ config }: HeavyProps5402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5402.displayName = 'HeavyComponent5402';
export default HeavyComponent5402;
