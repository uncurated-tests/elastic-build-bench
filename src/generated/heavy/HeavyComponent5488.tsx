'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5488<T> = T extends (infer U)[]
  ? DeepReadonlyArray5488<U>
  : T extends object
  ? DeepReadonlyObject5488<T>
  : T;

interface DeepReadonlyArray5488<T> extends ReadonlyArray<DeepReadonly5488<T>> {}

type DeepReadonlyObject5488<T> = {
  readonly [P in keyof T]: DeepReadonly5488<T[P]>;
};

type UnionToIntersection5488<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5488<T> = UnionToIntersection5488<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5488<T extends unknown[], V> = [...T, V];

type TuplifyUnion5488<T, L = LastOf5488<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5488<TuplifyUnion5488<Exclude<T, L>>, L>;

type DeepPartial5488<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5488<T[P]> }
  : T;

type Paths5488<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5488<K, Paths5488<T[K], Prev5488[D]>> : never }[keyof T]
  : never;

type Prev5488 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5488<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5488 {
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

type ConfigPaths5488 = Paths5488<NestedConfig5488>;

interface HeavyProps5488 {
  config: DeepPartial5488<NestedConfig5488>;
  path?: ConfigPaths5488;
}

const HeavyComponent5488 = memo(function HeavyComponent5488({ config }: HeavyProps5488) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5488) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5488 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5488: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5488.displayName = 'HeavyComponent5488';
export default HeavyComponent5488;
