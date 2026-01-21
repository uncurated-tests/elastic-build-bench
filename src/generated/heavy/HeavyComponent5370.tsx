'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5370<T> = T extends (infer U)[]
  ? DeepReadonlyArray5370<U>
  : T extends object
  ? DeepReadonlyObject5370<T>
  : T;

interface DeepReadonlyArray5370<T> extends ReadonlyArray<DeepReadonly5370<T>> {}

type DeepReadonlyObject5370<T> = {
  readonly [P in keyof T]: DeepReadonly5370<T[P]>;
};

type UnionToIntersection5370<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5370<T> = UnionToIntersection5370<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5370<T extends unknown[], V> = [...T, V];

type TuplifyUnion5370<T, L = LastOf5370<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5370<TuplifyUnion5370<Exclude<T, L>>, L>;

type DeepPartial5370<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5370<T[P]> }
  : T;

type Paths5370<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5370<K, Paths5370<T[K], Prev5370[D]>> : never }[keyof T]
  : never;

type Prev5370 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5370<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5370 {
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

type ConfigPaths5370 = Paths5370<NestedConfig5370>;

interface HeavyProps5370 {
  config: DeepPartial5370<NestedConfig5370>;
  path?: ConfigPaths5370;
}

const HeavyComponent5370 = memo(function HeavyComponent5370({ config }: HeavyProps5370) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5370) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5370 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5370: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5370.displayName = 'HeavyComponent5370';
export default HeavyComponent5370;
