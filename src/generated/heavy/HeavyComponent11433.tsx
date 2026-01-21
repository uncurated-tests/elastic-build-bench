'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11433<T> = T extends (infer U)[]
  ? DeepReadonlyArray11433<U>
  : T extends object
  ? DeepReadonlyObject11433<T>
  : T;

interface DeepReadonlyArray11433<T> extends ReadonlyArray<DeepReadonly11433<T>> {}

type DeepReadonlyObject11433<T> = {
  readonly [P in keyof T]: DeepReadonly11433<T[P]>;
};

type UnionToIntersection11433<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11433<T> = UnionToIntersection11433<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11433<T extends unknown[], V> = [...T, V];

type TuplifyUnion11433<T, L = LastOf11433<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11433<TuplifyUnion11433<Exclude<T, L>>, L>;

type DeepPartial11433<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11433<T[P]> }
  : T;

type Paths11433<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11433<K, Paths11433<T[K], Prev11433[D]>> : never }[keyof T]
  : never;

type Prev11433 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11433<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11433 {
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

type ConfigPaths11433 = Paths11433<NestedConfig11433>;

interface HeavyProps11433 {
  config: DeepPartial11433<NestedConfig11433>;
  path?: ConfigPaths11433;
}

const HeavyComponent11433 = memo(function HeavyComponent11433({ config }: HeavyProps11433) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11433) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11433 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11433: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11433.displayName = 'HeavyComponent11433';
export default HeavyComponent11433;
