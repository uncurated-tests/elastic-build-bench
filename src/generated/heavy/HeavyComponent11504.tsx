'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11504<T> = T extends (infer U)[]
  ? DeepReadonlyArray11504<U>
  : T extends object
  ? DeepReadonlyObject11504<T>
  : T;

interface DeepReadonlyArray11504<T> extends ReadonlyArray<DeepReadonly11504<T>> {}

type DeepReadonlyObject11504<T> = {
  readonly [P in keyof T]: DeepReadonly11504<T[P]>;
};

type UnionToIntersection11504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11504<T> = UnionToIntersection11504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11504<T extends unknown[], V> = [...T, V];

type TuplifyUnion11504<T, L = LastOf11504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11504<TuplifyUnion11504<Exclude<T, L>>, L>;

type DeepPartial11504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11504<T[P]> }
  : T;

type Paths11504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11504<K, Paths11504<T[K], Prev11504[D]>> : never }[keyof T]
  : never;

type Prev11504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11504 {
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

type ConfigPaths11504 = Paths11504<NestedConfig11504>;

interface HeavyProps11504 {
  config: DeepPartial11504<NestedConfig11504>;
  path?: ConfigPaths11504;
}

const HeavyComponent11504 = memo(function HeavyComponent11504({ config }: HeavyProps11504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11504.displayName = 'HeavyComponent11504';
export default HeavyComponent11504;
