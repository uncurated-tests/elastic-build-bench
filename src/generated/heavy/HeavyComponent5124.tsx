'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5124<T> = T extends (infer U)[]
  ? DeepReadonlyArray5124<U>
  : T extends object
  ? DeepReadonlyObject5124<T>
  : T;

interface DeepReadonlyArray5124<T> extends ReadonlyArray<DeepReadonly5124<T>> {}

type DeepReadonlyObject5124<T> = {
  readonly [P in keyof T]: DeepReadonly5124<T[P]>;
};

type UnionToIntersection5124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5124<T> = UnionToIntersection5124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5124<T extends unknown[], V> = [...T, V];

type TuplifyUnion5124<T, L = LastOf5124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5124<TuplifyUnion5124<Exclude<T, L>>, L>;

type DeepPartial5124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5124<T[P]> }
  : T;

type Paths5124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5124<K, Paths5124<T[K], Prev5124[D]>> : never }[keyof T]
  : never;

type Prev5124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5124 {
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

type ConfigPaths5124 = Paths5124<NestedConfig5124>;

interface HeavyProps5124 {
  config: DeepPartial5124<NestedConfig5124>;
  path?: ConfigPaths5124;
}

const HeavyComponent5124 = memo(function HeavyComponent5124({ config }: HeavyProps5124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5124.displayName = 'HeavyComponent5124';
export default HeavyComponent5124;
