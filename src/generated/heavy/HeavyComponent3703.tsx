'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3703<T> = T extends (infer U)[]
  ? DeepReadonlyArray3703<U>
  : T extends object
  ? DeepReadonlyObject3703<T>
  : T;

interface DeepReadonlyArray3703<T> extends ReadonlyArray<DeepReadonly3703<T>> {}

type DeepReadonlyObject3703<T> = {
  readonly [P in keyof T]: DeepReadonly3703<T[P]>;
};

type UnionToIntersection3703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3703<T> = UnionToIntersection3703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3703<T extends unknown[], V> = [...T, V];

type TuplifyUnion3703<T, L = LastOf3703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3703<TuplifyUnion3703<Exclude<T, L>>, L>;

type DeepPartial3703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3703<T[P]> }
  : T;

type Paths3703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3703<K, Paths3703<T[K], Prev3703[D]>> : never }[keyof T]
  : never;

type Prev3703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3703 {
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

type ConfigPaths3703 = Paths3703<NestedConfig3703>;

interface HeavyProps3703 {
  config: DeepPartial3703<NestedConfig3703>;
  path?: ConfigPaths3703;
}

const HeavyComponent3703 = memo(function HeavyComponent3703({ config }: HeavyProps3703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3703.displayName = 'HeavyComponent3703';
export default HeavyComponent3703;
