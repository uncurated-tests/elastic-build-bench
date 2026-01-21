'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5045<T> = T extends (infer U)[]
  ? DeepReadonlyArray5045<U>
  : T extends object
  ? DeepReadonlyObject5045<T>
  : T;

interface DeepReadonlyArray5045<T> extends ReadonlyArray<DeepReadonly5045<T>> {}

type DeepReadonlyObject5045<T> = {
  readonly [P in keyof T]: DeepReadonly5045<T[P]>;
};

type UnionToIntersection5045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5045<T> = UnionToIntersection5045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5045<T extends unknown[], V> = [...T, V];

type TuplifyUnion5045<T, L = LastOf5045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5045<TuplifyUnion5045<Exclude<T, L>>, L>;

type DeepPartial5045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5045<T[P]> }
  : T;

type Paths5045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5045<K, Paths5045<T[K], Prev5045[D]>> : never }[keyof T]
  : never;

type Prev5045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5045 {
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

type ConfigPaths5045 = Paths5045<NestedConfig5045>;

interface HeavyProps5045 {
  config: DeepPartial5045<NestedConfig5045>;
  path?: ConfigPaths5045;
}

const HeavyComponent5045 = memo(function HeavyComponent5045({ config }: HeavyProps5045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5045.displayName = 'HeavyComponent5045';
export default HeavyComponent5045;
