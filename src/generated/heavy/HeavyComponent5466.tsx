'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5466<T> = T extends (infer U)[]
  ? DeepReadonlyArray5466<U>
  : T extends object
  ? DeepReadonlyObject5466<T>
  : T;

interface DeepReadonlyArray5466<T> extends ReadonlyArray<DeepReadonly5466<T>> {}

type DeepReadonlyObject5466<T> = {
  readonly [P in keyof T]: DeepReadonly5466<T[P]>;
};

type UnionToIntersection5466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5466<T> = UnionToIntersection5466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5466<T extends unknown[], V> = [...T, V];

type TuplifyUnion5466<T, L = LastOf5466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5466<TuplifyUnion5466<Exclude<T, L>>, L>;

type DeepPartial5466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5466<T[P]> }
  : T;

type Paths5466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5466<K, Paths5466<T[K], Prev5466[D]>> : never }[keyof T]
  : never;

type Prev5466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5466 {
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

type ConfigPaths5466 = Paths5466<NestedConfig5466>;

interface HeavyProps5466 {
  config: DeepPartial5466<NestedConfig5466>;
  path?: ConfigPaths5466;
}

const HeavyComponent5466 = memo(function HeavyComponent5466({ config }: HeavyProps5466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5466.displayName = 'HeavyComponent5466';
export default HeavyComponent5466;
