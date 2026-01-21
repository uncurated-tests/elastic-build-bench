'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3257<T> = T extends (infer U)[]
  ? DeepReadonlyArray3257<U>
  : T extends object
  ? DeepReadonlyObject3257<T>
  : T;

interface DeepReadonlyArray3257<T> extends ReadonlyArray<DeepReadonly3257<T>> {}

type DeepReadonlyObject3257<T> = {
  readonly [P in keyof T]: DeepReadonly3257<T[P]>;
};

type UnionToIntersection3257<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3257<T> = UnionToIntersection3257<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3257<T extends unknown[], V> = [...T, V];

type TuplifyUnion3257<T, L = LastOf3257<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3257<TuplifyUnion3257<Exclude<T, L>>, L>;

type DeepPartial3257<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3257<T[P]> }
  : T;

type Paths3257<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3257<K, Paths3257<T[K], Prev3257[D]>> : never }[keyof T]
  : never;

type Prev3257 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3257<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3257 {
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

type ConfigPaths3257 = Paths3257<NestedConfig3257>;

interface HeavyProps3257 {
  config: DeepPartial3257<NestedConfig3257>;
  path?: ConfigPaths3257;
}

const HeavyComponent3257 = memo(function HeavyComponent3257({ config }: HeavyProps3257) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3257) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3257 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3257: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3257.displayName = 'HeavyComponent3257';
export default HeavyComponent3257;
