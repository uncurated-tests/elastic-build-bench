'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly650<T> = T extends (infer U)[]
  ? DeepReadonlyArray650<U>
  : T extends object
  ? DeepReadonlyObject650<T>
  : T;

interface DeepReadonlyArray650<T> extends ReadonlyArray<DeepReadonly650<T>> {}

type DeepReadonlyObject650<T> = {
  readonly [P in keyof T]: DeepReadonly650<T[P]>;
};

type UnionToIntersection650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf650<T> = UnionToIntersection650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push650<T extends unknown[], V> = [...T, V];

type TuplifyUnion650<T, L = LastOf650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push650<TuplifyUnion650<Exclude<T, L>>, L>;

type DeepPartial650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial650<T[P]> }
  : T;

type Paths650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join650<K, Paths650<T[K], Prev650[D]>> : never }[keyof T]
  : never;

type Prev650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig650 {
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

type ConfigPaths650 = Paths650<NestedConfig650>;

interface HeavyProps650 {
  config: DeepPartial650<NestedConfig650>;
  path?: ConfigPaths650;
}

const HeavyComponent650 = memo(function HeavyComponent650({ config }: HeavyProps650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent650.displayName = 'HeavyComponent650';
export default HeavyComponent650;
