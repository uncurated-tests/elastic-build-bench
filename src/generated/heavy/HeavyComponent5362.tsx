'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5362<T> = T extends (infer U)[]
  ? DeepReadonlyArray5362<U>
  : T extends object
  ? DeepReadonlyObject5362<T>
  : T;

interface DeepReadonlyArray5362<T> extends ReadonlyArray<DeepReadonly5362<T>> {}

type DeepReadonlyObject5362<T> = {
  readonly [P in keyof T]: DeepReadonly5362<T[P]>;
};

type UnionToIntersection5362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5362<T> = UnionToIntersection5362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5362<T extends unknown[], V> = [...T, V];

type TuplifyUnion5362<T, L = LastOf5362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5362<TuplifyUnion5362<Exclude<T, L>>, L>;

type DeepPartial5362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5362<T[P]> }
  : T;

type Paths5362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5362<K, Paths5362<T[K], Prev5362[D]>> : never }[keyof T]
  : never;

type Prev5362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5362 {
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

type ConfigPaths5362 = Paths5362<NestedConfig5362>;

interface HeavyProps5362 {
  config: DeepPartial5362<NestedConfig5362>;
  path?: ConfigPaths5362;
}

const HeavyComponent5362 = memo(function HeavyComponent5362({ config }: HeavyProps5362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5362.displayName = 'HeavyComponent5362';
export default HeavyComponent5362;
