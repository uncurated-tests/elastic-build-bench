'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11581<T> = T extends (infer U)[]
  ? DeepReadonlyArray11581<U>
  : T extends object
  ? DeepReadonlyObject11581<T>
  : T;

interface DeepReadonlyArray11581<T> extends ReadonlyArray<DeepReadonly11581<T>> {}

type DeepReadonlyObject11581<T> = {
  readonly [P in keyof T]: DeepReadonly11581<T[P]>;
};

type UnionToIntersection11581<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11581<T> = UnionToIntersection11581<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11581<T extends unknown[], V> = [...T, V];

type TuplifyUnion11581<T, L = LastOf11581<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11581<TuplifyUnion11581<Exclude<T, L>>, L>;

type DeepPartial11581<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11581<T[P]> }
  : T;

type Paths11581<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11581<K, Paths11581<T[K], Prev11581[D]>> : never }[keyof T]
  : never;

type Prev11581 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11581<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11581 {
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

type ConfigPaths11581 = Paths11581<NestedConfig11581>;

interface HeavyProps11581 {
  config: DeepPartial11581<NestedConfig11581>;
  path?: ConfigPaths11581;
}

const HeavyComponent11581 = memo(function HeavyComponent11581({ config }: HeavyProps11581) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11581) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11581 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11581: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11581.displayName = 'HeavyComponent11581';
export default HeavyComponent11581;
