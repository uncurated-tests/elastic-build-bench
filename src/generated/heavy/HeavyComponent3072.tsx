'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3072<T> = T extends (infer U)[]
  ? DeepReadonlyArray3072<U>
  : T extends object
  ? DeepReadonlyObject3072<T>
  : T;

interface DeepReadonlyArray3072<T> extends ReadonlyArray<DeepReadonly3072<T>> {}

type DeepReadonlyObject3072<T> = {
  readonly [P in keyof T]: DeepReadonly3072<T[P]>;
};

type UnionToIntersection3072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3072<T> = UnionToIntersection3072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3072<T extends unknown[], V> = [...T, V];

type TuplifyUnion3072<T, L = LastOf3072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3072<TuplifyUnion3072<Exclude<T, L>>, L>;

type DeepPartial3072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3072<T[P]> }
  : T;

type Paths3072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3072<K, Paths3072<T[K], Prev3072[D]>> : never }[keyof T]
  : never;

type Prev3072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3072 {
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

type ConfigPaths3072 = Paths3072<NestedConfig3072>;

interface HeavyProps3072 {
  config: DeepPartial3072<NestedConfig3072>;
  path?: ConfigPaths3072;
}

const HeavyComponent3072 = memo(function HeavyComponent3072({ config }: HeavyProps3072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3072.displayName = 'HeavyComponent3072';
export default HeavyComponent3072;
