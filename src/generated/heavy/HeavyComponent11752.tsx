'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11752<T> = T extends (infer U)[]
  ? DeepReadonlyArray11752<U>
  : T extends object
  ? DeepReadonlyObject11752<T>
  : T;

interface DeepReadonlyArray11752<T> extends ReadonlyArray<DeepReadonly11752<T>> {}

type DeepReadonlyObject11752<T> = {
  readonly [P in keyof T]: DeepReadonly11752<T[P]>;
};

type UnionToIntersection11752<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11752<T> = UnionToIntersection11752<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11752<T extends unknown[], V> = [...T, V];

type TuplifyUnion11752<T, L = LastOf11752<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11752<TuplifyUnion11752<Exclude<T, L>>, L>;

type DeepPartial11752<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11752<T[P]> }
  : T;

type Paths11752<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11752<K, Paths11752<T[K], Prev11752[D]>> : never }[keyof T]
  : never;

type Prev11752 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11752<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11752 {
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

type ConfigPaths11752 = Paths11752<NestedConfig11752>;

interface HeavyProps11752 {
  config: DeepPartial11752<NestedConfig11752>;
  path?: ConfigPaths11752;
}

const HeavyComponent11752 = memo(function HeavyComponent11752({ config }: HeavyProps11752) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11752) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11752 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11752: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11752.displayName = 'HeavyComponent11752';
export default HeavyComponent11752;
