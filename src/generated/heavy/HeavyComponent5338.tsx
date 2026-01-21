'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5338<T> = T extends (infer U)[]
  ? DeepReadonlyArray5338<U>
  : T extends object
  ? DeepReadonlyObject5338<T>
  : T;

interface DeepReadonlyArray5338<T> extends ReadonlyArray<DeepReadonly5338<T>> {}

type DeepReadonlyObject5338<T> = {
  readonly [P in keyof T]: DeepReadonly5338<T[P]>;
};

type UnionToIntersection5338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5338<T> = UnionToIntersection5338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5338<T extends unknown[], V> = [...T, V];

type TuplifyUnion5338<T, L = LastOf5338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5338<TuplifyUnion5338<Exclude<T, L>>, L>;

type DeepPartial5338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5338<T[P]> }
  : T;

type Paths5338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5338<K, Paths5338<T[K], Prev5338[D]>> : never }[keyof T]
  : never;

type Prev5338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5338 {
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

type ConfigPaths5338 = Paths5338<NestedConfig5338>;

interface HeavyProps5338 {
  config: DeepPartial5338<NestedConfig5338>;
  path?: ConfigPaths5338;
}

const HeavyComponent5338 = memo(function HeavyComponent5338({ config }: HeavyProps5338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5338.displayName = 'HeavyComponent5338';
export default HeavyComponent5338;
