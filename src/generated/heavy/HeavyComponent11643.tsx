'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11643<T> = T extends (infer U)[]
  ? DeepReadonlyArray11643<U>
  : T extends object
  ? DeepReadonlyObject11643<T>
  : T;

interface DeepReadonlyArray11643<T> extends ReadonlyArray<DeepReadonly11643<T>> {}

type DeepReadonlyObject11643<T> = {
  readonly [P in keyof T]: DeepReadonly11643<T[P]>;
};

type UnionToIntersection11643<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11643<T> = UnionToIntersection11643<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11643<T extends unknown[], V> = [...T, V];

type TuplifyUnion11643<T, L = LastOf11643<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11643<TuplifyUnion11643<Exclude<T, L>>, L>;

type DeepPartial11643<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11643<T[P]> }
  : T;

type Paths11643<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11643<K, Paths11643<T[K], Prev11643[D]>> : never }[keyof T]
  : never;

type Prev11643 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11643<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11643 {
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

type ConfigPaths11643 = Paths11643<NestedConfig11643>;

interface HeavyProps11643 {
  config: DeepPartial11643<NestedConfig11643>;
  path?: ConfigPaths11643;
}

const HeavyComponent11643 = memo(function HeavyComponent11643({ config }: HeavyProps11643) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11643) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11643 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11643: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11643.displayName = 'HeavyComponent11643';
export default HeavyComponent11643;
