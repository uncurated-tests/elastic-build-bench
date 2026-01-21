'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3622<T> = T extends (infer U)[]
  ? DeepReadonlyArray3622<U>
  : T extends object
  ? DeepReadonlyObject3622<T>
  : T;

interface DeepReadonlyArray3622<T> extends ReadonlyArray<DeepReadonly3622<T>> {}

type DeepReadonlyObject3622<T> = {
  readonly [P in keyof T]: DeepReadonly3622<T[P]>;
};

type UnionToIntersection3622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3622<T> = UnionToIntersection3622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3622<T extends unknown[], V> = [...T, V];

type TuplifyUnion3622<T, L = LastOf3622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3622<TuplifyUnion3622<Exclude<T, L>>, L>;

type DeepPartial3622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3622<T[P]> }
  : T;

type Paths3622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3622<K, Paths3622<T[K], Prev3622[D]>> : never }[keyof T]
  : never;

type Prev3622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3622 {
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

type ConfigPaths3622 = Paths3622<NestedConfig3622>;

interface HeavyProps3622 {
  config: DeepPartial3622<NestedConfig3622>;
  path?: ConfigPaths3622;
}

const HeavyComponent3622 = memo(function HeavyComponent3622({ config }: HeavyProps3622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3622.displayName = 'HeavyComponent3622';
export default HeavyComponent3622;
