'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly212<T> = T extends (infer U)[]
  ? DeepReadonlyArray212<U>
  : T extends object
  ? DeepReadonlyObject212<T>
  : T;

interface DeepReadonlyArray212<T> extends ReadonlyArray<DeepReadonly212<T>> {}

type DeepReadonlyObject212<T> = {
  readonly [P in keyof T]: DeepReadonly212<T[P]>;
};

type UnionToIntersection212<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf212<T> = UnionToIntersection212<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push212<T extends unknown[], V> = [...T, V];

type TuplifyUnion212<T, L = LastOf212<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push212<TuplifyUnion212<Exclude<T, L>>, L>;

type DeepPartial212<T> = T extends object
  ? { [P in keyof T]?: DeepPartial212<T[P]> }
  : T;

type Paths212<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join212<K, Paths212<T[K], Prev212[D]>> : never }[keyof T]
  : never;

type Prev212 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join212<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig212 {
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

type ConfigPaths212 = Paths212<NestedConfig212>;

interface HeavyProps212 {
  config: DeepPartial212<NestedConfig212>;
  path?: ConfigPaths212;
}

const HeavyComponent212 = memo(function HeavyComponent212({ config }: HeavyProps212) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 212) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-212 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H212: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent212.displayName = 'HeavyComponent212';
export default HeavyComponent212;
