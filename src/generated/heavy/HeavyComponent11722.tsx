'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11722<T> = T extends (infer U)[]
  ? DeepReadonlyArray11722<U>
  : T extends object
  ? DeepReadonlyObject11722<T>
  : T;

interface DeepReadonlyArray11722<T> extends ReadonlyArray<DeepReadonly11722<T>> {}

type DeepReadonlyObject11722<T> = {
  readonly [P in keyof T]: DeepReadonly11722<T[P]>;
};

type UnionToIntersection11722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11722<T> = UnionToIntersection11722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11722<T extends unknown[], V> = [...T, V];

type TuplifyUnion11722<T, L = LastOf11722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11722<TuplifyUnion11722<Exclude<T, L>>, L>;

type DeepPartial11722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11722<T[P]> }
  : T;

type Paths11722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11722<K, Paths11722<T[K], Prev11722[D]>> : never }[keyof T]
  : never;

type Prev11722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11722 {
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

type ConfigPaths11722 = Paths11722<NestedConfig11722>;

interface HeavyProps11722 {
  config: DeepPartial11722<NestedConfig11722>;
  path?: ConfigPaths11722;
}

const HeavyComponent11722 = memo(function HeavyComponent11722({ config }: HeavyProps11722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11722.displayName = 'HeavyComponent11722';
export default HeavyComponent11722;
