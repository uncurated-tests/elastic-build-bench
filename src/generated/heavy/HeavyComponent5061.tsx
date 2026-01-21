'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5061<T> = T extends (infer U)[]
  ? DeepReadonlyArray5061<U>
  : T extends object
  ? DeepReadonlyObject5061<T>
  : T;

interface DeepReadonlyArray5061<T> extends ReadonlyArray<DeepReadonly5061<T>> {}

type DeepReadonlyObject5061<T> = {
  readonly [P in keyof T]: DeepReadonly5061<T[P]>;
};

type UnionToIntersection5061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5061<T> = UnionToIntersection5061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5061<T extends unknown[], V> = [...T, V];

type TuplifyUnion5061<T, L = LastOf5061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5061<TuplifyUnion5061<Exclude<T, L>>, L>;

type DeepPartial5061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5061<T[P]> }
  : T;

type Paths5061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5061<K, Paths5061<T[K], Prev5061[D]>> : never }[keyof T]
  : never;

type Prev5061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5061 {
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

type ConfigPaths5061 = Paths5061<NestedConfig5061>;

interface HeavyProps5061 {
  config: DeepPartial5061<NestedConfig5061>;
  path?: ConfigPaths5061;
}

const HeavyComponent5061 = memo(function HeavyComponent5061({ config }: HeavyProps5061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5061.displayName = 'HeavyComponent5061';
export default HeavyComponent5061;
