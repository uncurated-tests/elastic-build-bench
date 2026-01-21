'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3697<T> = T extends (infer U)[]
  ? DeepReadonlyArray3697<U>
  : T extends object
  ? DeepReadonlyObject3697<T>
  : T;

interface DeepReadonlyArray3697<T> extends ReadonlyArray<DeepReadonly3697<T>> {}

type DeepReadonlyObject3697<T> = {
  readonly [P in keyof T]: DeepReadonly3697<T[P]>;
};

type UnionToIntersection3697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3697<T> = UnionToIntersection3697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3697<T extends unknown[], V> = [...T, V];

type TuplifyUnion3697<T, L = LastOf3697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3697<TuplifyUnion3697<Exclude<T, L>>, L>;

type DeepPartial3697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3697<T[P]> }
  : T;

type Paths3697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3697<K, Paths3697<T[K], Prev3697[D]>> : never }[keyof T]
  : never;

type Prev3697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3697 {
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

type ConfigPaths3697 = Paths3697<NestedConfig3697>;

interface HeavyProps3697 {
  config: DeepPartial3697<NestedConfig3697>;
  path?: ConfigPaths3697;
}

const HeavyComponent3697 = memo(function HeavyComponent3697({ config }: HeavyProps3697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3697.displayName = 'HeavyComponent3697';
export default HeavyComponent3697;
