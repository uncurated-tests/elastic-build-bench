'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11282<T> = T extends (infer U)[]
  ? DeepReadonlyArray11282<U>
  : T extends object
  ? DeepReadonlyObject11282<T>
  : T;

interface DeepReadonlyArray11282<T> extends ReadonlyArray<DeepReadonly11282<T>> {}

type DeepReadonlyObject11282<T> = {
  readonly [P in keyof T]: DeepReadonly11282<T[P]>;
};

type UnionToIntersection11282<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11282<T> = UnionToIntersection11282<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11282<T extends unknown[], V> = [...T, V];

type TuplifyUnion11282<T, L = LastOf11282<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11282<TuplifyUnion11282<Exclude<T, L>>, L>;

type DeepPartial11282<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11282<T[P]> }
  : T;

type Paths11282<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11282<K, Paths11282<T[K], Prev11282[D]>> : never }[keyof T]
  : never;

type Prev11282 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11282<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11282 {
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

type ConfigPaths11282 = Paths11282<NestedConfig11282>;

interface HeavyProps11282 {
  config: DeepPartial11282<NestedConfig11282>;
  path?: ConfigPaths11282;
}

const HeavyComponent11282 = memo(function HeavyComponent11282({ config }: HeavyProps11282) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11282) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11282 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11282: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11282.displayName = 'HeavyComponent11282';
export default HeavyComponent11282;
