'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3521<T> = T extends (infer U)[]
  ? DeepReadonlyArray3521<U>
  : T extends object
  ? DeepReadonlyObject3521<T>
  : T;

interface DeepReadonlyArray3521<T> extends ReadonlyArray<DeepReadonly3521<T>> {}

type DeepReadonlyObject3521<T> = {
  readonly [P in keyof T]: DeepReadonly3521<T[P]>;
};

type UnionToIntersection3521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3521<T> = UnionToIntersection3521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3521<T extends unknown[], V> = [...T, V];

type TuplifyUnion3521<T, L = LastOf3521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3521<TuplifyUnion3521<Exclude<T, L>>, L>;

type DeepPartial3521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3521<T[P]> }
  : T;

type Paths3521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3521<K, Paths3521<T[K], Prev3521[D]>> : never }[keyof T]
  : never;

type Prev3521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3521 {
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

type ConfigPaths3521 = Paths3521<NestedConfig3521>;

interface HeavyProps3521 {
  config: DeepPartial3521<NestedConfig3521>;
  path?: ConfigPaths3521;
}

const HeavyComponent3521 = memo(function HeavyComponent3521({ config }: HeavyProps3521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3521.displayName = 'HeavyComponent3521';
export default HeavyComponent3521;
