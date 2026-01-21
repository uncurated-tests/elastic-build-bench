'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5245<T> = T extends (infer U)[]
  ? DeepReadonlyArray5245<U>
  : T extends object
  ? DeepReadonlyObject5245<T>
  : T;

interface DeepReadonlyArray5245<T> extends ReadonlyArray<DeepReadonly5245<T>> {}

type DeepReadonlyObject5245<T> = {
  readonly [P in keyof T]: DeepReadonly5245<T[P]>;
};

type UnionToIntersection5245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5245<T> = UnionToIntersection5245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5245<T extends unknown[], V> = [...T, V];

type TuplifyUnion5245<T, L = LastOf5245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5245<TuplifyUnion5245<Exclude<T, L>>, L>;

type DeepPartial5245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5245<T[P]> }
  : T;

type Paths5245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5245<K, Paths5245<T[K], Prev5245[D]>> : never }[keyof T]
  : never;

type Prev5245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5245 {
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

type ConfigPaths5245 = Paths5245<NestedConfig5245>;

interface HeavyProps5245 {
  config: DeepPartial5245<NestedConfig5245>;
  path?: ConfigPaths5245;
}

const HeavyComponent5245 = memo(function HeavyComponent5245({ config }: HeavyProps5245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5245.displayName = 'HeavyComponent5245';
export default HeavyComponent5245;
