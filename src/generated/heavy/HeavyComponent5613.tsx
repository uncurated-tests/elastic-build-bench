'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5613<T> = T extends (infer U)[]
  ? DeepReadonlyArray5613<U>
  : T extends object
  ? DeepReadonlyObject5613<T>
  : T;

interface DeepReadonlyArray5613<T> extends ReadonlyArray<DeepReadonly5613<T>> {}

type DeepReadonlyObject5613<T> = {
  readonly [P in keyof T]: DeepReadonly5613<T[P]>;
};

type UnionToIntersection5613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5613<T> = UnionToIntersection5613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5613<T extends unknown[], V> = [...T, V];

type TuplifyUnion5613<T, L = LastOf5613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5613<TuplifyUnion5613<Exclude<T, L>>, L>;

type DeepPartial5613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5613<T[P]> }
  : T;

type Paths5613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5613<K, Paths5613<T[K], Prev5613[D]>> : never }[keyof T]
  : never;

type Prev5613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5613 {
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

type ConfigPaths5613 = Paths5613<NestedConfig5613>;

interface HeavyProps5613 {
  config: DeepPartial5613<NestedConfig5613>;
  path?: ConfigPaths5613;
}

const HeavyComponent5613 = memo(function HeavyComponent5613({ config }: HeavyProps5613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5613.displayName = 'HeavyComponent5613';
export default HeavyComponent5613;
