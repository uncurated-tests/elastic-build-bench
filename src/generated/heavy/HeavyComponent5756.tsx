'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5756<T> = T extends (infer U)[]
  ? DeepReadonlyArray5756<U>
  : T extends object
  ? DeepReadonlyObject5756<T>
  : T;

interface DeepReadonlyArray5756<T> extends ReadonlyArray<DeepReadonly5756<T>> {}

type DeepReadonlyObject5756<T> = {
  readonly [P in keyof T]: DeepReadonly5756<T[P]>;
};

type UnionToIntersection5756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5756<T> = UnionToIntersection5756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5756<T extends unknown[], V> = [...T, V];

type TuplifyUnion5756<T, L = LastOf5756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5756<TuplifyUnion5756<Exclude<T, L>>, L>;

type DeepPartial5756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5756<T[P]> }
  : T;

type Paths5756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5756<K, Paths5756<T[K], Prev5756[D]>> : never }[keyof T]
  : never;

type Prev5756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5756 {
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

type ConfigPaths5756 = Paths5756<NestedConfig5756>;

interface HeavyProps5756 {
  config: DeepPartial5756<NestedConfig5756>;
  path?: ConfigPaths5756;
}

const HeavyComponent5756 = memo(function HeavyComponent5756({ config }: HeavyProps5756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5756.displayName = 'HeavyComponent5756';
export default HeavyComponent5756;
