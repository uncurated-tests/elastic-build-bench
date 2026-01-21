'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3798<T> = T extends (infer U)[]
  ? DeepReadonlyArray3798<U>
  : T extends object
  ? DeepReadonlyObject3798<T>
  : T;

interface DeepReadonlyArray3798<T> extends ReadonlyArray<DeepReadonly3798<T>> {}

type DeepReadonlyObject3798<T> = {
  readonly [P in keyof T]: DeepReadonly3798<T[P]>;
};

type UnionToIntersection3798<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3798<T> = UnionToIntersection3798<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3798<T extends unknown[], V> = [...T, V];

type TuplifyUnion3798<T, L = LastOf3798<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3798<TuplifyUnion3798<Exclude<T, L>>, L>;

type DeepPartial3798<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3798<T[P]> }
  : T;

type Paths3798<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3798<K, Paths3798<T[K], Prev3798[D]>> : never }[keyof T]
  : never;

type Prev3798 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3798<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3798 {
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

type ConfigPaths3798 = Paths3798<NestedConfig3798>;

interface HeavyProps3798 {
  config: DeepPartial3798<NestedConfig3798>;
  path?: ConfigPaths3798;
}

const HeavyComponent3798 = memo(function HeavyComponent3798({ config }: HeavyProps3798) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3798) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3798 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3798: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3798.displayName = 'HeavyComponent3798';
export default HeavyComponent3798;
