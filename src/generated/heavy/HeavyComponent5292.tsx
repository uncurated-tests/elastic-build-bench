'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5292<T> = T extends (infer U)[]
  ? DeepReadonlyArray5292<U>
  : T extends object
  ? DeepReadonlyObject5292<T>
  : T;

interface DeepReadonlyArray5292<T> extends ReadonlyArray<DeepReadonly5292<T>> {}

type DeepReadonlyObject5292<T> = {
  readonly [P in keyof T]: DeepReadonly5292<T[P]>;
};

type UnionToIntersection5292<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5292<T> = UnionToIntersection5292<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5292<T extends unknown[], V> = [...T, V];

type TuplifyUnion5292<T, L = LastOf5292<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5292<TuplifyUnion5292<Exclude<T, L>>, L>;

type DeepPartial5292<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5292<T[P]> }
  : T;

type Paths5292<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5292<K, Paths5292<T[K], Prev5292[D]>> : never }[keyof T]
  : never;

type Prev5292 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5292<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5292 {
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

type ConfigPaths5292 = Paths5292<NestedConfig5292>;

interface HeavyProps5292 {
  config: DeepPartial5292<NestedConfig5292>;
  path?: ConfigPaths5292;
}

const HeavyComponent5292 = memo(function HeavyComponent5292({ config }: HeavyProps5292) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5292) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5292 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5292: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5292.displayName = 'HeavyComponent5292';
export default HeavyComponent5292;
