'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5205<T> = T extends (infer U)[]
  ? DeepReadonlyArray5205<U>
  : T extends object
  ? DeepReadonlyObject5205<T>
  : T;

interface DeepReadonlyArray5205<T> extends ReadonlyArray<DeepReadonly5205<T>> {}

type DeepReadonlyObject5205<T> = {
  readonly [P in keyof T]: DeepReadonly5205<T[P]>;
};

type UnionToIntersection5205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5205<T> = UnionToIntersection5205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5205<T extends unknown[], V> = [...T, V];

type TuplifyUnion5205<T, L = LastOf5205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5205<TuplifyUnion5205<Exclude<T, L>>, L>;

type DeepPartial5205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5205<T[P]> }
  : T;

type Paths5205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5205<K, Paths5205<T[K], Prev5205[D]>> : never }[keyof T]
  : never;

type Prev5205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5205 {
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

type ConfigPaths5205 = Paths5205<NestedConfig5205>;

interface HeavyProps5205 {
  config: DeepPartial5205<NestedConfig5205>;
  path?: ConfigPaths5205;
}

const HeavyComponent5205 = memo(function HeavyComponent5205({ config }: HeavyProps5205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5205.displayName = 'HeavyComponent5205';
export default HeavyComponent5205;
