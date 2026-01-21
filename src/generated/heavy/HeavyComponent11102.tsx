'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11102<T> = T extends (infer U)[]
  ? DeepReadonlyArray11102<U>
  : T extends object
  ? DeepReadonlyObject11102<T>
  : T;

interface DeepReadonlyArray11102<T> extends ReadonlyArray<DeepReadonly11102<T>> {}

type DeepReadonlyObject11102<T> = {
  readonly [P in keyof T]: DeepReadonly11102<T[P]>;
};

type UnionToIntersection11102<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11102<T> = UnionToIntersection11102<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11102<T extends unknown[], V> = [...T, V];

type TuplifyUnion11102<T, L = LastOf11102<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11102<TuplifyUnion11102<Exclude<T, L>>, L>;

type DeepPartial11102<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11102<T[P]> }
  : T;

type Paths11102<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11102<K, Paths11102<T[K], Prev11102[D]>> : never }[keyof T]
  : never;

type Prev11102 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11102<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11102 {
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

type ConfigPaths11102 = Paths11102<NestedConfig11102>;

interface HeavyProps11102 {
  config: DeepPartial11102<NestedConfig11102>;
  path?: ConfigPaths11102;
}

const HeavyComponent11102 = memo(function HeavyComponent11102({ config }: HeavyProps11102) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11102) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11102 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11102: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11102.displayName = 'HeavyComponent11102';
export default HeavyComponent11102;
