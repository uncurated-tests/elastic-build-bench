'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5712<T> = T extends (infer U)[]
  ? DeepReadonlyArray5712<U>
  : T extends object
  ? DeepReadonlyObject5712<T>
  : T;

interface DeepReadonlyArray5712<T> extends ReadonlyArray<DeepReadonly5712<T>> {}

type DeepReadonlyObject5712<T> = {
  readonly [P in keyof T]: DeepReadonly5712<T[P]>;
};

type UnionToIntersection5712<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5712<T> = UnionToIntersection5712<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5712<T extends unknown[], V> = [...T, V];

type TuplifyUnion5712<T, L = LastOf5712<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5712<TuplifyUnion5712<Exclude<T, L>>, L>;

type DeepPartial5712<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5712<T[P]> }
  : T;

type Paths5712<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5712<K, Paths5712<T[K], Prev5712[D]>> : never }[keyof T]
  : never;

type Prev5712 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5712<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5712 {
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

type ConfigPaths5712 = Paths5712<NestedConfig5712>;

interface HeavyProps5712 {
  config: DeepPartial5712<NestedConfig5712>;
  path?: ConfigPaths5712;
}

const HeavyComponent5712 = memo(function HeavyComponent5712({ config }: HeavyProps5712) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5712) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5712 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5712: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5712.displayName = 'HeavyComponent5712';
export default HeavyComponent5712;
