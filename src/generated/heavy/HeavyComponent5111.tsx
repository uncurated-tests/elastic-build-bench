'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5111<T> = T extends (infer U)[]
  ? DeepReadonlyArray5111<U>
  : T extends object
  ? DeepReadonlyObject5111<T>
  : T;

interface DeepReadonlyArray5111<T> extends ReadonlyArray<DeepReadonly5111<T>> {}

type DeepReadonlyObject5111<T> = {
  readonly [P in keyof T]: DeepReadonly5111<T[P]>;
};

type UnionToIntersection5111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5111<T> = UnionToIntersection5111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5111<T extends unknown[], V> = [...T, V];

type TuplifyUnion5111<T, L = LastOf5111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5111<TuplifyUnion5111<Exclude<T, L>>, L>;

type DeepPartial5111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5111<T[P]> }
  : T;

type Paths5111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5111<K, Paths5111<T[K], Prev5111[D]>> : never }[keyof T]
  : never;

type Prev5111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5111 {
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

type ConfigPaths5111 = Paths5111<NestedConfig5111>;

interface HeavyProps5111 {
  config: DeepPartial5111<NestedConfig5111>;
  path?: ConfigPaths5111;
}

const HeavyComponent5111 = memo(function HeavyComponent5111({ config }: HeavyProps5111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5111.displayName = 'HeavyComponent5111';
export default HeavyComponent5111;
