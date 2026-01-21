'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3813<T> = T extends (infer U)[]
  ? DeepReadonlyArray3813<U>
  : T extends object
  ? DeepReadonlyObject3813<T>
  : T;

interface DeepReadonlyArray3813<T> extends ReadonlyArray<DeepReadonly3813<T>> {}

type DeepReadonlyObject3813<T> = {
  readonly [P in keyof T]: DeepReadonly3813<T[P]>;
};

type UnionToIntersection3813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3813<T> = UnionToIntersection3813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3813<T extends unknown[], V> = [...T, V];

type TuplifyUnion3813<T, L = LastOf3813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3813<TuplifyUnion3813<Exclude<T, L>>, L>;

type DeepPartial3813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3813<T[P]> }
  : T;

type Paths3813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3813<K, Paths3813<T[K], Prev3813[D]>> : never }[keyof T]
  : never;

type Prev3813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3813 {
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

type ConfigPaths3813 = Paths3813<NestedConfig3813>;

interface HeavyProps3813 {
  config: DeepPartial3813<NestedConfig3813>;
  path?: ConfigPaths3813;
}

const HeavyComponent3813 = memo(function HeavyComponent3813({ config }: HeavyProps3813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3813.displayName = 'HeavyComponent3813';
export default HeavyComponent3813;
