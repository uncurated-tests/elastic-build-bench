'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13743<T> = T extends (infer U)[]
  ? DeepReadonlyArray13743<U>
  : T extends object
  ? DeepReadonlyObject13743<T>
  : T;

interface DeepReadonlyArray13743<T> extends ReadonlyArray<DeepReadonly13743<T>> {}

type DeepReadonlyObject13743<T> = {
  readonly [P in keyof T]: DeepReadonly13743<T[P]>;
};

type UnionToIntersection13743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13743<T> = UnionToIntersection13743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13743<T extends unknown[], V> = [...T, V];

type TuplifyUnion13743<T, L = LastOf13743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13743<TuplifyUnion13743<Exclude<T, L>>, L>;

type DeepPartial13743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13743<T[P]> }
  : T;

type Paths13743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13743<K, Paths13743<T[K], Prev13743[D]>> : never }[keyof T]
  : never;

type Prev13743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13743 {
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

type ConfigPaths13743 = Paths13743<NestedConfig13743>;

interface HeavyProps13743 {
  config: DeepPartial13743<NestedConfig13743>;
  path?: ConfigPaths13743;
}

const HeavyComponent13743 = memo(function HeavyComponent13743({ config }: HeavyProps13743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13743.displayName = 'HeavyComponent13743';
export default HeavyComponent13743;
