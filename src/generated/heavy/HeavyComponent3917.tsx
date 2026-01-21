'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3917<T> = T extends (infer U)[]
  ? DeepReadonlyArray3917<U>
  : T extends object
  ? DeepReadonlyObject3917<T>
  : T;

interface DeepReadonlyArray3917<T> extends ReadonlyArray<DeepReadonly3917<T>> {}

type DeepReadonlyObject3917<T> = {
  readonly [P in keyof T]: DeepReadonly3917<T[P]>;
};

type UnionToIntersection3917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3917<T> = UnionToIntersection3917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3917<T extends unknown[], V> = [...T, V];

type TuplifyUnion3917<T, L = LastOf3917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3917<TuplifyUnion3917<Exclude<T, L>>, L>;

type DeepPartial3917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3917<T[P]> }
  : T;

type Paths3917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3917<K, Paths3917<T[K], Prev3917[D]>> : never }[keyof T]
  : never;

type Prev3917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3917 {
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

type ConfigPaths3917 = Paths3917<NestedConfig3917>;

interface HeavyProps3917 {
  config: DeepPartial3917<NestedConfig3917>;
  path?: ConfigPaths3917;
}

const HeavyComponent3917 = memo(function HeavyComponent3917({ config }: HeavyProps3917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3917.displayName = 'HeavyComponent3917';
export default HeavyComponent3917;
