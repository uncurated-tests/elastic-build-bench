'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5388<T> = T extends (infer U)[]
  ? DeepReadonlyArray5388<U>
  : T extends object
  ? DeepReadonlyObject5388<T>
  : T;

interface DeepReadonlyArray5388<T> extends ReadonlyArray<DeepReadonly5388<T>> {}

type DeepReadonlyObject5388<T> = {
  readonly [P in keyof T]: DeepReadonly5388<T[P]>;
};

type UnionToIntersection5388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5388<T> = UnionToIntersection5388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5388<T extends unknown[], V> = [...T, V];

type TuplifyUnion5388<T, L = LastOf5388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5388<TuplifyUnion5388<Exclude<T, L>>, L>;

type DeepPartial5388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5388<T[P]> }
  : T;

type Paths5388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5388<K, Paths5388<T[K], Prev5388[D]>> : never }[keyof T]
  : never;

type Prev5388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5388 {
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

type ConfigPaths5388 = Paths5388<NestedConfig5388>;

interface HeavyProps5388 {
  config: DeepPartial5388<NestedConfig5388>;
  path?: ConfigPaths5388;
}

const HeavyComponent5388 = memo(function HeavyComponent5388({ config }: HeavyProps5388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5388.displayName = 'HeavyComponent5388';
export default HeavyComponent5388;
