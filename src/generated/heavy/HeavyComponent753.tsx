'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly753<T> = T extends (infer U)[]
  ? DeepReadonlyArray753<U>
  : T extends object
  ? DeepReadonlyObject753<T>
  : T;

interface DeepReadonlyArray753<T> extends ReadonlyArray<DeepReadonly753<T>> {}

type DeepReadonlyObject753<T> = {
  readonly [P in keyof T]: DeepReadonly753<T[P]>;
};

type UnionToIntersection753<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf753<T> = UnionToIntersection753<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push753<T extends unknown[], V> = [...T, V];

type TuplifyUnion753<T, L = LastOf753<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push753<TuplifyUnion753<Exclude<T, L>>, L>;

type DeepPartial753<T> = T extends object
  ? { [P in keyof T]?: DeepPartial753<T[P]> }
  : T;

type Paths753<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join753<K, Paths753<T[K], Prev753[D]>> : never }[keyof T]
  : never;

type Prev753 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join753<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig753 {
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

type ConfigPaths753 = Paths753<NestedConfig753>;

interface HeavyProps753 {
  config: DeepPartial753<NestedConfig753>;
  path?: ConfigPaths753;
}

const HeavyComponent753 = memo(function HeavyComponent753({ config }: HeavyProps753) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 753) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-753 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H753: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent753.displayName = 'HeavyComponent753';
export default HeavyComponent753;
