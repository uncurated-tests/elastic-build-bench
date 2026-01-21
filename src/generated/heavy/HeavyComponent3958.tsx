'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3958<T> = T extends (infer U)[]
  ? DeepReadonlyArray3958<U>
  : T extends object
  ? DeepReadonlyObject3958<T>
  : T;

interface DeepReadonlyArray3958<T> extends ReadonlyArray<DeepReadonly3958<T>> {}

type DeepReadonlyObject3958<T> = {
  readonly [P in keyof T]: DeepReadonly3958<T[P]>;
};

type UnionToIntersection3958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3958<T> = UnionToIntersection3958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3958<T extends unknown[], V> = [...T, V];

type TuplifyUnion3958<T, L = LastOf3958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3958<TuplifyUnion3958<Exclude<T, L>>, L>;

type DeepPartial3958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3958<T[P]> }
  : T;

type Paths3958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3958<K, Paths3958<T[K], Prev3958[D]>> : never }[keyof T]
  : never;

type Prev3958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3958 {
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

type ConfigPaths3958 = Paths3958<NestedConfig3958>;

interface HeavyProps3958 {
  config: DeepPartial3958<NestedConfig3958>;
  path?: ConfigPaths3958;
}

const HeavyComponent3958 = memo(function HeavyComponent3958({ config }: HeavyProps3958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3958.displayName = 'HeavyComponent3958';
export default HeavyComponent3958;
