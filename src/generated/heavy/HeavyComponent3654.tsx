'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3654<T> = T extends (infer U)[]
  ? DeepReadonlyArray3654<U>
  : T extends object
  ? DeepReadonlyObject3654<T>
  : T;

interface DeepReadonlyArray3654<T> extends ReadonlyArray<DeepReadonly3654<T>> {}

type DeepReadonlyObject3654<T> = {
  readonly [P in keyof T]: DeepReadonly3654<T[P]>;
};

type UnionToIntersection3654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3654<T> = UnionToIntersection3654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3654<T extends unknown[], V> = [...T, V];

type TuplifyUnion3654<T, L = LastOf3654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3654<TuplifyUnion3654<Exclude<T, L>>, L>;

type DeepPartial3654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3654<T[P]> }
  : T;

type Paths3654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3654<K, Paths3654<T[K], Prev3654[D]>> : never }[keyof T]
  : never;

type Prev3654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3654 {
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

type ConfigPaths3654 = Paths3654<NestedConfig3654>;

interface HeavyProps3654 {
  config: DeepPartial3654<NestedConfig3654>;
  path?: ConfigPaths3654;
}

const HeavyComponent3654 = memo(function HeavyComponent3654({ config }: HeavyProps3654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3654.displayName = 'HeavyComponent3654';
export default HeavyComponent3654;
