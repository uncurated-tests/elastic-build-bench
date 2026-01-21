'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5795<T> = T extends (infer U)[]
  ? DeepReadonlyArray5795<U>
  : T extends object
  ? DeepReadonlyObject5795<T>
  : T;

interface DeepReadonlyArray5795<T> extends ReadonlyArray<DeepReadonly5795<T>> {}

type DeepReadonlyObject5795<T> = {
  readonly [P in keyof T]: DeepReadonly5795<T[P]>;
};

type UnionToIntersection5795<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5795<T> = UnionToIntersection5795<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5795<T extends unknown[], V> = [...T, V];

type TuplifyUnion5795<T, L = LastOf5795<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5795<TuplifyUnion5795<Exclude<T, L>>, L>;

type DeepPartial5795<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5795<T[P]> }
  : T;

type Paths5795<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5795<K, Paths5795<T[K], Prev5795[D]>> : never }[keyof T]
  : never;

type Prev5795 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5795<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5795 {
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

type ConfigPaths5795 = Paths5795<NestedConfig5795>;

interface HeavyProps5795 {
  config: DeepPartial5795<NestedConfig5795>;
  path?: ConfigPaths5795;
}

const HeavyComponent5795 = memo(function HeavyComponent5795({ config }: HeavyProps5795) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5795) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5795 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5795: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5795.displayName = 'HeavyComponent5795';
export default HeavyComponent5795;
