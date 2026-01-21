'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5314<T> = T extends (infer U)[]
  ? DeepReadonlyArray5314<U>
  : T extends object
  ? DeepReadonlyObject5314<T>
  : T;

interface DeepReadonlyArray5314<T> extends ReadonlyArray<DeepReadonly5314<T>> {}

type DeepReadonlyObject5314<T> = {
  readonly [P in keyof T]: DeepReadonly5314<T[P]>;
};

type UnionToIntersection5314<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5314<T> = UnionToIntersection5314<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5314<T extends unknown[], V> = [...T, V];

type TuplifyUnion5314<T, L = LastOf5314<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5314<TuplifyUnion5314<Exclude<T, L>>, L>;

type DeepPartial5314<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5314<T[P]> }
  : T;

type Paths5314<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5314<K, Paths5314<T[K], Prev5314[D]>> : never }[keyof T]
  : never;

type Prev5314 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5314<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5314 {
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

type ConfigPaths5314 = Paths5314<NestedConfig5314>;

interface HeavyProps5314 {
  config: DeepPartial5314<NestedConfig5314>;
  path?: ConfigPaths5314;
}

const HeavyComponent5314 = memo(function HeavyComponent5314({ config }: HeavyProps5314) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5314) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5314 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5314: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5314.displayName = 'HeavyComponent5314';
export default HeavyComponent5314;
