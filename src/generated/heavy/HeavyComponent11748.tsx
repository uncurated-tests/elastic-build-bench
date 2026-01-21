'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11748<T> = T extends (infer U)[]
  ? DeepReadonlyArray11748<U>
  : T extends object
  ? DeepReadonlyObject11748<T>
  : T;

interface DeepReadonlyArray11748<T> extends ReadonlyArray<DeepReadonly11748<T>> {}

type DeepReadonlyObject11748<T> = {
  readonly [P in keyof T]: DeepReadonly11748<T[P]>;
};

type UnionToIntersection11748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11748<T> = UnionToIntersection11748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11748<T extends unknown[], V> = [...T, V];

type TuplifyUnion11748<T, L = LastOf11748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11748<TuplifyUnion11748<Exclude<T, L>>, L>;

type DeepPartial11748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11748<T[P]> }
  : T;

type Paths11748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11748<K, Paths11748<T[K], Prev11748[D]>> : never }[keyof T]
  : never;

type Prev11748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11748 {
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

type ConfigPaths11748 = Paths11748<NestedConfig11748>;

interface HeavyProps11748 {
  config: DeepPartial11748<NestedConfig11748>;
  path?: ConfigPaths11748;
}

const HeavyComponent11748 = memo(function HeavyComponent11748({ config }: HeavyProps11748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11748.displayName = 'HeavyComponent11748';
export default HeavyComponent11748;
