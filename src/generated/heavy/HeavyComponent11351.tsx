'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11351<T> = T extends (infer U)[]
  ? DeepReadonlyArray11351<U>
  : T extends object
  ? DeepReadonlyObject11351<T>
  : T;

interface DeepReadonlyArray11351<T> extends ReadonlyArray<DeepReadonly11351<T>> {}

type DeepReadonlyObject11351<T> = {
  readonly [P in keyof T]: DeepReadonly11351<T[P]>;
};

type UnionToIntersection11351<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11351<T> = UnionToIntersection11351<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11351<T extends unknown[], V> = [...T, V];

type TuplifyUnion11351<T, L = LastOf11351<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11351<TuplifyUnion11351<Exclude<T, L>>, L>;

type DeepPartial11351<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11351<T[P]> }
  : T;

type Paths11351<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11351<K, Paths11351<T[K], Prev11351[D]>> : never }[keyof T]
  : never;

type Prev11351 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11351<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11351 {
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

type ConfigPaths11351 = Paths11351<NestedConfig11351>;

interface HeavyProps11351 {
  config: DeepPartial11351<NestedConfig11351>;
  path?: ConfigPaths11351;
}

const HeavyComponent11351 = memo(function HeavyComponent11351({ config }: HeavyProps11351) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11351) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11351 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11351: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11351.displayName = 'HeavyComponent11351';
export default HeavyComponent11351;
