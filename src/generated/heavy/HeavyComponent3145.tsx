'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3145<T> = T extends (infer U)[]
  ? DeepReadonlyArray3145<U>
  : T extends object
  ? DeepReadonlyObject3145<T>
  : T;

interface DeepReadonlyArray3145<T> extends ReadonlyArray<DeepReadonly3145<T>> {}

type DeepReadonlyObject3145<T> = {
  readonly [P in keyof T]: DeepReadonly3145<T[P]>;
};

type UnionToIntersection3145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3145<T> = UnionToIntersection3145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3145<T extends unknown[], V> = [...T, V];

type TuplifyUnion3145<T, L = LastOf3145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3145<TuplifyUnion3145<Exclude<T, L>>, L>;

type DeepPartial3145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3145<T[P]> }
  : T;

type Paths3145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3145<K, Paths3145<T[K], Prev3145[D]>> : never }[keyof T]
  : never;

type Prev3145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3145 {
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

type ConfigPaths3145 = Paths3145<NestedConfig3145>;

interface HeavyProps3145 {
  config: DeepPartial3145<NestedConfig3145>;
  path?: ConfigPaths3145;
}

const HeavyComponent3145 = memo(function HeavyComponent3145({ config }: HeavyProps3145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3145.displayName = 'HeavyComponent3145';
export default HeavyComponent3145;
