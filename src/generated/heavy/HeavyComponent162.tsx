'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly162<T> = T extends (infer U)[]
  ? DeepReadonlyArray162<U>
  : T extends object
  ? DeepReadonlyObject162<T>
  : T;

interface DeepReadonlyArray162<T> extends ReadonlyArray<DeepReadonly162<T>> {}

type DeepReadonlyObject162<T> = {
  readonly [P in keyof T]: DeepReadonly162<T[P]>;
};

type UnionToIntersection162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf162<T> = UnionToIntersection162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push162<T extends unknown[], V> = [...T, V];

type TuplifyUnion162<T, L = LastOf162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push162<TuplifyUnion162<Exclude<T, L>>, L>;

type DeepPartial162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial162<T[P]> }
  : T;

type Paths162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join162<K, Paths162<T[K], Prev162[D]>> : never }[keyof T]
  : never;

type Prev162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig162 {
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

type ConfigPaths162 = Paths162<NestedConfig162>;

interface HeavyProps162 {
  config: DeepPartial162<NestedConfig162>;
  path?: ConfigPaths162;
}

const HeavyComponent162 = memo(function HeavyComponent162({ config }: HeavyProps162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent162.displayName = 'HeavyComponent162';
export default HeavyComponent162;
