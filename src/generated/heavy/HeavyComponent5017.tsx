'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5017<T> = T extends (infer U)[]
  ? DeepReadonlyArray5017<U>
  : T extends object
  ? DeepReadonlyObject5017<T>
  : T;

interface DeepReadonlyArray5017<T> extends ReadonlyArray<DeepReadonly5017<T>> {}

type DeepReadonlyObject5017<T> = {
  readonly [P in keyof T]: DeepReadonly5017<T[P]>;
};

type UnionToIntersection5017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5017<T> = UnionToIntersection5017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5017<T extends unknown[], V> = [...T, V];

type TuplifyUnion5017<T, L = LastOf5017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5017<TuplifyUnion5017<Exclude<T, L>>, L>;

type DeepPartial5017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5017<T[P]> }
  : T;

type Paths5017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5017<K, Paths5017<T[K], Prev5017[D]>> : never }[keyof T]
  : never;

type Prev5017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5017 {
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

type ConfigPaths5017 = Paths5017<NestedConfig5017>;

interface HeavyProps5017 {
  config: DeepPartial5017<NestedConfig5017>;
  path?: ConfigPaths5017;
}

const HeavyComponent5017 = memo(function HeavyComponent5017({ config }: HeavyProps5017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5017.displayName = 'HeavyComponent5017';
export default HeavyComponent5017;
