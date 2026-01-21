'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5785<T> = T extends (infer U)[]
  ? DeepReadonlyArray5785<U>
  : T extends object
  ? DeepReadonlyObject5785<T>
  : T;

interface DeepReadonlyArray5785<T> extends ReadonlyArray<DeepReadonly5785<T>> {}

type DeepReadonlyObject5785<T> = {
  readonly [P in keyof T]: DeepReadonly5785<T[P]>;
};

type UnionToIntersection5785<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5785<T> = UnionToIntersection5785<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5785<T extends unknown[], V> = [...T, V];

type TuplifyUnion5785<T, L = LastOf5785<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5785<TuplifyUnion5785<Exclude<T, L>>, L>;

type DeepPartial5785<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5785<T[P]> }
  : T;

type Paths5785<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5785<K, Paths5785<T[K], Prev5785[D]>> : never }[keyof T]
  : never;

type Prev5785 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5785<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5785 {
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

type ConfigPaths5785 = Paths5785<NestedConfig5785>;

interface HeavyProps5785 {
  config: DeepPartial5785<NestedConfig5785>;
  path?: ConfigPaths5785;
}

const HeavyComponent5785 = memo(function HeavyComponent5785({ config }: HeavyProps5785) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5785) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5785 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5785: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5785.displayName = 'HeavyComponent5785';
export default HeavyComponent5785;
