'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3978<T> = T extends (infer U)[]
  ? DeepReadonlyArray3978<U>
  : T extends object
  ? DeepReadonlyObject3978<T>
  : T;

interface DeepReadonlyArray3978<T> extends ReadonlyArray<DeepReadonly3978<T>> {}

type DeepReadonlyObject3978<T> = {
  readonly [P in keyof T]: DeepReadonly3978<T[P]>;
};

type UnionToIntersection3978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3978<T> = UnionToIntersection3978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3978<T extends unknown[], V> = [...T, V];

type TuplifyUnion3978<T, L = LastOf3978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3978<TuplifyUnion3978<Exclude<T, L>>, L>;

type DeepPartial3978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3978<T[P]> }
  : T;

type Paths3978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3978<K, Paths3978<T[K], Prev3978[D]>> : never }[keyof T]
  : never;

type Prev3978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3978 {
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

type ConfigPaths3978 = Paths3978<NestedConfig3978>;

interface HeavyProps3978 {
  config: DeepPartial3978<NestedConfig3978>;
  path?: ConfigPaths3978;
}

const HeavyComponent3978 = memo(function HeavyComponent3978({ config }: HeavyProps3978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3978.displayName = 'HeavyComponent3978';
export default HeavyComponent3978;
