'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5451<T> = T extends (infer U)[]
  ? DeepReadonlyArray5451<U>
  : T extends object
  ? DeepReadonlyObject5451<T>
  : T;

interface DeepReadonlyArray5451<T> extends ReadonlyArray<DeepReadonly5451<T>> {}

type DeepReadonlyObject5451<T> = {
  readonly [P in keyof T]: DeepReadonly5451<T[P]>;
};

type UnionToIntersection5451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5451<T> = UnionToIntersection5451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5451<T extends unknown[], V> = [...T, V];

type TuplifyUnion5451<T, L = LastOf5451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5451<TuplifyUnion5451<Exclude<T, L>>, L>;

type DeepPartial5451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5451<T[P]> }
  : T;

type Paths5451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5451<K, Paths5451<T[K], Prev5451[D]>> : never }[keyof T]
  : never;

type Prev5451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5451 {
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

type ConfigPaths5451 = Paths5451<NestedConfig5451>;

interface HeavyProps5451 {
  config: DeepPartial5451<NestedConfig5451>;
  path?: ConfigPaths5451;
}

const HeavyComponent5451 = memo(function HeavyComponent5451({ config }: HeavyProps5451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5451.displayName = 'HeavyComponent5451';
export default HeavyComponent5451;
