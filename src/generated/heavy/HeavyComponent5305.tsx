'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5305<T> = T extends (infer U)[]
  ? DeepReadonlyArray5305<U>
  : T extends object
  ? DeepReadonlyObject5305<T>
  : T;

interface DeepReadonlyArray5305<T> extends ReadonlyArray<DeepReadonly5305<T>> {}

type DeepReadonlyObject5305<T> = {
  readonly [P in keyof T]: DeepReadonly5305<T[P]>;
};

type UnionToIntersection5305<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5305<T> = UnionToIntersection5305<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5305<T extends unknown[], V> = [...T, V];

type TuplifyUnion5305<T, L = LastOf5305<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5305<TuplifyUnion5305<Exclude<T, L>>, L>;

type DeepPartial5305<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5305<T[P]> }
  : T;

type Paths5305<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5305<K, Paths5305<T[K], Prev5305[D]>> : never }[keyof T]
  : never;

type Prev5305 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5305<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5305 {
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

type ConfigPaths5305 = Paths5305<NestedConfig5305>;

interface HeavyProps5305 {
  config: DeepPartial5305<NestedConfig5305>;
  path?: ConfigPaths5305;
}

const HeavyComponent5305 = memo(function HeavyComponent5305({ config }: HeavyProps5305) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5305) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5305 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5305: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5305.displayName = 'HeavyComponent5305';
export default HeavyComponent5305;
