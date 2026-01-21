'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13519<T> = T extends (infer U)[]
  ? DeepReadonlyArray13519<U>
  : T extends object
  ? DeepReadonlyObject13519<T>
  : T;

interface DeepReadonlyArray13519<T> extends ReadonlyArray<DeepReadonly13519<T>> {}

type DeepReadonlyObject13519<T> = {
  readonly [P in keyof T]: DeepReadonly13519<T[P]>;
};

type UnionToIntersection13519<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13519<T> = UnionToIntersection13519<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13519<T extends unknown[], V> = [...T, V];

type TuplifyUnion13519<T, L = LastOf13519<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13519<TuplifyUnion13519<Exclude<T, L>>, L>;

type DeepPartial13519<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13519<T[P]> }
  : T;

type Paths13519<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13519<K, Paths13519<T[K], Prev13519[D]>> : never }[keyof T]
  : never;

type Prev13519 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13519<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13519 {
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

type ConfigPaths13519 = Paths13519<NestedConfig13519>;

interface HeavyProps13519 {
  config: DeepPartial13519<NestedConfig13519>;
  path?: ConfigPaths13519;
}

const HeavyComponent13519 = memo(function HeavyComponent13519({ config }: HeavyProps13519) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13519) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13519 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13519: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13519.displayName = 'HeavyComponent13519';
export default HeavyComponent13519;
