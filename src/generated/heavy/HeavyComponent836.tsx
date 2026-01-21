'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly836<T> = T extends (infer U)[]
  ? DeepReadonlyArray836<U>
  : T extends object
  ? DeepReadonlyObject836<T>
  : T;

interface DeepReadonlyArray836<T> extends ReadonlyArray<DeepReadonly836<T>> {}

type DeepReadonlyObject836<T> = {
  readonly [P in keyof T]: DeepReadonly836<T[P]>;
};

type UnionToIntersection836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf836<T> = UnionToIntersection836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push836<T extends unknown[], V> = [...T, V];

type TuplifyUnion836<T, L = LastOf836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push836<TuplifyUnion836<Exclude<T, L>>, L>;

type DeepPartial836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial836<T[P]> }
  : T;

type Paths836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join836<K, Paths836<T[K], Prev836[D]>> : never }[keyof T]
  : never;

type Prev836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig836 {
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

type ConfigPaths836 = Paths836<NestedConfig836>;

interface HeavyProps836 {
  config: DeepPartial836<NestedConfig836>;
  path?: ConfigPaths836;
}

const HeavyComponent836 = memo(function HeavyComponent836({ config }: HeavyProps836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent836.displayName = 'HeavyComponent836';
export default HeavyComponent836;
