'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3687<T> = T extends (infer U)[]
  ? DeepReadonlyArray3687<U>
  : T extends object
  ? DeepReadonlyObject3687<T>
  : T;

interface DeepReadonlyArray3687<T> extends ReadonlyArray<DeepReadonly3687<T>> {}

type DeepReadonlyObject3687<T> = {
  readonly [P in keyof T]: DeepReadonly3687<T[P]>;
};

type UnionToIntersection3687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3687<T> = UnionToIntersection3687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3687<T extends unknown[], V> = [...T, V];

type TuplifyUnion3687<T, L = LastOf3687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3687<TuplifyUnion3687<Exclude<T, L>>, L>;

type DeepPartial3687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3687<T[P]> }
  : T;

type Paths3687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3687<K, Paths3687<T[K], Prev3687[D]>> : never }[keyof T]
  : never;

type Prev3687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3687 {
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

type ConfigPaths3687 = Paths3687<NestedConfig3687>;

interface HeavyProps3687 {
  config: DeepPartial3687<NestedConfig3687>;
  path?: ConfigPaths3687;
}

const HeavyComponent3687 = memo(function HeavyComponent3687({ config }: HeavyProps3687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3687.displayName = 'HeavyComponent3687';
export default HeavyComponent3687;
