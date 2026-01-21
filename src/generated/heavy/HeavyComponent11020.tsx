'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11020<T> = T extends (infer U)[]
  ? DeepReadonlyArray11020<U>
  : T extends object
  ? DeepReadonlyObject11020<T>
  : T;

interface DeepReadonlyArray11020<T> extends ReadonlyArray<DeepReadonly11020<T>> {}

type DeepReadonlyObject11020<T> = {
  readonly [P in keyof T]: DeepReadonly11020<T[P]>;
};

type UnionToIntersection11020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11020<T> = UnionToIntersection11020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11020<T extends unknown[], V> = [...T, V];

type TuplifyUnion11020<T, L = LastOf11020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11020<TuplifyUnion11020<Exclude<T, L>>, L>;

type DeepPartial11020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11020<T[P]> }
  : T;

type Paths11020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11020<K, Paths11020<T[K], Prev11020[D]>> : never }[keyof T]
  : never;

type Prev11020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11020 {
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

type ConfigPaths11020 = Paths11020<NestedConfig11020>;

interface HeavyProps11020 {
  config: DeepPartial11020<NestedConfig11020>;
  path?: ConfigPaths11020;
}

const HeavyComponent11020 = memo(function HeavyComponent11020({ config }: HeavyProps11020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11020.displayName = 'HeavyComponent11020';
export default HeavyComponent11020;
