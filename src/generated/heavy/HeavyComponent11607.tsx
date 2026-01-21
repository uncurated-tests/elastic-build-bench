'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11607<T> = T extends (infer U)[]
  ? DeepReadonlyArray11607<U>
  : T extends object
  ? DeepReadonlyObject11607<T>
  : T;

interface DeepReadonlyArray11607<T> extends ReadonlyArray<DeepReadonly11607<T>> {}

type DeepReadonlyObject11607<T> = {
  readonly [P in keyof T]: DeepReadonly11607<T[P]>;
};

type UnionToIntersection11607<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11607<T> = UnionToIntersection11607<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11607<T extends unknown[], V> = [...T, V];

type TuplifyUnion11607<T, L = LastOf11607<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11607<TuplifyUnion11607<Exclude<T, L>>, L>;

type DeepPartial11607<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11607<T[P]> }
  : T;

type Paths11607<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11607<K, Paths11607<T[K], Prev11607[D]>> : never }[keyof T]
  : never;

type Prev11607 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11607<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11607 {
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

type ConfigPaths11607 = Paths11607<NestedConfig11607>;

interface HeavyProps11607 {
  config: DeepPartial11607<NestedConfig11607>;
  path?: ConfigPaths11607;
}

const HeavyComponent11607 = memo(function HeavyComponent11607({ config }: HeavyProps11607) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11607) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11607 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11607: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11607.displayName = 'HeavyComponent11607';
export default HeavyComponent11607;
