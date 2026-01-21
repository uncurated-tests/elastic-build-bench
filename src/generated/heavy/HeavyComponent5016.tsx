'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5016<T> = T extends (infer U)[]
  ? DeepReadonlyArray5016<U>
  : T extends object
  ? DeepReadonlyObject5016<T>
  : T;

interface DeepReadonlyArray5016<T> extends ReadonlyArray<DeepReadonly5016<T>> {}

type DeepReadonlyObject5016<T> = {
  readonly [P in keyof T]: DeepReadonly5016<T[P]>;
};

type UnionToIntersection5016<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5016<T> = UnionToIntersection5016<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5016<T extends unknown[], V> = [...T, V];

type TuplifyUnion5016<T, L = LastOf5016<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5016<TuplifyUnion5016<Exclude<T, L>>, L>;

type DeepPartial5016<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5016<T[P]> }
  : T;

type Paths5016<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5016<K, Paths5016<T[K], Prev5016[D]>> : never }[keyof T]
  : never;

type Prev5016 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5016<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5016 {
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

type ConfigPaths5016 = Paths5016<NestedConfig5016>;

interface HeavyProps5016 {
  config: DeepPartial5016<NestedConfig5016>;
  path?: ConfigPaths5016;
}

const HeavyComponent5016 = memo(function HeavyComponent5016({ config }: HeavyProps5016) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5016) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5016 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5016: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5016.displayName = 'HeavyComponent5016';
export default HeavyComponent5016;
