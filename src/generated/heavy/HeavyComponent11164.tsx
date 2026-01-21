'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11164<T> = T extends (infer U)[]
  ? DeepReadonlyArray11164<U>
  : T extends object
  ? DeepReadonlyObject11164<T>
  : T;

interface DeepReadonlyArray11164<T> extends ReadonlyArray<DeepReadonly11164<T>> {}

type DeepReadonlyObject11164<T> = {
  readonly [P in keyof T]: DeepReadonly11164<T[P]>;
};

type UnionToIntersection11164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11164<T> = UnionToIntersection11164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11164<T extends unknown[], V> = [...T, V];

type TuplifyUnion11164<T, L = LastOf11164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11164<TuplifyUnion11164<Exclude<T, L>>, L>;

type DeepPartial11164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11164<T[P]> }
  : T;

type Paths11164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11164<K, Paths11164<T[K], Prev11164[D]>> : never }[keyof T]
  : never;

type Prev11164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11164 {
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

type ConfigPaths11164 = Paths11164<NestedConfig11164>;

interface HeavyProps11164 {
  config: DeepPartial11164<NestedConfig11164>;
  path?: ConfigPaths11164;
}

const HeavyComponent11164 = memo(function HeavyComponent11164({ config }: HeavyProps11164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11164.displayName = 'HeavyComponent11164';
export default HeavyComponent11164;
