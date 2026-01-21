'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5720<T> = T extends (infer U)[]
  ? DeepReadonlyArray5720<U>
  : T extends object
  ? DeepReadonlyObject5720<T>
  : T;

interface DeepReadonlyArray5720<T> extends ReadonlyArray<DeepReadonly5720<T>> {}

type DeepReadonlyObject5720<T> = {
  readonly [P in keyof T]: DeepReadonly5720<T[P]>;
};

type UnionToIntersection5720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5720<T> = UnionToIntersection5720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5720<T extends unknown[], V> = [...T, V];

type TuplifyUnion5720<T, L = LastOf5720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5720<TuplifyUnion5720<Exclude<T, L>>, L>;

type DeepPartial5720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5720<T[P]> }
  : T;

type Paths5720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5720<K, Paths5720<T[K], Prev5720[D]>> : never }[keyof T]
  : never;

type Prev5720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5720 {
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

type ConfigPaths5720 = Paths5720<NestedConfig5720>;

interface HeavyProps5720 {
  config: DeepPartial5720<NestedConfig5720>;
  path?: ConfigPaths5720;
}

const HeavyComponent5720 = memo(function HeavyComponent5720({ config }: HeavyProps5720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5720.displayName = 'HeavyComponent5720';
export default HeavyComponent5720;
