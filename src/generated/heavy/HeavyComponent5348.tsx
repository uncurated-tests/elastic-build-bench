'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5348<T> = T extends (infer U)[]
  ? DeepReadonlyArray5348<U>
  : T extends object
  ? DeepReadonlyObject5348<T>
  : T;

interface DeepReadonlyArray5348<T> extends ReadonlyArray<DeepReadonly5348<T>> {}

type DeepReadonlyObject5348<T> = {
  readonly [P in keyof T]: DeepReadonly5348<T[P]>;
};

type UnionToIntersection5348<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5348<T> = UnionToIntersection5348<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5348<T extends unknown[], V> = [...T, V];

type TuplifyUnion5348<T, L = LastOf5348<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5348<TuplifyUnion5348<Exclude<T, L>>, L>;

type DeepPartial5348<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5348<T[P]> }
  : T;

type Paths5348<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5348<K, Paths5348<T[K], Prev5348[D]>> : never }[keyof T]
  : never;

type Prev5348 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5348<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5348 {
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

type ConfigPaths5348 = Paths5348<NestedConfig5348>;

interface HeavyProps5348 {
  config: DeepPartial5348<NestedConfig5348>;
  path?: ConfigPaths5348;
}

const HeavyComponent5348 = memo(function HeavyComponent5348({ config }: HeavyProps5348) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5348) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5348 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5348: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5348.displayName = 'HeavyComponent5348';
export default HeavyComponent5348;
