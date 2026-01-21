'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3497<T> = T extends (infer U)[]
  ? DeepReadonlyArray3497<U>
  : T extends object
  ? DeepReadonlyObject3497<T>
  : T;

interface DeepReadonlyArray3497<T> extends ReadonlyArray<DeepReadonly3497<T>> {}

type DeepReadonlyObject3497<T> = {
  readonly [P in keyof T]: DeepReadonly3497<T[P]>;
};

type UnionToIntersection3497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3497<T> = UnionToIntersection3497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3497<T extends unknown[], V> = [...T, V];

type TuplifyUnion3497<T, L = LastOf3497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3497<TuplifyUnion3497<Exclude<T, L>>, L>;

type DeepPartial3497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3497<T[P]> }
  : T;

type Paths3497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3497<K, Paths3497<T[K], Prev3497[D]>> : never }[keyof T]
  : never;

type Prev3497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3497 {
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

type ConfigPaths3497 = Paths3497<NestedConfig3497>;

interface HeavyProps3497 {
  config: DeepPartial3497<NestedConfig3497>;
  path?: ConfigPaths3497;
}

const HeavyComponent3497 = memo(function HeavyComponent3497({ config }: HeavyProps3497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3497.displayName = 'HeavyComponent3497';
export default HeavyComponent3497;
