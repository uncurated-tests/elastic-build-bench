'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11405<T> = T extends (infer U)[]
  ? DeepReadonlyArray11405<U>
  : T extends object
  ? DeepReadonlyObject11405<T>
  : T;

interface DeepReadonlyArray11405<T> extends ReadonlyArray<DeepReadonly11405<T>> {}

type DeepReadonlyObject11405<T> = {
  readonly [P in keyof T]: DeepReadonly11405<T[P]>;
};

type UnionToIntersection11405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11405<T> = UnionToIntersection11405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11405<T extends unknown[], V> = [...T, V];

type TuplifyUnion11405<T, L = LastOf11405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11405<TuplifyUnion11405<Exclude<T, L>>, L>;

type DeepPartial11405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11405<T[P]> }
  : T;

type Paths11405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11405<K, Paths11405<T[K], Prev11405[D]>> : never }[keyof T]
  : never;

type Prev11405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11405 {
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

type ConfigPaths11405 = Paths11405<NestedConfig11405>;

interface HeavyProps11405 {
  config: DeepPartial11405<NestedConfig11405>;
  path?: ConfigPaths11405;
}

const HeavyComponent11405 = memo(function HeavyComponent11405({ config }: HeavyProps11405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11405.displayName = 'HeavyComponent11405';
export default HeavyComponent11405;
