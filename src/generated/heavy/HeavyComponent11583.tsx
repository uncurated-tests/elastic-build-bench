'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11583<T> = T extends (infer U)[]
  ? DeepReadonlyArray11583<U>
  : T extends object
  ? DeepReadonlyObject11583<T>
  : T;

interface DeepReadonlyArray11583<T> extends ReadonlyArray<DeepReadonly11583<T>> {}

type DeepReadonlyObject11583<T> = {
  readonly [P in keyof T]: DeepReadonly11583<T[P]>;
};

type UnionToIntersection11583<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11583<T> = UnionToIntersection11583<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11583<T extends unknown[], V> = [...T, V];

type TuplifyUnion11583<T, L = LastOf11583<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11583<TuplifyUnion11583<Exclude<T, L>>, L>;

type DeepPartial11583<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11583<T[P]> }
  : T;

type Paths11583<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11583<K, Paths11583<T[K], Prev11583[D]>> : never }[keyof T]
  : never;

type Prev11583 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11583<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11583 {
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

type ConfigPaths11583 = Paths11583<NestedConfig11583>;

interface HeavyProps11583 {
  config: DeepPartial11583<NestedConfig11583>;
  path?: ConfigPaths11583;
}

const HeavyComponent11583 = memo(function HeavyComponent11583({ config }: HeavyProps11583) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11583) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11583 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11583: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11583.displayName = 'HeavyComponent11583';
export default HeavyComponent11583;
