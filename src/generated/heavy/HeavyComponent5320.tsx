'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5320<T> = T extends (infer U)[]
  ? DeepReadonlyArray5320<U>
  : T extends object
  ? DeepReadonlyObject5320<T>
  : T;

interface DeepReadonlyArray5320<T> extends ReadonlyArray<DeepReadonly5320<T>> {}

type DeepReadonlyObject5320<T> = {
  readonly [P in keyof T]: DeepReadonly5320<T[P]>;
};

type UnionToIntersection5320<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5320<T> = UnionToIntersection5320<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5320<T extends unknown[], V> = [...T, V];

type TuplifyUnion5320<T, L = LastOf5320<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5320<TuplifyUnion5320<Exclude<T, L>>, L>;

type DeepPartial5320<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5320<T[P]> }
  : T;

type Paths5320<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5320<K, Paths5320<T[K], Prev5320[D]>> : never }[keyof T]
  : never;

type Prev5320 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5320<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5320 {
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

type ConfigPaths5320 = Paths5320<NestedConfig5320>;

interface HeavyProps5320 {
  config: DeepPartial5320<NestedConfig5320>;
  path?: ConfigPaths5320;
}

const HeavyComponent5320 = memo(function HeavyComponent5320({ config }: HeavyProps5320) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5320) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5320 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5320: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5320.displayName = 'HeavyComponent5320';
export default HeavyComponent5320;
