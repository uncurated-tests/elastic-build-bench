'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11623<T> = T extends (infer U)[]
  ? DeepReadonlyArray11623<U>
  : T extends object
  ? DeepReadonlyObject11623<T>
  : T;

interface DeepReadonlyArray11623<T> extends ReadonlyArray<DeepReadonly11623<T>> {}

type DeepReadonlyObject11623<T> = {
  readonly [P in keyof T]: DeepReadonly11623<T[P]>;
};

type UnionToIntersection11623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11623<T> = UnionToIntersection11623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11623<T extends unknown[], V> = [...T, V];

type TuplifyUnion11623<T, L = LastOf11623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11623<TuplifyUnion11623<Exclude<T, L>>, L>;

type DeepPartial11623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11623<T[P]> }
  : T;

type Paths11623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11623<K, Paths11623<T[K], Prev11623[D]>> : never }[keyof T]
  : never;

type Prev11623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11623 {
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

type ConfigPaths11623 = Paths11623<NestedConfig11623>;

interface HeavyProps11623 {
  config: DeepPartial11623<NestedConfig11623>;
  path?: ConfigPaths11623;
}

const HeavyComponent11623 = memo(function HeavyComponent11623({ config }: HeavyProps11623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11623.displayName = 'HeavyComponent11623';
export default HeavyComponent11623;
