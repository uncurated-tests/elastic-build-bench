'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5851<T> = T extends (infer U)[]
  ? DeepReadonlyArray5851<U>
  : T extends object
  ? DeepReadonlyObject5851<T>
  : T;

interface DeepReadonlyArray5851<T> extends ReadonlyArray<DeepReadonly5851<T>> {}

type DeepReadonlyObject5851<T> = {
  readonly [P in keyof T]: DeepReadonly5851<T[P]>;
};

type UnionToIntersection5851<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5851<T> = UnionToIntersection5851<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5851<T extends unknown[], V> = [...T, V];

type TuplifyUnion5851<T, L = LastOf5851<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5851<TuplifyUnion5851<Exclude<T, L>>, L>;

type DeepPartial5851<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5851<T[P]> }
  : T;

type Paths5851<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5851<K, Paths5851<T[K], Prev5851[D]>> : never }[keyof T]
  : never;

type Prev5851 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5851<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5851 {
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

type ConfigPaths5851 = Paths5851<NestedConfig5851>;

interface HeavyProps5851 {
  config: DeepPartial5851<NestedConfig5851>;
  path?: ConfigPaths5851;
}

const HeavyComponent5851 = memo(function HeavyComponent5851({ config }: HeavyProps5851) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5851) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5851 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5851: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5851.displayName = 'HeavyComponent5851';
export default HeavyComponent5851;
