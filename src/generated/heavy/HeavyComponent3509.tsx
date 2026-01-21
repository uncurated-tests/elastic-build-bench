'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3509<T> = T extends (infer U)[]
  ? DeepReadonlyArray3509<U>
  : T extends object
  ? DeepReadonlyObject3509<T>
  : T;

interface DeepReadonlyArray3509<T> extends ReadonlyArray<DeepReadonly3509<T>> {}

type DeepReadonlyObject3509<T> = {
  readonly [P in keyof T]: DeepReadonly3509<T[P]>;
};

type UnionToIntersection3509<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3509<T> = UnionToIntersection3509<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3509<T extends unknown[], V> = [...T, V];

type TuplifyUnion3509<T, L = LastOf3509<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3509<TuplifyUnion3509<Exclude<T, L>>, L>;

type DeepPartial3509<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3509<T[P]> }
  : T;

type Paths3509<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3509<K, Paths3509<T[K], Prev3509[D]>> : never }[keyof T]
  : never;

type Prev3509 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3509<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3509 {
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

type ConfigPaths3509 = Paths3509<NestedConfig3509>;

interface HeavyProps3509 {
  config: DeepPartial3509<NestedConfig3509>;
  path?: ConfigPaths3509;
}

const HeavyComponent3509 = memo(function HeavyComponent3509({ config }: HeavyProps3509) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3509) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3509 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3509: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3509.displayName = 'HeavyComponent3509';
export default HeavyComponent3509;
