'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11214<T> = T extends (infer U)[]
  ? DeepReadonlyArray11214<U>
  : T extends object
  ? DeepReadonlyObject11214<T>
  : T;

interface DeepReadonlyArray11214<T> extends ReadonlyArray<DeepReadonly11214<T>> {}

type DeepReadonlyObject11214<T> = {
  readonly [P in keyof T]: DeepReadonly11214<T[P]>;
};

type UnionToIntersection11214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11214<T> = UnionToIntersection11214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11214<T extends unknown[], V> = [...T, V];

type TuplifyUnion11214<T, L = LastOf11214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11214<TuplifyUnion11214<Exclude<T, L>>, L>;

type DeepPartial11214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11214<T[P]> }
  : T;

type Paths11214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11214<K, Paths11214<T[K], Prev11214[D]>> : never }[keyof T]
  : never;

type Prev11214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11214 {
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

type ConfigPaths11214 = Paths11214<NestedConfig11214>;

interface HeavyProps11214 {
  config: DeepPartial11214<NestedConfig11214>;
  path?: ConfigPaths11214;
}

const HeavyComponent11214 = memo(function HeavyComponent11214({ config }: HeavyProps11214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11214.displayName = 'HeavyComponent11214';
export default HeavyComponent11214;
