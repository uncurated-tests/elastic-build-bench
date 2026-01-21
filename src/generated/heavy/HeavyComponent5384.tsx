'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5384<T> = T extends (infer U)[]
  ? DeepReadonlyArray5384<U>
  : T extends object
  ? DeepReadonlyObject5384<T>
  : T;

interface DeepReadonlyArray5384<T> extends ReadonlyArray<DeepReadonly5384<T>> {}

type DeepReadonlyObject5384<T> = {
  readonly [P in keyof T]: DeepReadonly5384<T[P]>;
};

type UnionToIntersection5384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5384<T> = UnionToIntersection5384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5384<T extends unknown[], V> = [...T, V];

type TuplifyUnion5384<T, L = LastOf5384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5384<TuplifyUnion5384<Exclude<T, L>>, L>;

type DeepPartial5384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5384<T[P]> }
  : T;

type Paths5384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5384<K, Paths5384<T[K], Prev5384[D]>> : never }[keyof T]
  : never;

type Prev5384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5384 {
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

type ConfigPaths5384 = Paths5384<NestedConfig5384>;

interface HeavyProps5384 {
  config: DeepPartial5384<NestedConfig5384>;
  path?: ConfigPaths5384;
}

const HeavyComponent5384 = memo(function HeavyComponent5384({ config }: HeavyProps5384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5384.displayName = 'HeavyComponent5384';
export default HeavyComponent5384;
