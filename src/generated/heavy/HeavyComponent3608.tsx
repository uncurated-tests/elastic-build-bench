'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3608<T> = T extends (infer U)[]
  ? DeepReadonlyArray3608<U>
  : T extends object
  ? DeepReadonlyObject3608<T>
  : T;

interface DeepReadonlyArray3608<T> extends ReadonlyArray<DeepReadonly3608<T>> {}

type DeepReadonlyObject3608<T> = {
  readonly [P in keyof T]: DeepReadonly3608<T[P]>;
};

type UnionToIntersection3608<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3608<T> = UnionToIntersection3608<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3608<T extends unknown[], V> = [...T, V];

type TuplifyUnion3608<T, L = LastOf3608<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3608<TuplifyUnion3608<Exclude<T, L>>, L>;

type DeepPartial3608<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3608<T[P]> }
  : T;

type Paths3608<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3608<K, Paths3608<T[K], Prev3608[D]>> : never }[keyof T]
  : never;

type Prev3608 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3608<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3608 {
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

type ConfigPaths3608 = Paths3608<NestedConfig3608>;

interface HeavyProps3608 {
  config: DeepPartial3608<NestedConfig3608>;
  path?: ConfigPaths3608;
}

const HeavyComponent3608 = memo(function HeavyComponent3608({ config }: HeavyProps3608) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3608) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3608 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3608: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3608.displayName = 'HeavyComponent3608';
export default HeavyComponent3608;
