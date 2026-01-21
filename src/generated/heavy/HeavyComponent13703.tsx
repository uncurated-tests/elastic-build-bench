'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13703<T> = T extends (infer U)[]
  ? DeepReadonlyArray13703<U>
  : T extends object
  ? DeepReadonlyObject13703<T>
  : T;

interface DeepReadonlyArray13703<T> extends ReadonlyArray<DeepReadonly13703<T>> {}

type DeepReadonlyObject13703<T> = {
  readonly [P in keyof T]: DeepReadonly13703<T[P]>;
};

type UnionToIntersection13703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13703<T> = UnionToIntersection13703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13703<T extends unknown[], V> = [...T, V];

type TuplifyUnion13703<T, L = LastOf13703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13703<TuplifyUnion13703<Exclude<T, L>>, L>;

type DeepPartial13703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13703<T[P]> }
  : T;

type Paths13703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13703<K, Paths13703<T[K], Prev13703[D]>> : never }[keyof T]
  : never;

type Prev13703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13703 {
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

type ConfigPaths13703 = Paths13703<NestedConfig13703>;

interface HeavyProps13703 {
  config: DeepPartial13703<NestedConfig13703>;
  path?: ConfigPaths13703;
}

const HeavyComponent13703 = memo(function HeavyComponent13703({ config }: HeavyProps13703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13703.displayName = 'HeavyComponent13703';
export default HeavyComponent13703;
