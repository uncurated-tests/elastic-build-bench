'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3629<T> = T extends (infer U)[]
  ? DeepReadonlyArray3629<U>
  : T extends object
  ? DeepReadonlyObject3629<T>
  : T;

interface DeepReadonlyArray3629<T> extends ReadonlyArray<DeepReadonly3629<T>> {}

type DeepReadonlyObject3629<T> = {
  readonly [P in keyof T]: DeepReadonly3629<T[P]>;
};

type UnionToIntersection3629<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3629<T> = UnionToIntersection3629<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3629<T extends unknown[], V> = [...T, V];

type TuplifyUnion3629<T, L = LastOf3629<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3629<TuplifyUnion3629<Exclude<T, L>>, L>;

type DeepPartial3629<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3629<T[P]> }
  : T;

type Paths3629<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3629<K, Paths3629<T[K], Prev3629[D]>> : never }[keyof T]
  : never;

type Prev3629 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3629<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3629 {
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

type ConfigPaths3629 = Paths3629<NestedConfig3629>;

interface HeavyProps3629 {
  config: DeepPartial3629<NestedConfig3629>;
  path?: ConfigPaths3629;
}

const HeavyComponent3629 = memo(function HeavyComponent3629({ config }: HeavyProps3629) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3629) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3629 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3629: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3629.displayName = 'HeavyComponent3629';
export default HeavyComponent3629;
