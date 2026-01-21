'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11424<T> = T extends (infer U)[]
  ? DeepReadonlyArray11424<U>
  : T extends object
  ? DeepReadonlyObject11424<T>
  : T;

interface DeepReadonlyArray11424<T> extends ReadonlyArray<DeepReadonly11424<T>> {}

type DeepReadonlyObject11424<T> = {
  readonly [P in keyof T]: DeepReadonly11424<T[P]>;
};

type UnionToIntersection11424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11424<T> = UnionToIntersection11424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11424<T extends unknown[], V> = [...T, V];

type TuplifyUnion11424<T, L = LastOf11424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11424<TuplifyUnion11424<Exclude<T, L>>, L>;

type DeepPartial11424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11424<T[P]> }
  : T;

type Paths11424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11424<K, Paths11424<T[K], Prev11424[D]>> : never }[keyof T]
  : never;

type Prev11424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11424 {
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

type ConfigPaths11424 = Paths11424<NestedConfig11424>;

interface HeavyProps11424 {
  config: DeepPartial11424<NestedConfig11424>;
  path?: ConfigPaths11424;
}

const HeavyComponent11424 = memo(function HeavyComponent11424({ config }: HeavyProps11424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11424.displayName = 'HeavyComponent11424';
export default HeavyComponent11424;
