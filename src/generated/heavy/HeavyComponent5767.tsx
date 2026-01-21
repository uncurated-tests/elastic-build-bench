'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5767<T> = T extends (infer U)[]
  ? DeepReadonlyArray5767<U>
  : T extends object
  ? DeepReadonlyObject5767<T>
  : T;

interface DeepReadonlyArray5767<T> extends ReadonlyArray<DeepReadonly5767<T>> {}

type DeepReadonlyObject5767<T> = {
  readonly [P in keyof T]: DeepReadonly5767<T[P]>;
};

type UnionToIntersection5767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5767<T> = UnionToIntersection5767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5767<T extends unknown[], V> = [...T, V];

type TuplifyUnion5767<T, L = LastOf5767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5767<TuplifyUnion5767<Exclude<T, L>>, L>;

type DeepPartial5767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5767<T[P]> }
  : T;

type Paths5767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5767<K, Paths5767<T[K], Prev5767[D]>> : never }[keyof T]
  : never;

type Prev5767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5767 {
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

type ConfigPaths5767 = Paths5767<NestedConfig5767>;

interface HeavyProps5767 {
  config: DeepPartial5767<NestedConfig5767>;
  path?: ConfigPaths5767;
}

const HeavyComponent5767 = memo(function HeavyComponent5767({ config }: HeavyProps5767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5767.displayName = 'HeavyComponent5767';
export default HeavyComponent5767;
