'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3865<T> = T extends (infer U)[]
  ? DeepReadonlyArray3865<U>
  : T extends object
  ? DeepReadonlyObject3865<T>
  : T;

interface DeepReadonlyArray3865<T> extends ReadonlyArray<DeepReadonly3865<T>> {}

type DeepReadonlyObject3865<T> = {
  readonly [P in keyof T]: DeepReadonly3865<T[P]>;
};

type UnionToIntersection3865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3865<T> = UnionToIntersection3865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3865<T extends unknown[], V> = [...T, V];

type TuplifyUnion3865<T, L = LastOf3865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3865<TuplifyUnion3865<Exclude<T, L>>, L>;

type DeepPartial3865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3865<T[P]> }
  : T;

type Paths3865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3865<K, Paths3865<T[K], Prev3865[D]>> : never }[keyof T]
  : never;

type Prev3865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3865 {
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

type ConfigPaths3865 = Paths3865<NestedConfig3865>;

interface HeavyProps3865 {
  config: DeepPartial3865<NestedConfig3865>;
  path?: ConfigPaths3865;
}

const HeavyComponent3865 = memo(function HeavyComponent3865({ config }: HeavyProps3865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3865.displayName = 'HeavyComponent3865';
export default HeavyComponent3865;
