'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3633<T> = T extends (infer U)[]
  ? DeepReadonlyArray3633<U>
  : T extends object
  ? DeepReadonlyObject3633<T>
  : T;

interface DeepReadonlyArray3633<T> extends ReadonlyArray<DeepReadonly3633<T>> {}

type DeepReadonlyObject3633<T> = {
  readonly [P in keyof T]: DeepReadonly3633<T[P]>;
};

type UnionToIntersection3633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3633<T> = UnionToIntersection3633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3633<T extends unknown[], V> = [...T, V];

type TuplifyUnion3633<T, L = LastOf3633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3633<TuplifyUnion3633<Exclude<T, L>>, L>;

type DeepPartial3633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3633<T[P]> }
  : T;

type Paths3633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3633<K, Paths3633<T[K], Prev3633[D]>> : never }[keyof T]
  : never;

type Prev3633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3633 {
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

type ConfigPaths3633 = Paths3633<NestedConfig3633>;

interface HeavyProps3633 {
  config: DeepPartial3633<NestedConfig3633>;
  path?: ConfigPaths3633;
}

const HeavyComponent3633 = memo(function HeavyComponent3633({ config }: HeavyProps3633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3633.displayName = 'HeavyComponent3633';
export default HeavyComponent3633;
