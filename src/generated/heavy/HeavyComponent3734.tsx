'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3734<T> = T extends (infer U)[]
  ? DeepReadonlyArray3734<U>
  : T extends object
  ? DeepReadonlyObject3734<T>
  : T;

interface DeepReadonlyArray3734<T> extends ReadonlyArray<DeepReadonly3734<T>> {}

type DeepReadonlyObject3734<T> = {
  readonly [P in keyof T]: DeepReadonly3734<T[P]>;
};

type UnionToIntersection3734<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3734<T> = UnionToIntersection3734<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3734<T extends unknown[], V> = [...T, V];

type TuplifyUnion3734<T, L = LastOf3734<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3734<TuplifyUnion3734<Exclude<T, L>>, L>;

type DeepPartial3734<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3734<T[P]> }
  : T;

type Paths3734<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3734<K, Paths3734<T[K], Prev3734[D]>> : never }[keyof T]
  : never;

type Prev3734 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3734<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3734 {
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

type ConfigPaths3734 = Paths3734<NestedConfig3734>;

interface HeavyProps3734 {
  config: DeepPartial3734<NestedConfig3734>;
  path?: ConfigPaths3734;
}

const HeavyComponent3734 = memo(function HeavyComponent3734({ config }: HeavyProps3734) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3734) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3734 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3734: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3734.displayName = 'HeavyComponent3734';
export default HeavyComponent3734;
