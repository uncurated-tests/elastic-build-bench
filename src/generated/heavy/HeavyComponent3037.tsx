'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3037<T> = T extends (infer U)[]
  ? DeepReadonlyArray3037<U>
  : T extends object
  ? DeepReadonlyObject3037<T>
  : T;

interface DeepReadonlyArray3037<T> extends ReadonlyArray<DeepReadonly3037<T>> {}

type DeepReadonlyObject3037<T> = {
  readonly [P in keyof T]: DeepReadonly3037<T[P]>;
};

type UnionToIntersection3037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3037<T> = UnionToIntersection3037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3037<T extends unknown[], V> = [...T, V];

type TuplifyUnion3037<T, L = LastOf3037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3037<TuplifyUnion3037<Exclude<T, L>>, L>;

type DeepPartial3037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3037<T[P]> }
  : T;

type Paths3037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3037<K, Paths3037<T[K], Prev3037[D]>> : never }[keyof T]
  : never;

type Prev3037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3037 {
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

type ConfigPaths3037 = Paths3037<NestedConfig3037>;

interface HeavyProps3037 {
  config: DeepPartial3037<NestedConfig3037>;
  path?: ConfigPaths3037;
}

const HeavyComponent3037 = memo(function HeavyComponent3037({ config }: HeavyProps3037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3037.displayName = 'HeavyComponent3037';
export default HeavyComponent3037;
