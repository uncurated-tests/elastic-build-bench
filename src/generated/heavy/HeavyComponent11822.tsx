'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11822<T> = T extends (infer U)[]
  ? DeepReadonlyArray11822<U>
  : T extends object
  ? DeepReadonlyObject11822<T>
  : T;

interface DeepReadonlyArray11822<T> extends ReadonlyArray<DeepReadonly11822<T>> {}

type DeepReadonlyObject11822<T> = {
  readonly [P in keyof T]: DeepReadonly11822<T[P]>;
};

type UnionToIntersection11822<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11822<T> = UnionToIntersection11822<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11822<T extends unknown[], V> = [...T, V];

type TuplifyUnion11822<T, L = LastOf11822<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11822<TuplifyUnion11822<Exclude<T, L>>, L>;

type DeepPartial11822<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11822<T[P]> }
  : T;

type Paths11822<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11822<K, Paths11822<T[K], Prev11822[D]>> : never }[keyof T]
  : never;

type Prev11822 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11822<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11822 {
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

type ConfigPaths11822 = Paths11822<NestedConfig11822>;

interface HeavyProps11822 {
  config: DeepPartial11822<NestedConfig11822>;
  path?: ConfigPaths11822;
}

const HeavyComponent11822 = memo(function HeavyComponent11822({ config }: HeavyProps11822) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11822) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11822 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11822: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11822.displayName = 'HeavyComponent11822';
export default HeavyComponent11822;
