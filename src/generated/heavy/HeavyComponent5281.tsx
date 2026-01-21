'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5281<T> = T extends (infer U)[]
  ? DeepReadonlyArray5281<U>
  : T extends object
  ? DeepReadonlyObject5281<T>
  : T;

interface DeepReadonlyArray5281<T> extends ReadonlyArray<DeepReadonly5281<T>> {}

type DeepReadonlyObject5281<T> = {
  readonly [P in keyof T]: DeepReadonly5281<T[P]>;
};

type UnionToIntersection5281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5281<T> = UnionToIntersection5281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5281<T extends unknown[], V> = [...T, V];

type TuplifyUnion5281<T, L = LastOf5281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5281<TuplifyUnion5281<Exclude<T, L>>, L>;

type DeepPartial5281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5281<T[P]> }
  : T;

type Paths5281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5281<K, Paths5281<T[K], Prev5281[D]>> : never }[keyof T]
  : never;

type Prev5281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5281 {
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

type ConfigPaths5281 = Paths5281<NestedConfig5281>;

interface HeavyProps5281 {
  config: DeepPartial5281<NestedConfig5281>;
  path?: ConfigPaths5281;
}

const HeavyComponent5281 = memo(function HeavyComponent5281({ config }: HeavyProps5281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5281.displayName = 'HeavyComponent5281';
export default HeavyComponent5281;
