'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5917<T> = T extends (infer U)[]
  ? DeepReadonlyArray5917<U>
  : T extends object
  ? DeepReadonlyObject5917<T>
  : T;

interface DeepReadonlyArray5917<T> extends ReadonlyArray<DeepReadonly5917<T>> {}

type DeepReadonlyObject5917<T> = {
  readonly [P in keyof T]: DeepReadonly5917<T[P]>;
};

type UnionToIntersection5917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5917<T> = UnionToIntersection5917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5917<T extends unknown[], V> = [...T, V];

type TuplifyUnion5917<T, L = LastOf5917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5917<TuplifyUnion5917<Exclude<T, L>>, L>;

type DeepPartial5917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5917<T[P]> }
  : T;

type Paths5917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5917<K, Paths5917<T[K], Prev5917[D]>> : never }[keyof T]
  : never;

type Prev5917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5917 {
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

type ConfigPaths5917 = Paths5917<NestedConfig5917>;

interface HeavyProps5917 {
  config: DeepPartial5917<NestedConfig5917>;
  path?: ConfigPaths5917;
}

const HeavyComponent5917 = memo(function HeavyComponent5917({ config }: HeavyProps5917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5917.displayName = 'HeavyComponent5917';
export default HeavyComponent5917;
