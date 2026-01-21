'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11042<T> = T extends (infer U)[]
  ? DeepReadonlyArray11042<U>
  : T extends object
  ? DeepReadonlyObject11042<T>
  : T;

interface DeepReadonlyArray11042<T> extends ReadonlyArray<DeepReadonly11042<T>> {}

type DeepReadonlyObject11042<T> = {
  readonly [P in keyof T]: DeepReadonly11042<T[P]>;
};

type UnionToIntersection11042<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11042<T> = UnionToIntersection11042<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11042<T extends unknown[], V> = [...T, V];

type TuplifyUnion11042<T, L = LastOf11042<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11042<TuplifyUnion11042<Exclude<T, L>>, L>;

type DeepPartial11042<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11042<T[P]> }
  : T;

type Paths11042<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11042<K, Paths11042<T[K], Prev11042[D]>> : never }[keyof T]
  : never;

type Prev11042 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11042<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11042 {
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

type ConfigPaths11042 = Paths11042<NestedConfig11042>;

interface HeavyProps11042 {
  config: DeepPartial11042<NestedConfig11042>;
  path?: ConfigPaths11042;
}

const HeavyComponent11042 = memo(function HeavyComponent11042({ config }: HeavyProps11042) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11042) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11042 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11042: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11042.displayName = 'HeavyComponent11042';
export default HeavyComponent11042;
