'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5958<T> = T extends (infer U)[]
  ? DeepReadonlyArray5958<U>
  : T extends object
  ? DeepReadonlyObject5958<T>
  : T;

interface DeepReadonlyArray5958<T> extends ReadonlyArray<DeepReadonly5958<T>> {}

type DeepReadonlyObject5958<T> = {
  readonly [P in keyof T]: DeepReadonly5958<T[P]>;
};

type UnionToIntersection5958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5958<T> = UnionToIntersection5958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5958<T extends unknown[], V> = [...T, V];

type TuplifyUnion5958<T, L = LastOf5958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5958<TuplifyUnion5958<Exclude<T, L>>, L>;

type DeepPartial5958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5958<T[P]> }
  : T;

type Paths5958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5958<K, Paths5958<T[K], Prev5958[D]>> : never }[keyof T]
  : never;

type Prev5958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5958 {
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

type ConfigPaths5958 = Paths5958<NestedConfig5958>;

interface HeavyProps5958 {
  config: DeepPartial5958<NestedConfig5958>;
  path?: ConfigPaths5958;
}

const HeavyComponent5958 = memo(function HeavyComponent5958({ config }: HeavyProps5958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5958.displayName = 'HeavyComponent5958';
export default HeavyComponent5958;
