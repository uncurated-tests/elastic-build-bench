'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5461<T> = T extends (infer U)[]
  ? DeepReadonlyArray5461<U>
  : T extends object
  ? DeepReadonlyObject5461<T>
  : T;

interface DeepReadonlyArray5461<T> extends ReadonlyArray<DeepReadonly5461<T>> {}

type DeepReadonlyObject5461<T> = {
  readonly [P in keyof T]: DeepReadonly5461<T[P]>;
};

type UnionToIntersection5461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5461<T> = UnionToIntersection5461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5461<T extends unknown[], V> = [...T, V];

type TuplifyUnion5461<T, L = LastOf5461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5461<TuplifyUnion5461<Exclude<T, L>>, L>;

type DeepPartial5461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5461<T[P]> }
  : T;

type Paths5461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5461<K, Paths5461<T[K], Prev5461[D]>> : never }[keyof T]
  : never;

type Prev5461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5461 {
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

type ConfigPaths5461 = Paths5461<NestedConfig5461>;

interface HeavyProps5461 {
  config: DeepPartial5461<NestedConfig5461>;
  path?: ConfigPaths5461;
}

const HeavyComponent5461 = memo(function HeavyComponent5461({ config }: HeavyProps5461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5461.displayName = 'HeavyComponent5461';
export default HeavyComponent5461;
