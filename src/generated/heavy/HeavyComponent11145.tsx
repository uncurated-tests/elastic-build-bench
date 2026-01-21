'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11145<T> = T extends (infer U)[]
  ? DeepReadonlyArray11145<U>
  : T extends object
  ? DeepReadonlyObject11145<T>
  : T;

interface DeepReadonlyArray11145<T> extends ReadonlyArray<DeepReadonly11145<T>> {}

type DeepReadonlyObject11145<T> = {
  readonly [P in keyof T]: DeepReadonly11145<T[P]>;
};

type UnionToIntersection11145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11145<T> = UnionToIntersection11145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11145<T extends unknown[], V> = [...T, V];

type TuplifyUnion11145<T, L = LastOf11145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11145<TuplifyUnion11145<Exclude<T, L>>, L>;

type DeepPartial11145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11145<T[P]> }
  : T;

type Paths11145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11145<K, Paths11145<T[K], Prev11145[D]>> : never }[keyof T]
  : never;

type Prev11145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11145 {
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

type ConfigPaths11145 = Paths11145<NestedConfig11145>;

interface HeavyProps11145 {
  config: DeepPartial11145<NestedConfig11145>;
  path?: ConfigPaths11145;
}

const HeavyComponent11145 = memo(function HeavyComponent11145({ config }: HeavyProps11145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11145.displayName = 'HeavyComponent11145';
export default HeavyComponent11145;
