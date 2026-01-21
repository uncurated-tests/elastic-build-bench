'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13544<T> = T extends (infer U)[]
  ? DeepReadonlyArray13544<U>
  : T extends object
  ? DeepReadonlyObject13544<T>
  : T;

interface DeepReadonlyArray13544<T> extends ReadonlyArray<DeepReadonly13544<T>> {}

type DeepReadonlyObject13544<T> = {
  readonly [P in keyof T]: DeepReadonly13544<T[P]>;
};

type UnionToIntersection13544<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13544<T> = UnionToIntersection13544<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13544<T extends unknown[], V> = [...T, V];

type TuplifyUnion13544<T, L = LastOf13544<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13544<TuplifyUnion13544<Exclude<T, L>>, L>;

type DeepPartial13544<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13544<T[P]> }
  : T;

type Paths13544<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13544<K, Paths13544<T[K], Prev13544[D]>> : never }[keyof T]
  : never;

type Prev13544 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13544<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13544 {
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

type ConfigPaths13544 = Paths13544<NestedConfig13544>;

interface HeavyProps13544 {
  config: DeepPartial13544<NestedConfig13544>;
  path?: ConfigPaths13544;
}

const HeavyComponent13544 = memo(function HeavyComponent13544({ config }: HeavyProps13544) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13544) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13544 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13544: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13544.displayName = 'HeavyComponent13544';
export default HeavyComponent13544;
