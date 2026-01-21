'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5404<T> = T extends (infer U)[]
  ? DeepReadonlyArray5404<U>
  : T extends object
  ? DeepReadonlyObject5404<T>
  : T;

interface DeepReadonlyArray5404<T> extends ReadonlyArray<DeepReadonly5404<T>> {}

type DeepReadonlyObject5404<T> = {
  readonly [P in keyof T]: DeepReadonly5404<T[P]>;
};

type UnionToIntersection5404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5404<T> = UnionToIntersection5404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5404<T extends unknown[], V> = [...T, V];

type TuplifyUnion5404<T, L = LastOf5404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5404<TuplifyUnion5404<Exclude<T, L>>, L>;

type DeepPartial5404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5404<T[P]> }
  : T;

type Paths5404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5404<K, Paths5404<T[K], Prev5404[D]>> : never }[keyof T]
  : never;

type Prev5404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5404 {
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

type ConfigPaths5404 = Paths5404<NestedConfig5404>;

interface HeavyProps5404 {
  config: DeepPartial5404<NestedConfig5404>;
  path?: ConfigPaths5404;
}

const HeavyComponent5404 = memo(function HeavyComponent5404({ config }: HeavyProps5404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5404.displayName = 'HeavyComponent5404';
export default HeavyComponent5404;
