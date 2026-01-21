'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5108<T> = T extends (infer U)[]
  ? DeepReadonlyArray5108<U>
  : T extends object
  ? DeepReadonlyObject5108<T>
  : T;

interface DeepReadonlyArray5108<T> extends ReadonlyArray<DeepReadonly5108<T>> {}

type DeepReadonlyObject5108<T> = {
  readonly [P in keyof T]: DeepReadonly5108<T[P]>;
};

type UnionToIntersection5108<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5108<T> = UnionToIntersection5108<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5108<T extends unknown[], V> = [...T, V];

type TuplifyUnion5108<T, L = LastOf5108<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5108<TuplifyUnion5108<Exclude<T, L>>, L>;

type DeepPartial5108<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5108<T[P]> }
  : T;

type Paths5108<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5108<K, Paths5108<T[K], Prev5108[D]>> : never }[keyof T]
  : never;

type Prev5108 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5108<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5108 {
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

type ConfigPaths5108 = Paths5108<NestedConfig5108>;

interface HeavyProps5108 {
  config: DeepPartial5108<NestedConfig5108>;
  path?: ConfigPaths5108;
}

const HeavyComponent5108 = memo(function HeavyComponent5108({ config }: HeavyProps5108) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5108) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5108 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5108: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5108.displayName = 'HeavyComponent5108';
export default HeavyComponent5108;
