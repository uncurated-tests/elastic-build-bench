'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3928<T> = T extends (infer U)[]
  ? DeepReadonlyArray3928<U>
  : T extends object
  ? DeepReadonlyObject3928<T>
  : T;

interface DeepReadonlyArray3928<T> extends ReadonlyArray<DeepReadonly3928<T>> {}

type DeepReadonlyObject3928<T> = {
  readonly [P in keyof T]: DeepReadonly3928<T[P]>;
};

type UnionToIntersection3928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3928<T> = UnionToIntersection3928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3928<T extends unknown[], V> = [...T, V];

type TuplifyUnion3928<T, L = LastOf3928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3928<TuplifyUnion3928<Exclude<T, L>>, L>;

type DeepPartial3928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3928<T[P]> }
  : T;

type Paths3928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3928<K, Paths3928<T[K], Prev3928[D]>> : never }[keyof T]
  : never;

type Prev3928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3928 {
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

type ConfigPaths3928 = Paths3928<NestedConfig3928>;

interface HeavyProps3928 {
  config: DeepPartial3928<NestedConfig3928>;
  path?: ConfigPaths3928;
}

const HeavyComponent3928 = memo(function HeavyComponent3928({ config }: HeavyProps3928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3928.displayName = 'HeavyComponent3928';
export default HeavyComponent3928;
