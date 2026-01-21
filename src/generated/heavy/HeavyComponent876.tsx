'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly876<T> = T extends (infer U)[]
  ? DeepReadonlyArray876<U>
  : T extends object
  ? DeepReadonlyObject876<T>
  : T;

interface DeepReadonlyArray876<T> extends ReadonlyArray<DeepReadonly876<T>> {}

type DeepReadonlyObject876<T> = {
  readonly [P in keyof T]: DeepReadonly876<T[P]>;
};

type UnionToIntersection876<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf876<T> = UnionToIntersection876<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push876<T extends unknown[], V> = [...T, V];

type TuplifyUnion876<T, L = LastOf876<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push876<TuplifyUnion876<Exclude<T, L>>, L>;

type DeepPartial876<T> = T extends object
  ? { [P in keyof T]?: DeepPartial876<T[P]> }
  : T;

type Paths876<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join876<K, Paths876<T[K], Prev876[D]>> : never }[keyof T]
  : never;

type Prev876 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join876<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig876 {
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

type ConfigPaths876 = Paths876<NestedConfig876>;

interface HeavyProps876 {
  config: DeepPartial876<NestedConfig876>;
  path?: ConfigPaths876;
}

const HeavyComponent876 = memo(function HeavyComponent876({ config }: HeavyProps876) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 876) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-876 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H876: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent876.displayName = 'HeavyComponent876';
export default HeavyComponent876;
