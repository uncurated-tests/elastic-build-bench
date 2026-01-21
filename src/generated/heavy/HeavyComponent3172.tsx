'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3172<T> = T extends (infer U)[]
  ? DeepReadonlyArray3172<U>
  : T extends object
  ? DeepReadonlyObject3172<T>
  : T;

interface DeepReadonlyArray3172<T> extends ReadonlyArray<DeepReadonly3172<T>> {}

type DeepReadonlyObject3172<T> = {
  readonly [P in keyof T]: DeepReadonly3172<T[P]>;
};

type UnionToIntersection3172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3172<T> = UnionToIntersection3172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3172<T extends unknown[], V> = [...T, V];

type TuplifyUnion3172<T, L = LastOf3172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3172<TuplifyUnion3172<Exclude<T, L>>, L>;

type DeepPartial3172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3172<T[P]> }
  : T;

type Paths3172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3172<K, Paths3172<T[K], Prev3172[D]>> : never }[keyof T]
  : never;

type Prev3172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3172 {
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

type ConfigPaths3172 = Paths3172<NestedConfig3172>;

interface HeavyProps3172 {
  config: DeepPartial3172<NestedConfig3172>;
  path?: ConfigPaths3172;
}

const HeavyComponent3172 = memo(function HeavyComponent3172({ config }: HeavyProps3172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3172.displayName = 'HeavyComponent3172';
export default HeavyComponent3172;
