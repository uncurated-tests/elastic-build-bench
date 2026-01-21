'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5778<T> = T extends (infer U)[]
  ? DeepReadonlyArray5778<U>
  : T extends object
  ? DeepReadonlyObject5778<T>
  : T;

interface DeepReadonlyArray5778<T> extends ReadonlyArray<DeepReadonly5778<T>> {}

type DeepReadonlyObject5778<T> = {
  readonly [P in keyof T]: DeepReadonly5778<T[P]>;
};

type UnionToIntersection5778<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5778<T> = UnionToIntersection5778<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5778<T extends unknown[], V> = [...T, V];

type TuplifyUnion5778<T, L = LastOf5778<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5778<TuplifyUnion5778<Exclude<T, L>>, L>;

type DeepPartial5778<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5778<T[P]> }
  : T;

type Paths5778<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5778<K, Paths5778<T[K], Prev5778[D]>> : never }[keyof T]
  : never;

type Prev5778 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5778<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5778 {
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

type ConfigPaths5778 = Paths5778<NestedConfig5778>;

interface HeavyProps5778 {
  config: DeepPartial5778<NestedConfig5778>;
  path?: ConfigPaths5778;
}

const HeavyComponent5778 = memo(function HeavyComponent5778({ config }: HeavyProps5778) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5778) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5778 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5778: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5778.displayName = 'HeavyComponent5778';
export default HeavyComponent5778;
