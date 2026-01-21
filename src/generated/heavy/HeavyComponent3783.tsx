'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3783<T> = T extends (infer U)[]
  ? DeepReadonlyArray3783<U>
  : T extends object
  ? DeepReadonlyObject3783<T>
  : T;

interface DeepReadonlyArray3783<T> extends ReadonlyArray<DeepReadonly3783<T>> {}

type DeepReadonlyObject3783<T> = {
  readonly [P in keyof T]: DeepReadonly3783<T[P]>;
};

type UnionToIntersection3783<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3783<T> = UnionToIntersection3783<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3783<T extends unknown[], V> = [...T, V];

type TuplifyUnion3783<T, L = LastOf3783<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3783<TuplifyUnion3783<Exclude<T, L>>, L>;

type DeepPartial3783<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3783<T[P]> }
  : T;

type Paths3783<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3783<K, Paths3783<T[K], Prev3783[D]>> : never }[keyof T]
  : never;

type Prev3783 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3783<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3783 {
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

type ConfigPaths3783 = Paths3783<NestedConfig3783>;

interface HeavyProps3783 {
  config: DeepPartial3783<NestedConfig3783>;
  path?: ConfigPaths3783;
}

const HeavyComponent3783 = memo(function HeavyComponent3783({ config }: HeavyProps3783) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3783) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3783 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3783: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3783.displayName = 'HeavyComponent3783';
export default HeavyComponent3783;
