'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5961<T> = T extends (infer U)[]
  ? DeepReadonlyArray5961<U>
  : T extends object
  ? DeepReadonlyObject5961<T>
  : T;

interface DeepReadonlyArray5961<T> extends ReadonlyArray<DeepReadonly5961<T>> {}

type DeepReadonlyObject5961<T> = {
  readonly [P in keyof T]: DeepReadonly5961<T[P]>;
};

type UnionToIntersection5961<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5961<T> = UnionToIntersection5961<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5961<T extends unknown[], V> = [...T, V];

type TuplifyUnion5961<T, L = LastOf5961<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5961<TuplifyUnion5961<Exclude<T, L>>, L>;

type DeepPartial5961<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5961<T[P]> }
  : T;

type Paths5961<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5961<K, Paths5961<T[K], Prev5961[D]>> : never }[keyof T]
  : never;

type Prev5961 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5961<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5961 {
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

type ConfigPaths5961 = Paths5961<NestedConfig5961>;

interface HeavyProps5961 {
  config: DeepPartial5961<NestedConfig5961>;
  path?: ConfigPaths5961;
}

const HeavyComponent5961 = memo(function HeavyComponent5961({ config }: HeavyProps5961) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5961) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5961 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5961: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5961.displayName = 'HeavyComponent5961';
export default HeavyComponent5961;
