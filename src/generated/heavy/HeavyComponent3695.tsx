'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3695<T> = T extends (infer U)[]
  ? DeepReadonlyArray3695<U>
  : T extends object
  ? DeepReadonlyObject3695<T>
  : T;

interface DeepReadonlyArray3695<T> extends ReadonlyArray<DeepReadonly3695<T>> {}

type DeepReadonlyObject3695<T> = {
  readonly [P in keyof T]: DeepReadonly3695<T[P]>;
};

type UnionToIntersection3695<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3695<T> = UnionToIntersection3695<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3695<T extends unknown[], V> = [...T, V];

type TuplifyUnion3695<T, L = LastOf3695<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3695<TuplifyUnion3695<Exclude<T, L>>, L>;

type DeepPartial3695<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3695<T[P]> }
  : T;

type Paths3695<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3695<K, Paths3695<T[K], Prev3695[D]>> : never }[keyof T]
  : never;

type Prev3695 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3695<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3695 {
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

type ConfigPaths3695 = Paths3695<NestedConfig3695>;

interface HeavyProps3695 {
  config: DeepPartial3695<NestedConfig3695>;
  path?: ConfigPaths3695;
}

const HeavyComponent3695 = memo(function HeavyComponent3695({ config }: HeavyProps3695) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3695) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3695 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3695: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3695.displayName = 'HeavyComponent3695';
export default HeavyComponent3695;
