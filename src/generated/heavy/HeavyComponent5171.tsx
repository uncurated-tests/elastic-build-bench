'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5171<T> = T extends (infer U)[]
  ? DeepReadonlyArray5171<U>
  : T extends object
  ? DeepReadonlyObject5171<T>
  : T;

interface DeepReadonlyArray5171<T> extends ReadonlyArray<DeepReadonly5171<T>> {}

type DeepReadonlyObject5171<T> = {
  readonly [P in keyof T]: DeepReadonly5171<T[P]>;
};

type UnionToIntersection5171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5171<T> = UnionToIntersection5171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5171<T extends unknown[], V> = [...T, V];

type TuplifyUnion5171<T, L = LastOf5171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5171<TuplifyUnion5171<Exclude<T, L>>, L>;

type DeepPartial5171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5171<T[P]> }
  : T;

type Paths5171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5171<K, Paths5171<T[K], Prev5171[D]>> : never }[keyof T]
  : never;

type Prev5171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5171 {
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

type ConfigPaths5171 = Paths5171<NestedConfig5171>;

interface HeavyProps5171 {
  config: DeepPartial5171<NestedConfig5171>;
  path?: ConfigPaths5171;
}

const HeavyComponent5171 = memo(function HeavyComponent5171({ config }: HeavyProps5171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5171.displayName = 'HeavyComponent5171';
export default HeavyComponent5171;
