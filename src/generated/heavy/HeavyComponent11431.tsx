'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11431<T> = T extends (infer U)[]
  ? DeepReadonlyArray11431<U>
  : T extends object
  ? DeepReadonlyObject11431<T>
  : T;

interface DeepReadonlyArray11431<T> extends ReadonlyArray<DeepReadonly11431<T>> {}

type DeepReadonlyObject11431<T> = {
  readonly [P in keyof T]: DeepReadonly11431<T[P]>;
};

type UnionToIntersection11431<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11431<T> = UnionToIntersection11431<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11431<T extends unknown[], V> = [...T, V];

type TuplifyUnion11431<T, L = LastOf11431<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11431<TuplifyUnion11431<Exclude<T, L>>, L>;

type DeepPartial11431<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11431<T[P]> }
  : T;

type Paths11431<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11431<K, Paths11431<T[K], Prev11431[D]>> : never }[keyof T]
  : never;

type Prev11431 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11431<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11431 {
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

type ConfigPaths11431 = Paths11431<NestedConfig11431>;

interface HeavyProps11431 {
  config: DeepPartial11431<NestedConfig11431>;
  path?: ConfigPaths11431;
}

const HeavyComponent11431 = memo(function HeavyComponent11431({ config }: HeavyProps11431) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11431) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11431 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11431: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11431.displayName = 'HeavyComponent11431';
export default HeavyComponent11431;
