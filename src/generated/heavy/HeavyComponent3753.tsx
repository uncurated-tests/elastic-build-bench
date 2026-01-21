'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3753<T> = T extends (infer U)[]
  ? DeepReadonlyArray3753<U>
  : T extends object
  ? DeepReadonlyObject3753<T>
  : T;

interface DeepReadonlyArray3753<T> extends ReadonlyArray<DeepReadonly3753<T>> {}

type DeepReadonlyObject3753<T> = {
  readonly [P in keyof T]: DeepReadonly3753<T[P]>;
};

type UnionToIntersection3753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3753<T> = UnionToIntersection3753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3753<T extends unknown[], V> = [...T, V];

type TuplifyUnion3753<T, L = LastOf3753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3753<TuplifyUnion3753<Exclude<T, L>>, L>;

type DeepPartial3753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3753<T[P]> }
  : T;

type Paths3753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3753<K, Paths3753<T[K], Prev3753[D]>> : never }[keyof T]
  : never;

type Prev3753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3753 {
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

type ConfigPaths3753 = Paths3753<NestedConfig3753>;

interface HeavyProps3753 {
  config: DeepPartial3753<NestedConfig3753>;
  path?: ConfigPaths3753;
}

const HeavyComponent3753 = memo(function HeavyComponent3753({ config }: HeavyProps3753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3753.displayName = 'HeavyComponent3753';
export default HeavyComponent3753;
