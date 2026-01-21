'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11472<T> = T extends (infer U)[]
  ? DeepReadonlyArray11472<U>
  : T extends object
  ? DeepReadonlyObject11472<T>
  : T;

interface DeepReadonlyArray11472<T> extends ReadonlyArray<DeepReadonly11472<T>> {}

type DeepReadonlyObject11472<T> = {
  readonly [P in keyof T]: DeepReadonly11472<T[P]>;
};

type UnionToIntersection11472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11472<T> = UnionToIntersection11472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11472<T extends unknown[], V> = [...T, V];

type TuplifyUnion11472<T, L = LastOf11472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11472<TuplifyUnion11472<Exclude<T, L>>, L>;

type DeepPartial11472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11472<T[P]> }
  : T;

type Paths11472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11472<K, Paths11472<T[K], Prev11472[D]>> : never }[keyof T]
  : never;

type Prev11472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11472 {
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

type ConfigPaths11472 = Paths11472<NestedConfig11472>;

interface HeavyProps11472 {
  config: DeepPartial11472<NestedConfig11472>;
  path?: ConfigPaths11472;
}

const HeavyComponent11472 = memo(function HeavyComponent11472({ config }: HeavyProps11472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11472.displayName = 'HeavyComponent11472';
export default HeavyComponent11472;
