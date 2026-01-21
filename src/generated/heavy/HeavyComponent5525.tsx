'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5525<T> = T extends (infer U)[]
  ? DeepReadonlyArray5525<U>
  : T extends object
  ? DeepReadonlyObject5525<T>
  : T;

interface DeepReadonlyArray5525<T> extends ReadonlyArray<DeepReadonly5525<T>> {}

type DeepReadonlyObject5525<T> = {
  readonly [P in keyof T]: DeepReadonly5525<T[P]>;
};

type UnionToIntersection5525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5525<T> = UnionToIntersection5525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5525<T extends unknown[], V> = [...T, V];

type TuplifyUnion5525<T, L = LastOf5525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5525<TuplifyUnion5525<Exclude<T, L>>, L>;

type DeepPartial5525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5525<T[P]> }
  : T;

type Paths5525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5525<K, Paths5525<T[K], Prev5525[D]>> : never }[keyof T]
  : never;

type Prev5525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5525 {
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

type ConfigPaths5525 = Paths5525<NestedConfig5525>;

interface HeavyProps5525 {
  config: DeepPartial5525<NestedConfig5525>;
  path?: ConfigPaths5525;
}

const HeavyComponent5525 = memo(function HeavyComponent5525({ config }: HeavyProps5525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5525.displayName = 'HeavyComponent5525';
export default HeavyComponent5525;
