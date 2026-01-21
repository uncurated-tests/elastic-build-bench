'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3991<T> = T extends (infer U)[]
  ? DeepReadonlyArray3991<U>
  : T extends object
  ? DeepReadonlyObject3991<T>
  : T;

interface DeepReadonlyArray3991<T> extends ReadonlyArray<DeepReadonly3991<T>> {}

type DeepReadonlyObject3991<T> = {
  readonly [P in keyof T]: DeepReadonly3991<T[P]>;
};

type UnionToIntersection3991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3991<T> = UnionToIntersection3991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3991<T extends unknown[], V> = [...T, V];

type TuplifyUnion3991<T, L = LastOf3991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3991<TuplifyUnion3991<Exclude<T, L>>, L>;

type DeepPartial3991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3991<T[P]> }
  : T;

type Paths3991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3991<K, Paths3991<T[K], Prev3991[D]>> : never }[keyof T]
  : never;

type Prev3991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3991 {
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

type ConfigPaths3991 = Paths3991<NestedConfig3991>;

interface HeavyProps3991 {
  config: DeepPartial3991<NestedConfig3991>;
  path?: ConfigPaths3991;
}

const HeavyComponent3991 = memo(function HeavyComponent3991({ config }: HeavyProps3991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3991.displayName = 'HeavyComponent3991';
export default HeavyComponent3991;
