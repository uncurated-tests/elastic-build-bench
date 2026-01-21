'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3548<T> = T extends (infer U)[]
  ? DeepReadonlyArray3548<U>
  : T extends object
  ? DeepReadonlyObject3548<T>
  : T;

interface DeepReadonlyArray3548<T> extends ReadonlyArray<DeepReadonly3548<T>> {}

type DeepReadonlyObject3548<T> = {
  readonly [P in keyof T]: DeepReadonly3548<T[P]>;
};

type UnionToIntersection3548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3548<T> = UnionToIntersection3548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3548<T extends unknown[], V> = [...T, V];

type TuplifyUnion3548<T, L = LastOf3548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3548<TuplifyUnion3548<Exclude<T, L>>, L>;

type DeepPartial3548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3548<T[P]> }
  : T;

type Paths3548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3548<K, Paths3548<T[K], Prev3548[D]>> : never }[keyof T]
  : never;

type Prev3548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3548 {
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

type ConfigPaths3548 = Paths3548<NestedConfig3548>;

interface HeavyProps3548 {
  config: DeepPartial3548<NestedConfig3548>;
  path?: ConfigPaths3548;
}

const HeavyComponent3548 = memo(function HeavyComponent3548({ config }: HeavyProps3548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3548.displayName = 'HeavyComponent3548';
export default HeavyComponent3548;
