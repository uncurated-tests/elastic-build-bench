'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5575<T> = T extends (infer U)[]
  ? DeepReadonlyArray5575<U>
  : T extends object
  ? DeepReadonlyObject5575<T>
  : T;

interface DeepReadonlyArray5575<T> extends ReadonlyArray<DeepReadonly5575<T>> {}

type DeepReadonlyObject5575<T> = {
  readonly [P in keyof T]: DeepReadonly5575<T[P]>;
};

type UnionToIntersection5575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5575<T> = UnionToIntersection5575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5575<T extends unknown[], V> = [...T, V];

type TuplifyUnion5575<T, L = LastOf5575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5575<TuplifyUnion5575<Exclude<T, L>>, L>;

type DeepPartial5575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5575<T[P]> }
  : T;

type Paths5575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5575<K, Paths5575<T[K], Prev5575[D]>> : never }[keyof T]
  : never;

type Prev5575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5575 {
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

type ConfigPaths5575 = Paths5575<NestedConfig5575>;

interface HeavyProps5575 {
  config: DeepPartial5575<NestedConfig5575>;
  path?: ConfigPaths5575;
}

const HeavyComponent5575 = memo(function HeavyComponent5575({ config }: HeavyProps5575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5575.displayName = 'HeavyComponent5575';
export default HeavyComponent5575;
