'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11134<T> = T extends (infer U)[]
  ? DeepReadonlyArray11134<U>
  : T extends object
  ? DeepReadonlyObject11134<T>
  : T;

interface DeepReadonlyArray11134<T> extends ReadonlyArray<DeepReadonly11134<T>> {}

type DeepReadonlyObject11134<T> = {
  readonly [P in keyof T]: DeepReadonly11134<T[P]>;
};

type UnionToIntersection11134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11134<T> = UnionToIntersection11134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11134<T extends unknown[], V> = [...T, V];

type TuplifyUnion11134<T, L = LastOf11134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11134<TuplifyUnion11134<Exclude<T, L>>, L>;

type DeepPartial11134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11134<T[P]> }
  : T;

type Paths11134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11134<K, Paths11134<T[K], Prev11134[D]>> : never }[keyof T]
  : never;

type Prev11134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11134 {
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

type ConfigPaths11134 = Paths11134<NestedConfig11134>;

interface HeavyProps11134 {
  config: DeepPartial11134<NestedConfig11134>;
  path?: ConfigPaths11134;
}

const HeavyComponent11134 = memo(function HeavyComponent11134({ config }: HeavyProps11134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11134.displayName = 'HeavyComponent11134';
export default HeavyComponent11134;
