'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5709<T> = T extends (infer U)[]
  ? DeepReadonlyArray5709<U>
  : T extends object
  ? DeepReadonlyObject5709<T>
  : T;

interface DeepReadonlyArray5709<T> extends ReadonlyArray<DeepReadonly5709<T>> {}

type DeepReadonlyObject5709<T> = {
  readonly [P in keyof T]: DeepReadonly5709<T[P]>;
};

type UnionToIntersection5709<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5709<T> = UnionToIntersection5709<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5709<T extends unknown[], V> = [...T, V];

type TuplifyUnion5709<T, L = LastOf5709<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5709<TuplifyUnion5709<Exclude<T, L>>, L>;

type DeepPartial5709<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5709<T[P]> }
  : T;

type Paths5709<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5709<K, Paths5709<T[K], Prev5709[D]>> : never }[keyof T]
  : never;

type Prev5709 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5709<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5709 {
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

type ConfigPaths5709 = Paths5709<NestedConfig5709>;

interface HeavyProps5709 {
  config: DeepPartial5709<NestedConfig5709>;
  path?: ConfigPaths5709;
}

const HeavyComponent5709 = memo(function HeavyComponent5709({ config }: HeavyProps5709) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5709) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5709 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5709: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5709.displayName = 'HeavyComponent5709';
export default HeavyComponent5709;
