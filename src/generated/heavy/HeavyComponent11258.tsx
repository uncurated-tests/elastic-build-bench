'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11258<T> = T extends (infer U)[]
  ? DeepReadonlyArray11258<U>
  : T extends object
  ? DeepReadonlyObject11258<T>
  : T;

interface DeepReadonlyArray11258<T> extends ReadonlyArray<DeepReadonly11258<T>> {}

type DeepReadonlyObject11258<T> = {
  readonly [P in keyof T]: DeepReadonly11258<T[P]>;
};

type UnionToIntersection11258<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11258<T> = UnionToIntersection11258<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11258<T extends unknown[], V> = [...T, V];

type TuplifyUnion11258<T, L = LastOf11258<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11258<TuplifyUnion11258<Exclude<T, L>>, L>;

type DeepPartial11258<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11258<T[P]> }
  : T;

type Paths11258<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11258<K, Paths11258<T[K], Prev11258[D]>> : never }[keyof T]
  : never;

type Prev11258 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11258<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11258 {
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

type ConfigPaths11258 = Paths11258<NestedConfig11258>;

interface HeavyProps11258 {
  config: DeepPartial11258<NestedConfig11258>;
  path?: ConfigPaths11258;
}

const HeavyComponent11258 = memo(function HeavyComponent11258({ config }: HeavyProps11258) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11258) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11258 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11258: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11258.displayName = 'HeavyComponent11258';
export default HeavyComponent11258;
