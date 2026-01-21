'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3400<T> = T extends (infer U)[]
  ? DeepReadonlyArray3400<U>
  : T extends object
  ? DeepReadonlyObject3400<T>
  : T;

interface DeepReadonlyArray3400<T> extends ReadonlyArray<DeepReadonly3400<T>> {}

type DeepReadonlyObject3400<T> = {
  readonly [P in keyof T]: DeepReadonly3400<T[P]>;
};

type UnionToIntersection3400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3400<T> = UnionToIntersection3400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3400<T extends unknown[], V> = [...T, V];

type TuplifyUnion3400<T, L = LastOf3400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3400<TuplifyUnion3400<Exclude<T, L>>, L>;

type DeepPartial3400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3400<T[P]> }
  : T;

type Paths3400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3400<K, Paths3400<T[K], Prev3400[D]>> : never }[keyof T]
  : never;

type Prev3400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3400 {
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

type ConfigPaths3400 = Paths3400<NestedConfig3400>;

interface HeavyProps3400 {
  config: DeepPartial3400<NestedConfig3400>;
  path?: ConfigPaths3400;
}

const HeavyComponent3400 = memo(function HeavyComponent3400({ config }: HeavyProps3400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3400.displayName = 'HeavyComponent3400';
export default HeavyComponent3400;
