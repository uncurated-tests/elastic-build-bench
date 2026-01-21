'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11421<T> = T extends (infer U)[]
  ? DeepReadonlyArray11421<U>
  : T extends object
  ? DeepReadonlyObject11421<T>
  : T;

interface DeepReadonlyArray11421<T> extends ReadonlyArray<DeepReadonly11421<T>> {}

type DeepReadonlyObject11421<T> = {
  readonly [P in keyof T]: DeepReadonly11421<T[P]>;
};

type UnionToIntersection11421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11421<T> = UnionToIntersection11421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11421<T extends unknown[], V> = [...T, V];

type TuplifyUnion11421<T, L = LastOf11421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11421<TuplifyUnion11421<Exclude<T, L>>, L>;

type DeepPartial11421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11421<T[P]> }
  : T;

type Paths11421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11421<K, Paths11421<T[K], Prev11421[D]>> : never }[keyof T]
  : never;

type Prev11421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11421 {
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

type ConfigPaths11421 = Paths11421<NestedConfig11421>;

interface HeavyProps11421 {
  config: DeepPartial11421<NestedConfig11421>;
  path?: ConfigPaths11421;
}

const HeavyComponent11421 = memo(function HeavyComponent11421({ config }: HeavyProps11421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11421.displayName = 'HeavyComponent11421';
export default HeavyComponent11421;
