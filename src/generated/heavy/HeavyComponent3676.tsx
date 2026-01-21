'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3676<T> = T extends (infer U)[]
  ? DeepReadonlyArray3676<U>
  : T extends object
  ? DeepReadonlyObject3676<T>
  : T;

interface DeepReadonlyArray3676<T> extends ReadonlyArray<DeepReadonly3676<T>> {}

type DeepReadonlyObject3676<T> = {
  readonly [P in keyof T]: DeepReadonly3676<T[P]>;
};

type UnionToIntersection3676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3676<T> = UnionToIntersection3676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3676<T extends unknown[], V> = [...T, V];

type TuplifyUnion3676<T, L = LastOf3676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3676<TuplifyUnion3676<Exclude<T, L>>, L>;

type DeepPartial3676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3676<T[P]> }
  : T;

type Paths3676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3676<K, Paths3676<T[K], Prev3676[D]>> : never }[keyof T]
  : never;

type Prev3676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3676 {
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

type ConfigPaths3676 = Paths3676<NestedConfig3676>;

interface HeavyProps3676 {
  config: DeepPartial3676<NestedConfig3676>;
  path?: ConfigPaths3676;
}

const HeavyComponent3676 = memo(function HeavyComponent3676({ config }: HeavyProps3676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3676.displayName = 'HeavyComponent3676';
export default HeavyComponent3676;
