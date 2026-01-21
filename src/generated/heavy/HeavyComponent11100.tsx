'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11100<T> = T extends (infer U)[]
  ? DeepReadonlyArray11100<U>
  : T extends object
  ? DeepReadonlyObject11100<T>
  : T;

interface DeepReadonlyArray11100<T> extends ReadonlyArray<DeepReadonly11100<T>> {}

type DeepReadonlyObject11100<T> = {
  readonly [P in keyof T]: DeepReadonly11100<T[P]>;
};

type UnionToIntersection11100<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11100<T> = UnionToIntersection11100<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11100<T extends unknown[], V> = [...T, V];

type TuplifyUnion11100<T, L = LastOf11100<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11100<TuplifyUnion11100<Exclude<T, L>>, L>;

type DeepPartial11100<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11100<T[P]> }
  : T;

type Paths11100<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11100<K, Paths11100<T[K], Prev11100[D]>> : never }[keyof T]
  : never;

type Prev11100 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11100<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11100 {
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

type ConfigPaths11100 = Paths11100<NestedConfig11100>;

interface HeavyProps11100 {
  config: DeepPartial11100<NestedConfig11100>;
  path?: ConfigPaths11100;
}

const HeavyComponent11100 = memo(function HeavyComponent11100({ config }: HeavyProps11100) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11100) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11100 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11100: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11100.displayName = 'HeavyComponent11100';
export default HeavyComponent11100;
