'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3311<T> = T extends (infer U)[]
  ? DeepReadonlyArray3311<U>
  : T extends object
  ? DeepReadonlyObject3311<T>
  : T;

interface DeepReadonlyArray3311<T> extends ReadonlyArray<DeepReadonly3311<T>> {}

type DeepReadonlyObject3311<T> = {
  readonly [P in keyof T]: DeepReadonly3311<T[P]>;
};

type UnionToIntersection3311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3311<T> = UnionToIntersection3311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3311<T extends unknown[], V> = [...T, V];

type TuplifyUnion3311<T, L = LastOf3311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3311<TuplifyUnion3311<Exclude<T, L>>, L>;

type DeepPartial3311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3311<T[P]> }
  : T;

type Paths3311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3311<K, Paths3311<T[K], Prev3311[D]>> : never }[keyof T]
  : never;

type Prev3311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3311 {
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

type ConfigPaths3311 = Paths3311<NestedConfig3311>;

interface HeavyProps3311 {
  config: DeepPartial3311<NestedConfig3311>;
  path?: ConfigPaths3311;
}

const HeavyComponent3311 = memo(function HeavyComponent3311({ config }: HeavyProps3311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3311.displayName = 'HeavyComponent3311';
export default HeavyComponent3311;
