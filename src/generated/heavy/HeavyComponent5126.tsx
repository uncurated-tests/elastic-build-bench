'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5126<T> = T extends (infer U)[]
  ? DeepReadonlyArray5126<U>
  : T extends object
  ? DeepReadonlyObject5126<T>
  : T;

interface DeepReadonlyArray5126<T> extends ReadonlyArray<DeepReadonly5126<T>> {}

type DeepReadonlyObject5126<T> = {
  readonly [P in keyof T]: DeepReadonly5126<T[P]>;
};

type UnionToIntersection5126<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5126<T> = UnionToIntersection5126<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5126<T extends unknown[], V> = [...T, V];

type TuplifyUnion5126<T, L = LastOf5126<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5126<TuplifyUnion5126<Exclude<T, L>>, L>;

type DeepPartial5126<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5126<T[P]> }
  : T;

type Paths5126<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5126<K, Paths5126<T[K], Prev5126[D]>> : never }[keyof T]
  : never;

type Prev5126 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5126<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5126 {
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

type ConfigPaths5126 = Paths5126<NestedConfig5126>;

interface HeavyProps5126 {
  config: DeepPartial5126<NestedConfig5126>;
  path?: ConfigPaths5126;
}

const HeavyComponent5126 = memo(function HeavyComponent5126({ config }: HeavyProps5126) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5126) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5126 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5126: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5126.displayName = 'HeavyComponent5126';
export default HeavyComponent5126;
