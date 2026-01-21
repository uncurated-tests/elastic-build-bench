'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11400<T> = T extends (infer U)[]
  ? DeepReadonlyArray11400<U>
  : T extends object
  ? DeepReadonlyObject11400<T>
  : T;

interface DeepReadonlyArray11400<T> extends ReadonlyArray<DeepReadonly11400<T>> {}

type DeepReadonlyObject11400<T> = {
  readonly [P in keyof T]: DeepReadonly11400<T[P]>;
};

type UnionToIntersection11400<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11400<T> = UnionToIntersection11400<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11400<T extends unknown[], V> = [...T, V];

type TuplifyUnion11400<T, L = LastOf11400<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11400<TuplifyUnion11400<Exclude<T, L>>, L>;

type DeepPartial11400<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11400<T[P]> }
  : T;

type Paths11400<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11400<K, Paths11400<T[K], Prev11400[D]>> : never }[keyof T]
  : never;

type Prev11400 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11400<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11400 {
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

type ConfigPaths11400 = Paths11400<NestedConfig11400>;

interface HeavyProps11400 {
  config: DeepPartial11400<NestedConfig11400>;
  path?: ConfigPaths11400;
}

const HeavyComponent11400 = memo(function HeavyComponent11400({ config }: HeavyProps11400) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11400) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11400 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11400: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11400.displayName = 'HeavyComponent11400';
export default HeavyComponent11400;
