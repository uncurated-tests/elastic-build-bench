'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly538<T> = T extends (infer U)[]
  ? DeepReadonlyArray538<U>
  : T extends object
  ? DeepReadonlyObject538<T>
  : T;

interface DeepReadonlyArray538<T> extends ReadonlyArray<DeepReadonly538<T>> {}

type DeepReadonlyObject538<T> = {
  readonly [P in keyof T]: DeepReadonly538<T[P]>;
};

type UnionToIntersection538<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf538<T> = UnionToIntersection538<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push538<T extends unknown[], V> = [...T, V];

type TuplifyUnion538<T, L = LastOf538<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push538<TuplifyUnion538<Exclude<T, L>>, L>;

type DeepPartial538<T> = T extends object
  ? { [P in keyof T]?: DeepPartial538<T[P]> }
  : T;

type Paths538<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join538<K, Paths538<T[K], Prev538[D]>> : never }[keyof T]
  : never;

type Prev538 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join538<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig538 {
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

type ConfigPaths538 = Paths538<NestedConfig538>;

interface HeavyProps538 {
  config: DeepPartial538<NestedConfig538>;
  path?: ConfigPaths538;
}

const HeavyComponent538 = memo(function HeavyComponent538({ config }: HeavyProps538) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 538) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-538 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H538: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent538.displayName = 'HeavyComponent538';
export default HeavyComponent538;
