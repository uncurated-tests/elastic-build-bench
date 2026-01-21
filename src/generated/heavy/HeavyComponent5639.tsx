'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5639<T> = T extends (infer U)[]
  ? DeepReadonlyArray5639<U>
  : T extends object
  ? DeepReadonlyObject5639<T>
  : T;

interface DeepReadonlyArray5639<T> extends ReadonlyArray<DeepReadonly5639<T>> {}

type DeepReadonlyObject5639<T> = {
  readonly [P in keyof T]: DeepReadonly5639<T[P]>;
};

type UnionToIntersection5639<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5639<T> = UnionToIntersection5639<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5639<T extends unknown[], V> = [...T, V];

type TuplifyUnion5639<T, L = LastOf5639<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5639<TuplifyUnion5639<Exclude<T, L>>, L>;

type DeepPartial5639<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5639<T[P]> }
  : T;

type Paths5639<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5639<K, Paths5639<T[K], Prev5639[D]>> : never }[keyof T]
  : never;

type Prev5639 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5639<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5639 {
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

type ConfigPaths5639 = Paths5639<NestedConfig5639>;

interface HeavyProps5639 {
  config: DeepPartial5639<NestedConfig5639>;
  path?: ConfigPaths5639;
}

const HeavyComponent5639 = memo(function HeavyComponent5639({ config }: HeavyProps5639) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5639) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5639 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5639: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5639.displayName = 'HeavyComponent5639';
export default HeavyComponent5639;
