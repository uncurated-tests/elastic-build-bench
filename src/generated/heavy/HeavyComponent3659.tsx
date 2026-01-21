'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3659<T> = T extends (infer U)[]
  ? DeepReadonlyArray3659<U>
  : T extends object
  ? DeepReadonlyObject3659<T>
  : T;

interface DeepReadonlyArray3659<T> extends ReadonlyArray<DeepReadonly3659<T>> {}

type DeepReadonlyObject3659<T> = {
  readonly [P in keyof T]: DeepReadonly3659<T[P]>;
};

type UnionToIntersection3659<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3659<T> = UnionToIntersection3659<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3659<T extends unknown[], V> = [...T, V];

type TuplifyUnion3659<T, L = LastOf3659<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3659<TuplifyUnion3659<Exclude<T, L>>, L>;

type DeepPartial3659<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3659<T[P]> }
  : T;

type Paths3659<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3659<K, Paths3659<T[K], Prev3659[D]>> : never }[keyof T]
  : never;

type Prev3659 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3659<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3659 {
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

type ConfigPaths3659 = Paths3659<NestedConfig3659>;

interface HeavyProps3659 {
  config: DeepPartial3659<NestedConfig3659>;
  path?: ConfigPaths3659;
}

const HeavyComponent3659 = memo(function HeavyComponent3659({ config }: HeavyProps3659) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3659) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3659 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3659: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3659.displayName = 'HeavyComponent3659';
export default HeavyComponent3659;
