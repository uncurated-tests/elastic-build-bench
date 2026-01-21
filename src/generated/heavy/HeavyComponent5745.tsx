'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5745<T> = T extends (infer U)[]
  ? DeepReadonlyArray5745<U>
  : T extends object
  ? DeepReadonlyObject5745<T>
  : T;

interface DeepReadonlyArray5745<T> extends ReadonlyArray<DeepReadonly5745<T>> {}

type DeepReadonlyObject5745<T> = {
  readonly [P in keyof T]: DeepReadonly5745<T[P]>;
};

type UnionToIntersection5745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5745<T> = UnionToIntersection5745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5745<T extends unknown[], V> = [...T, V];

type TuplifyUnion5745<T, L = LastOf5745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5745<TuplifyUnion5745<Exclude<T, L>>, L>;

type DeepPartial5745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5745<T[P]> }
  : T;

type Paths5745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5745<K, Paths5745<T[K], Prev5745[D]>> : never }[keyof T]
  : never;

type Prev5745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5745 {
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

type ConfigPaths5745 = Paths5745<NestedConfig5745>;

interface HeavyProps5745 {
  config: DeepPartial5745<NestedConfig5745>;
  path?: ConfigPaths5745;
}

const HeavyComponent5745 = memo(function HeavyComponent5745({ config }: HeavyProps5745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5745.displayName = 'HeavyComponent5745';
export default HeavyComponent5745;
