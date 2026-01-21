'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5697<T> = T extends (infer U)[]
  ? DeepReadonlyArray5697<U>
  : T extends object
  ? DeepReadonlyObject5697<T>
  : T;

interface DeepReadonlyArray5697<T> extends ReadonlyArray<DeepReadonly5697<T>> {}

type DeepReadonlyObject5697<T> = {
  readonly [P in keyof T]: DeepReadonly5697<T[P]>;
};

type UnionToIntersection5697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5697<T> = UnionToIntersection5697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5697<T extends unknown[], V> = [...T, V];

type TuplifyUnion5697<T, L = LastOf5697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5697<TuplifyUnion5697<Exclude<T, L>>, L>;

type DeepPartial5697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5697<T[P]> }
  : T;

type Paths5697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5697<K, Paths5697<T[K], Prev5697[D]>> : never }[keyof T]
  : never;

type Prev5697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5697 {
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

type ConfigPaths5697 = Paths5697<NestedConfig5697>;

interface HeavyProps5697 {
  config: DeepPartial5697<NestedConfig5697>;
  path?: ConfigPaths5697;
}

const HeavyComponent5697 = memo(function HeavyComponent5697({ config }: HeavyProps5697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5697.displayName = 'HeavyComponent5697';
export default HeavyComponent5697;
