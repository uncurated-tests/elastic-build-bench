'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3173<T> = T extends (infer U)[]
  ? DeepReadonlyArray3173<U>
  : T extends object
  ? DeepReadonlyObject3173<T>
  : T;

interface DeepReadonlyArray3173<T> extends ReadonlyArray<DeepReadonly3173<T>> {}

type DeepReadonlyObject3173<T> = {
  readonly [P in keyof T]: DeepReadonly3173<T[P]>;
};

type UnionToIntersection3173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3173<T> = UnionToIntersection3173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3173<T extends unknown[], V> = [...T, V];

type TuplifyUnion3173<T, L = LastOf3173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3173<TuplifyUnion3173<Exclude<T, L>>, L>;

type DeepPartial3173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3173<T[P]> }
  : T;

type Paths3173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3173<K, Paths3173<T[K], Prev3173[D]>> : never }[keyof T]
  : never;

type Prev3173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3173 {
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

type ConfigPaths3173 = Paths3173<NestedConfig3173>;

interface HeavyProps3173 {
  config: DeepPartial3173<NestedConfig3173>;
  path?: ConfigPaths3173;
}

const HeavyComponent3173 = memo(function HeavyComponent3173({ config }: HeavyProps3173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3173.displayName = 'HeavyComponent3173';
export default HeavyComponent3173;
