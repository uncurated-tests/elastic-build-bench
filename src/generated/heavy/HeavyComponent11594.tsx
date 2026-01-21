'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11594<T> = T extends (infer U)[]
  ? DeepReadonlyArray11594<U>
  : T extends object
  ? DeepReadonlyObject11594<T>
  : T;

interface DeepReadonlyArray11594<T> extends ReadonlyArray<DeepReadonly11594<T>> {}

type DeepReadonlyObject11594<T> = {
  readonly [P in keyof T]: DeepReadonly11594<T[P]>;
};

type UnionToIntersection11594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11594<T> = UnionToIntersection11594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11594<T extends unknown[], V> = [...T, V];

type TuplifyUnion11594<T, L = LastOf11594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11594<TuplifyUnion11594<Exclude<T, L>>, L>;

type DeepPartial11594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11594<T[P]> }
  : T;

type Paths11594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11594<K, Paths11594<T[K], Prev11594[D]>> : never }[keyof T]
  : never;

type Prev11594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11594 {
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

type ConfigPaths11594 = Paths11594<NestedConfig11594>;

interface HeavyProps11594 {
  config: DeepPartial11594<NestedConfig11594>;
  path?: ConfigPaths11594;
}

const HeavyComponent11594 = memo(function HeavyComponent11594({ config }: HeavyProps11594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11594.displayName = 'HeavyComponent11594';
export default HeavyComponent11594;
