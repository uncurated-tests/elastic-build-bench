'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11591<T> = T extends (infer U)[]
  ? DeepReadonlyArray11591<U>
  : T extends object
  ? DeepReadonlyObject11591<T>
  : T;

interface DeepReadonlyArray11591<T> extends ReadonlyArray<DeepReadonly11591<T>> {}

type DeepReadonlyObject11591<T> = {
  readonly [P in keyof T]: DeepReadonly11591<T[P]>;
};

type UnionToIntersection11591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11591<T> = UnionToIntersection11591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11591<T extends unknown[], V> = [...T, V];

type TuplifyUnion11591<T, L = LastOf11591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11591<TuplifyUnion11591<Exclude<T, L>>, L>;

type DeepPartial11591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11591<T[P]> }
  : T;

type Paths11591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11591<K, Paths11591<T[K], Prev11591[D]>> : never }[keyof T]
  : never;

type Prev11591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11591 {
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

type ConfigPaths11591 = Paths11591<NestedConfig11591>;

interface HeavyProps11591 {
  config: DeepPartial11591<NestedConfig11591>;
  path?: ConfigPaths11591;
}

const HeavyComponent11591 = memo(function HeavyComponent11591({ config }: HeavyProps11591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11591.displayName = 'HeavyComponent11591';
export default HeavyComponent11591;
