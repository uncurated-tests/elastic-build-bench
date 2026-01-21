'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5790<T> = T extends (infer U)[]
  ? DeepReadonlyArray5790<U>
  : T extends object
  ? DeepReadonlyObject5790<T>
  : T;

interface DeepReadonlyArray5790<T> extends ReadonlyArray<DeepReadonly5790<T>> {}

type DeepReadonlyObject5790<T> = {
  readonly [P in keyof T]: DeepReadonly5790<T[P]>;
};

type UnionToIntersection5790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5790<T> = UnionToIntersection5790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5790<T extends unknown[], V> = [...T, V];

type TuplifyUnion5790<T, L = LastOf5790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5790<TuplifyUnion5790<Exclude<T, L>>, L>;

type DeepPartial5790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5790<T[P]> }
  : T;

type Paths5790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5790<K, Paths5790<T[K], Prev5790[D]>> : never }[keyof T]
  : never;

type Prev5790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5790 {
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

type ConfigPaths5790 = Paths5790<NestedConfig5790>;

interface HeavyProps5790 {
  config: DeepPartial5790<NestedConfig5790>;
  path?: ConfigPaths5790;
}

const HeavyComponent5790 = memo(function HeavyComponent5790({ config }: HeavyProps5790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5790.displayName = 'HeavyComponent5790';
export default HeavyComponent5790;
