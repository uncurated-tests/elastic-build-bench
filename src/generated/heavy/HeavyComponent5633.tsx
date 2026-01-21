'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5633<T> = T extends (infer U)[]
  ? DeepReadonlyArray5633<U>
  : T extends object
  ? DeepReadonlyObject5633<T>
  : T;

interface DeepReadonlyArray5633<T> extends ReadonlyArray<DeepReadonly5633<T>> {}

type DeepReadonlyObject5633<T> = {
  readonly [P in keyof T]: DeepReadonly5633<T[P]>;
};

type UnionToIntersection5633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5633<T> = UnionToIntersection5633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5633<T extends unknown[], V> = [...T, V];

type TuplifyUnion5633<T, L = LastOf5633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5633<TuplifyUnion5633<Exclude<T, L>>, L>;

type DeepPartial5633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5633<T[P]> }
  : T;

type Paths5633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5633<K, Paths5633<T[K], Prev5633[D]>> : never }[keyof T]
  : never;

type Prev5633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5633 {
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

type ConfigPaths5633 = Paths5633<NestedConfig5633>;

interface HeavyProps5633 {
  config: DeepPartial5633<NestedConfig5633>;
  path?: ConfigPaths5633;
}

const HeavyComponent5633 = memo(function HeavyComponent5633({ config }: HeavyProps5633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5633.displayName = 'HeavyComponent5633';
export default HeavyComponent5633;
