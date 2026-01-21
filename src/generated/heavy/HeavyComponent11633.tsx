'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11633<T> = T extends (infer U)[]
  ? DeepReadonlyArray11633<U>
  : T extends object
  ? DeepReadonlyObject11633<T>
  : T;

interface DeepReadonlyArray11633<T> extends ReadonlyArray<DeepReadonly11633<T>> {}

type DeepReadonlyObject11633<T> = {
  readonly [P in keyof T]: DeepReadonly11633<T[P]>;
};

type UnionToIntersection11633<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11633<T> = UnionToIntersection11633<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11633<T extends unknown[], V> = [...T, V];

type TuplifyUnion11633<T, L = LastOf11633<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11633<TuplifyUnion11633<Exclude<T, L>>, L>;

type DeepPartial11633<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11633<T[P]> }
  : T;

type Paths11633<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11633<K, Paths11633<T[K], Prev11633[D]>> : never }[keyof T]
  : never;

type Prev11633 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11633<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11633 {
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

type ConfigPaths11633 = Paths11633<NestedConfig11633>;

interface HeavyProps11633 {
  config: DeepPartial11633<NestedConfig11633>;
  path?: ConfigPaths11633;
}

const HeavyComponent11633 = memo(function HeavyComponent11633({ config }: HeavyProps11633) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11633) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11633 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11633: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11633.displayName = 'HeavyComponent11633';
export default HeavyComponent11633;
