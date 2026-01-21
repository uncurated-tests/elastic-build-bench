'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5114<T> = T extends (infer U)[]
  ? DeepReadonlyArray5114<U>
  : T extends object
  ? DeepReadonlyObject5114<T>
  : T;

interface DeepReadonlyArray5114<T> extends ReadonlyArray<DeepReadonly5114<T>> {}

type DeepReadonlyObject5114<T> = {
  readonly [P in keyof T]: DeepReadonly5114<T[P]>;
};

type UnionToIntersection5114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5114<T> = UnionToIntersection5114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5114<T extends unknown[], V> = [...T, V];

type TuplifyUnion5114<T, L = LastOf5114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5114<TuplifyUnion5114<Exclude<T, L>>, L>;

type DeepPartial5114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5114<T[P]> }
  : T;

type Paths5114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5114<K, Paths5114<T[K], Prev5114[D]>> : never }[keyof T]
  : never;

type Prev5114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5114 {
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

type ConfigPaths5114 = Paths5114<NestedConfig5114>;

interface HeavyProps5114 {
  config: DeepPartial5114<NestedConfig5114>;
  path?: ConfigPaths5114;
}

const HeavyComponent5114 = memo(function HeavyComponent5114({ config }: HeavyProps5114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5114.displayName = 'HeavyComponent5114';
export default HeavyComponent5114;
