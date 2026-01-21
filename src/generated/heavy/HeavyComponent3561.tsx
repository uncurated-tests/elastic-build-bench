'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3561<T> = T extends (infer U)[]
  ? DeepReadonlyArray3561<U>
  : T extends object
  ? DeepReadonlyObject3561<T>
  : T;

interface DeepReadonlyArray3561<T> extends ReadonlyArray<DeepReadonly3561<T>> {}

type DeepReadonlyObject3561<T> = {
  readonly [P in keyof T]: DeepReadonly3561<T[P]>;
};

type UnionToIntersection3561<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3561<T> = UnionToIntersection3561<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3561<T extends unknown[], V> = [...T, V];

type TuplifyUnion3561<T, L = LastOf3561<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3561<TuplifyUnion3561<Exclude<T, L>>, L>;

type DeepPartial3561<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3561<T[P]> }
  : T;

type Paths3561<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3561<K, Paths3561<T[K], Prev3561[D]>> : never }[keyof T]
  : never;

type Prev3561 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3561<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3561 {
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

type ConfigPaths3561 = Paths3561<NestedConfig3561>;

interface HeavyProps3561 {
  config: DeepPartial3561<NestedConfig3561>;
  path?: ConfigPaths3561;
}

const HeavyComponent3561 = memo(function HeavyComponent3561({ config }: HeavyProps3561) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3561) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3561 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3561: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3561.displayName = 'HeavyComponent3561';
export default HeavyComponent3561;
