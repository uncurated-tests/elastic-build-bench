'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5129<T> = T extends (infer U)[]
  ? DeepReadonlyArray5129<U>
  : T extends object
  ? DeepReadonlyObject5129<T>
  : T;

interface DeepReadonlyArray5129<T> extends ReadonlyArray<DeepReadonly5129<T>> {}

type DeepReadonlyObject5129<T> = {
  readonly [P in keyof T]: DeepReadonly5129<T[P]>;
};

type UnionToIntersection5129<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5129<T> = UnionToIntersection5129<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5129<T extends unknown[], V> = [...T, V];

type TuplifyUnion5129<T, L = LastOf5129<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5129<TuplifyUnion5129<Exclude<T, L>>, L>;

type DeepPartial5129<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5129<T[P]> }
  : T;

type Paths5129<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5129<K, Paths5129<T[K], Prev5129[D]>> : never }[keyof T]
  : never;

type Prev5129 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5129<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5129 {
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

type ConfigPaths5129 = Paths5129<NestedConfig5129>;

interface HeavyProps5129 {
  config: DeepPartial5129<NestedConfig5129>;
  path?: ConfigPaths5129;
}

const HeavyComponent5129 = memo(function HeavyComponent5129({ config }: HeavyProps5129) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5129) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5129 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5129: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5129.displayName = 'HeavyComponent5129';
export default HeavyComponent5129;
