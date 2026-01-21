'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3020<T> = T extends (infer U)[]
  ? DeepReadonlyArray3020<U>
  : T extends object
  ? DeepReadonlyObject3020<T>
  : T;

interface DeepReadonlyArray3020<T> extends ReadonlyArray<DeepReadonly3020<T>> {}

type DeepReadonlyObject3020<T> = {
  readonly [P in keyof T]: DeepReadonly3020<T[P]>;
};

type UnionToIntersection3020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3020<T> = UnionToIntersection3020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3020<T extends unknown[], V> = [...T, V];

type TuplifyUnion3020<T, L = LastOf3020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3020<TuplifyUnion3020<Exclude<T, L>>, L>;

type DeepPartial3020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3020<T[P]> }
  : T;

type Paths3020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3020<K, Paths3020<T[K], Prev3020[D]>> : never }[keyof T]
  : never;

type Prev3020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3020 {
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

type ConfigPaths3020 = Paths3020<NestedConfig3020>;

interface HeavyProps3020 {
  config: DeepPartial3020<NestedConfig3020>;
  path?: ConfigPaths3020;
}

const HeavyComponent3020 = memo(function HeavyComponent3020({ config }: HeavyProps3020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3020.displayName = 'HeavyComponent3020';
export default HeavyComponent3020;
