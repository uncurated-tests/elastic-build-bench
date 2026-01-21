'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3761<T> = T extends (infer U)[]
  ? DeepReadonlyArray3761<U>
  : T extends object
  ? DeepReadonlyObject3761<T>
  : T;

interface DeepReadonlyArray3761<T> extends ReadonlyArray<DeepReadonly3761<T>> {}

type DeepReadonlyObject3761<T> = {
  readonly [P in keyof T]: DeepReadonly3761<T[P]>;
};

type UnionToIntersection3761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3761<T> = UnionToIntersection3761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3761<T extends unknown[], V> = [...T, V];

type TuplifyUnion3761<T, L = LastOf3761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3761<TuplifyUnion3761<Exclude<T, L>>, L>;

type DeepPartial3761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3761<T[P]> }
  : T;

type Paths3761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3761<K, Paths3761<T[K], Prev3761[D]>> : never }[keyof T]
  : never;

type Prev3761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3761 {
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

type ConfigPaths3761 = Paths3761<NestedConfig3761>;

interface HeavyProps3761 {
  config: DeepPartial3761<NestedConfig3761>;
  path?: ConfigPaths3761;
}

const HeavyComponent3761 = memo(function HeavyComponent3761({ config }: HeavyProps3761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3761.displayName = 'HeavyComponent3761';
export default HeavyComponent3761;
