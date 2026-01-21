'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly165<T> = T extends (infer U)[]
  ? DeepReadonlyArray165<U>
  : T extends object
  ? DeepReadonlyObject165<T>
  : T;

interface DeepReadonlyArray165<T> extends ReadonlyArray<DeepReadonly165<T>> {}

type DeepReadonlyObject165<T> = {
  readonly [P in keyof T]: DeepReadonly165<T[P]>;
};

type UnionToIntersection165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf165<T> = UnionToIntersection165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push165<T extends unknown[], V> = [...T, V];

type TuplifyUnion165<T, L = LastOf165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push165<TuplifyUnion165<Exclude<T, L>>, L>;

type DeepPartial165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial165<T[P]> }
  : T;

type Paths165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join165<K, Paths165<T[K], Prev165[D]>> : never }[keyof T]
  : never;

type Prev165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig165 {
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

type ConfigPaths165 = Paths165<NestedConfig165>;

interface HeavyProps165 {
  config: DeepPartial165<NestedConfig165>;
  path?: ConfigPaths165;
}

const HeavyComponent165 = memo(function HeavyComponent165({ config }: HeavyProps165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent165.displayName = 'HeavyComponent165';
export default HeavyComponent165;
