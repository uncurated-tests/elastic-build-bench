'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5331<T> = T extends (infer U)[]
  ? DeepReadonlyArray5331<U>
  : T extends object
  ? DeepReadonlyObject5331<T>
  : T;

interface DeepReadonlyArray5331<T> extends ReadonlyArray<DeepReadonly5331<T>> {}

type DeepReadonlyObject5331<T> = {
  readonly [P in keyof T]: DeepReadonly5331<T[P]>;
};

type UnionToIntersection5331<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5331<T> = UnionToIntersection5331<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5331<T extends unknown[], V> = [...T, V];

type TuplifyUnion5331<T, L = LastOf5331<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5331<TuplifyUnion5331<Exclude<T, L>>, L>;

type DeepPartial5331<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5331<T[P]> }
  : T;

type Paths5331<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5331<K, Paths5331<T[K], Prev5331[D]>> : never }[keyof T]
  : never;

type Prev5331 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5331<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5331 {
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

type ConfigPaths5331 = Paths5331<NestedConfig5331>;

interface HeavyProps5331 {
  config: DeepPartial5331<NestedConfig5331>;
  path?: ConfigPaths5331;
}

const HeavyComponent5331 = memo(function HeavyComponent5331({ config }: HeavyProps5331) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5331) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5331 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5331: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5331.displayName = 'HeavyComponent5331';
export default HeavyComponent5331;
