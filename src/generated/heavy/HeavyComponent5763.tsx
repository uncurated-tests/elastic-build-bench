'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5763<T> = T extends (infer U)[]
  ? DeepReadonlyArray5763<U>
  : T extends object
  ? DeepReadonlyObject5763<T>
  : T;

interface DeepReadonlyArray5763<T> extends ReadonlyArray<DeepReadonly5763<T>> {}

type DeepReadonlyObject5763<T> = {
  readonly [P in keyof T]: DeepReadonly5763<T[P]>;
};

type UnionToIntersection5763<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5763<T> = UnionToIntersection5763<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5763<T extends unknown[], V> = [...T, V];

type TuplifyUnion5763<T, L = LastOf5763<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5763<TuplifyUnion5763<Exclude<T, L>>, L>;

type DeepPartial5763<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5763<T[P]> }
  : T;

type Paths5763<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5763<K, Paths5763<T[K], Prev5763[D]>> : never }[keyof T]
  : never;

type Prev5763 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5763<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5763 {
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

type ConfigPaths5763 = Paths5763<NestedConfig5763>;

interface HeavyProps5763 {
  config: DeepPartial5763<NestedConfig5763>;
  path?: ConfigPaths5763;
}

const HeavyComponent5763 = memo(function HeavyComponent5763({ config }: HeavyProps5763) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5763) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5763 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5763: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5763.displayName = 'HeavyComponent5763';
export default HeavyComponent5763;
