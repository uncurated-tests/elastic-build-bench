'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5306<T> = T extends (infer U)[]
  ? DeepReadonlyArray5306<U>
  : T extends object
  ? DeepReadonlyObject5306<T>
  : T;

interface DeepReadonlyArray5306<T> extends ReadonlyArray<DeepReadonly5306<T>> {}

type DeepReadonlyObject5306<T> = {
  readonly [P in keyof T]: DeepReadonly5306<T[P]>;
};

type UnionToIntersection5306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5306<T> = UnionToIntersection5306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5306<T extends unknown[], V> = [...T, V];

type TuplifyUnion5306<T, L = LastOf5306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5306<TuplifyUnion5306<Exclude<T, L>>, L>;

type DeepPartial5306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5306<T[P]> }
  : T;

type Paths5306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5306<K, Paths5306<T[K], Prev5306[D]>> : never }[keyof T]
  : never;

type Prev5306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5306 {
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

type ConfigPaths5306 = Paths5306<NestedConfig5306>;

interface HeavyProps5306 {
  config: DeepPartial5306<NestedConfig5306>;
  path?: ConfigPaths5306;
}

const HeavyComponent5306 = memo(function HeavyComponent5306({ config }: HeavyProps5306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5306.displayName = 'HeavyComponent5306';
export default HeavyComponent5306;
