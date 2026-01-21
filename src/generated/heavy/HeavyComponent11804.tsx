'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11804<T> = T extends (infer U)[]
  ? DeepReadonlyArray11804<U>
  : T extends object
  ? DeepReadonlyObject11804<T>
  : T;

interface DeepReadonlyArray11804<T> extends ReadonlyArray<DeepReadonly11804<T>> {}

type DeepReadonlyObject11804<T> = {
  readonly [P in keyof T]: DeepReadonly11804<T[P]>;
};

type UnionToIntersection11804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11804<T> = UnionToIntersection11804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11804<T extends unknown[], V> = [...T, V];

type TuplifyUnion11804<T, L = LastOf11804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11804<TuplifyUnion11804<Exclude<T, L>>, L>;

type DeepPartial11804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11804<T[P]> }
  : T;

type Paths11804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11804<K, Paths11804<T[K], Prev11804[D]>> : never }[keyof T]
  : never;

type Prev11804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11804 {
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

type ConfigPaths11804 = Paths11804<NestedConfig11804>;

interface HeavyProps11804 {
  config: DeepPartial11804<NestedConfig11804>;
  path?: ConfigPaths11804;
}

const HeavyComponent11804 = memo(function HeavyComponent11804({ config }: HeavyProps11804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11804.displayName = 'HeavyComponent11804';
export default HeavyComponent11804;
