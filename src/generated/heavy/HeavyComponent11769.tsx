'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11769<T> = T extends (infer U)[]
  ? DeepReadonlyArray11769<U>
  : T extends object
  ? DeepReadonlyObject11769<T>
  : T;

interface DeepReadonlyArray11769<T> extends ReadonlyArray<DeepReadonly11769<T>> {}

type DeepReadonlyObject11769<T> = {
  readonly [P in keyof T]: DeepReadonly11769<T[P]>;
};

type UnionToIntersection11769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11769<T> = UnionToIntersection11769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11769<T extends unknown[], V> = [...T, V];

type TuplifyUnion11769<T, L = LastOf11769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11769<TuplifyUnion11769<Exclude<T, L>>, L>;

type DeepPartial11769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11769<T[P]> }
  : T;

type Paths11769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11769<K, Paths11769<T[K], Prev11769[D]>> : never }[keyof T]
  : never;

type Prev11769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11769 {
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

type ConfigPaths11769 = Paths11769<NestedConfig11769>;

interface HeavyProps11769 {
  config: DeepPartial11769<NestedConfig11769>;
  path?: ConfigPaths11769;
}

const HeavyComponent11769 = memo(function HeavyComponent11769({ config }: HeavyProps11769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11769.displayName = 'HeavyComponent11769';
export default HeavyComponent11769;
