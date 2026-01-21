'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11737<T> = T extends (infer U)[]
  ? DeepReadonlyArray11737<U>
  : T extends object
  ? DeepReadonlyObject11737<T>
  : T;

interface DeepReadonlyArray11737<T> extends ReadonlyArray<DeepReadonly11737<T>> {}

type DeepReadonlyObject11737<T> = {
  readonly [P in keyof T]: DeepReadonly11737<T[P]>;
};

type UnionToIntersection11737<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11737<T> = UnionToIntersection11737<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11737<T extends unknown[], V> = [...T, V];

type TuplifyUnion11737<T, L = LastOf11737<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11737<TuplifyUnion11737<Exclude<T, L>>, L>;

type DeepPartial11737<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11737<T[P]> }
  : T;

type Paths11737<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11737<K, Paths11737<T[K], Prev11737[D]>> : never }[keyof T]
  : never;

type Prev11737 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11737<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11737 {
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

type ConfigPaths11737 = Paths11737<NestedConfig11737>;

interface HeavyProps11737 {
  config: DeepPartial11737<NestedConfig11737>;
  path?: ConfigPaths11737;
}

const HeavyComponent11737 = memo(function HeavyComponent11737({ config }: HeavyProps11737) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11737) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11737 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11737: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11737.displayName = 'HeavyComponent11737';
export default HeavyComponent11737;
