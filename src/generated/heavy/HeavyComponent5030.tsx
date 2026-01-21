'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5030<T> = T extends (infer U)[]
  ? DeepReadonlyArray5030<U>
  : T extends object
  ? DeepReadonlyObject5030<T>
  : T;

interface DeepReadonlyArray5030<T> extends ReadonlyArray<DeepReadonly5030<T>> {}

type DeepReadonlyObject5030<T> = {
  readonly [P in keyof T]: DeepReadonly5030<T[P]>;
};

type UnionToIntersection5030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5030<T> = UnionToIntersection5030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5030<T extends unknown[], V> = [...T, V];

type TuplifyUnion5030<T, L = LastOf5030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5030<TuplifyUnion5030<Exclude<T, L>>, L>;

type DeepPartial5030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5030<T[P]> }
  : T;

type Paths5030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5030<K, Paths5030<T[K], Prev5030[D]>> : never }[keyof T]
  : never;

type Prev5030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5030 {
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

type ConfigPaths5030 = Paths5030<NestedConfig5030>;

interface HeavyProps5030 {
  config: DeepPartial5030<NestedConfig5030>;
  path?: ConfigPaths5030;
}

const HeavyComponent5030 = memo(function HeavyComponent5030({ config }: HeavyProps5030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5030.displayName = 'HeavyComponent5030';
export default HeavyComponent5030;
