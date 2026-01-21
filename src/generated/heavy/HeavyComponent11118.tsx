'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11118<T> = T extends (infer U)[]
  ? DeepReadonlyArray11118<U>
  : T extends object
  ? DeepReadonlyObject11118<T>
  : T;

interface DeepReadonlyArray11118<T> extends ReadonlyArray<DeepReadonly11118<T>> {}

type DeepReadonlyObject11118<T> = {
  readonly [P in keyof T]: DeepReadonly11118<T[P]>;
};

type UnionToIntersection11118<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11118<T> = UnionToIntersection11118<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11118<T extends unknown[], V> = [...T, V];

type TuplifyUnion11118<T, L = LastOf11118<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11118<TuplifyUnion11118<Exclude<T, L>>, L>;

type DeepPartial11118<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11118<T[P]> }
  : T;

type Paths11118<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11118<K, Paths11118<T[K], Prev11118[D]>> : never }[keyof T]
  : never;

type Prev11118 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11118<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11118 {
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

type ConfigPaths11118 = Paths11118<NestedConfig11118>;

interface HeavyProps11118 {
  config: DeepPartial11118<NestedConfig11118>;
  path?: ConfigPaths11118;
}

const HeavyComponent11118 = memo(function HeavyComponent11118({ config }: HeavyProps11118) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11118) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11118 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11118: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11118.displayName = 'HeavyComponent11118';
export default HeavyComponent11118;
