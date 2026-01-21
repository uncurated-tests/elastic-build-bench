'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5258<T> = T extends (infer U)[]
  ? DeepReadonlyArray5258<U>
  : T extends object
  ? DeepReadonlyObject5258<T>
  : T;

interface DeepReadonlyArray5258<T> extends ReadonlyArray<DeepReadonly5258<T>> {}

type DeepReadonlyObject5258<T> = {
  readonly [P in keyof T]: DeepReadonly5258<T[P]>;
};

type UnionToIntersection5258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5258<T> = UnionToIntersection5258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5258<T extends unknown[], V> = [...T, V];

type TuplifyUnion5258<T, L = LastOf5258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5258<TuplifyUnion5258<Exclude<T, L>>, L>;

type DeepPartial5258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5258<T[P]> }
  : T;

type Paths5258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5258<K, Paths5258<T[K], Prev5258[D]>> : never }[keyof T]
  : never;

type Prev5258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5258 {
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

type ConfigPaths5258 = Paths5258<NestedConfig5258>;

interface HeavyProps5258 {
  config: DeepPartial5258<NestedConfig5258>;
  path?: ConfigPaths5258;
}

const HeavyComponent5258 = memo(function HeavyComponent5258({ config }: HeavyProps5258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5258.displayName = 'HeavyComponent5258';
export default HeavyComponent5258;
