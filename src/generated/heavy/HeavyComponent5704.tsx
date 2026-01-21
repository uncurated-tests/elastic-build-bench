'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5704<T> = T extends (infer U)[]
  ? DeepReadonlyArray5704<U>
  : T extends object
  ? DeepReadonlyObject5704<T>
  : T;

interface DeepReadonlyArray5704<T> extends ReadonlyArray<DeepReadonly5704<T>> {}

type DeepReadonlyObject5704<T> = {
  readonly [P in keyof T]: DeepReadonly5704<T[P]>;
};

type UnionToIntersection5704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5704<T> = UnionToIntersection5704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5704<T extends unknown[], V> = [...T, V];

type TuplifyUnion5704<T, L = LastOf5704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5704<TuplifyUnion5704<Exclude<T, L>>, L>;

type DeepPartial5704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5704<T[P]> }
  : T;

type Paths5704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5704<K, Paths5704<T[K], Prev5704[D]>> : never }[keyof T]
  : never;

type Prev5704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5704 {
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

type ConfigPaths5704 = Paths5704<NestedConfig5704>;

interface HeavyProps5704 {
  config: DeepPartial5704<NestedConfig5704>;
  path?: ConfigPaths5704;
}

const HeavyComponent5704 = memo(function HeavyComponent5704({ config }: HeavyProps5704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5704.displayName = 'HeavyComponent5704';
export default HeavyComponent5704;
