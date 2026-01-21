'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3988<T> = T extends (infer U)[]
  ? DeepReadonlyArray3988<U>
  : T extends object
  ? DeepReadonlyObject3988<T>
  : T;

interface DeepReadonlyArray3988<T> extends ReadonlyArray<DeepReadonly3988<T>> {}

type DeepReadonlyObject3988<T> = {
  readonly [P in keyof T]: DeepReadonly3988<T[P]>;
};

type UnionToIntersection3988<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3988<T> = UnionToIntersection3988<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3988<T extends unknown[], V> = [...T, V];

type TuplifyUnion3988<T, L = LastOf3988<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3988<TuplifyUnion3988<Exclude<T, L>>, L>;

type DeepPartial3988<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3988<T[P]> }
  : T;

type Paths3988<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3988<K, Paths3988<T[K], Prev3988[D]>> : never }[keyof T]
  : never;

type Prev3988 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3988<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3988 {
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

type ConfigPaths3988 = Paths3988<NestedConfig3988>;

interface HeavyProps3988 {
  config: DeepPartial3988<NestedConfig3988>;
  path?: ConfigPaths3988;
}

const HeavyComponent3988 = memo(function HeavyComponent3988({ config }: HeavyProps3988) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3988) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3988 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3988: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3988.displayName = 'HeavyComponent3988';
export default HeavyComponent3988;
