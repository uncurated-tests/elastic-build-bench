'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3817<T> = T extends (infer U)[]
  ? DeepReadonlyArray3817<U>
  : T extends object
  ? DeepReadonlyObject3817<T>
  : T;

interface DeepReadonlyArray3817<T> extends ReadonlyArray<DeepReadonly3817<T>> {}

type DeepReadonlyObject3817<T> = {
  readonly [P in keyof T]: DeepReadonly3817<T[P]>;
};

type UnionToIntersection3817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3817<T> = UnionToIntersection3817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3817<T extends unknown[], V> = [...T, V];

type TuplifyUnion3817<T, L = LastOf3817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3817<TuplifyUnion3817<Exclude<T, L>>, L>;

type DeepPartial3817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3817<T[P]> }
  : T;

type Paths3817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3817<K, Paths3817<T[K], Prev3817[D]>> : never }[keyof T]
  : never;

type Prev3817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3817 {
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

type ConfigPaths3817 = Paths3817<NestedConfig3817>;

interface HeavyProps3817 {
  config: DeepPartial3817<NestedConfig3817>;
  path?: ConfigPaths3817;
}

const HeavyComponent3817 = memo(function HeavyComponent3817({ config }: HeavyProps3817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3817.displayName = 'HeavyComponent3817';
export default HeavyComponent3817;
