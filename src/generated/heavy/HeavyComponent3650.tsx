'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3650<T> = T extends (infer U)[]
  ? DeepReadonlyArray3650<U>
  : T extends object
  ? DeepReadonlyObject3650<T>
  : T;

interface DeepReadonlyArray3650<T> extends ReadonlyArray<DeepReadonly3650<T>> {}

type DeepReadonlyObject3650<T> = {
  readonly [P in keyof T]: DeepReadonly3650<T[P]>;
};

type UnionToIntersection3650<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3650<T> = UnionToIntersection3650<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3650<T extends unknown[], V> = [...T, V];

type TuplifyUnion3650<T, L = LastOf3650<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3650<TuplifyUnion3650<Exclude<T, L>>, L>;

type DeepPartial3650<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3650<T[P]> }
  : T;

type Paths3650<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3650<K, Paths3650<T[K], Prev3650[D]>> : never }[keyof T]
  : never;

type Prev3650 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3650<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3650 {
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

type ConfigPaths3650 = Paths3650<NestedConfig3650>;

interface HeavyProps3650 {
  config: DeepPartial3650<NestedConfig3650>;
  path?: ConfigPaths3650;
}

const HeavyComponent3650 = memo(function HeavyComponent3650({ config }: HeavyProps3650) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3650) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3650 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3650: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3650.displayName = 'HeavyComponent3650';
export default HeavyComponent3650;
