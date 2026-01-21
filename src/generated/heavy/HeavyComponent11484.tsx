'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11484<T> = T extends (infer U)[]
  ? DeepReadonlyArray11484<U>
  : T extends object
  ? DeepReadonlyObject11484<T>
  : T;

interface DeepReadonlyArray11484<T> extends ReadonlyArray<DeepReadonly11484<T>> {}

type DeepReadonlyObject11484<T> = {
  readonly [P in keyof T]: DeepReadonly11484<T[P]>;
};

type UnionToIntersection11484<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11484<T> = UnionToIntersection11484<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11484<T extends unknown[], V> = [...T, V];

type TuplifyUnion11484<T, L = LastOf11484<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11484<TuplifyUnion11484<Exclude<T, L>>, L>;

type DeepPartial11484<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11484<T[P]> }
  : T;

type Paths11484<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11484<K, Paths11484<T[K], Prev11484[D]>> : never }[keyof T]
  : never;

type Prev11484 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11484<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11484 {
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

type ConfigPaths11484 = Paths11484<NestedConfig11484>;

interface HeavyProps11484 {
  config: DeepPartial11484<NestedConfig11484>;
  path?: ConfigPaths11484;
}

const HeavyComponent11484 = memo(function HeavyComponent11484({ config }: HeavyProps11484) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11484) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11484 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11484: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11484.displayName = 'HeavyComponent11484';
export default HeavyComponent11484;
