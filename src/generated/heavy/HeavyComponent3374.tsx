'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3374<T> = T extends (infer U)[]
  ? DeepReadonlyArray3374<U>
  : T extends object
  ? DeepReadonlyObject3374<T>
  : T;

interface DeepReadonlyArray3374<T> extends ReadonlyArray<DeepReadonly3374<T>> {}

type DeepReadonlyObject3374<T> = {
  readonly [P in keyof T]: DeepReadonly3374<T[P]>;
};

type UnionToIntersection3374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3374<T> = UnionToIntersection3374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3374<T extends unknown[], V> = [...T, V];

type TuplifyUnion3374<T, L = LastOf3374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3374<TuplifyUnion3374<Exclude<T, L>>, L>;

type DeepPartial3374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3374<T[P]> }
  : T;

type Paths3374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3374<K, Paths3374<T[K], Prev3374[D]>> : never }[keyof T]
  : never;

type Prev3374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3374 {
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

type ConfigPaths3374 = Paths3374<NestedConfig3374>;

interface HeavyProps3374 {
  config: DeepPartial3374<NestedConfig3374>;
  path?: ConfigPaths3374;
}

const HeavyComponent3374 = memo(function HeavyComponent3374({ config }: HeavyProps3374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3374.displayName = 'HeavyComponent3374';
export default HeavyComponent3374;
