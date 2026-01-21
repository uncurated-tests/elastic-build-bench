'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11600<T> = T extends (infer U)[]
  ? DeepReadonlyArray11600<U>
  : T extends object
  ? DeepReadonlyObject11600<T>
  : T;

interface DeepReadonlyArray11600<T> extends ReadonlyArray<DeepReadonly11600<T>> {}

type DeepReadonlyObject11600<T> = {
  readonly [P in keyof T]: DeepReadonly11600<T[P]>;
};

type UnionToIntersection11600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11600<T> = UnionToIntersection11600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11600<T extends unknown[], V> = [...T, V];

type TuplifyUnion11600<T, L = LastOf11600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11600<TuplifyUnion11600<Exclude<T, L>>, L>;

type DeepPartial11600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11600<T[P]> }
  : T;

type Paths11600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11600<K, Paths11600<T[K], Prev11600[D]>> : never }[keyof T]
  : never;

type Prev11600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11600 {
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

type ConfigPaths11600 = Paths11600<NestedConfig11600>;

interface HeavyProps11600 {
  config: DeepPartial11600<NestedConfig11600>;
  path?: ConfigPaths11600;
}

const HeavyComponent11600 = memo(function HeavyComponent11600({ config }: HeavyProps11600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11600.displayName = 'HeavyComponent11600';
export default HeavyComponent11600;
