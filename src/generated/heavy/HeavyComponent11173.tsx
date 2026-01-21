'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11173<T> = T extends (infer U)[]
  ? DeepReadonlyArray11173<U>
  : T extends object
  ? DeepReadonlyObject11173<T>
  : T;

interface DeepReadonlyArray11173<T> extends ReadonlyArray<DeepReadonly11173<T>> {}

type DeepReadonlyObject11173<T> = {
  readonly [P in keyof T]: DeepReadonly11173<T[P]>;
};

type UnionToIntersection11173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11173<T> = UnionToIntersection11173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11173<T extends unknown[], V> = [...T, V];

type TuplifyUnion11173<T, L = LastOf11173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11173<TuplifyUnion11173<Exclude<T, L>>, L>;

type DeepPartial11173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11173<T[P]> }
  : T;

type Paths11173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11173<K, Paths11173<T[K], Prev11173[D]>> : never }[keyof T]
  : never;

type Prev11173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11173 {
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

type ConfigPaths11173 = Paths11173<NestedConfig11173>;

interface HeavyProps11173 {
  config: DeepPartial11173<NestedConfig11173>;
  path?: ConfigPaths11173;
}

const HeavyComponent11173 = memo(function HeavyComponent11173({ config }: HeavyProps11173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11173.displayName = 'HeavyComponent11173';
export default HeavyComponent11173;
