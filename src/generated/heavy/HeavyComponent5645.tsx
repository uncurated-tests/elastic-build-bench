'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5645<T> = T extends (infer U)[]
  ? DeepReadonlyArray5645<U>
  : T extends object
  ? DeepReadonlyObject5645<T>
  : T;

interface DeepReadonlyArray5645<T> extends ReadonlyArray<DeepReadonly5645<T>> {}

type DeepReadonlyObject5645<T> = {
  readonly [P in keyof T]: DeepReadonly5645<T[P]>;
};

type UnionToIntersection5645<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5645<T> = UnionToIntersection5645<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5645<T extends unknown[], V> = [...T, V];

type TuplifyUnion5645<T, L = LastOf5645<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5645<TuplifyUnion5645<Exclude<T, L>>, L>;

type DeepPartial5645<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5645<T[P]> }
  : T;

type Paths5645<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5645<K, Paths5645<T[K], Prev5645[D]>> : never }[keyof T]
  : never;

type Prev5645 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5645<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5645 {
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

type ConfigPaths5645 = Paths5645<NestedConfig5645>;

interface HeavyProps5645 {
  config: DeepPartial5645<NestedConfig5645>;
  path?: ConfigPaths5645;
}

const HeavyComponent5645 = memo(function HeavyComponent5645({ config }: HeavyProps5645) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5645) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5645 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5645: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5645.displayName = 'HeavyComponent5645';
export default HeavyComponent5645;
