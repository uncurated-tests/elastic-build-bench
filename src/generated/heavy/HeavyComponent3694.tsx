'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3694<T> = T extends (infer U)[]
  ? DeepReadonlyArray3694<U>
  : T extends object
  ? DeepReadonlyObject3694<T>
  : T;

interface DeepReadonlyArray3694<T> extends ReadonlyArray<DeepReadonly3694<T>> {}

type DeepReadonlyObject3694<T> = {
  readonly [P in keyof T]: DeepReadonly3694<T[P]>;
};

type UnionToIntersection3694<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3694<T> = UnionToIntersection3694<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3694<T extends unknown[], V> = [...T, V];

type TuplifyUnion3694<T, L = LastOf3694<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3694<TuplifyUnion3694<Exclude<T, L>>, L>;

type DeepPartial3694<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3694<T[P]> }
  : T;

type Paths3694<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3694<K, Paths3694<T[K], Prev3694[D]>> : never }[keyof T]
  : never;

type Prev3694 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3694<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3694 {
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

type ConfigPaths3694 = Paths3694<NestedConfig3694>;

interface HeavyProps3694 {
  config: DeepPartial3694<NestedConfig3694>;
  path?: ConfigPaths3694;
}

const HeavyComponent3694 = memo(function HeavyComponent3694({ config }: HeavyProps3694) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3694) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3694 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3694: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3694.displayName = 'HeavyComponent3694';
export default HeavyComponent3694;
