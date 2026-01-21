'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5367<T> = T extends (infer U)[]
  ? DeepReadonlyArray5367<U>
  : T extends object
  ? DeepReadonlyObject5367<T>
  : T;

interface DeepReadonlyArray5367<T> extends ReadonlyArray<DeepReadonly5367<T>> {}

type DeepReadonlyObject5367<T> = {
  readonly [P in keyof T]: DeepReadonly5367<T[P]>;
};

type UnionToIntersection5367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5367<T> = UnionToIntersection5367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5367<T extends unknown[], V> = [...T, V];

type TuplifyUnion5367<T, L = LastOf5367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5367<TuplifyUnion5367<Exclude<T, L>>, L>;

type DeepPartial5367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5367<T[P]> }
  : T;

type Paths5367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5367<K, Paths5367<T[K], Prev5367[D]>> : never }[keyof T]
  : never;

type Prev5367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5367 {
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

type ConfigPaths5367 = Paths5367<NestedConfig5367>;

interface HeavyProps5367 {
  config: DeepPartial5367<NestedConfig5367>;
  path?: ConfigPaths5367;
}

const HeavyComponent5367 = memo(function HeavyComponent5367({ config }: HeavyProps5367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5367.displayName = 'HeavyComponent5367';
export default HeavyComponent5367;
