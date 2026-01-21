'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5930<T> = T extends (infer U)[]
  ? DeepReadonlyArray5930<U>
  : T extends object
  ? DeepReadonlyObject5930<T>
  : T;

interface DeepReadonlyArray5930<T> extends ReadonlyArray<DeepReadonly5930<T>> {}

type DeepReadonlyObject5930<T> = {
  readonly [P in keyof T]: DeepReadonly5930<T[P]>;
};

type UnionToIntersection5930<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5930<T> = UnionToIntersection5930<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5930<T extends unknown[], V> = [...T, V];

type TuplifyUnion5930<T, L = LastOf5930<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5930<TuplifyUnion5930<Exclude<T, L>>, L>;

type DeepPartial5930<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5930<T[P]> }
  : T;

type Paths5930<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5930<K, Paths5930<T[K], Prev5930[D]>> : never }[keyof T]
  : never;

type Prev5930 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5930<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5930 {
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

type ConfigPaths5930 = Paths5930<NestedConfig5930>;

interface HeavyProps5930 {
  config: DeepPartial5930<NestedConfig5930>;
  path?: ConfigPaths5930;
}

const HeavyComponent5930 = memo(function HeavyComponent5930({ config }: HeavyProps5930) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5930) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5930 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5930: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5930.displayName = 'HeavyComponent5930';
export default HeavyComponent5930;
