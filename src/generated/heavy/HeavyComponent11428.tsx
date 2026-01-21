'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11428<T> = T extends (infer U)[]
  ? DeepReadonlyArray11428<U>
  : T extends object
  ? DeepReadonlyObject11428<T>
  : T;

interface DeepReadonlyArray11428<T> extends ReadonlyArray<DeepReadonly11428<T>> {}

type DeepReadonlyObject11428<T> = {
  readonly [P in keyof T]: DeepReadonly11428<T[P]>;
};

type UnionToIntersection11428<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11428<T> = UnionToIntersection11428<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11428<T extends unknown[], V> = [...T, V];

type TuplifyUnion11428<T, L = LastOf11428<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11428<TuplifyUnion11428<Exclude<T, L>>, L>;

type DeepPartial11428<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11428<T[P]> }
  : T;

type Paths11428<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11428<K, Paths11428<T[K], Prev11428[D]>> : never }[keyof T]
  : never;

type Prev11428 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11428<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11428 {
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

type ConfigPaths11428 = Paths11428<NestedConfig11428>;

interface HeavyProps11428 {
  config: DeepPartial11428<NestedConfig11428>;
  path?: ConfigPaths11428;
}

const HeavyComponent11428 = memo(function HeavyComponent11428({ config }: HeavyProps11428) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11428) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11428 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11428: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11428.displayName = 'HeavyComponent11428';
export default HeavyComponent11428;
