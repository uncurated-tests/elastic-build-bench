'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5014<T> = T extends (infer U)[]
  ? DeepReadonlyArray5014<U>
  : T extends object
  ? DeepReadonlyObject5014<T>
  : T;

interface DeepReadonlyArray5014<T> extends ReadonlyArray<DeepReadonly5014<T>> {}

type DeepReadonlyObject5014<T> = {
  readonly [P in keyof T]: DeepReadonly5014<T[P]>;
};

type UnionToIntersection5014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5014<T> = UnionToIntersection5014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5014<T extends unknown[], V> = [...T, V];

type TuplifyUnion5014<T, L = LastOf5014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5014<TuplifyUnion5014<Exclude<T, L>>, L>;

type DeepPartial5014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5014<T[P]> }
  : T;

type Paths5014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5014<K, Paths5014<T[K], Prev5014[D]>> : never }[keyof T]
  : never;

type Prev5014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5014 {
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

type ConfigPaths5014 = Paths5014<NestedConfig5014>;

interface HeavyProps5014 {
  config: DeepPartial5014<NestedConfig5014>;
  path?: ConfigPaths5014;
}

const HeavyComponent5014 = memo(function HeavyComponent5014({ config }: HeavyProps5014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5014.displayName = 'HeavyComponent5014';
export default HeavyComponent5014;
