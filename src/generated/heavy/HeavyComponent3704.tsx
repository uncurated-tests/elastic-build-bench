'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3704<T> = T extends (infer U)[]
  ? DeepReadonlyArray3704<U>
  : T extends object
  ? DeepReadonlyObject3704<T>
  : T;

interface DeepReadonlyArray3704<T> extends ReadonlyArray<DeepReadonly3704<T>> {}

type DeepReadonlyObject3704<T> = {
  readonly [P in keyof T]: DeepReadonly3704<T[P]>;
};

type UnionToIntersection3704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3704<T> = UnionToIntersection3704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3704<T extends unknown[], V> = [...T, V];

type TuplifyUnion3704<T, L = LastOf3704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3704<TuplifyUnion3704<Exclude<T, L>>, L>;

type DeepPartial3704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3704<T[P]> }
  : T;

type Paths3704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3704<K, Paths3704<T[K], Prev3704[D]>> : never }[keyof T]
  : never;

type Prev3704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3704 {
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

type ConfigPaths3704 = Paths3704<NestedConfig3704>;

interface HeavyProps3704 {
  config: DeepPartial3704<NestedConfig3704>;
  path?: ConfigPaths3704;
}

const HeavyComponent3704 = memo(function HeavyComponent3704({ config }: HeavyProps3704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3704.displayName = 'HeavyComponent3704';
export default HeavyComponent3704;
