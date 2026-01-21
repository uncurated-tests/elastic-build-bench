'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5717<T> = T extends (infer U)[]
  ? DeepReadonlyArray5717<U>
  : T extends object
  ? DeepReadonlyObject5717<T>
  : T;

interface DeepReadonlyArray5717<T> extends ReadonlyArray<DeepReadonly5717<T>> {}

type DeepReadonlyObject5717<T> = {
  readonly [P in keyof T]: DeepReadonly5717<T[P]>;
};

type UnionToIntersection5717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5717<T> = UnionToIntersection5717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5717<T extends unknown[], V> = [...T, V];

type TuplifyUnion5717<T, L = LastOf5717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5717<TuplifyUnion5717<Exclude<T, L>>, L>;

type DeepPartial5717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5717<T[P]> }
  : T;

type Paths5717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5717<K, Paths5717<T[K], Prev5717[D]>> : never }[keyof T]
  : never;

type Prev5717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5717 {
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

type ConfigPaths5717 = Paths5717<NestedConfig5717>;

interface HeavyProps5717 {
  config: DeepPartial5717<NestedConfig5717>;
  path?: ConfigPaths5717;
}

const HeavyComponent5717 = memo(function HeavyComponent5717({ config }: HeavyProps5717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5717.displayName = 'HeavyComponent5717';
export default HeavyComponent5717;
