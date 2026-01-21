'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11841<T> = T extends (infer U)[]
  ? DeepReadonlyArray11841<U>
  : T extends object
  ? DeepReadonlyObject11841<T>
  : T;

interface DeepReadonlyArray11841<T> extends ReadonlyArray<DeepReadonly11841<T>> {}

type DeepReadonlyObject11841<T> = {
  readonly [P in keyof T]: DeepReadonly11841<T[P]>;
};

type UnionToIntersection11841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11841<T> = UnionToIntersection11841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11841<T extends unknown[], V> = [...T, V];

type TuplifyUnion11841<T, L = LastOf11841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11841<TuplifyUnion11841<Exclude<T, L>>, L>;

type DeepPartial11841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11841<T[P]> }
  : T;

type Paths11841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11841<K, Paths11841<T[K], Prev11841[D]>> : never }[keyof T]
  : never;

type Prev11841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11841 {
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

type ConfigPaths11841 = Paths11841<NestedConfig11841>;

interface HeavyProps11841 {
  config: DeepPartial11841<NestedConfig11841>;
  path?: ConfigPaths11841;
}

const HeavyComponent11841 = memo(function HeavyComponent11841({ config }: HeavyProps11841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11841.displayName = 'HeavyComponent11841';
export default HeavyComponent11841;
