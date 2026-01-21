'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11736<T> = T extends (infer U)[]
  ? DeepReadonlyArray11736<U>
  : T extends object
  ? DeepReadonlyObject11736<T>
  : T;

interface DeepReadonlyArray11736<T> extends ReadonlyArray<DeepReadonly11736<T>> {}

type DeepReadonlyObject11736<T> = {
  readonly [P in keyof T]: DeepReadonly11736<T[P]>;
};

type UnionToIntersection11736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11736<T> = UnionToIntersection11736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11736<T extends unknown[], V> = [...T, V];

type TuplifyUnion11736<T, L = LastOf11736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11736<TuplifyUnion11736<Exclude<T, L>>, L>;

type DeepPartial11736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11736<T[P]> }
  : T;

type Paths11736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11736<K, Paths11736<T[K], Prev11736[D]>> : never }[keyof T]
  : never;

type Prev11736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11736 {
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

type ConfigPaths11736 = Paths11736<NestedConfig11736>;

interface HeavyProps11736 {
  config: DeepPartial11736<NestedConfig11736>;
  path?: ConfigPaths11736;
}

const HeavyComponent11736 = memo(function HeavyComponent11736({ config }: HeavyProps11736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11736.displayName = 'HeavyComponent11736';
export default HeavyComponent11736;
