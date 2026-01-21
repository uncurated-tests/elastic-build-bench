'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5625<T> = T extends (infer U)[]
  ? DeepReadonlyArray5625<U>
  : T extends object
  ? DeepReadonlyObject5625<T>
  : T;

interface DeepReadonlyArray5625<T> extends ReadonlyArray<DeepReadonly5625<T>> {}

type DeepReadonlyObject5625<T> = {
  readonly [P in keyof T]: DeepReadonly5625<T[P]>;
};

type UnionToIntersection5625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5625<T> = UnionToIntersection5625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5625<T extends unknown[], V> = [...T, V];

type TuplifyUnion5625<T, L = LastOf5625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5625<TuplifyUnion5625<Exclude<T, L>>, L>;

type DeepPartial5625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5625<T[P]> }
  : T;

type Paths5625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5625<K, Paths5625<T[K], Prev5625[D]>> : never }[keyof T]
  : never;

type Prev5625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5625 {
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

type ConfigPaths5625 = Paths5625<NestedConfig5625>;

interface HeavyProps5625 {
  config: DeepPartial5625<NestedConfig5625>;
  path?: ConfigPaths5625;
}

const HeavyComponent5625 = memo(function HeavyComponent5625({ config }: HeavyProps5625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5625.displayName = 'HeavyComponent5625';
export default HeavyComponent5625;
