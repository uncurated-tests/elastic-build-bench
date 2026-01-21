'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11817<T> = T extends (infer U)[]
  ? DeepReadonlyArray11817<U>
  : T extends object
  ? DeepReadonlyObject11817<T>
  : T;

interface DeepReadonlyArray11817<T> extends ReadonlyArray<DeepReadonly11817<T>> {}

type DeepReadonlyObject11817<T> = {
  readonly [P in keyof T]: DeepReadonly11817<T[P]>;
};

type UnionToIntersection11817<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11817<T> = UnionToIntersection11817<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11817<T extends unknown[], V> = [...T, V];

type TuplifyUnion11817<T, L = LastOf11817<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11817<TuplifyUnion11817<Exclude<T, L>>, L>;

type DeepPartial11817<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11817<T[P]> }
  : T;

type Paths11817<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11817<K, Paths11817<T[K], Prev11817[D]>> : never }[keyof T]
  : never;

type Prev11817 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11817<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11817 {
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

type ConfigPaths11817 = Paths11817<NestedConfig11817>;

interface HeavyProps11817 {
  config: DeepPartial11817<NestedConfig11817>;
  path?: ConfigPaths11817;
}

const HeavyComponent11817 = memo(function HeavyComponent11817({ config }: HeavyProps11817) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11817) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11817 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11817: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11817.displayName = 'HeavyComponent11817';
export default HeavyComponent11817;
