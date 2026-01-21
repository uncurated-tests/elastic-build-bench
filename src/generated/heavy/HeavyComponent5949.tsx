'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5949<T> = T extends (infer U)[]
  ? DeepReadonlyArray5949<U>
  : T extends object
  ? DeepReadonlyObject5949<T>
  : T;

interface DeepReadonlyArray5949<T> extends ReadonlyArray<DeepReadonly5949<T>> {}

type DeepReadonlyObject5949<T> = {
  readonly [P in keyof T]: DeepReadonly5949<T[P]>;
};

type UnionToIntersection5949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5949<T> = UnionToIntersection5949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5949<T extends unknown[], V> = [...T, V];

type TuplifyUnion5949<T, L = LastOf5949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5949<TuplifyUnion5949<Exclude<T, L>>, L>;

type DeepPartial5949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5949<T[P]> }
  : T;

type Paths5949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5949<K, Paths5949<T[K], Prev5949[D]>> : never }[keyof T]
  : never;

type Prev5949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5949 {
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

type ConfigPaths5949 = Paths5949<NestedConfig5949>;

interface HeavyProps5949 {
  config: DeepPartial5949<NestedConfig5949>;
  path?: ConfigPaths5949;
}

const HeavyComponent5949 = memo(function HeavyComponent5949({ config }: HeavyProps5949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5949.displayName = 'HeavyComponent5949';
export default HeavyComponent5949;
