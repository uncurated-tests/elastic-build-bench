'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5845<T> = T extends (infer U)[]
  ? DeepReadonlyArray5845<U>
  : T extends object
  ? DeepReadonlyObject5845<T>
  : T;

interface DeepReadonlyArray5845<T> extends ReadonlyArray<DeepReadonly5845<T>> {}

type DeepReadonlyObject5845<T> = {
  readonly [P in keyof T]: DeepReadonly5845<T[P]>;
};

type UnionToIntersection5845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5845<T> = UnionToIntersection5845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5845<T extends unknown[], V> = [...T, V];

type TuplifyUnion5845<T, L = LastOf5845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5845<TuplifyUnion5845<Exclude<T, L>>, L>;

type DeepPartial5845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5845<T[P]> }
  : T;

type Paths5845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5845<K, Paths5845<T[K], Prev5845[D]>> : never }[keyof T]
  : never;

type Prev5845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5845 {
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

type ConfigPaths5845 = Paths5845<NestedConfig5845>;

interface HeavyProps5845 {
  config: DeepPartial5845<NestedConfig5845>;
  path?: ConfigPaths5845;
}

const HeavyComponent5845 = memo(function HeavyComponent5845({ config }: HeavyProps5845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5845.displayName = 'HeavyComponent5845';
export default HeavyComponent5845;
