'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3056<T> = T extends (infer U)[]
  ? DeepReadonlyArray3056<U>
  : T extends object
  ? DeepReadonlyObject3056<T>
  : T;

interface DeepReadonlyArray3056<T> extends ReadonlyArray<DeepReadonly3056<T>> {}

type DeepReadonlyObject3056<T> = {
  readonly [P in keyof T]: DeepReadonly3056<T[P]>;
};

type UnionToIntersection3056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3056<T> = UnionToIntersection3056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3056<T extends unknown[], V> = [...T, V];

type TuplifyUnion3056<T, L = LastOf3056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3056<TuplifyUnion3056<Exclude<T, L>>, L>;

type DeepPartial3056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3056<T[P]> }
  : T;

type Paths3056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3056<K, Paths3056<T[K], Prev3056[D]>> : never }[keyof T]
  : never;

type Prev3056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3056 {
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

type ConfigPaths3056 = Paths3056<NestedConfig3056>;

interface HeavyProps3056 {
  config: DeepPartial3056<NestedConfig3056>;
  path?: ConfigPaths3056;
}

const HeavyComponent3056 = memo(function HeavyComponent3056({ config }: HeavyProps3056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3056.displayName = 'HeavyComponent3056';
export default HeavyComponent3056;
