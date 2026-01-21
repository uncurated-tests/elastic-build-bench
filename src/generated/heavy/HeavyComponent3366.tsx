'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3366<T> = T extends (infer U)[]
  ? DeepReadonlyArray3366<U>
  : T extends object
  ? DeepReadonlyObject3366<T>
  : T;

interface DeepReadonlyArray3366<T> extends ReadonlyArray<DeepReadonly3366<T>> {}

type DeepReadonlyObject3366<T> = {
  readonly [P in keyof T]: DeepReadonly3366<T[P]>;
};

type UnionToIntersection3366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3366<T> = UnionToIntersection3366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3366<T extends unknown[], V> = [...T, V];

type TuplifyUnion3366<T, L = LastOf3366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3366<TuplifyUnion3366<Exclude<T, L>>, L>;

type DeepPartial3366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3366<T[P]> }
  : T;

type Paths3366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3366<K, Paths3366<T[K], Prev3366[D]>> : never }[keyof T]
  : never;

type Prev3366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3366 {
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

type ConfigPaths3366 = Paths3366<NestedConfig3366>;

interface HeavyProps3366 {
  config: DeepPartial3366<NestedConfig3366>;
  path?: ConfigPaths3366;
}

const HeavyComponent3366 = memo(function HeavyComponent3366({ config }: HeavyProps3366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3366.displayName = 'HeavyComponent3366';
export default HeavyComponent3366;
