'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11244<T> = T extends (infer U)[]
  ? DeepReadonlyArray11244<U>
  : T extends object
  ? DeepReadonlyObject11244<T>
  : T;

interface DeepReadonlyArray11244<T> extends ReadonlyArray<DeepReadonly11244<T>> {}

type DeepReadonlyObject11244<T> = {
  readonly [P in keyof T]: DeepReadonly11244<T[P]>;
};

type UnionToIntersection11244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11244<T> = UnionToIntersection11244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11244<T extends unknown[], V> = [...T, V];

type TuplifyUnion11244<T, L = LastOf11244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11244<TuplifyUnion11244<Exclude<T, L>>, L>;

type DeepPartial11244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11244<T[P]> }
  : T;

type Paths11244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11244<K, Paths11244<T[K], Prev11244[D]>> : never }[keyof T]
  : never;

type Prev11244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11244 {
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

type ConfigPaths11244 = Paths11244<NestedConfig11244>;

interface HeavyProps11244 {
  config: DeepPartial11244<NestedConfig11244>;
  path?: ConfigPaths11244;
}

const HeavyComponent11244 = memo(function HeavyComponent11244({ config }: HeavyProps11244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11244.displayName = 'HeavyComponent11244';
export default HeavyComponent11244;
