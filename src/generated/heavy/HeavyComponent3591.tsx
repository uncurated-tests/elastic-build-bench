'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3591<T> = T extends (infer U)[]
  ? DeepReadonlyArray3591<U>
  : T extends object
  ? DeepReadonlyObject3591<T>
  : T;

interface DeepReadonlyArray3591<T> extends ReadonlyArray<DeepReadonly3591<T>> {}

type DeepReadonlyObject3591<T> = {
  readonly [P in keyof T]: DeepReadonly3591<T[P]>;
};

type UnionToIntersection3591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3591<T> = UnionToIntersection3591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3591<T extends unknown[], V> = [...T, V];

type TuplifyUnion3591<T, L = LastOf3591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3591<TuplifyUnion3591<Exclude<T, L>>, L>;

type DeepPartial3591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3591<T[P]> }
  : T;

type Paths3591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3591<K, Paths3591<T[K], Prev3591[D]>> : never }[keyof T]
  : never;

type Prev3591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3591 {
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

type ConfigPaths3591 = Paths3591<NestedConfig3591>;

interface HeavyProps3591 {
  config: DeepPartial3591<NestedConfig3591>;
  path?: ConfigPaths3591;
}

const HeavyComponent3591 = memo(function HeavyComponent3591({ config }: HeavyProps3591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3591.displayName = 'HeavyComponent3591';
export default HeavyComponent3591;
