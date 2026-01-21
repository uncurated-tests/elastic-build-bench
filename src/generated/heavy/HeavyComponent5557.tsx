'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5557<T> = T extends (infer U)[]
  ? DeepReadonlyArray5557<U>
  : T extends object
  ? DeepReadonlyObject5557<T>
  : T;

interface DeepReadonlyArray5557<T> extends ReadonlyArray<DeepReadonly5557<T>> {}

type DeepReadonlyObject5557<T> = {
  readonly [P in keyof T]: DeepReadonly5557<T[P]>;
};

type UnionToIntersection5557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5557<T> = UnionToIntersection5557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5557<T extends unknown[], V> = [...T, V];

type TuplifyUnion5557<T, L = LastOf5557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5557<TuplifyUnion5557<Exclude<T, L>>, L>;

type DeepPartial5557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5557<T[P]> }
  : T;

type Paths5557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5557<K, Paths5557<T[K], Prev5557[D]>> : never }[keyof T]
  : never;

type Prev5557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5557 {
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

type ConfigPaths5557 = Paths5557<NestedConfig5557>;

interface HeavyProps5557 {
  config: DeepPartial5557<NestedConfig5557>;
  path?: ConfigPaths5557;
}

const HeavyComponent5557 = memo(function HeavyComponent5557({ config }: HeavyProps5557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5557.displayName = 'HeavyComponent5557';
export default HeavyComponent5557;
