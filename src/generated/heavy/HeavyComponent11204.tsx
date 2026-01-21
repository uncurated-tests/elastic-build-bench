'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11204<T> = T extends (infer U)[]
  ? DeepReadonlyArray11204<U>
  : T extends object
  ? DeepReadonlyObject11204<T>
  : T;

interface DeepReadonlyArray11204<T> extends ReadonlyArray<DeepReadonly11204<T>> {}

type DeepReadonlyObject11204<T> = {
  readonly [P in keyof T]: DeepReadonly11204<T[P]>;
};

type UnionToIntersection11204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11204<T> = UnionToIntersection11204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11204<T extends unknown[], V> = [...T, V];

type TuplifyUnion11204<T, L = LastOf11204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11204<TuplifyUnion11204<Exclude<T, L>>, L>;

type DeepPartial11204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11204<T[P]> }
  : T;

type Paths11204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11204<K, Paths11204<T[K], Prev11204[D]>> : never }[keyof T]
  : never;

type Prev11204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11204 {
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

type ConfigPaths11204 = Paths11204<NestedConfig11204>;

interface HeavyProps11204 {
  config: DeepPartial11204<NestedConfig11204>;
  path?: ConfigPaths11204;
}

const HeavyComponent11204 = memo(function HeavyComponent11204({ config }: HeavyProps11204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11204.displayName = 'HeavyComponent11204';
export default HeavyComponent11204;
