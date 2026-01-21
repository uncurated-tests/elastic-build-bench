'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11837<T> = T extends (infer U)[]
  ? DeepReadonlyArray11837<U>
  : T extends object
  ? DeepReadonlyObject11837<T>
  : T;

interface DeepReadonlyArray11837<T> extends ReadonlyArray<DeepReadonly11837<T>> {}

type DeepReadonlyObject11837<T> = {
  readonly [P in keyof T]: DeepReadonly11837<T[P]>;
};

type UnionToIntersection11837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11837<T> = UnionToIntersection11837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11837<T extends unknown[], V> = [...T, V];

type TuplifyUnion11837<T, L = LastOf11837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11837<TuplifyUnion11837<Exclude<T, L>>, L>;

type DeepPartial11837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11837<T[P]> }
  : T;

type Paths11837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11837<K, Paths11837<T[K], Prev11837[D]>> : never }[keyof T]
  : never;

type Prev11837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11837 {
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

type ConfigPaths11837 = Paths11837<NestedConfig11837>;

interface HeavyProps11837 {
  config: DeepPartial11837<NestedConfig11837>;
  path?: ConfigPaths11837;
}

const HeavyComponent11837 = memo(function HeavyComponent11837({ config }: HeavyProps11837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11837.displayName = 'HeavyComponent11837';
export default HeavyComponent11837;
