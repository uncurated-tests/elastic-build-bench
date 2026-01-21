'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5015<T> = T extends (infer U)[]
  ? DeepReadonlyArray5015<U>
  : T extends object
  ? DeepReadonlyObject5015<T>
  : T;

interface DeepReadonlyArray5015<T> extends ReadonlyArray<DeepReadonly5015<T>> {}

type DeepReadonlyObject5015<T> = {
  readonly [P in keyof T]: DeepReadonly5015<T[P]>;
};

type UnionToIntersection5015<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5015<T> = UnionToIntersection5015<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5015<T extends unknown[], V> = [...T, V];

type TuplifyUnion5015<T, L = LastOf5015<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5015<TuplifyUnion5015<Exclude<T, L>>, L>;

type DeepPartial5015<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5015<T[P]> }
  : T;

type Paths5015<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5015<K, Paths5015<T[K], Prev5015[D]>> : never }[keyof T]
  : never;

type Prev5015 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5015<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5015 {
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

type ConfigPaths5015 = Paths5015<NestedConfig5015>;

interface HeavyProps5015 {
  config: DeepPartial5015<NestedConfig5015>;
  path?: ConfigPaths5015;
}

const HeavyComponent5015 = memo(function HeavyComponent5015({ config }: HeavyProps5015) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5015) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5015 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5015: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5015.displayName = 'HeavyComponent5015';
export default HeavyComponent5015;
