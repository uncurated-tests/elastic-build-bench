'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11387<T> = T extends (infer U)[]
  ? DeepReadonlyArray11387<U>
  : T extends object
  ? DeepReadonlyObject11387<T>
  : T;

interface DeepReadonlyArray11387<T> extends ReadonlyArray<DeepReadonly11387<T>> {}

type DeepReadonlyObject11387<T> = {
  readonly [P in keyof T]: DeepReadonly11387<T[P]>;
};

type UnionToIntersection11387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11387<T> = UnionToIntersection11387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11387<T extends unknown[], V> = [...T, V];

type TuplifyUnion11387<T, L = LastOf11387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11387<TuplifyUnion11387<Exclude<T, L>>, L>;

type DeepPartial11387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11387<T[P]> }
  : T;

type Paths11387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11387<K, Paths11387<T[K], Prev11387[D]>> : never }[keyof T]
  : never;

type Prev11387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11387 {
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

type ConfigPaths11387 = Paths11387<NestedConfig11387>;

interface HeavyProps11387 {
  config: DeepPartial11387<NestedConfig11387>;
  path?: ConfigPaths11387;
}

const HeavyComponent11387 = memo(function HeavyComponent11387({ config }: HeavyProps11387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11387.displayName = 'HeavyComponent11387';
export default HeavyComponent11387;
