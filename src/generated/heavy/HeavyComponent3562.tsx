'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3562<T> = T extends (infer U)[]
  ? DeepReadonlyArray3562<U>
  : T extends object
  ? DeepReadonlyObject3562<T>
  : T;

interface DeepReadonlyArray3562<T> extends ReadonlyArray<DeepReadonly3562<T>> {}

type DeepReadonlyObject3562<T> = {
  readonly [P in keyof T]: DeepReadonly3562<T[P]>;
};

type UnionToIntersection3562<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3562<T> = UnionToIntersection3562<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3562<T extends unknown[], V> = [...T, V];

type TuplifyUnion3562<T, L = LastOf3562<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3562<TuplifyUnion3562<Exclude<T, L>>, L>;

type DeepPartial3562<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3562<T[P]> }
  : T;

type Paths3562<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3562<K, Paths3562<T[K], Prev3562[D]>> : never }[keyof T]
  : never;

type Prev3562 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3562<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3562 {
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

type ConfigPaths3562 = Paths3562<NestedConfig3562>;

interface HeavyProps3562 {
  config: DeepPartial3562<NestedConfig3562>;
  path?: ConfigPaths3562;
}

const HeavyComponent3562 = memo(function HeavyComponent3562({ config }: HeavyProps3562) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3562) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3562 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3562: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3562.displayName = 'HeavyComponent3562';
export default HeavyComponent3562;
