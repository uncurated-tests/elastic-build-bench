'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3769<T> = T extends (infer U)[]
  ? DeepReadonlyArray3769<U>
  : T extends object
  ? DeepReadonlyObject3769<T>
  : T;

interface DeepReadonlyArray3769<T> extends ReadonlyArray<DeepReadonly3769<T>> {}

type DeepReadonlyObject3769<T> = {
  readonly [P in keyof T]: DeepReadonly3769<T[P]>;
};

type UnionToIntersection3769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3769<T> = UnionToIntersection3769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3769<T extends unknown[], V> = [...T, V];

type TuplifyUnion3769<T, L = LastOf3769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3769<TuplifyUnion3769<Exclude<T, L>>, L>;

type DeepPartial3769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3769<T[P]> }
  : T;

type Paths3769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3769<K, Paths3769<T[K], Prev3769[D]>> : never }[keyof T]
  : never;

type Prev3769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3769 {
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

type ConfigPaths3769 = Paths3769<NestedConfig3769>;

interface HeavyProps3769 {
  config: DeepPartial3769<NestedConfig3769>;
  path?: ConfigPaths3769;
}

const HeavyComponent3769 = memo(function HeavyComponent3769({ config }: HeavyProps3769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3769.displayName = 'HeavyComponent3769';
export default HeavyComponent3769;
