'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3820<T> = T extends (infer U)[]
  ? DeepReadonlyArray3820<U>
  : T extends object
  ? DeepReadonlyObject3820<T>
  : T;

interface DeepReadonlyArray3820<T> extends ReadonlyArray<DeepReadonly3820<T>> {}

type DeepReadonlyObject3820<T> = {
  readonly [P in keyof T]: DeepReadonly3820<T[P]>;
};

type UnionToIntersection3820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3820<T> = UnionToIntersection3820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3820<T extends unknown[], V> = [...T, V];

type TuplifyUnion3820<T, L = LastOf3820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3820<TuplifyUnion3820<Exclude<T, L>>, L>;

type DeepPartial3820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3820<T[P]> }
  : T;

type Paths3820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3820<K, Paths3820<T[K], Prev3820[D]>> : never }[keyof T]
  : never;

type Prev3820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3820 {
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

type ConfigPaths3820 = Paths3820<NestedConfig3820>;

interface HeavyProps3820 {
  config: DeepPartial3820<NestedConfig3820>;
  path?: ConfigPaths3820;
}

const HeavyComponent3820 = memo(function HeavyComponent3820({ config }: HeavyProps3820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3820.displayName = 'HeavyComponent3820';
export default HeavyComponent3820;
