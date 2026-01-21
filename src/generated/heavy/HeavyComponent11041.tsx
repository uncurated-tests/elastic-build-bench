'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11041<T> = T extends (infer U)[]
  ? DeepReadonlyArray11041<U>
  : T extends object
  ? DeepReadonlyObject11041<T>
  : T;

interface DeepReadonlyArray11041<T> extends ReadonlyArray<DeepReadonly11041<T>> {}

type DeepReadonlyObject11041<T> = {
  readonly [P in keyof T]: DeepReadonly11041<T[P]>;
};

type UnionToIntersection11041<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11041<T> = UnionToIntersection11041<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11041<T extends unknown[], V> = [...T, V];

type TuplifyUnion11041<T, L = LastOf11041<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11041<TuplifyUnion11041<Exclude<T, L>>, L>;

type DeepPartial11041<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11041<T[P]> }
  : T;

type Paths11041<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11041<K, Paths11041<T[K], Prev11041[D]>> : never }[keyof T]
  : never;

type Prev11041 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11041<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11041 {
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

type ConfigPaths11041 = Paths11041<NestedConfig11041>;

interface HeavyProps11041 {
  config: DeepPartial11041<NestedConfig11041>;
  path?: ConfigPaths11041;
}

const HeavyComponent11041 = memo(function HeavyComponent11041({ config }: HeavyProps11041) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11041) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11041 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11041: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11041.displayName = 'HeavyComponent11041';
export default HeavyComponent11041;
