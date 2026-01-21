'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3513<T> = T extends (infer U)[]
  ? DeepReadonlyArray3513<U>
  : T extends object
  ? DeepReadonlyObject3513<T>
  : T;

interface DeepReadonlyArray3513<T> extends ReadonlyArray<DeepReadonly3513<T>> {}

type DeepReadonlyObject3513<T> = {
  readonly [P in keyof T]: DeepReadonly3513<T[P]>;
};

type UnionToIntersection3513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3513<T> = UnionToIntersection3513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3513<T extends unknown[], V> = [...T, V];

type TuplifyUnion3513<T, L = LastOf3513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3513<TuplifyUnion3513<Exclude<T, L>>, L>;

type DeepPartial3513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3513<T[P]> }
  : T;

type Paths3513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3513<K, Paths3513<T[K], Prev3513[D]>> : never }[keyof T]
  : never;

type Prev3513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3513 {
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

type ConfigPaths3513 = Paths3513<NestedConfig3513>;

interface HeavyProps3513 {
  config: DeepPartial3513<NestedConfig3513>;
  path?: ConfigPaths3513;
}

const HeavyComponent3513 = memo(function HeavyComponent3513({ config }: HeavyProps3513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3513.displayName = 'HeavyComponent3513';
export default HeavyComponent3513;
