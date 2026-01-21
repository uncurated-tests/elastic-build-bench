'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3985<T> = T extends (infer U)[]
  ? DeepReadonlyArray3985<U>
  : T extends object
  ? DeepReadonlyObject3985<T>
  : T;

interface DeepReadonlyArray3985<T> extends ReadonlyArray<DeepReadonly3985<T>> {}

type DeepReadonlyObject3985<T> = {
  readonly [P in keyof T]: DeepReadonly3985<T[P]>;
};

type UnionToIntersection3985<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3985<T> = UnionToIntersection3985<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3985<T extends unknown[], V> = [...T, V];

type TuplifyUnion3985<T, L = LastOf3985<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3985<TuplifyUnion3985<Exclude<T, L>>, L>;

type DeepPartial3985<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3985<T[P]> }
  : T;

type Paths3985<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3985<K, Paths3985<T[K], Prev3985[D]>> : never }[keyof T]
  : never;

type Prev3985 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3985<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3985 {
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

type ConfigPaths3985 = Paths3985<NestedConfig3985>;

interface HeavyProps3985 {
  config: DeepPartial3985<NestedConfig3985>;
  path?: ConfigPaths3985;
}

const HeavyComponent3985 = memo(function HeavyComponent3985({ config }: HeavyProps3985) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3985) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3985 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3985: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3985.displayName = 'HeavyComponent3985';
export default HeavyComponent3985;
