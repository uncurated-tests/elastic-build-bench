'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3653<T> = T extends (infer U)[]
  ? DeepReadonlyArray3653<U>
  : T extends object
  ? DeepReadonlyObject3653<T>
  : T;

interface DeepReadonlyArray3653<T> extends ReadonlyArray<DeepReadonly3653<T>> {}

type DeepReadonlyObject3653<T> = {
  readonly [P in keyof T]: DeepReadonly3653<T[P]>;
};

type UnionToIntersection3653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3653<T> = UnionToIntersection3653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3653<T extends unknown[], V> = [...T, V];

type TuplifyUnion3653<T, L = LastOf3653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3653<TuplifyUnion3653<Exclude<T, L>>, L>;

type DeepPartial3653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3653<T[P]> }
  : T;

type Paths3653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3653<K, Paths3653<T[K], Prev3653[D]>> : never }[keyof T]
  : never;

type Prev3653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3653 {
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

type ConfigPaths3653 = Paths3653<NestedConfig3653>;

interface HeavyProps3653 {
  config: DeepPartial3653<NestedConfig3653>;
  path?: ConfigPaths3653;
}

const HeavyComponent3653 = memo(function HeavyComponent3653({ config }: HeavyProps3653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3653.displayName = 'HeavyComponent3653';
export default HeavyComponent3653;
