'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11086<T> = T extends (infer U)[]
  ? DeepReadonlyArray11086<U>
  : T extends object
  ? DeepReadonlyObject11086<T>
  : T;

interface DeepReadonlyArray11086<T> extends ReadonlyArray<DeepReadonly11086<T>> {}

type DeepReadonlyObject11086<T> = {
  readonly [P in keyof T]: DeepReadonly11086<T[P]>;
};

type UnionToIntersection11086<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11086<T> = UnionToIntersection11086<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11086<T extends unknown[], V> = [...T, V];

type TuplifyUnion11086<T, L = LastOf11086<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11086<TuplifyUnion11086<Exclude<T, L>>, L>;

type DeepPartial11086<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11086<T[P]> }
  : T;

type Paths11086<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11086<K, Paths11086<T[K], Prev11086[D]>> : never }[keyof T]
  : never;

type Prev11086 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11086<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11086 {
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

type ConfigPaths11086 = Paths11086<NestedConfig11086>;

interface HeavyProps11086 {
  config: DeepPartial11086<NestedConfig11086>;
  path?: ConfigPaths11086;
}

const HeavyComponent11086 = memo(function HeavyComponent11086({ config }: HeavyProps11086) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11086) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11086 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11086: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11086.displayName = 'HeavyComponent11086';
export default HeavyComponent11086;
