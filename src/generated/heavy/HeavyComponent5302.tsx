'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5302<T> = T extends (infer U)[]
  ? DeepReadonlyArray5302<U>
  : T extends object
  ? DeepReadonlyObject5302<T>
  : T;

interface DeepReadonlyArray5302<T> extends ReadonlyArray<DeepReadonly5302<T>> {}

type DeepReadonlyObject5302<T> = {
  readonly [P in keyof T]: DeepReadonly5302<T[P]>;
};

type UnionToIntersection5302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5302<T> = UnionToIntersection5302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5302<T extends unknown[], V> = [...T, V];

type TuplifyUnion5302<T, L = LastOf5302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5302<TuplifyUnion5302<Exclude<T, L>>, L>;

type DeepPartial5302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5302<T[P]> }
  : T;

type Paths5302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5302<K, Paths5302<T[K], Prev5302[D]>> : never }[keyof T]
  : never;

type Prev5302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5302 {
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

type ConfigPaths5302 = Paths5302<NestedConfig5302>;

interface HeavyProps5302 {
  config: DeepPartial5302<NestedConfig5302>;
  path?: ConfigPaths5302;
}

const HeavyComponent5302 = memo(function HeavyComponent5302({ config }: HeavyProps5302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5302.displayName = 'HeavyComponent5302';
export default HeavyComponent5302;
