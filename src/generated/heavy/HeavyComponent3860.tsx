'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3860<T> = T extends (infer U)[]
  ? DeepReadonlyArray3860<U>
  : T extends object
  ? DeepReadonlyObject3860<T>
  : T;

interface DeepReadonlyArray3860<T> extends ReadonlyArray<DeepReadonly3860<T>> {}

type DeepReadonlyObject3860<T> = {
  readonly [P in keyof T]: DeepReadonly3860<T[P]>;
};

type UnionToIntersection3860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3860<T> = UnionToIntersection3860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3860<T extends unknown[], V> = [...T, V];

type TuplifyUnion3860<T, L = LastOf3860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3860<TuplifyUnion3860<Exclude<T, L>>, L>;

type DeepPartial3860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3860<T[P]> }
  : T;

type Paths3860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3860<K, Paths3860<T[K], Prev3860[D]>> : never }[keyof T]
  : never;

type Prev3860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3860 {
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

type ConfigPaths3860 = Paths3860<NestedConfig3860>;

interface HeavyProps3860 {
  config: DeepPartial3860<NestedConfig3860>;
  path?: ConfigPaths3860;
}

const HeavyComponent3860 = memo(function HeavyComponent3860({ config }: HeavyProps3860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3860.displayName = 'HeavyComponent3860';
export default HeavyComponent3860;
