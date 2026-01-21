'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5820<T> = T extends (infer U)[]
  ? DeepReadonlyArray5820<U>
  : T extends object
  ? DeepReadonlyObject5820<T>
  : T;

interface DeepReadonlyArray5820<T> extends ReadonlyArray<DeepReadonly5820<T>> {}

type DeepReadonlyObject5820<T> = {
  readonly [P in keyof T]: DeepReadonly5820<T[P]>;
};

type UnionToIntersection5820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5820<T> = UnionToIntersection5820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5820<T extends unknown[], V> = [...T, V];

type TuplifyUnion5820<T, L = LastOf5820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5820<TuplifyUnion5820<Exclude<T, L>>, L>;

type DeepPartial5820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5820<T[P]> }
  : T;

type Paths5820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5820<K, Paths5820<T[K], Prev5820[D]>> : never }[keyof T]
  : never;

type Prev5820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5820 {
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

type ConfigPaths5820 = Paths5820<NestedConfig5820>;

interface HeavyProps5820 {
  config: DeepPartial5820<NestedConfig5820>;
  path?: ConfigPaths5820;
}

const HeavyComponent5820 = memo(function HeavyComponent5820({ config }: HeavyProps5820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5820.displayName = 'HeavyComponent5820';
export default HeavyComponent5820;
