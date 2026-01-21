'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5290<T> = T extends (infer U)[]
  ? DeepReadonlyArray5290<U>
  : T extends object
  ? DeepReadonlyObject5290<T>
  : T;

interface DeepReadonlyArray5290<T> extends ReadonlyArray<DeepReadonly5290<T>> {}

type DeepReadonlyObject5290<T> = {
  readonly [P in keyof T]: DeepReadonly5290<T[P]>;
};

type UnionToIntersection5290<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5290<T> = UnionToIntersection5290<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5290<T extends unknown[], V> = [...T, V];

type TuplifyUnion5290<T, L = LastOf5290<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5290<TuplifyUnion5290<Exclude<T, L>>, L>;

type DeepPartial5290<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5290<T[P]> }
  : T;

type Paths5290<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5290<K, Paths5290<T[K], Prev5290[D]>> : never }[keyof T]
  : never;

type Prev5290 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5290<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5290 {
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

type ConfigPaths5290 = Paths5290<NestedConfig5290>;

interface HeavyProps5290 {
  config: DeepPartial5290<NestedConfig5290>;
  path?: ConfigPaths5290;
}

const HeavyComponent5290 = memo(function HeavyComponent5290({ config }: HeavyProps5290) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5290) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5290 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5290: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5290.displayName = 'HeavyComponent5290';
export default HeavyComponent5290;
