'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3581<T> = T extends (infer U)[]
  ? DeepReadonlyArray3581<U>
  : T extends object
  ? DeepReadonlyObject3581<T>
  : T;

interface DeepReadonlyArray3581<T> extends ReadonlyArray<DeepReadonly3581<T>> {}

type DeepReadonlyObject3581<T> = {
  readonly [P in keyof T]: DeepReadonly3581<T[P]>;
};

type UnionToIntersection3581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3581<T> = UnionToIntersection3581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3581<T extends unknown[], V> = [...T, V];

type TuplifyUnion3581<T, L = LastOf3581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3581<TuplifyUnion3581<Exclude<T, L>>, L>;

type DeepPartial3581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3581<T[P]> }
  : T;

type Paths3581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3581<K, Paths3581<T[K], Prev3581[D]>> : never }[keyof T]
  : never;

type Prev3581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3581 {
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

type ConfigPaths3581 = Paths3581<NestedConfig3581>;

interface HeavyProps3581 {
  config: DeepPartial3581<NestedConfig3581>;
  path?: ConfigPaths3581;
}

const HeavyComponent3581 = memo(function HeavyComponent3581({ config }: HeavyProps3581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3581.displayName = 'HeavyComponent3581';
export default HeavyComponent3581;
