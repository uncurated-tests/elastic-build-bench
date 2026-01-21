'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3143<T> = T extends (infer U)[]
  ? DeepReadonlyArray3143<U>
  : T extends object
  ? DeepReadonlyObject3143<T>
  : T;

interface DeepReadonlyArray3143<T> extends ReadonlyArray<DeepReadonly3143<T>> {}

type DeepReadonlyObject3143<T> = {
  readonly [P in keyof T]: DeepReadonly3143<T[P]>;
};

type UnionToIntersection3143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3143<T> = UnionToIntersection3143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3143<T extends unknown[], V> = [...T, V];

type TuplifyUnion3143<T, L = LastOf3143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3143<TuplifyUnion3143<Exclude<T, L>>, L>;

type DeepPartial3143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3143<T[P]> }
  : T;

type Paths3143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3143<K, Paths3143<T[K], Prev3143[D]>> : never }[keyof T]
  : never;

type Prev3143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3143 {
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

type ConfigPaths3143 = Paths3143<NestedConfig3143>;

interface HeavyProps3143 {
  config: DeepPartial3143<NestedConfig3143>;
  path?: ConfigPaths3143;
}

const HeavyComponent3143 = memo(function HeavyComponent3143({ config }: HeavyProps3143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3143.displayName = 'HeavyComponent3143';
export default HeavyComponent3143;
