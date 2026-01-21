'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5530<T> = T extends (infer U)[]
  ? DeepReadonlyArray5530<U>
  : T extends object
  ? DeepReadonlyObject5530<T>
  : T;

interface DeepReadonlyArray5530<T> extends ReadonlyArray<DeepReadonly5530<T>> {}

type DeepReadonlyObject5530<T> = {
  readonly [P in keyof T]: DeepReadonly5530<T[P]>;
};

type UnionToIntersection5530<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5530<T> = UnionToIntersection5530<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5530<T extends unknown[], V> = [...T, V];

type TuplifyUnion5530<T, L = LastOf5530<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5530<TuplifyUnion5530<Exclude<T, L>>, L>;

type DeepPartial5530<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5530<T[P]> }
  : T;

type Paths5530<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5530<K, Paths5530<T[K], Prev5530[D]>> : never }[keyof T]
  : never;

type Prev5530 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5530<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5530 {
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

type ConfigPaths5530 = Paths5530<NestedConfig5530>;

interface HeavyProps5530 {
  config: DeepPartial5530<NestedConfig5530>;
  path?: ConfigPaths5530;
}

const HeavyComponent5530 = memo(function HeavyComponent5530({ config }: HeavyProps5530) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5530) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5530 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5530: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5530.displayName = 'HeavyComponent5530';
export default HeavyComponent5530;
